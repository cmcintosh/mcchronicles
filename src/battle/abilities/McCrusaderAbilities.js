// McCrusaderAbilities.js — Officer Big Mac's ability subclasses
// Each subclass extends Ability and overrides execute() for custom battle behaviour + particles.

import * as THREE from 'three';
import Ability from './Ability.js';
import { ABILITIES, ELEMENTS } from '../../data/abilities.js';

// ──────────────────────────────────────────────
//  Big Mac Smash — holy single-target attack
// ──────────────────────────────────────────────
class BigMacSmashAbility extends Ability {
  constructor() {
    super(ABILITIES.big_mac_smash);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Holy light beam particle from above onto target
      if (target.position) {
        const beamStart = new THREE.Vector3(target.position.x, target.position.y + 6, target.position.z);
        const beamEnd = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect({
            type: 'holy_beam',
            start: beamStart,
            end: beamEnd,
            color: holyColor,
            width: 0.4,
          });
        }
      }

      // Impact glow on target
      this.createParticleEffect(battleSystem, 'holy_impact', target.position, holyColor, 14);
      this.createParticleEffect(battleSystem, 'holy_impact', target.position, 0xffd700, 10);
    }
  }
}

// ──────────────────────────────────────────────
//  Sesame Shield — party DEF up
// ──────────────────────────────────────────────
class SesameShieldAbility extends Ability {
  constructor() {
    super(ABILITIES.sesame_shield);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Sesame seed shield particles around each party member
      this.createParticleEffect(battleSystem, 'sesame_shield', target.position, 0xffd700, 16);
      this.createParticleEffect(battleSystem, 'sesame_shield', target.position, 0x8b4513, 10);
    }

    // Party-wide shield dome
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'sesame_dome',
        position: user.position.clone(),
        color: 0xffd700,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  McGriddle Charge — rush single-target attack
// ──────────────────────────────────────────────
class McGriddleChargeAbility extends Ability {
  constructor() {
    super(ABILITIES.mcgriddle_charge);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Charging trail particles from Big Mac to target
      if (user.position && target.position) {
        const startPos = user.position.clone ? user.position.clone() : new THREE.Vector3(user.position.x, user.position.y, user.position.z);
        const endPos = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect({
            type: 'charge_trail',
            start: startPos,
            end: endPos,
            color: holyColor,
            width: 0.3,
          });
        }
      }

      // Impact burst at target
      this.createParticleEffect(battleSystem, 'impact_burst', target.position, 0xffd700, 14);
      this.createParticleEffect(battleSystem, 'impact_burst', target.position, 0xffffff, 8);
    }
  }
}

// ──────────────────────────────────────────────
//  Special Sauce Smite — holy AoE
// ──────────────────────────────────────────────
class SpecialSauceSmiteAbility extends Ability {
  constructor() {
    super(ABILITIES.special_sauce_smite);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Sauce splash particles on each enemy
      this.createParticleEffect(battleSystem, 'sauce_splash', target.position, 0x8b0000, 14);
      this.createParticleEffect(battleSystem, 'sauce_splash', target.position, holyColor, 10);
    }

    // Holy smite aura
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'holy_smite',
        position: user.position.clone(),
        color: holyColor,
        radius: 6,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Lettuce Wall — party DEF + regen
// ──────────────────────────────────────────────
class LettuceWallAbility extends Ability {
  constructor() {
    super(ABILITIES.lettuce_wall);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Green lettuce wall particles around each party member
      this.createParticleEffect(battleSystem, 'lettuce_wall', target.position, 0x44ff44, 16);
      this.createParticleEffect(battleSystem, 'lettuce_wall', target.position, 0x88cc44, 10);
    }

