// Enemy.js — An enemy entity in battle, with simple AI

import * as THREE from 'three';
import { MONSTERS } from '../data/monsters.js';
import { ABILITIES } from '../data/abilities.js';
import BattleEntity from './BattleEntity.js';
import { randomChoice, randomChance } from '../utils/math.js';

export default class Enemy extends BattleEntity {
  /**
   * @param {string} monsterId — key into MONSTERS
   * @param {number} [levelScale=1] — multiplier for stats
   */
  constructor(monsterId, levelScale = 1) {
    const monster = MONSTERS[monsterId];
    if (!monster) {
      throw new Error(`Unknown monster: ${monsterId}`);
    }

    // Apply level scaling to stats
    const scaledStats = {};
    for (const [key, val] of Object.entries(monster.stats)) {
      scaledStats[key] = Math.round(val * levelScale);
    }

    super({
      name: monster.name,
      element: monster.element || 'physical',
      weakTo: monster.weakTo || [],
      resists: monster.resists || [],
      maxHp: scaledStats.hp,
      maxMp: scaledStats.mp,
      atk: scaledStats.atk,
      def: scaledStats.def,
      agi: scaledStats.agi,
      mag: scaledStats.mag,
    });

    this.monsterId = monsterId;
    this.monster = monster;
    this.levelScale = levelScale;
    this.tier = monster.tier || 'normal';
    this.color = monster.color || 0x888888;
    this.size = monster.size || 1.0;
    this.shape = monster.shape || 'blob';
    this.description = monster.description || '';

    // Abilities the enemy can use
    this.abilities = monster.abilities || [];
    this.abilityObjects = this.abilities.map((id) => ABILITIES[id]).filter(Boolean);

    // Drops and rewards
    this.dropTable = monster.drops || [];
    this.xpReward = monster.xp || 0;
    this.goldReward = monster.gold || 0;

    this.isAlive = true;

    // Create placeholder mesh
    this._createMesh();
  }

