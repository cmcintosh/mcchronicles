// NemesisMenu.js — Nemesis hierarchy viewer for McChronicles JRPG
// Storybook/ornate aesthetic with golden borders, warm colors, Ni no Kuni-inspired design

const RANK_BADGES = {
  1: '♛',
  2: '♜',
  3: '♝',
  4: '♞',
  5: '♟',
};

const RANK_NAMES = {
  1: 'Supreme Commander',
  2: 'High Commander',
  3: 'Commander',
  4: 'Lieutenant',
  5: 'Ensign',
};

const ELEMENT_COLORS = {
  fire: '#e8503a',
  water: '#3a7be8',
  earth: '#8b6b3a',
  air: '#a8c8e8',
  light: '#f5d76e',
  dark: '#6a4a7a',
  lightning: '#f0c040',
  ice: '#80c8e8',
  nature: '#4a8b4a',
  none: '#b0b0b0',
};

function getElementColor(element) {
  return ELEMENT_COLORS[element] || ELEMENT_COLORS.none;
}

function hexFromInt(hexInt) {
  return '#' + (hexInt & 0xffffff).toString(16).padStart(6, '0');
}

const NEMESIS_STYLES = `
.mc-nemesis-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(30, 20, 12, 0.97), rgba(45, 30, 18, 0.97));
  font-family: Georgia, 'Times New Roman', serif;
  color: #f0e0c0;
  display: flex;
  flex-direction: column;
  z-index: 9001;
  overflow: hidden;
}

.mc-nemesis-header {
  text-align: center;
  padding: 18px 20px 12px;
  border-bottom: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(60, 42, 25, 0.9), rgba(40, 28, 16, 0.6));
  flex-shrink: 0;
}

.mc-nemesis-title {
  font-size: 26px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.7);
  letter-spacing: 2px;
  margin: 0;
}

.mc-nemesis-subtitle {
  font-size: 13px;
  color: #b89860;
  margin-top: 4px;
  font-style: italic;
}

.mc-nemesis-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.mc-nemesis-tree-container {
  flex: 1;
  overflow: auto;
  padding: 20px 30px;
  position: relative;
}

.mc-nemesis-detail-panel {
  width: 340px;
  border-left: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(35, 25, 15, 0.95), rgba(25, 18, 10, 0.95));
  overflow-y: auto;
  padding: 20px;
  flex-shrink: 0;
}

.mc-nemesis-tree {
  position: relative;
  min-width: 600px;
}

.mc-nemesis-node {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.mc-nemesis-node:hover {
  transform: scale(1.08);
  z-index: 10;
}

.mc-nemesis-node-selected {
  transform: scale(1.12);
  z-index: 11;
}

.mc-nemesis-node-portrait {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 3px solid #c8a050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
  box-shadow: 0 2px 8px rgba(0,0,0,0.5);
  position: relative;
}

.mc-nemesis-node-dead .mc-nemesis-node-portrait {
  filter: grayscale(1) brightness(0.4);
  border-color: #555;
}

.mc-nemesis-node-dead::after {
  content: '✝';
  position: absolute;
  top: -4px;
  right: -4px;
  font-size: 22px;
  color: #888;
  text-shadow: 0 0 4px rgba(0,0,0,0.8);
}

.mc-nemesis-node-shamed .mc-nemesis-node-portrait {
  border-color: #8b3a3a;
  border-style: dashed;
}

.mc-nemesis-node-info {
  margin-top: 6px;
  text-align: center;
  font-size: 12px;
  line-height: 1.3;
}

.mc-nemesis-node-name {
  font-weight: bold;
  color: #f0e0c0;
  max-width: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mc-nemesis-node-rank {
  color: #c8a050;
  font-size: 18px;
  margin-top: 2px;
}

.mc-nemesis-node-level {
  color: #a89070;
  font-size: 11px;
}

.mc-nemesis-node-status-tag {
  font-size: 9px;
  padding: 1px 6px;
  border-radius: 8px;
  margin-top: 3px;
  display: inline-block;
}

.mc-nemesis-tag-dead {
  background: rgba(80, 30, 30, 0.7);
  color: #cc6666;
}

.mc-nemesis-tag-shamed {
  background: rgba(80, 50, 30, 0.7);
  color: #cc9966;
}

.mc-nemesis-tag-alive {
  background: rgba(30, 60, 30, 0.6);
  color: #88bb66;
}

.mc-nemesis-svg-lines {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

.mc-nemesis-detail-empty {
  text-align: center;
  color: #8a7050;
  font-style: italic;
  padding: 40px 20px;
  font-size: 14px;
}

.mc-nemesis-detail-name {
  font-size: 22px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  margin: 0 0 4px;
}

.mc-nemesis-detail-title {
  font-size: 13px;
  color: #c8a050;
  font-style: italic;
  margin-bottom: 16px;
}

.mc-nemesis-detail-section {
  margin-bottom: 14px;
}

.mc-nemesis-detail-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #b89860;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.3);
  padding-bottom: 2px;
}

.mc-nemesis-detail-value {
  font-size: 13px;
  color: #d8c8a0;
  line-height: 1.5;
}

.mc-nemesis-stat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
}

.mc-nemesis-stat-row {
  display: flex;
  justify-content: space-between;
  color: #d8c8a0;
}

.mc-nemesis-stat-label {
  color: #a89070;
}

.mc-nemesis-stat-value {
  font-weight: bold;
}

.mc-nemesis-element-badge {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
}

.mc-nemesis-list-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
}

.mc-nemesis-list-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: linear-gradient(90deg, rgba(50, 35, 20, 0.8), rgba(40, 28, 16, 0.5));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s;
}

.mc-nemesis-list-item:hover {
  border-color: #c8a050;
  background: linear-gradient(90deg, rgba(60, 42, 25, 0.9), rgba(50, 35, 20, 0.6));
}

.mc-nemesis-list-item-selected {
  border-color: #f5d090;
  background: linear-gradient(90deg, rgba(70, 50, 28, 0.95), rgba(55, 38, 22, 0.7));
}

.mc-nemesis-list-portrait {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid #c8a050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  flex-shrink: 0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
}

.mc-nemesis-list-info {
  flex: 1;
  min-width: 0;
}

.mc-nemesis-list-name {
  font-size: 14px;
  font-weight: bold;
  color: #f0e0c0;
}

.mc-nemesis-list-meta {
  font-size: 11px;
  color: #a89070;
  margin-top: 2px;
}

.mc-nemesis-close-btn {
  position: absolute;
  top: 16px;
  right: 20px;
  background: rgba(60, 40, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 10;
  transition: background 0.15s;
}

.mc-nemesis-close-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-nemesis-legend {
  display: flex;
  gap: 16px;
  justify-content: center;
  padding: 8px 0;
  font-size: 11px;
  color: #a89070;
}

.mc-nemesis-legend-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mc-nemesis-legend-line {
  width: 20px;
  height: 2px;
  display: inline-block;
}

.mc-nemesis-legend-gold {
  background: #c8a050;
}

.mc-nemesis-legend-red {
  background: #cc4444;
}

.mc-nemesis-legend-gray {
  background: #666;
}
`;

