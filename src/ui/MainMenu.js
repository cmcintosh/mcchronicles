// MainMenu.js — In-game menu overlay for McChronicles JRPG
// Storybook/ornate aesthetic with golden borders, warm colors, Ni no Kuni-inspired design
// Georgia serif font, DOM-based overlay with tabbed interface

import NemesisMenu from './NemesisMenu.js';
import SaveMenu from './SaveMenu.js';

// ─── Region Data ──────────────────────────────────────────────
const REGIONS = [
  { id: 'fry_valley', name: 'Fry Valley', x: 0.25, y: 0.55 },
  { id: 'burger_highlands', name: 'Burger Highlands', x: 0.32, y: 0.28 },
  { id: 'mcflurry_tundra', name: 'McFlurry Tundra', x: 0.48, y: 0.15 },
  { id: 'happy_meal_forest', name: 'Happy Meal Forest', x: 0.15, y: 0.72 },
  { id: 'drive_thru_desert', name: 'Drive-Thru Desert', x: 0.42, y: 0.72 },
  { id: 'mccafe_springs', name: 'McCafé Springs', x: 0.58, y: 0.48 },
  { id: 'play_place_plains', name: 'Play Place Plains', x: 0.68, y: 0.68 },
  { id: 'golden_arches_castle', name: 'Golden Arch Castle', x: 0.85, y: 0.55 },
];

const REGION_CONNECTIONS = {
  fry_valley: ['burger_highlands', 'happy_meal_forest'],
  burger_highlands: ['fry_valley', 'mcflurry_tundra'],
  mcflurry_tundra: ['burger_highlands', 'mccafe_springs'],
  happy_meal_forest: ['fry_valley', 'drive_thru_desert'],
  drive_thru_desert: ['happy_meal_forest', 'mccafe_springs', 'play_place_plains'],
  mccafe_springs: ['mcflurry_tundra', 'drive_thru_desert', 'play_place_plains'],
  play_place_plains: ['drive_thru_desert', 'mccafe_springs', 'golden_arches_castle'],
  golden_arches_castle: ['play_place_plains'],
};

