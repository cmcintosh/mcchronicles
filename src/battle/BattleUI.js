// BattleUI.js — In-battle HUD overlay using DOM elements for McChronicles JRPG
// Storybook-themed with golden borders, dark parchment backgrounds.

import { clamp } from '../utils/math.js';
import { ABILITIES } from '../data/abilities.js';

// Helper: check if entity is alive (handles both property and method patterns)
function isAlive(entity) {
  if (!entity) return false;
  if (typeof entity.isAlive === 'function') return entity.isAlive();
  return !!entity.isAlive;
}

// Helper: get max HP (handles both property and method patterns)
function getMaxHP(entity) {
  if (typeof entity.getMaxHP === 'function') return entity.getMaxHP();
  return entity.maxHP || entity.stats?.hp || 100;
}

// Helper: get max MP (handles both property and method patterns)
function getMaxMP(entity) {
  if (typeof entity.getMaxMP === 'function') return entity.getMaxMP();
  return entity.maxMP || entity.stats?.mp || 50;
}

// Helper: get current HP (handles both property patterns)
function getHP(entity) {
  return entity.currentHP ?? entity.hp ?? 0;
}

// Helper: get current MP (handles both property patterns)
function getMP(entity) {
  return entity.currentMP ?? entity.mp ?? 0;
}

export default class BattleUI {
  /**
   * @param {HTMLElement} container — element to append the UI overlay to
   */
  constructor(container) {
    this.container = container;
    this.root = null;
    this.styleElement = null;
    this.elements = {};
    this.callbacks = {
      onSelectCommand: null,
      onSelectAbility: null,
      onSelectTarget: null,
      onSelectItem: null,
      onFlee: null,
    };
    this._logMessages = [];
  }

  // ────────────────────────────────────────────────────────────
  //  CSS
  // ────────────────────────────────────────────────────────────

