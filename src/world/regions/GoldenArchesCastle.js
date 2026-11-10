// GoldenArchesCastle.js — Region configuration for Golden Arches Castle (final dungeon)

import * as THREE from 'three';
import { scatterObjects } from '../../utils/procedural.js';
import { SeededRandom } from '../../utils/math.js';
import { NPC } from '../NPC.js';

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const seed = 89012;
  const rng = new SeededRandom(seed);
  const half = data.size / 2;

  // ── Dark dungeon walls (large box meshes forming a corridor layout) ─────
  const wallHeight = 8;
  const wallThickness = 2;

  // Outer perimeter walls
  const wallConfigs = [
    { x: 0, z: -half, w: data.size, d: wallThickness }, // north wall
    { x: 0, z: half, w: data.size, d: wallThickness },  // south wall
    { x: -half, z: 0, w: wallThickness, d: data.size }, // west wall
    { x: half, z: 0, w: wallThickness, d: data.size },  // east wall (with gap for exit)
  ];

  for (const cfg of wallConfigs) {
    // Skip the west wall partially for the exit to PlayPlace Plains
    if (cfg.x === -half) {
      // Create two segments with a gap
      _createWall(region, cfg.x, -15, wallThickness, 30, wallHeight);
      _createWall(region, cfg.x, 15, wallThickness, 30, wallHeight);
    } else {
      _createWall(region, cfg.x, cfg.z, cfg.w, cfg.d, wallHeight);
    }
  }

  // Inner corridor walls (creating a simple dungeon layout)
  _createWall(region, -20, -10, 30, wallThickness, wallHeight);
  _createWall(region, 20, 10, 30, wallThickness, wallHeight);
  _createWall(region, -15, 20, wallThickness, 25, wallHeight);
  _createWall(region, 15, -25, wallThickness, 20, wallHeight);

  // ── Golden arch pillars ─────────────────────────────────────────────────
  const archCount = data.decorations.structures || 15;
  for (let i = 0; i < archCount; i++) {
    const arch = assetManager.createStructure('golden_arch');
    if (!arch) continue;
    // Place arches along a central corridor leading to the boss
    const t = i / (archCount - 1);
    const x = rng.range(-10, 10);
    const z = lerp(half - 10, -half + 15, t); // leading toward the boss area
    arch.position.set(x, 0, z);
    arch.castShadow = true;
    arch.receiveShadow = true;
    region.scene.add(arch);
    region.structures.push(arch);
  }

  // ── Scatter rocks (dungeon boulders) ────────────────────────────────────
  const rockCount = data.decorations.rocks || 10;
  const rocks = scatterObjects(region, rockCount, data.size, seed + 700, (rng, i) => {
    const rock = assetManager.createRock(rng.range(0.8, 1.8));
    if (!rock) return null;
    const x = rng.range(-half + 8, half - 8);
    const z = rng.range(-half + 8, half - 8);
    rock.position.set(x, 0, z);
    rock.rotation.y = rng.range(0, Math.PI * 2);
    if (rock.material) {
      rock.material.color = new THREE.Color(0x444444);
    }
    rock.castShadow = true;
    rock.receiveShadow = true;
    return rock;
  });
  rocks.forEach((r) => {
    region.decorations.push(r);
    region.scene.add(r);
  });

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

  // ── Final boss trigger marker ───────────────────────────────────────────
  const storyEvent = data.storyEvents.find((e) => e.event === 'final_boss');
  if (storyEvent) {
    // Large ominous marker
    const markerGeom = new THREE.TorusGeometry(3, 0.8, 8, 24);
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0xff2200,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.75,
    });
    const marker = new THREE.Mesh(markerGeom, markerMat);
    marker.position.set(storyEvent.x, 2, storyEvent.z);
    marker.rotation.x = Math.PI / 2;
    marker.castShadow = true;
    region.scene.add(marker);
    region.structures.push(marker);

    // Spinning inner ring
    const innerGeom = new THREE.TorusGeometry(1.5, 0.3, 6, 16);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0xff2200,
      emissive: 0xff0000,
      emissiveIntensity: 1.0,
    });
    const innerMarker = new THREE.Mesh(innerGeom, innerMat);
    innerMarker.position.set(storyEvent.x, 3, storyEvent.z);
    innerMarker.rotation.x = Math.PI / 2;
    region.scene.add(innerMarker);
    region.structures.push(innerMarker);
  }

  // ── Ominous red/gold point lights at strategic locations ────────────────
  const redLight1 = new THREE.PointLight(0xff2200, 2.5, 25);
  redLight1.position.set(-20, 6, -20);
  region.scene.add(redLight1);
  region.lights.push(redLight1);

  const redLight2 = new THREE.PointLight(0xff2200, 2, 20);
  redLight2.position.set(25, 6, 15);
  region.scene.add(redLight2);
  region.lights.push(redLight2);

  const goldLight1 = new THREE.PointLight(0xffd700, 2, 30);
  goldLight1.position.set(0, 8, -30);
  region.scene.add(goldLight1);
  region.lights.push(goldLight1);

  const goldLight2 = new THREE.PointLight(0xffd700, 1.5, 20);
  goldLight2.position.set(15, 5, 30);
  region.scene.add(goldLight2);
  region.lights.push(goldLight2);

  // Boss area red glow
  if (storyEvent) {
    const bossLight = new THREE.PointLight(0xff0000, 3, 30);
    bossLight.position.set(storyEvent.x, 5, storyEvent.z);
    region.scene.add(bossLight);
    region.lights.push(bossLight);
  }

  // ── Exit marker: west (-x) to PlayPlace Plains ──────────────────────────
  _createExitMarker(region, -half + 2, 0, 'west');
}

function _createWall(region, x, z, width, depth, height) {
  const geom = new THREE.BoxGeometry(width, height, depth);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x222222,
    roughness: 0.9,
    metalness: 0.1,
  });
  const wall = new THREE.Mesh(geom, mat);
  wall.position.set(x, height / 2, z);
  wall.castShadow = true;
  wall.receiveShadow = true;
  region.scene.add(wall);
  region.structures.push(wall);
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.6, 0.8, 5, 8);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffd700,
    emissive: 0xffaa00,
    emissiveIntensity: 0.6,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2.5, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0xffd700, 2, 15);
  glow.position.set(x, 4, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