// ─── Styles ───────────────────────────────────────────────────
const MENU_STYLES = `
.mc-menu-overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(135deg, rgba(30, 20, 12, 0.96), rgba(45, 30, 18, 0.96));
  font-family: Georgia, 'Times New Roman', serif;
  color: #f0e0c0;
  display: flex;
  flex-direction: column;
  z-index: 9000;
  overflow: hidden;
}

.mc-menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 24px;
  border-bottom: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(60, 42, 25, 0.9), rgba(40, 28, 16, 0.6));
  flex-shrink: 0;
}

.mc-menu-title {
  font-size: 24px;
  font-weight: bold;
  color: #f5d090;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.7);
  letter-spacing: 2px;
  margin: 0;
}

.mc-menu-close-btn {
  background: rgba(60, 40, 25, 0.8);
  border: 1px solid #c8a050;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 13px;
  padding: 5px 14px;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.15s;
}

.mc-menu-close-btn:hover {
  background: rgba(80, 55, 30, 0.9);
}

.mc-menu-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.mc-menu-tabs {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px 0 16px 16px;
  border-right: 2px solid #c8a050;
  background: linear-gradient(180deg, rgba(40, 28, 16, 0.6), rgba(30, 20, 12, 0.3));
  flex-shrink: 0;
  width: 170px;
}

.mc-menu-tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  font-family: Georgia, serif;
  font-size: 14px;
  color: #a89070;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 6px 0 0 6px;
  transition: all 0.15s ease;
  text-align: left;
  background: transparent;
  letter-spacing: 0.5px;
}

.mc-menu-tab:hover {
  color: #f0e0c0;
  background: rgba(60, 42, 25, 0.4);
}

.mc-menu-tab-active {
  color: #f5d090;
  background: linear-gradient(90deg, rgba(80, 55, 30, 0.6), rgba(60, 42, 25, 0.2));
  border-color: #c8a050;
  border-right-color: transparent;
  font-weight: bold;
}

.mc-menu-tab-icon {
  font-size: 18px;
  width: 22px;
  text-align: center;
}

.mc-menu-content {
  flex: 1;
  overflow-y: auto;
  padding: 24px 32px;
  position: relative;
}

.mc-menu-tab-panel {
  display: none;
}

.mc-menu-tab-panel-active {
  display: block;
}

/* ─── Party Tab ──────────────────────────────── */
.mc-party-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.mc-party-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.7));
  border: 2px solid rgba(200, 160, 80, 0.35);
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.12s;
}

.mc-party-card:hover {
  border-color: #c8a050;
  transform: translateY(-3px);
}

.mc-party-card-selected {
  border-color: #f5d090;
  box-shadow: 0 4px 16px rgba(245, 208, 144, 0.15);
}

.mc-party-card-top {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.mc-party-portrait {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 3px solid #c8a050;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.4);
}

.mc-party-name {
  font-size: 16px;
  font-weight: bold;
  color: #f0e0c0;
  margin: 0;
}

.mc-party-title {
  font-size: 12px;
  color: #c8a050;
  font-style: italic;
}

.mc-party-level {
  font-size: 12px;
  color: #a89070;
}

.mc-party-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 12px;
  margin-bottom: 10px;
}

.mc-party-stat-row {
  display: flex;
  justify-content: space-between;
}

.mc-party-stat-label {
  color: #8a7050;
}

.mc-party-stat-value {
  color: #d8c8a0;
  font-weight: bold;
}

.mc-party-hp-bar, .mc-party-mp-bar {
  height: 8px;
  border-radius: 4px;
  background: rgba(30, 20, 10, 0.7);
  overflow: hidden;
  margin-bottom: 4px;
  position: relative;
}

.mc-party-hp-fill {
  height: 100%;
  background: linear-gradient(90deg, #cc4444, #ee6644);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.mc-party-mp-fill {
  height: 100%;
  background: linear-gradient(90deg, #4466cc, #6688ee);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.mc-party-bar-label {
  font-size: 10px;
  color: #a89070;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.mc-party-equipped {
  font-size: 11px;
  color: #a89070;
  margin-top: 8px;
  border-top: 1px solid rgba(200, 160, 80, 0.2);
  padding-top: 8px;
}

.mc-party-equipped-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2px;
}

.mc-party-equipped-slot {
  color: #8a7050;
}

.mc-party-equipped-item {
  color: #c8b890;
}

.mc-party-detail-overlay {
  position: absolute;
  top: 20px; left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, rgba(40, 28, 16, 0.98), rgba(30, 20, 12, 0.98));
  border: 2px solid #c8a050;
  border-radius: 12px;
  padding: 24px 32px;
  width: 420px;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7);
  z-index: 20;
}

.mc-party-detail-close {
  position: absolute;
  top: 12px; right: 16px;
  background: transparent;
  border: none;
  color: #a89070;
  font-size: 20px;
  cursor: pointer;
}

.mc-party-detail-close:hover {
  color: #f5d090;
}

.mc-party-detail-description {
  font-size: 13px;
  color: #c8b890;
  font-style: italic;
  line-height: 1.5;
  margin: 12px 0;
  padding: 10px;
  background: rgba(30, 20, 12, 0.5);
  border-left: 3px solid #c8a050;
  border-radius: 0 6px 6px 0;
}

.mc-party-detail-section-title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #b89860;
  margin: 14px 0 6px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.3);
  padding-bottom: 2px;
}

.mc-party-ability-list {
  font-size: 13px;
  color: #d8c8a0;
  list-style: none;
  padding: 0;
}

.mc-party-ability-item {
  padding: 4px 0;
  border-bottom: 1px solid rgba(200, 160, 80, 0.1);
}

.mc-party-ability-name {
  font-weight: bold;
  color: #f5d090;
}

.mc-party-ability-desc {
  font-size: 11px;
  color: #a89070;
  margin-top: 2px;
}

/* ─── Items Tab ─────────────────────────────── */
.mc-items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.mc-item-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.7));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 8px;
  padding: 12px 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.1s;
  position: relative;
}

.mc-item-card:hover {
  border-color: #c8a050;
  transform: scale(1.03);
}

.mc-item-icon {
  font-size: 28px;
  margin-bottom: 6px;
}

.mc-item-name {
  font-size: 12px;
  color: #f0e0c0;
  font-weight: bold;
  margin-bottom: 2px;
  line-height: 1.2;
}

.mc-item-type {
  font-size: 10px;
  color: #a89070;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.mc-item-count {
  position: absolute;
  top: 4px; right: 6px;
  background: rgba(200, 160, 80, 0.3);
  color: #f5d090;
  font-size: 11px;
  font-weight: bold;
  padding: 1px 6px;
  border-radius: 8px;
}

.mc-item-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(30, 20, 12, 0.98);
  border: 1px solid #c8a050;
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 11px;
  color: #d8c8a0;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
}

.mc-item-card:hover .mc-item-tooltip {
  opacity: 1;
}

.mc-items-empty {
  text-align: center;
  color: #7a6a50;
  font-style: italic;
  padding: 40px;
  font-size: 14px;
}

.mc-item-action-popup {
  position: absolute;
  background: rgba(30, 20, 12, 0.98);
  border: 1px solid #c8a050;
  border-radius: 6px;
  padding: 6px;
  z-index: 30;
  box-shadow: 0 4px 16px rgba(0,0,0,0.6);
}

.mc-item-action-btn {
  display: block;
  background: transparent;
  border: none;
  color: #f0e0c0;
  font-family: Georgia, serif;
  font-size: 13px;
  padding: 6px 18px;
  cursor: pointer;
  border-radius: 4px;
  width: 100%;
  text-align: left;
  transition: background 0.12s;
}

.mc-item-action-btn:hover {
  background: rgba(60, 42, 25, 0.7);
}

/* ─── Abilities Tab ─────────────────────────── */
.mc-abilities-member-select {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.mc-abilities-member-btn {
  background: rgba(50, 35, 20, 0.7);
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  font-family: Georgia, serif;
  font-size: 13px;
  color: #a89070;
  transition: all 0.15s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.mc-abilities-member-btn:hover {
  border-color: #c8a050;
  color: #f0e0c0;
}

.mc-abilities-member-btn-active {
  border-color: #f5d090;
  color: #f5d090;
  background: rgba(70, 50, 28, 0.7);
}

.mc-abilities-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mc-ability-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.6));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 8px;
  padding: 14px 18px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.mc-ability-icon {
  font-size: 24px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(60, 42, 25, 0.6);
  border: 1px solid rgba(200, 160, 80, 0.3);
}

.mc-ability-info {
  flex: 1;
}

.mc-ability-name {
  font-size: 15px;
  font-weight: bold;
  color: #f5d090;
  margin-bottom: 2px;
}

.mc-ability-meta {
  font-size: 11px;
  color: #a89070;
  margin-bottom: 6px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mc-ability-meta-item {
  display: flex;
  align-items: center;
  gap: 3px;
}

.mc-ability-desc {
  font-size: 12px;
  color: #c8b890;
  font-style: italic;
  line-height: 1.4;
}

.mc-ability-locked {
  opacity: 0.5;
}

.mc-ability-lock-icon {
  color: #8b3a3a;
}

/* ─── Map Tab ───────────────────────────────── */
.mc-map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.mc-map-svg {
  width: 100%;
  height: 100%;
  max-height: 520px;
}

.mc-map-node {
  cursor: pointer;
  transition: filter 0.15s;
}

.mc-map-node:hover {
  filter: brightness(1.3) drop-shadow(0 0 6px rgba(245, 208, 144, 0.5));
}

.mc-map-node-current circle {
  filter: drop-shadow(0 0 8px #f5d090);
}

.mc-map-legend {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 12px;
  font-size: 12px;
  color: #a89070;
}

.mc-map-legend-dot {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: middle;
}

/* ─── Quests Tab ────────────────────────────── */
.mc-quests-section {
  margin-bottom: 24px;
}

.mc-quests-section-title {
  font-size: 16px;
  color: #f5d090;
  font-weight: bold;
  margin-bottom: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(200, 160, 80, 0.3);
}

.mc-quest-card {
  background: linear-gradient(135deg, rgba(50, 35, 20, 0.9), rgba(40, 28, 16, 0.6));
  border: 1px solid rgba(200, 160, 80, 0.3);
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 10px;
}

.mc-quest-name {
  font-size: 15px;
  font-weight: bold;
  color: #f5d090;
  margin-bottom: 4px;
}

.mc-quest-giver {
  font-size: 12px;
  color: #a89070;
  font-style: italic;
  margin-bottom: 8px;
}

.mc-quest-description {
  font-size: 13px;
  color: #c8b890;
  line-height: 1.5;
  margin-bottom: 8px;
}

.mc-quest-objective {
  font-size: 12px;
  color: #d8c8a0;
  background: rgba(30, 20, 12, 0.5);
  padding: 6px 10px;
  border-radius: 4px;
  border-left: 3px solid #c8a050;
  margin-bottom: 8px;
}

.mc-quest-reward {
  font-size: 12px;
  color: #88bb66;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.mc-quests-empty {
  text-align: center;
  color: #7a6a50;
  font-style: italic;
  padding: 30px;
  font-size: 14px;
}

/* ─── Sub-menu containers ───────────────────── */
.mc-submenu-container {
  width: 100%;
  height: 100%;
}

/* ─── Scrollbar styling ─────────────────────── */
.mc-menu-content::-webkit-scrollbar {
  width: 10px;
}

.mc-menu-content::-webkit-scrollbar-track {
  background: rgba(30, 20, 12, 0.5);
  border-radius: 5px;
}

.mc-menu-content::-webkit-scrollbar-thumb {
  background: rgba(200, 160, 80, 0.4);
  border-radius: 5px;
}

.mc-menu-content::-webkit-scrollbar-thumb:hover {
  background: rgba(200, 160, 80, 0.6);
}
`;

