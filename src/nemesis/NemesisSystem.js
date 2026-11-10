// NemesisSystem.js — Core nemesis manager for the Hamburglar lieutenant system

import { NemesisEntity, RANKS, PERSONALITIES } from './NemesisEntity.js';
import { NemesisGenerator } from './NemesisGenerator.js';
import { uuid, xpForLevel } from '../utils/math.js';

const REGIONS = [
  'fry_valley',
  'burger_highlands',
  'mcflurry_tundra',
  'happy_meal_forest',
  'drive_thru_desert',
  'play_place_plains',
  'golden_arches_castle',
];

const MAX_EVENT_LOG = 50;

export class NemesisSystem {
  constructor() {
    this.lieutenants = [];
    this.hierarchy = null;
    this.playerDefeats = 0;
    this.playerVictories = 0;
    this.regionBosses = new Map();
    this.eventLog = [];
    this.backgroundTimer = 0;
    this._xpTimer = 0;
    this._rivalryTimer = 0;
  }

  init() {
    const generator = new NemesisGenerator(Date.now());
    this.lieutenants = generator.generateHierarchy(18);
    this._buildHierarchyTree();
    this._assignRegionBosses();
    this._addEvent('The Hamburglar\'s lieutenant hierarchy has been established.');
  }

  _buildHierarchyTree() {
    const lord = this.lieutenants.find(l => l.rankIndex === 5);
    if (!lord) {
      this.hierarchy = { lordId: null, captains: [] };
      return;
    }

    this.hierarchy = {
      lordId: lord.id,
      captains: lord.subordinates.map(capId => {
        const captain = this.getLieutenant(capId);
        return {
          id: capId,
          subordinates: captain ? captain.subordinates.map(ltId => {
            const lt = this.getLieutenant(ltId);
            return {
              id: ltId,
              subordinates: lt ? lt.subordinates : [],
            };
          }) : [],
        };
      }),
    };
  }

  _assignRegionBosses() {
    // Sort active lieutenants by rank (highest first), exclude Lord
    const available = this.lieutenants
      .filter(l => l.isAlive && !l.isShamed && l.rankIndex >= 3 && l.rankIndex <= 4)
      .sort((a, b) => b.rankIndex - a.rankIndex);

    // If not enough Captains/Lieutenants, use Rogues
    if (available.length < REGIONS.length) {
      const extras = this.lieutenants
        .filter(l => l.isAlive && !l.isShamed && l.rankIndex === 2 && !available.includes(l))
        .sort((a, b) => b.level - a.level);
      available.push(...extras);
    }

    for (let i = 0; i < REGIONS.length && i < available.length; i++) {
      this.assignToRegion(available[i].id, REGIONS[i]);
    }
  }

  getLieutenant(id) {
    return this.lieutenants.find(l => l.id === id) || null;
  }

  getActiveLieutenants() {
    return this.lieutenants.filter(l => l.isAlive && !l.isShamed);
  }

  getByRank(rankName) {
    return this.lieutenants.filter(l => l.rank === rankName);
  }

  recordPlayerDefeat(lieutenantId, partyData) {
    const lieutenant = this.getLieutenant(lieutenantId);
    if (!lieutenant || !lieutenant.isAlive) {
      return { taunt: '...', promoted: false, newRank: null };
    }

    this.playerDefeats++;

    // Calculate XP based on party average level
    const partyLevels = partyData?.levels || [1];
    const avgLevel = partyLevels.reduce((a, b) => a + b, 0) / partyLevels.length;
    const xpGain = Math.floor(avgLevel * 20);

    const xpResult = lieutenant.gainXP(xpGain);

    // Record grudge against party members
    if (partyData?.memberIds) {
      for (const memberId of partyData.memberIds) {
        lieutenant.addGrudge(memberId, 'Defeated the party in combat');
      }
    }

    const taunt = lieutenant.getTaunt();
    let newRank = null;

    if (xpResult.rankedUp) {
      newRank = lieutenant.rank;
      this._addEvent(`${lieutenant.name} has been promoted to ${lieutenant.rank} after defeating the party!`);
    }

    this._addEvent(`${lieutenant.name} defeated the party and gained ${xpGain} XP. "${taunt}"`);

    return {
      taunt,
      promoted: xpResult.rankedUp,
      newRank,
    };
  }

