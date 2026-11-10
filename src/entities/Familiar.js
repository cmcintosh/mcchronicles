// Familiar.js — Fry Kid familiars that provide stat bonuses

import { uuid, SeededRandom, randomChoice } from '../utils/math.js';

// Familiar element types
export const FAMILIAR_TYPES = [
  'fire', 'ice', 'water', 'earth', 'holy', 'dark', 'air',
];

// Stat bonus types
export const FAMILIAR_BONUS_TYPES = [
  'hp', 'mp', 'atk', 'def', 'agi', 'mag', 'luck',
];

// McDonald's-themed names per element
const FAMILIAR_NAMES = {
  fire: ['Blaze Fry', 'Ember Nugget', 'Sizzle Kid'],
  ice: ['Frost Fry', 'Glacial Nugget', 'Chilly Kid'],
  water: ['Splash Fry', 'Aqua Nugget', 'Drip Kid'],
  earth: ['Stone Fry', 'Quake Nugget', 'Dirt Kid'],
  holy: ['Golden Fry', 'Blessed Nugget', 'Halo Kid'],
  dark: ['Shadow Fry', 'Midnight Nugget', 'Shade Kid'],
  air: ['Gust Fry', 'Breeze Nugget', 'Cloud Kid'],
};

// Pool of possible active ability ids for familiils (simple utility abilities)
const FAMILIAR_ABILITIES = [
  'fry_storm', 'ketchup_heal', 'feather_darts', 'moon_melody',
  'big_mac_smash', 'grimace_slam', 'breakfast_blitz', 'nightjam',
];

export class Familiar {
  /**
   * Create a Fry Kid familiar.
   * @param {object} config
   * @param {string} [config.id] - Optional UUID (generated if not provided)
   * @param {string} config.type - Element type (fire, ice, etc.)
   * @param {string} config.bonusType - Stat to boost (hp, mp, atk, etc.)
   * @param {number} [config.level=1] - Starting level
   * @param {string} [config.abilityId] - Optional active ability id
   * @param {string} [config.name] - Optional name (generated if not provided)
   */
  constructor(config) {
    if (!config.type || !FAMILIAR_TYPES.includes(config.type)) {
      throw new Error(`Invalid familiar type: ${config.type}`);
    }
    if (!config.bonusType || !FAMILIAR_BONUS_TYPES.includes(config.bonusType)) {
      throw new Error(`Invalid bonus type: ${config.bonusType}`);
    }

    this.id = config.id || uuid();
    this.type = config.type;
    this.bonusType = config.bonusType;
    this.level = config.level || 1;
    this.abilityId = config.abilityId || null;
    this.isEquipped = false;
    this.equippedTo = null;

    // Generate or use provided name
    if (config.name) {
      this.name = config.name;
    } else {
      const names = FAMILIAR_NAMES[this.type];
      this.name = names[Math.floor(Math.random() * names.length)];
    }

    // Compute bonus amount: base 5 + level * 2
    this.bonusAmount = 5 + this.level * 2;
  }

  /**
   * Create a random Fry Kid familiar using a seeded RNG.
   * @param {number} seed - Seed for deterministic generation
   * @returns {Familiar}
   */
  static createRandom(seed) {
    const rng = new SeededRandom(seed);

    const type = rng.choice(FAMILIAR_TYPES);
    const bonusType = rng.choice(FAMILIAR_BONUS_TYPES);

    // 30% chance for an active ability
    let abilityId = null;
    if (rng.chance(0.3)) {
      abilityId = rng.choice(FAMILIAR_ABILITIES);
    }

    // Generate name from type-based list using seeded RNG
    const names = FAMILIAR_NAMES[type];
    const name = rng.choice(names);

    return new Familiar({
      type,
      bonusType,
      level: 1,
      abilityId,
      name,
    });
  }

  /**
   * Get the stat bonus this familiar provides.
   * @returns {object} e.g. { atk: 7 }
   */
  getBonus() {
    return { [this.bonusType]: this.bonusAmount };
  }

  /**
   * Level up the familiar, increasing its bonus.
   * @returns {number} New bonus amount
   */
  levelUp() {
    this.level += 1;
    this.bonusAmount = 5 + this.level * 2;
    return this.bonusAmount;
  }

  /**
   * Equip this familiar to a character.
   * @param {string} characterId
   */
  equip(characterId) {
    this.isEquipped = true;
    this.equippedTo = characterId;
  }

  /**
   * Unequip this familiar.
   */
  unequip() {
    this.isEquipped = false;
    this.equippedTo = null;
  }

  /**
   * Serialize to plain object.
   * @returns {object}
   */
  toData() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      bonusType: this.bonusType,
      bonusAmount: this.bonusAmount,
      level: this.level,
      abilityId: this.abilityId,
      isEquipped: this.isEquipped,
      equippedTo: this.equippedTo,
    };
  }

  /**
   * Restore a Familiar from serialized data.
   * @param {object} data
   * @returns {Familiar}
   */
  static fromData(data) {
    const familiar = new Familiar({
      id: data.id,
      type: data.type,
      bonusType: data.bonusType,
      level: data.level,
      abilityId: data.abilityId,
      name: data.name,
    });
    familiar.isEquipped = data.isEquipped;
    familiar.equippedTo = data.equippedTo;
    familiar.bonusAmount = data.bonusAmount;
    return familiar;
  }
}

export default Familiar;
