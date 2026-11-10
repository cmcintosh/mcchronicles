// PartyMember.js — A playable character entity in battle

import * as THREE from 'three';
import { CHARACTERS } from '../data/characters.js';
import { ABILITIES, getAbilitiesForLevel } from '../data/abilities.js';
import BattleEntity from './BattleEntity.js';
import { xpForLevel, levelFromXP } from '../utils/math.js';

export default class PartyMember extends BattleEntity {
  /**
   * @param {string} characterId — key into CHARACTERS
   * @param {number} level — starting level
   */
  constructor(characterId, level = 1) {
    const character = CHARACTERS[characterId];
    if (!character) {
      throw new Error(`Unknown character: ${characterId}`);
    }

    // Calculate stats from base + growth
    const stats = PartyMember._calculateStats(character, level);

    super({
      name: character.name,
      element: character.element,
      weakTo: [],
      resists: [],
      maxHp: stats.hp,
      maxMp: stats.mp,
      atk: stats.atk,
      def: stats.def,
      agi: stats.agi,
      mag: stats.mag,
    });

    this.characterId = characterId;
    this.character = character;
    this.level = level;
    this.xp = 0;
    this.title = character.title || '';
    this.role = character.role || '';
    this.color = character.color || 0xffffff;
    this.accentColor = character.accentColor || 0xffffff;
    this.weapon = character.weapon || null;
    this.armor = character.armor || null;
    this.accessory = character.accessory || null;
    this.abilityTree = character.abilityTree || [];
    this.portraitColors = character.portraitColors || {};

    // Equipment slots
    this.equippedWeapon = null;
    this.equippedArmor = null;
    this.equippedAccessory = null;

    // Create placeholder mesh
    this._createMesh();
  }

  /**
   * Calculate stats from base + growth * (level - 1).
   * @param {object} character
   * @param {number} level
   * @returns {object} { hp, mp, atk, def, agi, mag }
   * @private
   */
  static _calculateStats(character, level) {
    const { baseStats, growth } = character;
    const calc = (stat) => Math.round(baseStats[stat] + growth[stat] * (level - 1));
    return {
      hp: calc('hp'),
      mp: calc('mp'),
      atk: calc('atk'),
      def: calc('def'),
      agi: calc('agi'),
      mag: calc('mag'),
    };
  }

