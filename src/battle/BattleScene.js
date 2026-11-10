// BattleScene.js — 3D battle arena using THREE.js

import * as THREE from 'three';
import { easeOutQuad, easeOutCubic } from '../utils/easing.js';

// Default region themes — used when regionData doesn't specify colors
const REGION_THEMES = {
  fry_valley: { floor: 0xcc6622, sky: 0xff8844, accent: 0xffaa00 },
  burger_highlands: { floor: 0x8b6914, sky: 0xddaa66, accent: 0xffdd44 },
  mcflurry_tundra: { floor: 0x88bbdd, sky: 0xddeeff, accent: 0xaaccff },
  happy_meal_forest: { floor: 0x447744, sky: 0x88aa66, accent: 0xffcc44 },
  drive_thru_desert: { floor: 0xddcc88, sky: 0xffeecc, accent: 0xeebb44 },
  mccafe_springs: { floor: 0x664433, sky: 0x998866, accent: 0xffcc88 },
  play_place_plains: { floor: 0x66aa44, sky: 0x88ccff, accent: 0xff6699 },
  golden_arches_castle: { floor: 0x886622, sky: 0x442200, accent: 0xffd700 },
  default: { floor: 0x444466, sky: 0x223344, accent: 0xffaa00 },
};

export default class BattleScene {
  /**
   * @param {THREE.Scene} [scene] — an existing THREE.Scene to add to,
   *   or null to create one internally
   */
  constructor(scene = null) {
    this.scene = scene || new THREE.Scene();
    this.scene.background = new THREE.Color(0x1a1a2e);

    // Camera — positioned for a classic JRPG battle view
    this.camera = new THREE.PerspectiveCamera(
      50,
      1, // aspect set by renderer externally
      0.1,
      100
    );
    this.camera.position.set(0, 4, 10);
    this.camera.lookAt(0, 1, 0);

    // Arena group — all battle arena objects
    this.arenaGroup = new THREE.Group();
    this.scene.add(this.arenaGroup);

    // Party positions — left side, 3 slots facing right
    this.partyPositions = [
      new THREE.Vector3(-4, 0, 2),
      new THREE.Vector3(-4, 0, 0),
      new THREE.Vector3(-4, 0, -2),
    ];

    // Enemy positions — right side, up to 5 slots
    this.enemyPositions = [
      new THREE.Vector3(4, 0, 3),
      new THREE.Vector3(4, 0, 1.5),
      new THREE.Vector3(4, 0, 0),
      new THREE.Vector3(4, 0, -1.5),
      new THREE.Vector3(4, 0, -3),
    ];

    // Temporary effects — { mesh, duration, elapsed, updateFn? }
    this.effects = [];

    // Region theme data
    this.regionData = null;

    // Lighting
    this._lights = [];

    // Tracked objects for disposal
    this._disposableGeometries = [];
    this._disposableMaterials = [];
  }

