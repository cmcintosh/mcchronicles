// SaveMenu.js — Save/Load interface for McChronicles JRPG
// Storybook/ornate aesthetic with golden borders, warm colors, Ni no Kuni-inspired design

const SAVE_STYLES = `
.mc-save-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(30, 20, 12, 0.97), rgba(45, 30, 18, 0.97));
  font-family: Georgia, 'Times New Roman', serif;
  color: #f0e0c0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9002;
  overflow: hidden;
  padding: 30px 20px;
}

.mc-save-header {
  text-align: center;
  margin-bottom: 24px;
  flex-shrink: 0;
}

.mc-save-title {
  font-size: 28px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.7);
  letter-spacing: 2px;
  margin: 0;
}

.mc-save-subtitle {
  font-size: 14px;
  color: #b89860;
  font-style: italic;
  margin-top: 6px;
}

.mc-save-mode-indicator {
  display: inline-block;
  padding: 4px 16px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.mc-save-mode-save {
  background: rgba(200, 160, 80, 0.25);
  border: 1px solid #c8a050;
  color: #f5d090;
}

.mc-save-mode-load {
  background: rgba(80, 120, 200, 0.2);
  border: 1px solid #6080b0;
  color: #a0c0e0;
}

.mc-save-autosave-indicator {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #88bb66;
  margin-top: 8px;
}

.mc-save-autosave-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #66aa44;
  box-shadow: 0 0 4px #66aa44;
  animation: mc-pulse 2s infinite;
}

@keyframes mc-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.mc-save-slots {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  max-width: 640px;
  overflow-y: auto;
  flex: 1;
  padding: 4px 8px;
}

.mc-save-slot {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.7));
  border: 2px solid rgba(200, 160, 80, 0.35);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.18s, transform 0.12s, box-shadow 0.18s;
  min-height: 80px;
}

.mc-save-slot:hover {
  border-color: #c8a050;
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.4);
}

.mc-save-slot-selected {
  border-color: #f5d090;
  box-shadow: 0 0 12px rgba(245, 208, 144, 0.25);
}

.mc-save-slot-empty {
  border-style: dashed;
  border-color: rgba(200, 160, 80, 0.2);
  opacity: 0.7;
}

.mc-save-slot-number {
  font-size: 28px;
  font-weight: bold;
  color: #c8a050;
  width: 44px;
  text-align: center;
  flex-shrink: 0;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
}

.mc-save-slot-info {
  flex: 1;
  min-width: 0;
}

.mc-save-slot-name {
  font-size: 16px;
  font-weight: bold;
  color: #f0e0c0;
  margin-bottom: 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.mc-save-slot-empty-label {
  font-size: 15px;
  color: #7a6a50;
  font-style: italic;
  margin-bottom: 4px;
}

.mc-save-slot-meta {
  font-size: 12px;
  color: #a89070;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
}

.mc-save-slot-meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.mc-save-slot-meta-label {
  color: #8a7050;
}

.mc-save-slot-meta-value {
  color: #c8b890;
  font-weight: bold;
}

.mc-save-slot-actions {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-shrink: 0;
}

.mc-save-action-btn {
  background: rgba(60, 42, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 12px;
  padding: 5px 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
  white-space: nowrap;
}

.mc-save-action-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-save-action-btn-delete {
  border-color: #8b3a3a;
  color: #cc8888;
}

.mc-save-action-btn-delete:hover {
  background: rgba(70, 30, 30, 0.7);
}

.mc-save-action-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.mc-save-close-btn {
  position: absolute;
  top: 20px;
  right: 24px;
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

.mc-save-close-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-save-confirmation {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, rgba(40, 28, 16, 0.98), rgba(30, 20, 12, 0.98));
  border: 2px solid #c8a050;
  border-radius: 10px;
  padding: 28px 36px;
  text-align: center;
  z-index: 20;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7);
}

.mc-save-confirmation-text {
  font-size: 15px;
  color: #f0e0c0;
  margin-bottom: 20px;
  max-width: 360px;
  line-height: 1.5;
}

.mc-save-confirmation-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.mc-save-confirm-btn {
  background: rgba(60, 42, 25, 0.9);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 8px 24px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
}

.mc-save-confirm-btn:hover {
  background: rgba(80, 55, 30, 0.95);
}

.mc-save-confirm-btn-danger {
  border-color: #8b3a3a;
  color: #cc8888;
}

.mc-save-confirm-btn-danger:hover {
  background: rgba(70, 30, 30, 0.7);
}

.mc-save-toast {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(40, 28, 16, 0.95);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 6px;
  z-index: 30;
  animation: mc-fade-in 0.3s ease;
}

@keyframes mc-fade-in {
  from { opacity: 0; transform: translate(-50%, 10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

.mc-save-naming-input {
  background: rgba(30, 20, 12, 0.9);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 16px;
  padding: 8px 14px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 12px;
  outline: none;
}

.mc-save-naming-input:focus {
  border-color: #f5d090;
  box-shadow: 0 0 6px rgba(245, 208, 144, 0.2);
}
`;