    // Party-wide wall effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'lettuce_barrier',
        position: user.position.clone(),
        color: 0x44ff44,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Triple Stack — 3-hit single-target
// ──────────────────────────────────────────────
class TripleStackAbility extends Ability {
  constructor() {
    super(ABILITIES.triple_stack);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      for (let i = 0; i < this.hits; i++) {
        const damage = this.calculateDamage(user, target);
        target.takeDamage(damage);

        // Three stacked impact particles — each progressively bigger
        this.createParticleEffect(battleSystem, 'stack_impact', target.position, holyColor, 8 + i * 3);
        this.createParticleEffect(battleSystem, 'stack_impact', target.position, 0xffd700, 6 + i * 2);
      }
    }

    // Final combined impact
    if (targetList.length > 0 && targetList[0].position) {
      this.createParticleEffect(battleSystem, 'triple_impact', targetList[0].position, holyColor, 20);
    }
  }
}

// ──────────────────────────────────────────────
//  Sesame Sanctuary — party DEF + regen
// ──────────────────────────────────────────────
class SesameSanctuaryAbility extends Ability {
  constructor() {
    super(ABILITIES.sesame_sanctuary);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Golden sanctuary sparkles on each party member
      this.createParticleEffect(battleSystem, 'golden_sparkle', target.position, 0xffd700, 12);
      this.createParticleEffect(battleSystem, 'golden_sparkle', target.position, 0xffffaa, 8);
    }

    // Golden sanctuary dome over entire party
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'sanctuary_dome',
        position: user.position.clone(),
        color: 0xffd700,
        radius: 7,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Big Mac Judgment — single-target + DEF down
// ──────────────────────────────────────────────
class BigMacJudgmentAbility extends Ability {
  constructor() {
    super(ABILITIES.big_mac_judgment);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply DEF down
      this.applyStatus(target, this.status);

      // Judgment gavel particles — holy light from above
      if (target.position) {
        const beamStart = new THREE.Vector3(target.position.x, target.position.y + 5, target.position.z);
        const beamEnd = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect({
            type: 'judgment_gavel',
            start: beamStart,
            end: beamEnd,
            color: holyColor,
            width: 0.5,
          });
        }
      }

      // Holy impact
      this.createParticleEffect(battleSystem, 'holy_impact', target.position, holyColor, 18);

      // Crack effect spreading from impact point
      this.createParticleEffect(battleSystem, 'crack_effect', target.position, 0x444444, 14);
      this.createParticleEffect(battleSystem, 'crack_effect', target.position, holyColor, 8);
    }
  }
}

// ──────────────────────────────────────────────
//  Special Sauce Storm — ultimate holy AoE + DEF down
// ──────────────────────────────────────────────
class SpecialSauceStormAbility extends Ability {
  constructor() {
    super(ABILITIES.special_sauce_storm);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const holyColor = ELEMENTS.holy.color;

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply DEF down
      this.applyStatus(target, this.status);

      // Sauce splatter on each enemy
      this.createParticleEffect(battleSystem, 'sauce_splatter', target.position, 0x8b0000, 16);
      this.createParticleEffect(battleSystem, 'sauce_splatter', target.position, holyColor, 10);
    }

    // Massive sauce storm — swirling holy particles over battlefield
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'sauce_storm',
        position: user.position.clone(),
        color: holyColor,
        radius: 10,
      });
    }

    // Secondary holy burst particles
    if (user.position) {
      this.createParticleEffect(battleSystem, 'holy_burst', user.position, holyColor, 30);
      this.createParticleEffect(battleSystem, 'holy_burst', user.position, 0xffd700, 20);
    }
  }
}

// ──────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────
export const McCrusaderAbilities = {
  big_mac_smash: new BigMacSmashAbility(),
  sesame_shield: new SesameShieldAbility(),
  mcgriddle_charge: new McGriddleChargeAbility(),
  special_sauce_smite: new SpecialSauceSmiteAbility(),
  lettuce_wall: new LettuceWallAbility(),
  triple_stack: new TripleStackAbility(),
  sesame_sanctuary: new SesameSanctuaryAbility(),
  big_mac_judgment: new BigMacJudgmentAbility(),
  special_sauce_storm: new SpecialSauceStormAbility(),
};

export default McCrusaderAbilities;
