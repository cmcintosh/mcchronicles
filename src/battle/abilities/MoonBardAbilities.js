// MoonBardAbilities.js — Mac Tonight's ability subclasses
// Each subclass extends Ability and overrides execute() for custom battle behaviour + particles.

import * as THREE from 'three';
import Ability from './Ability.js';
import { ABILITIES, ELEMENTS } from '../../data/abilities.js';

// ──────────────────────────────────────────────
//  Moon Melody — party ATK up
// ──────────────────────────────────────────────
class MoonMelodyAbility extends Ability {
  constructor() {
    super(ABILITIES.moon_melody);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Musical notes with moon glow rising from each party member
      this.createParticleEffect(battleSystem, 'moon_note', target.position, 0xccccff, 14);
      this.createParticleEffect(battleSystem, 'moon_note', target.position, 0x2a2a4a, 8);
    }

    // Lingering moon melody aura
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'moon_melody_aura',
        position: user.position.clone(),
        color: 0xccccff,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Nightjam — enemy ATK down
// ──────────────────────────────────────────────
class NightjamAbility extends Ability {
  constructor() {
    super(ABILITIES.nightjam);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    // Dark jam/sound wave particles expanding from Mac Tonight
    if (user.position) {
      this.createParticleEffect(battleSystem, 'dark_soundwave', user.position, 0x6633aa, 18);
      this.createParticleEffect(battleSystem, 'dark_soundwave', user.position, 0x2a2a4a, 12);
    }

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Dark jam splash on each enemy
      this.createParticleEffect(battleSystem, 'dark_jam', target.position, 0x6633aa, 10);
      this.createParticleEffect(battleSystem, 'dark_jam', target.position, 0x2a2a4a, 6);
    }

    // Expanding dark ring
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'dark_wave',
        position: user.position.clone(),
        color: 0x6633aa,
        radius: 6,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Mac Jazz — party MP regen
// ──────────────────────────────────────────────
class MacJazzAbility extends Ability {
  constructor() {
    super(ABILITIES.mac_jazz);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Blue jazz note particles floating around each party member
      this.createParticleEffect(battleSystem, 'jazz_note', target.position, 0x4488ff, 14);
      this.createParticleEffect(battleSystem, 'jazz_note', target.position, 0x66aaff, 8);
    }

    // Jazz club aura
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'jazz_aura',
        position: user.position.clone(),
        color: 0x4488ff,
        radius: 5,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Moonlight Serenade — enemy sleep + minor party heal
// ──────────────────────────────────────────────
class MoonlightSerenadeAbility extends Ability {
  constructor() {
    super(ABILITIES.moonlight_serenade);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    // Moonlight beam particles on each enemy
    for (const target of targetList) {
      if (target.position) {
        const beamStart = new THREE.Vector3(target.position.x, target.position.y + 5, target.position.z);
        const beamEnd = target.position.clone ? target.position.clone() : new THREE.Vector3(target.position.x, target.position.y, target.position.z);
        if (typeof battleSystem.addParticleEffect === 'function') {
          battleSystem.addParticleEffect({
            type: 'moonlight_beam',
            start: beamStart,
            end: beamEnd,
            color: 0xaaaaff,
            width: 0.3,
          });
        }
      }

      // Apply sleep status
      this.applyStatus(target, this.status);

      // Gentle moonlight particles on enemy
      this.createParticleEffect(battleSystem, 'moonlight_glow', target.position, 0xaaaaff, 10);
    }

    // Minor party heal — heal all allies (including user)
    if (battleSystem && typeof battleSystem.getParty === 'function') {
      const party = battleSystem.getParty();
      for (const ally of party) {
        if (ally.hp <= 0) continue;
        const healAmount = this.calculateHealing(user, ally);
        ally.heal(healAmount);

        // Gentle heal particles on party
        this.createParticleEffect(battleSystem, 'gentle_heal', ally.position, 0x88ffaa, 8);
        this.createParticleEffect(battleSystem, 'gentle_heal', ally.position, 0xccccff, 6);
      }
    }

    // Serenade aura
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'serenade_aura',
        position: user.position.clone(),
        color: 0xaaaaff,
        radius: 6,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Blue Moon — single target heal + regen
// ──────────────────────────────────────────────
class BlueMoonAbility extends Ability {
  constructor() {
    super(ABILITIES.blue_moon);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      const healAmount = this.calculateHealing(user, target);
      target.heal(healAmount);

      // Apply regen
      this.applyStatus(target, this.status);

      // Blue moon glow particles enveloping target
      this.createParticleEffect(battleSystem, 'blue_moon_glow', target.position, 0x4466ff, 18);
      this.createParticleEffect(battleSystem, 'blue_moon_glow', target.position, 0xaaaaff, 12);

      // Rising moon sparkles
      this.createParticleEffect(battleSystem, 'moon_sparkle', target.position, 0xccccff, 10);
    }

    // Moon glow effect
    if (battleSystem && typeof battleSystem.addEffect === 'function' && targetList.length > 0) {
      const pos = targetList[0].position;
      battleSystem.addEffect({
        type: 'blue_moon_aura',
        position: pos.clone ? pos.clone() : new THREE.Vector3(pos.x, pos.y, pos.z),
        color: 0x4466ff,
        radius: 3,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Midnight Blues — enemy ATK + DEF down
// ──────────────────────────────────────────────
class MidnightBluesAbility extends Ability {
  constructor() {
    super(ABILITIES.midnight_blues);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    // Dark blue wave particles sweeping from Mac Tonight
    if (user.position) {
      this.createParticleEffect(battleSystem, 'blues_wave', user.position, 0x2244aa, 20);
      this.createParticleEffect(battleSystem, 'blues_wave', user.position, 0x6633aa, 14);
    }

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Dark blue impact on each enemy
      this.createParticleEffect(battleSystem, 'dark_blue_impact', target.position, 0x2244aa, 12);
      this.createParticleEffect(battleSystem, 'dark_blue_impact', target.position, 0x6633aa, 8);
    }

    // Expanding blues ring
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'blues_ring',
        position: user.position.clone(),
        color: 0x2244aa,
        radius: 7,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Eclipse — enemy stun + AGI down
// ──────────────────────────────────────────────
class EclipseAbility extends Ability {
  constructor() {
    super(ABILITIES.eclipse);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    // Eclipse/shadow particles descending over all enemies
    if (user.position) {
      this.createParticleEffect(battleSystem, 'eclipse_shadow', user.position, 0x110022, 24);
      this.createParticleEffect(battleSystem, 'eclipse_shadow', user.position, 0x6633aa, 16);
    }

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Shadow enveloping each enemy
      this.createParticleEffect(battleSystem, 'shadow_envelope', target.position, 0x110022, 10);
      this.createParticleEffect(battleSystem, 'shadow_envelope', target.position, 0x2a2a4a, 6);
    }

    // Eclipse effect over battlefield
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'eclipse_aura',
        position: user.position.clone(),
        color: 0x2a2a4a,
        radius: 8,
      });
    }
  }
}

// ──────────────────────────────────────────────
//  Moon Sonata — party ATK + DEF + AGI up
// ──────────────────────────────────────────────
class MoonSonataAbility extends Ability {
  constructor() {
    super(ABILITIES.moon_sonata);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];

    for (const target of targetList) {
      this.applyStatus(target, this.status);

      // Grand musical/moon particles around each party member
      this.createParticleEffect(battleSystem, 'sonata_note', target.position, 0x4466ff, 12);
      this.createParticleEffect(battleSystem, 'sonata_note', target.position, 0xccccff, 8);
    }

    // Grand moonlight aura surrounding party
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'moon_sonata_aura',
        position: user.position.clone(),
        color: 0x4466ff,
        radius: 7,
      });
    }

