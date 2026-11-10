// AssetManager — Loads GLB models from Meshy + procedural fallbacks
// Uses GLTFLoader for 3D models, generates procedural geometry as fallback

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { ShaderManager } from './ShaderManager.js';
import { generateTexture, canvasToTexture, fractalNoise2D, scatterObjects } from '../utils/procedural.js';
import { SeededRandom, clamp } from '../utils/math.js';
import { CHARACTERS } from '../data/characters.js';
import { MONSTERS } from '../data/monsters.js';

// Model scale presets
const MODEL_SCALES = {
  ronald: 2.0, grimace: 2.0, birdie: 1.8, bigmac: 2.2, mactonight: 2.0,
  mcnugget_goblin: 1.2, bigmac_brute: 3.0, applepie_dragon: 1.5, mcflurry_elemental: 1.8,
  mcrib_wraith: 2.0, quarterpounder_knight: 2.2, filetfish_siren: 2.0, sundae_slime: 1.5,
  hamburglar: 2.5, hamburglar_elite: 2.5,
};

export class AssetManager {
  constructor(shaderManager) {
    this.shaderManager = shaderManager || new ShaderManager();
    this.textureCache = new Map();
    this.geometryCache = new Map();
    this.modelCache = new Map();
    this.gltfLoader = new GLTFLoader();
  }

  // === Load a GLB model and return a THREE.Group ===
  // Returns a procedural fallback immediately; swaps in GLB when loaded
  async loadModel(name) {
    if (this.modelCache.has(name)) {
      return this.modelCache.get(name).clone(true);
    }

    // Return procedural fallback immediately (synchronous)
    const fallback = this._getProceduralFallback(name);

    // Kick off async GLB load in background
    this._loadGLBInBackground(name).then((model) => {
      if (model) {
        // Copy the GLB's children into the fallback group
        fallback.clear();
        model.children.forEach(child => fallback.add(child.clone(true)));
        fallback.position.copy(model.position);
        fallback.scale.copy(model.scale);
      }
    }).catch(() => {/* stay with fallback */});

    return fallback;
  }

  // === Internal: actually load the GLB ===
  async _loadGLBInBackground(name) {
    if (this.modelCache.has(name)) {
      return this.modelCache.get(name).clone(true);
    }

    try {
      const url = `/models/${name}.glb`;
      const gltf = await this.gltfLoader.loadAsync(url);
      const model = gltf.scene;

      // Apply toon material override to all meshes
      model.traverse((child) => {
        if (child.isMesh) {
          const originalColor = child.material?.color?.clone() || new THREE.Color(0xcccccc);
          child.material = this.shaderManager.createToonMaterial(originalColor.getHex());
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      // Normalize scale
      const targetScale = MODEL_SCALES[name] || 2.0;
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      if (maxDim > 0) {
        const scale = targetScale / maxDim;
        model.scale.setScalar(scale);
      }

      // Center the model on the ground
      box.setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.x -= center.x;
      model.position.z -= center.z;
      model.position.y -= box.min.y;

      this.modelCache.set(name, model);
      return model.clone(true);
    } catch (err) {
      console.warn(`Failed to load GLB model ${name}, using procedural fallback:`, err);
      return null;
    }
  }

  // === Preload all models ===
  async preloadModels(names) {
    const promises = names.map(name => this.loadModel(name).catch(() => null));
    await Promise.all(promises);
  }

  // === Preload all models used in the game ===
  async preloadAllModels() {
    const characterModels = ['ronald', 'grimace', 'birdie', 'bigmac', 'mactonight'];
    const monsterModels = [
      'mcnugget_goblin', 'bigmac_brute', 'applepie_dragon', 'mcflurry_elemental',
      'mcrib_wraith', 'quarterpounder_knight', 'filetfish_siren', 'sundae_slime',
      'hamburglar', 'hamburglar_elite'
    ];
    const allModels = [...characterModels, ...monsterModels];
    await this.preloadModels(allModels);
  }

  // === Procedural fallback (basic shapes) ===
  _getProceduralFallback(name) {
    // Character fallbacks
    if (CHARACTERS[name]) {
      return this.createCharacterMesh(name);
    }
    // Monster fallbacks
    if (MONSTERS[name]) {
      return this.createMonsterMesh(name);
    }
    // Generic
    const group = new THREE.Group();
    const mat = this._material(0xcccccc);
    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), mat);
    box.position.y = 1;
    group.add(box);
    return group;
  }

  // === Helper: get cached geometry ===
  _getGeometry(key, factory) {
    if (!this.geometryCache.has(key)) {
      this.geometryCache.set(key, factory());
    }
    return this.geometryCache.get(key);
  }

  // === Helper: create a colored material ===
  _material(color, options = {}) {
    return this.shaderManager.createToonMaterial(color, options);
  }

  // === Character Meshes (procedural fallbacks) ===
  createCharacterMesh(characterId) {
    const character = CHARACTERS[characterId];
    if (!character) {
      console.warn(`Unknown character: ${characterId}`);
      return new THREE.Group();
    }

    const builders = {
      ronald: () => this._buildRonald(character),
      grimace: () => this._buildGrimace(character),
      birdie: () => this._buildBirdie(character),
      bigmac: () => this._buildBigMac(character),
      mactonight: () => this._buildMacTonight(character),
    };

    const builder = builders[characterId];
    const group = builder ? builder() : this._buildGenericCharacter(character);
    group.userData.type = 'character';
    group.userData.characterId = characterId;
    group.castShadow = true;
    group.receiveShadow = true;
    return group;
  }

  _buildRonald(char) {
    const group = new THREE.Group();
    const bodyMat = this._material(0xff2200);
    const headMat = this._material(0xffccaa);
    const accentMat = this._material(0xffdd00);

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 1.6, 12), bodyMat);
    body.position.y = 0.8; group.add(body);