  _injectCSS() {
    const css = `
      .mc-battle-ui {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        pointer-events: none;
        font-family: 'Cinzel', 'Trajan Pro', 'Times New Roman', Georgia, serif;
        z-index: 100;
        user-select: none;
      }

      .mc-battle-ui * {
        box-sizing: border-box;
      }

      /* === Party Status Panel (bottom-left) === */
      .mc-party-panel {
        position: absolute;
        bottom: 16px;
        left: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: auto;
      }

      .mc-party-card {
        background: rgba(26, 26, 46, 0.85);
        border: 2px solid #d4af37;
        border-radius: 8px;
        padding: 8px 12px;
        min-width: 220px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(212, 175, 55, 0.3);
        transition: border-color 0.3s, box-shadow 0.3s;
      }

      .mc-party-card.active-turn {
        border-color: #ffdd44;
        box-shadow: 0 0 16px rgba(255, 221, 68, 0.6), 0 4px 12px rgba(0, 0, 0, 0.5);
      }

      .mc-party-card.dead {
        opacity: 0.5;
        filter: grayscale(0.8);
      }

      .mc-party-name {
        font-size: 14px;
        font-weight: bold;
        color: #d4af37;
        margin-bottom: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .mc-party-level {
        font-size: 11px;
        color: #aaa;
      }

      .mc-bar-row {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 3px;
      }

      .mc-bar-label {
        font-size: 10px;
        width: 22px;
        text-align: right;
        color: #ccc;
        font-weight: bold;
      }

      .mc-bar-container {
        flex: 1;
        height: 10px;
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid #555;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
      }

      .mc-bar-fill {
        height: 100%;
        border-radius: 4px;
        transition: width 0.3s ease;
      }

      .mc-bar-fill.hp { background: linear-gradient(to right, #2ecc40, #3dff5e); }
      .mc-bar-fill.mp { background: linear-gradient(to right, #0074d9, #39a0ff); }
      .mc-bar-fill.atb { background: linear-gradient(to right, #d4af37, #ffdd44); }

      .mc-bar-text {
        font-size: 9px;
        color: #ddd;
        min-width: 52px;
        text-align: right;
      }

      .mc-status-icons {
        display: flex;
        gap: 4px;
        margin-top: 3px;
        min-height: 16px;
      }

      .mc-status-icon {
        font-size: 12px;
        title: attr(data-name);
      }

      /* === Enemy Info (top) === */
      .mc-enemy-info {
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 12px;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s;
      }

      .mc-enemy-info.visible {
        opacity: 1;
      }

      .mc-enemy-name {
        background: rgba(26, 26, 46, 0.85);
        border: 2px solid #d4af37;
        border-radius: 6px;
        padding: 4px 14px;
        font-size: 13px;
        color: #d4af37;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
      }

      .mc-enemy-name.targeted {
        background: rgba(80, 20, 20, 0.9);
        border-color: #ff4444;
        box-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
      }

      .mc-enemy-name.dead {
        text-decoration: line-through;
        opacity: 0.4;
      }

      /* === Command Menu (bottom-right) === */
      .mc-command-menu {
        position: absolute;
        bottom: 16px;
        right: 16px;
        background: rgba(26, 26, 46, 0.9);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 12px;
        display: none;
        flex-direction: column;
        gap: 6px;
        pointer-events: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.2);
        min-width: 140px;
      }

      .mc-command-menu.visible {
        display: flex;
        animation: mc-slide-in 0.2s ease;
      }

      @keyframes mc-slide-in {
        from { opacity: 0; transform: translateX(20px); }
        to { opacity: 1; transform: translateX(0); }
      }

      .mc-cmd-title {
        font-size: 12px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 4px;
        border-bottom: 1px solid #555;
        padding-bottom: 4px;
      }

      .mc-cmd-btn {
        background: rgba(40, 40, 60, 0.9);
        border: 1px solid #d4af37;
        border-radius: 6px;
        color: #e8d8a0;
        padding: 8px 16px;
        font-size: 13px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
        text-align: center;
      }

      .mc-cmd-btn:hover {
        background: rgba(212, 175, 55, 0.3);
        box-shadow: 0 0 8px rgba(212, 175, 55, 0.4);
        transform: scale(1.03);
      }

      .mc-cmd-btn:active {
        transform: scale(0.98);
      }

      .mc-cmd-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .mc-cmd-btn.danger {
        border-color: #cc4444;
        color: #ff8888;
      }

      .mc-cmd-btn.danger:hover {
        background: rgba(204, 68, 68, 0.3);
        box-shadow: 0 0 8px rgba(204, 68, 68, 0.4);
      }

      /* === Ability Menu === */
      .mc-ability-menu {
        position: absolute;
        bottom: 16px;
        right: 180px;
        background: rgba(26, 26, 46, 0.92);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 10px;
        display: none;
        flex-direction: column;
        gap: 4px;
        pointer-events: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
        min-width: 280px;
        max-height: 320px;
        overflow-y: auto;
      }

      .mc-ability-menu.visible {
        display: flex;
        animation: mc-slide-in 0.2s ease;
      }

      .mc-ability-title {
        font-size: 12px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 6px;
        border-bottom: 1px solid #555;
        padding-bottom: 4px;
      }

      .mc-ability-entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(40, 40, 60, 0.7);
        border: 1px solid #666;
        border-radius: 6px;
        padding: 6px 10px;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
      }

      .mc-ability-entry:hover {
        background: rgba(212, 175, 55, 0.2);
        border-color: #d4af37;
      }

      .mc-ability-entry.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .mc-ability-entry.disabled:hover {
        background: rgba(40, 40, 60, 0.7);
        border-color: #666;
      }

      .mc-ability-name {
        font-size: 12px;
        color: #e8d8a0;
        font-weight: bold;
      }

      .mc-ability-cost {
        font-size: 11px;
        color: #39a0ff;
        font-weight: bold;
      }

      .mc-ability-desc {
        font-size: 10px;
        color: #aaa;
        margin-top: 2px;
        width: 100%;
      }

      .mc-ability-back {
        margin-top: 6px;
        text-align: center;
        font-size: 11px;
        color: #888;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }

      .mc-ability-back:hover {
        background: rgba(100, 100, 100, 0.3);
      }

      /* === Item Menu === */
      .mc-item-menu {
        position: absolute;
        bottom: 16px;
        right: 180px;
        background: rgba(26, 26, 46, 0.92);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 10px;
        display: none;
        flex-direction: column;
        gap: 4px;
        pointer-events: auto;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
        min-width: 240px;
        max-height: 300px;
        overflow-y: auto;
      }

      .mc-item-menu.visible {
        display: flex;
        animation: mc-slide-in 0.2s ease;
      }

      .mc-item-title {
        font-size: 12px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 6px;
        border-bottom: 1px solid #555;
        padding-bottom: 4px;
      }

      .mc-item-entry {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(40, 40, 60, 0.7);
        border: 1px solid #666;
        border-radius: 6px;
        padding: 6px 10px;
        cursor: pointer;
        transition: background 0.2s, border-color 0.2s;
      }

      .mc-item-entry:hover {
        background: rgba(212, 175, 55, 0.2);
        border-color: #d4af37;
      }

      .mc-item-name {
        font-size: 12px;
        color: #e8d8a0;
        font-weight: bold;
      }

      .mc-item-qty {
        font-size: 11px;
        color: #aaa;
      }

      .mc-item-desc {
        font-size: 10px;
        color: #aaa;
        margin-top: 2px;
        width: 100%;
      }

      .mc-item-back {
        margin-top: 6px;
        text-align: center;
        font-size: 11px;
        color: #888;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }

      .mc-item-back:hover {
        background: rgba(100, 100, 100, 0.3);
      }

      /* === Target Selector === */
      .mc-target-selector {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(26, 26, 46, 0.92);
        border: 2px solid #d4af37;
        border-radius: 10px;
        padding: 14px;
        display: none;
        flex-direction: column;
        gap: 6px;
        pointer-events: auto;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
        min-width: 200px;
      }

      .mc-target-selector.visible {
        display: flex;
        animation: mc-fade-in 0.2s ease;
      }

      @keyframes mc-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .mc-target-title {
        font-size: 13px;
        color: #d4af37;
        text-align: center;
        margin-bottom: 6px;
        border-bottom: 1px solid #555;
        padding-bottom: 6px;
      }

      .mc-target-entry {
        background: rgba(40, 40, 60, 0.8);
        border: 1px solid #888;
        border-radius: 6px;
        padding: 8px 16px;
        font-size: 13px;
        color: #e8d8a0;
        cursor: pointer;
        text-align: center;
        transition: background 0.2s, border-color 0.2s, transform 0.1s;
      }

      .mc-target-entry:hover {
        background: rgba(204, 68, 68, 0.3);
        border-color: #ff4444;
        transform: scale(1.03);
      }

      .mc-target-entry.dead {
        text-decoration: line-through;
        opacity: 0.4;
        cursor: not-allowed;
      }

      .mc-target-entry.ally:hover {
        background: rgba(68, 204, 68, 0.3);
        border-color: #44ff44;
      }

      .mc-target-back {
        margin-top: 4px;
        text-align: center;
        font-size: 11px;
        color: #888;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
      }

      .mc-target-back:hover {
        background: rgba(100, 100, 100, 0.3);
      }

      /* === Battle Log (bottom-center) === */
      .mc-battle-log {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column-reverse;
        gap: 2px;
        pointer-events: none;
        max-width: 400px;
        text-align: center;
      }

      .mc-log-line {
        background: rgba(26, 26, 46, 0.8);
        border: 1px solid #555;
        border-radius: 4px;
        padding: 3px 10px;
        font-size: 12px;
        color: #ddd;
        animation: mc-log-fade 0.3s ease;
      }

      @keyframes mc-log-fade {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* === Victory / Defeat Screens === */
      .mc-victory-screen,
      .mc-defeat-screen {
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        pointer-events: auto;
        z-index: 200;
      }

      .mc-victory-screen.visible {
        display: flex;
        background: rgba(0, 0, 0, 0.7);
        animation: mc-victory-glow 0.5s ease;
      }

      @keyframes mc-victory-glow {
        from { background: rgba(0, 0, 0, 0); }
        to { background: rgba(0, 0, 0, 0.7); }
      }

      .mc-defeat-screen.visible {
        display: flex;
        background: rgba(20, 0, 0, 0.8);
        animation: mc-defeat-fade 0.5s ease;
      }

      @keyframes mc-defeat-fade {
        from { background: rgba(20, 0, 0, 0); }
        to { background: rgba(20, 0, 0, 0.8); }
      }

      .mc-victory-title {
        font-size: 48px;
        color: #d4af37;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.6), 0 4px 8px rgba(0,0,0,0.8);
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: 4px;
      }

      .mc-defeat-title {
        font-size: 48px;
        color: #cc4444;
        text-shadow: 0 0 20px rgba(204, 68, 68, 0.6), 0 4px 8px rgba(0,0,0,0.8);
        margin-bottom: 20px;
        font-weight: bold;
        letter-spacing: 4px;
      }

      .mc-rewards {
        background: rgba(26, 26, 46, 0.9);
        border: 2px solid #d4af37;
        border-radius: 12px;
        padding: 20px 32px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 24px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
      }

      .mc-reward-line {
        font-size: 16px;
        color: #e8d8a0;
        text-align: center;
      }

      .mc-reward-line .value {
        color: #d4af37;
        font-weight: bold;
      }

      .mc-continue-btn {
        background: rgba(40, 40, 60, 0.9);
        border: 2px solid #d4af37;
        border-radius: 8px;
        color: #d4af37;
        padding: 12px 40px;
        font-size: 16px;
        font-family: inherit;
        cursor: pointer;
        transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
      }

      .mc-continue-btn:hover {
        background: rgba(212, 175, 55, 0.3);
        box-shadow: 0 0 12px rgba(212, 175, 55, 0.5);
        transform: scale(1.05);
      }

      .mc-continue-btn:active {
        transform: scale(0.98);
      }

      /* Scrollbar styling for menus */
      .mc-ability-menu::-webkit-scrollbar,
      .mc-item-menu::-webkit-scrollbar {
        width: 6px;
      }

      .mc-ability-menu::-webkit-scrollbar-track,
      .mc-item-menu::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.3);
        border-radius: 3px;
      }

      .mc-ability-menu::-webkit-scrollbar-thumb,
      .mc-item-menu::-webkit-scrollbar-thumb {
        background: #d4af37;
        border-radius: 3px;
      }
    `;

    this.styleElement = document.createElement('style');
    this.styleElement.id = 'mc-battle-ui-style';
    this.styleElement.textContent = css;
    document.head.appendChild(this.styleElement);
  }