    // Expanding moonlight ring
    if (user.position) {
      this.createParticleEffect(battleSystem, 'moonlight_ring', user.position, 0xaaaaff, 28);
      this.createParticleEffect(battleSystem, 'moonlight_ring', user.position, 0xccccff, 18);
    }
  }
}

// ──────────────────────────────────────────────
//  Lunar Eclipse — ultimate AoE + stun + ATK + DEF down
// ──────────────────────────────────────────────
class LunarEclipseAbility extends Ability {
  constructor() {
    super(ABILITIES.lunar_eclipse);
  }

  execute(user, targets, battleSystem) {
    const targetList = Array.isArray(targets) ? targets : [targets];
    const darkColor = ELEMENTS.dark.color;

    // Massive lunar eclipse shadow descending
    if (user.position) {
      this.createParticleEffect(battleSystem, 'lunar_eclipse_shadow', user.position, 0x110011, 40);
      this.createParticleEffect(battleSystem, 'lunar_eclipse_shadow', user.position, darkColor, 24);
    }

    for (const target of targetList) {
      const damage = this.calculateDamage(user, target);
      target.takeDamage(damage);

      // Apply stun, ATK down, DEF down
      this.applyStatus(target, this.status);

      // Shadow + damage particles on each enemy
      this.createParticleEffect(battleSystem, 'lunar_damage', target.position, darkColor, 16);
      this.createParticleEffect(battleSystem, 'lunar_damage', target.position, 0x110011, 10);
    }

    // Massive dark burst effect over battlefield
    if (battleSystem && typeof battleSystem.addEffect === 'function' && user.position) {
      battleSystem.addEffect({
        type: 'lunar_eclipse_burst',
        position: user.position.clone(),
        color: darkColor,
        radius: 10,
      });
    }

    // Expanding shockwave particles
    if (user.position) {
      this.createParticleEffect(battleSystem, 'shockwave', user.position, 0x2a2a4a, 30);
      this.createParticleEffect(battleSystem, 'shockwave', user.position, darkColor, 20);
    }
  }
}

// ──────────────────────────────────────────────
//  Export
// ──────────────────────────────────────────────
export const MoonBardAbilities = {
  moon_melody: new MoonMelodyAbility(),
  nightjam: new NightjamAbility(),
  mac_jazz: new MacJazzAbility(),
  moonlight_serenade: new MoonlightSerenadeAbility(),
  blue_moon: new BlueMoonAbility(),
  midnight_blues: new MidnightBluesAbility(),
  eclipse: new EclipseAbility(),
  moon_sonata: new MoonSonataAbility(),
  lunar_eclipse: new LunarEclipseAbility(),
};

export default MoonBardAbilities;
