// SkyScoutAbilities.js — Birdie the Early Bird's ability subclasses
// Each subclass extends Ability and overrides execute() for custom battle behaviour + particles.

import * as THREE from 'three';
import Ability from './Ability.js';
import { ABILITIES, ELEMENTS } from '../../data/abilities.js';

// ──────────────────────────────────────────────
//  Feather Darts — 3-hit ranged attack on single enemy
// ──────────────────────────────────────────────
class FeatherDartsAbility extends Ability {
  constructor() {
    super(ABILITIES.feather_darts);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const airColor = ELEMENTS.air.color;

    for (const target of targetList) {
      for (let i = 0; i < this.hits; i++) {
        const damage = this.calculateDamage(user, target);
        target.takeDamage(damage);

        // Small feather dart particles streaking toward target per hit
        this.createParticleEffect(battleSystem, 'feather_dart', target.position, airColor, 6);
        this.createParticleEffect(battleSystem, 'feather_dart', target.position, 0xff69b4, 4);
      }
    }
  }
}

// ──────────────────────────────────────────────
//  Breakfast Blitz — priority single-target fast attack
// ──────────────────────────────────────────────
class BreakfastBlitzAbility extends Ability {
  constructor() {
    super(ABILITIES.breakfast_blitz);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Speed line particles rushing at target
      this.createParticleEffect(battleSystem, 'speed_lines', target.position, 0xffff00, 16);
      this.createParticleEffect(battleSystem, 'speed_lines', target.position, 0xff69b4, 10);
    }

    // Speed trail from Birdie to target
    if (user.position && targetList.length > 0) {
      const startPos = user.position.clone ? user.position.clone() : new THREE.Vector3(user.position.x, user.position.y, user.position.z);
      const endPos = targetList[0].position.clone ? targetList[0].position.clone() : new THREE.Vector3(targetList[0].position.x, targetList[0].position.y, targetList[0].position.z);
      if (typeof battleSystem.addParticleEffect === 'function') {
        battleSystem.addParticleEffect({
          type: 'speed_trail',
          start: startPos,
          end: endPos,
          color: 0xffff00,
          width: 0.2,
        });
      }
    }
  }
}

// ──────────────────────────────────────────────
//  Egg Bomb — AoE + ATK down
// ──────────────────────────────────────────────
class EggBombAbility extends Ability {
  constructor() {
    super(ABILITIES.egg_bomb);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply ATK down status
      this.applyStatus(target, this.status);

      // Explosive egg particles — white/yellow burst at each enemy
      this.createParticleEffect(battleSystem, 'egg_burst', target.position, 0xffffff, 18);
      this.createParticleEffect(battleSystem, 'egg_burst', target.position, 0xffdd44, 12);
    }

    // Central explosion effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'egg_explosion',
        position: user.position.clone(),
        color: 0xffffff,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Morning Song — party AGI up
// ──────────────────────────────────────────────
class MorningSongAbility extends Ability {
  constructor() {
    super(ABILITIES.morning_song);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Musical note particles floating up from each party member
      this.createParticleEffect(battleSystem, 'musical_note', target.position, 0xff69b4, 12);
      this.createParticleEffect(battleSystem, 'musical_note', target.position, 0xffff00, 8);
    }

    // Lingering song aura
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'song_aura',
        position: user.position.clone(),
        color: 0xff69b4,
        radius: 4,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Dive Bomb — heavy single-target
// ──────────────────────────────────────────────
class DiveBombAbility extends Ability {
  constructor() {
    super(ABILITIES.dive_bomb);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const airColor = ELEMENTS.air.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Bird-shaped particle diving from above onto target
      if (target.position) {
        const diveStart = new THREE.Vector3(target.position.x, target.position.y + 5, target.position.z);
        const diveEnd = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect({
            type: 'dive_bomb',
            start: diveStart,
            end: diveEnd,
            color: airColor,
            width: 0.4,
          });
        }
      }

