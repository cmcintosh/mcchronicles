// PlayPlacePlains.js — Region configuration for PlayPlace Plains (labyrinth)

import * as THREE from 'three';
import { SeededRandom, randomChoice } from '../../utils/math.js';
import { NPC } from '../NPC.js';

const TUBE_COLORS = [0xff69b4, 0x44aaff, 0xffcc00, 0x44ff88];

// Simple maze layout: 1 = wall, 0 = open path
const MAZE_LAYOUT = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const rng = new SeededRandom(78901);
  const half = data.size / 2;

  // ── Build labyrinth of colorful tube walls ──────────────────────────────
  const cellSize = data.size / MAZE_LAYOUT.length;
  const tubeHeight = 6;
  const tubeRadius = cellSize * 0.4;

  for (let row = 0; row < MAZE_LAYOUT.length; row++) {
    for (let col = 0; col < MAZE_LAYOUT[row].length; col++) {
      if (MAZE_LAYOUT[row][col] === 1) {
        const color = randomChoice(TUBE_COLORS);
        const geom = new THREE.CylinderGeometry(tubeRadius, tubeRadius, tubeHeight, 16);
        const mat = new THREE.MeshStandardMaterial({
          color,
          roughness: 0.3,
          metalness: 0.1,
          emissive: color,
          emissiveIntensity: 0.15,
        });
        const tube = new THREE.Mesh(geom, mat);
        const x = -half + col * cellSize + cellSize / 2;
        const z = -half + row * cellSize + cellSize / 2;
        tube.position.set(x, tubeHeight / 2, z);
        tube.castShadow = true;
        tube.receiveShadow = true;
        region.scene.add(tube);
        region.structures.push(tube);
      }
    }
  }

  // ── Ball pit areas ──────────────────────────────────────────────────────
  _createBallPit(region, -half * 0.5, half * 0.3, 6, 0xff69b4, rng);
  _createBallPit(region, half * 0.4, -half * 0.2, 5, 0x44aaff, rng);
  _createBallPit(region, half * 0.3, half * 0.5, 4, 0xffcc00, rng);

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

  // ── Exit markers: west (-x) to Drive-Thru Desert, north (-z) to McCafe Springs, east (+x) to Golden Arches Castle ─
  _createExitMarker(region, -half + 2, 0, 'west');
  _createExitMarker(region, 0, -half + 2, 'north');
  _createExitMarker(region, half - 2, 0, 'east');

  // ── Bright multicolored lighting ────────────────────────────────────────
  const colors = TUBE_COLORS;
  for (let i = 0; i < 4; i++) {
    const light = new THREE.PointLight(colors[i], 1.2, 40);
    const angle = (i / 4) * Math.PI * 2;
    light.position.set(Math.cos(angle) * half * 0.4, 10, Math.sin(angle) * half * 0.4);
    region.scene.add(light);
    region.lights.push(light);
  }
}

/**
 * Create a ball pit — a cluster of colored spheres in a circular area.
 */
function _createBallPit(region, cx, cz, radius, baseColor, rng) {
  const ballCount = 40;
  for (let i = 0; i < ballCount; i++) {
    const angle = rng.range(0, Math.PI * 2);
    const dist = rng.range(0, radius);
    const x = cx + Math.cos(angle) * dist;
    const z = cz + Math.sin(angle) * dist;
    const y = rng.range(0.2, 1.5);

    const ballGeom = new THREE.SphereGeometry(0.35, 8, 6);
    const colorVariant = randomChoice(TUBE_COLORS);
    const ballMat = new THREE.MeshStandardMaterial({
      color: colorVariant,
      roughness: 0.4,
      emissive: colorVariant,
      emissiveIntensity: 0.1,
    });
    const ball = new THREE.Mesh(ballGeom, ballMat);
    ball.position.set(x, y, z);
    ball.castShadow = true;
    region.scene.add(ball);
    region.decorations.push(ball);
  }
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.5, 0.7, 4, 8);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xff44ff,
    emissive: 0xaa44aa,
    emissiveIntensity: 0.5,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0xff44ff, 1.5, 15);
  glow.position.set(x, 3, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