let styleInjectedSave = false;

function injectSaveStyles() {
  if (styleInjectedSave) return;
  const tag = document.createElement('style');
  tag.id = 'mc-save-styles';
  tag.textContent = SAVE_STYLES;
  document.head.appendChild(tag);
  styleInjectedSave = true;
}

const SAVE_KEYS = [
  'mcchronicles_save_0',
  'mcchronicles_save_1',
  'mcchronicles_save_2',
  'mcchronicles_save_3',
  'mcchronicles_save_4',
];

const REGION_DISPLAY_NAMES = {
  fry_valley: 'Fry Valley',
  burger_highlands: 'Burger Highlands',
  mcflurry_tundra: 'McFlurry Tundra',
  happy_meal_forest: 'Happy Meal Forest',
  drive_thru_desert: 'Drive-Thru Desert',
  mccafe_springs: 'McCafé Springs',
  play_place_plains: 'Play Place Plains',
  golden_arches_castle: 'Golden Arch Castle',
};

function formatPlaytime(seconds) {
  if (!seconds || seconds < 0) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) {
    return `${h}h ${m}m`;
  }
  return `${m}m ${s}s`;
}

function formatDate(timestamp) {
  if (!timestamp) return '—';
  try {
    const d = new Date(timestamp);
    const month = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const time = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    return `${month}, ${time}`;
  } catch {
    return '—';
  }
}

export default class SaveMenu {
  constructor() {
    this.mode = 'save';
    this.game = null;
    this.overlay = null;
    this.visible = false;
    this.selectedSlot = null;
    this._keyHandler = null;
    this._onClose = null;
    this._toastTimer = null;
  }

  show(mode, game, onClose) {
    injectSaveStyles();
    this.mode = mode || 'save';
    this.game = game || null;
    this._onClose = onClose || null;
    this.selectedSlot = null;
    this.visible = true;
    this._render();
    this._bindKeys();
  }

  hide() {
    this.visible = false;
    this.selectedSlot = null;
    this._unbindKeys();
    if (this._toastTimer) {
      clearTimeout(this._toastTimer);
      this._toastTimer = null;
    }
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    this.overlay = null;
  }

  save(slot) {
    if (!this.game) {
      this._showToast('No game data available to save.');
      return;
    }
    if (slot < 0 || slot >= SAVE_KEYS.length) return;

    const saveData = {
      name: `Save ${slot + 1}`,
      timestamp: Date.now(),
      playtime: this.game.playtime || 0,
      partyLevel: this.game.partyLevel || 1,
      currentRegion: this.game.currentRegion || 'fry_valley',
      gameState: this.game.serialize ? this.game.serialize() : { ...this.game },
    };

    // Prompt for save name
    this._showNamingDialog(slot, saveData);
  }

  load(slot) {
    if (slot < 0 || slot >= SAVE_KEYS.length) return;

    const raw = localStorage.getItem(SAVE_KEYS[slot]);
    if (!raw) {
      this._showToast('That slot is empty.');
      return;
    }

    try {
      const saveData = JSON.parse(raw);
      if (this.game && this.game.deserialize) {
        this.game.deserialize(saveData.gameState);
      }
      this._showToast(`Loaded "${saveData.name}" successfully!`);
      setTimeout(() => {
        this.hide();
        if (this._onClose) this._onClose('load', saveData);
      }, 800);
    } catch (err) {
      this._showToast('Failed to load save: corrupted data.');
    }
  }

  deleteSlot(slot) {
    if (slot < 0 || slot >= SAVE_KEYS.length) return;

    const raw = localStorage.getItem(SAVE_KEYS[slot]);
    if (!raw) {
      this._showToast('That slot is already empty.');
      return;
    }

    this._showConfirmDialog(
      'Delete this save? This cannot be undone.',
      () => {
        localStorage.removeItem(SAVE_KEYS[slot]);
        this._showToast('Save deleted.');
        this._renderSlots();
      }
    );
  }

