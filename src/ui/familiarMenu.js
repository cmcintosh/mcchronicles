/**
 * FamiliarMenu.js — McChronicles JRPG
 * Familiar collection menu (Fry Kids)
 * DOM-based overlay with storybook/ornate aesthetic.
 * Ni no Kuni-inspired golden borders, warm colors, Georgia serif.
 */

// ── Element definitions (colors are hex ints) ────────────────────────────────
const ELEMENTS = {
  fire:    { name: 'Fire',    color: 0xE25822, icon: '🔥' },
  ice:     { name: 'Ice',     color: 0x6EC5E9, icon: '❄️' },
  lightning:{ name: 'Lightning',color: 0xFACC15, icon: '⚡' },
  earth:   { name: 'Earth',   color: 0x8B6F47, icon: '⛰️' },
  wind:    { name: 'Wind',    color: 0x7DCEA0, icon: '🍃' },
  water:   { name: 'Water',   color: 0x4A90D9, icon: '💧' },
  light:   { name: 'Light',   color: 0xFFE066, icon: '✨' },
  dark:    { name: 'Dark',    color: 0x6B3FA0, icon: '🌙' },
};

// ── Bonus type labels ────────────────────────────────────────────────────────
const BONUS_LABELS = {
  atk: 'ATK',
  def: 'DEF',
  mag: 'MAG',
  agi: 'AGI',
  hp:  'Max HP',
  mp:  'Max MP',
};

// ── Convert hex int to CSS color string ──────────────────────────────────────
function hexToCss(hexInt) {
  return '#' + hexInt.toString(16).padStart(6, '0');
}

// ── Inject styles (once) ─────────────────────────────────────────────────────
let stylesInjected = false;

