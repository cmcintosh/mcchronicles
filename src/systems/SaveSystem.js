/**
 * SaveSystem.js — McChronicles JRPG
 * Save/load game state via localStorage.
 * Slots: mcchronicles_save_0 through mcchronicles_save_4
 * Auto-save: mcchronicles_autosave
 */

const SAVE_PREFIX = 'mcchronicles_save_';
const AUTO_KEY = 'mcchronicles_autosave';
const NUM_SLOTS = 5;
const SAVE_VERSION = 1;

/**
 * Build the localStorage key for a slot.
 * @param {number|string} slot — 0-4 or 'auto'
 * @returns {string}
 */
function slotKey(slot) {
  if (slot === 'auto') return AUTO_KEY;
  return `${SAVE_PREFIX}${slot}`;
}

/**
 * Convert a slot value to a display name.
 * @param {number|string} slot
 * @returns {string}
 */
function slotName(slot) {
  if (slot === 'auto') return 'Auto-Save';
  return `Slot ${Number(slot) + 1}`;
}

export default class SaveSystem {
  constructor() {
    // No init needed — localStorage is ready to use
  }

  // ── Core save / load ────────────────────────────────────────────────────

  /**
   * Serialize and save game state to a slot.
   * @param {number|string} slot — 0-4 or 'auto'
   * @param {object} gameState — full game state object
   * @returns {boolean} true on success
   */
  save(slot, gameState) {
    try {
      const key = slotKey(slot);

      // Build the save payload with metadata wrapper
      const now = Date.now();
      const payload = {
        version: SAVE_VERSION,
        timestamp: now,
        name: slotName(slot),
        playtime: gameState.playtime || 0,
        data: gameState,
      };

      const serialized = JSON.stringify(payload);
      localStorage.setItem(key, serialized);
      return true;
    } catch (err) {
      console.error('[SaveSystem] Save failed:', err);
      return false;
    }
  }

  /**
   * Load and deserialize a save from a slot.
   * @param {number|string} slot — 0-4 or 'auto'
   * @returns {object|null} game state or null if no save / error
   */
  load(slot) {
    try {
      const key = slotKey(slot);
      const raw = localStorage.getItem(key);
      if (!raw) return null;

      const payload = JSON.parse(raw);

      // Handle versioned saves
      if (payload.version !== undefined && payload.data !== undefined) {
        return payload.data;
      }

      // Legacy: raw game state without wrapper
      return payload;
    } catch (err) {
      console.error('[SaveSystem] Load failed:', err);
      return null;
    }
  }

  /**
   * Delete a save from a slot.
   * @param {number|string} slot — 0-4 or 'auto'
   * @returns {boolean} true on success
   */
  deleteSave(slot) {
    try {
      const key = slotKey(slot);
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      console.error('[SaveSystem] Delete failed:', err);
      return false;
    }
  }

  // ── Metadata queries ────────────────────────────────────────────────────

  /**
   * Check if a save exists in a slot.
   * @param {number|string} slot — 0-4 or 'auto'
   * @returns {boolean}
   */
  hasSave(slot) {
    const key = slotKey(slot);
    return localStorage.getItem(key) !== null;
  }