let styleInjectedNemesis = false;

function injectNemesisStyles() {
  if (styleInjectedNemesis) return;
  const tag = document.createElement('style');
  tag.id = 'mc-nemesis-styles';
  tag.textContent = NEMESIS_STYLES;
  document.head.appendChild(tag);
  styleInjectedNemesis = true;
}

export default class NemesisMenu {
  constructor() {
    this.nemesisSystem = null;
    this.lieutenants = [];
    this.selectedId = null;
    this.overlay = null;
    this.visible = false;
    this._keyHandler = null;
    this._onClose = null;
  }

  show(nemesisSystem, onClose) {
    injectNemesisStyles();
    this.nemesisSystem = nemesisSystem;
    this._onClose = onClose || null;
    this.lieutenants = (nemesisSystem && typeof nemesisSystem.getHierarchy === 'function')
      ? nemesisSystem.getHierarchy()
      : [];
    this.selectedId = null;
    this.visible = true;
    this._render();
    this._bindKeys();
  }

  hide() {
    this.visible = false;
    this.selectedId = null;
    this._unbindKeys();
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    this.overlay = null;
  }

  selectLieutenant(id) {
    this.selectedId = id;
    this._renderDetailPanel();
    this._highlightNode();
  }

  _bindKeys() {
    this._keyHandler = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        this.hide();
        if (this._onClose) this._onClose();
      }
    };
    document.addEventListener('keydown', this._keyHandler);
  }

  _unbindKeys() {
    if (this._keyHandler) {
      document.removeEventListener('keydown', this._keyHandler);
      this._keyHandler = null;
    }
  }

  _render() {
    if (this.overlay) {
      this.overlay.parentNode.removeChild(this.overlay);
    }

    this.overlay = document.createElement('div');
    this.overlay.className = 'mc-nemesis-overlay';

    // Header
    const header = document.createElement('div');
    header.className = 'mc-nemesis-header';
    header.innerHTML = `
      <h2 class="mc-nemesis-title">⚔ Nemesis Hierarchy ⚔</h2>
      <div class="mc-nemesis-subtitle">The Burger King's Dread Command</div>
      <div class="mc-nemesis-legend">
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-gold"></span> Command</div>
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-red"></span> Rivalry</div>
        <div class="mc-nemesis-legend-item"><span class="mc-nemesis-legend-line mc-nemesis-legend-gray"></span> Deceased</div>
      </div>
    `;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'mc-nemesis-close-btn';
    closeBtn.textContent = '✕ Close';
    closeBtn.onclick = () => {
      this.hide();
      if (this._onClose) this._onClose();
    };
    header.appendChild(closeBtn);

    this.overlay.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'mc-nemesis-body';

    // Tree container
    const treeContainer = document.createElement('div');
    treeContainer.className = 'mc-nemesis-tree-container';
    treeContainer.id = 'mc-nemesis-tree-container';

    body.appendChild(treeContainer);

    // Detail panel
    const detailPanel = document.createElement('div');
    detailPanel.className = 'mc-nemesis-detail-panel';
    detailPanel.id = 'mc-nemesis-detail-panel';
    detailPanel.innerHTML = '<div class="mc-nemesis-detail-empty">Select a lieutenant to view details...</div>';

    body.appendChild(detailPanel);
    this.overlay.appendChild(body);
    document.body.appendChild(this.overlay);

    this._renderTree(treeContainer);
    this._renderDetailPanel();
  }

  _renderTree(container) {
    container.innerHTML = '';

    if (this.lieutenants.length === 0) {
      container.innerHTML = '<div class="mc-nemesis-detail-empty">No nemesis data available.</div>';
      return;
    }

    // Sort by rank (1 = highest)
    const sorted = [...this.lieutenants].sort((a, b) => (a.rank || 5) - (b.rank || 5));

    // Group by rank
    const ranks = {};
    for (const lt of sorted) {
      const r = lt.rank || 5;
      if (!ranks[r]) ranks[r] = [];
      ranks[r].push(lt);
    }

    const rankKeys = Object.keys(ranks).map(Number).sort((a, b) => a - b);
    const maxRowWidth = Math.max(...rankKeys.map(r => ranks[r].length));

    const nodeWidth = 130;
    const nodeHeight = 120;
    const hSpacing = 140;
    const vSpacing = 150;
    const totalWidth = Math.max(maxRowWidth * hSpacing, 600);
    const totalHeight = rankKeys.length * vSpacing + 40;

    // Build a map of node positions
    const positions = {};
    const allNodes = [];

    rankKeys.forEach((rank, rowIdx) => {
      const rowNodes = ranks[rank];
      const rowWidth = rowNodes.length * hSpacing;
      const startX = (totalWidth - rowWidth) / 2;

      rowNodes.forEach((lt, colIdx) => {
        const x = startX + colIdx * hSpacing + hSpacing / 2;
        const y = rowIdx * vSpacing + 30;
        positions[lt.id] = { x, y };
        allNodes.push({ lt, x, y });
      });
    });

    // Tree wrapper
    const tree = document.createElement('div');
    tree.className = 'mc-nemesis-tree';
    tree.style.width = totalWidth + 'px';
    tree.style.height = totalHeight + 'px';

    // SVG lines layer
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('mc-nemesis-svg-lines');
    svg.setAttribute('width', totalWidth);
    svg.setAttribute('height', totalHeight);
    svg.style.width = totalWidth + 'px';
    svg.style.height = totalHeight + 'px';

    // Draw command lines (parent -> child based on rank hierarchy)
    // We connect each node to the nearest higher-rank node
    const ltMap = {};
    for (const lt of this.lieutenants) {
      ltMap[lt.id] = lt;
    }

    for (let i = 1; i < rankKeys.length; i++) {
      const currentRank = rankKeys[i];
      const currentNodes = ranks[currentRank];
      const parentNodes = ranks[rankKeys[i - 1]];

      for (const child of currentNodes) {
        // Find nearest parent by position
        let bestParent = null;
        let bestDist = Infinity;
        if (child.rivals) {
          // skip
        }
        for (const parent of parentNodes) {
          const cp = positions[child.id];
          const pp = positions[parent.id];
          const dist = Math.hypot(cp.x - pp.x, cp.y - pp.y);
          if (dist < bestDist) {
            bestDist = dist;
            bestParent = parent;
          }
        }

        if (bestParent) {
          const cp = positions[child.id];
          const pp = positions[bestParent.id];
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', pp.x);
          line.setAttribute('y1', pp.y + 32);
          line.setAttribute('x2', cp.x);
          line.setAttribute('y2', cp.y - 32);
          line.setAttribute('stroke', '#c8a050');
          line.setAttribute('stroke-width', '2');
          line.setAttribute('opacity', '0.5');
          svg.appendChild(line);
        }
      }
    }

    // Draw rivalry lines
    for (const lt of this.lieutenants) {
      if (lt.rivals && Array.isArray(lt.rivals)) {
        for (const rivalId of lt.rivals) {
          if (positions[lt.id] && positions[rivalId]) {
            const p1 = positions[lt.id];
            const p2 = positions[rivalId];
            // Avoid double-drawing
            const lineId = `rival-${[lt.id, rivalId].sort().join('-')}`;
            if (svg.querySelector(`[data-rival="${lineId}"]`)) continue;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', p1.x);
            line.setAttribute('y1', p1.y);
            line.setAttribute('x2', p2.x);
            line.setAttribute('y2', p2.y);
            line.setAttribute('stroke', '#cc4444');
            line.setAttribute('stroke-width', '2');
            line.setAttribute('stroke-dasharray', '5,3');
            line.setAttribute('opacity', '0.6');
            line.setAttribute('data-rival', lineId);
            svg.appendChild(line);
          }
        }
      }
    }

    tree.appendChild(svg);

    // Draw nodes
    for (const { lt, x, y } of allNodes) {
      const node = document.createElement('div');
      node.className = 'mc-nemesis-node';
      node.dataset.id = lt.id;
      node.style.left = (x - 32) + 'px';
      node.style.top = (y - 32) + 'px';

      if (!lt.alive) {
        node.classList.add('mc-nemesis-node-dead');
      }
      if (lt.shamed) {
        node.classList.add('mc-nemesis-node-shamed');
      }
      if (this.selectedId === lt.id) {
        node.classList.add('mc-nemesis-node-selected');
      }

      const elemColor = getElementColor(lt.element);
      const portrait = document.createElement('div');
      portrait.className = 'mc-nemesis-node-portrait';
      portrait.style.background = `radial-gradient(circle at 35% 35%, ${elemColor}, ${elemColor}99, ${elemColor}55)`;

      const initial = lt.name ? lt.name.charAt(0).toUpperCase() : '?';
      portrait.textContent = initial;
      node.appendChild(portrait);

      const info = document.createElement('div');
      info.className = 'mc-nemesis-node-info';

      const nameDiv = document.createElement('div');
      nameDiv.className = 'mc-nemesis-node-name';
      nameDiv.textContent = lt.name || 'Unknown';
      info.appendChild(nameDiv);

      const rankDiv = document.createElement('div');
      rankDiv.className = 'mc-nemesis-node-rank';
      rankDiv.textContent = RANK_BADGES[lt.rank] || '♟';
      info.appendChild(rankDiv);

      const levelDiv = document.createElement('div');
      levelDiv.className = 'mc-nemesis-node-level';
      levelDiv.textContent = `Lv ${lt.level || '?'}`;
      info.appendChild(levelDiv);

      const statusTag = document.createElement('span');
      statusTag.className = 'mc-nemesis-node-status-tag';
      if (!lt.alive) {
        statusTag.classList.add('mc-nemesis-tag-dead');
        statusTag.textContent = 'Fallen';
      } else if (lt.shamed) {
        statusTag.classList.add('mc-nemesis-tag-shamed');
        statusTag.textContent = 'Shamed';
      } else {
        statusTag.classList.add('mc-nemesis-tag-alive');
        statusTag.textContent = 'Active';
      }
      info.appendChild(statusTag);

      node.appendChild(info);

      node.onclick = () => this.selectLieutenant(lt.id);

      tree.appendChild(node);
    }

    container.appendChild(tree);
  }

  _highlightNode() {
    const nodes = this.overlay.querySelectorAll('.mc-nemesis-node');
    nodes.forEach(n => {
      if (n.dataset.id === String(this.selectedId)) {
        n.classList.add('mc-nemesis-node-selected');
      } else {
        n.classList.remove('mc-nemesis-node-selected');
      }
    });
  }

  _renderDetailPanel() {
    const panel = this.overlay.querySelector('#mc-nemesis-detail-panel');
    if (!panel) return;

    if (!this.selectedId) {
      panel.innerHTML = '<div class="mc-nemesis-detail-empty">Select a lieutenant to view details...</div>';
      return;
    }

    const lt = this.lieutenants.find(l => String(l.id) === String(this.selectedId));
    if (!lt) {
      panel.innerHTML = '<div class="mc-nemesis-detail-empty">Lieutenant not found.</div>';
      return;
    }

    const elemColor = getElementColor(lt.element);
    const rankName = RANK_NAMES[lt.rank] || 'Unknown Rank';
    const rankBadge = RANK_BADGES[lt.rank] || '♟';

    let html = '';

    // Portrait + name
    html += `<div style="text-align:center; margin-bottom: 16px;">`;
    html += `<div style="width:80px;height:80px;border-radius:50%;border:3px solid #c8a050;margin:0 auto 10px;display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold;color:#fff;text-shadow:1px 1px 3px rgba(0,0,0,0.7);background:radial-gradient(circle at 35% 35%, ${elemColor}, ${elemColor}99, ${elemColor}55);">`;
    html += lt.name ? lt.name.charAt(0).toUpperCase() : '?';
    html += `</div>`;
    html += `<div class="mc-nemesis-detail-name">${lt.name || 'Unknown'}</div>`;
    html += `<div class="mc-nemesis-detail-title">${rankBadge} ${rankName} · Level ${lt.level || '?'}</div>`;

    // Status badges
    if (!lt.alive) {
      html += `<span class="mc-nemesis-node-status-tag mc-nemesis-tag-dead">Fallen in Battle</span> `;
    }
    if (lt.shamed) {
      html += `<span class="mc-nemesis-node-status-tag mc-nemesis-tag-shamed">Disgraced</span>`;
    }
    if (lt.alive && !lt.shamed) {
      html += `<span class="mc-nemesis-node-status-tag mc-nemesis-tag-alive">Active Threat</span>`;
    }
    html += `</div>`;

    // Element
    html += `<div class="mc-nemesis-detail-section">`;
    html += `<div class="mc-nemesis-detail-label">Element</div>`;
    html += `<span class="mc-nemesis-element-badge" style="background:${elemColor};">${lt.element ? lt.element.charAt(0).toUpperCase() + lt.element.slice(1) : 'None'}</span>`;
    html += `</div>`;

    // Stats
    if (lt.stats) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Combat Stats</div>`;
      html += `<div class="mc-nemesis-stat-grid">`;
      const statLabels = { hp: 'HP', mp: 'MP', atk: 'ATK', def: 'DEF', agi: 'AGI', mag: 'MAG' };
      for (const [key, label] of Object.entries(statLabels)) {
        const val = lt.stats[key];
        if (val !== undefined && val !== null) {
          html += `<div class="mc-nemesis-stat-row"><span class="mc-nemesis-stat-label">${label}</span><span class="mc-nemesis-stat-value">${val}</span></div>`;
        }
      }
      html += `</div></div>`;
    }

    // Strengths
    if (lt.strengths && lt.strengths.length > 0) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Strengths</div>`;
      html += `<div class="mc-nemesis-detail-value">${lt.strengths.join(', ')}</div>`;
      html += `</div>`;
    }

    // Weaknesses
    if (lt.weaknesses && lt.weaknesses.length > 0) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Weaknesses</div>`;
      html += `<div class="mc-nemesis-detail-value">${lt.weaknesses.join(', ')}</div>`;
      html += `</div>`;
    }

    // Personality
    if (lt.personality) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Personality</div>`;
      html += `<div class="mc-nemesis-detail-value">${lt.personality}</div>`;
      html += `</div>`;
    }

    // Grudges
    if (lt.grudges && lt.grudges.length > 0) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Grudges</div>`;
      html += `<div class="mc-nemesis-detail-value">`;
      for (const g of lt.grudges) {
        html += `• ${g}<br>`;
      }
      html += `</div></div>`;
    }

    // Rivals
    if (lt.rivals && lt.rivals.length > 0) {
      const rivalNames = lt.rivals.map(rid => {
        const r = this.lieutenants.find(l => String(l.id) === String(rid));
        return r ? r.name : rid;
      });
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Rivals</div>`;
      html += `<div class="mc-nemesis-detail-value" style="color:#cc6666;">${rivalNames.join(', ')}</div>`;
      html += `</div>`;
    }

    // Backstory
    if (lt.revealed && lt.backstory) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Backstory</div>`;
      html += `<div class="mc-nemesis-detail-value" style="font-style:italic;">${lt.backstory}</div>`;
      html += `</div>`;
    } else if (!lt.revealed) {
      html += `<div class="mc-nemesis-detail-section">`;
      html += `<div class="mc-nemesis-detail-label">Backstory</div>`;
      html += `<div class="mc-nemesis-detail-value" style="font-style:italic;color:#665540;">? ? ? — Secrets yet to be uncovered ? ? ?</div>`;
      html += `</div>`;
    }

    panel.innerHTML = html;
  }
}
