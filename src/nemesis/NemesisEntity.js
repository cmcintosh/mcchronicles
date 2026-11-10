// NemesisEntity.js — A Hamburglar lieutenant entity for the Nemesis system

import { uuid, xpForLevel, levelFromXP } from '../utils/math.js';
import { generateNemesisName } from '../utils/procedural.js';

export const RANKS = ['Thief', 'Bandit', 'Rogue', 'Lieutenant', 'Captain', 'Lord'];

export const RANK_MULTIPLIERS = [1.0, 1.3, 1.6, 2.0, 2.5, 3.0];

export const NEMESIS_ELEMENTS = ['fire', 'ice', 'water', 'earth', 'holy', 'dark'];

export const PERSONALITIES = ['Aggressive', 'Cunning', 'Cowardly', 'Honorable', 'Vengeful'];

const ABILITY_COUNT_BY_RANK = [2, 2, 3, 3, 4, 4];

const BASE_STATS = {
  hp: 80,
  mp: 30,
  atk: 12,
  def: 10,
  agi: 8,
  mag: 10,
};

// McDonald's-themed ability name pools per element
const ELEMENT_ATTACK_NAMES = {
  fire: ['Grease Fireball', 'Flaming Fry Burst', 'Sizzling Patty Slam', 'Inferno Grill'],
  ice: ['Frosty Shake Blizzard', 'Frozen McFlurry', 'Ice Cube Barrage', 'Arctic Condiment Storm'],
  water: ['Soda Tidal Wave', 'Cola Flood', 'Ice Drench', 'Splash of Syrup'],
  earth: ['Burger Boulder', 'Sesame Seed Quake', 'Hash Brown Wall', 'Terra Patty Crush'],
  holy: ['Blessing of the Arches', 'Radiant McNugget', 'Golden Fry Beam', 'Halo of Ketchup'],
  dark: ['Shadow Robbery', 'Midnight Burger Curse', 'Dark Drive-Thru', 'Eclipse of Fries'],
};

const ELEMENT_SUPPORT_NAMES = {
  fire: ['Grease Armor', 'Spice Rush', 'Ember Guard'],
  ice: ['Frosty Shield', 'Chill Aura', 'Frozen Sanctuary'],
  water: ['Soda Refresh', 'Cola Cleansing', 'Hydration Ward'],
  earth: ['Sesame Barrier', 'Hash Brown Bastion', 'Stone Bun Guard'],
  holy: ['Golden Blessing', 'Arch Light', ' McNugget Mercy'],
  dark: ['Shadow Cloak', 'Dark Deal', 'Veil of Robbery'],
};

const PERSONALITY_DEBUFF_NAMES = {
  Aggressive: ['Intimidating ROBBLE', 'Frightening Grease', 'Berserker Howl'],
  Cunning: ['Sneak Sabotage', 'Clever Trip', 'Underhanded Tactic'],
  Cowardly: ['Panic Scramble', 'Desperate Dodge', 'Frightened Flee'],
  Honorable: ['Challenge Strike', 'Fair Warning', 'Warrior Focus'],
  Vengeful: ['Grudge Mark', 'Revenge Plot', 'Bitter Memory'],
};

const TRAIT_OPTIONS = {
  eyeColor: ['Red', 'Yellow', 'Greasy Black', 'Mustard Gold', 'Ketchup Red', 'Pale Blue', 'Fry Brown'],
  scar: ['None', 'Burn Mark', 'Grease Stain', 'Ketchup Splash', 'Missing Bun', 'Crack on Patty'],
  weapon: ['Stolen Fry', 'Grease Gun', 'Ketchup Knife', 'Bun Boomerang', 'Patty Mace', 'Sesame Shiv', 'Condiment Crossbow'],
  bodyType: ['Stout', 'Lanky', 'Round', 'Muscular', 'Wiry', 'Pudgy'],
  height: ['Short', 'Average', 'Tall', 'Tiny', 'Imposing'],
};

const COMBAT_STYLES = {
  Aggressive: 'All-out attack, ignores defense',
  Cunning: 'Targets weakest party member, uses debuffs',
  Cowardly: 'Defensive, uses buffs then flees if hurt',
  Honorable: 'Balanced attack and defense, fights fair',
  Vengeful: 'Focuses on characters with grudges, relentless',
};

const TAUNTS = {
  Aggressive: "I'll crush you next time! ROBBLE ROBBLE!",
  Cunning: "You got lucky... but I've learned your weaknesses.",
  Cowardly: "Y-you won't catch me off guard again! I'll be ready!",
  Honorable: "A worthy victory. But I shall grow stronger from this defeat.",
  Vengeful: "You'll pay for this humiliation! I swear it on the Golden Arches!",
};

