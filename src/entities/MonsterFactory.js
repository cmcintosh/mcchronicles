// MonsterFactory.js — Factory to create Enemy battle entities from monster data

import { MONSTERS, MONSTER_TIERS } from '../data/monsters.js';
import { ABILITIES } from '../data/abilities.js';
import { uuid, clamp } from '../utils/math.js';

// Stat scaling multipliers per level above 1
const SCALE_MULTIPLIERS = {
  hp: 1.15,
  mp: 1.12,
  atk: 1.10,
  def: 1.10,
  agi: 1.08,
  mag: 1.10,
};

export class MonsterFactory {
  /**
   * Create a single enemy entity from monster data, scaled by levelScale.
   * @param {string} monsterId - Key into MONSTERS
   * @param {number} [levelScale=1] - Level scaling factor
   * @returns {object} Enemy entity
   */
  static create(monsterId, levelScale = 1) {
    const data = MONSTERS[monsterId];
    if (!data) {
      throw new Error(`Unknown monster: ${monsterId}`);
    }

    // Scale each stat by its multiplier
    const scaledHp = this.scaleStat(data.stats.hp, levelScale, SCALE_MULTIPLIERS.hp);
    const scaledMp = this.scaleStat(data.stats.mp, levelScale, SCALE_MULTIPLIERS.mp);
    const scaledAtk = this.scaleStat(data.stats.atk, levelScale, SCALE_MULTIPLIERS.atk);
    const scaledDef = this.scaleStat(data.stats.def, levelScale, SCALE_MULTIPLIERS.def);
    const scaledAgi = this.scaleStat(data.stats.agi, levelScale, SCALE_MULTIPLIERS.agi);
    const scaledMag = this.scaleStat(data.stats.mag, levelScale, SCALE_MULTIPLIERS.mag);

    // Look up full ability objects
    const abilities = (data.abilities || [])
      .map((abilityId) => ABILITIES[abilityId])
      .filter((a) => a !== undefined);

    // Scale XP and gold rewards
    const xp = Math.floor(data.xp * Math.pow(1.2, levelScale - 1));
    const gold = Math.floor(data.gold * Math.pow(1.15, levelScale - 1));

    return {
      id: uuid(),
      monsterId: data.id,
      name: data.name,
      tier: data.tier,
      stats: {
        hp: scaledHp,
        maxHp: scaledHp,
        mp: scaledMp,
        maxMp: scaledMp,
        atk: scaledAtk,
        def: scaledDef,
        agi: scaledAgi,
        mag: scaledMag,
      },
      element: data.element,
      weakTo: [...(data.weakTo || [])],
      resists: [...(data.resists || [])],
      abilities,
      xp,
      gold,
      drops: data.drops ? data.drops.map((d) => ({ ...d })) : [],
      color: data.color,
      size: data.size,
      shape: data.shape,
      isAlive: true,
      statusEffects: [],
      levelScale,
    };
  }

  /**
   * Create an encounter (array of enemy entities) from monster ids.
   * @param {string[]} monsterIds
   * @param {number} [levelScale=1]
   * @returns {object[]} Array of enemy entities
   */
  static createEncounter(monsterIds, levelScale = 1) {
    return monsterIds.map((monsterId) => this.create(monsterId, levelScale));
  }

  /**
   * Get mesh/visual data for a monster (for AssetManager).
   * @param {string} monsterId
   * @returns {{color: number, size: number, shape: string, monsterId: string, name: string}}
   */
  static getMeshData(monsterId) {
    const data = MONSTERS[monsterId];
    if (!data) {
      throw new Error(`Unknown monster: ${monsterId}`);
    }
    return {
      color: data.color,
      size: data.size,
      shape: data.shape,
      monsterId: data.id,
      name: data.name,
    };
  }

  /**
   * Scale a stat by level using a multiplier.
   * @param {number} baseStat
   * @param {number} levelScale
   * @param {number} multiplier
   * @returns {number}
   */
  static scaleStat(baseStat, levelScale, multiplier) {
    return Math.floor(baseStat * Math.pow(multiplier, levelScale - 1));
  }

  /**
   * Roll for drops based on monster drop chances.
   * @param {string} monsterId
   * @returns {string[]} Array of item ids that dropped
   */
  static getDrop(monsterId) {
    const data = MONSTERS[monsterId];
    if (!data || !data.drops || data.drops.length === 0) {
      return [];
    }

    const dropped = [];
    for (const drop of data.drops) {
      if (Math.random() < drop.chance) {
        dropped.push(drop.item);
      }
    }
    return dropped;
  }
}

export default MonsterFactory;