let styleInjectedMenu = false;

function injectMenuStyles() {
  if (styleInjectedMenu) return;
  const tag = document.createElement('style');
  tag.id = 'mc-menu-styles';
  tag.textContent = MENU_STYLES;
  document.head.appendChild(tag);
  styleInjectedMenu = true;
}

// ─── Item type icons ──────────────────────────
const ITEM_ICONS = {
  consumable: '🧪',
  equipment: '⚔',
  accessory: '💍',
  key_item: '🗝',
  craft: '🔨',
};

const ITEM_TYPE_LABELS = {
  consumable: 'Consumable',
  equipment: 'Equipment',
  accessory: 'Accessory',
  key_item: 'Key Item',
  craft: 'Crafting',
};

// ─── Element icons ────────────────────────────
const ELEMENT_ICONS = {
  fire: '🔥',
  water: '💧',
  earth: '🏔',
  air: '💨',
  light: '✨',
  dark: '🌑',
  lightning: '⚡',
  ice: '❄',
  nature: '🌿',
  none: '⭐',
};

function hexFromInt(hexInt) {
  if (typeof hexInt !== 'number') return '#c8a050';
  return '#' + (hexInt & 0xffffff).toString(16).padStart(6, '0');
}

function getRegionDisplayName(regionId) {
  const r = REGIONS.find(r => r.id === regionId);
  return r ? r.name : regionId;
}

// ─── Tab definitions ──────────────────────────
const TABS = [
  { id: 'party', label: 'Party', icon: '👥' },
  { id: 'items', label: 'Items', icon: '🎒' },
  { id: 'abilities', label: 'Abilities', icon: '✨' },
  { id: 'map', label: 'Map', icon: '🗺' },
  { id: 'nemesis', label: 'Nemesis', icon: '⚔' },
  { id: 'quests', label: 'Quests', icon: '📜' },
  { id: 'familiars', label: 'Familiars', icon: '🐾' },
  { id: 'save', label: 'Save', icon: '💾' },
];

// ─── Main Menu Class ──────────────────────────
export default class MainMenu {
  constructor() {
    this.party = [];
    this.nemesisSystem = null;
    this.questSystem = null;
    this.currentTab = 'party';
    this.overlay = null;
    this.visible = false;
    this.selectedMemberIdx = 0;
    this.selectedAbilityMemberIdx = 0;
    this.currentRegion = 'fry_valley';
    this.discoveredRegions = new Set(['fry_valley']);
    this.inventory = {};
    this.abilitiesData = {};
    this.itemsData = {};
    this.sideQuests = [];
    this.activeQuests = [];
    this._keyHandler = null;
    this._nemesisMenu = new NemesisMenu();
    this._saveMenu = new SaveMenu();
    this._familiarMenu = null;
    this._tabFocusIdx = 0;
    this._detailOverlay = null;
    this._actionPopup = null;
  }

  show(party, nemesisSystem, questSystem) {
    injectMenuStyles();
    this.party = party || [];
    this.nemesisSystem = nemesisSystem || null;
    this.questSystem = questSystem || null;

    // Extract data from questSystem if available
    if (questSystem) {
      this.sideQuests = questSystem.sideQuests || questSystem.availableQuests || [];
      this.activeQuests = questSystem.activeQuests || [];
      this.currentRegion = questSystem.currentRegion || this.currentRegion;
      this.discoveredRegions = new Set(questSystem.discoveredRegions || ['fry_valley']);
    }

    // Extract inventory, abilities, items from game state if available
    if (questSystem && questSystem.inventory) this.inventory = questSystem.inventory;
    if (questSystem && questSystem.items) this.itemsData = questSystem.items;
    if (questSystem && questSystem.abilities) this.abilitiesData = questSystem.abilities;
    if (nemesisSystem && nemesisSystem.currentRegion) this.currentRegion = nemesisSystem.currentRegion;
    if (nemesisSystem && nemesisSystem.discoveredRegions) {
      this.discoveredRegions = new Set(nemesisSystem.discoveredRegions);
    }

    this.visible = true;
    this.currentTab = 'party';
    this._tabFocusIdx = 0;
    this._render();
    this._bindKeys();
  }

  hide() {
    this.visible = false;
    this._unbindKeys();
    this._closeDetail();
    this._closeActionPopup();

    // Hide sub-menus
    this._nemesisMenu.hide();
    this._saveMenu.hide();
    if (this._familiarMenu && this._familiarMenu.hide) {
      this._familiarMenu.hide();
    }

    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
    this.overlay = null;
  }

  update() {
    if (!this.visible || !this.overlay) return;
    this._renderTabContent(this.currentTab);
  }

  _bindKeys() {
    this._keyHandler = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        // If a detail overlay is open, close it first
        if (this._detailOverlay) {
          this._closeDetail();
          return;
        }
        if (this._actionPopup) {
          this._closeActionPopup();
          return;
        }
        this.hide();
        return;
      }

      // Tab navigation with arrow keys
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        this._tabFocusIdx = (this._tabFocusIdx - 1 + TABS.length) % TABS.length;
        this._switchTab(TABS[this._tabFocusIdx].id);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this._tabFocusIdx = (this._tabFocusIdx + 1) % TABS.length;
        this._switchTab(TABS[this._tabFocusIdx].id);
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

