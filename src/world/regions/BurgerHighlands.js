// BurgerHighlands.js — Region configuration for Burger Highlands (mountainous)

import * as THREE from 'three';
import { scatterObjects, fractalNoise2D } from '../../utils/procedural.js';
import { SeededRandom, randomInt } from '../../utils/math.js';
import { NPC } from '../NPC.js';

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const seed = 23456;
  const noise = fractalNoise2D(seed, 5, 0.5, 2); // higher octaves for rugged terrain

  // ── Scatter mountain trees (sparse) ─────────────────────────────────────
  const treeCount = data.decorations.trees || 8;
  const trees = scatterObjects(region, treeCount, data.size, seed, (rng, i) => {
    const tree = assetManager.createTree('burger_highlands');
    if (!tree) return null;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const height = noise(x, z, 0.03) * 5; // steep elevation
    tree.position.set(x, height, z);
    tree.rotation.y = rng.range(0, Math.PI * 2);
    const s = rng.range(0.7, 1.1);
    tree.scale.setScalar(s);
    tree.castShadow = true;
    return tree;
  });
  trees.forEach((t) => {
    region.decorations.push(t);
    region.scene.add(t);
  });

  // ── Scatter rocks (many — mountainous terrain) ──────────────────────────
  const rockCount = data.decorations.rocks || 25;
  const rocks = scatterObjects(region, rockCount, data.size, seed + 200, (rng, i) => {
    const rock = assetManager.createRock(rng.range(1.0, 2.5));
    if (!rock) return null;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const height = noise(x, z, 0.03) * 4;
    rock.position.set(x, height, z);
    rock.rotation.set(rng.range(0, Math.PI), rng.range(0, Math.PI * 2), rng.range(0, Math.PI));
    rock.castShadow = true;
    rock.receiveShadow = true;
    return rock;
  });
  rocks.forEach((r) => {
    region.decorations.push(r);
    region.scene.add(r);
  });

  // ── Mountain path structures ────────────────────────────────────────────
  const structureCount = data.decorations.structures || 3;
  for (let i = 0; i < structureCount; i++) {
    const structure = assetManager.createStructure('mountain_path');
    if (!structure) continue;
    const x = (i - 1) * 15;
    const z = -10 + i * 10;
    const height = noise(x, z, 0.03) * 3;
    structure.position.set(x, height, z);
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

  // ── Officer Big Mac story encounter marker ──────────────────────────────
  const storyEvent = data.storyEvents.find((e) => e.event === 'meet_officer_big_mac');
  if (storyEvent) {
    const markerGeom = new THREE.OctahedronGeometry(2, 0);
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0x8b0000,
      emissive: 0xff0000,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.7,
    });
    const marker = new THREE.Mesh(markerGeom, markerMat);
    marker.position.set(storyEvent.x, 3, storyEvent.z);
    marker.castShadow = true;
    region.scene.add(marker);
    region.structures.push(marker);

    // Red glow light
    const storyLight = new THREE.PointLight(0xff2200, 2, 20);
    storyLight.position.set(storyEvent.x, 4, storyEvent.z);
    region.scene.add(storyLight);
    region.lights.push(storyLight);
  }

  // ── Exit markers: south (+z) to Fry Valley, north (-z) to McFlurry Tundra ─
  _createExitMarker(region, 0, data.size / 2 - 2, 'south');
  _createExitMarker(region, 0, -data.size / 2 + 2, 'north');

  // ── Atmospheric haze — slightly cooler light at altitude ────────────────
  const highLight = new THREE.DirectionalLight(0xaabbcc, 0.3);
  highLight.position.set(0, 40, 0);
  region.scene.add(highLight);
  region.lights.push(highLight);
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.6, 0.8, 5, 6);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x8b4513,
    emissive: 0x654321,
    emissiveIntensity: 0.3,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2.5, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0xddbb99, 1, 12);
  glow.position.set(x, 4, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
