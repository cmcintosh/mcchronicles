// McCafeSprings.js — Region configuration for McCafe Springs (hub town)

import * as THREE from 'three';
import { SeededRandom } from '../../utils/math.js';
import { NPC } from '../NPC.js';

export function configure(region, assetManager, shaderManager) {
  const data = region.regionData;
  const rng = new SeededRandom(67890);

  // ── Town buildings: inn, shop, save point ───────────────────────────────
  const inn = assetManager.createStructure('inn');
  if (inn) {
    inn.position.set(12, 0, 8);
    inn.rotation.y = -Math.PI / 6;
    inn.castShadow = true;
    inn.receiveShadow = true;
    region.scene.add(inn);
    region.structures.push(inn);
  }

  const shop = assetManager.createStructure('shop');
  if (shop) {
    shop.position.set(-12, 0, 12);
    shop.rotation.y = Math.PI / 8;
    shop.castShadow = true;
    shop.receiveShadow = true;
    region.scene.add(shop);
    region.structures.push(shop);
  }

  // ── Save point with golden glow ─────────────────────────────────────────
  const savePoint = assetManager.createSavePoint();
  if (savePoint) {
    savePoint.position.set(0, 0, -10);
    savePoint.castShadow = true;
    region.scene.add(savePoint);
    region.structures.push(savePoint);

    // Golden glow light
    const saveGlow = new THREE.PointLight(0xffd700, 3, 20);
    saveGlow.position.set(0, 4, -10);
    region.scene.add(saveGlow);
    region.lights.push(saveGlow);

    // Floating golden particles around save point
    _createSavePointParticles(region, 0, -10);
  }

  // ── Additional town structures (decorative) ─────────────────────────────
  const extraStructures = (data.decorations.structures || 12) - 3;
  for (let i = 0; i < extraStructures; i++) {
    const structure = assetManager.createStructure('town_decoration');
    if (!structure) continue;
    const angle = (i / extraStructures) * Math.PI * 2;
    const radius = data.size * 0.3;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    structure.position.set(x, 0, z);
    structure.rotation.y = rng.range(0, Math.PI * 2);
    structure.castShadow = true;
    region.scene.add(structure);
    region.structures.push(structure);
  }

  // ── Town trees (decorative) ─────────────────────────────────────────────
  const treeCount = data.decorations.trees || 5;
  for (let i = 0; i < treeCount; i++) {
    const tree = assetManager.createTree('mccafe_springs');
    if (!tree) continue;
    const x = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    const z = rng.range(-data.size / 2 + 5, data.size / 2 - 5);
    tree.position.set(x, 0, z);
    tree.rotation.y = rng.range(0, Math.PI * 2);
    tree.castShadow = true;
    region.decorations.push(tree);
    region.scene.add(tree);
  }

  // ── Place NPCs (innkeeper, shopkeeper, save point attendant, quest giver, familiar keeper) ──
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

  // ── Exit markers: north (-z) to McFlurry Tundra, south (+z) to Drive-Thru Desert, east (+x) to PlayPlace Plains ─
  _createExitMarker(region, 0, -data.size / 2 + 2, 'north');
  _createExitMarker(region, 0, data.size / 2 - 2, 'south');
  _createExitMarker(region, data.size / 2 - 2, 0, 'east');

  // ── Warm cozy town lighting ─────────────────────────────────────────────
  const cozyLight = new THREE.PointLight(0xffaa66, 1.5, 30);
  cozyLight.position.set(0, 8, 0);
  region.scene.add(cozyLight);
  region.lights.push(cozyLight);

  const innLight = new THREE.PointLight(0xffcc88, 1, 15);
  innLight.position.set(12, 5, 8);
  region.scene.add(innLight);
  region.lights.push(innLight);

  const shopLight = new THREE.PointLight(0xffcc88, 1, 15);
  shopLight.position.set(-12, 5, 12);
  region.scene.add(shopLight);
  region.lights.push(shopLight);
}

function _createSavePointParticles(region, x, z) {
  const count = 30;
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 3;
    positions[i * 3] = x + Math.cos(angle) * radius;
    positions[i * 3 + 1] = Math.random() * 5;
    positions[i * 3 + 2] = z + Math.sin(angle) * radius;

    velocities[i * 3] = 0;
    velocities[i * 3 + 1] = Math.random() * 0.5 + 0.2; // rising
    velocities[i * 3 + 2] = 0;
  }

  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xffd700,
    size: 0.3,
    transparent: true,
    opacity: 0.7,
    sizeAttenuation: true,
  });

  const points = new THREE.Points(geom, mat);
  region.scene.add(points);

  // Store as a second particle system — we'll piggyback on particleData
  // using a separate reference on the region object
  if (!region._extraParticles) region._extraParticles = [];
  region._extraParticles.push({
    system: points,
    velocities,
    center: { x, z },
    bounds: { yMin: 0, yMax: 6, radius: 3 },
  });
}

function _createExitMarker(region, x, z, direction) {
  const geom = new THREE.CylinderGeometry(0.6, 0.8, 5, 8);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x8b6914,
    emissive: 0xffaa44,
    emissiveIntensity: 0.5,
  });
  const pillar = new THREE.Mesh(geom, mat);
  pillar.position.set(x, 2.5, z);
  pillar.castShadow = true;
  region.scene.add(pillar);
  region.structures.push(pillar);

  const glow = new THREE.PointLight(0xffaa44, 1.5, 15);
  glow.position.set(x, 4, z);
  region.scene.add(glow);
  region.lights.push(glow);
}