  _switchTab(tabId) {
    // Don't switch if we're in a sub-menu that has its own keyboard handling
    if ((this.currentTab === 'nemesis' && this._nemesisMenu.visible) ||
        (this.currentTab === 'save' && this._saveMenu.visible) ||
        (this.currentTab === 'familiars' && this._familiarMenu && this._familiarMenu.visible)) {
      return;
    }

    this.currentTab = tabId;
    this._tabFocusIdx = TABS.findIndex(t => t.id === tabId);
    this._closeDetail();
    this._closeActionPopup();

    // Update tab button styles
    const tabBtns = this.overlay.querySelectorAll('.mc-menu-tab');
    tabBtns.forEach((btn, i) => {
      if (TABS[i].id === tabId) {
        btn.classList.add('mc-menu-tab-active');
      } else {
        btn.classList.remove('mc-menu-tab-active');
      }
    });

    // Update panels
    const panels = this.overlay.querySelectorAll('.mc-menu-tab-panel');
    panels.forEach(p => {
      if (p.dataset.tab === tabId) {
        p.classList.add('mc-menu-tab-panel-active');
      } else {
        p.classList.remove('mc-menu-tab-panel-active');
      }
    });

    this._renderTabContent(tabId);
  }

  _render() {
    if (this.overlay) {
      this.overlay.parentNode.removeChild(this.overlay);
    }

    this.overlay = document.createElement('div');
    this.overlay.className = 'mc-menu-overlay';

    // Header
    const header = document.createElement('div');
    header.className = 'mc-menu-header';
    header.innerHTML = `<h2 class="mc-menu-title">⚜ McChronicles ⚜</h2>`;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'mc-menu-close-btn';
    closeBtn.textContent = '✕ Close (Esc)';
    closeBtn.onclick = () => this.hide();
    header.appendChild(closeBtn);

    this.overlay.appendChild(header);

    // Body
    const body = document.createElement('div');
    body.className = 'mc-menu-body';

    // Tabs sidebar
    const tabsDiv = document.createElement('div');
    tabsDiv.className = 'mc-menu-tabs';

    TABS.forEach((tab, idx) => {
      const btn = document.createElement('button');
      btn.className = 'mc-menu-tab';
      if (idx === this._tabFocusIdx) btn.classList.add('mc-menu-tab-active');
      btn.innerHTML = `<span class="mc-menu-tab-icon">${tab.icon}</span> ${tab.label}`;
      btn.onclick = () => {
        this._tabFocusIdx = idx;
        this._switchTab(tab.id);
      };
      tabsDiv.appendChild(btn);
    });

    body.appendChild(tabsDiv);

    // Content area
    const content = document.createElement('div');
    content.className = 'mc-menu-content';
    content.id = 'mc-menu-content';

    // Create panels for each tab
    TABS.forEach(tab => {
      const panel = document.createElement('div');
      panel.className = 'mc-menu-tab-panel';
      panel.dataset.tab = tab.id;
      if (tab.id === this.currentTab) panel.classList.add('mc-menu-tab-panel-active');
      panel.id = `mc-panel-${tab.id}`;
      content.appendChild(panel);
    });

    body.appendChild(content);
    this.overlay.appendChild(body);
    document.body.appendChild(this.overlay);

    // Render initial tab content
    this._renderTabContent(this.currentTab);
  }

  _renderTabContent(tabId) {
    switch (tabId) {
      case 'party': this._renderPartyTab(); break;
      case 'items': this._renderItemsTab(); break;
      case 'abilities': this._renderAbilitiesTab(); break;
      case 'map': this._renderMapTab(); break;
      case 'nemesis': this._renderNemesisTab(); break;
      case 'quests': this._renderQuestsTab(); break;
      case 'familiars': this._renderFamiliarsTab(); break;
      case 'save': this._renderSaveTab(); break;
    }
  }

  // ─── Party Tab ──────────────────────────────
  _renderPartyTab() {
    const panel = this.overlay.querySelector('#mc-panel-party');
    if (!panel) return;
    panel.innerHTML = '';

    if (this.party.length === 0) {
      panel.innerHTML = '<div class="mc-items-empty">No party members yet. Your adventure awaits!</div>';
      return;
    }

    const grid = document.createElement('div');
    grid.className = 'mc-party-grid';

    this.party.forEach((char, idx) => {
      const card = document.createElement('div');
      card.className = 'mc-party-card';
      if (this.selectedMemberIdx === idx) card.classList.add('mc-party-card-selected');

      const color = hexFromInt(char.color);
      const initial = char.name ? char.name.charAt(0).toUpperCase() : '?';
      const stats = char.baseStats || {};
      const hp = stats.hp || 0;
      const mp = stats.mp || 0;
      const maxHp = hp; // Would use current/max from game state
      const maxMp = mp;

      card.innerHTML = `
        <div class="mc-party-card-top">
          <div class="mc-party-portrait" style="background: radial-gradient(circle at 35% 35%, ${color}, ${color}aa, ${color}66);">${initial}</div>
          <div>
            <div class="mc-party-name">${char.name || 'Unknown'}</div>
            <div class="mc-party-title">${char.title || ''}</div>
            <div class="mc-party-level">Level ${char.level || 1} · ${char.element || 'None'}</div>
          </div>
        </div>
        <div class="mc-party-stats">
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">ATK</span><span class="mc-party-stat-value">${stats.atk || 0}</span></div>
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">DEF</span><span class="mc-party-stat-value">${stats.def || 0}</span></div>
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">AGI</span><span class="mc-party-stat-value">${stats.agi || 0}</span></div>
          <div class="mc-party-stat-row"><span class="mc-party-stat-label">MAG</span><span class="mc-party-stat-value">${stats.mag || 0}</span></div>
        </div>
        <div class="mc-party-bar-label"><span>HP</span><span>${maxHp}/${maxHp}</span></div>
        <div class="mc-party-hp-bar"><div class="mc-party-hp-fill" style="width: 100%;"></div></div>
        <div class="mc-party-bar-label"><span>MP</span><span>${maxMp}/${maxMp}</span></div>
        <div class="mc-party-mp-bar"><div class="mc-party-mp-fill" style="width: 100%;"></div></div>
        <div class="mc-party-equipped">
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Weapon:</span><span class="mc-party-equipped-item">${char.weapon || '—'}</span></div>
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Armor:</span><span class="mc-party-equipped-item">${char.armor || '—'}</span></div>
          <div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Accessory:</span><span class="mc-party-equipped-item">${char.accessory || '—'}</span></div>
        </div>
      `;

      card.onclick = () => {
        this.selectedMemberIdx = idx;
        this._showPartyDetail(char, idx);
        this._renderPartyTab();
      };

      grid.appendChild(card);
    });

    panel.appendChild(grid);

    // If a detail overlay should be shown
    if (this._detailOverlay && this.selectedMemberIdx !== null) {
      this._showPartyDetail(this.party[this.selectedMemberIdx], this.selectedMemberIdx);
    }
  }

