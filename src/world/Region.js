// Region.js — A single region instance in the McChronicles overworld

import * as THREE from 'three';
import { REGION_CONNECTIONS } from '../data/regions.js';
import { NPC } from './NPC.js';
import { scatterObjects, poissonDisk, fractalNoise2D } from '../utils/procedural.js';
import { distance2D, clamp, lerp, randomChance } from '../utils/math.js';

// Region-specific configure functions
import { configure as configureFryValley } from './regions/FryValley.js';
import { configure as configureBurgerHighlands } from './regions/BurgerHighlands.js';
import { configure as configureMcFlurryTundra } from './regions/McFlurryTundra.js';
import { configure as configureHappyMealForest } from './regions/HappyMealForest.js';
import { configure as configureDriveThruDesert } from './regions/DriveThruDesert.js';
import { configure as configureMcCafeSprings } from './regions/McCafeSprings.js';
import { configure as configurePlayPlacePlains } from './regions/PlayPlacePlains.js';
import { configure as configureGoldenArchesCastle } from './regions/GoldenArchesCastle.js';

const REGION_CONFIGURERS = {
  fry_valley: configureFryValley,
  burger_highlands: configureBurgerHighlands,
  mcflurry_tundra: configureMcFlurryTundra,
  happy_meal_forest: configureHappyMealForest,
  drive_thru_desert: configureDriveThruDesert,
  mccafe_springs: configureMcCafeSprings,
  play_place_plains: configurePlayPlacePlains,
  golden_arches_castle: configureGoldenArchesCastle,
};

export class Region {
  constructor(regionData) {
    this.regionData = regionData;
    this.scene = new THREE.Group();
    this.scene.name = regionData.id;

    this.ground = null;
    this.decorations = [];
    this.npcs = [];
    this.treasures = [];
    this.structures = [];
    this.lights = [];

    this.fog = null;
    this.encounterRate = regionData.encounterRate;
    this.encounterZone = regionData.encounterZone;
    this.size = regionData.size;

    this.isBuilt = false;
    this.storyTriggersTriggered = new Set();

    // Particle system (optional, for snow/sand effects)
    this.particleSystem = null;
    this.particleData = null;
  }

  /**
   * Build the 3D scene for this region.
   * @param {object} assetManager
   * @param {object} shaderManager
   */
  build(assetManager, shaderManager) {
    if (this.isBuilt) return;

    const data = this.regionData;

    // Fog
    this.fog = new THREE.FogExp2(data.fogColor, data.fogDensity);
    this.scene.fog = this.fog;

    // Ambient light
    const ambient = new THREE.AmbientLight(data.ambientColor, 0.6);
    this.scene.add(ambient);
    this.lights.push(ambient);

    // Directional (sun) light
    const directional = new THREE.DirectionalLight(data.lightColor, 0.9);
    directional.position.set(-30, 50, -20);
    directional.castShadow = true;
    directional.shadow.mapSize.set(2048, 2048);
    directional.shadow.camera.left = -this.size / 2;
    directional.shadow.camera.right = this.size / 2;
    directional.shadow.camera.top = this.size / 2;
    directional.shadow.camera.bottom = -this.size / 2;
    directional.shadow.camera.near = 0.5;
    directional.shadow.camera.far = 200;
    this.scene.add(directional);
    this.lights.push(directional);

    // Ground
    this.ground = assetManager.createGround(data);
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    // Call the region-specific configure function
    const configureFn = REGION_CONFIGURERS[data.id];
    if (configureFn) {
      configureFn(this, assetManager, shaderManager);
    }

    this.isBuilt = true;
  }

  /**
   * Per-frame update.
   * @param {number} dt
   * @param {object} player
   */
  update(dt, player) {
    // Update NPCs
    for (const npc of this.npcs) {
      npc.update(dt);
    }
    for (const treasure of this.treasures) {
      treasure.update(dt);
    }

    // Update particle systems
    if (this.particleSystem && this.particleData) {
      this._updateParticles(dt);
    }
  }

  /**
   * Check for a random encounter.
   * @param {object} player
   * @param {number} dt
   * @returns {string|null} encounterZone if triggered
   */
  checkEncounter(player, dt) {
    if (this.encounterRate <= 0 || !player.isMoving) return null;
    if (randomChance(this.encounterRate * dt)) {
      return this.encounterZone;
    }
    return null;
  }

  /**
   * Get NPCs within a radius of a position.
   * @param {THREE.Vector3} position
   * @param {number} radius
   * @returns {NPC[]}
   */
  getNPCsNear(position, radius) {
    return this.npcs.filter(
      (npc) =>
        npc.interactable &&
        distance2D(npc.position.x, npc.position.z, position.x, position.z) <= radius
    );
  }

