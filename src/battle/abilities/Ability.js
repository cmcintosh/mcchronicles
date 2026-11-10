// Ability.js — Base Ability class for the McChronicles JRPG battle system

import * as THREE from 'three';
import { ELEMENTS, STATUS_EFFECTS, ABILITY_TYPES } from '../../data/abilities.js';
import { clamp } from '../../utils/math.js';

/**
 * Base Ability class. Subclasses override execute() for custom behaviour.
 * @param {object} data — An entry from the ABILITIES table.
 */
export default class Ability {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.character = data.character || null;
    this.type = data.type;
    this.element = data.element;
    this.mpCost = data.mpCost ?? 0;
    this.power = data.power ?? 0;
    this.target = data.target; // 'enemy', 'enemies', 'ally', 'allies', 'self'
    this.status = data.status || [];
    this.description = data.description || '';
    this.unlockLevel = data.unlockLevel ?? 1;
    this.hits = data.hits || 1;
    this.priority = data.priority || false;
    this.drainMP = data.drainMP || 0;
  }

  // ──────────────────────────────────────────────
  //  Main entry point — overridden by subclasses
  // ──────────────────────────────────────────────
  execute(user, targets, battleSystem) {
    // Default generic implementation — damage or heal based on type
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      if (this.type === ABILITY_TYPES.HEAL) {
        const amount = this.calculateHealing(user, target);
        target.heal(amount);
        this.createParticleEffect(battleSystem, 'heal', target.position, 0x44ff44, 12);
      } else if (this.power > 0) {
        const damage = this.calculateDamage(user, target);
        target.takeDamage(damage);
        this.createParticleEffect(
          battleSystem,
          'hit',
          target.position,
          ELEMENTS[this.element]?.color ?? 0xffffff,
          10,
        );
      }

      if (this.status.length > 0) {
        this.applyStatus(target, this.status);
      }
    }
  }

  // ──────────────────────────────────────────────
  //  Damage / Healing
  // ──────────────────────────────────────────────

  /**
   * damage = user.atk * power * elementMultiplier - target.def * 0.5  (min 1)
   */
  calculateDamage(user, target) {
    const atk = user.getStatWithMods('atk');
    const def = target.getStatWithMods('def');
    const elementMultiplier = this.applyElementMultiplier(
      1,
      this.element,
      target,
    );
    const raw = atk * this.power * elementMultiplier - def * 0.5;
    return Math.max(1, Math.floor(raw));
  }

  /**
   * healing = user.mag * power  (min 1)
   */
  calculateHealing(user, target) {
    const mag = user.getStatWithMods('mag');
    return Math.max(1, Math.floor(mag * this.power));
  }

  // ──────────────────────────────────────────────
  //  Status Effects
  // ──────────────────────────────────────────────

  /**
   * Push status-effect objects onto the target's activeStatuses array.
   * Each entry references the STATUS_EFFECTS template and carries an
   * remainingTurns counter initialised from the template duration.
   */
  applyStatus(target, statusIds) {
    if (!target.activeStatuses) target.activeStatuses = [];

    for (const id of statusIds) {
      const template = STATUS_EFFECTS[id];
      if (!template) continue;

      // Don't stack the same status — refresh duration instead
      const existing = target.activeStatuses.find((s) => s.id === id);
      if (existing) {
        existing.remainingTurns = template.duration;
        continue;
      }

      target.activeStatuses.push({
        id,
        name: template.name,
        color: template.color,
        remainingTurns: template.duration,
        statMod: template.statMod || null,
        tickDamage: template.tickDamage || 0,
        tickHeal: template.tickHeal || 0,
        tickMP: template.tickMP || 0,
        skipTurn: template.skipTurn || false,
        wakeOnDamage: template.wakeOnDamage || false,
        forcesTarget: template.forcesTarget || false,
        redirectsDamage: template.redirectsDamage || false,
        atbMultiplier: template.atbMultiplier || 1,
      });
    }
  }

  // ──────────────────────────────────────────────
  //  Element Multiplier
  // ──────────────────────────────────────────────

  /**
   * Checks the target's weakTo / resists arrays and scales damage accordingly.
   * weakTo → 2× multiplier, resists → 0.5× multiplier.
   * @param {number} damage  — incoming damage amount
   * @param {string} element — element key from ELEMENTS
   * @param {object} targetData — the target (combatant or raw monster data)
   * @returns {number} scaled damage multiplier (1 if neutral)
   */
  applyElementMultiplier(damage, element, targetData) {
    if (!element || !targetData) return 1;

    const weakTo = targetData.weakTo || targetData.data?.weakTo || [];
    const resists = targetData.resists || targetData.data?.resists || [];

    let multiplier = 1;
    if (weakTo.includes(element)) multiplier *= 2;
    if (resists.includes(element)) multiplier *= 0.5;

    return multiplier;
  }

  // ──────────────────────────────────────────────
  //  Particle Effects
  // ──────────────────────────────────────────────

  /**
   * Delegates to battleSystem.addParticleEffect (or createParticleEffect).
   * Falls back gracefully if the battle system doesn't expose either method.
   */
  createParticleEffect(battleSystem, type, position, color, count = 10) {
    if (!battleSystem) return;

    const pos = position
      ? (position.clone ? position.clone() : new THREE.Vector3(position.x, position.y, position.z))
      : new THREE.Vector3(0, 0, 0);

    const effectData = { type, position: pos, color, count };

    if (typeof battleSystem.addParticleEffect === 'function') {
      battleSystem.addParticleEffect(effectData);
    } else if (typeof battleSystem.createParticleEffect === 'function') {
      battleSystem.createParticleEffect(type, pos, color, count);
    }
  }
}