  recordPlayerVictory(lieutenantId, method, escaped) {
    const lieutenant = this.getLieutenant(lieutenantId);
    if (!lieutenant || !lieutenant.isAlive) {
      return { defeated: false, promotions: [], message: '...' };
    }

    if (escaped) {
      this.playerVictories++;

      // Lieutenant gains XP from the encounter
      const xpGain = 15 * (lieutenant.level || 1);
      const xpResult = lieutenant.gainXP(xpGain);

      // Add resistance to the method used if it's element-based
      if (method && !lieutenant.strengths.includes(method) && !lieutenant.weaknesses.includes(method)) {
        // 50% chance to develop a resistance
        if (Math.random() < 0.5) {
          lieutenant.strengths.push(method);
          if (Math.random() < 0.4) {
            lieutenant.immunities.push(method);
          } else {
            lieutenant.resistances.push(method);
          }
          this._addEvent(`${lieutenant.name} developed a resistance to ${method}!`);
        }
      }

      const taunt = lieutenant.getTaunt();
      let newRank = null;

      if (xpResult.rankedUp) {
        newRank = lieutenant.rank;
        this._addEvent(`${lieutenant.name} was promoted to ${lieutenant.rank} after surviving the encounter!`);
      }

      this._addEvent(`${lieutenant.name} escaped but grew stronger. "${taunt}"`);

      return {
        defeated: false,
        promotions: xpResult.rankedUp ? [{ id: lieutenant.id, newRank: lieutenant.rank }] : [],
        message: taunt,
      };
    }

    // Not escaped — lieutenant is defeated
    this.playerVictories++;
    lieutenant.isAlive = false;

    const promotions = [];

    // Check if rivals should be promoted
    for (const rivalId of lieutenant.rivals) {
      const rival = this.getLieutenant(rivalId);
      if (rival && rival.isAlive && !rival.isShamed) {
        const rivalXP = lieutenant.level * 30;
        const rivalResult = rival.gainXP(rivalXP);
        if (rivalResult.rankedUp) {
          promotions.push({ id: rival.id, newRank: rival.rank });
          this._addEvent(`${rival.name} was promoted to ${rival.rank} after their rival ${lieutenant.name} was defeated!`);
        } else if (rivalResult.leveledUp) {
          this._addEvent(`${rival.name} gained ${rivalXP} XP from rival ${lieutenant.name}'s defeat.`);
        }
      }
    }

    const message = `${lieutenant.name} has been defeated!`;
    this._addEvent(message);

    return {
      defeated: true,
      promotions,
      message,
    };
  }

  recordShame(lieutenantId, weaknessUsed) {
    const lieutenant = this.getLieutenant(lieutenantId);
    if (!lieutenant) {
      return { backstory: '', demotedTo: '' };
    }

    const backstory = lieutenant.shame();
    this._addEvent(`${lieutenant.name} has been SHAMED using ${weaknessUsed || 'their weakness'}! Demoted to ${lieutenant.rank}.`);
    this._addEvent(`Backstory: ${backstory}`);

    return {
      backstory,
      demotedTo: lieutenant.rank,
    };
  }

  processPowerStruggles() {
    const results = [];
    const shamed = this.lieutenants.filter(l => l.isShamed && l.isAlive);

    for (const shamedLt of shamed) {
      for (const rivalId of shamedLt.rivals) {
        const rival = this.getLieutenant(rivalId);
        if (!rival || !rival.isAlive || rival.defected) continue;

        const defects = Math.random() < 0.3;
        if (defects) {
          rival.defected = true;
          const msg = rival.getDefectionMessage();
          this._addEvent(`${rival.name} has defected! "${msg}"`);
          results.push({
            lieutenantId: rival.id,
            message: msg,
            defected: true,
          });
        } else {
          results.push({
            lieutenantId: rival.id,
            message: '',
            defected: false,
          });
        }
      }
    }

    return results;
  }

  getTauntingMessage(lieutenant) {
    if (typeof lieutenant === 'string') {
      lieutenant = this.getLieutenant(lieutenant);
    }
    return lieutenant ? lieutenant.getTaunt() : '...';
  }

  getDefectionMessage(lieutenant) {
    if (typeof lieutenant === 'string') {
      lieutenant = this.getLieutenant(lieutenant);
    }
    return lieutenant ? lieutenant.getDefectionMessage() : '...';
  }