  // ────────────────────────────────────────────────────────────
  //  Build DOM
  // ────────────────────────────────────────────────────────────

  /**
   * Build all DOM elements and inject CSS.
   */
  create() {
    this._injectCSS();

    this.root = document.createElement('div');
    this.root.className = 'mc-battle-ui';

    // Party status panel
    this.elements.partyPanel = document.createElement('div');
    this.elements.partyPanel.className = 'mc-party-panel';

    // Enemy info
    this.elements.enemyInfo = document.createElement('div');
    this.elements.enemyInfo.className = 'mc-enemy-info';

    // Command menu
    this.elements.commandMenu = document.createElement('div');
    this.elements.commandMenu.className = 'mc-command-menu';

    // Ability menu
    this.elements.abilityMenu = document.createElement('div');
    this.elements.abilityMenu.className = 'mc-ability-menu';

    // Item menu
    this.elements.itemMenu = document.createElement('div');
    this.elements.itemMenu.className = 'mc-item-menu';

    // Target selector
    this.elements.targetSelector = document.createElement('div');
    this.elements.targetSelector.className = 'mc-target-selector';

    // Battle log
    this.elements.battleLog = document.createElement('div');
    this.elements.battleLog.className = 'mc-battle-log';

    // Victory screen
    this.elements.victoryScreen = document.createElement('div');
    this.elements.victoryScreen.className = 'mc-victory-screen';

    // Defeat screen
    this.elements.defeatScreen = document.createElement('div');
    this.elements.defeatScreen.className = 'mc-defeat-screen';

    // Append all to root
    this.root.appendChild(this.elements.partyPanel);
    this.root.appendChild(this.elements.enemyInfo);
    this.root.appendChild(this.elements.commandMenu);
    this.root.appendChild(this.elements.abilityMenu);
    this.root.appendChild(this.elements.itemMenu);
    this.root.appendChild(this.elements.targetSelector);
    this.root.appendChild(this.elements.battleLog);
    this.root.appendChild(this.elements.victoryScreen);
    this.root.appendChild(this.elements.defeatScreen);

    this.container.appendChild(this.root);
  }

