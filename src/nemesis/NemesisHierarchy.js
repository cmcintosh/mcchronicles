// NemesisHierarchy.js — Visualization data for the nemesis hierarchy menu (data-only)

import { RANKS } from './NemesisEntity.js';

const RANK_COLORS = [
  0x888888, // Thief
  0xaaaa44, // Bandit
  0xaa6644, // Rogue
  0x6644aa, // Lieutenant
  0x4488cc, // Captain
  0xcc4444, // Lord
];

const Y_SPACING = 90;
const X_SPACING = 120;

export class NemesisHierarchy {
  /**
   * Build full hierarchy visualization data.
   * @param {Array} lieutenants — array of NemesisEntity (or entity data objects)
   * @param {Object} hierarchy — hierarchy tree from NemesisSystem
   * @returns {{ nodes: Array, edges: Array }}
   */
  buildHierarchyData(lieutenants, hierarchy) {
    // Group entities by rank
    const byRank = new Map();
    for (const lt of lieutenants) {
      const ri = lt.rankIndex ?? 0;
      if (!byRank.has(ri)) byRank.set(ri, []);
      byRank.get(ri).push(lt);
    }

    // Build nodes with positions
    const nodes = [];
    for (let rankIndex = 5; rankIndex >= 0; rankIndex--) {
      const rankList = byRank.get(rankIndex) || [];
      const total = rankList.length;
      for (let i = 0; i < total; i++) {
        const lt = rankList[i];
        const pos = this.getNodeForRank(rankIndex, i, total);
        nodes.push({
          id: lt.id,
          name: lt.name,
          rank: lt.rank || RANKS[rankIndex],
          rankIndex,
          x: pos.x,
          y: pos.y,
          isAlive: lt.isAlive,
          isShamed: lt.isShamed,
          assignedRegion: lt.assignedRegion,
          personality: lt.personality,
          bodyElement: lt.bodyElement,
        });
      }
    }

    // Build edges
    const commandEdges = this.getConnections(lieutenants);
    const rivalryEdges = this.getRivalries(lieutenants);

    const edges = [
      ...commandEdges.map(e => ({ ...e, type: 'command' })),
      ...rivalryEdges.map(e => ({ ...e, type: 'rivalry' })),
    ];

    return { nodes, edges };
  }

  /**
   * Calculate position for a node based on its rank and index within that rank.
   * @param {number} rankIndex — 0 (Thief) to 5 (Lord)
   * @param {number} indexInRank — 0-based position within the rank
   * @param {number} totalInRank — total entities at this rank
   * @returns {{ x: number, y: number }}
   */
  getNodeForRank(rankIndex, indexInRank, totalInRank) {
    const y = rankIndex * Y_SPACING;
    const x = (indexInRank - (totalInRank - 1) / 2) * X_SPACING;
    return { x, y };
  }

  /**
   * Get command connection edges (commander → subordinate).
   * Returns from/to coordinates for rendering.
   * @param {Array} lieutenants — array of entities with position data
   * @returns {Array<{ from: {x,y}, to: {x,y}, type: string }>}
   */
  getConnections(lieutenants) {
    // Build a lookup of positions
    const positions = new Map();
    const byRank = new Map();
    for (const lt of lieutenants) {
      const ri = lt.rankIndex ?? 0;
      if (!byRank.has(ri)) byRank.set(ri, []);
      byRank.get(ri).push(lt);
    }

    for (let rankIndex = 5; rankIndex >= 0; rankIndex--) {
      const rankList = byRank.get(rankIndex) || [];
      for (let i = 0; i < rankList.length; i++) {
        const pos = this.getNodeForRank(rankIndex, i, rankList.length);
        positions.set(rankList[i].id, pos);
      }
    }

    const edges = [];
    for (const lt of lieutenants) {
      const fromPos = positions.get(lt.id);
      if (!fromPos) continue;

      for (const subId of (lt.subordinates || [])) {
        const toPos = positions.get(subId);
        if (!toPos) continue;
        edges.push({
          from: { x: fromPos.x, y: fromPos.y },
          to: { x: toPos.x, y: toPos.y },
          type: 'command',
        });
      }
    }

    return edges;
  }

  /**
   * Get rivalry edges (bidirectional, deduplicated).
   * @param {Array} lieutenants — array of entities
   * @returns {Array<{ from: {x,y}, to: {x,y}, type: string }>}
   */
  getRivalries(lieutenants) {
    // Build positions lookup
    const positions = new Map();
    const byRank = new Map();
    for (const lt of lieutenants) {
      const ri = lt.rankIndex ?? 0;
      if (!byRank.has(ri)) byRank.set(ri, []);
      byRank.get(ri).push(lt);
    }

    for (let rankIndex = 5; rankIndex >= 0; rankIndex--) {
      const rankList = byRank.get(rankIndex) || [];
      for (let i = 0; i < rankList.length; i++) {
        const pos = this.getNodeForRank(rankIndex, i, rankList.length);
        positions.set(rankList[i].id, pos);
      }
    }

    const edges = [];
    const seen = new Set();

    for (const lt of lieutenants) {
      const fromPos = positions.get(lt.id);
      if (!fromPos) continue;

      for (const rivalId of (lt.rivals || [])) {
        const key = [lt.id, rivalId].sort().join('|');
        if (seen.has(key)) continue;
        seen.add(key);

        const toPos = positions.get(rivalId);
        if (!toPos) continue;

        edges.push({
          from: { x: fromPos.x, y: fromPos.y },
          to: { x: toPos.x, y: toPos.y },
          type: 'rivalry',
        });
      }
    }

    return edges;
  }

  /**
   * Get the rank label for a rank index.
   * @param {number} rankIndex
   * @returns {string}
   */
  getRankLabel(rankIndex) {
    return RANKS[rankIndex] || 'Unknown';
  }

  /**
   * Get the display color for a rank.
   * @param {number} rankIndex
   * @returns {number} hex color
   */
  getRankColor(rankIndex) {
    return RANK_COLORS[rankIndex] ?? 0x888888;
  }
}

export { RANK_COLORS, NemesisHierarchy as default };
