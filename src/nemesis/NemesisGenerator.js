// NemesisGenerator.js — Generates the initial hierarchy of Hamburglar lieutenants

import { NemesisEntity, RANKS, PERSONALITIES, NEMESIS_ELEMENTS, TRAIT_OPTIONS } from './NemesisEntity.js';
import { generateNemesisName } from '../utils/procedural.js';
import { SeededRandom, uuid } from '../utils/math.js';

const ALL_ELEMENTS = NEMESIS_ELEMENTS;

const TRAIT_KEYS = ['eyeColor', 'scar', 'weapon', 'bodyType', 'height'];

export class NemesisGenerator {
  constructor(seed = Date.now()) {
    this.rng = new SeededRandom(seed);
    this.elementDistribution = new Map();
    this.personalityDistribution = new Map();
    this.traitDistribution = new Map();
  }

  generateHierarchy(count = 18) {
    const entities = [];

    // Determine rank distribution
    const numCaptains = count >= 18 ? 3 : 2;
    const numLieutenants = count >= 18 ? 5 : 4;
    const numRogues = 4;
    const numBandits = 3;
    const numThieves = count - 1 - numCaptains - numLieutenants - numRogues - numBandits;

    const rankDistribution = [
      { rankIndex: 5, count: 1 },         // Lord
      { rankIndex: 4, count: numCaptains },
      { rankIndex: 3, count: numLieutenants },
      { rankIndex: 2, count: numRogues },
      { rankIndex: 1, count: numBandits },
      { rankIndex: 0, count: Math.max(2, numThieves) },
    ];

    const baseLevels = [3, 8, 15, 22, 30, 40]; // Thief, Bandit, Rogue, Lieutenant, Captain, Lord

    for (const { rankIndex, count: rankCount } of rankDistribution) {
      for (let i = 0; i < rankCount; i++) {
        const element = this.rollElement();
        const personality = this.rollPersonality();
        const strengths = this.rollStrengths(element);
        const weaknesses = this.rollWeaknesses(element, strengths);
        const traits = this.rollTraits();
        const baseLevel = baseLevels[rankIndex];
        const level = Math.max(1, baseLevel + this.rng.int(-2, 2));

        const entity = new NemesisEntity({
          rankIndex,
          level,
          bodyElement: element,
          personality,
          strengths,
          weaknesses,
          traits,
        });

        entities.push(entity);
      }
    }

    // Assign rivals (bidirectional)
    this.assignRivals(entities);

    // Assign command hierarchy
    this.assignCommand(entities);

    return entities;
  }

  generateName(seed) {
    return generateNemesisName(seed);
  }

  rollPersonality() {
    // Ensure distribution across all 5 personalities
    const counts = PERSONALITIES.map(p => this.personalityDistribution.get(p) || 0);
    const minCount = Math.min(...counts);
    const leastUsed = PERSONALITIES.filter(p => (this.personalityDistribution.get(p) || 0) === minCount);

    let chosen;
    if (leastUsed.length > 0 && this.rng.chance(0.7)) {
      chosen = this.rng.choice(leastUsed);
    } else {
      chosen = this.rng.choice(PERSONALITIES);
    }

    this.personalityDistribution.set(chosen, (this.personalityDistribution.get(chosen) || 0) + 1);
    return chosen;
  }

  rollElement() {
    // Ensure distribution across all 6 elements
    const counts = ALL_ELEMENTS.map(e => this.elementDistribution.get(e) || 0);
    const minCount = Math.min(...counts);
    const leastUsed = ALL_ELEMENTS.filter(e => (this.elementDistribution.get(e) || 0) === minCount);

    let chosen;
    if (leastUsed.length > 0 && this.rng.chance(0.7)) {
      chosen = this.rng.choice(leastUsed);
    } else {
      chosen = this.rng.choice(ALL_ELEMENTS);
    }

    this.elementDistribution.set(chosen, (this.elementDistribution.get(chosen) || 0) + 1);
    return chosen;
  }

  rollStrengths(element) {
    const available = ALL_ELEMENTS.filter(e => e !== element);
    const count = this.rng.chance(0.25) ? 2 : 1;
    const strengths = [];

    const shuffled = [...available];
    // Simple shuffle using rng
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng.next() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    for (let i = 0; i < count && i < shuffled.length; i++) {
      strengths.push(shuffled[i]);
    }

    return strengths;
  }

  rollWeaknesses(element, strengths) {
    const available = ALL_ELEMENTS.filter(e => e !== element && !strengths.includes(e));
    const count = this.rng.chance(0.25) ? 2 : 1;
    const weaknesses = [];

    const shuffled = [...available];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng.next() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    for (let i = 0; i < count && i < shuffled.length; i++) {
      weaknesses.push(shuffled[i]);
    }

    return weaknesses;
  }