  /**
   * Create a simple placeholder mesh based on character color.
   * @private
   */
  _createMesh() {
    const group = new THREE.Group();

    const color = this.color;
    const accent = this.accentColor;

    // Body — capsule
    const bodyGeo = new THREE.CapsuleGeometry(0.5, 1.0, 8, 16);
    const bodyMat = new THREE.MeshToonMaterial({ color: color });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.75;
    group.add(body);

    // Head — sphere
    const headGeo = new THREE.SphereGeometry(0.4, 16, 12);
    const headMat = new THREE.MeshToonMaterial({ color: color });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 1.8;
    group.add(head);

    // Accent band
    const bandGeo = new THREE.TorusGeometry(0.42, 0.06, 8, 16);
    const bandMat = new THREE.MeshToonMaterial({ color: accent });
    const band = new THREE.Mesh(bandGeo, bandMat);
    band.position.y = 1.5;
    band.rotation.x = Math.PI / 2;
    group.add(band);

    // Base shadow disc
    const shadowGeo = new THREE.CircleGeometry(0.6, 16);
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
   * Get ability IDs unlocked at the current level from the ability tree.
   * @returns {string[]}
   */
  getAvailableAbilities() {
    return this.abilityTree
      .filter((entry) => this.level >= entry.level)
      .map((entry) => entry.ability);
  }

  /**
   * Get ability objects (full ABILITIES entries) for the current level.
   * @returns {object[]}
   */
  getAvailableAbilityObjects() {
    return this.getAvailableAbilities()
      .map((id) => ABILITIES[id])
      .filter(Boolean);
  }

  /**
   * Level up by one level. Recalculate stats and set HP/MP to new max.
   * @returns {string[]} list of newly unlocked ability IDs
   */
  levelUp() {
    const oldLevel = this.level;
    this.level += 1;

    // Recalculate stats
    const stats = PartyMember._calculateStats(this.character, this.level);
    this.maxHp = stats.hp;
    this.maxMp = stats.mp;
    this.atk = stats.atk;
    this.def = stats.def;
    this.agi = stats.agi;
    this.mag = stats.mag;

    // Full heal on level up
    this.hp = this.maxHp;
    this.mp = this.maxMp;

    // Find newly unlocked abilities
    const oldAbilities = new Set(
      this.abilityTree
        .filter((entry) => oldLevel >= entry.level)
        .map((entry) => entry.ability)
    );

    const newAbilities = this.abilityTree
      .filter((entry) => this.level >= entry.level && !oldAbilities.has(entry.ability))
      .map((entry) => entry.ability);

    return newAbilities;
  }

  /**
   * Gain XP and check for level ups.
   * @param {number} amount
   * @returns {Array<{level: number, newAbilities: string[]}>} level-up info array
   */
  gainXP(amount) {
    this.xp += amount;
    const levelUps = [];

    let info = levelFromXP(this.xp);
    while (info.level > this.level) {
      const newAbilities = this.levelUp();
      levelUps.push({ level: this.level, newAbilities });
      info = levelFromXP(this.xp);
    }

    return levelUps;
  }

  /**
   * Get XP needed for the next level.
   * @returns {number}
   */
  xpToNextLevel() {
    const info = levelFromXP(this.xp);
    return info.xpForNext - info.xpIntoLevel;
  }

  /**
   * Serialize to plain data for save system.
   * @returns {object}
   */
  toData() {
    return {
      characterId: this.characterId,
      level: this.level,
      hp: this.hp,
      mp: this.mp,
      xp: this.xp,
      maxHp: this.maxHp,
      maxMp: this.maxMp,
      atk: this.atk,
      def: this.def,
      agi: this.agi,
      mag: this.mag,
      equippedWeapon: this.equippedWeapon,
      equippedArmor: this.equippedArmor,
      equippedAccessory: this.equippedAccessory,
    };
  }

  /**
   * Restore from saved data.
   * @param {object} data
   */
  fromData(data) {
    this.level = data.level || 1;
    this.hp = data.hp !== undefined ? data.hp : this.maxHp;
    this.mp = data.mp !== undefined ? data.mp : this.maxMp;
    this.xp = data.xp || 0;
    this.maxHp = data.maxHp || this.maxHp;
    this.maxMp = data.maxMp || this.maxMp;
    this.atk = data.atk || this.atk;
    this.def = data.def || this.def;
    this.agi = data.agi || this.agi;
    this.mag = data.mag || this.mag;
    this.equippedWeapon = data.equippedWeapon || null;
    this.equippedArmor = data.equippedArmor || null;
    this.equippedAccessory = data.equippedAccessory || null;
    this.isAlive = this.hp > 0;
  }

  /**
   * Apply equipment stat boosts.
   * @param {object} weapon — weapon item or null
   * @param {object} armor — armor item or null
   * @param {object} accessory — accessory item or null
   */
  equip(weapon = null, armor = null, accessory = null) {
    if (weapon) this.equippedWeapon = weapon;
    if (armor) this.equippedArmor = armor;
    if (accessory) this.equippedAccessory = accessory;

    // Recalculate base stats from level, then add equipment
    const base = PartyMember._calculateStats(this.character, this.level);
    this.maxHp = base.hp;
    this.maxMp = base.mp;
    this.atk = base.atk;
    this.def = base.def;
    this.agi = base.agi;
    this.mag = base.mag;

    [this.equippedWeapon, this.equippedArmor, this.equippedAccessory].forEach((item) => {
      if (item && item.statBoost) {
        const boost = item.statBoost;
        if (boost.hp) this.maxHp += boost.hp;
        if (boost.mp) this.maxMp += boost.mp;
        if (boost.atk) this.atk += boost.atk;
        if (boost.def) this.def += boost.def;
        if (boost.agi) this.agi += boost.agi;
        if (boost.mag) this.mag += boost.mag;
      }
    });

    // Clamp current HP/MP to new max
    this.hp = Math.min(this.hp, this.maxHp);
    this.mp = Math.min(this.mp, this.maxMp);
  }

  /**
   * Dispose mesh and clean up.
   */
  dispose() {
    super.dispose();
  }
}