  _showPartyDetail(char, idx) {
    this._closeDetail();
    if (!char) return;

    const detail = document.createElement('div');
    detail.className = 'mc-party-detail-overlay';
    detail.id = 'mc-party-detail';

    const color = hexFromInt(char.color);
    const initial = char.name ? char.name.charAt(0).toUpperCase() : '?';
    const stats = char.baseStats || {};
    const elemIcon = ELEMENT_ICONS[char.element] || '⭐';

    let html = `<button class="mc-party-detail-close" id="mc-detail-close">✕</button>`;
    html += `<div style="display:flex;align-items:center;gap:14px;margin-bottom:12px;">`;
    html += `<div class="mc-party-portrait" style="width:64px;height:64px;font-size:28px;background:radial-gradient(circle at 35% 35%, ${color}, ${color}aa, ${color}66);">${initial}</div>`;
    html += `<div><div class="mc-party-name" style="font-size:20px;">${char.name || 'Unknown'}</div>`;
    html += `<div class="mc-party-title">${char.title || ''}</div>`;
    html += `<div class="mc-party-level">Level ${char.level || 1} · ${elemIcon} ${char.element || 'None'} · ${char.role || 'Adventurer'}</div></div></div>`;

    // Description
    if (char.description) {
      html += `<div class="mc-party-detail-description">${char.description}</div>`;
    }

    // Full stats
    html += `<div class="mc-party-detail-section-title">Base Stats</div>`;
    html += `<div class="mc-party-stats">`;
    html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">HP</span><span class="mc-party-stat-value">${stats.hp || 0}</span></div>`;
    html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">MP</span><span class="mc-party-stat-value">${stats.mp || 0}</span></div>`;
    html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">ATK</span><span class="mc-party-stat-value">${stats.atk || 0}</span></div>`;
    html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">DEF</span><span class="mc-party-stat-value">${stats.def || 0}</span></div>`;
    html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">AGI</span><span class="mc-party-stat-value">${stats.agi || 0}</span></div>`;
    html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">MAG</span><span class="mc-party-stat-value">${stats.mag || 0}</span></div>`;
    html += `</div>`;

    // Growth
    if (char.growth) {
      html += `<div class="mc-party-detail-section-title">Growth Rates</div>`;
      html += `<div class="mc-party-stats">`;
      const growth = char.growth;
      for (const [key, val] of Object.entries(growth)) {
        html += `<div class="mc-party-stat-row"><span class="mc-party-stat-label">${key.toUpperCase()}</span><span class="mc-party-stat-value">+${val}</span></div>`;
      }
      html += `</div>`;
    }

    // Equipment
    html += `<div class="mc-party-detail-section-title">Equipment</div>`;
    html += `<div class="mc-party-equipped">`;
    html += `<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Weapon:</span><span class="mc-party-equipped-item">${char.weapon || '—'}</span></div>`;
    html += `<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Armor:</span><span class="mc-party-equipped-item">${char.armor || '—'}</span></div>`;
    html += `<div class="mc-party-equipped-row"><span class="mc-party-equipped-slot">Accessory:</span><span class="mc-party-equipped-item">${char.accessory || '—'}</span></div>`;
    html += `</div>`;

    // Ability Tree
    if (char.abilityTree && char.abilityTree.length > 0) {
      html += `<div class="mc-party-detail-section-title">Abilities</div>`;
      html += `<ul class="mc-party-ability-list">`;
      for (const entry of char.abilityTree) {
        const abilityName = entry.ability || 'Unknown';
        const abilityData = this.abilitiesData[abilityName] || this.abilitiesData[entry.ability] || null;
        const desc = abilityData ? abilityData.description : '';
        const locked = (char.level || 1) < (entry.level || 1);
        html += `<li class="mc-party-ability-item ${locked ? 'mc-ability-locked' : ''}">`;
        html += `<div class="mc-party-ability-name">${locked ? '🔒 ' : ''}${abilityName}`;
        html += ` <span style="font-size:11px;color:#a89070;">(Lv ${entry.level})</span></div>`;
        if (desc) {
          html += `<div class="mc-party-ability-desc">${desc}</div>`;
        }
        html += `</li>`;
      }
      html += `</ul>`;
    }

    detail.innerHTML = html;
    this.overlay.querySelector('#mc-menu-content').appendChild(detail);
    this._detailOverlay = detail;

    detail.querySelector('#mc-detail-close').onclick = () => this._closeDetail();
  }

  _closeDetail() {
    if (this._detailOverlay) {
      this._detailOverlay.remove();
      this._detailOverlay = null;
    }
  }

  // ─── Items Tab ──────────────────────────────
  _renderItemsTab() {
    const panel = this.overlay.querySelector('#mc-panel-items');
    if (!panel) return;
    panel.innerHTML = '';

    // Get inventory items
    const itemIds = Object.keys(this.inventory || {});
    if (itemIds.length === 0) {
      // Fallback: show all items from itemsData if inventory is empty
      const allItems = Object.entries(this.itemsData || {});
      if (allItems.length === 0) {
        panel.innerHTML = '<div class="mc-items-empty">Your inventory is empty. Explore the world to find items!</div>';
        return;
      }
    }

    const grid = document.createElement('div');
    grid.className = 'mc-items-grid';

    const itemsToShow = Object.entries(this.inventory || {});
    const fallbackItems = Object.entries(this.itemsData || {}).filter(([id]) => !this.inventory || !(id in this.inventory));
    const allEntries = [...itemsToShow, ...fallbackItems.map(([id, data]) => [id, { count: 1, ...data }])];

    if (allEntries.length === 0) {
      panel.innerHTML = '<div class="mc-items-empty">Your inventory is empty. Explore the world to find items!</div>';
      return;
    }

    for (const [itemId, entry] of allEntries) {
      const itemData = this.itemsData && this.itemsData[itemId] ? this.itemsData[itemId] : null;
      if (!itemData && typeof entry !== 'object') continue;

      const data = itemData || entry;
      const count = (this.inventory && this.inventory[itemId] && this.inventory[itemId].count) || 1;

      if (count <= 0) continue;

      const card = document.createElement('div');
      card.className = 'mc-item-card';
      const icon = ITEM_ICONS[data.type] || '📦';
      const tooltipText = data.description || '';

      card.innerHTML = `
        <div class="mc-item-icon">${icon}</div>
        <div class="mc-item-name">${data.name || itemId}</div>
        <div class="mc-item-type">${ITEM_TYPE_LABELS[data.type] || data.type || ''}</div>
        ${count > 1 ? `<div class="mc-item-count">×${count}</div>` : ''}
        ${tooltipText ? `<div class="mc-item-tooltip">${tooltipText}</div>` : ''}
      `;

      card.onclick = (e) => {
        e.stopPropagation();
        this._showItemActions(itemId, data, card);
      };

      grid.appendChild(card);
    }

    panel.appendChild(grid);
  }