const DEFECTION_MESSAGES = {
  Aggressive: "I'm tired of losing for the Hamburglar. I'm done!",
  Cunning: "The Hamburglar's organization is falling apart. I'm saving myself.",
  Cowardly: "P-please don't hurt me! I'll leave the Hamburglar! Just let me go!",
  Honorable: "I cannot serve a master who shames his own followers. I resign.",
  Vengeful: "The Hamburglar betrayed us all! I'll have my revenge — but not for him!",
};

export class NemesisEntity {
  constructor(config = {}) {
    this.id = config.id || uuid();
    this.name = config.name || generateNemesisName(Date.now() + Math.random() * 10000);
    this.rankIndex = config.rankIndex ?? 0;
    this.rank = RANKS[this.rankIndex];
    this.level = config.level ?? 1;
    this.xp = config.xp ?? 0;
    this.bodyElement = config.bodyElement || NEMESIS_ELEMENTS[0];
    this.strengths = config.strengths || [];
    this.weaknesses = config.weaknesses || [];
    this.personality = config.personality || PERSONALITIES[0];
    this.grudges = new Map();
    this.rivals = [];
    this.traits = config.traits || this._rollDefaultTraits();
    this.isAlive = true;
    this.isShamed = false;
    this.defected = false;
    this.commanderId = null;
    this.subordinates = [];
    this.assignedRegion = null;
    this.backstory = null;

    // Derive immunities and resistances from strengths
    this.immunities = [];
    this.resistances = [];
    this._categorizeStrengths();

    this.combatStyle = this.getCombatStyle();
    this.stats = {};
    this.abilities = [];

    this.generateStats();
    this.generateAbilities();
  }

  _rollDefaultTraits() {
    const rng = Math.random;
    return {
      eyeColor: TRAIT_OPTIONS.eyeColor[Math.floor(rng() * TRAIT_OPTIONS.eyeColor.length)],
      scar: TRAIT_OPTIONS.scar[Math.floor(rng() * TRAIT_OPTIONS.scar.length)],
      weapon: TRAIT_OPTIONS.weapon[Math.floor(rng() * TRAIT_OPTIONS.weapon.length)],
      bodyType: TRAIT_OPTIONS.bodyType[Math.floor(rng() * TRAIT_OPTIONS.bodyType.length)],
      height: TRAIT_OPTIONS.height[Math.floor(rng() * TRAIT_OPTIONS.height.length)],
    };
  }

  _categorizeStrengths() {
    this.immunities = [];
    this.resistances = [];
    for (const el of this.strengths) {
      if (Math.random() < 0.4) {
        this.immunities.push(el);
      } else {
        this.resistances.push(el);
      }
    }
  }

  generateStats() {
    const rankMult = RANK_MULTIPLIERS[this.rankIndex];
    const lvl = this.level;

    this.stats.maxHp = Math.floor(BASE_STATS.hp * rankMult + 15 * rankMult * (lvl - 1));
    this.stats.maxMp = Math.floor(BASE_STATS.mp * rankMult + 8 * rankMult * (lvl - 1));
    this.stats.atk = Math.floor(BASE_STATS.atk * rankMult + 3 * rankMult * (lvl - 1));
    this.stats.def = Math.floor(BASE_STATS.def * rankMult + 3 * rankMult * (lvl - 1));
    this.stats.agi = Math.floor(BASE_STATS.agi * rankMult + 2 * rankMult * (lvl - 1));
    this.stats.mag = Math.floor(BASE_STATS.mag * rankMult + 2 * rankMult * (lvl - 1));

    this.stats.hp = this.stats.maxHp;
    this.stats.mp = this.stats.maxMp;
  }