  /**
   * Get lightweight metadata about a save without loading the full state.
   * @param {number|string} slot — 0-4 or 'auto'
   * @returns {object} { slot, exists, name, playtime, partyLevel, region, timestamp }
   */
  getSaveInfo(slot) {
    const key = slotKey(slot);
    const raw = localStorage.getItem(key);

    const info = {
      slot,
      exists: false,
      name: slotName(slot),
      playtime: 0,
      partyLevel: 0,
      region: '',
      timestamp: 0,
    };

    if (!raw) return info;

    try {
      const payload = JSON.parse(raw);

      // Versioned save
      if (payload.version !== undefined && payload.data !== undefined) {
        info.exists = true;
        info.playtime = payload.playtime || 0;
        info.timestamp = payload.timestamp || 0;
        info.name = payload.name || slotName(slot);

        const gs = payload.data;

        // Party level — average or sum of party member levels
        if (gs.party && Array.isArray(gs.party) && gs.party.length > 0) {
          const totalLevel = gs.party.reduce((sum, c) => sum + (c.level || 1), 0);
          info.partyLevel = Math.floor(totalLevel / gs.party.length);
        }

        // Current region
        if (gs.currentRegion) {
          info.region = typeof gs.currentRegion === 'string'
            ? gs.currentRegion
            : (gs.currentRegion.name || gs.currentRegion.id || '');
        }

        return info;
      }

      // Legacy: raw game state
      info.exists = true;
      info.playtime = payload.playtime || 0;
      info.timestamp = payload.timestamp || 0;

      if (payload.party && Array.isArray(payload.party) && payload.party.length > 0) {
        const totalLevel = payload.party.reduce((sum, c) => sum + (c.level || 1), 0);
        info.partyLevel = Math.floor(totalLevel / payload.party.length);
      }

      if (payload.currentRegion) {
        info.region = typeof payload.currentRegion === 'string'
          ? payload.currentRegion
          : (payload.currentRegion.name || payload.currentRegion.id || '');
      }

      return info;
    } catch (err) {
      console.error('[SaveSystem] getSaveInfo parse error:', err);
      return info;
    }
  }

  /**
   * List save info for all 5 manual slots.
   * @returns {Array<object>} array of save info objects
   */
  listSaves() {
    const saves = [];
    for (let i = 0; i < NUM_SLOTS; i++) {
      saves.push(this.getSaveInfo(i));
    }
    return saves;
  }

  // ── Auto-save ───────────────────────────────────────────────────────────

  /**
   * Auto-save current game state.
   * @param {object} gameState
   * @returns {boolean} true on success
   */
  autoSave(gameState) {
    return this.save('auto', gameState);
  }

  /**
   * Load auto-save.
   * @returns {object|null}
   */
  loadAutoSave() {
    return this.load('auto');
  }

  // ── Utility ─────────────────────────────────────────────────────────────

  /**
   * Check if auto-save exists.
   * @returns {boolean}
   */
  hasAutoSave() {
    return this.hasSave('auto');
  }

  /**
   * Delete auto-save.
   * @returns {boolean}
   */
  deleteAutoSave() {
    return this.deleteSave('auto');
  }

  /**
   * Get the raw storage key for a slot (useful for debugging).
   * @param {number|string} slot
   * @returns {string}
   */
  getSlotKey(slot) {
    return slotKey(slot);
  }

  /**
   * Calculate total size of all saves in bytes (approximate).
   * @returns {number}
   */
  getTotalSaveSize() {
    let total = 0;
    for (let i = 0; i < NUM_SLOTS; i++) {
      const raw = localStorage.getItem(slotKey(i));
      if (raw) total += raw.length;
    }
    const auto = localStorage.getItem(AUTO_KEY);
    if (auto) total += auto.length;
    return total;
  }

  /**
   * Clear all saves (manual + auto). Use with caution!
   * @returns {boolean} true on success
   */
  clearAllSaves() {
    try {
      for (let i = 0; i < NUM_SLOTS; i++) {
        localStorage.removeItem(slotKey(i));
      }
      localStorage.removeItem(AUTO_KEY);
      return true;
    } catch (err) {
      console.error('[SaveSystem] clearAllSaves failed:', err);
      return false;
    }
  }

  /**
   * Export a save as a JSON string (for backup / sharing).
   * @param {number|string} slot
   * @returns {string|null} JSON string or null
   */
  exportSave(slot) {
    const raw = localStorage.getItem(slotKey(slot));
    return raw || null;
  }

  /**
   * Import a save from a JSON string.
   * @param {number|string} slot
   * @param {string} jsonString — raw save JSON
   * @returns {boolean} true on success
   */
  importSave(slot, jsonString) {
    try {
      // Validate it's parseable JSON
      JSON.parse(jsonString);
      localStorage.setItem(slotKey(slot), jsonString);
      return true;
    } catch (err) {
      console.error('[SaveSystem] importSave failed:', err);
      return false;
    }
  }
}