  // ────────────────────────────────────────────────────────────
  //  Update
  // ────────────────────────────────────────────────────────────

  /**
   * Update the full UI.
   * @param {Array} party
   * @param {Array} enemies
   * @param {BattleEntity|null} activeEntity
   */
  update(party, enemies, activeEntity) {
    this.showPartyStatus(party, activeEntity);
    this.showEnemyInfo(enemies);
  }

  // ────────────────────────────────────────────────────────────
  //  Party Status Panel
  // ────────────────────────────────────────────────────────────

  /**
   * Render the party status panel.
   * @param {Array} party
   * @param {BattleEntity|null} activeEntity
   */
  showPartyStatus(party, activeEntity = null) {
    const panel = this.elements.partyPanel;
    panel.innerHTML = '';

    for (const member of party) {
      const card = document.createElement('div');
      card.className = 'mc-party-card';
      if (activeEntity && member === activeEntity) {
        card.classList.add('active-turn');
      }
      if (!isAlive(member)) {
        card.classList.add('dead');
      }

      // Name + level
      const nameRow = document.createElement('div');
      nameRow.className = 'mc-party-name';
      nameRow.innerHTML = `<span>${member.name}</span><span class="mc-party-level">Lv ${member.level}</span>`;
      card.appendChild(nameRow);

      // HP bar
      const hpBar = this._createBar(getHP(member), getMaxHP(member), 'hp', 'HP');
      card.appendChild(hpBar);

      // MP bar
      const mpBar = this._createBar(getMP(member), getMaxMP(member), 'mp', 'MP');
      card.appendChild(mpBar);

      // ATB bar
      const atbBar = this._createBar(member.atb || 0, 100, 'atb', 'ATB');
      card.appendChild(atbBar);

      // Status effect icons
      const statusIcons = document.createElement('div');
      statusIcons.className = 'mc-status-icons';
      if (member.statusEffects && Array.isArray(member.statusEffects)) {
        for (const effect of member.statusEffects) {
          const icon = document.createElement('span');
          icon.className = 'mc-status-icon';
          icon.textContent = this._getStatusIcon(effect.id);
          icon.title = effect.name || effect.id;
          statusIcons.appendChild(icon);
        }
      }
      card.appendChild(statusIcons);

      panel.appendChild(card);
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Enemy Info
  // ────────────────────────────────────────────────────────────

  /**
   * Show enemy names at top.
   * @param {Array} enemies
   */
  showEnemyInfo(enemies) {
    const info = this.elements.enemyInfo;
    info.innerHTML = '';

    if (!enemies || enemies.length === 0) {
      info.classList.remove('visible');
      return;
    }

    for (const enemy of enemies) {
      const nameEl = document.createElement('div');
      nameEl.className = 'mc-enemy-name';
      nameEl.textContent = enemy.name;
      if (!isAlive(enemy)) {
        nameEl.classList.add('dead');
      }
      info.appendChild(nameEl);
    }

    info.classList.add('visible');
  }

  // ────────────────────────────────────────────────────────────
  //  Command Menu
  // ────────────────────────────────────────────────────────────

  /**
   * Show the main command menu for a party member.
   * @param {BattleEntity} entity
   */
  showCommandMenu(entity) {
    this._lastActiveEntity = entity;
    const menu = this.elements.commandMenu;
    menu.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'mc-cmd-title';
    title.textContent = `${entity.name}'s Turn`;
    menu.appendChild(title);

    const commands = [
      { label: 'Attack', cmd: 'attack', style: '' },
      { label: 'Ability', cmd: 'ability', style: '' },
      { label: 'Item', cmd: 'item', style: '' },
      { label: 'Defend', cmd: 'defend', style: '' },
      { label: 'Flee', cmd: 'flee', style: 'danger' },
    ];

    for (const c of commands) {
      const btn = document.createElement('button');
      btn.className = 'mc-cmd-btn';
      if (c.style) btn.classList.add(c.style);
      btn.textContent = c.label;
      btn.addEventListener('click', () => {
        if (this.callbacks.onSelectCommand) {
          this.callbacks.onSelectCommand(c.cmd);
        }
      });
      menu.appendChild(btn);
    }

    // Battle speed toggle button
    const speedBtn = document.createElement('button');
    speedBtn.className = 'mc-cmd-btn mc-cmd-speed';
    speedBtn.textContent = 'Speed: Normal';
    speedBtn.addEventListener('click', () => {
      if (this.callbacks.onToggleSpeed) {
        const speed = this.callbacks.onToggleSpeed();
        speedBtn.textContent = `Speed: ${speed === 'fast' ? 'Fast' : 'Normal'}`;
      }
    });
    menu.appendChild(speedBtn);

    // Auto-battle toggle button
    const autoBtn = document.createElement('button');
    autoBtn.className = 'mc-cmd-btn mc-cmd-auto';
    autoBtn.textContent = 'Auto: OFF';
    autoBtn.addEventListener('click', () => {
      if (this.callbacks.onToggleAuto) {
        const auto = this.callbacks.onToggleAuto();
        autoBtn.textContent = `Auto: ${auto ? 'ON' : 'OFF'}`;
      }
    });
    menu.appendChild(autoBtn);

    menu.classList.add('visible');
  }

  hideCommandMenu() {
    this.elements.commandMenu.classList.remove('visible');
  }

  // ────────────────────────────────────────────────────────────
  //  Ability Menu
  // ────────────────────────────────────────────────────────────

  /**
   * Show the ability menu for a party member.
   * @param {BattleEntity} entity
   */
  showAbilityMenu(entity) {
    const menu = this.elements.abilityMenu;
    menu.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'mc-ability-title';
    title.textContent = 'Abilities';
    menu.appendChild(title);

    // Get abilities available to this character at their level
    const abilities = entity.getAvailableAbilities
      ? entity.getAvailableAbilities()
      : (entity.abilities || []).map(id => ABILITIES[id]).filter(Boolean);

    if (abilities.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mc-ability-entry disabled';
      empty.innerHTML = '<span class="mc-ability-name">No abilities available</span>';
      menu.appendChild(empty);
    } else {
      for (const abilityData of abilities) {
        const entry = document.createElement('div');
        entry.className = 'mc-ability-entry';

        const canAfford = getMP(entity) >= abilityData.mpCost;
        if (!canAfford) {
          entry.classList.add('disabled');
        }

        const nameRow = document.createElement('div');
        nameRow.style.display = 'flex';
        nameRow.style.justifyContent = 'space-between';
        nameRow.style.width = '100%';

        const nameEl = document.createElement('span');
        nameEl.className = 'mc-ability-name';
        nameEl.textContent = abilityData.name;

        const costEl = document.createElement('span');
        costEl.className = 'mc-ability-cost';
        costEl.textContent = `${abilityData.mpCost} MP`;

        nameRow.appendChild(nameEl);
        nameRow.appendChild(costEl);
        entry.appendChild(nameRow);

        const descEl = document.createElement('div');
        descEl.className = 'mc-ability-desc';
        descEl.textContent = abilityData.description || '';
        entry.appendChild(descEl);

        if (canAfford) {
          entry.addEventListener('click', () => {
            if (this.callbacks.onSelectAbility) {
              this.callbacks.onSelectAbility(abilityData.id);
            }
          });
        }

        menu.appendChild(entry);
      }
    }

    // Back button
    const back = document.createElement('div');
    back.className = 'mc-ability-back';
    back.textContent = '← Back';
    back.addEventListener('click', () => {
      this.hideAbilityMenu();
      this.showCommandMenu(entity);
    });
    menu.appendChild(back);

    menu.classList.add('visible');
  }

  hideAbilityMenu() {
    this.elements.abilityMenu.classList.remove('visible');
  }

  // ────────────────────────────────────────────────────────────
  //  Item Menu
  // ────────────────────────────────────────────────────────────

  /**
   * Show the item menu.
   * @param {Array<{itemId: string, quantity: number, data: object}>} items
   */
  showItemMenu(items) {
    const menu = this.elements.itemMenu;
    menu.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'mc-item-title';
    title.textContent = 'Items';
    menu.appendChild(title);

    if (!items || items.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'mc-item-entry disabled';
      empty.innerHTML = '<span class="mc-item-name">No usable items</span>';
      menu.appendChild(empty);
    } else {
      for (const item of items) {
        const entry = document.createElement('div');
        entry.className = 'mc-item-entry';

        // Handle both formats: { itemId, data, quantity } and { id, name, count }
        const itemId = item.itemId || item.id;
        const itemName = item.data?.name || item.name || itemId;
        const itemDesc = item.data?.description || item.description || '';
        const itemQty = item.quantity ?? item.count ?? 0;

        const nameRow = document.createElement('div');
        nameRow.style.display = 'flex';
        nameRow.style.justifyContent = 'space-between';
        nameRow.style.width = '100%';

        const nameEl = document.createElement('span');
        nameEl.className = 'mc-item-name';
        nameEl.textContent = itemName;

        const qtyEl = document.createElement('span');
        qtyEl.className = 'mc-item-qty';
        qtyEl.textContent = `x${itemQty}`;

        nameRow.appendChild(nameEl);
        nameRow.appendChild(qtyEl);
        entry.appendChild(nameRow);

        const descEl = document.createElement('div');
        descEl.className = 'mc-item-desc';
        descEl.textContent = itemDesc;
        entry.appendChild(descEl);

        entry.addEventListener('click', () => {
          if (this.callbacks.onSelectItem) {
            this.callbacks.onSelectItem(itemId);
          }
        });

        menu.appendChild(entry);
      }
    }

    // Back button
    const back = document.createElement('div');
    back.className = 'mc-item-back';
    back.textContent = '← Back';
    back.addEventListener('click', () => {
      this.hideItemMenu();
      if (this._lastActiveEntity) {
        this.showCommandMenu(this._lastActiveEntity);
      }
    });
    menu.appendChild(back);

    menu.classList.add('visible');
  }

  hideItemMenu() {
    this.elements.itemMenu.classList.remove('visible');
  }

  // ────────────────────────────────────────────────────────────
  //  Target Selector
  // ────────────────────────────────────────────────────────────

  /**
   * Show target selection.
   * @param {Array} targets — array of entities
   * @param {boolean} isEnemy — whether targets are enemies (true) or allies (false)
   */
  showTargetSelect(targets, isEnemy = true) {
    const selector = this.elements.targetSelector;
    selector.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'mc-target-title';
    title.textContent = isEnemy ? 'Select Enemy Target' : 'Select Ally Target';
    selector.appendChild(title);

    targets.forEach((target, index) => {
      const entry = document.createElement('div');
      entry.className = 'mc-target-entry';
      if (!isEnemy) entry.classList.add('ally');
      if (!isAlive(target)) entry.classList.add('dead');

      const hpInfo = isAlive(target)
        ? ` (${target.currentHP || target.hp}/${target.maxHP || target.stats?.hp || '?'} HP)`
        : ' (KO)';

      entry.textContent = target.name + hpInfo;

      if (isAlive(target) || !isEnemy) {
        entry.addEventListener('click', () => {
          if (this.callbacks.onSelectTarget) {
            this.callbacks.onSelectTarget(target);
          }
        });
      }

      selector.appendChild(entry);
    });

    // Back button
    const back = document.createElement('div');
    back.className = 'mc-target-back';
    back.textContent = '← Back';
    back.addEventListener('click', () => {
      this.hideTargetSelect();
      // Return to command menu if we have an active entity
      if (this._lastActiveEntity) {
        this.showCommandMenu(this._lastActiveEntity);
      }
    });
    selector.appendChild(back);

    selector.classList.add('visible');
  }

  hideTargetSelect() {
    this.elements.targetSelector.classList.remove('visible');
  }

  // ────────────────────────────────────────────────────────────
  //  Victory / Defeat Screens
  // ────────────────────────────────────────────────────────────

  /**
   * Show the victory screen with rewards.
   * @param {{xp: number, gold: number, items: string[]}} rewards
   */
  showVictory(rewards) {
    this.hideCommandMenu();
    this.hideAbilityMenu();
    this.hideItemMenu();
    this.hideTargetSelect();

    const screen = this.elements.victoryScreen;
    screen.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'mc-victory-title';
    title.textContent = 'VICTORY!';
    screen.appendChild(title);

    const rewardsBox = document.createElement('div');
    rewardsBox.className = 'mc-rewards';

    const xpLine = document.createElement('div');
    xpLine.className = 'mc-reward-line';
    xpLine.innerHTML = `XP Gained: <span class="value">${rewards.xp}</span>`;
    rewardsBox.appendChild(xpLine);

    const goldLine = document.createElement('div');
    goldLine.className = 'mc-reward-line';
    goldLine.innerHTML = `Gold Earned: <span class="value">${rewards.gold}</span>`;
    rewardsBox.appendChild(goldLine);

    if (rewards.items && rewards.items.length > 0) {
      const itemsLine = document.createElement('div');
      itemsLine.className = 'mc-reward-line';
      itemsLine.innerHTML = `Items Found: <span class="value">${rewards.items.join(', ')}</span>`;
      rewardsBox.appendChild(itemsLine);
    }

    screen.appendChild(rewardsBox);

    const continueBtn = document.createElement('button');
    continueBtn.className = 'mc-continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
      screen.classList.remove('visible');
      if (this.callbacks.onVictoryContinue) {
        this.callbacks.onVictoryContinue();
      }
    });
    screen.appendChild(continueBtn);

    screen.classList.add('visible');
  }

