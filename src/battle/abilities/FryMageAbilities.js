// FryMageAbilities.js — Ronald McDonald's ability subclasses

import * as THREE from 'three';
import Ability from './Ability.js';
import { ABILITIES, ELEMENTS } from '../../data/abilities.js';

// ──────────────────────────────────────────────
//  Fry Storm — fire AoE
// ──────────────────────────────────────────────
class FryStormAbility extends Ability {
  constructor() {
    super(ABILITIES.fry_storm);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const fireColor = ELEMENTS.fire.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Fire particle burst at each target position
      this.createParticleEffect(battleSystem, 'fire_burst', target.position, fireColor, 20);
      this.createParticleEffect(battleSystem, 'fire_burst', target.position, 0xff6600, 12);
    }

    // Central fire column effect
    if (user.position) {
      this.createParticleEffect(battleSystem, 'fire_column', user.position, fireColor, 15);
    }
  }
}

// ──────────────────────────────────────────────
//  Ketchup Heal — single-target heal
// ──────────────────────────────────────────────
class KetchupHealAbility extends Ability {
  constructor() {
    super(ABILITIES.ketchup_heal);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const amount = this.calculateHealing(user, target);
      target.heal(amount);

      // Red healing particles swirling around the ally
      this.createParticleEffect(battleSystem, 'heal_rising', target.position, 0xcc0000, 16);
      this.createParticleEffect(battleSystem, 'heal_rising', target.position, 0xff3333, 10);
    }
  }
}

// ──────────────────────────────────────────────
//  Mustard Shield — DEF buff on single ally
// ──────────────────────────────────────────────
class MustardShieldAbility extends Ability {
  constructor() {
    super(ABILITIES.mustard_shield);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Yellow shield-like particles around the ally
      this.createParticleEffect(battleSystem, 'shield_dome', target.position, 0xffdd00, 18);
      this.createParticleEffect(battleSystem, 'shield_sparkle', target.position, 0xffcc00, 10);
    }
  }
}

// ──────────────────────────────────────────────
//  Fry Lance — piercing single-target fire
// ──────────────────────────────────────────────
class FryLanceAbility extends Ability {
  constructor() {
    super(ABILITIES.fry_lance);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Lance-shaped particle beam from user to target
      if (user.position && target.position) {
        const beamStart = user.position.clone ? user.position.clone() : new THREE.Vector3(user.position.x, user.position.y, user.position.z);
        const beamEnd = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        const beamData = {
          type: 'lance_beam',
          start: beamStart,
          end: beamEnd,
          color: ELEMENTS.fire.color,
          width: 0.3,
        };

        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect(beamData);
        } else if (typeof battleSystem.createParticleEffect === 'function') {
          battleSystem.createParticleEffect('lance_beam', beamStart, ELEMENTS.fire.color, 25);
        }
      }

      // Impact burst at target
      this.createParticleEffect(battleSystem, 'fire_impact', target.position, 0xff6600, 15);
    }
  }
}

// ──────────────────────────────────────────────
//  Ketchup Splash — party heal
// ──────────────────────────────────────────────
class KetchupSplashAbility extends Ability {
  constructor() {
    super(ABILITIES.ketchup_splash);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const amount = this.calculateHealing(user, target);
      target.heal(amount);

      // Wave-like red particles across each party member
      this.createParticleEffect(battleSystem, 'heal_wave', target.position, 0xcc0000, 14);
      this.createParticleEffect(battleSystem, 'heal_wave', target.position, 0xff4444, 8);
    }

    // Broad wave effect across the party area
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'ketchup_wave',
        position: user.position.clone(),
        color: 0xcc0000,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Happy Meal — full party heal + regen
// ──────────────────────────────────────────────
class HappyMealAbility extends Ability {
  constructor() {
    super(ABILITIES.happy_meal);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const amount = this.calculateHealing(user, target);
      target.heal(amount);

      // Apply regen status
      this.applyStatus(target, this.status);

      // Golden burst particles around each ally
      this.createParticleEffect(battleSystem, 'golden_burst', target.position, 0xffdd44, 20);
      this.createParticleEffect(battleSystem, 'golden_burst', target.position, 0xffffaa, 12);
    }

    // Central golden glow
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'golden_aura',
        position: user.position.clone(),
        color: 0xffdd44,
        radius: 6,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Mustard Barrier — party DEF buff
// ──────────────────────────────────────────────
class MustardBarrierAbility extends Ability {
  constructor() {
    super(ABILITIES.mustard_barrier);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Yellow barrier particles around each ally
      this.createParticleEffect(battleSystem, 'barrier_dome', target.position, 0xffdd00, 14);
      this.createParticleEffect(battleSystem, 'barrier_sparkle', target.position, 0xffcc00, 8);
    }

    // Party-wide barrier wall effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'mustard_barrier',
        position: user.position.clone(),
        color: 0xffdd00,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Golden Fry Lance — ultimate single-target fire + burn
// ──────────────────────────────────────────────
class GoldenFryLanceAbility extends Ability {
  constructor() {
    super(ABILITIES.golden_fry_lance);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply burn status
      this.applyStatus(target, this.status);

      // Golden lance beam from user to target
      if (user.position && target.position) {
        const beamStart = user.position.clone ? user.position.clone() : new THREE.Vector3(user.position.x, user.position.y, user.position.z);
        const beamEnd = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        const beamData = {
          type: 'golden_lance_beam',
          start: beamStart,
          end: beamEnd,
          color: 0xffdd00,
          width: 0.5,
        };

        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect(beamData);
        }
      }

      // Explosion at target
      this.createParticleEffect(battleSystem, 'golden_explosion', target.position, 0xffdd00, 30);
      this.createParticleEffect(battleSystem, 'fire_explosion', target.position, 0xff6600, 20);
    }
  }
}

// ──────────────────────────────────────────────
//  McFlurry Blizzard — ultimate ice AoE + freeze
// ──────────────────────────────────────────────
class McFlurryBlizzardAbility extends Ability {
  constructor() {
    super(ABILITIES.mc_flurry_blizzard);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const iceColor = ELEMENTS.ice.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply freeze status
      this.applyStatus(target, this.status);

      // Ice storm particles at each enemy
      this.createParticleEffect(battleSystem, 'ice_shard', target.position, iceColor, 22);
      this.createParticleEffect(battleSystem, 'ice_shard', target.position, 0xaaddff, 14);
    }

    // Party-wide ice storm effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'blizzard_storm',
        position: user.position.clone(),
        color: iceColor,
        radius: 8,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────
export const FryMageAbilities = {
  fry_storm: new FryStormAbility(),
  ketchup_heal: new KetchupHealAbility(),
  mustard_shield: new MustardShieldAbility(),
  fry_lance: new FryLanceAbility(),
  ketchup_splash: new KetchupSplashAbility(),
  happy_meal: new HappyMealAbility(),
  mustard_barrier: new MustardBarrierAbility(),
  golden_fry_lance: new GoldenFryLanceAbility(),
  mc_flurry_blizzard: new McFlurryBlizzardAbility(),
};

export default FryMageAbilities;