  _showItemActions(itemId, itemData, anchorEl) {
    this._closeActionPopup();

    const popup = document.createElement('div');
    popup.className = 'mc-item-action-popup';

    const type = itemData.type;
    const actions = [];

    if (type === 'consumable') {
      actions.push({ label: '🧪 Use', action: 'use' });
    } else if (type === 'equipment') {
      actions.push({ label: '⚔ Equip', action: 'equip' });
    } else if (type === 'accessory') {
      actions.push({ label: '💍 Equip', action: 'equip' });
    }

    actions.push({ label: '📋 Examine', action: 'examine' });

    for (const act of actions) {
      const btn = document.createElement('button');
      btn.className = 'mc-item-action-btn';
      btn.textContent = act.label;
      btn.onclick = (e) => {
        e.stopPropagation();
        this._closeActionPopup();
        this._handleItemAction(itemId, itemData, act.action);
      };
      popup.appendChild(btn);
    }

    // Position near anchor
    const rect = anchorEl.getBoundingClientRect();
    const overlayRect = this.overlay.getBoundingClientRect();
    popup.style.left = (rect.left - overlayRect.left + rect.width / 2) + 'px';
    popup.style.top = (rect.bottom - overlayRect.top + 4) + 'px';
    popup.style.transform = 'translateX(-50%)';

    this.overlay.appendChild(popup);
    this._actionPopup = popup;

    // Close on outside click
    setTimeout(() => {
      const closeHandler = (e) => {
        if (!popup.contains(e.target)) {
          this._closeActionPopup();
          document.removeEventListener('click', closeHandler);
        }
      };
      document.addEventListener('click', closeHandler);
    }, 0);
  }

  _closeActionPopup() {
    if (this._actionPopup) {
      this._actionPopup.remove();
      this._actionPopup = null;
    }
  }

  _handleItemAction(itemId, itemData, action) {
    if (action === 'use') {
      // Use consumable — trigger effect
      if (this.questSystem && typeof this.questSystem.useItem === 'function') {
        this.questSystem.useItem(itemId);
      }
      this.update();
    } else if (action === 'equip') {
      // Equip equipment/accessory — open party member selection
      if (this.questSystem && typeof this.questSystem.equipItem === 'function') {
        this.questSystem.equipItem(itemId);
      }
      this.update();
    } else if (action === 'examine') {
      // Show a detail overlay
      this._closeDetail();
      const detail = document.createElement('div');
      detail.className = 'mc-party-detail-overlay';
      detail.style.width = '360px';
      detail.innerHTML = `
        <button class="mc-party-detail-close" id="mc-item-detail-close">✕</button>
        <div style="font-size:28px;text-align:center;margin-bottom:8px;">${ITEM_ICONS[itemData.type] || '📦'}</div>
        <div style="font-size:18px;font-weight:bold;color:#f5d090;text-align:center;margin-bottom:4px;">${itemData.name || itemId}</div>
        <div style="font-size:12px;color:#a89070;text-align:center;margin-bottom:14px;">${ITEM_TYPE_LABELS[itemData.type] || itemData.type}</div>
        <div class="mc-party-detail-description">${itemData.description || 'A mysterious item.'}</div>
        ${itemData.price ? `<div style="font-size:13px;color:#c8a050;text-align:center;">💰 Worth ${itemData.price} gold</div>` : ''}
        ${itemData.statBoost ? `<div style="font-size:12px;color:#88bb66;margin-top:10px;"><strong>Stat Boost:</strong> ${JSON.stringify(itemData.statBoost)}</div>` : ''}
        ${itemData.power ? `<div style="font-size:12px;color:#cc8844;margin-top:6px;"><strong>Power:</strong> ${itemData.power}</div>` : ''}
        ${itemData.effect ? `<div style="font-size:12px;color:#a0c0e0;margin-top:6px;"><strong>Effect:</strong> ${itemData.effect}</div>` : ''}
        ${itemData.slot ? `<div style="font-size:12px;color:#c8b890;margin-top:6px;"><strong>Slot:</strong> ${itemData.slot}</div>` : ''}
        ${itemData.target ? `<div style="font-size:12px;color:#c8b890;margin-top:6px;"><strong>Target:</strong> ${itemData.target}</div>` : ''}
      `;
      this.overlay.querySelector('#mc-menu-content').appendChild(detail);
      this._detailOverlay = detail;
      detail.querySelector('#mc-item-detail-close').onclick = () => this._closeDetail();
    }
  }

  // ─── Abilities Tab ──────────────────────────
  _renderAbilitiesTab() {
    const panel = this.overlay.querySelector('#mc-panel-abilities');
    if (!panel) return;
    panel.innerHTML = '';

    if (this.party.length === 0) {
      panel.innerHTML = '<div class="mc-items-empty">No party members to show abilities for.</div>';
      return;
    }

    // Member selector
    const selector = document.createElement('div');
    selector.className = 'mc-abilities-member-select';

    this.party.forEach((char, idx) => {
      const btn = document.createElement('button');
      btn.className = 'mc-abilities-member-btn';
      if (this.selectedAbilityMemberIdx === idx) btn.classList.add('mc-abilities-member-btn-active');
      const color = hexFromInt(char.color);
      btn.innerHTML = `<span style="width:16px;height:16px;border-radius:50%;background:${color};display:inline-block;border:1px solid #c8a050;"></span> ${char.name || 'Unknown'}`;
      btn.onclick = () => {
        this.selectedAbilityMemberIdx = idx;
        this._renderAbilitiesTab();
      };
      selector.appendChild(btn);
    });

    panel.appendChild(selector);

    // Get abilities for selected member
    const char = this.party[this.selectedAbilityMemberIdx];
    if (!char) return;

    const abilityTree = char.abilityTree || [];
    if (abilityTree.length === 0) {
      panel.innerHTML += '<div class="mc-items-empty">This character has no abilities yet.</div>';
      return;
    }

    const list = document.createElement('div');
    list.className = 'mc-abilities-list';

    for (const entry of abilityTree) {
      const abilityId = entry.ability;
      const abilityData = this.abilitiesData[abilityId] || { id: abilityId, name: abilityId, description: '' };
      const locked = (char.level || 1) < (entry.level || 1);
      const elemIcon = ELEMENT_ICONS[abilityData.element] || '⭐';

      const card = document.createElement('div');
      card.className = 'mc-ability-card' + (locked ? ' mc-ability-locked' : '');

      let metaParts = [];
      if (abilityData.type) metaParts.push(`<span class="mc-ability-meta-item">${abilityData.type}</span>`);
      if (abilityData.element) metaParts.push(`<span class="mc-ability-meta-item">${elemIcon} ${abilityData.element}</span>`);
      if (abilityData.mpCost) metaParts.push(`<span class="mc-ability-meta-item">MP: ${abilityData.mpCost}</span>`);
      if (abilityData.power) metaParts.push(`<span class="mc-ability-meta-item">PWR: ${abilityData.power}</span>`);
      if (abilityData.target) metaParts.push(`<span class="mc-ability-meta-item">→ ${abilityData.target}</span>`);
      if (abilityData.hits) metaParts.push(`<span class="mc-ability-meta-item">×${abilityData.hits} hits</span>`);

      card.innerHTML = `
        <div class="mc-ability-icon">${locked ? '🔒' : (elemIcon || '✨')}</div>
        <div class="mc-ability-info">
          <div class="mc-ability-name">${locked ? '' : ''}${abilityData.name || abilityId} <span style="font-size:11px;color:#a89070;">(Lv ${entry.level})</span></div>
          <div class="mc-ability-meta">${metaParts.join('')}</div>
          <div class="mc-ability-desc">${abilityData.description || 'A mysterious ability.'}</div>
        </div>
      `;

      list.appendChild(card);
    }

    panel.appendChild(list);
  }