  rollTraits() {
    const traits = {};
    for (const key of TRAIT_KEYS) {
      const options = TRAIT_OPTIONS[key];
      // Try to distribute traits
      const keyDist = this.traitDistribution.get(key) || new Map();
      const counts = options.map(o => keyDist.get(o) || 0);
      const minCount = Math.min(...counts);
      const leastUsed = options.filter(o => (keyDist.get(o) || 0) === minCount);

      let chosen;
      if (leastUsed.length > 0 && this.rng.chance(0.6)) {
        chosen = this.rng.choice(leastUsed);
      } else {
        chosen = this.rng.choice(options);
      }

      keyDist.set(chosen, (keyDist.get(chosen) || 0) + 1);
      this.traitDistribution.set(key, keyDist);
      traits[key] = chosen;
    }
    return traits;
  }

  assignRivals(entities) {
    // Group by rank for preferential assignment
    const byRank = new Map();
    for (const e of entities) {
      if (!byRank.has(e.rankIndex)) byRank.set(e.rankIndex, []);
      byRank.get(e.rankIndex).push(e);
    }

    for (const entity of entities) {
      if (entity.rivals.length >= 1) continue;

      // Find candidates: same rank or adjacent rank, not already a rival
      const candidateRanks = [entity.rankIndex, entity.rankIndex - 1, entity.rankIndex + 1];
      let candidates = [];

      for (const r of candidateRanks) {
        const pool = byRank.get(r) || [];
        candidates = candidates.concat(pool.filter(c => c.id !== entity.id && !entity.rivals.includes(c.id)));
      }

      if (candidates.length === 0) {
        // Fallback: any entity that isn't already a rival
        candidates = entities.filter(c => c.id !== entity.id && !entity.rivals.includes(c.id));
      }

      if (candidates.length > 0) {
        // Prefer candidates who don't have a rival yet
        const withoutRivals = candidates.filter(c => c.rivals.length === 0);
        const pool = withoutRivals.length > 0 ? withoutRivals : candidates;
        const rival = this.rng.choice(pool);

        // Bidirectional assignment
        entity.rivals.push(rival.id);
        if (!rival.rivals.includes(entity.id)) {
          rival.rivals.push(entity.id);
        }
      }
    }
  }

  assignCommand(entities) {
    const byRank = new Map();
    for (const e of entities) {
      if (!byRank.has(e.rankIndex)) byRank.set(e.rankIndex, []);
      byRank.get(e.rankIndex).push(e);
    }

    const lord = (byRank.get(5) || [])[0];
    const captains = byRank.get(4) || [];
    const lieutenants = byRank.get(3) || [];
    const rogues = byRank.get(2) || [];
    const bandits = byRank.get(1) || [];
    const thieves = byRank.get(0) || [];

    // Lord commands all Captains
    if (lord) {
      for (const cap of captains) {
        cap.commanderId = lord.id;
        lord.subordinates.push(cap.id);
      }
    }

    // Each Captain commands 2-3 Lieutenants
    let ltIdx = 0;
    for (const cap of captains) {
      const numSubs = this.rng.int(2, 3);
      for (let i = 0; i < numSubs && ltIdx < lieutenants.length; i++) {
        const lt = lieutenants[ltIdx++];
        lt.commanderId = cap.id;
        cap.subordinates.push(lt.id);
      }
    }

    // Each Lieutenant commands 1-2 Rogues/Bandits/Thieves
    const lowerRanks = [...rogues, ...bandits, ...thieves];
    // Shuffle lower ranks
    for (let i = lowerRanks.length - 1; i > 0; i--) {
      const j = Math.floor(this.rng.next() * (i + 1));
      [lowerRanks[i], lowerRanks[j]] = [lowerRanks[j], lowerRanks[i]];
    }

    let subIdx = 0;
    for (const lt of lieutenants) {
      const numSubs = this.rng.int(1, 2);
      for (let i = 0; i < numSubs && subIdx < lowerRanks.length; i++) {
        const sub = lowerRanks[subIdx++];
        if (!sub.commanderId) {
          sub.commanderId = lt.id;
          lt.subordinates.push(sub.id);
        }
      }
    }

    // Any unassigned lower ranks get assigned to Captains or Lord
    while (subIdx < lowerRanks.length) {
      const sub = lowerRanks[subIdx++];
      if (!sub.commanderId) {
        if (captains.length > 0) {
          const cap = this.rng.choice(captains);
          sub.commanderId = cap.id;
          cap.subordinates.push(sub.id);
        } else if (lord) {
          sub.commanderId = lord.id;
          lord.subordinates.push(sub.id);
        }
      }
    }
  }
}

export { NemesisGenerator as default };
