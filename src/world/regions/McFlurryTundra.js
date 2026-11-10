// McFlurryTundra.js — Region configuration for McFlurry Tundra (icy)

import * as THREE from 'three';
import { scatterObjects, fractalNoise2D } from '../../utils/procedural.js';
import { SeededRandom, randomInt } from '../../utils/math.js';
import { NPC } from '../NPC.js';

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const seed = 34567;
  const noise = fractalNoise2D(seed, 2, 0.5, 2);

  // ── Ice crystal formations (using createTree for ice crystals) ──────────
  const crystalCount = data.decorations.trees || 5;
  const crystals = scatterObjects(region, crystalCount, data.size, seed, (rng, i) => {
    const crystal = assetManager.createTree('mcflurry_tundra');
    if (!crystal) return null;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    crystal.position.set(x, 0, z);
    crystal.rotation.y = rng.range(0, Math.PI * 2);
    const s = rng.range(0.9, 1.5);
    crystal.scale.setScalar(s);
    crystal.castShadow = true;
    return crystal;
  });
  crystals.forEach((c) => {
    region.decorations.push(c);
    region.scene.add(c);
  });

  // ── Scatter rocks (icy boulders) ────────────────────────────────────────
  const rockCount = data.decorations.rocks || 20;
  const rocks = scatterObjects(region, rockCount, data.size, seed + 300, (rng, i) => {
    const rock = assetManager.createRock(rng.range(0.8, 2.0));
    if (!rock) return null;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    rock.position.set(x, 0, z);
    rock.rotation.y = rng.range(0, Math.PI * 2);
    // Tint rocks slightly blue
    if (rock.material) {
      rock.material.color = new THREE.Color(0xaaccdd);
    }
    rock.castShadow = true;
    rock.receiveShadow = true;
    return rock;
  });
  rocks.forEach((r) => {
    region.decorations.push(r);
    region.scene.add(r);
  });

  // ── Ice structures ──────────────────────────────────────────────────────
  const structureCount = data.decorations.structures || 4;
  for (let i = 0; i < structureCount; i++) {
    const structure = assetManager.createStructure('ice_formation');
    if (!structure) continue;
    const angle = (i / structureCount) * Math.PI * 2;
    const radius = data.size * 0.25;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
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

  // ── Mac Tonight story encounter marker ──────────────────────────────────
  const storyEvent = data.storyEvents.find((e) => e.event === 'meet_mac_tonight');
  if (storyEvent) {
    const markerGeom = new THREE.IcosahedronGeometry(2.5, 0);
    const markerMat = new THREE.MeshStandardMaterial({
      color: 0x88ccff,
      emissive: 0x44aaff,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.6,
    });
    const marker = new THREE.Mesh(markerGeom, markerMat);
    marker.position.set(storyEvent.x, 4, storyEvent.z);
    marker.castShadow = true;
    region.scene.add(marker);
    region.structures.push(marker);

    const storyLight = new THREE.PointLight(0x44aaff, 2.5, 25);
    storyLight.position.set(storyEvent.x, 5, storyEvent.z);
    region.scene.add(storyLight);
    region.lights.push(storyLight);
  }

  // ── Snow particle effect ────────────────────────────────────────────────
  _createSnowParticles(region, data.size);

  // ── Exit markers: south (+z) to Burger Highlands, east (+x) to McCafe Springs ─
  _createExitMarker(region, 0, data.size / 2 - 2, 'south');
  _createExitMarker(region, data.size / 2 - 2, 0, 'east');

  // ── Cold atmospheric light ──────────────────────────────────────────────
  const coldLight = new THREE.DirectionalLight(0xddddff, 0.3);
  coldLight.position.set(-20, 40, -10);
  region.scene.add(coldLight);
  region.lights.push(coldLight);
}

function _createSnowParticles(region, size) {
  const count = 500;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * size;
    positions[i * 3 + 1] = Math.random() * 40;
    positions[i * 3 + 2] = (Math.random() - 0.5) * size;

    velocities[i * 3] = (Math.random() - 0.5) * 0.5;     // gentle horizontal drift
    velocities[i * 3 + 1] = -Math.random() * 2 - 0.5;    // falling
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.4,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geom, mat);
  region.scene.add(points);
  region.particleSystem = points;
  region.particleData = {
    velocities,
    bounds: {
      xMin: -size / 2, xMax: size / 2,
      yMin: 0, yMax: 40,
      zMin: -size / 2, zMax: size / 2,
      width: size, depth: size,
    },
  };
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.5, 0.7, 4, 8);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xaaddff,
    emissive: 0x88ccff,
    emissiveIntensity: 0.5,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0x88ccff, 1.5, 15);
  glow.position.set(x, 3, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
