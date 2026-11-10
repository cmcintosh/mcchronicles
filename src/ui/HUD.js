// HUD.js — McChronicles JRPG Overworld HUD
// Displays minimap, party status, gold, region name, quest tracker, and controls hint

const STYLE_ID = 'mc-hud-styles';

const HUD_STYLES = `
@keyframes mc-hud-fade-out {
  0%   { opacity: 1; }
  80%  { opacity: 1; }
  100% { opacity: 0; pointer-events: none; }
}

@keyframes mc-hud-pulse {
  0%, 100% { box-shadow: 0 0 5px rgba(255,200,80,0.3); }
  50%      { box-shadow: 0 0 15px rgba(255,200,80,0.6); }
}

.mc-hud-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 8000;
  pointer-events: none;
  display: none;
  font-family: Georgia, 'Times New Roman', serif;
}

.mc-hud-overlay.visible {
  display: block;
}

/* ─── Gold Display (top-left) ─── */
.mc-hud-gold {
  position: absolute;
  top: 1rem; left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, rgba(40,22,8,0.92), rgba(55,30,12,0.92));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  padding: 0.4rem 0.9rem;
  color: #ffd700;
  font-size: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  letter-spacing: 0.05em;
}

.mc-hud-coin {
  display: inline-block;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #ffe066, #ffd700, #cc9900);
  border: 1px solid #aa7700;
  box-shadow: 0 0 6px rgba(255,200,80,0.4);
  position: relative;
}

.mc-hud-coin::after {
  content: 'M';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  font-weight: bold;
  color: #aa7700;
  font-family: Georgia, serif;
}

/* ─── Region Name (top-center) ─── */
.mc-hud-region {
  position: absolute;
  top: 1rem; left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: linear-gradient(180deg, rgba(40,22,8,0.92), rgba(55,30,12,0.92));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  padding: 0.4rem 1.5rem;
  min-width: 200px;
}

.mc-hud-region-name {
  font-size: 1.15rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 3px rgba(120,0,0,0.7);
  letter-spacing: 0.1em;
  margin: 0;
  line-height: 1.2;
}

.mc-hud-region-sub {
  font-size: 0.75rem;
  color: #ccaa66;
  font-style: italic;
  letter-spacing: 0.05em;
  margin: 0;
  line-height: 1.2;
}

/* ─── Mini-map (top-right) ─── */
.mc-hud-minimap {
  position: absolute;
  top: 1rem; right: 1rem;
  background: linear-gradient(135deg, rgba(40,22,8,0.92), rgba(55,30,12,0.92));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 0 12px rgba(0,0,0,0.5);
}

.mc-hud-minimap canvas {
  display: block;
  border-radius: 4px;
}

.mc-hud-minimap-label {
  text-align: center;
  font-size: 0.65rem;
  color: rgba(204,170,102,0.7);
  font-style: italic;
  letter-spacing: 0.08em;
  margin-top: 0.3rem;
}

/* ─── Party Status (bottom-left) ─── */
.mc-hud-party {
  position: absolute;
  bottom: 1rem; left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 220px;
}

.mc-hud-party-member {
  background: linear-gradient(135deg, rgba(40,22,8,0.92), rgba(50,28,12,0.92));
  border: 1px solid;
  border-image: linear-gradient(135deg, rgba(255,215,0,0.5), rgba(204,136,0,0.3), rgba(255,215,0,0.5)) 1;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.mc-hud-party-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.mc-hud-party-name {
  font-size: 0.85rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
  letter-spacing: 0.05em;
}

.mc-hud-party-level {
  font-size: 0.7rem;
  color: #ccaa66;
  font-style: italic;
}

.mc-hud-bar-row {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.mc-hud-bar-label {
  font-size: 0.6rem;
  color: rgba(204,170,102,0.7);
  width: 18px;
  text-align: right;
}

.mc-hud-bar-bg {
  flex: 1;
  height: 6px;
  background: rgba(0,0,0,0.5);
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid rgba(255,215,0,0.15);
}

.mc-hud-bar-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.mc-hud-hp-fill {
  background: linear-gradient(90deg, #cc3322, #ee5544, #ff6644);
  box-shadow: 0 0 4px rgba(238,85,68,0.4);
}

.mc-hud-mp-fill {
  background: linear-gradient(90deg, #3366cc, #5588dd, #66aaff);
  box-shadow: 0 0 4px rgba(85,136,221,0.4);
}

.mc-hud-bar-text {
  font-size: 0.55rem;
  color: rgba(240,224,192,0.8);
  min-width: 42px;
  text-align: right;
}

/* ─── Quest Tracker (right side, below minimap) ─── */
.mc-hud-quest {
  position: absolute;
  top: 200px; right: 1rem;
  width: 220px;
  background: linear-gradient(135deg, rgba(40,22,8,0.9), rgba(50,28,12,0.9));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  padding: 0.6rem 0.8rem;
  display: none;
  flex-direction: column;
  gap: 0.3rem;
}

.mc-hud-quest.visible {
  display: flex;
}

.mc-hud-quest-title {
  font-size: 0.75rem;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(204,136,0,0.3);
  padding-bottom: 0.3rem;
  margin: 0;
}

.mc-hud-quest-text {
  font-size: 0.78rem;
  color: #f0e0c0;
  font-style: italic;
  line-height: 1.4;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.6);
  margin: 0;
}

/* ─── Controls Hint (bottom-right, auto-fade) ─── */
.mc-hud-controls {
  position: absolute;
  bottom: 1rem; right: 1rem;
  background: linear-gradient(135deg, rgba(40,22,8,0.85), rgba(50,28,12,0.85));
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 6px;
  padding: 0.5rem 0.8rem;
  font-size: 0.7rem;
  color: rgba(240,224,192,0.7);
  letter-spacing: 0.05em;
  line-height: 1.5;
  animation: mc-hud-fade-out 6s ease-in-out forwards;
  pointer-events: none;
}

.mc-hud-controls-key {
  display: inline-block;
  padding: 1px 5px;
  background: rgba(204,136,0,0.2);
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 3px;
  font-weight: bold;
  color: #ffd700;
  font-size: 0.65rem;
  margin: 0 2px;
}
`;