  /**
   * Get unopened treasures within a radius of a position.
   * @param {THREE.Vector3} position
   * @param {number} radius
   * @returns {NPC[]}
   */
  getTreasuresNear(position, radius) {
    return this.treasures.filter(
      (t) =>
        !t.isOpen &&
        distance2D(t.position.x, t.position.z, position.x, position.z) <= radius
    );
  }

  /**
   * Check location-based story triggers.
   * @param {object} player
   * @returns {string|null} event id
   */
  checkStoryTriggers(player) {
    if (!this.regionData.storyEvents) return null;
    for (const evt of this.regionData.storyEvents) {
      if (evt.trigger !== 'location') continue;
      if (this.storyTriggersTriggered.has(evt.event)) continue;
      const dist = distance2D(
        player.position.x,
        player.position.z,
        evt.x,
        evt.z
      );
      if (dist <= (evt.radius || 5)) {
        this.storyTriggersTriggered.add(evt.event);
        return evt.event;
      }
    }
    return null;
  }

  /**
   * Check if the player is near a region boundary edge and should transition.
   * Uses REGION_CONNECTIONS to determine the adjacent region.
   * @param {object} player
   * @returns {{regionId: string, entrancePoint: {x: number, z: number}}|null}
   */
  getExitCheck(player) {
    const half = this.size / 2;
    const threshold = 5;
    const px = player.position.x;
    const pz = player.position.z;

    const connections = REGION_CONNECTIONS[this.regionData.id];
    if (!connections || connections.length === 0) return null;

    // Determine which edge the player is closest to
    const distNorth = Math.abs(pz + half); // -z edge
    const distSouth = Math.abs(pz - half); // +z edge
    const distWest = Math.abs(px + half);  // -x edge
    const distEast = Math.abs(px - half);  // +x edge

    const edges = [
      { dir: 'north', dist: distNorth, regionIndex: 0 },
      { dir: 'south', dist: distSouth, regionIndex: 1 },
      { dir: 'west', dist: distWest, regionIndex: 2 },
      { dir: 'east', dist: distEast, regionIndex: 3 },
    ];

    // Sort by closest edge
    edges.sort((a, b) => a.dist - b.dist);

    for (const edge of edges) {
      if (edge.dist > threshold) continue;
      if (edge.regionIndex >= connections.length) continue;

      const regionId = connections[edge.regionIndex];
      if (!regionId) continue;

      // Calculate entrance point in the destination region
      // Player enters from the opposite side
      let entrancePoint;
      const destSize = this.size; // approximate; destination region may differ

      switch (edge.dir) {
        case 'north':
          // Exiting north, enter from south (+z edge of dest)
          entrancePoint = { x: clamp(px, -destSize / 2 + 5, destSize / 2 - 5), z: destSize / 2 - 8 };
          break;
        case 'south':
          entrancePoint = { x: clamp(px, -destSize / 2 + 5, destSize / 2 - 5), z: -destSize / 2 + 8 };
          break;
        case 'west':
          entrancePoint = { x: destSize / 2 - 8, z: clamp(pz, -destSize / 2 + 5, destSize / 2 - 5) };
          break;
        case 'east':
          entrancePoint = { x: -destSize / 2 + 8, z: clamp(pz, -destSize / 2 + 5, destSize / 2 - 5) };
          break;
        default:
          entrancePoint = { x: 0, z: 0 };
      }

      return { regionId, entrancePoint };
    }

    return null;
  }

  /**
   * Update particle positions (snow, sand, etc.)
   * @param {number} dt
   * @private
   */
  _updateParticles(dt) {
    const positions = this.particleSystem.geometry.attributes.position;
    const velocities = this.particleData.velocities;
    const bounds = this.particleData.bounds;
    const arr = positions.array;

    for (let i = 0; i < arr.length; i += 3) {
      arr[i] += velocities[i] * dt;     // x
      arr[i + 1] += velocities[i + 1] * dt; // y (fall)
      arr[i + 2] += velocities[i + 2] * dt; // z

      // Reset if out of bounds
      if (arr[i + 1] < bounds.yMin) {
        arr[i + 1] = bounds.yMax;
        arr[i] = (Math.random() - 0.5) * bounds.width;
        arr[i + 2] = (Math.random() - 0.5) * bounds.depth;
      }
      if (arr[i] < bounds.xMin) arr[i] = bounds.xMax;
      if (arr[i] > bounds.xMax) arr[i] = bounds.xMin;
      if (arr[i + 2] < bounds.zMin) arr[i + 2] = bounds.zMax;
      if (arr[i + 2] > bounds.zMax) arr[i + 2] = bounds.zMin;
    }
    positions.needsUpdate = true;
  }

  /**
   * Dispose all resources held by this region.
   */
  dispose() {
    this.scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });

    this.scene.clear();
    this.ground = null;
    this.decorations = [];
    this.npcs = [];
    this.treasures = [];
    this.structures = [];
    this.lights = [];
    this.particleSystem = null;
    this.particleData = null;
    this.isBuilt = false;
    this.storyTriggersTriggered.clear();
  }
}