  _bindKeys() {
    this._keyHandler = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        this.hide();
        if (this._onClose) this._onClose('cancel');
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

  _getSaveData(slot) {
    const raw = localStorage.getItem(SAVE_KEYS[slot]);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  _hasAutoSave() {
    return localStorage.getItem('mcchronicles_autosave') !== null;
  }

  _render() {
    if (this.overlay) {
      this.overlay.parentNode.removeChild(this.overlay);
    }

    this.overlay = document.createElement('div');
    this.overlay.className = 'mc-save-overlay';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mc-save-close-btn';
    closeBtn.textContent = '✕ Close';
    closeBtn.onclick = () => {
      this.hide();
      if (this._onClose) this._onClose('cancel');
    };
    this.overlay.appendChild(closeBtn);

    // Header
    const header = document.createElement('div');
    header.className = 'mc-save-header';
    const titleText = this.mode === 'save' ? '📜 Save Your Quest 📜' : '📖 Load a Saved Quest 📖';
    header.innerHTML = `
      <h2 class="mc-save-title">${titleText}</h2>
      <div class="mc-save-subtitle">${this.mode === 'save' ? 'Preserve your adventure for a future day' : 'Continue a journey once paused'}</div>
    `;

    const modeIndicator = document.createElement('div');
    modeIndicator.className = `mc-save-mode-indicator ${this.mode === 'save' ? 'mc-save-mode-save' : 'mc-save-mode-load'}`;
    modeIndicator.textContent = this.mode === 'save' ? '⬇ Saving' : '⬆ Loading';
    header.appendChild(modeIndicator);

    // Auto-save indicator
    if (this._hasAutoSave()) {
      const autoIndicator = document.createElement('div');
      autoIndicator.className = 'mc-save-autosave-indicator';
      autoIndicator.innerHTML = '<span class="mc-save-autosave-dot"></span> Auto-save active';
      header.appendChild(autoIndicator);
    }

    this.overlay.appendChild(header);

    // Slots container
    const slotsContainer = document.createElement('div');
    slotsContainer.className = 'mc-save-slots';
    slotsContainer.id = 'mc-save-slots';
    this.overlay.appendChild(slotsContainer);

    this._renderSlots();

    document.body.appendChild(this.overlay);
  }

  _renderSlots() {
    const container = this.overlay.querySelector('#mc-save-slots');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < SAVE_KEYS.length; i++) {
      const saveData = this._getSaveData(i);
      const slot = document.createElement('div');
      slot.className = 'mc-save-slot';
      if (!saveData) slot.classList.add('mc-save-slot-empty');
      if (this.selectedSlot === i) slot.classList.add('mc-save-slot-selected');

      // Slot number
      const num = document.createElement('div');
      num.className = 'mc-save-slot-number';
      num.textContent = (i + 1).toString().padStart(2, '0');
      slot.appendChild(num);

      // Info
      const info = document.createElement('div');
      info.className = 'mc-save-slot-info';

      if (saveData) {
        const name = document.createElement('div');
        name.className = 'mc-save-slot-name';
        name.textContent = saveData.name || `Save ${i + 1}`;
        info.appendChild(name);

        const meta = document.createElement('div');
        meta.className = 'mc-save-slot-meta';

        meta.appendChild(this._metaItem('⏱', formatPlaytime(saveData.playtime)));
        meta.appendChild(this._metaItem('Lv', saveData.partyLevel || 1));
        meta.appendChild(this._metaItem('📍', REGION_DISPLAY_NAMES[saveData.currentRegion] || saveData.currentRegion || 'Unknown'));
        meta.appendChild(this._metaItem('🕒', formatDate(saveData.timestamp)));

        info.appendChild(meta);
      } else {
        const emptyLabel = document.createElement('div');
        emptyLabel.className = 'mc-save-slot-empty-label';
        emptyLabel.textContent = '— Empty Slot —';
        info.appendChild(emptyLabel);

        const meta = document.createElement('div');
        meta.className = 'mc-save-slot-meta';
        meta.style.color = '#665540';
        meta.textContent = this.mode === 'save' ? 'Click to create a new save' : 'No data to load';
        info.appendChild(meta);
      }

      slot.appendChild(info);

      // Actions
      const actions = document.createElement('div');
      actions.className = 'mc-save-slot-actions';

      if (this.mode === 'save') {
        const saveBtn = document.createElement('button');
        saveBtn.className = 'mc-save-action-btn';
        saveBtn.textContent = saveData ? 'Overwrite' : 'Save Here';
        saveBtn.onclick = (e) => {
          e.stopPropagation();
          this.save(i);
        };
        actions.appendChild(saveBtn);

        if (saveData) {
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'mc-save-action-btn mc-save-action-btn-delete';
          deleteBtn.textContent = 'Delete';
          deleteBtn.onclick = (e) => {
            e.stopPropagation();
            this.deleteSlot(i);
          };
          actions.appendChild(deleteBtn);
        }
      } else {
        const loadBtn = document.createElement('button');
        loadBtn.className = 'mc-save-action-btn';
        loadBtn.textContent = 'Load';
        loadBtn.disabled = !saveData;
        loadBtn.onclick = (e) => {
          e.stopPropagation();
          if (saveData) this.load(i);
        };
        actions.appendChild(loadBtn);

        if (saveData) {
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'mc-save-action-btn mc-save-action-btn-delete';
          deleteBtn.textContent = 'Delete';
          deleteBtn.onclick = (e) => {
            e.stopPropagation();
            this.deleteSlot(i);
          };
          actions.appendChild(deleteBtn);
        }
      }

      slot.appendChild(actions);

      // Click on slot
      slot.onclick = () => {
        this.selectedSlot = i;
        this._renderSlots();
      };

      container.appendChild(slot);
    }
  }

  _metaItem(icon, value) {
    const item = document.createElement('span');
    item.className = 'mc-save-slot-meta-item';
    item.innerHTML = `<span class="mc-save-slot-meta-label">${icon}</span><span class="mc-save-slot-meta-value">${value}</span>`;
    return item;
  }

  _showNamingDialog(slot, saveData) {
    const dialog = document.createElement('div');
    dialog.className = 'mc-save-confirmation';
    dialog.id = 'mc-save-naming-dialog';

    const existing = this._getSaveData(slot);
    const defaultName = existing ? existing.name : `Save ${slot + 1}`;

    dialog.innerHTML = `
      <div style="font-size:16px;color:#f5d090;font-weight:bold;margin-bottom:14px;">Name Your Save</div>
      <input type="text" class="mc-save-naming-input" id="mc-save-name-input" value="${this._escapeHtml(defaultName)}" maxlength="30" />
      <div class="mc-save-confirmation-buttons">
        <button class="mc-save-confirm-btn" id="mc-save-confirm-save">Confirm Save</button>
        <button class="mc-save-confirm-btn" id="mc-save-cancel-save">Cancel</button>
      </div>
    `;

    this.overlay.appendChild(dialog);

    const input = dialog.querySelector('#mc-save-name-input');
    input.focus();
    input.select();

    const confirm = () => {
      const name = input.value.trim() || `Save ${slot + 1}`;
      saveData.name = name;
      try {
        localStorage.setItem(SAVE_KEYS[slot], JSON.stringify(saveData));
        this._showToast(`Saved "${name}" to Slot ${slot + 1}!`);
        dialog.remove();
        this._renderSlots();
      } catch (err) {
        this._showToast('Failed to save: storage may be full.');
        dialog.remove();
      }
    };

    const cancel = () => {
      dialog.remove();
    };

    dialog.querySelector('#mc-save-confirm-save').onclick = confirm;
    dialog.querySelector('#mc-save-cancel-save').onclick = cancel;

    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        confirm();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancel();
      }
    };
  }

  _showConfirmDialog(text, onConfirm) {
    const dialog = document.createElement('div');
    dialog.className = 'mc-save-confirmation';

    dialog.innerHTML = `
      <div class="mc-save-confirmation-text">${text}</div>
      <div class="mc-save-confirmation-buttons">
        <button class="mc-save-confirm-btn mc-save-confirm-btn-danger" id="mc-confirm-yes">Delete</button>
        <button class="mc-save-confirm-btn" id="mc-confirm-no">Keep</button>
      </div>
    `;

    this.overlay.appendChild(dialog);

    dialog.querySelector('#mc-confirm-yes').onclick = () => {
      dialog.remove();
      onConfirm();
    };
    dialog.querySelector('#mc-confirm-no').onclick = () => {
      dialog.remove();
    };
  }

  _showToast(message) {
    if (this._toastTimer) {
      clearTimeout(this._toastTimer);
    }
    // Remove existing toast
    const existing = this.overlay.querySelector('.mc-save-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'mc-save-toast';
    toast.textContent = message;
    this.overlay.appendChild(toast);

    this._toastTimer = setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 2500);
  }

  _escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