    const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.15, 12), accentMat);
    belt.position.y = 0.9; group.add(belt);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.45, 16, 12), headMat);
    head.position.y = 2.0; group.add(head);

    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), bodyMat);
    hair.position.y = 2.15; group.add(hair);

    return group;
  }

  _buildGrimace(char) {
    const group = new THREE.Group();
    const mat = this._material(0x8844cc);
    const body = new THREE.Mesh(new THREE.SphereGeometry(1.2, 16, 12), mat);
    body.position.y = 1.0; body.scale.y = 1.2; group.add(body);
    return group;
  }

  _buildBirdie(char) {
    const group = new THREE.Group();
    const bodyMat = this._material(0xff88cc);
    const beakMat = this._material(0xffdd00);
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 10), bodyMat);
    body.position.y = 1.0; group.add(body);
    const beak = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 8), beakMat);
    beak.position.set(0, 1.0, 0.5); beak.rotation.x = Math.PI / 2; group.add(beak);
    return group;
  }

  _buildBigMac(char) {
    const group = new THREE.Group();
    const armorMat = this._material(0x8b4513);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 2.0, 12), armorMat);
    body.position.y = 1.0; group.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), this._material(0xd4a017));
    head.position.y = 2.3; group.add(head);
    return group;
  }

  _buildMacTonight(char) {
    const group = new THREE.Group();
    const moonMat = this._material(0xffeb3b);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 1.6, 12), this._material(0x333333));
    body.position.y = 0.8; group.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), moonMat);
    head.scale.x = 0.6; head.position.y = 2.0; group.add(head);
    return group;
  }

  _buildGenericCharacter(char) {
    const group = new THREE.Group();
    const mat = this._material(char.color || 0x888888);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 1.6, 8), mat);
    body.position.y = 0.8; group.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 10), this._material(0xffccaa));
    head.position.y = 1.8; group.add(head);
    return group;
  }

  // === Monster Meshes (procedural fallbacks) ===
  createMonsterMesh(monsterId) {
    const monster = MONSTERS[monsterId];
    if (!monster) return new THREE.Group();

    const group = new THREE.Group();
    const mat = this._material(monster.color || 0x885522);

    // Simple blob body
    const body = new THREE.Mesh(new THREE.SphereGeometry(1.0, 12, 10), mat);
    body.position.y = 1.0;
    body.scale.set(1.2, 1.5, 1.0);
    group.add(body);

    // Eyes
    const eyeMat = this._material(0xffffff);
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), eyeMat);
    eyeL.position.set(-0.3, 1.3, 0.8); group.add(eyeL);
    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), eyeMat);
    eyeR.position.set(0.3, 1.3, 0.8); group.add(eyeR);

    group.userData.type = 'monster';
    group.userData.monsterId = monsterId;
    group.castShadow = true;
    group.receiveShadow = true;
    return group;
  }

  // === Environment / Terrain ===
  createGround(color = 0x3a5f3a) {
    const mat = this._material(color);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), mat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    return ground;
  }

  createTree(seed = 0) {
    const rng = new SeededRandom(seed);
    const group = new THREE.Group();
    const trunkMat = this._material(0x4a2a0a);
    const leafMat = this._material(0x2a5a2a + Math.floor(rng.next() * 0x222222));

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 2, 6), trunkMat);
    trunk.position.y = 1; trunk.castShadow = true; group.add(trunk);

    const leaves = new THREE.Mesh(new THREE.SphereGeometry(1.0 + rng.next() * 0.5, 8, 6), leafMat);
    leaves.position.y = 2.5; leaves.castShadow = true; group.add(leaves);
    return group;
  }

  createRock(seed = 0) {
    const rng = new SeededRandom(seed);
    const mat = this._material(0x888888 + Math.floor(rng.next() * 0x222222));
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5 + rng.next() * 0.5, 0), mat);
    rock.position.y = 0.3;
    rock.rotation.set(rng.next() * Math.PI, rng.next() * Math.PI, rng.next() * Math.PI);
    rock.castShadow = true;
    rock.receiveShadow = true;
    return rock;
  }

  createBuilding(seed = 0, color = 0xcc8844) {
    const rng = new SeededRandom(seed);
    const group = new THREE.Group();
    const mat = this._material(color);

    const w = 2 + rng.next() * 2;
    const h = 2 + rng.next() * 3;
    const d = 2 + rng.next() * 2;
    const building = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    building.position.y = h / 2;
    building.castShadow = true;
    building.receiveShadow = true;
    group.add(building);

    // Roof
    const roofMat = this._material(0x883322);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.7, 1, 4), roofMat);
    roof.position.y = h + 0.5;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);

    return group;
  }

  // === Texture generation ===
  getTexture(key, generator) {
    if (!this.textureCache.has(key)) {
      this.textureCache.set(key, generator());
    }
    return this.textureCache.get(key);
  }

  // === Structures (buildings, arches, etc.) ===
  createStructure(type) {
    const group = new THREE.Group();

    switch (type) {
      case 'house': {
        const wallMat = this._material(0xddccbb);
        const roofMat = this._material(0x8b4513);
        const walls = new THREE.Mesh(new THREE.BoxGeometry(2, 1.5, 1.5), wallMat);
        walls.position.y = 0.75;
        group.add(walls);
        const roof = new THREE.Mesh(new THREE.ConeGeometry(1.5, 1.0, 4), roofMat);
        roof.position.y = 1.75;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);
        const door = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.9, 0.05), this._material(0x4a2c10));
        door.position.set(0, 0.45, 0.78);
        group.add(door);
        break;
      }
      case 'golden_arches': {
        const archMat = this._material(0xffd700);
        for (const side of [-1, 1]) {
          const arch = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.15, 8, 16, Math.PI), archMat);
          arch.position.set(side * 1.0, 1.0, 0);
          group.add(arch);
        }
        const base = new THREE.Mesh(new THREE.BoxGeometry(3, 0.2, 0.5), this._material(0xcccccc));
        base.position.y = 0.0;
        group.add(base);
        break;
      }
      case 'shop': {
        const wallMat = this._material(0xeeeeee);
        const building = new THREE.Mesh(new THREE.BoxGeometry(3, 2, 2), wallMat);
        building.position.y = 1.0;
        group.add(building);
        const sign = new THREE.Mesh(new THREE.BoxGeometry(2, 0.5, 0.1), this._material(0xffdd00));
        sign.position.set(0, 2.2, 0.95);
        group.add(sign);
        break;
      }
      case 'inn': {
        const wallMat = this._material(0xdda0dd);
        const building = new THREE.Mesh(new THREE.BoxGeometry(3, 2.5, 2), wallMat);
        building.position.y = 1.25;
        group.add(building);
        const roof = new THREE.Mesh(new THREE.ConeGeometry(2.2, 1.0, 4), this._material(0x8b4513));
        roof.position.y = 3.0;
        roof.rotation.y = Math.PI / 4;
        group.add(roof);
        break;
      }
      case 'castle_wall': {
        const wallMat = this._material(0xaaaaaa);
        const wall = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 0.5), wallMat);
        wall.position.y = 2.0;
        group.add(wall);
        // Battlements
        for (let i = -2; i <= 2; i++) {
          const battlement = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.5, 0.6), wallMat);
          battlement.position.set(i * 1.0, 4.25, 0);
          group.add(battlement);
        }
        break;
      }
      case 'castle_tower': {
        const towerMat = this._material(0xbbbbbb);
        const tower = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 1.5, 6, 12), towerMat);
        tower.position.y = 3.0;
        group.add(tower);
        const roof = new THREE.Mesh(new THREE.ConeGeometry(2.0, 2.0, 12), this._material(0x8b0000));
        roof.position.y = 7.0;
        group.add(roof);
        break;
      }
      case 'cactus': {
        const cactusMat = this._material(0x2a8a2a);
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.5, 3, 8), cactusMat);
        trunk.position.y = 1.5;
        group.add(trunk);
        for (const side of [-1, 1]) {
          const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.3, 1.5, 8), cactusMat);
          arm.position.set(side * 0.7, 1.8, 0);
          arm.rotation.z = side * Math.PI / 4;
          group.add(arm);
        }
        break;
      }
      case 'tube': {
        const tubeMat = this._material(0xff6644);
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 3, 12), tubeMat);
        tube.rotation.z = Math.PI / 2;
        group.add(tube);
        break;
      }
      default: {
        const box = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), this._material(0x888888));
        box.position.y = 1.0;
        group.add(box);
        break;
      }
    }

    group.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return group;
  }

  // === Treasure Chest ===
  createTreasureChest() {
    const group = new THREE.Group();
    const woodMat = this._material(0x8b4513);
    const goldMat = this._material(0xffd700);

    const body = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.6, 0.7), woodMat);
    body.position.y = 0.3;
    group.add(body);

    const lid = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.3, 0.7), woodMat);
    lid.position.y = 0.75;
    group.add(lid);

    const lock = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 0.1), goldMat);
    lock.position.set(0, 0.5, 0.4);
    group.add(lock);

    group.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    group.userData.isTreasure = true;
    return group;
  }

  // === Save Point ===
  createSavePoint() {
    const group = new THREE.Group();
    const crystalMat = this._material(0x44ffff);

    const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), crystalMat);
    crystal.position.y = 1.0;
    group.add(crystal);

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.8, 0.3, 8), this._material(0x444444));
    base.position.y = 0.15;
    group.add(base);

    group.userData.isSavePoint = true;
    return group;
  }

  // === NPC Mesh ===
  createNPCMesh(npcName) {
    const group = new THREE.Group();
    // Simple humanoid
    const bodyMat = this._material(0x4488cc);
    const headMat = this._material(0xffccaa);

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 1.4, 8), bodyMat);
    body.position.y = 0.7;
    group.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), headMat);
    head.position.y = 1.6;
    group.add(head);

    // Name tag
    group.userData.npcName = npcName;
    group.userData.isNPC = true;

    group.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return group;
  }

  // === Particle Effects ===
  updateParticleEffect(points, dt) {
    if (!points.userData.velocities) return;

    const positions = points.geometry.attributes.position;
    const velocities = points.userData.velocities;
    const lifetimes = points.userData.lifetimes;
    const maxLifetimes = points.userData.maxLifetimes;
    points.userData.elapsed += dt;

    let allDead = true;

    for (let i = 0; i < velocities.length; i++) {
      if (lifetimes[i] <= 0) continue;
      allDead = false;

      lifetimes[i] -= dt;

      positions.setX(i, positions.getX(i) + velocities[i].x * dt);
      positions.setY(i, positions.getY(i) + velocities[i].y * dt);
      positions.setZ(i, positions.getZ(i) + velocities[i].z * dt);

      velocities[i].y -= 2.0 * dt;

      const alpha = clamp(lifetimes[i] / maxLifetimes[i], 0, 1);
      points.material.opacity = alpha * 0.0;
    }

    positions.needsUpdate = true;

    if (allDead) {
      points.userData.dead = true;
    }
  }
}