  // ─── Map Tab ────────────────────────────────
  _renderMapTab() {
    const panel = this.overlay.querySelector('#mc-panel-map');
    if (!panel) return;
    panel.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'mc-map-container';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('mc-map-svg');
    svg.setAttribute('viewBox', '0 0 1000 600');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    // Draw connections
    const drawnConnections = new Set();
    for (const [regionId, connections] of Object.entries(REGION_CONNECTIONS)) {
      const r1 = REGIONS.find(r => r.id === regionId);
      if (!r1) continue;

      for (const connectedId of connections) {
        const key = [regionId, connectedId].sort().join('-');
        if (drawnConnections.has(key)) continue;
        drawnConnections.add(key);

        const r2 = REGIONS.find(r => r.id === connectedId);
        if (!r2) continue;

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', r1.x * 1000);
        line.setAttribute('y1', r1.y * 600);
        line.setAttribute('x2', r2.x * 1000);
        line.setAttribute('y2', r2.y * 600);

        const bothDiscovered = this.discoveredRegions.has(regionId) && this.discoveredRegions.has(connectedId);
        line.setAttribute('stroke', bothDiscovered ? '#c8a050' : '#4a3a25');
        line.setAttribute('stroke-width', '2.5');
        line.setAttribute('opacity', bothDiscovered ? '0.6' : '0.3');
        if (!bothDiscovered) {
          line.setAttribute('stroke-dasharray', '5,5');
        }
        svg.appendChild(line);
      }
    }

    // Draw nodes
    for (const region of REGIONS) {
      const discovered = this.discoveredRegions.has(region.id);
      const isCurrent = this.currentRegion === region.id;
      const cx = region.x * 1000;
      const cy = region.y * 600;

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.classList.add('mc-map-node');
      if (isCurrent) g.classList.add('mc-map-node-current');
      g.dataset.regionId = region.id;
      g.style.cursor = discovered ? 'pointer' : 'default';

      // Outer glow for current
      if (isCurrent) {
        const glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        glow.setAttribute('cx', cx);
        glow.setAttribute('cy', cy);
        glow.setAttribute('r', '32');
        glow.setAttribute('fill', 'rgba(245, 208, 144, 0.15)');
        g.appendChild(glow);
      }

      // Node circle
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.setAttribute('cx', cx);
      circle.setAttribute('cy', cy);
      circle.setAttribute('r', isCurrent ? '22' : '16');
      circle.setAttribute('fill', discovered ? (isCurrent ? '#f5d090' : '#c8a050') : '#3a2a1a');
      circle.setAttribute('stroke', discovered ? '#f5d090' : '#5a4a35');
      circle.setAttribute('stroke-width', isCurrent ? '3' : '2');
      g.appendChild(circle);

      // Region name
      if (discovered) {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', cx);
        text.setAttribute('y', cy + 38);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', isCurrent ? '#f5d090' : '#c8b890');
        text.setAttribute('font-family', 'Georgia, serif');
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', isCurrent ? 'bold' : 'normal');
        text.textContent = region.name;
        g.appendChild(text);
      } else {
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', cx);
        text.setAttribute('y', cy + 38);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('fill', '#5a4a35');
        text.setAttribute('font-family', 'Georgia, serif');
        text.setAttribute('font-size', '12');
        text.setAttribute('font-style', 'italic');
        text.textContent = '???';
        g.appendChild(text);
      }

      // Current location marker
      if (isCurrent) {
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        marker.setAttribute('x', cx);
        marker.setAttribute('y', cy - 30);
        marker.setAttribute('text-anchor', 'middle');
        marker.setAttribute('fill', '#f5d090');
        marker.setAttribute('font-family', 'Georgia, serif');
        marker.setAttribute('font-size', '20');
        marker.textContent = '⬇';
        g.appendChild(marker);
      }

      if (discovered) {
        g.onclick = () => {
          // Could trigger travel or show region info
          this.currentRegion = region.id;
          this._renderMapTab();
        };
      }

      svg.appendChild(g);
    }

    container.appendChild(svg);

    // Legend
    const legend = document.createElement('div');
    legend.className = 'mc-map-legend';
    legend.innerHTML = `
      <div><span class="mc-map-legend-dot" style="background:#f5d090;"></span> Current Location</div>
      <div><span class="mc-map-legend-dot" style="background:#c8a050;"></span> Discovered</div>
      <div><span class="mc-map-legend-dot" style="background:#3a2a1a;border:1px solid #5a4a35;"></span> Undiscovered</div>
    `;
    container.appendChild(legend);

    panel.appendChild(container);
  }

  // ─── Nemesis Tab ────────────────────────────
  _renderNemesisTab() {
    const panel = this.overlay.querySelector('#mc-panel-nemesis');
    if (!panel) return;
    panel.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'mc-submenu-container';

    if (!this.nemesisSystem) {
      container.innerHTML = '<div class="mc-items-empty">Nemesis system not yet available. Continue your quest to unlock it.</div>';
      panel.appendChild(container);
      return;
    }

    panel.appendChild(container);

    // Delegate to NemesisMenu, with a callback to return to main menu
    this._nemesisMenu.show(this.nemesisSystem, () => {
      // When nemesis menu closes, return to the main menu party tab
      this._switchTab('party');
    });
  }

