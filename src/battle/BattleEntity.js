// BattleEntity.js — Base class for any entity in battle (party member or enemy)

import * as THREE from 'three';
import { STATUS_EFFECTS } from '../data/abilities.js';
import { clamp } from '../utils/math.js';

export default class BattleEntity {
  constructor(options = {}) {
    // Identity
    this.name = options.name || 'Entity';
    this.element = options.element || 'physical';
    this.weakTo = options.weakTo || [];
    this.resists = options.resists || [];

    // Base stats
    this.maxHp = options.maxHp || 1;
    this.maxMp = options.maxMp || 0;
    this.atk = options.atk || 1;
    this.def = options.def || 1;
    this.agi = options.agi || 1;
    this.mag = options.mag || 1;

    // Current HP/MP
    this.hp = options.hp !== undefined ? options.hp : this.maxHp;
    this.mp = options.mp !== undefined ? options.mp : this.maxMp;

    // ATB system
    this.atb = 0;
    this.atbGauge = 0; // deprecated, kept for backward compat
    this.atbMultiplier = 1;
    this.isReady = false;

    // State
    this._alive = true;
    this.isDefending = false;

    // Status effects array — each entry: { id, name, duration, statMod, tickDamage, tickHeal, tickMP, skipTurn, wakeOnDamage, atbMultiplier, ... }
    this.statusEffects = [];

    // 3D representation
    this.mesh = new THREE.Group();
    this.position = this.mesh.position;

    // Animation state
    this._flashTimer = 0;
    this._shakeTimer = 0;
  }

  /**
   * Per-frame update: tick status effects, update visual effects.
   * ATB filling is handled by BattleSystem._fillATB().
   * @param {number} dt — delta time in seconds
   */
  update(dt) {
    if (!this._alive) return;

    // Tick status effects
    this._tickStatusEffects(dt);

    // Update visual effects (flash, shake)
    this._updateVisualEffects(dt);
  }

  /**
   * Check if this entity is alive.
   * @returns {boolean}
   */
  isAlive() {
    return this._alive;
  }

  /**
   * Get maximum HP.
   * @returns {number}
   */
  getMaxHP() {
    return this.maxHp;
  }

  /**
   * Get maximum MP.
   * @returns {number}
   */
  getMaxMP() {
    return this.maxMp;
  }

  /**
   * Get a stat value (with status effect modifications).
   * Alias for getStatWithMods.
   * @param {string} key — stat key (atk, def, agi, mag)
   * @returns {number}
   */
  getStat(key) {
    return this.getStatWithMods(key);
  }

  /**
   * Restore MP.
   * @param {number} amount
   * @returns {number} actual amount restored
   */
  restoreMP(amount) {
    if (!this._alive) return 0;
    const before = this.mp;
    this.mp = clamp(this.mp + amount, 0, this.maxMp);
    return this.mp - before;
  }

  /**
   * Revive a fallen entity.
   * @param {number} hp — HP to restore on revive
   */
  revive(hp) {
    this._alive = true;
    this.hp = clamp(hp, 1, this.maxHp);
    this.statusEffects = [];
    this._flashTimer = 0.3;
  }

  /**
   * Tick a specific status effect by one turn (decrement duration).
   * @param {string} statusId
   */
  tickStatus(statusId) {
    const effect = this.statusEffects.find((s) => s.id === statusId);
    if (effect) {
      effect.remaining -= 1;
      if (effect.remaining <= 0) {
        this.removeStatus(statusId);
      }
    }
  }

  /**
   * Tick all status effects: reduce durations, apply tick damage/heal/MP,
   * remove expired effects.
   * @param {number} dt — delta time in seconds
   * @private
   */
  _tickStatusEffects(dt) {
    const expired = [];

    for (const effect of this.statusEffects) {
      // Apply tick effects (per second)
      if (effect.tickDamage && effect.tickDamage > 0) {
        const dmg = Math.max(1, Math.floor(this.maxHp * effect.tickDamage * dt));
        this._applyTickDamage(dmg, effect);
      }
      if (effect.tickHeal && effect.tickHeal > 0) {
        const heal = Math.max(1, Math.floor(this.maxHp * effect.tickHeal * dt));
        this.hp = clamp(this.hp + heal, 0, this.maxHp);
      }
      if (effect.tickMP && effect.tickMP > 0) {
        const mp = Math.max(1, Math.floor(this.maxMp * effect.tickMP * dt));
        this.mp = clamp(this.mp + mp, 0, this.maxMp);
      }

      // Reduce duration (in seconds, minimum 1 second per tick)
      effect.remaining -= dt;
      if (effect.remaining <= 0) {
        expired.push(effect);
      }
    }

    // Remove expired effects
    for (const exp of expired) {
      this.statusEffects = this.statusEffects.filter((s) => s !== exp);
      // Remove atbMultiplier from slow when it expires
      if (exp.atbMultiplier) {
        // atbMultiplier was applied from the status; we recompute below
      }
    }

    // Recompute atbMultiplier from active slow effects
    this._recomputeATBMultiplier();
  }

  /**
   * Recompute the ATB multiplier from active status effects.
   * @private
   */
  _recomputeATBMultiplier() {
    let mult = 1;
    for (const effect of this.statusEffects) {
      if (effect.atbMultiplier) {
        mult *= effect.atbMultiplier;
      }
    }
    this.atbMultiplier = mult;
  }

