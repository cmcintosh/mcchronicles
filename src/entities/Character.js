// Character.js — Base character class for party members

import { CHARACTERS } from '../data/characters.js';
import { ITEMS } from '../data/items.js';
import { ABILITIES } from '../data/abilities.js';
import { xpForLevel, levelFromXP, clamp } from '../utils/math.js';

export class Character {
  /**
   * Create a new party character from CHARACTERS data.
   * @param {string} characterId - Key into CHARACTERS (e.g. 'ronald')
   */
  constructor(characterId) {
    const data = CHARACTERS[characterId];
    if (!data) {
      throw new Error(`Unknown character: ${characterId}`);
    }

    this.id = data.id;
    this.name = data.name;
    this.level = 1;
    this.xp = 0;

    // Store base stats and growth for recalculation
    this.baseStats = { ...data.baseStats };
    this.growth = { ...data.growth };

    // Equipment slots
    this.equipment = {
      weapon: null,
      armor: null,
      accessory: null,
    };

    // Abilities unlocked so far (populated for level 1)
    this.abilityTree = data.abilityTree || [];
    this.abilities = this.abilityTree
      .filter((entry) => entry.level <= this.level)
      .map((entry) => entry.ability);

    // Status effects (temporary, battle-only)
    this.statusEffects = [];

    // Element
    this.element = data.element;

    // Living state
    this.isAlive = true;
    this.isDowned = false;

    // Reference to full character data for portrait/colors/etc
    this.characterData = data;

    // Compute stats
    this.stats = {};
    this.recalculateStats();

    // Set current HP/MP to max after first calculation
    this.stats.hp = this.stats.maxHp;
    this.stats.mp = this.stats.maxMp;
  }

  /**
   * Recalculate stats from baseStats + growth + equipment.
   * Sets maxHp, maxMp, atk, def, agi, mag.
   * Clamps current hp/mp to new maximums.
   */
  recalculateStats() {
    const lvlMinusOne = this.level - 1;

    // Base from growth
    const computed = {
      hp: this.baseStats.hp + this.growth.hp * lvlMinusOne,
      mp: this.baseStats.mp + this.growth.mp * lvlMinusOne,
      atk: this.baseStats.atk + this.growth.atk * lvlMinusOne,
      def: this.baseStats.def + this.growth.def * lvlMinusOne,
      agi: this.baseStats.agi + this.growth.agi * lvlMinusOne,
      mag: this.baseStats.mag + this.growth.mag * lvlMinusOne,
    };

    // Add equipment bonuses
    const bonus = this.getEquipmentBonus();
    computed.hp += bonus.hp || 0;
    computed.mp += bonus.mp || 0;
    computed.atk += bonus.atk || 0;
    computed.def += bonus.def || 0;
    computed.agi += bonus.agi || 0;
    computed.mag += bonus.mag || 0;

    // Round to integers
    const maxHp = Math.floor(computed.hp);
    const maxMp = Math.floor(computed.mp);

    // Preserve current hp/mp ratio if stats already exist, otherwise set to max
    const oldHp = this.stats.hp ?? maxHp;
    const oldMp = this.stats.mp ?? maxMp;

    this.stats = {
      hp: clamp(oldHp, 0, maxHp),
      maxHp,
      mp: clamp(oldMp, 0, maxMp),
      maxMp,
      atk: Math.floor(computed.atk),
      def: Math.floor(computed.def),
      agi: Math.floor(computed.agi),
      mag: Math.floor(computed.mag),
    };
  }

  /**
   * Equip an item. Item must have a slot property ('weapon'|'armor'|'accessory').
   * @param {object} item - Equipment item from ITEMS
   * @returns {object|null} The previously equipped item, or null
   */
  equip(item) {
    if (!item || !item.slot) {
      throw new Error('Item must have a slot property');
    }
    const slot = item.slot;
    const previous = this.equipment[slot] || null;
    this.equipment[slot] = item;
    this.recalculateStats();
    return previous;
  }

  /**
   * Unequip an item from a slot.
   * @param {string} slot - 'weapon'|'armor'|'accessory'
   * @returns {object|null} The removed item, or null
   */
  unequip(slot) {
    const old = this.equipment[slot] || null;
    this.equipment[slot] = null;
    this.recalculateStats();
    return old;
  }

  /**
   * Gain XP and handle level ups.
   * @param {number} amount - XP to gain
   * @returns {{leveledUp: boolean, newLevel: number, newAbilities: string[]}}
   */
  gainXP(amount) {
    this.xp += amount;

    const info = levelFromXP(this.xp);
    const newLevel = info.level;

    let leveledUp = false;
    const newAbilities = [];

    if (newLevel > this.level) {
      leveledUp = true;
      this.level = newLevel;
      this.recalculateStats();

      // Full heal on level up
      this.stats.hp = this.stats.maxHp;
      this.stats.mp = this.stats.maxMp;

      // Check for new abilities unlocked
      for (const entry of this.abilityTree) {
        if (entry.level <= this.level && !this.abilities.includes(entry.ability)) {
          this.abilities.push(entry.ability);
          newAbilities.push(entry.ability);
        }
      }
    }

    return { leveledUp, newLevel: this.level, newAbilities };
  }

  /**
   * Get a stat value, accounting for temporary status effect modifiers.
   * @param {string} statName - 'hp'|'maxHp'|'mp'|'maxMp'|'atk'|'def'|'agi'|'mag'
   * @returns {number}
   */
  getStat(statName) {
    let value = this.stats[statName] ?? 0;

    // Apply status effect stat modifiers (multipliers)
    if (this.statusEffects.length > 0) {
      let multiplier = 1;
      for (const effect of this.statusEffects) {
        if (effect.statMod && effect.statMod[statName] !== undefined) {
          multiplier *= effect.statMod[statName];
        }
      }
      // Only apply multiplier to combat stats, not hp/maxHp/mp/maxMp
      if (['atk', 'def', 'agi', 'mag'].includes(statName)) {
        value = Math.floor(value * multiplier);
      }
    }

    return value;
  }