  // ─── Quests Tab ─────────────────────────────
  _renderQuestsTab() {
    const panel = this.overlay.querySelector('#mc-panel-quests');
    if (!panel) return;
    panel.innerHTML = '';

    // Active quests
    const activeSection = document.createElement('div');
    activeSection.className = 'mc-quests-section';
    activeSection.innerHTML = '<div class="mc-quests-section-title">⚔ Active Quests</div>';

    if (this.activeQuests && this.activeQuests.length > 0) {
      for (const quest of this.activeQuests) {
        activeSection.appendChild(this._createQuestCard(quest, true));
      }
    } else {
      activeSection.innerHTML += '<div class="mc-quests-empty">No active quests. Seek out quest givers in the world!</div>';
    }

    panel.appendChild(activeSection);

    // Available quests
    const availSection = document.createElement('div');
    availSection.className = 'mc-quests-section';
    availSection.innerHTML = '<div class="mc-quests-section-title">📋 Available Quests</div>';

    if (this.sideQuests && this.sideQuests.length > 0) {
      for (const quest of this.sideQuests) {
        // Skip if already active
        const isActive = this.activeQuests && this.activeQuests.some(aq => aq.id === quest.id);
        if (!isActive) {
          availSection.appendChild(this._createQuestCard(quest, false));
        }
      }
      // Check if all were filtered
      if (availSection.children.length === 1) {
        availSection.innerHTML += '<div class="mc-quests-empty">No new quests available. Check back later!</div>';
      }
    } else {
      availSection.innerHTML += '<div class="mc-quests-empty">No available quests. Explore more to find new adventures!</div>';
    }

    panel.appendChild(availSection);
  }

  _createQuestCard(quest, isActive) {
    const card = document.createElement('div');
    card.className = 'mc-quest-card';

    const reward = quest.reward || {};
    let rewardParts = [];
    if (reward.gold) rewardParts.push(`💰 ${reward.gold} gold`);
    if (reward.items && Array.isArray(reward.items)) {
      for (const item of reward.items) {
        rewardParts.push(`🎁 ${typeof item === 'string' ? item : (item.name || item.id || 'Item')}`);
      }
    }

    card.innerHTML = `
      <div class="mc-quest-name">${isActive ? '▸ ' : ''}${quest.name || quest.id}</div>
      <div class="mc-quest-giver">Given by ${quest.giver || 'Unknown'} in ${getRegionDisplayName(quest.region) || 'Unknown'}</div>
      <div class="mc-quest-description">${quest.description || ''}</div>
      <div class="mc-quest-objective"><strong>Objective:</strong> ${quest.objective || '—'}</div>
      <div class="mc-quest-reward"><strong>Reward:</strong> ${rewardParts.join(' · ') || 'Unknown'}</div>
    `;

    return card;
  }

  // ─── Familiars Tab ──────────────────────────
  _renderFamiliarsTab() {
    const panel = this.overlay.querySelector('#mc-panel-familiars');
    if (!panel) return;
    panel.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'mc-submenu-container';
    container.id = 'mc-familiars-container';
    panel.appendChild(container);

    // Try to import and use FamiliarMenu
    try {
      // Dynamic import not needed — we use a callback approach
      // The FamiliarMenu will be loaded by the game engine
      if (this._familiarMenu) {
        this._familiarMenu.show(this.questSystem || this.nemesisSystem, () => {
          this._switchTab('party');
        });
      } else {
        // Attempt dynamic import
        import('./familiarMenu.js')
          .then(module => {
            const FamiliarMenu = module.default;
            this._familiarMenu = new FamiliarMenu();
            this._familiarMenu.show(this.questSystem || this.nemesisSystem, () => {
              this._switchTab('party');
            });
          })
          .catch(() => {
            container.innerHTML = `
              <div class="mc-items-empty">
                <p style="font-size:16px;margin-bottom:8px;">🐾 Familiars</p>
                <p>The Familiar Menu has not yet been discovered in your world.</p>
                <p style="margin-top:10px;font-size:12px;color:#665540;">(familiarMenu.js not found)</p>
              </div>
            `;
          });
      }
    } catch {
      container.innerHTML = `
        <div class="mc-items-empty">
          <p style="font-size:16px;margin-bottom:8px;">🐾 Familiars</p>
          <p>The Familiar Menu has not yet been discovered in your world.</p>
        </div>
      `;
    }
  }

  // ─── Save Tab ───────────────────────────────
  _renderSaveTab() {
    const panel = this.overlay.querySelector('#mc-panel-save');
    if (!panel) return;
    panel.innerHTML = '';

    const container = document.createElement('div');
    container.className = 'mc-submenu-container';
    panel.appendChild(container);

    // Build a game state object for SaveMenu
    const game = this._buildGameSaveObject();

    this._saveMenu.show('save', game, () => {
      this._switchTab('party');
    });
  }

  _buildGameSaveObject() {
    const self = this;
    return {
      playtime: (this.questSystem && this.questSystem.playtime) || 0,
      partyLevel: this.party.length > 0 ? Math.max(...this.party.map(c => c.level || 1)) : 1,
      currentRegion: this.currentRegion,
      serialize() {
        return {
          party: self.party,
          currentRegion: self.currentRegion,
          discoveredRegions: Array.from(self.discoveredRegions),
          inventory: self.inventory,
          activeQuests: self.activeQuests,
          sideQuests: self.sideQuests,
          playtime: this.playtime,
          partyLevel: this.partyLevel,
        };
      },
      deserialize(data) {
        if (!data) return;
        if (data.party) self.party = data.party;
        if (data.currentRegion) self.currentRegion = data.currentRegion;
        if (data.discoveredRegions) self.discoveredRegions = new Set(data.discoveredRegions);
        if (data.inventory) self.inventory = data.inventory;
        if (data.activeQuests) self.activeQuests = data.activeQuests;
        if (data.sideQuests) self.sideQuests = data.sideQuests;
        if (self.questSystem) {
          self.questSystem.party = self.party;
          self.questSystem.currentRegion = self.currentRegion;
          self.questSystem.discoveredRegions = Array.from(self.discoveredRegions);
          self.questSystem.inventory = self.inventory;
          self.questSystem.activeQuests = self.activeQuests;
          self.questSystem.sideQuests = self.sideQuests;
        }
      },
    };
  }
}
