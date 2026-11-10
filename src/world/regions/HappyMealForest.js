// HappyMealForest.js — Region configuration for Happy Meal Forest (dense woods)

import * as THREE from 'three';
import { poissonDisk, fractalNoise2D } from '../../utils/procedural.js';
import { SeededRandom, randomChoice } from '../../utils/math.js';
import { NPC } from '../NPC.js';

const TOY_PALETTE = [
  0xff0000, 0x00ff00, 0x0000ff, 0xffff00,
  0xff00ff, 0x00ffff, 0xff8800, 0x8800ff,
  0xff44aa, 0x44ff88,
];

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const seed = 45678;
  const noise = fractalNoise2D(seed, 3, 0.5, 2);

  // ── Dense forest via poisson disk sampling ──────────────────────────────
  const minDist = 8;
  const points = poissonDisk(data.size, minDist, 30, seed);

  for (let i = 0; i < points.length && i < 60; i++) {
    const pt = points[i];
    const tree = assetManager.createTree('happy_meal_forest');
    if (!tree) continue;
    const heightVar = noise(pt.x, pt.z, 0.04) * 1.0;
    tree.position.set(pt.x, heightVar, pt.z);
    tree.rotation.y = Math.random() * Math.PI * 2;
    const s = 0.9 + Math.random() * 0.4;
    tree.scale.setScalar(s);
    tree.castShadow = true;
    tree.receiveShadow = true;
    region.decorations.push(tree);
    region.scene.add(tree);

    // ── Hanging toy decorations on some trees ────────────────────────────
    if (Math.random() < 0.4) {
      const toyColor = randomChoice(TOY_PALETTE);
      const toyGeom = new THREE.SphereGeometry(0.4, 8, 6);
      const toyMat = new THREE.MeshStandardMaterial({
        color: toyColor,
        emissive: toyColor,
        emissiveIntensity: 0.3,
        roughness: 0.4,
      });
      const toy = new THREE.Mesh(toyGeom, toyMat);
      toy.position.set(pt.x, heightVar + 4 + Math.random() * 1.5, pt.z);
      toy.castShadow = true;
      region.decorations.push(toy);
      region.scene.add(toy);
    }
  }

  // ── Scatter rocks (few) ─────────────────────────────────────────────────
  const rockCount = data.decorations.rocks || 5;
  const rng = new SeededRandom(seed + 500);
  for (let i = 0; i < rockCount; i++) {
    const rock = assetManager.createRock(rng.range(0.5, 1.2));
    if (!rock) continue;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    rock.position.set(x, 0, z);
    rock.rotation.y = rng.range(0, Math.PI * 2);
    rock.castShadow = true;
    rock.receiveShadow = true;
    region.decorations.push(rock);
    region.scene.add(rock);
  }

  // ── Forest structures ───────────────────────────────────────────────────
  const structureCount = data.decorations.structures || 2;
  for (let i = 0; i < structureCount; i++) {
    const structure = assetManager.createStructure('forest_shrine');
    if (!structure) continue;
    const x = rng.range(-data.size / 3, data.size / 3);
    const z = rng.range(-data.size / 3, data.size / 3);
    structure.position.set(x, 0, z);
    structure.castShadow = true;
    region.scene.add(structure);
    region.structures.push(structure);
  }

  // ── Place NPCs ──────────────────────────────────────────────────────────
  for (const npcData of data.npcs) {
    const mesh = assetManager.createNPCMesh(npcData.name);
    const npc = new NPC({
      name: npcData.name,
      x: npcData.x,
      z: npcData.z,
      dialogue: npcData.dialogue,
      mesh,
    });
    region.npcs.push(npc);
    region.scene.add(mesh);
  }

  // ── Place treasures ─────────────────────────────────────────────────────
  for (const treasureData of data.treasures) {
    const chestMesh = assetManager.createTreasureChest();
    const treasure = new NPC({
      name: 'Treasure',
      x: treasureData.x,
      z: treasureData.z,
      dialogue: [],
      mesh: chestMesh,
      isTreasure: true,
      treasureItem: treasureData.item,
    });
    region.treasures.push(treasure);
    region.scene.add(chestMesh);
  }

  // ── Exit markers: west (-x) to Fry Valley, east (+x) to Drive-Thru Desert ─
  _createExitMarker(region, -data.size / 2 + 2, 0, 'west');
  _createExitMarker(region, data.size / 2 - 2, 0, 'east');

  // ── Dappled green forest light ──────────────────────────────────────────
  const forestLight = new THREE.DirectionalLight(0x99dd99, 0.35);
  forestLight.position.set(10, 35, 10);
  region.scene.add(forestLight);
  region.lights.push(forestLight);
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.5, 0.6, 4, 8);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x228b22,
    emissive: 0x44aa44,
    emissiveIntensity: 0.4,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0x88ff88, 1.2, 12);
  glow.position.set(x, 3, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
