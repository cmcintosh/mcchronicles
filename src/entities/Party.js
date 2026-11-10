// Party.js — Party management for McChronicles

import { Character } from './Character.js';
import { CHARACTERS, STARTING_PARTY } from '../data/characters.js';
import { ITEMS } from '../data/items.js';
import { uuid } from '../utils/math.js';

export class Party {
  constructor() {
    /** @type {Character[]} */
    this.activeMembers = [];
    /** @type {Character[]} */
    this.reserveMembers = [];
    /** @type {Character[]} */
    this.allMembers = [];
    this.gold = 500;
    /** @type {Map<string, number>} */
    this.inventory = new Map();

    // Recruit starting party
    for (const charId of STARTING_PARTY) {
      this.addMember(charId);
    }

    // Move starting party into active slots
    for (const charId of STARTING_PARTY) {
      this.addToActive(charId);
    }
  }

  /**
   * Add a new character to the party (allMembers + reserveMembers).
   * @param {string} characterId
   * @returns {Character}
   */
  addMember(characterId) {
    const character = new Character(characterId);
    this.allMembers.push(character);
    this.reserveMembers.push(character);
    return character;
  }

  /**
   * Move a character from reserve to active (max 3 active).
   * @param {string} characterId
   * @returns {boolean}
   */
  addToActive(characterId) {
    const character = this.allMembers.find((c) => c.id === characterId);
    if (!character) return false;

    // Already active?
    if (this.activeMembers.includes(character)) return true;

    // Must be in reserve
    const reserveIdx = this.reserveMembers.indexOf(character);
    if (reserveIdx === -1) return false;

    if (this.activeMembers.length >= 3) return false;

    this.reserveMembers.splice(reserveIdx, 1);
    this.activeMembers.push(character);
    return true;
  }

  /**
   * Move a character from active to reserve (max 3 reserve).
   * @param {string} characterId
   * @returns {boolean}
   */
  addToReserve(characterId) {
    const character = this.allMembers.find((c) => c.id === characterId);
    if (!character) return false;

    // Already in reserve?
    if (this.reserveMembers.includes(character)) return true;

    // Must be in active
    const activeIdx = this.activeMembers.indexOf(character);
    if (activeIdx === -1) return false;

    if (this.reserveMembers.length >= 3) return false;

    this.activeMembers.splice(activeIdx, 1);
    this.reserveMembers.push(character);
    return true;
  }

  /**
   * Swap an active member with a reserve member.
   * @param {number} activeIdx
   * @param {number} reserveIdx
   * @returns {boolean}
   */
  swap(activeIdx, reserveIdx) {
    if (activeIdx < 0 || activeIdx >= this.activeMembers.length) return false;
    if (reserveIdx < 0 || reserveIdx >= this.reserveMembers.length) return false;

    const activeChar = this.activeMembers[activeIdx];
    const reserveChar = this.reserveMembers[reserveIdx];

    this.activeMembers[activeIdx] = reserveChar;
    this.reserveMembers[reserveIdx] = activeChar;

    return true;
  }

  /**
   * Get active member by index.
   * @param {number} index
   * @returns {Character|null}
   */
  getActiveMember(index) {
    return this.activeMembers[index] || null;
  }

  /**
   * Find a member by character id across all recruited members.
   * @param {string} characterId
   * @returns {Character|undefined}
   */
  getMember(characterId) {
    return this.allMembers.find((c) => c.id === characterId);
  }

  /**
   * Add item(s) to inventory.
   * @param {string} itemId
   * @param {number} count
   */
  addItem(itemId, count = 1) {
    const current = this.inventory.get(itemId) || 0;
    this.inventory.set(itemId, current + count);
  }

  /**
   * Remove item(s) from inventory.
   * @param {string} itemId
   * @param {number} count
   * @returns {boolean} Success
   */
  removeItem(itemId, count = 1) {
    const current = this.inventory.get(itemId) || 0;
    if (current < count) return false;

    const remaining = current - count;
    if (remaining <= 0) {
      this.inventory.delete(itemId);
    } else {
      this.inventory.set(itemId, remaining);
    }
    return true;
  }

  /**
   * Get count of an item in inventory.
   * @param {string} itemId
   * @returns {number}
   */
  getItemCount(itemId) {
    return this.inventory.get(itemId) || 0;
  }

  /**
   * Get sorted inventory list.
   * @returns {{itemId: string, count: number}[]}
   */
  getInventoryList() {
    const list = [];
    for (const [itemId, count] of this.inventory) {
      list.push({ itemId, count });
    }
    list.sort((a, b) => a.itemId.localeCompare(b.itemId));
    return list;
  }

  /**
   * Add gold.
   * @param {number} amount
   */
  addGold(amount) {
    this.gold += amount;
  }

  /**
   * Spend gold. Returns false if not enough.
   * @param {number} amount
   * @returns {boolean}
   */
  spendGold(amount) {
    if (this.gold < amount) return false;
    this.gold -= amount;
    return true;
  }

  /**
   * Full heal all members (active + reserve). Revives downed members.
   * Called at inn.
   */
  healAll() {
    for (const member of this.allMembers) {
      member.isDowned = false;
      member.isAlive = true;
      member.stats.hp = member.stats.maxHp;
      member.stats.mp = member.stats.maxMp;
      member.statusEffects = [];
    }
  }

  /**
   * Revive all downed members with 50% HP.
   */
  reviveAll() {
    for (const member of this.allMembers) {
      if (member.isDowned) {
        member.revive(0.5);
      }
    }
  }

  /**
   * Average level of active members.
   * @returns {number}
   */
  getAverageLevel() {
    if (this.activeMembers.length === 0) return 1;
    const total = this.activeMembers.reduce((sum, m) => sum + m.level, 0);
    return Math.floor(total / this.activeMembers.length);
  }

  /**
   * Get alive active members (not downed, still alive).
   * @returns {Character[]}
   */
  getAliveMembers() {
    return this.activeMembers.filter((m) => m.isAlive && !m.isDowned);
  }

  /**
   * Serialize party to plain object.
   * @returns {object}
   */
  toData() {
    return {
      activeIds: this.activeMembers.map((c) => c.id),
      reserveIds: this.reserveMembers.map((c) => c.id),
      allIds: this.allMembers.map((c) => c.id),
      gold: this.gold,
      inventory: Array.from(this.inventory.entries()),
      memberData: this.allMembers.map((c) => c.toData()),
    };
  }

  /**
   * Restore party from serialized data.
   * @param {object} data
   * @returns {Party}
   */
  static fromData(data) {
    const party = new Party();

    // Clear auto-generated members
    party.activeMembers = [];
    party.reserveMembers = [];
    party.allMembers = [];

    // Restore all members from memberData
    for (const memberData of data.memberData) {
      const character = Character.fromData(memberData);
      party.allMembers.push(character);
    }

    // Restore active/reserve from ids
    for (const id of data.activeIds) {
      const char = party.allMembers.find((c) => c.id === id);
      if (char) party.activeMembers.push(char);
    }

    for (const id of data.reserveIds) {
      const char = party.allMembers.find((c) => c.id === id);
      if (char) party.reserveMembers.push(char);
    }

    // Restore gold
    party.gold = data.gold;

    // Restore inventory
    party.inventory = new Map(data.inventory);

    return party;
  }
}

export default Party;