  generateAbilities() {
    this.abilities = [];
    const count = ABILITY_COUNT_BY_RANK[this.rankIndex];
    const attackPool = ELEMENT_ATTACK_NAMES[this.bodyElement] || ELEMENT_ATTACK_NAMES.fire;
    const supportPool = ELEMENT_SUPPORT_NAMES[this.bodyElement] || ELEMENT_SUPPORT_NAMES.fire;
    const debuffPool = PERSONALITY_DEBUFF_NAMES[this.personality] || PERSONALITY_DEBUFF_NAMES.Aggressive;

    // Always include at least one attack
    const usedNames = new Set();

    // First ability: primary attack
    const atkName = attackPool[0];
    usedNames.add(atkName);
    this.abilities.push({
      id: `${this.id}_atk1`,
      name: atkName,
      type: 'attack',
      element: this.bodyElement,
      power: 1.0 + this.rankIndex * 0.15,
      mpCost: 4 + this.rankIndex * 2,
      description: `A ${this.bodyElement}-elemental attack dealing significant damage.`,
    });

    // Second ability: support (heal or buff)
    const supName = supportPool[0];
    usedNames.add(supName);
    this.abilities.push({
      id: `${this.id}_sup1`,
      name: supName,
      type: this.personality === 'Cowardly' ? 'buff' : 'heal',
      element: this.bodyElement,
      power: 0.8 + this.rankIndex * 0.1,
      mpCost: 6 + this.rankIndex * 2,
      description: `Restores HP or grants a protective ${this.bodyElement} effect.`,
    });

    // Additional abilities for higher ranks
    let attackIdx = 1;
    let supportIdx = 1;
    let debuffIdx = 0;

    while (this.abilities.length < count) {
      // Alternate between attack, debuff, and support
      const remaining = count - this.abilities.length;

      if (remaining === 1) {
        // Add a debuff based on personality
        const debuffName = debuffPool[debuffIdx % debuffPool.length];
        if (!usedNames.has(debuffName)) {
          usedNames.add(debuffName);
          this.abilities.push({
            id: `${this.id}_debuff${debuffIdx + 1}`,
            name: debuffName,
            type: 'debuff',
            element: 'physical',
            power: 0.5 + this.rankIndex * 0.1,
            mpCost: 5 + this.rankIndex * 2,
            description: `Inflicts a debilitating effect driven by ${this.personality.toLowerCase()} tactics.`,
          });
        }
        break;
      }

      // Add an attack
      const atkN = attackPool[attackIdx % attackPool.length];
      if (!usedNames.has(atkN)) {
        usedNames.add(atkN);
        this.abilities.push({
          id: `${this.id}_atk${attackIdx + 1}`,
          name: atkN,
          type: 'aoe',
          element: this.bodyElement,
          power: 0.7 + this.rankIndex * 0.12,
          mpCost: 8 + this.rankIndex * 3,
          description: `A devastating ${this.bodyElement} area attack.`,
        });
      }
      attackIdx++;

      if (this.abilities.length >= count) break;

      // Add a debuff
      const debuffName = debuffPool[debuffIdx % debuffPool.length];
      if (!usedNames.has(debuffName)) {
        usedNames.add(debuffName);
        this.abilities.push({
          id: `${this.id}_debuff${debuffIdx + 1}`,
          name: debuffName,
          type: 'debuff',
          element: 'physical',
          power: 0.5 + this.rankIndex * 0.1,
          mpCost: 5 + this.rankIndex * 2,
          description: `Lowers enemy stats through ${this.personality.toLowerCase()} cunning.`,
        });
      }
      debuffIdx++;

      if (this.abilities.length >= count) break;

      // Add a support ability
      const supN = supportPool[supportIdx % supportPool.length];
      if (!usedNames.has(supN)) {
        usedNames.add(supN);
        this.abilities.push({
          id: `${this.id}_sup${supportIdx + 1}`,
          name: supN,
          type: 'buff',
          element: this.bodyElement,
          power: 0.6 + this.rankIndex * 0.1,
          mpCost: 7 + this.rankIndex * 2,
          description: `Empowers the user with ${this.bodyElement} energy.`,
        });
      }
      supportIdx++;
    }
  }

  addGrudge(characterId, method) {
    const existing = this.grudges.get(characterId);
    if (existing) {
      existing.timesBeaten++;
      existing.howTheyBeatMe = method;
    } else {
      this.grudges.set(characterId, { howTheyBeatMe: method, timesBeaten: 1 });
    }
  }

  gainXP(amount) {
    const oldLevel = this.level;
    this.xp += amount;

    const levelInfo = levelFromXP(this.xp);
    this.level = levelInfo.level;

    let rankedUp = false;

    if (this.level > oldLevel) {
      this.generateStats();
    }

    // Promotion check: if level crosses thresholds, auto-promote
    const promoteLevels = [10, 18, 25, 32, 40];
    for (const threshold of promoteLevels) {
      if (oldLevel < threshold && this.level >= threshold) {
        if (this.rankIndex < 5) {
          this.promote();
          rankedUp = true;
        }
      }
    }

    return {
      leveledUp: this.level > oldLevel,
      newLevel: this.level,
      rankedUp,
    };
  }