function injectStyles() {
  if (stylesInjected) return;
  stylesInjected = true;

  const style = document.createElement('style');
  style.id = 'mc-familiar-menu-styles';
  style.textContent = `
    .mc-familiar-overlay {
      position: fixed;
      inset: 0;
      z-index: 9500;
      display: none;
      align-items: center;
      justify-content: center;
      background: rgba(20, 12, 8, 0.82);
      backdrop-filter: blur(4px);
      font-family: Georgia, 'Times New Roman', serif;
      color: #f5e6c8;
    }
    .mc-familiar-overlay.mc-active {
      display: flex;
    }
    .mc-familiar-panel {
      width: min(920px, 92vw);
      max-height: 88vh;
      display: flex;
      flex-direction: column;
      background: linear-gradient(160deg, #2a1a10 0%, #3b2817 40%, #2a1a10 100%);
      border: 3px solid #c9a84c;
      border-radius: 14px;
      box-shadow:
        0 0 0 1px #8a6d2f inset,
        0 0 30px rgba(201,168,76,0.25),
        0 12px 50px rgba(0,0,0,0.6);
      overflow: hidden;
    }
    .mc-familiar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 28px;
      background: linear-gradient(90deg, #1e120a 0%, #3b2817 50%, #1e120a 100%);
      border-bottom: 2px solid #8a6d2f;
    }
    .mc-familiar-title {
      font-size: 1.5rem;
      font-weight: bold;
      color: #f0d98a;
      letter-spacing: 1px;
      text-shadow: 0 2px 6px rgba(0,0,0,0.5);
    }
    .mc-familiar-close {
      width: 34px;
      height: 34px;
      border: 2px solid #c9a84c;
      border-radius: 50%;
      background: rgba(0,0,0,0.3);
      color: #f0d98a;
      font-size: 1.1rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, transform 0.15s;
      font-family: Georgia, serif;
    }
    .mc-familiar-close:hover {
      background: rgba(201,168,76,0.25);
      transform: scale(1.08);
    }
    .mc-familiar-body {
      flex: 1;
      overflow-y: auto;
      padding: 20px 24px;
    }
    .mc-familiar-body::-webkit-scrollbar {
      width: 8px;
    }
    .mc-familiar-body::-webkit-scrollbar-track {
      background: rgba(0,0,0,0.2);
      border-radius: 4px;
    }
    .mc-familiar-body::-webkit-scrollbar-thumb {
      background: #8a6d2f;
      border-radius: 4px;
    }
    .mc-familiar-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
    .mc-familiar-card {
      position: relative;
      padding: 14px 12px 12px;
      background: linear-gradient(145deg, #332015 0%, #241509 100%);
      border: 2px solid #8a6d2f;
      border-radius: 10px;
      cursor: pointer;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.12s;
      text-align: center;
    }
    .mc-familiar-card:hover {
      border-color: #f0d98a;
      box-shadow: 0 0 16px rgba(240,217,138,0.2);
      transform: translateY(-2px);
    }
    .mc-familiar-card.mc-equipped {
      border-color: #f0d98a;
      box-shadow: 0 0 12px rgba(240,217,138,0.15) inset;
    }
    .mc-familiar-card.mc-locked {
      cursor: default;
      opacity: 0.5;
    }
    .mc-familiar-card.mc-locked:hover {
      border-color: #8a6d2f;
      box-shadow: none;
      transform: none;
    }
    .mc-familiar-icon {
      width: 56px;
      height: 56px;
      margin: 0 auto 8px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.8rem;
      border: 2px solid #8a6d2f;
      position: relative;
    }
    .mc-familiar-icon.mc-silhouette {
      background: rgba(0,0,0,0.35);
      color: transparent;
      border-style: dashed;
    }
    .mc-familiar-icon.mc-silhouette::after {
      content: '?';
      color: #5a4a30;
      font-size: 1.6rem;
      font-weight: bold;
    }
    .mc-familiar-name {
      font-size: 1rem;
      font-weight: bold;
      color: #f0d98a;
      margin-bottom: 2px;
      text-shadow: 0 1px 3px rgba(0,0,0,0.5);
    }
    .mc-familiar-name.mc-locked {
      color: #5a4a30;
    }
    .mc-familiar-element {
      font-size: 0.78rem;
      margin-bottom: 6px;
      opacity: 0.85;
    }
    .mc-familiar-bonus {
      font-size: 0.85rem;
      color: #d4c4a0;
      margin-bottom: 6px;
    }
    .mc-familiar-bonus .mc-bonus-amount {
      color: #f0d98a;
      font-weight: bold;
    }
    .mc-familiar-status {
      font-size: 0.72rem;
      padding: 2px 8px;
      border-radius: 4px;
      display: inline-block;
    }
    .mc-familiar-status.mc-status-equipped {
      background: rgba(201,168,76,0.2);
      border: 1px solid #c9a84c;
      color: #f0d98a;
    }
    .mc-familiar-status.mc-status-unequipped {
      background: rgba(255,255,255,0.05);
      border: 1px solid #5a4a30;
      color: #8a7a5a;
    }
    .mc-familiar-element-bar {
      height: 3px;
      border-radius: 2px;
      margin-bottom: 8px;
    }
    /* Equip sub-menu */
    .mc-familiar-equip-menu {
      position: fixed;
      z-index: 9600;
      display: none;
      flex-direction: column;
      min-width: 180px;
      background: linear-gradient(160deg, #2a1a10 0%, #3b2817 100%);
      border: 2px solid #c9a84c;
      border-radius: 8px;
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: Georgia, serif;
    }
    .mc-familiar-equip-menu.mc-active {
      display: flex;
    }
    .mc-familiar-equip-title {
      padding: 10px 14px;
      font-size: 0.9rem;
      font-weight: bold;
      color: #f0d98a;
      background: rgba(0,0,0,0.25);
      border-bottom: 1px solid #8a6d2f;
    }
    .mc-familiar-equip-item {
      padding: 8px 14px;
      font-size: 0.85rem;
      color: #d4c4a0;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: background 0.15s;
    }
    .mc-familiar-equip-item:hover {
      background: rgba(201,168,76,0.18);
      color: #f0d98a;
    }
    .mc-familiar-equip-item.mc-disabled {
      opacity: 0.4;
      cursor: default;
    }
    .mc-familiar-equip-item.mc-disabled:hover {
      background: transparent;
      color: #d4c4a0;
    }
    .mc-familiar-equip-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .mc-familiar-equip-item.mc-unequip {
      border-top: 1px solid #8a6d2f;
      color: #c9a84c;
    }
    .mc-familiar-equip-item.mc-unequip:hover {
      color: #f0d98a;
    }
  `;
  document.head.appendChild(style);
}

