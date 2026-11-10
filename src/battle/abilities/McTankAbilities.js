// McTankAbilities.js — Grimace's ability subclasses

import * as THREE from 'three';
import Ability from './Ability.js';
import { ABILITIES, ELEMENTS } from '../../data/abilities.js';

// ──────────────────────────────────────────────
//  Grimace Slam — heavy melee single-target
// ──────────────────────────────────────────────
class GrimaceSlamAbility extends Ability {
  constructor() {
    super(ABILITIES.grimace_slam);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Ground shake particles — dust ring expanding from target
      this.createParticleEffect(battleSystem, 'dust_ring', target.position, 0x8b6914, 20);
      this.createParticleEffect(battleSystem, 'dust_puff', target.position, 0xc4a86a, 12);

      // Screen shake
      if (battleSystem && typeof battleSystem.addEffect === 'function') {
        battleSystem.addEffect({ type: 'screen_shake', intensity: 0.3, duration: 0.4 });
      }
    }
  }
}

// ──────────────────────────────────────────────
//  Purple Body — taunt + DEF buff on self
// ──────────────────────────────────────────────
class PurpleBodyAbility extends Ability {
  constructor() {
    super(ABILITIES.purple_body);
  }

  execute(user, targets, battleSystem) {
    // Self-targeted — apply to user
    const self = Array.isArray(targets) ? targets[0] : targets;

    this.applyStatus(self, this.status);

    // Purple aura particles around Grimace
    this.createParticleEffect(battleSystem, 'aura_pulse', self.position, 0x9933cc, 24);
    this.createParticleEffect(battleSystem, 'aura_swirl', self.position, 0xbb44dd, 16);

    // Lingering aura effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && self.position) {
      battleSystem.addEffect({
        type: 'purple_aura',
        position: self.position.clone(),
        color: 0x9933cc,
        radius: 2.5,
        duration: 2,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Grimace Guard — cover an ally
// ──────────────────────────────────────────────
class GrimaceGuardAbility extends Ability {
  constructor() {
    super(ABILITIES.grimace_guard);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Greenish shield mesh particles on the covered ally
      this.createParticleEffect(battleSystem, 'shield_mesh', target.position, 0x44ff44, 18);
      this.createParticleEffect(battleSystem, 'shield_glow', target.position, 0x66dd66, 10);

      // Link line from Grimace to ally
      if (user.position && target.position && typeof battleSystem.addEffect === 'function') {
        battleSystem.addEffect({
          type: 'cover_link',
          start: user.position.clone(),
          end: target.position.clone(),
          color: 0x44ff44,
        });
      }
    }
  }
}

// ──────────────────────────────────────────────
//  Shake Quake — AoE earth + stun
// ──────────────────────────────────────────────
class ShakeQuakeAbility extends Ability {
  constructor() {
    super(ABILITIES.shake_quake);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const earthColor = ELEMENTS.earth.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply stun
      this.applyStatus(target, this.status);

      // Shockwave particles — expanding ring on ground
      this.createParticleEffect(battleSystem, 'shockwave_ring', target.position, earthColor, 16);
    }

    // Central ground shockwave
    if (user.position && battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({
        type: 'ground_shockwave',
        position: user.position.clone(),
        color: earthColor,
        radius: 6,
        duration: 0.6,
      });
    }

    // Screen shake for the quake
    if (battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({ type: 'screen_shake', intensity: 0.4, duration: 0.5 });
    }
  }
}

// ──────────────────────────────────────────────
//  Purple Pound — heavy melee + DEF down
// ──────────────────────────────────────────────
class PurplePoundAbility extends Ability {
  constructor() {
    super(ABILITIES.purple_pound);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply DEF down
      this.applyStatus(target, this.status);

      // Purple impact particles
      this.createParticleEffect(battleSystem, 'impact_burst', target.position, 0x9933cc, 22);
      this.createParticleEffect(battleSystem, 'impact_shockwave', target.position, 0xbb44dd, 14);

      // Small dust ring
      this.createParticleEffect(battleSystem, 'dust_ring', target.position, 0x8b6914, 10);
    }

    if (battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({ type: 'screen_shake', intensity: 0.25, duration: 0.3 });
    }
  }
}

// ──────────────────────────────────────────────
//  Grimace Roar — AoE ATK down
// ──────────────────────────────────────────────
class GrimaceRoarAbility extends Ability {
  constructor() {
    super(ABILITIES.grimace_roar);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      // Apply ATK down to all enemies
      this.applyStatus(target, this.status);

      // Purple wave particles hitting each enemy
      this.createParticleEffect(battleSystem, 'wave_hit', target.position, 0x9933cc, 12);
    }