  /**
   * Set up the battle arena for a given region.
   * @param {object} regionData — { id, name, colors?: { floor, sky, accent } }
   */
  setupArena(regionData = {}) {
    this.regionData = regionData;

    // Determine theme colors
    const themeKey = regionData.id || 'default';
    const theme = REGION_THEMES[themeKey] || REGION_THEMES.default;
    const colors = regionData.colors || theme;

    // === Platform ===
    const platformGeo = new THREE.CylinderGeometry(7, 7.5, 0.5, 32);
    const platformMat = new THREE.MeshToonMaterial({ color: colors.floor });
    const platform = new THREE.Mesh(platformGeo, platformMat);
    platform.position.y = -0.25;
    platform.receiveShadow = true;
    this.arenaGroup.add(platform);
    this._trackDisposable(platformGeo, platformMat);

    // Inner ring — accent color
    const ringGeo = new THREE.RingGeometry(5, 5.5, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: colors.accent,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.02;
    this.arenaGroup.add(ring);
    this._trackDisposable(ringGeo, ringMat);

    // === Sky Dome ===
    const skyGeo = new THREE.SphereGeometry(40, 32, 16);
    const skyMat = new THREE.MeshBasicMaterial({
      color: colors.sky,
      side: THREE.BackSide,
      fog: false,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.arenaGroup.add(sky);
    this._trackDisposable(skyGeo, skyMat);

    // Gradient overlay — a large transparent sphere to add depth
    const gradGeo = new THREE.SphereGeometry(35, 32, 16);
    const gradMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide,
      fog: false,
    });
    const grad = new THREE.Mesh(gradGeo, gradMat);
    this.arenaGroup.add(grad);
    this._trackDisposable(gradGeo, gradMat);

    // === Ground Details ===
    // Scatter some small decorative pillars/rocks around the arena edge
    const detailCount = 6;
    for (let i = 0; i < detailCount; i++) {
      const angle = (i / detailCount) * Math.PI * 2;
      const radius = 8;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const rockGeo = new THREE.DodecahedronGeometry(0.3 + Math.random() * 0.3, 0);
      const rockMat = new THREE.MeshToonMaterial({
        color: new THREE.Color(colors.floor).multiplyScalar(0.7),
      });
      const rock = new THREE.Mesh(rockGeo, rockMat);
      rock.position.set(x, 0.1, z);
      rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      this.arenaGroup.add(rock);
      this._trackDisposable(rockGeo, rockMat);
    }

    // === Lighting ===
    this._setupLighting(colors);

    // === Fog for depth ===
    this.scene.fog = new THREE.Fog(colors.sky, 15, 35);
  }

  /**
   * Set up dramatic lighting.
   * @param {object} colors — theme colors
   * @private
   */
  _setupLighting(colors) {
    // Remove any existing lights
    for (const light of this._lights) {
      this.arenaGroup.remove(light);
    }
    this._lights = [];

    // Strong directional light from above-front
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(3, 10, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 30;
    dirLight.shadow.camera.left = -10;
    dirLight.shadow.camera.right = 10;
    dirLight.shadow.camera.top = 10;
    dirLight.shadow.camera.bottom = -10;
    this.arenaGroup.add(dirLight);
    this._lights.push(dirLight);

    // Subtle hemisphere light for ambient fill
    const hemiLight = new THREE.HemisphereLight(colors.sky, colors.floor, 0.5);
    hemiLight.position.set(0, 8, 0);
    this.arenaGroup.add(hemiLight);
    this._lights.push(hemiLight);

    // Accent spotlight from behind for rim lighting
    const spotLight = new THREE.SpotLight(colors.accent, 0.8, 20, Math.PI / 4, 0.5, 1);
    spotLight.position.set(-3, 6, -5);
    spotLight.target.position.set(0, 1, 0);
    this.arenaGroup.add(spotLight);
    this.arenaGroup.add(spotLight.target);
    this._lights.push(spotLight);
  }

  /**
   * Place party member meshes in their positions, facing the enemies.
   * @param {BattleEntity[]} partyMembers
   */
  placeParty(partyMembers) {
    for (let i = 0; i < partyMembers.length && i < this.partyPositions.length; i++) {
      const member = partyMembers[i];
      const pos = this.partyPositions[i];
      member.mesh.position.copy(pos);
      // Face toward the enemy side (positive X)
      member.mesh.rotation.y = -Math.PI / 2;
      this.arenaGroup.add(member.mesh);
    }
  }

  /**
   * Place enemy meshes in their positions, facing the party.
   * @param {BattleEntity[]} enemies
   */
  placeEnemies(enemies) {
    for (let i = 0; i < enemies.length && i < this.enemyPositions.length; i++) {
      const enemy = enemies[i];
      const pos = this.enemyPositions[i];
      enemy.mesh.position.copy(pos);
      // Face toward the party side (negative X)
      enemy.mesh.rotation.y = Math.PI / 2;
      this.arenaGroup.add(enemy.mesh);
    }
  }

  /**
   * Get a party position Vector3 by index.
   * @param {number} index
   * @returns {THREE.Vector3}
   */
  getPartyPosition(index) {
    if (index < 0 || index >= this.partyPositions.length) {
      return new THREE.Vector3(-4, 0, 0);
    }
    return this.partyPositions[index].clone();
  }

  /**
   * Get an enemy position Vector3 by index.
   * @param {number} index
   * @returns {THREE.Vector3}
   */
  getEnemyPosition(index) {
    if (index < 0 || index >= this.enemyPositions.length) {
      return new THREE.Vector3(4, 0, 0);
    }
    return this.enemyPositions[index].clone();
  }

  /**
   * Add a temporary effect mesh that auto-removes after `duration` seconds.
   * @param {THREE.Object3D} mesh
   * @param {number} duration — seconds
   * @param {function} [updateFn] — optional (t, dt) => void, t = elapsed/duration
   */
  addEffect(mesh, duration, updateFn = null) {
    this.arenaGroup.add(mesh);
    this.effects.push({
      mesh,
      duration,
      elapsed: 0,
      updateFn,
    });
  }

  /**
   * Create a burst of small sphere particles at a position.
   * @param {THREE.Vector3} position
   * @param {number} color
   * @param {number} count
   * @param {number} speed — units per second
   * @param {number} lifetime — seconds
   */
  addParticleBurst(position, color, count = 12, speed = 3, lifetime = 0.6) {
    const particles = [];
    const particleGroup = new THREE.Group();
    particleGroup.position.copy(position);

    const geo = new THREE.SphereGeometry(0.08, 6, 4);
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 1 });

    for (let i = 0; i < count; i++) {
      const particle = new THREE.Mesh(geo, mat.clone());
      // Random direction
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const dir = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta),
        Math.cos(phi) * 0.5 + 0.3, // bias upward
        Math.sin(phi) * Math.sin(theta)
      ).normalize();