// ── FamiliarMenu class ───────────────────────────────────────────────────────
export default class FamiliarMenu {
  constructor() {
    injectStyles();

    // State
    this._familiars = [];
    this._party = [];
    this._visible = false;
    this._equipMenuEl = null;
    this._activeFamiliarId = null;

    // Build overlay
    this._overlay = document.createElement('div');
    this._overlay.className = 'mc-familiar-overlay';

    this._overlay.innerHTML = `
      <div class="mc-familiar-panel">
        <div class="mc-familiar-header">
          <div class="mc-familiar-title">✦ Fry Kids Codex ✦</div>
          <button class="mc-familiar-close" aria-label="Close">✕</button>
        </div>
        <div class="mc-familiar-body">
          <div class="mc-familiar-grid" id="mc-familiar-grid"></div>
        </div>
      </div>
    `;

    document.body.appendChild(this._overlay);

    // Close button
    this._overlay.querySelector('.mc-familiar-close').addEventListener('click', () => {
      this.hide();
    });

    // Click outside to close
    this._overlay.addEventListener('click', (e) => {
      if (e.target === this._overlay) {
        this.hide();
      }
    });

    // Esc to close
    this._escHandler = (e) => {
      if (e.key === 'Escape' && this._visible) {
        this.hide();
      }
    };
    document.addEventListener('keydown', this._escHandler);

    // Build equip sub-menu
    this._equipMenuEl = document.createElement('div');
    this._equipMenuEl.className = 'mc-familiar-equip-menu';
    document.body.appendChild(this._equipMenuEl);

    // Click outside equip menu to dismiss
    this._equipDismissHandler = (e) => {
      if (this._equipMenuEl.classList.contains('mc-active') &&
          !this._equipMenuEl.contains(e.target) &&
          !e.target.classList.contains('mc-familiar-card')) {
        this._hideEquipMenu();
      }
    };
    document.addEventListener('click', this._equipDismissHandler);
  }

  // ── Public API ───────────────────────────────────────────────────────────

  /**
   * Show the familiar menu.
   * @param {Array} familiars — array of familiar objects
   * @param {Array} party — array of party member objects { id, name, color }
   */
  show(familiars, party) {
    this._familiars = familiars || [];
    this._party = party || [];
    this._renderGrid();
    this._overlay.classList.add('mc-active');
    this._visible = true;
  }

  /**
   * Hide the familiar menu.
   */
  hide() {
    this._overlay.classList.remove('mc-active');
    this._hideEquipMenu();
    this._visible = false;
  }

  /**
   * Equip a familiar to a party member.
   * @param {string|number} familiarId
   * @param {string|number} characterId
   */
  equipFamiliar(familiarId, characterId) {
    const fam = this._familiars.find(f => f.id === familiarId);
    if (!fam || !fam.discovered) return;

    // Unequip from previous holder if switching
    if (fam.equipped && fam.equippedTo && fam.equippedTo !== characterId) {
      fam.equipped = false;
      fam.equippedTo = null;
    }

    // Check if character already has a familiar equipped — if so, unequip it
    const previousFam = this._familiars.find(
      f => f.equipped && f.equippedTo === characterId && f.id !== familiarId
    );
    if (previousFam) {
      previousFam.equipped = false;
      previousFam.equippedTo = null;
    }

    fam.equipped = true;
    fam.equippedTo = characterId;
    this._renderGrid();
  }

  /**
   * Unequip a familiar.
   * @param {string|number} familiarId
   */
  unequipFamiliar(familiarId) {
    const fam = this._familiars.find(f => f.id === familiarId);
    if (!fam) return;
    fam.equipped = false;
    fam.equippedTo = null;
    this._renderGrid();
  }

  // ── Rendering ───────────────────────────────────────────────────────────

  _renderGrid() {
    const grid = this._overlay.querySelector('#mc-familiar-grid');
    grid.innerHTML = '';

    // Sort: discovered first, then locked
    const sorted = [...this._familiars].sort((a, b) => {
      if (a.discovered && !b.discovered) return -1;
      if (!a.discovered && b.discovered) return 1;
      return 0;
    });

    for (const fam of sorted) {
      grid.appendChild(this._renderCard(fam));
    }
  }

