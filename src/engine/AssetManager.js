// AssetManager — Procedural Three.js models for McChronicles
// All character and monster models are built procedurally (no GLB loading)

import * as THREE from 'three';
import { ShaderManager } from './ShaderManager.js';
import { generateTexture, canvasToTexture, fractalNoise2D, scatterObjects } from '../utils/procedural.js';
import { SeededRandom, clamp } from '../utils/math.js';
import { CHARACTERS } from '../data/characters.js';
import { MONSTERS } from '../data/monsters.js';

export class AssetManager {
  constructor(shaderManager) {
    this.shaderManager = shaderManager || new ShaderManager();
    this.textureCache = new Map();
    this.geometryCache = new Map();
  }

  // === Synchronous model loading (no GLB) ===
  loadModel(name) {
    if (CHARACTERS[name]) return this.createCharacterMesh(name);
    if (MONSTERS[name]) return this.createMonsterMesh(name);
    // Generic fallback
    const group = new THREE.Group();
    const mat = this._material(0xcccccc);
    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), mat);
    box.position.y = 1;
    group.add(box);
    return group;
  }

  // No-op preload methods (kept for backwards compat)
  async preloadModels(names) { }
  async preloadAllModels() { }

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

  // === Helper: add a mesh to a group with shadow settings ===
  _addMesh(group, geometry, material, x = 0, y = 0, z = 0, castShadow = true) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    group.add(mesh);
    return mesh;
  }

  // === Character Meshes ===
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
    group.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return group;
  }

  _buildRonald(char) {
    const group = new THREE.Group();
    const redMat = this._material(0xdd2233);
    const yellowMat = this._material(0xffdd00);
    const whiteFaceMat = this._material(0xfff5ee);
    const skinMat = this._material(0xffccaa);
    const blueMat = this._material(0x3366cc);
    const blackMat = this._material(0x222222);

    // === Body: red/yellow striped tunic (tapered cylinder with bands) ===
    // Use multiple thin cylinders to create stripe effect
    const bodyRadius = 0.55;
    const bodyBottomRadius = 0.75;
    const bodyHeight = 1.4;
    const stripeCount = 5;
    const stripeHeight = bodyHeight / stripeCount;

    for (let i = 0; i < stripeCount; i++) {
      const t = i / stripeCount;
      const rTop = bodyRadius + (bodyBottomRadius - bodyRadius) * (1 - t);
      const rBot = bodyRadius + (bodyBottomRadius - bodyRadius) * (1 - (t + 1/stripeCount));
      const mat = i % 2 === 0 ? redMat : yellowMat;
      const stripe = new THREE.Mesh(
        new THREE.CylinderGeometry(rTop, rBot, stripeHeight, 16),
        mat
      );
      stripe.position.y = 0.3 + i * stripeHeight + stripeHeight / 2;
      group.add(stripe);
    }

    // === Yellow jumpsuit bottom ===
    const pants = new THREE.Mesh(
      new THREE.CylinderGeometry(0.75, 0.6, 0.3, 16),
      yellowMat
    );
    pants.position.y = 0.15;
    group.add(pants);

    // === Belt ===
    const belt = new THREE.Mesh(
      new THREE.CylinderGeometry(0.78, 0.78, 0.12, 16),
      this._material(0x8b4513)
    );
    belt.position.y = 0.3;
    group.add(belt);

    // Belt buckle
    const buckle = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.15, 0.05),
      yellowMat
    );
    buckle.position.set(0, 0.3, 0.78);
    group.add(buckle);

    // === Head: white face ===
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 20, 16),
      whiteFaceMat
    );
    head.position.y = 2.0;
    head.scale.set(1, 1.1, 0.95);
    group.add(head);

    // === Red clown hair (multiple spheres for afro style) ===
    const hairPositions = [
      [0, 2.4, 0], [-0.35, 2.3, 0.1], [0.35, 2.3, 0.1],
      [-0.3, 2.15, 0.35], [0.3, 2.15, 0.35],
      [-0.4, 2.1, -0.1], [0.4, 2.1, -0.1],
      [0, 2.45, -0.2], [-0.2, 2.45, 0.2], [0.2, 2.45, 0.2],
    ];
    for (const [x, y, z] of hairPositions) {
      const hair = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 12, 10),
        redMat
      );
      hair.position.set(x, y, z);
      group.add(hair);
    }

    // === Red nose ===
    const nose = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 12, 10),
      redMat
    );
    nose.position.set(0, 1.95, 0.45);
    group.add(nose);

    // === Eyes ===
    const eyeWhite = this._material(0xffffff);
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), eyeWhite);
    eyeL.position.set(-0.15, 2.1, 0.42);
    group.add(eyeL);
    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 10), eyeWhite);
    eyeR.position.set(0.15, 2.1, 0.42);
    group.add(eyeR);

    // Pupils
    const pupilL = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), blackMat);
    pupilL.position.set(-0.15, 2.1, 0.5);
    group.add(pupilL);
    const pupilR = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), blackMat);
    pupilR.position.set(0.15, 2.1, 0.5);
    group.add(pupilR);

    // === Smile ===
    const smile = new THREE.Mesh(
      new THREE.TorusGeometry(0.15, 0.04, 8, 12, Math.PI),
      redMat
    );
    smile.position.set(0, 1.82, 0.42);
    smile.rotation.x = Math.PI;
    group.add(smile);

    // === Arms (red, on sides) ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.15, 0.8, 8),
        redMat
      );
      arm.position.set(side * 0.65, 1.0, 0);
      arm.rotation.z = side * 0.2;
      group.add(arm);

      // Yellow gloves
      const glove = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 12, 10),
        yellowMat
      );
      glove.position.set(side * 0.75, 0.6, 0);
      group.add(glove);
    }

    // === Big red shoes (flattened spheres) ===
    for (const side of [-1, 1]) {
      const shoe = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 12, 10),
        this._material(0xdd2222)
      );
      shoe.position.set(side * 0.25, 0.08, 0.1);
      shoe.scale.set(1.5, 0.5, 1.8);
      group.add(shoe);
    }

    // === Neck ===
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.18, 0.2, 8),
      whiteFaceMat
    );
    neck.position.y = 1.65;
    group.add(neck);

    return group;
  }

  _buildGrimace(char) {
    const group = new THREE.Group();
    const purpleMat = this._material(0x7733aa);
    const darkPurpleMat = this._material(0x552288);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x222222);
    const pinkMat = this._material(0xff6699);

    // === Large purple teardrop body (scaled sphere, wider at bottom) ===
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(1.1, 20, 16),
      purpleMat
    );
    body.position.y = 1.2;
    body.scale.set(1.3, 1.5, 1.2);
    group.add(body);

    // Bottom flatten
    const bottom = new THREE.Mesh(
      new THREE.SphereGeometry(1.0, 16, 12),
      darkPurpleMat
    );
    bottom.position.y = 0.15;
    bottom.scale.set(1.6, 0.3, 1.5);
    group.add(bottom);

    // === Small eyes ===
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), whiteMat);
    eyeL.position.set(-0.3, 2.0, 0.85);
    group.add(eyeL);
    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), whiteMat);
    eyeR.position.set(0.3, 2.0, 0.85);
    group.add(eyeR);

    // Pupils
    const pupilL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), blackMat);
    pupilL.position.set(-0.3, 2.0, 0.93);
    group.add(pupilL);
    const pupilR = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), blackMat);
    pupilR.position.set(0.3, 2.0, 0.93);
    group.add(pupilR);

    // === Happy smile (torus arc) ===
    const smile = new THREE.Mesh(
      new THREE.TorusGeometry(0.25, 0.06, 8, 16, Math.PI),
      blackMat
    );
    smile.position.set(0, 1.65, 0.9);
    smile.rotation.x = Math.PI;
    group.add(smile);

    // === Short stubby arms (small spheres on sides) ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.SphereGeometry(0.3, 12, 10),
        purpleMat
      );
      arm.position.set(side * 1.35, 1.4, 0);
      arm.scale.set(0.7, 1.0, 0.7);
      group.add(arm);

      // Hand
      const hand = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 10, 8),
        darkPurpleMat
      );
      hand.position.set(side * 1.55, 1.15, 0);
      group.add(hand);
    }

    // === Eyebrows (small arcs above eyes) ===
    const browL = new THREE.Mesh(
      new THREE.TorusGeometry(0.1, 0.03, 6, 8, Math.PI),
      darkPurpleMat
    );
    browL.position.set(-0.3, 2.2, 0.85);
    browL.rotation.x = Math.PI;
    group.add(browL);
    const browR = new THREE.Mesh(
      new THREE.TorusGeometry(0.1, 0.03, 6, 8, Math.PI),
      darkPurpleMat
    );
    browR.position.set(0.3, 2.2, 0.85);
    browR.rotation.x = Math.PI;
    group.add(browR);

    return group;
  }

  _buildBirdie(char) {
    const group = new THREE.Group();
    const pinkMat = this._material(0xff88cc);
    const yellowMat = this._material(0xffdd00);
    const orangeMat = this._material(0xff8800);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x222222);
    const blueMat = this._material(0x4488ff);

    // === Pink egg-shaped body ===
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(0.65, 16, 14),
      pinkMat
    );
    body.position.y = 0.9;
    body.scale.set(0.9, 1.2, 0.85);
    group.add(body);

    // === Head (smaller pink sphere on top) ===
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 16, 14),
      pinkMat
    );
    head.position.y = 1.6;
    head.scale.set(0.95, 1.0, 0.9);
    group.add(head);

    // === Yellow beak (cone pointing forward) ===
    const beak = new THREE.Mesh(
      new THREE.ConeGeometry(0.15, 0.35, 8),
      yellowMat
    );
    beak.position.set(0, 1.55, 0.45);
    beak.rotation.x = Math.PI / 2;
    group.add(beak);

    // Beak lower half
    const beakBottom = new THREE.Mesh(
      new THREE.ConeGeometry(0.12, 0.25, 8),
      orangeMat
    );
    beakBottom.position.set(0, 1.45, 0.42);
    beakBottom.rotation.x = Math.PI / 2;
    group.add(beakBottom);

    // === Feather tuft on head (small cones) ===
    for (let i = 0; i < 3; i++) {
      const tuft = new THREE.Mesh(
        new THREE.ConeGeometry(0.06, 0.25, 6),
        yellowMat
      );
      tuft.position.set(
        Math.cos(i * 0.5) * 0.1,
        2.0 + i * 0.05,
        Math.sin(i * 0.3) * 0.1
      );
      tuft.rotation.z = (i - 1) * 0.15;
      group.add(tuft);
    }

    // === Goggles (torus rings around eyes) ===
    const goggleMat = this._material(0xaaaaff);
    const goggleStrap = new THREE.Mesh(
      new THREE.TorusGeometry(0.38, 0.04, 6, 16),
      blackMat
    );
    goggleStrap.position.set(0, 1.65, 0);
    goggleStrap.rotation.y = Math.PI / 2;
    goggleStrap.scale.set(1, 0.7, 1);
    group.add(goggleStrap);

    // Goggle lenses
    for (const side of [-1, 1]) {
      const lens = new THREE.Mesh(
        new THREE.TorusGeometry(0.13, 0.04, 8, 12),
        goggleMat
      );
      lens.position.set(side * 0.18, 1.68, 0.32);
      group.add(lens);

      // Lens glass
      const glass = new THREE.Mesh(
        new THREE.CircleGeometry(0.1, 12),
        this._material(0x88ddff)
      );
      glass.position.set(side * 0.18, 1.68, 0.35);
      group.add(glass);

      // Eye behind goggle
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), whiteMat);
      eye.position.set(side * 0.18, 1.68, 0.3);
      group.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), blackMat);
      pupil.position.set(side * 0.18, 1.68, 0.36);
      group.add(pupil);
    }

    // === Bird feet (orange, flattened) ===
    for (const side of [-1, 1]) {
      const foot = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 8, 6),
        orangeMat
      );
      foot.position.set(side * 0.2, 0.08, 0.1);
      foot.scale.set(1, 0.3, 1.5);
      group.add(foot);

      // Toes
      for (let t = -1; t <= 1; t++) {
        const toe = new THREE.Mesh(
          new THREE.ConeGeometry(0.04, 0.15, 4),
          orangeMat
        );
        toe.position.set(side * 0.2 + t * 0.08, 0.05, 0.22);
        toe.rotation.x = Math.PI / 2;
        group.add(toe);
      }
    }

    // === Small wings on sides ===
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 10, 8),
        pinkMat
      );
      wing.position.set(side * 0.65, 1.0, 0);
      wing.scale.set(0.5, 1.0, 0.8);
      group.add(wing);
    }

    return group;
  }

  _buildBigMac(char) {
    const group = new THREE.Group();
    const bunMat = this._material(0xd4a017);
    const pattyMat = this._material(0x5a2d0c);
    const cheeseMat = this._material(0xffcc00);
    const lettuceMat = this._material(0x44aa33);
    const blueMat = this._material(0x1133aa);
    const goldMat = this._material(0xffd700);
    const blackMat = this._material(0x222222);
    const skinMat = this._material(0xffccaa);

    // === Burger-shaped armored body (3 cylinders stacked) ===
    // Bottom bun
    const bottomBun = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.7, 0.35, 20),
      bunMat
    );
    bottomBun.position.y = 0.2;
    group.add(bottomBun);

    // Lettuce layer
    const lettuce = new THREE.Mesh(
      new THREE.CylinderGeometry(0.88, 0.88, 0.1, 20),
      lettuceMat
    );
    lettuce.position.y = 0.42;
    group.add(lettuce);

    // Patty middle
    const patty = new THREE.Mesh(
      new THREE.CylinderGeometry(0.82, 0.82, 0.4, 20),
      pattyMat
    );
    patty.position.y = 0.65;
    group.add(patty);

    // Cheese layer
    const cheese = new THREE.Mesh(
      new THREE.CylinderGeometry(0.85, 0.85, 0.08, 20),
      cheeseMat
    );
    cheese.position.y = 0.88;
    group.add(cheese);

    // Top bun
    const topBun = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.85, 0.4, 20),
      bunMat
    );
    topBun.position.y = 1.1;
    group.add(topBun);

    // Sesame seeds on top bun
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const seed = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 6, 6),
        this._material(0xfff5e0)
      );
      seed.position.set(
        Math.cos(angle) * 0.45,
        1.32,
        Math.sin(angle) * 0.45
      );
      seed.scale.set(1.5, 0.5, 0.8);
      group.add(seed);
    }

    // === Head on top (Officer's face) ===
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.42, 16, 14),
      skinMat
    );
    head.position.y = 1.7;
    group.add(head);

    // === Police hat ===
    const hatBrim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.08, 16),
      blueMat
    );
    hatBrim.position.y = 2.0;
    group.add(hatBrim);

    const hatTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.4, 0.3, 16),
      blueMat
    );
    hatTop.position.y = 2.2;
    group.add(hatTop);

    // Hat badge
    const hatBadge = new THREE.Mesh(
      new THREE.CircleGeometry(0.1, 12),
      goldMat
    );
    hatBadge.position.set(0, 2.25, 0.36);
    group.add(hatBadge);

    // === Eyes ===
    const eyeWhite = this._material(0xffffff);
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), eyeWhite);
      eye.position.set(side * 0.15, 1.75, 0.36);
      group.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), blackMat);
      pupil.position.set(side * 0.15, 1.75, 0.42);
      group.add(pupil);
    }

    // Stern eyebrows
    for (const side of [-1, 1]) {
      const brow = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.04, 0.05),
        blackMat
      );
      brow.position.set(side * 0.15, 1.88, 0.38);
      brow.rotation.z = side * 0.15;
      group.add(brow);
    }

    // Mustache
    const mustache = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.06, 0.05),
      blackMat
    );
    mustache.position.set(0, 1.58, 0.38);
    group.add(mustache);

    // === Badge on chest ===
    const badge = new THREE.Mesh(
      new THREE.CircleGeometry(0.12, 12),
      goldMat
    );
    badge.position.set(0, 0.7, 0.86);
    group.add(badge);

    // Badge star
    const star = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.06, 0),
      this._material(0xffe000)
    );
    star.position.set(0, 0.7, 0.9);
    group.add(star);

    // === Strong arms (cylinders with sphere hands) ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.22, 0.9, 10),
        blueMat
      );
      arm.position.set(side * 0.85, 0.7, 0);
      arm.rotation.z = side * 0.15;
      group.add(arm);

      // Hand
      const hand = new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 12, 10),
        skinMat
      );
      hand.position.set(side * 0.95, 0.3, 0);
      group.add(hand);
    }

    // === Legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.18, 0.2, 8),
        blueMat
      );
      leg.position.set(side * 0.3, 0.08, 0);
      group.add(leg);

      // Boot
      const boot = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 10, 8),
        blackMat
      );
      boot.position.set(side * 0.3, 0.03, 0.05);
      boot.scale.set(1, 0.5, 1.4);
      group.add(boot);
    }

    return group;
  }

  _buildMacTonight(char) {
    const group = new THREE.Group();
    const moonMat = this._material(0xffeb3b);
    const moonGlowMat = this._material(0xfff59d);
    const blackMat = this._material(0x111111);
    const whiteMat = this._material(0xffffff);
    const suitMat = this._material(0x1a1a2e);
    const grayMat = this._material(0x888888);

    // === Crescent moon head ===
    // Main moon sphere
    const moonHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.55, 20, 16),
      moonMat
    );
    moonHead.position.y = 2.1;
    moonHead.scale.set(1, 1, 0.8);
    group.add(moonHead);

    // Create crescent by subtracting with a smaller offset sphere
    // (We approximate with a dark sphere slightly offset)
    const crescentCut = new THREE.Mesh(
      new THREE.SphereGeometry(0.48, 20, 16),
      blackMat
    );
    crescentCut.position.set(0.18, 2.15, 0);
    crescentCut.scale.set(1, 1, 0.8);
    group.add(crescentCut);

    // Moon glow
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 16, 12),
      moonGlowMat
    );
    glow.position.y = 2.1;
    glow.scale.set(1, 1, 0.7);
    glow.material = this._material(0xfff59d, { uRoughness: 0.9 });
    group.add(glow);

    // === Sunglasses (black flattened box across eyes) ===
    const sunglasses = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.15, 0.08),
      blackMat
    );
    sunglasses.position.set(0, 2.15, 0.45);
    group.add(sunglasses);

    // Sunglass lenses (shiny)
    for (const side of [-1, 1]) {
      const lens = new THREE.Mesh(
        new THREE.CircleGeometry(0.12, 12),
        this._material(0x222244)
      );
      lens.position.set(side * 0.18, 2.15, 0.5);
      group.add(lens);
    }

    // === Smooth mouth (cool smile) ===
    const mouth = new THREE.Mesh(
      new THREE.TorusGeometry(0.12, 0.03, 6, 12, Math.PI),
      blackMat
    );
    mouth.position.set(0, 1.95, 0.48);
    mouth.rotation.x = Math.PI;
    group.add(mouth);

    // === Black suit body (tapered cylinder) ===
    const torso = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.7, 1.2, 16),
      suitMat
    );
    torso.position.y = 0.9;
    group.add(torso);

    // Suit collar
    const collar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.5, 0.15, 16),
      whiteMat
    );
    collar.position.y = 1.5;
    group.add(collar);

    // Bow tie
    const bowTie = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.1, 0.08),
      this._material(0xcc2222)
    );
    bowTie.position.set(0, 1.45, 0.52);
    group.add(bowTie);

    // === Arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.15, 0.9, 8),
        suitMat
      );
      arm.position.set(side * 0.6, 0.9, 0);
      arm.rotation.z = side * 0.1;
      group.add(arm);

      // Jazz hands (spheres at arm ends)
      const hand = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 12, 10),
        whiteMat
      );
      hand.position.set(side * 0.68, 0.48, 0);
      group.add(hand);
    }

    // === Legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.18, 0.35, 8),
        suitMat
      );
      leg.position.set(side * 0.22, 0.2, 0);
      group.add(leg);

      // Shoes
      const shoe = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 10, 8),
        blackMat
      );
      shoe.position.set(side * 0.22, 0.03, 0.06);
      shoe.scale.set(1, 0.4, 1.5);
      group.add(shoe);
    }

    // === Neck ===
    const neck = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.15, 0.2, 8),
      moonMat
    );
    neck.position.y = 1.75;
    group.add(neck);

    return group;
  }

  _buildGenericCharacter(char) {
    const group = new THREE.Group();
    const mat = this._material(char.color || 0x888888);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 1.6, 8), mat);
    body.position.y = 0.8;
    group.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.4, 12, 10), this._material(0xffccaa));
    head.position.y = 1.8;
    group.add(head);
    return group;
  }

  // === Monster Meshes ===
  createMonsterMesh(monsterId) {
    const monster = MONSTERS[monsterId];
    if (!monster && !['hamburglar', 'hamburglar_elite'].includes(monsterId)) {
      return new THREE.Group();
    }

    const builders = {
      mcnugget_goblin: () => this._buildMcNuggetGoblin(monster),
      bigmac_brute: () => this._buildBigMacBrute(monster),
      applepie_dragon: () => this._buildApplePieDragon(monster),
      mcflurry_elemental: () => this._buildMcFlurryElemental(monster),
      mcrib_wraith: () => this._buildMcRibWraith(monster),
      quarterpounder_knight: () => this._buildQuarterPounderKnight(monster),
      filetfish_siren: () => this._buildFiletOFishSiren(monster),
      sundae_slime: () => this._buildSundaeSlime(monster),
      hamburglar: () => this._buildHamburglar(),
      hamburglar_elite: () => this._buildHamburglarElite(),
    };

    const builder = builders[monsterId];
    const group = builder ? builder() : this._buildGenericMonster(monster);
    group.userData.type = 'monster';
    group.userData.monsterId = monsterId;
    group.castShadow = true;
    group.receiveShadow = true;
    group.traverse(child => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return group;
  }

  _buildMcNuggetGoblin(monster) {
    const group = new THREE.Group();
    const goldMat = this._material(0xd4a017);
    const darkGoldMat = this._material(0xb8860b);
    const redMat = this._material(0xcc2222);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x111111);

    // === Golden brown lumpy body (deformed sphere) ===
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 16, 12),
      goldMat
    );
    body.position.y = 0.8;
    body.scale.set(0.8, 1.0, 0.7);
    group.add(body);

    // === Evil eyes ===
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), whiteMat);
      eye.position.set(side * 0.2, 1.0, 0.5);
      eye.scale.set(1, 1, 0.5);
      group.add(eye);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), redMat);
      pupil.position.set(side * 0.2, 1.0, 0.55);
      group.add(pupil);

      // Angry eyebrow
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.04, 0.05), blackMat);
      brow.position.set(side * 0.2, 1.15, 0.5);
      brow.rotation.z = side * 0.3;
      group.add(brow);
    }

    // === Sharp teeth mouth ===
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.08, 0.05),
      blackMat
    );
    mouth.position.set(0, 0.8, 0.55);
    group.add(mouth);

    // Teeth
    for (let i = 0; i < 3; i++) {
      const tooth = new THREE.Mesh(
        new THREE.ConeGeometry(0.03, 0.08, 4),
        whiteMat
      );
      tooth.position.set(-0.08 + i * 0.08, 0.82, 0.57);
      tooth.rotation.x = Math.PI;
      group.add(tooth);
    }

    // === Tiny wings ===
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(
        new THREE.ConeGeometry(0.15, 0.4, 4),
        darkGoldMat
      );
      wing.position.set(side * 0.65, 1.0, 0);
      wing.rotation.z = side * 1.2;
      wing.rotation.y = side * 0.3;
      group.add(wing);
    }

    // === Stubby legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.08, 0.3, 6),
        darkGoldMat
      );
      leg.position.set(side * 0.25, 0.2, 0);
      group.add(leg);
    }

    return group;
  }

  _buildBigMacBrute(monster) {
    const group = new THREE.Group();
    const bunMat = this._material(0xd4a017);
    const pattyMat = this._material(0x5a2d0c);
    const cheeseMat = this._material(0xffcc00);
    const lettuceMat = this._material(0x44aa33);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x111111);
    const redMat = this._material(0xcc2222);

    // === Large burger body (3 cylinders stacked) ===
    // Bottom bun
    const bottomBun = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 0.85, 0.4, 20),
      bunMat
    );
    bottomBun.position.y = 0.25;
    group.add(bottomBun);

    // Patty
    const patty = new THREE.Mesh(
      new THREE.CylinderGeometry(0.95, 0.95, 0.5, 20),
      pattyMat
    );
    patty.position.y = 0.65;
    group.add(patty);

    // Cheese
    const cheese = new THREE.Mesh(
      new THREE.CylinderGeometry(1.0, 0.95, 0.1, 20),
      cheeseMat
    );
    cheese.position.y = 0.93;
    group.add(cheese);

    // Lettuce
    const lettuce = new THREE.Mesh(
      new THREE.CylinderGeometry(1.05, 1.0, 0.12, 20),
      lettuceMat
    );
    lettuce.position.y = 1.05;
    group.add(lettuce);

    // Top bun
    const topBun = new THREE.Mesh(
      new THREE.CylinderGeometry(0.9, 1.05, 0.5, 20),
      bunMat
    );
    topBun.position.y = 1.35;
    group.add(topBun);

    // === Angry sesame seed eyes on top bun ===
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 10, 8),
        whiteMat
      );
      eye.position.set(side * 0.3, 1.6, 0.55);
      eye.scale.set(1.5, 0.8, 0.5);
      group.add(eye);

      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), blackMat);
      pupil.position.set(side * 0.3, 1.6, 0.62);
      group.add(pupil);

      // Angry eyebrow
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 0.06), blackMat);
      brow.position.set(side * 0.3, 1.75, 0.55);
      brow.rotation.z = side * 0.35;
      group.add(brow);
    }

    // === Angry mouth (jagged) ===
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.1, 0.06),
      blackMat
    );
    mouth.position.set(0, 1.4, 0.75);
    group.add(mouth);

    // Fangs
    for (let i = 0; i < 4; i++) {
      const fang = new THREE.Mesh(
        new THREE.ConeGeometry(0.04, 0.12, 4),
        whiteMat
      );
      fang.position.set(-0.15 + i * 0.1, 1.35, 0.78);
      fang.rotation.x = Math.PI;
      group.add(fang);
    }

    // === Sesame seeds scattered on top bun ===
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const r = 0.3 + Math.random() * 0.35;
      const seed = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6, 6),
        this._material(0xfff5e0)
      );
      seed.position.set(
        Math.cos(angle) * r,
        1.62 + Math.random() * 0.05,
        Math.sin(angle) * r
      );
      seed.scale.set(1.5, 0.5, 0.8);
      group.add(seed);
    }

    // === Large arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.25, 0.7, 10),
        pattyMat
      );
      arm.position.set(side * 1.0, 0.7, 0);
      arm.rotation.z = side * 0.2;
      group.add(arm);

      // Fist
      const fist = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 12, 10),
        pattyMat
      );
      fist.position.set(side * 1.1, 0.35, 0);
      group.add(fist);
    }

    return group;
  }

  _buildApplePieDragon(monster) {
    const group = new THREE.Group();
    const pastryMat = this._material(0xc45a11);
    const darkPastryMat = this._material(0x8b3a0a);
    const redMat = this._material(0xcc2222);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x111111);
    const cinnamonMat = this._material(0x8b4513);

    // === Rectangular pastry body (box) ===
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.7, 0.8),
      pastryMat
    );
    body.position.y = 0.9;
    group.add(body);

    // Pastry crust details (top ridge)
    const crust = new THREE.Mesh(
      new THREE.BoxGeometry(1.22, 0.1, 0.82),
      darkPastryMat
    );
    crust.position.y = 1.3;
    group.add(crust);

    // Crust crimps on edges
    for (let i = 0; i < 6; i++) {
      const crimp = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 8, 6),
        darkPastryMat
      );
      crimp.position.set(-0.55 + i * 0.22, 1.32, 0.4);
      group.add(crimp);
    }

    // === Head (front of dragon) ===
    const head = new THREE.Mesh(
      new THREE.BoxGeometry(0.6, 0.5, 0.5),
      pastryMat
    );
    head.position.set(0, 1.2, 0.65);
    group.add(head);

    // === Eyes ===
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), whiteMat);
      eye.position.set(side * 0.18, 1.35, 0.88);
      group.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), blackMat);
      pupil.position.set(side * 0.18, 1.35, 0.93);
      group.add(pupil);
    }

    // Nostrils
    for (const side of [-1, 1]) {
      const nostril = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6, 6),
        blackMat
      );
      nostril.position.set(side * 0.1, 1.15, 0.92);
      group.add(nostril);
    }

    // === Folded pastry wings (planes) ===
    const wingGeo = new THREE.PlaneGeometry(0.8, 0.6);
    for (const side of [-1, 1]) {
      const wing = new THREE.Mesh(wingGeo, darkPastryMat);
      wing.position.set(side * 0.8, 1.1, 0);
      wing.rotation.y = side * 0.5;
      wing.rotation.z = side * 0.3;
      group.add(wing);

      // Wing detail
      const wingDetail = new THREE.Mesh(
        new THREE.PlaneGeometry(0.6, 0.4),
        pastryMat
      );
      wingDetail.position.set(side * 0.75, 1.15, 0.05);
      wingDetail.rotation.y = side * 0.5;
      group.add(wingDetail);
    }

    // === Cinnamon tail ===
    const tail = new THREE.Mesh(
      new THREE.ConeGeometry(0.15, 0.8, 8),
      cinnamonMat
    );
    tail.position.set(0, 0.9, -0.6);
    tail.rotation.x = -Math.PI / 3;
    tail.rotation.z = Math.PI;
    group.add(tail);

    // Tail spikes
    for (let i = 0; i < 3; i++) {
      const spike = new THREE.Mesh(
        new THREE.ConeGeometry(0.05, 0.15, 4),
        darkPastryMat
      );
      spike.position.set(0, 1.2 - i * 0.2, -0.5 - i * 0.15);
      spike.rotation.x = -Math.PI / 3;
      group.add(spike);
    }

    // === Legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.15, 0.35, 8),
        darkPastryMat
      );
      leg.position.set(side * 0.35, 0.2, 0.2);
      group.add(leg);

      const claw = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 6),
        cinnamonMat
      );
      claw.position.set(side * 0.35, 0.05, 0.28);
      claw.scale.set(1, 0.4, 1.3);
      group.add(claw);
    }

    return group;
  }

  _buildMcFlurryElemental(monster) {
    const group = new THREE.Group();
    const iceMat = this._material(0x88ccff);
    const whiteMat = this._material(0xffffff);
    const darkMat = this._material(0x224466);
    const blackMat = this._material(0x111111);
    const cookieMat = this._material(0x2a1a0a);
    const cupMat = this._material(0xcccccc);

    // === Cup base ===
    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.45, 0.6, 16),
      cupMat
    );
    cup.position.y = 0.35;
    group.add(cup);

    // === Swirling ice cream body (sphere on top of cone) ===
    const iceCream = new THREE.Mesh(
      new THREE.SphereGeometry(0.65, 16, 14),
      whiteMat
    );
    iceCream.position.y = 0.9;
    iceCream.scale.set(1, 1.2, 1);
    group.add(iceCream);

    // Swirl peak
    const swirl = new THREE.Mesh(
      new THREE.ConeGeometry(0.25, 0.5, 12),
      whiteMat
    );
    swirl.position.y = 1.45;
    group.add(swirl);

    // Ice drizzle
    const drizzle = new THREE.Mesh(
      new THREE.TorusGeometry(0.5, 0.05, 6, 16),
      iceMat
    );
    drizzle.position.y = 0.95;
    drizzle.rotation.x = Math.PI / 2;
    group.add(drizzle);

    // === Oreo cookie eyes ===
    for (const side of [-1, 1]) {
      const cookie = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.12, 0.06, 12),
        cookieMat
      );
      cookie.position.set(side * 0.22, 1.0, 0.55);
      cookie.rotation.x = Math.PI / 2;
      group.add(cookie);

      // Cookie cream center
      const cream = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 0.02, 12),
        whiteMat
      );
      cream.position.set(side * 0.22, 1.0, 0.58);
      cream.rotation.x = Math.PI / 2;
      group.add(cream);

      // Eye on cookie
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), blackMat);
      pupil.position.set(side * 0.22, 1.0, 0.62);
      group.add(pupil);
    }

    // === Icy arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.08, 0.6, 8),
        iceMat
      );
      arm.position.set(side * 0.7, 0.8, 0);
      arm.rotation.z = side * 0.3;
      group.add(arm);

      // Ice crystal hand
      const hand = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.12, 0),
        iceMat
      );
      hand.position.set(side * 0.78, 0.5, 0);
      group.add(hand);
    }

    // === Frost mist particles around base ===
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const frost = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 6, 6),
        iceMat
      );
      frost.position.set(Math.cos(angle) * 0.6, 0.1, Math.sin(angle) * 0.6);
      frost.scale.set(1, 0.5, 1);
      group.add(frost);
    }

    return group;
  }

  _buildMcRibWraith(monster) {
    const group = new THREE.Group();
    const ribMat = this._material(0x8b0000);
    const darkRibMat = this._material(0x5a0000);
    const ghostMat = this._material(0xaa8888);
    const blackMat = this._material(0x111111);
    const whiteMat = this._material(0xffffff);
    const boneMat = this._material(0xe8e0d0);

    // === Rib-shaped body (elongated box with curve) ===
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(0.8, 1.2, 0.5),
      ribMat
    );
    body.position.y = 1.0;
    group.add(body);

    // Rib bones (horizontal cylinders across body)
    for (let i = 0; i < 5; i++) {
      const rib = new THREE.Mesh(
        new THREE.TorusGeometry(0.35, 0.05, 6, 12, Math.PI),
        boneMat
      );
      rib.position.set(0, 0.6 + i * 0.22, 0.26);
      rib.rotation.x = -Math.PI / 2;
      group.add(rib);
    }

    // BBQ sauce glaze
    const glaze = new THREE.Mesh(
      new THREE.BoxGeometry(0.82, 0.3, 0.52),
      darkRibMat
    );
    glaze.position.y = 0.8;
    group.add(glaze);

    // === Ghostly tail (lower body tapers and curves) ===
    const tail = new THREE.Mesh(
      new THREE.ConeGeometry(0.4, 0.6, 12),
      ghostMat
    );
    tail.position.y = 0.3;
    group.add(tail);

    // Ghostly wisps
    for (let i = 0; i < 4; i++) {
      const wisp = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 6),
        ghostMat
      );
      wisp.position.set(
        (Math.random() - 0.5) * 0.6,
        0.15 + Math.random() * 0.2,
        (Math.random() - 0.5) * 0.4
      );
      wisp.scale.set(1, 1.5, 0.5);
      group.add(wisp);
    }

    // === Hollow eyes ===
    for (const side of [-1, 1]) {
      const eyeSocket = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 10, 8),
        blackMat
      );
      eyeSocket.position.set(side * 0.2, 1.35, 0.25);
      group.add(eyeSocket);

      // Glowing pupil inside
      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 8, 6),
        this._material(0xff4444)
      );
      glow.position.set(side * 0.2, 1.35, 0.3);
      group.add(glow);
    }

    // === Mouth ===
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.3, 0.15, 0.05),
      blackMat
    );
    mouth.position.set(0, 1.1, 0.25);
    group.add(mouth);

    // === Ghostly arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.06, 0.5, 6),
        ghostMat
      );
      arm.position.set(side * 0.5, 1.0, 0);
      arm.rotation.z = side * 0.4;
      group.add(arm);
    }

    return group;
  }

  _buildQuarterPounderKnight(monster) {
    const group = new THREE.Group();
    const bunMat = this._material(0xd4a017);
    const pattyMat = this._material(0x5a2d0c);
    const cheeseMat = this._material(0xffcc00);
    const armorMat = this._material(0x6a5acd);
    const steelMat = this._material(0x888899);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x111111);
    const goldMat = this._material(0xffd700);

    // === Burger body ===
    // Bottom bun
    const bottomBun = new THREE.Mesh(
      new THREE.CylinderGeometry(0.8, 0.7, 0.3, 16),
      bunMat
    );
    bottomBun.position.y = 0.2;
    group.add(bottomBun);

    // Patty
    const patty = new THREE.Mesh(
      new THREE.CylinderGeometry(0.78, 0.78, 0.4, 16),
      pattyMat
    );
    patty.position.y = 0.5;
    group.add(patty);

    // Cheese
    const cheese = new THREE.Mesh(
      new THREE.CylinderGeometry(0.82, 0.78, 0.08, 16),
      cheeseMat
    );
    cheese.position.y = 0.72;
    group.add(cheese);

    // Top bun
    const topBun = new THREE.Mesh(
      new THREE.CylinderGeometry(0.75, 0.82, 0.35, 16),
      bunMat
    );
    topBun.position.y = 0.95;
    group.add(topBun);

    // === Knight's helmet (sphere + visor) ===
    const helmet = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 16, 14),
      steelMat
    );
    helmet.position.y = 1.5;
    group.add(helmet);

    // Helmet visor slit
    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.08, 0.05),
      blackMat
    );
    visor.position.set(0, 1.5, 0.4);
    group.add(visor);

    // Glowing eyes through visor
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 8, 6),
        this._material(0x44aaff)
      );
      eye.position.set(side * 0.12, 1.5, 0.43);
      group.add(eye);
    }

    // Helmet crest
    const crest = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.25, 0.06),
      goldMat
    );
    crest.position.set(0, 1.85, 0);
    group.add(crest);

    // === Sword (thin box) ===
    const swordBlade = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 1.2, 0.02),
      steelMat
    );
    swordBlade.position.set(0.85, 0.8, 0);
    swordBlade.rotation.z = -0.2;
    group.add(swordBlade);

    // Sword hilt
    const hilt = new THREE.Mesh(
      new THREE.BoxGeometry(0.25, 0.06, 0.06),
      goldMat
    );
    hilt.position.set(0.8, 1.35, 0);
    hilt.rotation.z = -0.2;
    group.add(hilt);

    // Sword pommel
    const pommel = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 6),
      goldMat
    );
    pommel.position.set(0.76, 1.45, 0);
    group.add(pommel);

    // === Shield (on left arm) ===
    const shield = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, 0.08, 12),
      armorMat
    );
    shield.position.set(-0.85, 0.7, 0.1);
    shield.rotation.x = Math.PI / 2;
    shield.rotation.z = 0.2;
    group.add(shield);

    // Shield emblem
    const emblem = new THREE.Mesh(
      new THREE.CircleGeometry(0.15, 12),
      goldMat
    );
    emblem.position.set(-0.85, 0.7, 0.15);
    group.add(emblem);

    // === Arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.18, 0.7, 8),
        steelMat
      );
      arm.position.set(side * 0.7, 0.5, 0);
      arm.rotation.z = side * 0.15;
      group.add(arm);
    }

    // === Legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.13, 0.15, 0.2, 8),
        steelMat
      );
      leg.position.set(side * 0.25, 0.08, 0);
      group.add(leg);
    }

    return group;
  }

  _buildFiletOFishSiren(monster) {
    const group = new THREE.Group();
    const fishMat = this._material(0x4a90d9);
    const lightFishMat = this._material(0x6ab0f9);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x111111);
    const finMat = this._material(0x3a7ac9);
    const cheeseMat = this._material(0xffcc00);

    // === Fish body (ellipsoid) ===
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 16, 14),
      fishMat
    );
    body.position.y = 0.9;
    body.scale.set(1.1, 1.3, 0.8);
    group.add(body);

    // Belly (lighter)
    const belly = new THREE.Mesh(
      new THREE.SphereGeometry(0.6, 14, 12),
      lightFishMat
    );
    belly.position.set(0, 0.8, 0.15);
    belly.scale.set(0.9, 1.1, 0.5);
    group.add(belly);

    // Cheese slice on top
    const cheese = new THREE.Mesh(
      new THREE.BoxGeometry(1.0, 0.05, 0.5),
      cheeseMat
    );
    cheese.position.set(0, 1.45, 0);
    cheese.rotation.x = -0.1;
    group.add(cheese);

    // === Head ===
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 14),
      fishMat
    );
    head.position.set(0, 1.7, 0.1);
    head.scale.set(1.0, 0.9, 0.9);
    group.add(head);

    // === Eyes ===
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), whiteMat);
      eye.position.set(side * 0.2, 1.85, 0.45);
      group.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), blackMat);
      pupil.position.set(side * 0.2, 1.85, 0.52);
      group.add(pupil);
    }

    // === Singing mouth (open, with teeth) ===
    const mouth = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 10, 8),
      blackMat
    );
    mouth.position.set(0, 1.55, 0.5);
    mouth.scale.set(1.2, 0.8, 0.5);
    group.add(mouth);

    // === Fins (flat planes) ===
    // Top fin
    const topFin = new THREE.Mesh(
      new THREE.PlaneGeometry(0.5, 0.4),
      finMat
    );
    topFin.position.set(0, 1.4, -0.3);
    topFin.rotation.x = -Math.PI / 4;
    group.add(topFin);

    // Side fins
    for (const side of [-1, 1]) {
      const fin = new THREE.Mesh(
        new THREE.PlaneGeometry(0.4, 0.35),
        finMat
      );
      fin.position.set(side * 0.7, 0.9, 0);
      fin.rotation.y = side * Math.PI / 3;
      group.add(fin);
    }

    // === Fish tail ===
    const tail = new THREE.Mesh(
      new THREE.ConeGeometry(0.3, 0.6, 8),
      finMat
    );
    tail.position.set(0, 0.6, -0.7);
    tail.rotation.x = -Math.PI / 2;
    tail.scale.set(1, 1, 0.4);
    group.add(tail);

    // Tail fins
    for (const side of [-1, 1]) {
      const tailFin = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 0.3),
        finMat
      );
      tailFin.position.set(side * 0.1, 0.6, -0.95);
      tailFin.rotation.y = side * 0.5;
      tailFin.rotation.x = Math.PI / 2;
      group.add(tailFin);
    }

    // === Arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.06, 0.5, 6),
        fishMat
      );
      arm.position.set(side * 0.6, 1.0, 0.1);
      arm.rotation.z = side * 0.3;
      group.add(arm);
    }

    return group;
  }

  _buildSundaeSlime(monster) {
    const group = new THREE.Group();
    const pinkMat = this._material(0xff69b4);
    const creamMat = this._material(0xfff8e7);
    const redMat = this._material(0xcc1111);
    const brownMat = this._material(0x8b4513);
    const whiteMat = this._material(0xffffff);
    const blackMat = this._material(0x111111);

    // === Melting ice cream body (half sphere, flattened) ===
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(0.8, 16, 12),
      creamMat
    );
    body.position.y = 0.4;
    body.scale.set(1.3, 0.8, 1.3);
    group.add(body);

    // Strawberry syrup drips
    const syrup = new THREE.Mesh(
      new THREE.SphereGeometry(0.7, 14, 10),
      pinkMat
    );
    syrup.position.y = 0.55;
    syrup.scale.set(1.1, 0.6, 1.1);
    group.add(syrup);

    // Dripping effect (small blobs around base)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const drip = new THREE.Mesh(
        new THREE.SphereGeometry(0.1 + Math.random() * 0.06, 8, 6),
        pinkMat
      );
      drip.position.set(
        Math.cos(angle) * 0.85,
        0.15 + Math.random() * 0.1,
        Math.sin(angle) * 0.85
      );
      drip.scale.set(1, 1.5 + Math.random(), 1);
      group.add(drip);
    }

    // === Cherry on top (small red sphere) ===
    const cherry = new THREE.Mesh(
      new THREE.SphereGeometry(0.15, 12, 10),
      redMat
    );
    cherry.position.y = 1.0;
    group.add(cherry);

    // Cherry stem
    const stem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 0.15, 4),
      brownMat
    );
    stem.position.y = 1.15;
    group.add(stem);

    // === Eyes ===
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), whiteMat);
      eye.position.set(side * 0.25, 0.55, 0.7);
      group.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), blackMat);
      pupil.position.set(side * 0.25, 0.55, 0.78);
      group.add(pupil);
    }

    // === Mouth ===
    const mouth = new THREE.Mesh(
      new THREE.TorusGeometry(0.15, 0.04, 6, 12, Math.PI),
      blackMat
    );
    mouth.position.set(0, 0.35, 0.7);
    mouth.rotation.x = Math.PI;
    group.add(mouth);

    // === Sprinkles on body ===
    const sprinkleColors = [0xff4444, 0x44ff44, 0x4444ff, 0xffff44, 0xff44ff, 0x44ffff];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const r = 0.5 + Math.random() * 0.3;
      const sprinkle = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.12, 0.04),
        this._material(sprinkleColors[i % sprinkleColors.length])
      );
      sprinkle.position.set(
        Math.cos(angle) * r,
        0.65 + Math.random() * 0.15,
        Math.sin(angle) * r
      );
      sprinkle.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      group.add(sprinkle);
    }

    return group;
  }

  _buildHamburglar() {
    const group = new THREE.Group();
    const blackMat = this._material(0x111111);
    const whiteMat = this._material(0xffffff);
    const redMat = this._material(0xcc2222);
    const skinMat = this._material(0xffccaa);
    const brownMat = this._material(0x654321);
    const grayMat = this._material(0x666666);

    // === Striped black/white body ===
    const stripeCount = 4;
    const stripeHeight = 1.0 / stripeCount;
    for (let i = 0; i < stripeCount; i++) {
      const mat = i % 2 === 0 ? blackMat : whiteMat;
      const stripe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.45, 0.55, stripeHeight, 12),
        mat
      );
      stripe.position.y = 0.3 + i * stripeHeight + stripeHeight / 2;
      group.add(stripe);
    }

    // === Head ===
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.4, 16, 14),
      skinMat
    );
    head.position.y = 1.7;
    group.add(head);

    // === Mask over eyes (black band) ===
    const mask = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 0.18, 0.1),
      blackMat
    );
    mask.position.set(0, 1.8, 0.3);
    group.add(mask);

    // Mask eye holes
    for (const side of [-1, 1]) {
      const hole = new THREE.Mesh(
        new THREE.CircleGeometry(0.05, 8),
        skinMat
      );
      hole.position.set(side * 0.15, 1.8, 0.36);
      group.add(hole);
    }

    // === Fedora hat ===
    const hatBrim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.5, 0.06, 16),
      blackMat
    );
    hatBrim.position.y = 2.05;
    group.add(hatBrim);

    const hatTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.3, 0.32, 0.35, 16),
      blackMat
    );
    hatTop.position.y = 2.25;
    group.add(hatTop);

    // Hat band
    const hatBand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.33, 0.33, 0.08, 16),
      redMat
    );
    hatBand.position.y = 2.12;
    group.add(hatBand);

    // === Cape (plane behind body) ===
    const cape = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 1.6),
      blackMat
    );
    cape.position.set(0, 1.0, -0.35);
    group.add(cape);

    // Cape interior (red)
    const capeInner = new THREE.Mesh(
      new THREE.PlaneGeometry(1.1, 1.5),
      redMat
    );
    capeInner.position.set(0, 1.0, -0.34);
    group.add(capeInner);

    // === Arms ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.1, 0.12, 0.7, 8),
        blackMat
      );
      arm.position.set(side * 0.55, 0.9, 0);
      arm.rotation.z = side * 0.15;
      group.add(arm);

      // Glove
      const glove = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 10, 8),
        whiteMat
      );
      glove.position.set(side * 0.62, 0.55, 0);
      group.add(glove);
    }

    // === Legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.14, 0.3, 8),
        blackMat
      );
      leg.position.set(side * 0.2, 0.15, 0);
      group.add(leg);

      // Shoes
      const shoe = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 10, 8),
        blackMat
      );
      shoe.position.set(side * 0.2, 0.03, 0.06);
      shoe.scale.set(1, 0.4, 1.4);
      group.add(shoe);
    }

    // === Smirk mouth ===
    const mouth = new THREE.Mesh(
      new THREE.BoxGeometry(0.2, 0.04, 0.05),
      blackMat
    );
    mouth.position.set(0.05, 1.58, 0.36);
    mouth.rotation.z = -0.1;
    group.add(mouth);

    return group;
  }

  _buildHamburglarElite() {
    const group = new THREE.Group();
    const blackMat = this._material(0x111111);
    const whiteMat = this._material(0xffffff);
    const purpleMat = this._material(0x6633aa);
    const darkPurpleMat = this._material(0x441188);
    const skinMat = this._material(0xffccaa);
    const redMat = this._material(0xcc2222);
    const glowMat = this._material(0xff44ff);

    // === Purple armored body (striped pattern with purple) ===
    const stripeCount = 4;
    const stripeHeight = 1.2 / stripeCount;
    for (let i = 0; i < stripeCount; i++) {
      const mat = i % 2 === 0 ? purpleMat : darkPurpleMat;
      const stripe = new THREE.Mesh(
        new THREE.CylinderGeometry(0.5, 0.65, stripeHeight, 12),
        mat
      );
      stripe.position.y = 0.3 + i * stripeHeight + stripeHeight / 2;
      group.add(stripe);
    }

    // Armor plates
    const chestPlate = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.6, 0.3),
      darkPurpleMat
    );
    chestPlate.position.set(0, 0.8, 0.3);
    group.add(chestPlate);

    // === Head (bigger) ===
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 16, 14),
      skinMat
    );
    head.position.y = 1.9;
    group.add(head);

    // === Mask over eyes ===
    const mask = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.2, 0.12),
      blackMat
    );
    mask.position.set(0, 2.0, 0.32);
    group.add(mask);

    // === Glowing eyes ===
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 10, 8),
        glowMat
      );
      eye.position.set(side * 0.15, 2.0, 0.4);
      group.add(eye);
    }

    // === Fedora hat (bigger, purple) ===
    const hatBrim = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.55, 0.08, 16),
      darkPurpleMat
    );
    hatBrim.position.y = 2.3;
    group.add(hatBrim);

    const hatTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.34, 0.36, 0.4, 16),
      darkPurpleMat
    );
    hatTop.position.y = 2.5;
    group.add(hatTop);

    // Hat band (glowing)
    const hatBand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.37, 0.37, 0.08, 16),
      glowMat
    );
    hatBand.position.y = 2.36;
    group.add(hatBand);

    // === Cape (purple, bigger) ===
    const cape = new THREE.Mesh(
      new THREE.PlaneGeometry(1.4, 1.8),
      darkPurpleMat
    );
    cape.position.set(0, 1.1, -0.4);
    group.add(cape);

    // Cape interior (glowing purple)
    const capeInner = new THREE.Mesh(
      new THREE.PlaneGeometry(1.3, 1.7),
      purpleMat
    );
    capeInner.position.set(0, 1.1, -0.39);
    group.add(capeInner);

    // === Arms (bigger, with armor) ===
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.16, 0.8, 8),
        purpleMat
      );
      arm.position.set(side * 0.6, 1.0, 0);
      arm.rotation.z = side * 0.15;
      group.add(arm);

      // Shoulder armor
      const shoulder = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 10, 8),
        darkPurpleMat
      );
      shoulder.position.set(side * 0.55, 1.35, 0);
      group.add(shoulder);

      // Glove
      const glove = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 10, 8),
        blackMat
      );
      glove.position.set(side * 0.68, 0.6, 0);
      group.add(glove);
    }

    // === Legs ===
    for (const side of [-1, 1]) {
      const leg = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.17, 0.3, 8),
        darkPurpleMat
      );
      leg.position.set(side * 0.22, 0.15, 0);
      group.add(leg);

      // Boots
      const boot = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 10, 8),
        blackMat
      );
      boot.position.set(side * 0.22, 0.03, 0.06);
      boot.scale.set(1, 0.4, 1.4);
      group.add(boot);
    }

    // === Evil grin ===
    const mouth = new THREE.Mesh(
      new THREE.TorusGeometry(0.18, 0.04, 6, 12, Math.PI),
      blackMat
    );
    mouth.position.set(0, 1.75, 0.38);
    mouth.rotation.x = Math.PI;
    mouth.rotation.z = Math.PI;
    group.add(mouth);

    // Scale up slightly (elite is bigger)
    group.scale.setScalar(1.15);

    return group;
  }

  _buildGenericMonster(monster) {
    const group = new THREE.Group();
    const mat = this._material(monster?.color || 0x885522);
    const body = new THREE.Mesh(new THREE.SphereGeometry(1.0, 12, 10), mat);
    body.position.y = 1.0;
    body.scale.set(1.2, 1.5, 1.0);
    group.add(body);
    const eyeMat = this._material(0xffffff);
    const eyeL = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), eyeMat);
    eyeL.position.set(-0.3, 1.3, 0.8);
    group.add(eyeL);
    const eyeR = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), eyeMat);
    eyeR.position.set(0.3, 1.3, 0.8);
    group.add(eyeR);
    return group;
  }

  // === Environment / Terrain ===
  createGround(regionData) {
    const color = typeof regionData === 'number' ? regionData : (regionData?.groundColor || 0x4a7a3a);
    const group = new THREE.Group();

    // Main ground plane with vertex displacement for natural terrain
    const geo = new THREE.PlaneGeometry(200, 200, 64, 64);
    const positions = geo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i);
      const y = positions.getY(i);
      // Gentle rolling hills
      const h = Math.sin(x * 0.1) * Math.cos(y * 0.1) * 0.5 +
                Math.sin(x * 0.05 + 2) * Math.cos(y * 0.07) * 1.0;
      positions.setZ(i, h);
    }
    geo.computeVertexNormals();

    const mat = this._material(color);
    const ground = new THREE.Mesh(geo, mat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    group.add(ground);

    // Path / road down the center — color based on region
    const pathColor = this._getPathColor(color);
    const pathMat = this._material(pathColor);
    const path = new THREE.Mesh(new THREE.PlaneGeometry(6, 200, 1, 20), pathMat);
    path.rotation.x = -Math.PI / 2;
    path.position.y = 0.05;
    path.receiveShadow = true;
    group.add(path);

    // Scattered grass tufts / region decorations
    const grassMat = this._material(this._darkenColor(color, 0.15));
    for (let i = 0; i < 80; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 10 + Math.random() * 80;
      const tuft = new THREE.Mesh(
        new THREE.ConeGeometry(0.15 + Math.random() * 0.1, 0.4 + Math.random() * 0.3, 4),
        grassMat
      );
      tuft.position.set(Math.cos(angle) * dist, 0.2, Math.sin(angle) * dist);
      tuft.rotation.y = Math.random() * Math.PI;
      tuft.castShadow = true;
      group.add(tuft);
    }

    // Flowers (colored dots)
    const flowerColors = this._getFlowerColors(color);
    for (let i = 0; i < 40; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 15 + Math.random() * 70;
      const fc = flowerColors[Math.floor(Math.random() * flowerColors.length)];
      const flower = new THREE.Mesh(
        new THREE.SphereGeometry(0.12, 6, 4),
        this._material(fc)
      );
      flower.position.set(Math.cos(angle) * dist, 0.25, Math.sin(angle) * dist);
      group.add(flower);
    }

    group.receiveShadow = true;
    return group;
  }

  _getPathColor(groundColor) {
    // Light sandy path for most regions
    const hex = groundColor.toString(16).padStart(6, '0');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    // Blend toward a warm sandy color
    const pr = Math.round(r * 0.4 + 0xc4 * 0.6);
    const pg = Math.round(g * 0.4 + 0xa8 * 0.6);
    const pb = Math.round(b * 0.4 + 0x7a * 0.6);
    return (pr << 16) | (pg << 8) | pb;
  }

  _darkenColor(color, amount) {
    const hex = color.toString(16).padStart(6, '0');
    const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - Math.round(255 * amount));
    const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - Math.round(255 * amount));
    const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - Math.round(255 * amount));
    return (r << 16) | (g << 8) | b;
  }

  _getFlowerColors(groundColor) {
    // Warm-region flowers
    return [0xff4466, 0xffdd00, 0xff8800, 0xffffff, 0xaa44ff];
  }

  createTree(seed = 0) {
    // Ensure seed is a number (hash strings to numbers)
    if (typeof seed === 'string') {
      seed = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    }
    const rng = new SeededRandom(seed);
    const group = new THREE.Group();
    const trunkMat = this._material(0x4a2a0a);
    const leafMat = this._material(0x2a5a2a + Math.floor(rng.next() * 0x222222));

    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 2, 6), trunkMat);
    trunk.position.y = 1;
    trunk.castShadow = true;
    group.add(trunk);

    const leaves = new THREE.Mesh(new THREE.SphereGeometry(1.0 + rng.next() * 0.5, 8, 6), leafMat);
    leaves.position.y = 2.5;
    leaves.castShadow = true;
    group.add(leaves);
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
    const bodyMat = this._material(0x4488cc);
    const headMat = this._material(0xffccaa);

    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.6, 1.4, 8), bodyMat);
    body.position.y = 0.7;
    group.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), headMat);
    head.position.y = 1.6;
    group.add(head);

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