  /**
   * Show the defeat screen.
   */
  showDefeat() {
    this.hideCommandMenu();
    this.hideAbilityMenu();
    this.hideItemMenu();
    this.hideTargetSelect();

    const screen = this.elements.defeatScreen;
    screen.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'mc-defeat-title';
    title.textContent = 'DEFEAT...';
    screen.appendChild(title);

    const continueBtn = document.createElement('button');
    continueBtn.className = 'mc-continue-btn';
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => {
      screen.classList.remove('visible');
      if (this.callbacks.onDefeatContinue) {
        this.callbacks.onDefeatContinue();
      }
    });
    screen.appendChild(continueBtn);

    screen.classList.add('visible');
  }

  // ────────────────────────────────────────────────────────────
  //  Battle Log
  // ────────────────────────────────────────────────────────────

  /**
   * Show a message in the battle log.
   * @param {string} text
   */
  /**
   * Show a floating damage/heal number above a target.
   * @param {number} amount — damage or heal amount
   * @param {boolean} isHeal — if true, show green; else red
   * @param {number} [screenX] — optional screen X position (0-1)
   * @param {number} [screenY] — optional screen Y position (0-1)
   */
  showDamageNumber(amount, isHeal = false, screenX = 0.5, screenY = 0.5) {
    const number = document.createElement('div');
    number.className = isHeal ? 'mc-damage-number heal' : 'mc-damage-number';
    number.textContent = isHeal ? `+${amount}` : `-${amount}`;
    number.style.position = 'absolute';
    number.style.left = `${screenX * 100}%`;
    number.style.top = `${screenY * 100}%`;
    number.style.color = isHeal ? '#44ff88' : '#ff4444';
    number.style.fontSize = '24px';
    number.style.fontWeight = 'bold';
    number.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
    number.style.pointerEvents = 'none';
    number.style.zIndex = '200';
    number.style.transition = 'all 1s ease-out';
    number.style.transform = 'translate(-50%, -50%)';

    this.root.appendChild(number);

    // Animate upward and fade
    requestAnimationFrame(() => {
      number.style.top = `${(screenY - 0.1) * 100}%`;
      number.style.opacity = '0';
    });

    // Remove after animation
    setTimeout(() => {
      if (number.parentElement) {
        number.parentElement.removeChild(number);
      }
    }, 1000);
  }

  showMessage(text) {
    this._logMessages.push(text);
    if (this._logMessages.length > 4) {
      this._logMessages.shift();
    }

    const log = this.elements.battleLog;
    log.innerHTML = '';

    // Show last 4 messages (reversed so newest is at bottom)
    const recent = this._logMessages.slice(-4);
    for (const msg of recent) {
      const line = document.createElement('div');
      line.className = 'mc-log-line';
      line.textContent = msg;
      log.appendChild(line);
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Bar Helper
  // ────────────────────────────────────────────────────────────

  /**
   * Create a bar DOM element with label, fill, and text.
   * Public alias for _createBar.
   * @param {number} current
   * @param {number} max
   * @param {string} color — 'hp' | 'mp' | 'atb'
   * @param {string} label
   * @returns {HTMLElement}
   */
  createBar(current, max, color, label) {
    return this._createBar(current, max, color, label);
  }

  /**
   * Internal bar creation.
   * @private
   */
  _createBar(current, max, color, label) {
    const row = document.createElement('div');
    row.className = 'mc-bar-row';

    const labelEl = document.createElement('span');
    labelEl.className = 'mc-bar-label';
    labelEl.textContent = label;
    row.appendChild(labelEl);

    const container = document.createElement('div');
    container.className = 'mc-bar-container';

    const fill = document.createElement('div');
    fill.className = `mc-bar-fill ${color}`;
    const pct = max > 0 ? clamp((current / max) * 100, 0, 100) : 0;
    fill.style.width = `${pct}%`;
    container.appendChild(fill);

    row.appendChild(container);

    const textEl = document.createElement('span');
    textEl.className = 'mc-bar-text';
    textEl.textContent = `${Math.ceil(current)}/${Math.ceil(max)}`;
    row.appendChild(textEl);

    return row;
  }

  // ────────────────────────────────────────────────────────────
  //  Status Icon Helper
  // ────────────────────────────────────────────────────────────

  /**
   * Get an emoji icon for a status effect.
   * @param {string} statusId
   * @returns {string}
   * @private
   */
  _getStatusIcon(statusId) {
    const icons = {
      burn: '🔥',
      freeze: '❄️',
      slow: '🐌',
      sleep: '💤',
      poison: '☠️',
      stun: '⚡',
      atk_up: '⬆️',
      atk_down: '⬇️',
      def_up: '🛡️',
      def_down: '💔',
      agi_up: '🏃',
      agi_down: '🦶',
      taunt: '😤',
      cover: '🛡️',
      regen: '💚',
      mp_regen: '💙',
    };
    return icons[statusId] || '❓';
  }

  // ────────────────────────────────────────────────────────────
  //  Hide All
  // ────────────────────────────────────────────────────────────

  /**
   * Hide all UI elements.
   */
  hide() {
    this.hideCommandMenu();
    this.hideAbilityMenu();
    this.hideItemMenu();
    this.hideTargetSelect();
    this.elements.enemyInfo.classList.remove('visible');
    this.elements.victoryScreen.classList.remove('visible');
    this.elements.defeatScreen.classList.remove('visible');
    this.elements.partyPanel.innerHTML = '';
    this.elements.battleLog.innerHTML = '';
  }

  // ────────────────────────────────────────────────────────────
  //  Cleanup
  // ────────────────────────────────────────────────────────────

  /**
   * Remove all DOM elements and clean up.
   */
  dispose() {
    this.hide();

    if (this.root && this.root.parentNode) {
      this.root.parentNode.removeChild(this.root);
    }

    if (this.styleElement && this.styleElement.parentNode) {
      this.styleElement.parentNode.removeChild(this.styleElement);
    }

    this.root = null;
    this.styleElement = null;
    this.elements = {};
    this._logMessages = [];
    this.callbacks = {};
  }
}