// Region layout for minimap
const REGIONS = {
  fry_valley: { name: 'Fry Valley', x: 0.30, y: 0.55, color: '#ffcc44' },
  burger_highlands: { name: 'Burger Highlands', x: 0.30, y: 0.30, color: '#cc6633' },
  mcflurry_tundra: { name: 'McFlurry Tundra', x: 0.30, y: 0.10, color: '#aaccff' },
  happy_meal_forest: { name: 'Happy Meal Forest', x: 0.55, y: 0.55, color: '#44aa55' },
  drive_thru_desert: { name: 'Drive-Thru Desert', x: 0.72, y: 0.50, color: '#ddaa66' },
  mccafe_springs: { name: 'McCafé Springs', x: 0.55, y: 0.25, color: '#cc9966' },
  play_place_plains: { name: 'Play Place Plains', x: 0.82, y: 0.35, color: '#ff88dd' },
  golden_arches_castle: { name: 'Golden Arches Castle', x: 0.88, y: 0.15, color: '#ffd700' },
};

const CONNECTIONS = [
  ['fry_valley', 'burger_highlands'],
  ['fry_valley', 'happy_meal_forest'],
  ['burger_highlands', 'mcflurry_tundra'],
  ['happy_meal_forest', 'drive_thru_desert'],
  ['drive_thru_desert', 'mccafe_springs'],
  ['mcflurry_tundra', 'mccafe_springs'],
  ['drive_thru_desert', 'play_place_plains'],
  ['mccafe_springs', 'play_place_plains'],
  ['play_place_plains', 'golden_arches_castle'],
];

const REGION_SUBTITLES = {
  fry_valley: 'Where the Golden Fries Grow',
  burger_highlands: 'Misty Peaks of Flame',
  mcflurry_tundra: 'Frozen Dairy Wastes',
  happy_meal_forest: 'Whispers of the Toy',
  drive_thru_desert: 'Endless Asphalt Sands',
  mccafe_springs: 'Aromatic Healing Waters',
  play_place_plains: 'Land of Wonder & Play',
  golden_arches_castle: 'Throne of the McKing',
};