      particle.userData.velocity = dir.multiplyScalar(speed * (0.5 + Math.random() * 0.5));
      particle.userData.gravity = -6;
      particles.push(particle);
      particleGroup.add(particle);
    }

    this._trackDisposable(geo, mat);

    const updateFn = (t, dt) => {
      for (const p of particles) {
        p.userData.velocity.y += p.userData.gravity * dt;
        p.position.addScaledVector(p.userData.velocity, dt);
        p.material.opacity = 1 - t;
        p.scale.setScalar(1 - t * 0.5);
      }
    };

    this.addEffect(particleGroup, lifetime, updateFn);
  }

  /**
   * Create a beam/lance effect from one position to another.
   * @param {THREE.Vector3} from
   * @param {THREE.Vector3} to
   * @param {number} color
   * @param {number} duration — seconds
   */
  addLanceEffect(from, to, color, duration = 0.4) {
    const direction = new THREE.Vector3().subVectors(to, from);
    const length = direction.length();
    const midpoint = new THREE.Vector3().addVectors(from, to).multiplyScalar(0.5);

    const beamGroup = new THREE.Group();
    beamGroup.position.copy(midpoint);

    // Orient the beam toward the target
    const lookMatrix = new THREE.Matrix4().lookAt(
      from,
      to,
      new THREE.Vector3(0, 1, 0)
    );
    beamGroup.quaternion.setFromRotationMatrix(lookMatrix);

    // Core beam — cylinder
    const coreGeo = new THREE.CylinderGeometry(0.08, 0.08, length, 8);
    coreGeo.rotateZ(Math.PI / 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    beamGroup.add(core);

    // Outer glow — slightly larger, more transparent
    const glowGeo = new THREE.CylinderGeometry(0.18, 0.18, length, 8);
    glowGeo.rotateZ(Math.PI / 2);
    const glowMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    beamGroup.add(glow);

    this._trackDisposable(coreGeo, coreMat, glowGeo, glowMat);

    const updateFn = (t) => {
      const alpha = 1 - easeOutCubic(t);
      coreMat.opacity = 0.9 * alpha;
      glowMat.opacity = 0.3 * alpha;
      // Scale beam from source to target (grow then shrink)
      const scale = t < 0.3 ? t / 0.3 : 1 - (t - 0.3) / 0.7;
      beamGroup.scale.set(scale, 1, 1);
    };

    this.addEffect(beamGroup, duration, updateFn);
  }

  /**
   * Create an expanding ring effect on the ground.
   * @param {THREE.Vector3} position
   * @param {number} color
   * @param {number} maxRadius
   * @param {number} duration — seconds
   */
  addRingEffect(position, color, maxRadius = 2, duration = 0.6) {
    const ringGeo = new THREE.RingGeometry(0.2, 0.4, 24);
    const ringMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(position);
    ring.position.y = 0.05;

    this._trackDisposable(ringGeo, ringMat);

    const updateFn = (t) => {
      const scale = 1 + easeOutQuad(t) * (maxRadius / 0.4);
      ring.scale.set(scale, scale, 1);
      ringMat.opacity = 0.8 * (1 - t);
    };

    this.addEffect(ring, duration, updateFn);
  }

  /**
   * Create a swirling aura effect around a target mesh.
   * @param {THREE.Object3D} targetMesh
   * @param {number} color
   * @param {number} duration — seconds
   */
  addAuraEffect(targetMesh, color, duration = 1.0) {
    const auraGroup = new THREE.Group();

    // Create several small orbiting particles
    const particleCount = 8;
    const particles = [];
    const geo = new THREE.SphereGeometry(0.12, 8, 6);
    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.7,
    });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geo, mat.clone());
      const angle = (i / particleCount) * Math.PI * 2;
      particle.userData.angle = angle;
      particle.userData.radius = 0.8;
      particle.userData.speed = 3 + Math.random() * 2;
      particle.userData.yOffset = Math.random() * 0.5;
      particles.push(particle);
      auraGroup.add(particle);
    }

    this._trackDisposable(geo, mat);

    // Position at target
    const startPos = targetMesh.position.clone();

    const updateFn = (t, dt) => {
      for (const p of particles) {
        p.userData.angle += p.userData.speed * dt;
        p.position.x = Math.cos(p.userData.angle) * p.userData.radius;
        p.position.z = Math.sin(p.userData.angle) * p.userData.radius;
        p.position.y = 0.5 + Math.sin(p.userData.angle * 2) * 0.3 + p.userData.yOffset;

        // Follow target if it moves
        const targetPos = targetMesh.position;
        auraGroup.position.x = targetPos.x;
        auraGroup.position.y = targetPos.y;
        auraGroup.position.z = targetPos.z;

        // Fade out
        const fade = 1 - easeOutCubic(t);
        p.material.opacity = 0.7 * fade;
      }
    };

    this.addEffect(auraGroup, duration, updateFn);
  }

  /**
   * Update all effects: move particles, age them, remove expired.
   * @param {number} dt — delta time in seconds
   */
  update(dt) {
    const remaining = [];

    for (const effect of this.effects) {
      effect.elapsed += dt;
      const t = Math.min(effect.elapsed / effect.duration, 1);

      if (effect.updateFn) {
        effect.updateFn(t, dt);
      }

      if (t >= 1) {
        // Remove from scene and dispose
        this.arenaGroup.remove(effect.mesh);
        effect.mesh.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => m.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      } else {
        remaining.push(effect);
      }
    }

    this.effects = remaining;
  }

  /**
   * Track geometries and materials for later disposal.
   * @param {...(THREE.BufferGeometry|THREE.Material)} items
   * @private
   */
  _trackDisposable(...items) {
    for (const item of items) {
      if (item.isBufferGeometry) {
        this._disposableGeometries.push(item);
      } else if (item.isMaterial) {
        this._disposableMaterials.push(item);
      }
    }
  }

  /**
   * Remove all objects from the scene, dispose geometries and materials.
   */
  dispose() {
    // Remove all effects
    for (const effect of this.effects) {
      this.arenaGroup.remove(effect.mesh);
      effect.mesh.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
    }
    this.effects = [];

    // Remove lights
    for (const light of this._lights) {
      this.arenaGroup.remove(light);
    }
    this._lights = [];

    // Dispose tracked geometries and materials
    for (const geo of this._disposableGeometries) {
      geo.dispose();
    }
    for (const mat of this._disposableMaterials) {
      mat.dispose();
    }
    this._disposableGeometries = [];
    this._disposableMaterials = [];

    // Remove arena group children
    while (this.arenaGroup.children.length > 0) {
      const child = this.arenaGroup.children[0];
      this.arenaGroup.remove(child);
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      }
    }

    // Remove arena group from scene
    if (this.arenaGroup.parent) {
      this.arenaGroup.parent.remove(this.arenaGroup);
    }

    // Clear fog
    this.scene.fog = null;
  }
}