  /**
   * Apply tick damage (e.g. from burn, poison). Wakes sleeping entities.
   * @param {number} amount
   * @param {object} effect — the status effect causing the damage
   * @private
   */
  _applyTickDamage(amount, effect) {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this._alive = false;
    }
    // Wake on damage if sleeping
    if (effect.id !== 'sleep') {
      this._wakeIfSleeping();
    }
  }

  /**
   * Wake the entity if it's sleeping (called on damage).
   * @private
   */
  _wakeIfSleeping() {
    const sleepEffect = this.statusEffects.find((s) => s.id === 'sleep');
    if (sleepEffect) {
      this.removeStatus('sleep');
    }
  }

  /**
   * Apply damage to this entity. Reduces by 50% if defending.
   * Wakes sleeping entities on damage.
   * @param {number} amount — raw damage amount
   * @returns {number} actual damage dealt
   */
  takeDamage(amount) {
    if (!this._alive) return 0;

    let damage = amount;

    // Defending reduces damage by 50%
    if (this.isDefending) {
      damage = Math.floor(damage * 0.5);
    }

    // Minimum 1 damage if alive
    damage = Math.max(1, damage);

    this.hp -= damage;

    if (this.hp <= 0) {
      this.hp = 0;
      this._alive = false;
      // Clear status effects on death
      this.statusEffects = [];
    } else {
      // Wake on damage
      this._wakeIfSleeping();
      // Trigger flash effect
      this._flashTimer = 0.3;
    }

    return damage;
  }

  /**
   * Heal the entity.
   * @param {number} amount
   * @returns {number} actual heal amount
   */
  heal(amount) {
    if (!this._alive) return 0;
    const before = this.hp;
    this.hp = clamp(this.hp + amount, 0, this.maxHp);
    return this.hp - before;
  }

  /**
   * Spend MP. Returns true if enough MP, false otherwise.
   * @param {number} cost
   * @returns {boolean}
   */
  spendMP(cost) {
    if (this.mp < cost) return false;
    this.mp -= cost;
    return true;
  }

  /**
   * Check if a status effect is currently active.
   * @param {string} id — status effect id
   * @returns {boolean}
   */
  hasStatus(id) {
    return this.statusEffects.some((s) => s.id === id);
  }

  /**
   * Apply a status effect by looking up STATUS_EFFECTS.
   * @param {string} statusId
   * @param {number} [duration] — override default duration (in seconds)
   */
  applyStatus(statusId, duration) {
    const template = STATUS_EFFECTS[statusId];
    if (!template) return;

    // If already has this status, refresh duration (take the longer)
    const existing = this.statusEffects.find((s) => s.id === statusId);
    const dur = duration !== undefined ? duration : (template.duration || 3);

    if (existing) {
      existing.remaining = Math.max(existing.remaining, dur);
      return;
    }

    // Create new status effect instance
    const effect = {
      id: statusId,
      name: template.name,
      color: template.color,
      duration: dur,
      remaining: dur,
      statMod: template.statMod || null,
      tickDamage: template.tickDamage || 0,
      tickHeal: template.tickHeal || 0,
      tickMP: template.tickMP || 0,
      skipTurn: template.skipTurn || false,
      wakeOnDamage: template.wakeOnDamage || false,
      atbMultiplier: template.atbMultiplier || null,
      forcesTarget: template.forcesTarget || false,
      redirectsDamage: template.redirectsDamage || false,
    };

    this.statusEffects.push(effect);
    this._recomputeATBMultiplier();
  }

  /**
   * Remove a status effect by id.
   * @param {string} id
   */
  removeStatus(id) {
    this.statusEffects = this.statusEffects.filter((s) => s.id !== id);
    this._recomputeATBMultiplier();
  }

  /**
   * Get a stat modified by all active status effect statMods.
   * @param {string} stat — stat key (atk, def, agi, mag)
   * @returns {number}
   */
  getStatWithMods(stat) {
    let value = this[stat] || 0;
    for (const effect of this.statusEffects) {
      if (effect.statMod && effect.statMod[stat] !== undefined) {
        value *= effect.statMod[stat];
      }
    }
    return Math.round(value);
  }

  /**
   * Get the ATB fill speed (per second).
   * Considers slow status via atbMultiplier.
   * @returns {number}
   */
  getATBSpeed() {
    return this.agi * 0.3 * this.atbMultiplier;
  }

  /**
   * Reset ATB gauge to 0.
   */
  resetATB() {
    this.atb = 0;
    this.atbGauge = 0;
    this.isReady = false;
  }

  /**
   * Update visual effects on the mesh (flash, shake).
   * @param {number} dt
   * @private
   */
  _updateVisualEffects(dt) {
    if (this._flashTimer > 0) {
      this._flashTimer -= dt;
      const intensity = Math.max(0, this._flashTimer / 0.3);
      // Tint mesh red by setting emissive on child meshes
      this.mesh.traverse((child) => {
        if (child.isMesh && child.material) {
          if (child.material.emissive) {
            child.material.emissive.setRGB(intensity, 0, 0);
          }
        }
      });
    } else {
      // Reset emissive
      this.mesh.traverse((child) => {
        if (child.isMesh && child.material) {
          if (child.material.emissive) {
            child.material.emissive.setRGB(0, 0, 0);
          }
        }
      });
    }
  }

  /**
   * Dispose all mesh resources (geometries and materials).
   */
  dispose() {
    this.mesh.traverse((child) => {
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      }
    });
    // Remove from parent
    if (this.mesh.parent) {
      this.mesh.parent.remove(this.mesh);
    }
    this.statusEffects = [];
  }
}