    // Purple wave emanating outward from Grimace
    if (user.position && battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({
        type: 'purple_wave',
        position: user.position.clone(),
        color: 0x9933cc,
        radius: 7,
        duration: 0.8,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Shake Storm — AoE earth + slow
// ──────────────────────────────────────────────
class ShakeStormAbility extends Ability {
  constructor() {
    super(ABILITIES.shake_storm);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const earthColor = ELEMENTS.earth.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply slow
      this.applyStatus(target, this.status);

      // Milkshake-themed particles — brown/white swirling
      this.createParticleEffect(battleSystem, 'milkshake_swirl', target.position, 0x8b6914, 18);
      this.createParticleEffect(battleSystem, 'milkshake_swirl', target.position, 0xffffff, 12);
      this.createParticleEffect(battleSystem, 'cream_splash', target.position, 0xddccaa, 10);
    }

    // Storm cloud effect over the battlefield
    if (user.position && battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({
        type: 'shake_storm_cloud',
        position: user.position.clone(),
        color: earthColor,
        radius: 8,
        duration: 1.2,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Grimace Fortress — party DEF + cover (on self)
// ──────────────────────────────────────────────
class GrimaceFortressAbility extends Ability {
  constructor() {
    super(ABILITIES.grimace_fortress);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    // Apply def_up to all allies
    for (const target of targetList) {
      this.applyStatus(target, ['def_up']);
    }

    // Apply cover specifically to Grimace (the user/self)
    this.applyStatus(user, ['cover']);

    // Fortress wall particles around the entire party
    if (user.position && battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({
        type: 'fortress_wall',
        position: user.position.clone(),
        color: 0x9933cc,
        radius: 6,
        duration: 1.5,
      });
    }

    // Purple wall particles on each ally
    for (const target of targetList) {
      this.createParticleEffect(battleSystem, 'fortress_shield', target.position, 0x9933cc, 14);
      this.createParticleEffect(battleSystem, 'fortress_shield', target.position, 0xbb44dd, 8);
    }

    // Stronger aura on Grimace himself
    this.createParticleEffect(battleSystem, 'aura_pulse', user.position, 0x9933cc, 20);
  }
}

// ──────────────────────────────────────────────
//  Purple Titan — ultimate AoE + stun + DEF down
// ──────────────────────────────────────────────
class PurpleTitanAbility extends Ability {
  constructor() {
    super(ABILITIES.purple_titan);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply stun + DEF down
      this.applyStatus(target, this.status);

      // Impact particles at each enemy
      this.createParticleEffect(battleSystem, 'titan_impact', target.position, 0x9933cc, 25);
      this.createParticleEffect(battleSystem, 'titan_impact', target.position, 0xdd44ff, 15);
    }

    // Massive purple titan shockwave
    if (user.position && battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({
        type: 'titan_shockwave',
        position: user.position.clone(),
        color: 0x9933cc,
        radius: 10,
        duration: 1.0,
      });
    }

    // Titan rise effect — Grimace grows
    if (user.position) {
      this.createParticleEffect(battleSystem, 'titan_rise', user.position, 0x9933cc, 30);
      this.createParticleEffect(battleSystem, 'titan_rise', user.position, 0xffcc00, 16);
    }

    // Heavy screen shake
    if (battleSystem && typeof battleSystem.addEffect === 'function') {
      battleSystem.addEffect({ type: 'screen_shake', intensity: 0.6, duration: 0.8 });
    }
  }
}

// ──────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────
export const McTankAbilities = {
  grimace_slam: new GrimaceSlamAbility(),
  purple_body: new PurpleBodyAbility(),
  grimace_guard: new GrimaceGuardAbility(),
  shake_quake: new ShakeQuakeAbility(),
  purple_pound: new PurplePoundAbility(),
  grimace_roar: new GrimaceRoarAbility(),
  shake_storm: new ShakeStormAbility(),
  grimace_fortress: new GrimaceFortressAbility(),
  purple_titan: new PurpleTitanAbility(),
};

export default McTankAbilities;