  /**
   * Create a placeholder mesh based on monster shape and color.
   * @private
   */
  _createMesh() {
    const group = new THREE.Group();
    const color = this.color;
    const size = this.size;

    // Choose geometry based on shape
    let bodyGeo;
    switch (this.shape) {
      case 'nugget':
      case 'sprite':
        bodyGeo = new THREE.DodecahedronGeometry(0.5 * size, 0);
        break;
      case 'drone':
        bodyGeo = new THREE.BoxGeometry(0.7 * size, 0.5 * size, 0.7 * size);
        break;
      case 'goblin':
        bodyGeo = new THREE.ConeGeometry(0.4 * size, 1.0 * size, 8);
        break;
      case 'rogue':
        bodyGeo = new THREE.CapsuleGeometry(0.35 * size, 0.8 * size, 6, 12);
        break;
      case 'knight':
        bodyGeo = new THREE.CylinderGeometry(0.4 * size, 0.5 * size, 1.2 * size, 8);
        break;
      case 'wraith':
      case 'spirit':
        bodyGeo = new THREE.ConeGeometry(0.5 * size, 1.4 * size, 12);
        break;
      case 'siren':
        bodyGeo = new THREE.SphereGeometry(0.45 * size, 12, 10);
        break;
      case 'golem':
      case 'sentinel':
        bodyGeo = new THREE.BoxGeometry(0.9 * size, 1.1 * size, 0.9 * size);
        break;
      case 'slime':
      case 'ooze':
        bodyGeo = new THREE.SphereGeometry(0.55 * size, 12, 8);
        // Flatten the sphere a bit
        bodyGeo.scale(1, 0.7, 1);
        break;
      case 'harpy':
      case 'fairy':
        bodyGeo = new THREE.OctahedronGeometry(0.5 * size, 0);
        break;
      case 'dragon':
        bodyGeo = new THREE.ConeGeometry(0.6 * size, 1.5 * size, 6);
        break;
      case 'brute':
      case 'bandit':
        bodyGeo = new THREE.CapsuleGeometry(0.5 * size, 1.0 * size, 8, 12);
        break;
      case 'colossus':
        bodyGeo = new THREE.CylinderGeometry(0.7 * size, 0.8 * size, 1.8 * size, 10);
        break;
      case 'king':
      case 'titan':
        bodyGeo = new THREE.DodecahedronGeometry(0.65 * size, 0);
        break;
      case 'mage':
        bodyGeo = new THREE.ConeGeometry(0.45 * size, 1.3 * size, 10);
        break;
      case 'monster':
        bodyGeo = new THREE.IcosahedronGeometry(0.55 * size, 0);
        break;
      case 'boss':
        bodyGeo = new THREE.IcosahedronGeometry(0.8 * size, 1);
        break;
      default:
        bodyGeo = new THREE.SphereGeometry(0.5 * size, 12, 10);
    }

    const bodyMat = new THREE.MeshToonMaterial({ color: color });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.6 * size;
    group.add(body);

    // Add eyes (two small dark spheres)
    const eyeGeo = new THREE.SphereGeometry(0.08 * size, 8, 6);
    const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.15 * size, 0.8 * size, 0.35 * size);
    group.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.15 * size, 0.8 * size, 0.35 * size);
    group.add(rightEye);

    // Shadow disc
    const shadowGeo = new THREE.CircleGeometry(0.5 * size, 16);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
    });
    const shadow = new THREE.Mesh(shadowGeo, shadowMat);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = 0.01;
    group.add(shadow);

    group.userData.entity = this;
    this.mesh = group;
    this.position = this.mesh.position;
  }

  /**
   * Simple AI: choose an action for this enemy's turn.
   * @param {BattleEntity[]} party — alive party members
   * @param {BattleEntity[]} enemies — alive enemies (allies of this enemy)
   * @returns {{type: string, abilityId: string, targetIndex: number}|{type: string, abilityId: string, targets: number[]}}
   */
  chooseAction(party, enemies) {
    const aliveParty = party.filter((p) => p.isAlive);
    const aliveAllies = enemies.filter((e) => e.isAlive);

    if (aliveParty.length === 0) {
      return { type: 'attack', abilityId: this.abilities[0] || 'enemy_bite', targetIndex: 0 };
    }

    // Categorize available abilities
    const healAbilities = this.abilityObjects.filter((a) => a.type === 'heal');
    const buffAbilities = this.abilityObjects.filter((a) => a.type === 'buff');
    const debuffAbilities = this.abilityObjects.filter((a) => a.type === 'debuff');
    const attackAbilities = this.abilityObjects.filter(
      (a) => a.type === 'attack' || a.type === 'aoe' || a.type === 'ultimate'
    );

    // 1. If HP < 30% and has a heal ability, heal self or weakest ally
    if (healAbilities.length > 0 && this.hp < this.maxHp * 0.3) {
      const healAbility = healAbilities[0];
      // Find weakest ally (lowest HP percentage)
      const weakestAlly = aliveAllies.reduce((min, e) =>
        (e.hp / e.maxHp) < (min.hp / min.maxHp) ? e : min
      );
      const allyIndex = enemies.indexOf(weakestAlly);
      return {
        type: 'ability',
        abilityId: healAbility.id,
        targetIndex: allyIndex,
      };
    }

    // 2. If has buff ability and no buff active on self, use buff
    if (buffAbilities.length > 0) {
      const hasBuff = this.statusEffects.some((s) =>
        s.statMod !== null
      );
      if (!hasBuff) {
        const buffAbility = buffAbilities[0];
        // Buff may target self or allies
        if (buffAbility.target === 'allies') {
          return {
            type: 'ability',
            abilityId: buffAbility.id,
            targets: aliveAllies.map((e) => enemies.indexOf(e)),
          };
        }
        const selfIndex = enemies.indexOf(this);
        return {
          type: 'ability',
          abilityId: buffAbility.id,
          targetIndex: selfIndex,
        };
      }
    }

    // 3. If has debuff ability and no debuff active on targets, use debuff
    if (debuffAbilities.length > 0) {
      // Check if any party member already has the debuff status
      const debuffAbility = debuffAbilities[0];
      const debuffStatuses = debuffAbility.status || [];
      const allDebuffed = aliveParty.every((p) =>
        debuffStatuses.every((s) => p.hasStatus(s))
      );
      if (!allDebuffed) {
        if (debuffAbility.target === 'enemies') {
          return {
            type: 'ability',
            abilityId: debuffAbility.id,
            targets: aliveParty.map((p) => party.indexOf(p)),
          };
        }
        // Single target debuff
        const target = randomChoice(aliveParty);
        return {
          type: 'ability',
          abilityId: debuffAbility.id,
          targetIndex: party.indexOf(target),
        };
      }
    }

    // 4. Otherwise, attack — prefer taunted targets, else random
    const tauntTargets = aliveParty.filter((p) => p.hasStatus('taunt'));

    let target;
    if (tauntTargets.length > 0) {
      target = randomChoice(tauntTargets);
    } else {
      target = randomChoice(aliveParty);
    }

    const targetIndex = party.indexOf(target);

    // Pick an attack ability if available, otherwise basic attack
    let abilityId;
    if (attackAbilities.length > 0) {
      // 70% chance to use the strongest available attack, 30% random
      if (randomChance(0.7)) {
        abilityId = attackAbilities.reduce((best, a) =>
          (a.power || 1) > (best.power || 1) ? a : best
        ).id;
      } else {
        abilityId = randomChoice(attackAbilities).id;
      }
    } else {
      // Fallback to first ability or basic bite
      abilityId = this.abilities[0] || 'enemy_bite';
    }

    // If the ability targets 'enemies' (AoE), return targets array
    const ability = ABILITIES[abilityId];
    if (ability && ability.target === 'enemies') {
      return {
        type: 'ability',
        abilityId: abilityId,
        targets: aliveParty.map((p) => party.indexOf(p)),
      };
    }

    return {
      type: 'ability',
      abilityId: abilityId,
      targetIndex: targetIndex,
    };
  }

  /**
   * Roll drop chances and return array of item IDs.
   * @returns {string[]}
   */
  getDrops() {
    const drops = [];
    for (const drop of this.dropTable) {
      if (randomChance(drop.chance)) {
        drops.push(drop.item);
      }
    }
    return drops;
  }

  /**
   * Get XP reward, scaled by level.
   * @returns {number}
   */
  getXPReward() {
    return Math.round(this.xpReward * this.levelScale);
  }

  /**
   * Get gold reward, scaled by level.
   * @returns {number}
   */
  getGoldReward() {
    return Math.round(this.goldReward * this.levelScale);
  }

  /**
   * Dispose mesh and clean up.
   */
  dispose() {
    super.dispose();
  }
}