  _renderCard(fam) {
    const card = document.createElement('div');
    card.className = 'mc-familiar-card';
    card.dataset.familiarId = fam.id;

    if (!fam.discovered) {
      card.classList.add('mc-locked');
      card.innerHTML = `
        <div class="mc-familiar-icon mc-silhouette"></div>
        <div class="mc-familiar-name mc-locked">??? </div>
        <div class="mc-familiar-element">Undiscovered</div>
        <div class="mc-familiar-bonus">— — —</div>
        <div class="mc-familiar-status mc-status-unequipped">Locked</div>
      `;
      return card;
    }

    if (fam.equipped) {
      card.classList.add('mc-equipped');
    }

    const element = ELEMENTS[fam.element] || { name: 'Unknown', color: 0x888888, icon: '❓' };
    const elementColorCss = hexToCss(element.color);
    const bonusLabel = BONUS_LABELS[fam.bonusType] || fam.bonusType;
    const equippedChar = fam.equippedTo
      ? this._party.find(c => c.id === fam.equippedTo)
      : null;
    const statusText = fam.equipped && equippedChar
      ? `Equipped: ${equippedChar.name}`
      : 'Unequipped';
    const statusClass = fam.equipped ? 'mc-status-equipped' : 'mc-status-unequipped';

    card.innerHTML = `
      <div class="mc-familiar-icon" style="background: ${elementColorCss}22; border-color: ${elementColorCss};">
        ${element.icon}
      </div>
      <div class="mc-familiar-element-bar" style="background: ${elementColorCss};"></div>
      <div class="mc-familiar-name">${fam.name}</div>
      <div class="mc-familiar-element" style="color: ${elementColorCss};">${element.name}</div>
      <div class="mc-familiar-bonus">${bonusLabel} <span class="mc-bonus-amount">+${fam.bonusAmount}</span></div>
      <div class="mc-familiar-status ${statusClass}">${statusText}</div>
    `;

    // Click to open equip menu
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      this._showEquipMenu(fam, card);
    });

    return card;
  }

  // ── Equip sub-menu ──────────────────────────────────────────────────────

  _showEquipMenu(fam, anchorEl) {
    this._hideEquipMenu();
    this._activeFamiliarId = fam.id;

    const menu = this._equipMenuEl;
    let html = `<div class="mc-familiar-equip-title">Equip ${fam.name}</div>`;

    if (fam.equipped) {
      // Show unequip option
      html += `
        <div class="mc-familiar-equip-item mc-unequip" data-action="unequip">
          ✕ Unequip
        </div>
      `;
    }

    // List party members
    if (this._party.length > 0) {
      for (const char of this._party) {
        const charColorCss = hexToCss(char.color || 0xc9a84c);
        const isEquippedHere = fam.equipped && fam.equippedTo === char.id;
        const isOccupied = this._familiars.some(
          f => f.equipped && f.equippedTo === char.id && f.id !== fam.id
        );
        const disabled = isEquippedHere ? 'mc-disabled' : '';
        const label = isEquippedHere
          ? `${char.name} (Current)`
          : isOccupied
            ? `${char.name} (Swap)`
            : `${char.name}`;
        const action = isEquippedHere ? 'none' : 'equip';
        html += `
          <div class="mc-familiar-equip-item ${disabled}" data-action="${action}" data-char-id="${char.id}">
            <span class="mc-familiar-equip-dot" style="background: ${charColorCss};"></span>
            ${label}
          </div>
        `;
      }
    } else {
      html += `<div class="mc-familiar-equip-item mc-disabled">No party members</div>`;
    }

    menu.innerHTML = html;
    menu.classList.add('mc-active');

    // Position near anchor
    const rect = anchorEl.getBoundingClientRect();
    const menuWidth = 200;
    const menuHeight = menu.offsetHeight || 200;
    let left = rect.right + 4;
    let top = rect.top;

    if (left + menuWidth > window.innerWidth) {
      left = rect.left - menuWidth - 4;
    }
    if (left < 0) {
      left = Math.max(8, rect.left);
    }
    if (top + menuHeight > window.innerHeight) {
      top = window.innerHeight - menuHeight - 8;
    }
    if (top < 8) top = 8;

    menu.style.left = left + 'px';
    menu.style.top = top + 'px';

    // Wire up items
    menu.querySelectorAll('.mc-familiar-equip-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = item.dataset.action;
        const charId = item.dataset.charId;

        if (action === 'unequip') {
          this.unequipFamiliar(fam.id);
        } else if (action === 'equip' && charId !== undefined) {
          this.equipFamiliar(fam.id, charId);
        }
        this._hideEquipMenu();
      });
    });
  }

  _hideEquipMenu() {
    this._equipMenuEl.classList.remove('mc-active');
    this._activeFamiliarId = null;
  }

  // ── Cleanup ──────────────────────────────────────────────────────────────

  destroy() {
    this.hide();
    document.removeEventListener('keydown', this._escHandler);
    document.removeEventListener('click', this._equipDismissHandler);
    this._overlay.remove();
    this._equipMenuEl.remove();
    const styles = document.getElementById('mc-familiar-menu-styles');
    if (styles) styles.remove();
    stylesInjected = false;
  }
}
