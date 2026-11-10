// FryValley.js — Region configuration for Fry Valley (starting area)

import * as THREE from 'three';
import { scatterObjects, fractalNoise2D } from '../../utils/procedural.js';
import { SeededRandom, randomInt } from '../../utils/math.js';
import { NPC } from '../NPC.js';

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const seed = 12345;
  const noise = fractalNoise2D(seed, 3, 0.5, 2);

  // ── Scatter golden fry-grass trees ──────────────────────────────────────
  const treeCount = data.decorations.trees || 15;
  const trees = scatterObjects(region, treeCount, data.size, seed, (rng, i) => {
    const tree = assetManager.createTree('fry_valley');
    if (!tree) return null;
    const x = rng.range(-data.size / 2, data.size / 2);
    const z = rng.range(-data.size / 2, data.size / 2);
    const heightVar = noise(x, z, 0.05) * 1.5; // gentle rolling hills
    tree.position.set(x, heightVar, z);
    tree.rotation.y = rng.range(0, Math.PI * 2);
    const s = rng.range(0.8, 1.2);
    tree.scale.setScalar(s);
    tree.castShadow = true;
    return tree;
  });
  trees.forEach((t) => {
    region.decorations.push(t);
    region.scene.add(t);
  });

  // ── Scatter rocks ───────────────────────────────────────────────────────
  const rockCount = data.decorations.rocks || 10;
  const rocks = scatterObjects(region, rockCount, data.size, seed + 100, (rng, i) => {
    const rock = assetManager.createRock(rng.range(0.6, 1.4));
    if (!rock) return null;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    rock.position.set(x, 0, z);
    rock.rotation.y = rng.range(0, Math.PI * 2);
    rock.castShadow = true;
    rock.receiveShadow = true;
    return rock;
  });
  rocks.forEach((r) => {
    region.decorations.push(r);
    region.scene.add(r);
  });

  // ── Place NPCs from regionData ──────────────────────────────────────────
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

  // ── Exit markers: north (-z) to Burger Highlands, east (+x) to Happy Meal Forest ─
  _createExitMarker(region, assetManager, 0, -data.size / 2 + 2, 'north');
  _createExitMarker(region, assetManager, data.size / 2 - 2, 0, 'east');

  // ── Warm directional light adjustment ───────────────────────────────────
  const warmLight = new THREE.DirectionalLight(0xffdd88, 0.4);
  warmLight.position.set(20, 30, 10);
  region.scene.add(warmLight);
  region.lights.push(warmLight);
}

function _createExitMarker(region, assetManager, x, z, direction) {
  // A simple path structure or archway at the edge
  const marker = assetManager.createStructure('path_marker');
  if (marker) {
    marker.position.set(x, 0, z);
    if (direction === 'north' || direction === 'south') {
      marker.rotation.y = Math.PI / 2;
    }
    region.scene.add(marker);
    region.structures.push(marker);
  } else {
    // Fallback: create a simple glowing pillar
    const geom = new THREE.CylinderGeometry(0.5, 0.5, 4, 8);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0xffaa00,
      emissiveIntensity: 0.5,
    });
    const pillar = new THREE.Mesh(geom, mat);
    pillar.position.set(x, 2, z);
    pillar.castShadow = true;
    region.scene.add(pillar);
    region.structures.push(pillar);

    // Add a soft glow light
    const glow = new THREE.PointLight(0xffd700, 1.5, 15);
    glow.position.set(x, 3, z);
    region.scene.add(glow);
    region.lights.push(glow);
  }
}