      // Impact burst on landing
      this.createParticleEffect(battleSystem, 'impact_burst', target.position, 0xffffff, 14);
      this.createParticleEffect(battleSystem, 'impact_burst', target.position, 0xff69b4, 10);
    }
  }
}

// ──────────────────────────────────────────────
//  Dawn Chorus — AoE AGI down
// ──────────────────────────────────────────────
class DawnChorusAbility extends Ability {
  constructor() {
    super(ABILITIES.dawn_chorus);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    // Sound wave particles expanding from Birdie
    if (user.position) {
      this.createParticleEffect(battleSystem, 'sound_wave', user.position, 0xff69b4, 20);
      this.createParticleEffect(battleSystem, 'sound_wave', user.position, 0xffff00, 14);
    }

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Secondary sound ripple at each enemy
      this.createParticleEffect(battleSystem, 'sound_ripple', target.position, 0xff69b4, 8);
    }

    // Expanding ring effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'sound_ring',
        position: user.position.clone(),
        color: 0xff69b4,
        radius: 6,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Sky Dance — party ATK + AGI up
// ──────────────────────────────────────────────
class SkyDanceAbility extends Ability {
  constructor() {
    super(ABILITIES.sky_dance);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Swirling wind/dance particles around each party member
      this.createParticleEffect(battleSystem, 'wind_swirl', target.position, 0xaaffcc, 16);
      this.createParticleEffect(battleSystem, 'wind_swirl', target.position, 0xffff00, 10);
    }

    // Party-wide dance aura
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'dance_aura',
        position: user.position.clone(),
        color: 0xaaffcc,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Hurricane Feathers — 2-hit AoE
// ──────────────────────────────────────────────
class HurricaneFeathersAbility extends Ability {
  constructor() {
    super(ABILITIES.hurricane_feathers);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const airColor = ELEMENTS.air.color;

    for (let h = 0; h < this.hits; h++) {
      for (const target of targetList) {
        const damage = this.calculateDamage(user, target);
        target.takeDamage(damage);

        // Hurricane feather particles at each enemy per hit
        this.createParticleEffect(battleSystem, 'hurricane_feather', target.position, airColor, 18);
        this.createParticleEffect(battleSystem, 'hurricane_feather', target.position, 0xff69b4, 12);
      }
    }

    // Massive hurricane storm effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'hurricane_storm',
        position: user.position.clone(),
        color: airColor,
        radius: 8,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Sunny Side Up — ultimate holy AoE + burn + ATK down
// ──────────────────────────────────────────────
class SunnySideUpAbility extends Ability {
  constructor() {
    super(ABILITIES.sunny_side_up);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply burn and ATK down
      this.applyStatus(target, this.status);

      // Burn flames on each enemy
      this.createParticleEffect(battleSystem, 'burn_flames', target.position, 0xff4400, 12);
      this.createParticleEffect(battleSystem, 'burn_flames', target.position, 0xffaa00, 8);
    }

    // Massive sun/burst holy particle effect centered on battlefield
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'solar_burst',
        position: user.position.clone(),
        color: holyColor,
        radius: 10,
      });
    }

    // Secondary holy ring expanding outward
    if (user.position) {
      this.createParticleEffect(battleSystem, 'holy_ring', user.position, holyColor, 30);
      this.createParticleEffect(battleSystem, 'holy_burst', user.position, 0xffdd44, 24);
    }
  }
}

// ──────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────
export const SkyScoutAbilities = {
  feather_darts: new FeatherDartsAbility(),
  breakfast_blitz: new BreakfastBlitzAbility(),
  egg_bomb: new EggBombAbility(),
  morning_song: new MorningSongAbility(),
  dive_bomb: new DiveBombAbility(),
  dawn_chorus: new DawnChorusAbility(),
  sky_dance: new SkyDanceAbility(),
  hurricane_feathers: new HurricaneFeathersAbility(),
  sunny_side_up: new SunnySideUpAbility(),
};

export default SkyScoutAbilities;
