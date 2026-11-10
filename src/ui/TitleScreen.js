// TitleScreen.js — McChronicles JRPG Title Screen
// Full-screen ornate title overlay with animated background and fry particles

const STYLE_ID = 'mc-title-screen-styles';

const TITLE_STYLES = `
@keyframes mc-title-gradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes mc-title-float-up {
  0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.7; }
  100% { transform: translateY(-10vh) rotate(360deg); opacity: 0; }
}

@keyframes mc-title-glow {
  0%, 100% { text-shadow: 0 0 20px rgba(255,200,80,0.6), 2px 2px 4px rgba(120,0,0,0.8), 0 0 40px rgba(255,180,40,0.3); }
  50%      { text-shadow: 0 0 30px rgba(255,220,100,0.8), 2px 2px 6px rgba(140,0,0,0.9), 0 0 60px rgba(255,200,60,0.5); }
}

@keyframes mc-title-fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes mc-title-button-glow {
  0%, 100% { box-shadow: 0 0 10px rgba(255,200,80,0.3), inset 0 0 10px rgba(255,200,80,0.1); }
  50%      { box-shadow: 0 0 20px rgba(255,200,80,0.5), inset 0 0 15px rgba(255,200,80,0.2); }
}

.mc-title-overlay {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Georgia, 'Times New Roman', serif;
  background: linear-gradient(135deg, #2a1a0a, #4a2a10, #3a1a08, #5a2a15, #2a1a0a);
  background-size: 400% 400%;
  animation: mc-title-gradient 15s ease infinite;
  overflow: hidden;
}

.mc-title-particles {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mc-title-fry {
  position: absolute;
  width: 4px;
  height: 18px;
  background: linear-gradient(180deg, #ffdd66, #ffaa22, #cc8800);
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(255,200,80,0.5);
  animation: mc-title-float-up linear infinite;
}

.mc-title-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.mc-title-main {
  font-size: clamp(2.5rem, 8vw, 6rem);
  font-weight: bold;
  color: #ffd700;
  text-shadow: 3px 3px 6px rgba(120,0,0,0.8), 0 0 30px rgba(255,180,40,0.4);
  animation: mc-title-glow 3s ease-in-out infinite, mc-title-fade-in 1.5s ease-out;
  letter-spacing: 0.05em;
  margin: 0;
  text-align: center;
  line-height: 1.1;
}

.mc-title-subtitle {
  font-size: clamp(0.9rem, 2.5vw, 1.6rem);
  color: #cc9944;
  font-style: italic;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  animation: mc-title-fade-in 2s ease-out 0.5s both;
  margin-top: 0.5rem;
  margin-bottom: 3rem;
  letter-spacing: 0.15em;
}

.mc-title-divider {
  width: 60%;
  max-width: 500px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ffd700, #ffaa22, #ffd700, transparent);
  margin: 1rem auto 2.5rem;
  border: none;
  animation: mc-title-fade-in 2s ease-out 0.3s both;
}

.mc-title-buttons {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 280px;
  animation: mc-title-fade-in 2s ease-out 0.8s both;
}

.mc-title-btn {
  font-family: Georgia, serif;
  font-size: 1.25rem;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, rgba(60,30,10,0.9), rgba(80,40,15,0.9));
  color: #ffd700;
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 6px;
  cursor: pointer;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  position: relative;
  overflow: hidden;
}

.mc-title-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,215,0,0.2), transparent);
  transition: left 0.5s ease;
}

.mc-title-btn:hover {
  background: linear-gradient(135deg, rgba(80,45,15,0.95), rgba(100,55,20,0.95));
  animation: mc-title-button-glow 1.5s ease-in-out infinite;
  transform: scale(1.04);
}

.mc-title-btn:hover::before {
  left: 100%;
}

.mc-title-btn:active {
  transform: scale(0.98);
}

.mc-title-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.mc-title-credits {
  position: absolute;
  bottom: 1rem;
  left: 0; right: 0;
  text-align: center;
  font-size: 0.7rem;
  color: rgba(204,153,68,0.6);
  font-style: italic;
  letter-spacing: 0.1em;
  z-index: 2;
  animation: mc-title-fade-in 3s ease-out 1.5s both;
}

.mc-title-settings-panel,
.mc-title-saves-panel {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(40,20,8,0.97), rgba(60,30,12,0.97));
  border: 2px solid;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffd700) 1;
  border-radius: 10px;
  padding: 2rem;
  width: 420px;
  max-width: 90vw;
  z-index: 10;
  display: none;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 0 40px rgba(0,0,0,0.8);
}

.mc-title-settings-panel.visible,
.mc-title-saves-panel.visible {
  display: flex;
}

.mc-panel-title {
  font-size: 1.5rem;
  color: #ffd700;
  text-align: center;
  margin: 0 0 1rem 0;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(120,0,0,0.8);
  letter-spacing: 0.1em;
}

.mc-setting-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ccaa66;
  font-size: 1rem;
  gap: 1rem;
}

.mc-setting-label {
  font-family: Georgia, serif;
  white-space: nowrap;
}

.mc-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  background: linear-gradient(90deg, rgba(204,136,0,0.3), rgba(255,215,0,0.3));
  border-radius: 3px;
  outline: none;
}

.mc-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px; height: 16px;
  background: #ffd700;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(255,200,80,0.5);
}

.mc-slider::-moz-range-thumb {
  width: 16px; height: 16px;
  background: #ffd700;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 8px rgba(255,200,80,0.5);
}

.mc-setting-value {
  font-family: Georgia, serif;
  color: #ffd700;
  min-width: 40px;
  text-align: right;
}

.mc-save-slot {
  background: linear-gradient(135deg, rgba(50,25,10,0.8), rgba(70,35,15,0.8));
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 6px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ccaa66;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mc-save-slot:hover {
  border-color: #ffd700;
  background: linear-gradient(135deg, rgba(60,30,12,0.9), rgba(80,40,18,0.9));
  transform: translateX(4px);
}

.mc-save-slot-name {
  font-weight: bold;
  color: #ffd700;
}

.mc-save-slot-info {
  font-size: 0.85rem;
  font-style: italic;
  color: rgba(204,170,102,0.7);
}

.mc-save-slot-empty {
  color: rgba(204,170,102,0.4);
  font-style: italic;
}

.mc-panel-close {
  font-family: Georgia, serif;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: rgba(60,30,10,0.8);
  color: #ccaa66;
  border: 1px solid rgba(204,136,0,0.4);
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
  margin-top: 0.5rem;
  transition: all 0.3s ease;
}

.mc-panel-close:hover {
  color: #ffd700;
  border-color: #ffd700;
  background: rgba(80,40,15,0.9);
}

.mc-title-vignette {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 3;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%);
}
`;