  promote() {
    if (this.rankIndex >= 5) return false;
    this.rankIndex++;
    this.rank = RANKS[this.rankIndex];
    this.generateStats();
    this.generateAbilities();
    return true;
  }

  demote() {
    if (this.rankIndex <= 0) return false;
    this.rankIndex--;
    this.rank = RANKS[this.rankIndex];
    this.generateStats();
    this.generateAbilities();
    return true;
  }

  shame() {
    this.isShamed = true;
    this.backstory = this.getBackstory();
    this.demote();
    return this.backstory;
  }

  getResistance(element) {
    if (this.immunities.includes(element)) return 0;
    if (this.resistances.includes(element)) return 0.5;
    if (this.weaknesses.includes(element)) return 2.0;
    return 1.0;
  }

  getCombatStyle() {
    return COMBAT_STYLES[this.personality] || COMBAT_STYLES.Aggressive;
  }

  getTaunt() {
    return TAUNTS[this.personality] || TAUNTS.Aggressive;
  }

  getDefectionMessage() {
    return DEFECTION_MESSAGES[this.personality] || DEFECTION_MESSAGES.Aggressive;
  }

  getBackstory() {
    const rankName = this.rank;
    const elementName = this.bodyElement;
    const traitDesc = `${this.traits.bodyType.toLowerCase()}, ${this.traits.height.toLowerCase()} figure with ${this.traits.eyeColor.toLowerCase()} eyes`;
    const weaponDesc = this.traits.weapon;
    const scarDesc = this.traits.scar !== 'None' ? ` bears a ${this.traits.scar.toLowerCase()}` : '';

    const stories = [
      `Once a humble ${rankName} of the Hamburglar's crew, this ${traitDesc}${scarDesc} rose through the ranks wielding a ${weaponDesc}. Their ${this.personality.toLowerCase()} nature and mastery of ${elementName} made them a feared enforcer of the Happy Meal underground.`,
      `Born in the grease pits of Fry Valley, this ${traitDesc} operative${scarDesc} found their calling under the Hamburglar's banner. Wielding a ${weaponDesc} with ${this.personality.toLowerCase()} precision, they channel ${elementName} energy to steal every last McNugget.`,
      `A ${traitDesc} rogue${scarDesc} who clawed their way up to ${rankName}, armed with a ${weaponDesc} and an unquenchable thirst for stolen meals. Their ${this.personality.toLowerCase()} disposition and ${elementName} powers make them a dangerous foe in the drive-thru wars.`,
    ];

    return stories[Math.floor(Math.random() * stories.length)];
  }

  toData() {
    return {
      id: this.id,
      name: this.name,
      rank: this.rank,
      rankIndex: this.rankIndex,
      level: this.level,
      xp: this.xp,
      bodyElement: this.bodyElement,
      strengths: this.strengths,
      weaknesses: this.weaknesses,
      immunities: this.immunities,
      resistances: this.resistances,
      personality: this.personality,
      grudges: Array.from(this.grudges.entries()),
      rivals: this.rivals,
      traits: this.traits,
      isAlive: this.isAlive,
      isShamed: this.isShamed,
      defected: this.defected,
      stats: this.stats,
      abilities: this.abilities,
      combatStyle: this.combatStyle,
      commanderId: this.commanderId,
      subordinates: this.subordinates,
      assignedRegion: this.assignedRegion,
      backstory: this.backstory,
    };
  }

  static fromData(data) {
    const entity = Object.create(NemesisEntity.prototype);
    entity.id = data.id;
    entity.name = data.name;
    entity.rank = data.rank;
    entity.rankIndex = data.rankIndex;
    entity.level = data.level;
    entity.xp = data.xp;
    entity.bodyElement = data.bodyElement;
    entity.strengths = data.strengths || [];
    entity.weaknesses = data.weaknesses || [];
    entity.immunities = data.immunities || [];
    entity.resistances = data.resistances || [];
    entity.personality = data.personality;
    entity.grudges = new Map(data.grudges || []);
    entity.rivals = data.rivals || [];
    entity.traits = data.traits;
    entity.isAlive = data.isAlive;
    entity.isShamed = data.isShamed;
    entity.defected = data.defected || false;
    entity.stats = data.stats;
    entity.abilities = data.abilities || [];
    entity.combatStyle = data.combatStyle;
    entity.commanderId = data.commanderId;
    entity.subordinates = data.subordinates || [];
    entity.assignedRegion = data.assignedRegion;
    entity.backstory = data.backstory;
    return entity;
  }
}

export { TRAIT_OPTIONS, COMBAT_STYLES, TAUNTS, DEFECTION_MESSAGES };
