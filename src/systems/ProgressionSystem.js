// ProgressionSystem.js — XP, leveling, and ability unlocking

import { xpForLevel, levelFromXP } from '../utils/math.js';
import { CHARACTERS } from '../data/characters.js';

// Levels at which new abilities are unlocked
const ABILITY_UNLOCK_THRESHOLDS = [1, 5, 10, 15, 20, 25, 30, 40, 50];

export default class ProgressionSystem {
  constructor() {
    // No persistent state — operates on character objects passed in
  }

  /**
   * Add XP to a character and check for level up(s).
   * @param {object} character - { xp, level, stats, ... }
   * @param {number} amount - XP to add
   * @returns {{ leveledUp: boolean, newLevel: number, gainedLevels: number, unlockedAbilities: string[] }}
   */
  addXP(character, amount) {
    const oldLevel = character.level;
    character.xp = (character.xp || 0) + amount;

    // Calculate new level from total XP
    const newLevel = levelFromXP(character.xp);
    const gainedLevels = newLevel - oldLevel;
    const leveledUp = gainedLevels > 0;

    let unlockedAbilities = [];

    if (leveledUp) {
      // Apply level-ups one at a time so growth curves apply per level
      for (let l = oldLevel + 1; l <= newLevel; l++) {
        character.level = l;
        this.applyLevelUpStats(character);
      }

      // Collect abilities unlocked across all gained levels
      const characterId = character.id || character.key || character.name;
      for (let l = oldLevel + 1; l <= newLevel; l++) {
        const abilities = this.getUnlockedAbilities(characterId, l);
        unlockedAbilities.push(...abilities);
      }
    }

    return {
      leveledUp,
      newLevel,
      gainedLevels: Math.max(0, gainedLevels),
      unlockedAbilities,
    };
  }

  /**
   * Level up a character by one level, applying stat growth.
   * @param {object} character - { growth, level, stats, baseStats }
   * @returns {object} The updated character
   */
  levelUp(character) {
    character.level = (character.level || 1) + 1;
    this.applyLevelUpStats(character);
    return character;
  }

  /**
   * Get XP required to advance from the given level to the next.
   * @param {number} level - Current level
   * @returns {number} XP needed to reach level+1
   */
  getXPToNext(level) {
    const currentLevelXP = xpForLevel(level);
    const nextLevelXP = xpForLevel(level + 1);
    return nextLevelXP - currentLevelXP;
  }

  /**
   * Get ability IDs unlocked at or below the given level for a character.
   * @param {string} characterId - Character identifier (must match CHARACTERS key)
   * @param {number} level - The level to check
   * @returns {string[]} Array of ability IDs newly unlocked at this level
   */
  getUnlockedAbilities(characterId, level) {
    // Only return abilities that unlock at exactly this level threshold
    if (!ABILITY_UNLOCK_THRESHOLDS.includes(level)) {
      return [];
    }

    const characterData = CHARACTERS[characterId];
    if (!characterData || !characterData.abilityTree) {
      return [];
    }

    const unlocked = [];
    for (const entry of characterData.abilityTree) {
      if (entry.level === level) {
        unlocked.push(entry.ability);
      }
    }
    return unlocked;
  }

  /**
   * Get ALL abilities unlocked at or below the given level (cumulative).
   * @param {string} characterId
   * @param {number} level
   * @returns {string[]}
   */
  getAllUnlockedAbilities(characterId, level) {
    const characterData = CHARACTERS[characterId];
    if (!characterData || !characterData.abilityTree) {
      return [];
    }

    const unlocked = [];
    for (const entry of characterData.abilityTree) {
      if (entry.level <= level && ABILITY_UNLOCK_THRESHOLDS.includes(entry.level)) {
        unlocked.push(entry.ability);
      }
    }
    return unlocked;
  }

  /**
   * Recalculate character stats from base + growth * (level - 1).
   * Sets character.stats to the computed values.
   * @param {object} character - { baseStats, growth, level, stats }
   * @returns {object} The updated character
   */
  applyLevelUpStats(character) {
    const base = character.baseStats || {};
    const growth = character.growth || {};
    const level = character.level || 1;
    const multiplier = level - 1;

    // Compute each stat from base + growth * (level - 1)
    const statKeys = ['hp', 'mp', 'atk', 'def', 'agi', 'mag'];

    if (!character.stats) {
      character.stats = {};
    }

    for (const key of statKeys) {
      const baseValue = base[key] || 0;
      const growthValue = growth[key] || 0;
      character.stats['max' + key.charAt(0).toUpperCase() + key.slice(1)] =
        baseValue + growthValue * multiplier;
      // Also set current value if not already set or if it would exceed new max
      const currentKey = key;
      const maxKey = 'max' + key.charAt(0).toUpperCase() + key.slice(1);
      if (character.stats[currentKey] === undefined ||
          character.stats[currentKey] > character.stats[maxKey]) {
        character.stats[currentKey] = character.stats[maxKey];
      }
    }

    // Ensure hp/mp current values don't exceed max
    if (character.stats.maxHp !== undefined) {
      if (character.stats.hp === undefined || character.stats.hp > character.stats.maxHp) {
        character.stats.hp = character.stats.maxHp;
      }
    }
    if (character.stats.maxMp !== undefined) {
      if (character.stats.mp === undefined || character.stats.mp > character.stats.maxMp) {
        character.stats.mp = character.stats.maxMp;
      }
    }

    return character;
  }

  /**
   * Initialize a new character's stats at level 1.
   * @param {object} character - { baseStats, growth, level }
   * @returns {object} The updated character
   */
  initCharacterStats(character) {
    character.level = character.level || 1;
    character.xp = character.xp || 0;
    this.applyLevelUpStats(character);
    return character;
  }

  /**
   * Get the level derived from total XP.
   * @param {number} xp - Total XP
   * @returns {number}
   */
  getLevelFromXP(xp) {
    return levelFromXP(xp);
  }

  /**
   * Get total XP required to reach a specific level.
   * @param {number} level
   * @returns {number}
   */
  getXPForLevel(level) {
    return xpForLevel(level);
  }
}