const VERSION = 'v0.1.0 Alpha';
const CREDITS = 'McChronicles — A JRPG Adventure · Built with love & fries';

// Region display names for save slot info
const REGION_NAMES = {
  fry_valley: 'Fry Valley',
  burger_highlands: 'Burger Highlands',
  mcflurry_tundra: 'McFlurry Tundra',
  happy_meal_forest: 'Happy Meal Forest',
  drive_thru_desert: 'Drive-Thru Desert',
  mccafe_springs: 'McCafé Springs',
  play_place_plains: 'Play Place Plains',
  golden_arches_castle: 'Golden Arches Castle',
};

export default class TitleScreen {
  constructor() {
    this._onSelectCallback = null;
    this._container = null;
    this._settings = { masterVolume: 70, musicVolume: 60, sfxVolume: 80 };
    this._saveSlots = this._loadSaveSlots();
    this._isVisible = false;
    this._particleInterval = null;
    this._injectStyles();
    this._build();
  }

  _injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = TITLE_STYLES;
    document.head.appendChild(style);
  }

  _loadSaveSlots() {
    try {
      const raw = localStorage.getItem('mcchronicles_saves');
      if (raw) return JSON.parse(raw);
    } catch (e) { /* ignore */ }
    return [null, null, null];
  }

  _saveSaveSlots() {
    try {
      localStorage.setItem('mcchronicles_saves', JSON.stringify(this._saveSlots));
    } catch (e) { /* ignore */ }
  }

  _build() {
    this._container = document.createElement('div');
    this._container.className = 'mc-title-overlay';
    this._container.style.display = 'none';

    // Particles layer
    const particles = document.createElement('div');
    particles.className = 'mc-title-particles';
    this._container.appendChild(particles);

    // Vignette
    const vignette = document.createElement('div');
    vignette.className = 'mc-title-vignette';
    this._container.appendChild(vignette);

    // Content
    const content = document.createElement('div');
    content.className = 'mc-title-content';

    // Title
    const title = document.createElement('h1');
    title.className = 'mc-title-main';
    title.textContent = 'McChronicles';
    content.appendChild(title);

    // Subtitle
    const subtitle = document.createElement('div');
    subtitle.className = 'mc-title-subtitle';
    subtitle.textContent = 'The Happy Meal Quest';
    content.appendChild(subtitle);

    // Divider
    const divider = document.createElement('div');
    divider.className = 'mc-title-divider';
    content.appendChild(divider);

    // Buttons
    const btnContainer = document.createElement('div');
    btnContainer.className = 'mc-title-buttons';

    this._newGameBtn = document.createElement('button');
    this._newGameBtn.className = 'mc-title-btn';
    this._newGameBtn.textContent = 'New Game';
    this._newGameBtn.addEventListener('click', () => this._handleSelect('newgame'));
    btnContainer.appendChild(this._newGameBtn);

    this._continueBtn = document.createElement('button');
    this._continueBtn.className = 'mc-title-btn';
    this._continueBtn.textContent = 'Continue';
    this._continueBtn.addEventListener('click', () => this._showSavePanel());
    // Disable if no saves
    if (!this._saveSlots.some(s => s !== null)) {
      this._continueBtn.disabled = true;
    }
    btnContainer.appendChild(this._continueBtn);

    this._settingsBtn = document.createElement('button');
    this._settingsBtn.className = 'mc-title-btn';
    this._settingsBtn.textContent = 'Settings';
    this._settingsBtn.addEventListener('click', () => this._showSettingsPanel());
    btnContainer.appendChild(this._settingsBtn);

    content.appendChild(btnContainer);
    this._container.appendChild(content);

    // Settings panel
    this._settingsPanel = this._buildSettingsPanel();
    this._container.appendChild(this._settingsPanel);

    // Saves panel
    this._savesPanel = this._buildSavesPanel();
    this._container.appendChild(this._savesPanel);

    // Credits
    const credits = document.createElement('div');
    credits.className = 'mc-title-credits';
    credits.textContent = `${CREDITS}  ·  ${VERSION}`;
    this._container.appendChild(credits);

    // Click on overlay backdrop closes panels
    this._container.addEventListener('click', (e) => {
      if (e.target === this._container || e.target.classList.contains('mc-title-particles') || e.target.classList.contains('mc-title-vignette')) {
        this._hideAllPanels();
      }
    });

    document.body.appendChild(this._container);
  }

  _buildSettingsPanel() {
    const panel = document.createElement('div');
    panel.className = 'mc-title-settings-panel';

    const title = document.createElement('h2');
    title.className = 'mc-panel-title';
    title.textContent = 'Settings';
    panel.appendChild(title);

    const settings = [
      { key: 'masterVolume', label: 'Master Volume' },
      { key: 'musicVolume', label: 'Music Volume' },
      { key: 'sfxVolume', label: 'SFX Volume' },
    ];

    settings.forEach(({ key, label }) => {
      const row = document.createElement('div');
      row.className = 'mc-setting-row';

      const lbl = document.createElement('span');
      lbl.className = 'mc-setting-label';
      lbl.textContent = label;
      row.appendChild(lbl);

      const slider = document.createElement('input');
      slider.type = 'range';
      slider.min = 0;
      slider.max = 100;
      slider.value = this._settings[key];
      slider.className = 'mc-slider';

      const val = document.createElement('span');
      val.className = 'mc-setting-value';
      val.textContent = `${this._settings[key]}%`;

      slider.addEventListener('input', () => {
        this._settings[key] = parseInt(slider.value, 10);
        val.textContent = `${slider.value}%`;
        try {
          localStorage.setItem('mcchronicles_settings', JSON.stringify(this._settings));
        } catch (e) { /* ignore */ }
      });

      row.appendChild(slider);
      row.appendChild(val);
      panel.appendChild(row);
    });

    // Load saved settings
    try {
      const saved = localStorage.getItem('mcchronicles_settings');
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(this._settings, parsed);
        panel.querySelectorAll('.mc-slider').forEach((slider, i) => {
          slider.value = this._settings[settings[i].key];
          slider.dispatchEvent(new Event('input'));
        });
      }
    } catch (e) { /* ignore */ }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'mc-panel-close';
    closeBtn.textContent = '← Back';
    closeBtn.addEventListener('click', () => this._hideAllPanels());
    panel.appendChild(closeBtn);

    return panel;
  }

  _buildSavesPanel() {
    const panel = document.createElement('div');
    panel.className = 'mc-title-saves-panel';

    const title = document.createElement('h2');
    title.className = 'mc-panel-title';
    title.textContent = 'Select Save Slot';
    panel.appendChild(title);

    for (let i = 0; i < 3; i++) {
      const slot = document.createElement('div');
      slot.className = 'mc-save-slot';
      const saveData = this._saveSlots[i];

      if (saveData) {
        const nameEl = document.createElement('span');
        nameEl.className = 'mc-save-slot-name';
        nameEl.textContent = `Slot ${i + 1}`;
        slot.appendChild(nameEl);

        const infoEl = document.createElement('span');
        infoEl.className = 'mc-save-slot-info';
        const regionName = REGION_NAMES[saveData.region] || saveData.region || 'Unknown';
        infoEl.textContent = `Lv ${saveData.level || '?'} · ${regionName} · ${saveData.playtime || '0:00'}`;
        slot.appendChild(infoEl);

        slot.addEventListener('click', () => {
          this._hideAllPanels();
          if (this._onSelectCallback) this._onSelectCallback('continue', { slot: i, data: saveData });
        });
      } else {
        const emptyEl = document.createElement('span');
        emptyEl.className = 'mc-save-slot-empty';
        emptyEl.textContent = `Slot ${i + 1} — Empty`;
        slot.appendChild(emptyEl);
        slot.style.cursor = 'default';
        slot.addEventListener('click', () => {
          // Empty slot — could start new game into this slot
          this._hideAllPanels();
          if (this._onSelectCallback) this._onSelectCallback('newgame', { slot: i });
        });
      }

      panel.appendChild(slot);
    }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'mc-panel-close';
    closeBtn.textContent = '← Back';
    closeBtn.addEventListener('click', () => this._hideAllPanels());
    panel.appendChild(closeBtn);

    return panel;
  }

  _showSettingsPanel() {
    this._hideAllPanels();
    this._settingsPanel.classList.add('visible');
  }

  _showSavePanel() {
    this._hideAllPanels();
    // Rebuild save slots in case data changed
    this._savesPanel.remove();
    this._savesPanel = this._buildSavesPanel();
    this._container.appendChild(this._savesPanel);
    this._savesPanel.classList.add('visible');
  }

  _hideAllPanels() {
    this._settingsPanel.classList.remove('visible');
    this._savesPanel.classList.remove('visible');
  }

  _handleSelect(action) {
    if (action === 'newgame') {
      if (this._onSelectCallback) this._onSelectCallback('newgame', null);
    }
  }

  _spawnFryParticle() {
    const particles = this._container.querySelector('.mc-title-particles');
    if (!particles) return;

    const fry = document.createElement('div');
    fry.className = 'mc-title-fry';
    const left = Math.random() * 100;
    const duration = 6 + Math.random() * 8;
    const delay = 0;
    const size = 0.6 + Math.random() * 0.8;

    fry.style.left = `${left}%`;
    fry.style.animationDuration = `${duration}s`;
    fry.style.animationDelay = `${delay}s`;
    fry.style.transform = `scale(${size})`;
    fry.style.opacity = '0';

    particles.appendChild(fry);

    // Remove after animation
    setTimeout(() => {
      if (fry.parentNode) fry.remove();
    }, (duration + delay) * 1000 + 500);
  }

  _startParticles() {
    // Initial burst
    for (let i = 0; i < 15; i++) {
      setTimeout(() => this._spawnFryParticle(), i * 200);
    }
    // Continuous spawning
    this._particleInterval = setInterval(() => {
      this._spawnFryParticle();
    }, 600);
  }

  _stopParticles() {
    if (this._particleInterval) {
      clearInterval(this._particleInterval);
      this._particleInterval = null;
    }
    const particles = this._container.querySelector('.mc-title-particles');
    if (particles) particles.innerHTML = '';
  }

  show() {
    this._container.style.display = 'flex';
    this._isVisible = true;
    this._startParticles();
  }

  hide() {
    this._container.style.display = 'none';
    this._isVisible = false;
    this._hideAllPanels();
    this._stopParticles();
  }

  onSelect(callback) {
    this._onSelectCallback = callback;
  }

  destroy() {
    this._stopParticles();
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
  }
}
