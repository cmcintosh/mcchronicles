// WorldMap.js — Manages all 8 regions in the McChronicles overworld

import { REGIONS, REGION_ORDER, REGION_CONNECTIONS } from '../data/regions.js';
import { Region } from './Region.js';

export class WorldMap {
  /**
   * @param {object} player - Player instance
   * @param {object} assetManager
   * @param {object} shaderManager
   */
  constructor(player, assetManager, shaderManager) {
    this.player = player;
    this.assetManager = assetManager;
    this.shaderManager = shaderManager;
    this.transitionCallback = null;

    this.regions = new Map();
    this.currentRegionId = null;

    // Create Region instances for all regions (not built yet)
    for (const regionId of REGION_ORDER) {
      const regionData = REGIONS[regionId];
      const region = new Region(regionData);
      this.regions.set(regionId, region);
    }
  }

  /**
   * Initialise the world by building and entering the starting region.
   */
  init() {
    this.enterRegion('fry_valley', { x: 0, z: 0 });
  }

  /**
   * Enter a region, building it lazily if needed.
   * @param {string} regionId
   * @param {{x: number, z: number}|null} entrancePoint
   * @returns {Region}
   */
  enterRegion(regionId, entrancePoint) {
    const region = this.regions.get(regionId);
    if (!region) {
      console.error(`Region not found: ${regionId}`);
      return null;
    }

    if (!region.isBuilt) {
      region.build(this.assetManager, this.shaderManager);
    }

    this.currentRegionId = regionId;

    // Position player at entrance point or center
    const point = entrancePoint || { x: 0, z: 0 };
    this.player.setPosition(point.x, point.z);
    this.player.currentRegion = region;

    // Fire 'enter' story events
    if (region.regionData.storyEvents) {
      for (const evt of region.regionData.storyEvents) {
        if (evt.trigger === 'enter' && !region.storyTriggersTriggered.has(evt.event)) {
          region.storyTriggersTriggered.add(evt.event);
          if (this.transitionCallback) {
            this.transitionCallback({ type: 'story', event: evt.event });
          }
        }
      }
    }

    return region;
  }

  /**
   * Get the current Region instance.
   * @returns {Region|null}
   */
  getCurrentRegion() {
    return this.regions.get(this.currentRegionId);
  }

  /**
   * Per-frame update for the world map.
   * @param {number} dt
   * @param {object} input
   * @returns {object|null} - event object or null
   */
  update(dt, input) {
    const region = this.getCurrentRegion();
    if (!region) return null;

    // Update player
    const encounterResult = this.player.update(dt, input, region);

    // Update region (NPCs, particles, etc.)
    region.update(dt, this.player);

    // Check for random encounter
    if (encounterResult === 'encounter') {
      return { type: 'encounter', zone: region.encounterZone };
    }

    // Also check region-based encounter roll
    const zone = region.checkEncounter(this.player, dt);
    if (zone) {
      return { type: 'encounter', zone };
    }

    // Check for region exit / transition
    const exit = region.getExitCheck(this.player);
    if (exit) {
      return { type: 'transition', regionId: exit.regionId, point: exit.entrancePoint };
    }

    // Check story triggers
    const storyEvent = region.checkStoryTriggers(this.player);
    if (storyEvent) {
      return { type: 'story', event: storyEvent };
    }

    return null;
  }

  /**
   * Transition to a new region.
   * @param {string} regionId
   * @param {{x: number, z: number}} entrancePoint
   * @returns {Region}
   */
  transitionTo(regionId, entrancePoint) {
    // Current region stays built for re-entry
    return this.enterRegion(regionId, entrancePoint);
  }

  /**
   * Get a region by id.
   * @param {string} regionId
   * @returns {Region|undefined}
   */
  getRegion(regionId) {
    return this.regions.get(regionId);
  }

  /**
   * Dispose all regions and free resources.
   */
  disposeAll() {
    for (const region of this.regions.values()) {
      region.dispose();
    }
    this.currentRegionId = null;
  }
}