  getHierarchyMap() {
    const nodes = this.lieutenants.map(l => ({
      id: l.id,
      name: l.name,
      rank: l.rank,
      rankIndex: l.rankIndex,
      isAlive: l.isAlive,
      isShamed: l.isShamed,
      assignedRegion: l.assignedRegion,
    }));

    const edges = [];

    // Command edges
    for (const l of this.lieutenants) {
      for (const subId of l.subordinates) {
        edges.push({ from: l.id, to: subId, type: 'command' });
      }
    }

    // Rivalry edges (deduplicate)
    const rivalPairs = new Set();
    for (const l of this.lieutenants) {
      for (const rivalId of l.rivals) {
        const key = [l.id, rivalId].sort().join('|');
        if (!rivalPairs.has(key)) {
          rivalPairs.add(key);
          edges.push({ from: l.id, to: rivalId, type: 'rivalry' });
        }
      }
    }

    return { nodes, edges };
  }

  assignToRegion(lieutenantId, regionId) {
    const lieutenant = this.getLieutenant(lieutenantId);
    if (!lieutenant) return;

    // Remove from any previous region
    for (const [region, ltId] of this.regionBosses) {
      if (ltId === lieutenantId) {
        this.regionBosses.delete(region);
      }
    }

    lieutenant.assignedRegion = regionId;
    this.regionBosses.set(regionId, lieutenantId);
  }

  getRegionBoss(regionId) {
    const ltId = this.regionBosses.get(regionId);
    if (!ltId) return null;
    const lt = this.getLieutenant(ltId);
    if (!lt || !lt.isAlive) return null;
    return lt;
  }

  update(dt) {
    this.backgroundTimer += dt;
    this._xpTimer += dt;
    this._rivalryTimer += dt;

    const events = [];

    // Every ~60 seconds, give a random active lieutenant some XP
    if (this._xpTimer >= 60) {
      this._xpTimer = 0;
      const active = this.getActiveLieutenants();
      if (active.length > 0) {
        const target = active[Math.floor(Math.random() * active.length)];
        const xpGain = 5 + Math.floor(Math.random() * 11); // 5-15
        const result = target.gainXP(xpGain);
        if (result.leveledUp) {
          const msg = `${target.name} trained in secret and reached level ${target.level}!`;
          events.push(msg);
          this._addEvent(msg);
          if (result.rankedUp) {
            const msg2 = `${target.name} was promoted to ${target.rank}!`;
            events.push(msg2);
            this._addEvent(msg2);
          }
        }
      }
    }

    // Every ~120 seconds, escalate a random rivalry
    if (this._rivalryTimer >= 120) {
      this._rivalryTimer = 0;
      const active = this.getActiveLieutenants().filter(l => l.rivals.length > 0);
      if (active.length > 0) {
        const lt = active[Math.floor(Math.random() * active.length)];
        const rivalId = lt.rivals[Math.floor(Math.random() * lt.rivals.length)];
        const rival = this.getLieutenant(rivalId);
        if (rival && rival.isAlive) {
          const rivalries = [
            `${lt.name} challenged ${rival.name} for control of territory!`,
            `${lt.name} sabotaged ${rival.name}'s robbery operation!`,
            `${rival.name} ambushed ${lt.name} in a turf dispute!`,
            `${lt.name} and ${rival.name} clashed over stolen Happy Meals!`,
          ];
          const msg = rivalries[Math.floor(Math.random() * rivalries.length)];
          events.push(msg);
          this._addEvent(msg);
        }
      }
    }

    return events;
  }

  _addEvent(message) {
    this.eventLog.push(message);
    if (this.eventLog.length > MAX_EVENT_LOG) {
      this.eventLog.shift();
    }
  }

  getEventLog() {
    return [...this.eventLog];
  }

  toData() {
    return {
      lieutenants: this.lieutenants.map(l => l.toData()),
      hierarchy: this.hierarchy,
      playerDefeats: this.playerDefeats,
      playerVictories: this.playerVictories,
      regionBosses: Array.from(this.regionBosses.entries()),
      eventLog: [...this.eventLog],
      backgroundTimer: this.backgroundTimer,
      _xpTimer: this._xpTimer,
      _rivalryTimer: this._rivalryTimer,
    };
  }

  static fromData(data) {
    const system = Object.create(NemesisSystem.prototype);
    system.lieutenants = (data.lieutenants || []).map(ltData => NemesisEntity.fromData(ltData));
    system.hierarchy = data.hierarchy || null;
    system.playerDefeats = data.playerDefeats || 0;
    system.playerVictories = data.playerVictories || 0;
    system.regionBosses = new Map(data.regionBosses || []);
    system.eventLog = data.eventLog || [];
    system.backgroundTimer = data.backgroundTimer || 0;
    system._xpTimer = data._xpTimer || 0;
    system._rivalryTimer = data._rivalryTimer || 0;
    return system;
  }
}

export { NemesisSystem as default, REGIONS };
