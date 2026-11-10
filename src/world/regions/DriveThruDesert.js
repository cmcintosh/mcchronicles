// DriveThruDesert.js — Region configuration for Drive-Thru Desert

import * as THREE from 'three';
import { scatterObjects, fractalNoise2D } from '../../utils/procedural.js';
import { SeededRandom, randomInt } from '../../utils/math.js';
import { NPC } from '../NPC.js';

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const seed = 56789;
  const noise = fractalNoise2D(seed, 2, 0.5, 2);

  // ── Cactus structures ───────────────────────────────────────────────────
  const cactusCount = 8;
  const rng = new SeededRandom(seed);
  for (let i = 0; i < cactusCount; i++) {
    const cactus = assetManager.createStructure('cactus');
    if (!cactus) continue;
    const x = rng.range(-data.size / 2 + 8, data.size / 2 - 8);
    const z = rng.range(-data.size / 2 + 8, data.size / 2 - 8);
    cactus.position.set(x, 0, z);
    cactus.rotation.y = rng.range(0, Math.PI * 2);
    const s = rng.range(0.8, 1.3);
    cactus.scale.setScalar(s);
    cactus.castShadow = true;
    region.scene.add(cactus);
    region.structures.push(cactus);
  }

  // ── Drive-Thru speaker structures ───────────────────────────────────────
  const speakerCount = 3;
  for (let i = 0; i < speakerCount; i++) {
    const speaker = assetManager.createStructure('drive_thru_speaker');
    if (!speaker) continue;
    const angle = (i / speakerCount) * Math.PI * 2;
    const radius = data.size * 0.2;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    speaker.position.set(x, 0, z);
    speaker.castShadow = true;
    region.scene.add(speaker);
    region.structures.push(speaker);
  }

  // ── Scatter rocks (desert boulders) ─────────────────────────────────────
  const rockCount = data.decorations.rocks || 30;
  const rocks = scatterObjects(region, rockCount, data.size, seed + 600, (rng, i) => {
    const rock = assetManager.createRock(rng.range(0.7, 2.0));
    if (!rock) return null;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    rock.position.set(x, 0, z);
    rock.rotation.set(rng.range(0, 0.3), rng.range(0, Math.PI * 2), rng.range(0, 0.3));
    if (rock.material) {
      rock.material.color = new THREE.Color(0xc4a04e);
    }
    rock.castShadow = true;
    rock.receiveShadow = true;
    return rock;
  });
  rocks.forEach((r) => {
    region.decorations.push(r);
    region.scene.add(r);
  });

  // ── Sparse desert trees ─────────────────────────────────────────────────
  const treeCount = data.decorations.trees || 3;
  for (let i = 0; i < treeCount; i++) {
    const tree = assetManager.createTree('drive_thru_desert');
    if (!tree) continue;
    const x = rng.range(-data.size / 2 + 10, data.size / 2 - 10);
    const z = rng.range(-data.size / 2 + 10, data.size / 2 - 10);
    tree.position.set(x, 0, z);
    tree.rotation.y = rng.range(0, Math.PI * 2);
    region.decorations.push(tree);
    region.scene.add(tree);
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

  // ── Sand particle effect (horizontal swirling) ──────────────────────────
  _createSandParticles(region, data.size);

  // ── Exit markers: west (-x) to Happy Meal Forest, north (-z) to McCafe Springs, east (+x) to PlayPlace Plains ─
  _createExitMarker(region, -data.size / 2 + 2, 0, 'west');
  _createExitMarker(region, 0, -data.size / 2 + 2, 'north');
  _createExitMarker(region, data.size / 2 - 2, 0, 'east');

  // ── Hot desert atmospheric light ────────────────────────────────────────
  const heatLight = new THREE.DirectionalLight(0xffcc66, 0.4);
  heatLight.position.set(30, 25, 30);
  region.scene.add(heatLight);
  region.lights.push(heatLight);
}

function _createSandParticles(region, size) {
  const count = 200;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * size;
    positions[i * 3 + 1] = Math.random() * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * size;

    // Swirling horizontal motion with slight downward drift
    velocities[i * 3] = (Math.random() - 0.5) * 3;     // horizontal swirl
    velocities[i * 3 + 1] = -Math.random() * 0.5;       // slight fall
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xe6c266,
    size: 0.3,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geom, mat);
  region.scene.add(points);
  region.particleSystem = points;
  region.particleData = {
    velocities,
    bounds: {
      xMin: -size / 2, xMax: size / 2,
      yMin: 0, yMax: 15,
      zMin: -size / 2, zMax: size / 2,
      width: size, depth: size,
    },
  };
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.5, 0.7, 4, 6);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xe6c266,
    emissive: 0xccaa44,
    emissiveIntensity: 0.4,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0xffdd88, 1.2, 12);
  glow.position.set(x, 3, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