  /**
   * Compute total stat boost from all equipped items.
   * @returns {{hp: number, mp: number, atk: number, def: number, agi: number, mag: number, luck: number}}
   */
  getEquipmentBonus() {
    const bonus = { hp: 0, mp: 0, atk: 0, def: 0, agi: 0, mag: 0, luck: 0 };

    for (const slot of ['weapon', 'armor', 'accessory']) {
      const item = this.equipment[slot];
      if (item && item.statBoost) {
        for (const [stat, value] of Object.entries(item.statBoost)) {
          if (bonus[stat] !== undefined) {
            bonus[stat] += value;
          } else {
            // Handle stats not in default bonus object (like 'luck')
            bonus[stat] = (bonus[stat] || 0) + value;
          }
        }
      }
    }

    return bonus;
  }

  /**
   * Take damage. Sets isDowned if HP reaches 0.
   * @param {number} amount - Damage to apply
   * @returns {{damage: number, downed: boolean}}
   */
  takeDamage(amount) {
    const actual = Math.min(amount, this.stats.hp);
    this.stats.hp = clamp(this.stats.hp - amount, 0, this.stats.maxHp);

    let downed = false;
    if (this.stats.hp <= 0) {
      this.isDowned = true;
      this.isAlive = false;
      downed = true;
    }

    return { damage: actual, downed };
  }

  /**
   * Heal HP.
   * @param {number} amount - HP to restore
   * @returns {number} Actual amount healed
   */
  heal(amount) {
    if (this.isDowned) return 0;
    const before = this.stats.hp;
    this.stats.hp = clamp(this.stats.hp + amount, 0, this.stats.maxHp);
    return this.stats.hp - before;
  }

  /**
   * Restore MP.
   * @param {number} amount - MP to restore
   * @returns {number} Actual amount restored
   */
  healMP(amount) {
    const before = this.stats.mp;
    this.stats.mp = clamp(this.stats.mp + amount, 0, this.stats.maxMp);
    return this.stats.mp - before;
  }

  /**
   * Revive a downed character.
   * @param {number} hpPercent - Fraction of maxHp to restore (default 0.5)
   * @returns {boolean} Success
   */
  revive(hpPercent = 0.5) {
    if (!this.isDowned) return false;
    this.isDowned = false;
    this.isAlive = true;
    this.stats.hp = Math.floor(this.stats.maxHp * hpPercent);
    return true;
  }

  /**
   * Add a temporary status effect.
   * @param {object} effect - {id, name, duration, ...}
   */
  addStatusEffect(effect) {
    // If same effect already exists, refresh duration
    const existing = this.statusEffects.find((e) => e.id === effect.id);
    if (existing) {
      existing.duration = effect.duration;
    } else {
      this.statusEffects.push({ ...effect });
    }
  }

  /**
   * Remove a status effect by id.
   * @param {string} effectId
   */
  removeStatusEffect(effectId) {
    this.statusEffects = this.statusEffects.filter((e) => e.id !== effectId);
  }

  /**
   * Update status effect durations.
   * @param {number} dt - Time delta in seconds (or turns if turn-based)
   * @returns {string[]} Array of expired effect ids
   */
  updateStatusEffects(dt) {
    const expired = [];
    const remaining = [];

    for (const effect of this.statusEffects) {
      effect.duration -= dt;
      if (effect.duration <= 0) {
        expired.push(effect.id);
      } else {
        remaining.push(effect);
      }
    }

    this.statusEffects = remaining;
    return expired;
  }

  /**
   * Serialize to plain object for saving.
   * @returns {object}
   */
  toData() {
    return {
      id: this.id,
      level: this.level,
      xp: this.xp,
      equipment: {
        weapon: this.equipment.weapon ? this.equipment.weapon.id : null,
        armor: this.equipment.armor ? this.equipment.armor.id : null,
        accessory: this.equipment.accessory ? this.equipment.accessory.id : null,
      },
      abilities: [...this.abilities],
      hp: this.stats.hp,
      mp: this.stats.mp,
      isAlive: this.isAlive,
      isDowned: this.isDowned,
    };
  }

  /**
   * Restore a Character from serialized data.
   * @param {object} data - Output from toData()
   * @returns {Character}
   */
  static fromData(data) {
    const character = new Character(data.id);
    character.level = data.level;
    character.xp = data.xp;

    // Restore equipment by looking up ITEMS
    if (data.equipment) {
      if (data.equipment.weapon) {
        character.equipment.weapon = ITEMS[data.equipment.weapon] || null;
      }
      if (data.equipment.armor) {
        character.equipment.armor = ITEMS[data.equipment.armor] || null;
      }
      if (data.equipment.accessory) {
        character.equipment.accessory = ITEMS[data.equipment.accessory] || null;
      }
    }

    // Restore abilities
    character.abilities = [...(data.abilities || character.abilities)];

    // Recalculate stats with correct level and equipment
    character.recalculateStats();

    // Restore HP/MP after recalculation
    character.stats.hp = clamp(data.hp, 0, character.stats.maxHp);
    character.stats.mp = clamp(data.mp, 0, character.stats.maxMp);

    character.isAlive = data.isAlive;
    character.isDowned = data.isDowned;

    return character;
  }
}

export default Character;