// Color int to CSS hex string
function colorIntToHex(colorInt) {
  if (typeof colorInt === 'string') return colorInt;
  return '#' + (colorInt & 0xFFFFFF).toString(16).padStart(6, '0');
}

export default class HUD {
  constructor() {
    this._container = null;
    this._isVisible = false;
    this._minimapCanvas = null;
    this._minimapCtx = null;
    this._goldEl = null;
    this._regionNameEl = null;
    this._regionSubEl = null;
    this._partyEl = null;
    this._questEl = null;
    this._questTextEl = null;
    this._controlsEl = null;
    this._controlsFadeTimer = null;
    this._currentRegion = null;
    this._playerPosition = { x: 0.5, y: 0.5 };
    this._injectStyles();
    this._build();
  }

  _injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = HUD_STYLES;
    document.head.appendChild(style);
  }

  _build() {
    this._container = document.createElement('div');
    this._container.className = 'mc-hud-overlay';

    // Gold
    const gold = document.createElement('div');
    gold.className = 'mc-hud-gold';
    const coin = document.createElement('span');
    coin.className = 'mc-hud-coin';
    gold.appendChild(coin);
    this._goldEl = document.createElement('span');
    this._goldEl.textContent = '0';
    this._goldEl.className = 'mc-hud-gold-amount';
    gold.appendChild(this._goldEl);
    this._container.appendChild(gold);

    // Region name
    const region = document.createElement('div');
    region.className = 'mc-hud-region';
    this._regionNameEl = document.createElement('div');
    this._regionNameEl.className = 'mc-hud-region-name';
    this._regionNameEl.textContent = '—';
    region.appendChild(this._regionNameEl);
    this._regionSubEl = document.createElement('div');
    this._regionSubEl.className = 'mc-hud-region-sub';
    this._regionSubEl.textContent = '';
    region.appendChild(this._regionSubEl);
    this._container.appendChild(region);

    // Minimap
    const minimapContainer = document.createElement('div');
    minimapContainer.className = 'mc-hud-minimap';
    this._minimapCanvas = document.createElement('canvas');
    this._minimapCanvas.width = 180;
    this._minimapCanvas.height = 140;
    minimapContainer.appendChild(this._minimapCanvas);
    const mapLabel = document.createElement('div');
    mapLabel.className = 'mc-hud-minimap-label';
    mapLabel.textContent = 'World Map';
    minimapContainer.appendChild(mapLabel);
    this._container.appendChild(minimapContainer);

    this._minimapCtx = this._minimapCanvas.getContext('2d');

    // Party status
    this._partyEl = document.createElement('div');
    this._partyEl.className = 'mc-hud-party';
    this._container.appendChild(this._partyEl);

    // Quest tracker
    this._questEl = document.createElement('div');
    this._questEl.className = 'mc-hud-quest';
    const questTitle = document.createElement('div');
    questTitle.className = 'mc-hud-quest-title';
    questTitle.textContent = '⚔ Current Quest';
    this._questEl.appendChild(questTitle);
    this._questTextEl = document.createElement('div');
    this._questTextEl.className = 'mc-hud-quest-text';
    this._questTextEl.textContent = '';
    this._questEl.appendChild(this._questTextEl);
    this._container.appendChild(this._questEl);

    // Controls hint
    this._controlsEl = document.createElement('div');
    this._controlsEl.className = 'mc-hud-controls';
    this._controlsEl.innerHTML = `
      <span class="mc-hud-controls-key">↑↓←→</span> Move &nbsp;
      <span class="mc-hud-controls-key">E</span> Interact<br>
      <span class="mc-hud-controls-key">M</span> Menu &nbsp;
      <span class="mc-hud-controls-key">Tab</span> Map
    `;
    this._container.appendChild(this._controlsEl);

    document.body.appendChild(this._container);
  }

  _drawMinimap() {
    const ctx = this._minimapCtx;
    const w = this._minimapCanvas.width;
    const h = this._minimapCanvas.height;

    // Clear with parchment-like background
    ctx.fillStyle = '#2a1a08';
    ctx.fillRect(0, 0, w, h);

    // Subtle grid
    ctx.strokeStyle = 'rgba(204,136,0,0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 20) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += 20) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }

    // Draw connections
    ctx.strokeStyle = 'rgba(255,215,0,0.35)';
    ctx.lineWidth = 2;
    for (const [a, b] of CONNECTIONS) {
      const ra = REGIONS[a];
      const rb = REGIONS[b];
      if (!ra || !rb) continue;
      ctx.beginPath();
      ctx.moveTo(ra.x * w, ra.y * h);
      ctx.lineTo(rb.x * w, rb.y * h);
      ctx.stroke();
    }

    // Draw region nodes
    for (const [key, region] of Object.entries(REGIONS)) {
      const px = region.x * w;
      const py = region.y * h;
      const isCurrent = key === this._currentRegion;
      const radius = isCurrent ? 7 : 4;

      // Glow for current region
      if (isCurrent) {
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 14);
        gradient.addColorStop(0, 'rgba(255,215,0,0.6)');
        gradient.addColorStop(1, 'rgba(255,215,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node circle
      ctx.fillStyle = region.color;
      ctx.strokeStyle = isCurrent ? '#ffd700' : 'rgba(204,136,0,0.5)';
      ctx.lineWidth = isCurrent ? 2 : 1;
      ctx.beginPath();
      ctx.arc(px, py, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Draw player position within current region
    if (this._currentRegion && REGIONS[this._currentRegion]) {
      const region = REGIONS[this._currentRegion];
      const px = region.x * w;
      const py = region.y * h;
      const offsetX = (this._playerPosition.x - 0.5) * 20;
      const offsetY = (this._playerPosition.y - 0.5) * 16;
      const playerX = px + offsetX;
      const playerY = py + offsetY;

      // Player marker (white triangle)
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(playerX, playerY - 5);
      ctx.lineTo(playerX - 4, playerY + 3);
      ctx.lineTo(playerX + 4, playerY + 3);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }

    // Border
    ctx.strokeStyle = 'rgba(255,215,0,0.3)';
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, w - 1, h - 1);
  }

  _renderParty(party) {
    this._partyEl.innerHTML = '';

    if (!party || party.length === 0) return;

    for (const member of party) {
      const el = document.createElement('div');
      el.className = 'mc-hud-party-member';

      // Header: name + level
      const header = document.createElement('div');
      header.className = 'mc-hud-party-header';

      const nameEl = document.createElement('span');
      nameEl.className = 'mc-hud-party-name';
      nameEl.textContent = member.name || member.id || 'Unknown';
      const charColor = colorIntToHex(member.color || 0xFFD700);
      nameEl.style.color = charColor;
      nameEl.style.textShadow = `1px 1px 2px rgba(0,0,0,0.8), 0 0 8px ${charColor}66`;
      header.appendChild(nameEl);

      const levelEl = document.createElement('span');
      levelEl.className = 'mc-hud-party-level';
      const level = member.level || 1;
      levelEl.textContent = `Lv ${level}`;
      header.appendChild(levelEl);

      el.appendChild(header);

      // HP bar
      const stats = member.baseStats || member.stats || {};
      const maxHp = stats.hp || member.maxHp || 100;
      const currentHp = member.currentHp !== undefined ? member.currentHp : maxHp;
      const hpPct = Math.max(0, Math.min(100, (currentHp / maxHp) * 100));

      const hpRow = document.createElement('div');
      hpRow.className = 'mc-hud-bar-row';
      const hpLabel = document.createElement('span');
      hpLabel.className = 'mc-hud-bar-label';
      hpLabel.textContent = 'HP';
      hpRow.appendChild(hpLabel);
      const hpBg = document.createElement('div');
      hpBg.className = 'mc-hud-bar-bg';
      const hpFill = document.createElement('div');
      hpFill.className = 'mc-hud-bar-fill mc-hud-hp-fill';
      hpFill.style.width = `${hpPct}%`;
      hpBg.appendChild(hpFill);
      hpRow.appendChild(hpBg);
      const hpText = document.createElement('span');
      hpText.className = 'mc-hud-bar-text';
      hpText.textContent = `${Math.ceil(currentHp)}/${maxHp}`;
      hpRow.appendChild(hpText);
      el.appendChild(hpRow);

      // MP bar
      const maxMp = stats.mp || member.maxMp || 50;
      const currentMp = member.currentMp !== undefined ? member.currentMp : maxMp;
      const mpPct = Math.max(0, Math.min(100, (currentMp / maxMp) * 100));

      const mpRow = document.createElement('div');
      mpRow.className = 'mc-hud-bar-row';
      const mpLabel = document.createElement('span');
      mpLabel.className = 'mc-hud-bar-label';
      mpLabel.textContent = 'MP';
      mpRow.appendChild(mpLabel);
      const mpBg = document.createElement('div');
      mpBg.className = 'mc-hud-bar-bg';
      const mpFill = document.createElement('div');
      mpFill.className = 'mc-hud-bar-fill mc-hud-mp-fill';
      mpFill.style.width = `${mpPct}%`;
      mpBg.appendChild(mpFill);
      mpRow.appendChild(mpBg);
      const mpText = document.createElement('span');
      mpText.className = 'mc-hud-bar-text';
      mpText.textContent = `${Math.ceil(currentMp)}/${maxMp}`;
      mpRow.appendChild(mpText);
      el.appendChild(mpRow);

      this._partyEl.appendChild(el);
    }
  }

  _showControlsHint() {
    // Restart the animation
    if (this._controlsFadeTimer) {
      clearTimeout(this._controlsFadeTimer);
    }
    this._controlsEl.style.removeProperty('animation');
    this._controlsEl.style.opacity = '1';
    this._controlsEl.style.pointerEvents = 'none';

    // Force reflow to restart animation
    void this._controlsEl.offsetWidth;
    this._controlsEl.style.animation = 'mc-hud-fade-out 6s ease-in-out forwards';
  }

  /**
   * Update HUD state.
   * @param {Array} party - Array of party member objects
   * @param {string} region - Region key (e.g. 'fry_valley')
   * @param {{x: number, y: number}} playerPosition - Normalized position within region (0-1)
   * @param {string|null} activeQuest - Quest objective text, or null to hide
   */
  update(party, region, playerPosition, activeQuest) {
    if (!this._isVisible) return;

    // Update region
    if (region && REGIONS[region]) {
      this._currentRegion = region;
      this._regionNameEl.textContent = REGIONS[region].name;
      this._regionSubEl.textContent = REGION_SUBTITLES[region] || '';
    } else if (region) {
      this._currentRegion = region;
      this._regionNameEl.textContent = region;
      this._regionSubEl.textContent = '';
    }

    // Update player position
    if (playerPosition) {
      this._playerPosition = { x: playerPosition.x || 0.5, y: playerPosition.y || 0.5 };
    }

    // Update party
    this._renderParty(party);

    // Update gold
    const goldAmount = (party && party.gold !== undefined) ? party.gold : this._lastGold || 0;
    this._lastGold = goldAmount;
    this._goldEl.textContent = goldAmount.toLocaleString();

    // Update quest tracker
    if (activeQuest) {
      this._questEl.classList.add('visible');
      this._questTextEl.textContent = activeQuest;
    } else {
      this._questEl.classList.remove('visible');
    }

    // Redraw minimap
    this._drawMinimap();
  }

  show() {
    this._container.classList.add('visible');
    this._isVisible = true;
    this._showControlsHint();
    this._drawMinimap();
  }

  hide() {
    this._container.classList.remove('visible');
    this._isVisible = false;
  }

  destroy() {
    if (this._controlsFadeTimer) {
      clearTimeout(this._controlsFadeTimer);
    }
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
  }
}
