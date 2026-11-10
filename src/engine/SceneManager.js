// SceneManager — Manages active THREE.Scene and transitions between game states
// States: title, overworld, battle, menu

import * as THREE from 'three';
import { lerp, clamp, smoothstep } from '../utils/math.js';

export class SceneManager {
  constructor(renderer, cameraController, assetManager) {
    this.renderer = renderer;
    this.cameraController = cameraController;
    this.assetManager = assetManager;

    this.currentState = 'title';
    this.scenes = {
      title: new THREE.Scene(),
      overworld: new THREE.Scene(),
      battle: new THREE.Scene(),
      menu: new THREE.Scene(),
    };

    // Fog for each scene
    this.sceneFog = {};

    // Transition state
    this.transitioning = false;
    this.transitionT = 0;
    this.transitionDuration = 0.5; // seconds
    this.transitionFromState = null;
    this.transitionToState = null;
    this.pendingData = null;

    // Black overlay for fade transitions
    this.overlayGeometry = new THREE.PlaneGeometry(2, 2);
    this.overlayMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
    });
    this.overlay = new THREE.Mesh(this.overlayGeometry, this.overlayMaterial);
    this.overlay.position.z = -0.1;
    // Overlay camera (separate from game camera)
    this.overlayScene = new THREE.Scene();
    this.overlayCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.overlayScene.add(this.overlay);

    // Current region and battle data
    this.currentRegion = null;
    this.battleData = null;

    // Background sky settings per scene
    this.skySettings = {};

    // Setup title scene with a basic environment
    this._setupTitleScene();
  }

  _setupTitleScene() {
    const scene = this.scenes.title;
    // Increased ambient light for visibility
    const ambient = new THREE.AmbientLight(0x8899bb, 1.2);
    scene.add(ambient);

    // Hemisphere light for better color balance
    const hemi = new THREE.HemisphereLight(0xaaaaff, 0x443366, 0.6);
    hemi.position.set(0, 20, 0);
    scene.add(hemi);

    // Directional light (key light)
    const directional = new THREE.DirectionalLight(0xfff4dd, 1.5);
    directional.position.set(-5, 10, -3);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 2048;
    directional.shadow.mapSize.height = 2048;
    scene.add(directional);

    // Fill light from opposite side
    const fill = new THREE.DirectionalLight(0xffaadd, 0.5);
    fill.position.set(5, 8, 3);
    scene.add(fill);

    // Warmer fog color
    scene.fog = new THREE.FogExp2(0x2a1a3a, 0.015);

    // Sky gradient background using a large sphere
    const skyGeo = new THREE.SphereGeometry(200, 32, 16);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x4a3a6a) },
        bottomColor: { value: new THREE.Color(0x6a4a5a) },
        offset: { value: 33 },
        exponent: { value: 0.6 },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const sky = new THREE.Mesh(skyGeo, skyMat);
    sky.userData.persistent = true;
    scene.add(sky);

    // Add some decorative objects for the title screen
    // Ground plane — visible warm color
    const groundMat = this.assetManager.shaderManager.createToonMaterial(0x5a4a3a);
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      groundMat
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);

    // A few golden arches in the distance
    const arches = this.assetManager.createStructure('golden_arches');
    arches.position.set(0, -2, -10);
    scene.add(arches);
  }

  setState(state, data = {}) {
    if (this.currentState === state && !this.transitioning) return;

    this.transitioning = true;
    this.transitionT = 0;
    this.transitionFromState = this.currentState;
    this.transitionToState = state;
    this.pendingData = data;
  }

  _completeTransition() {
    this.currentState = this.transitionToState;
    this.transitioning = false;
    this.transitionT = 0;
    this.transitionFromState = null;
    this.transitionToState = null;

    // Apply pending data
    if (this.pendingData) {
      if (this.pendingData.region) {
        this.currentRegion = this.pendingData.region;
        this._setupOverworldScene(this.pendingData.region);
      }
      if (this.pendingData.battle) {
        this.battleData = this.pendingData.battle;
        this._setupBattleScene(this.pendingData.battle);
      }
      if (this.pendingData.menu) {
        this._setupMenuScene(this.pendingData.menu);
      }
    }
    this.pendingData = null;

    // Update camera mode
    if (this.currentState === 'title') {
      this.cameraController.setMode('title');
    } else if (this.currentState === 'overworld') {
      this.cameraController.setMode('overworld');
    } else if (this.currentState === 'battle') {
      this.cameraController.setMode('battle');
    } else if (this.currentState === 'menu') {
      this.cameraController.setMode('menu');
    }
  }

  _setupOverworldScene(regionData) {
    const scene = this.scenes.overworld;

    // Clear existing scene content (keep lights)
    const toRemove = [];
    scene.children.forEach(child => {
      if (!child.userData.persistent) toRemove.push(child);
    });
    toRemove.forEach(child => scene.remove(child));

    // Ambient light — brighter
    const ambient = new THREE.AmbientLight(regionData.ambientColor || 0x6677aa, 0.8);
    ambient.userData.persistent = true;
    scene.add(ambient);

    // Hemisphere light for better color balance
    const hemi = new THREE.HemisphereLight(0xaaaaff, 0x665544, 0.5);
    hemi.position.set(0, 20, 0);
    hemi.userData.persistent = true;
    scene.add(hemi);

    // Directional light
    const directional = new THREE.DirectionalLight(regionData.lightColor || 0xfff4dd, 1.3);
    directional.position.set(-5, 10, -3);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 2048;
    directional.shadow.mapSize.height = 2048;
    directional.shadow.camera.near = 0.5;
    directional.shadow.camera.far = 50;
    directional.shadow.camera.left = -40;
    directional.shadow.camera.right = 40;
    directional.shadow.camera.top = 40;
    directional.shadow.camera.bottom = -40;
    directional.userData.persistent = true;
    scene.add(directional);

    // Fog
    scene.fog = new THREE.FogExp2(regionData.fogColor || 0x88aacc, regionData.fogDensity || 0.02);

    // Ground
    const ground = this.assetManager.createGround(regionData);
    scene.add(ground);

    // Decorations — trees
    if (regionData.decorations) {
      const deco = regionData.decorations;
      const treeCount = deco.trees || 0;
      const rockCount = deco.rocks || 0;
      const structCount = deco.structures || 0;

      // Trees
      for (let i = 0; i < treeCount; i++) {
        const tree = this.assetManager.createTree(regionData.id);
        const angle = (i / treeCount) * Math.PI * 2 + Math.random() * 0.5;
        const dist = (regionData.size || 80) * 0.35 + Math.random() * 10;
        tree.position.x = Math.cos(angle) * dist;
        tree.position.z = Math.sin(angle) * dist;
        scene.add(tree);
      }

      // Rocks
      for (let i = 0; i < rockCount; i++) {
        const rock = this.assetManager.createRock(0.5 + Math.random() * 1.0);
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * (regionData.size || 80) * 0.4;
        rock.position.x = Math.cos(angle) * dist;
        rock.position.z = Math.sin(angle) * dist;
        scene.add(rock);
      }

      // Structures
      if (regionData.isHub) {
        // Town structures
        const townStructures = ['shop', 'inn', 'house', 'house', 'golden_arches'];
        townStructures.forEach((type, i) => {
          const struct = this.assetManager.createStructure(type);
          const angle = (i / townStructures.length) * Math.PI * 2;
          const dist = 12;
          struct.position.x = Math.cos(angle) * dist;
          struct.position.z = Math.sin(angle) * dist;
          struct.lookAt(0, struct.position.y, 0);
          scene.add(struct);
        });

        // Save point
        const savePoint = this.assetManager.createSavePoint();
        savePoint.position.set(0, 0, -10);
        scene.add(savePoint);
      } else {
        for (let i = 0; i < structCount; i++) {
          const types = regionData.decorations.cactus
            ? ['cactus', 'cactus', 'house']
            : ['house', 'golden_arches', 'castle_wall'];
          const type = types[i % types.length];
          const struct = this.assetManager.createStructure(type);
          const angle = Math.random() * Math.PI * 2;
          const dist = (regionData.size || 80) * 0.3 + Math.random() * 10;
          struct.position.x = Math.cos(angle) * dist;
          struct.position.z = Math.sin(angle) * dist;
          scene.add(struct);
        }
      }

      // Castle walls for castle region
      if (regionData.decorations.castle) {
        for (let i = 0; i < 4; i++) {
          const wall = this.assetManager.createStructure('castle_wall');
          const angle = (i / 4) * Math.PI * 2;
          const dist = (regionData.size || 80) * 0.35;
          wall.position.x = Math.cos(angle) * dist;
          wall.position.z = Math.sin(angle) * dist;
          wall.lookAt(0, wall.position.y, 0);
          scene.add(wall);
        }
        for (let i = 0; i < 2; i++) {
          const tower = this.assetManager.createStructure('castle_tower');
          tower.position.set(i === 0 ? -20 : 20, 0, -30);
          scene.add(tower);
        }
      }

      // Tubes for playplace
      if (regionData.decorations.labyrinth) {
        for (let i = 0; i < 15; i++) {
          const tube = this.assetManager.createStructure('tube');
          const angle = Math.random() * Math.PI * 2;
          const dist = Math.random() * (regionData.size || 80) * 0.3;
          tube.position.x = Math.cos(angle) * dist;
          tube.position.y = 1 + Math.random() * 2;
          tube.position.z = Math.sin(angle) * dist;
          tube.rotation.y = Math.random() * Math.PI;
          scene.add(tube);
        }
      }
    }

    // NPCs
    if (regionData.npcs) {
      regionData.npcs.forEach(npc => {
        const mesh = this.assetManager.createNPCMesh(npc.name);
        mesh.position.set(npc.x, 0, npc.z);
        mesh.userData.npcData = npc;
        scene.add(mesh);
      });
    }

    // Treasures
    if (regionData.treasures) {
      regionData.treasures.forEach(treasure => {
        const chest = this.assetManager.createTreasureChest();
        chest.position.set(treasure.x, 0, treasure.z);
        chest.userData.treasureData = treasure;
        scene.add(chest);
      });
    }

    // Set camera region
    this.cameraController.setRegion(regionData);
  }

  _setupBattleScene(battleData) {
    const scene = this.scenes.battle;

    // Clear scene
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }

    // Lights — brighter for visibility
    const ambient = new THREE.AmbientLight(0x6677aa, 0.7);
    scene.add(ambient);
    const directional = new THREE.DirectionalLight(0xfff4dd, 1.5);
    directional.position.set(-5, 10, -3);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 1024;
    directional.shadow.mapSize.height = 1024;
    scene.add(directional);

    // Battle arena — circular platform
    const arenaMat = this.assetManager.shaderManager.createToonMaterial(
      this.currentRegion?.groundColor || 0x4a3a2a
    );
    const arena = new THREE.Mesh(
      new THREE.CylinderGeometry(8, 8, 0.5, 32),
      arenaMat
    );
    arena.position.y = -0.25;
    arena.receiveShadow = true;
    scene.add(arena);

    // Sky backdrop — gradient via fog
    scene.fog = new THREE.FogExp2(this.currentRegion?.fogColor || 0x88aacc, 0.03);

    // Background environment ring
    const ringMat = this.assetManager.shaderManager.createToonMaterial(
      this.currentRegion?.color || 0x4a7c3a
    );
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(8, 15, 32),
      ringMat
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = -0.24;
    scene.add(ring);

    // Position combatants and set battle camera
    const positions = [];

    // Party positions (left side)
    if (battleData.party) {
      battleData.party.forEach((member, i) => {
        if (member.mesh) {
          const x = -3 - i * 1.5;
          const z = 2 - i * 0.5;
          member.mesh.position.set(x, 0, z);
          member.mesh.lookAt(0, member.mesh.position.y, 0);
          scene.add(member.mesh);
          positions.push(new THREE.Vector3(x, 1, z));
        }
      });
    }

    // Enemy positions (right side)
    if (battleData.enemies) {
      battleData.enemies.forEach((enemy, i) => {
        if (enemy.mesh) {
          const x = 3 + i * 1.5;
          const z = 2 - i * 0.5;
          enemy.mesh.position.set(x, 0, z);
          enemy.mesh.lookAt(0, enemy.mesh.position.y, 0);
          scene.add(enemy.mesh);
          positions.push(new THREE.Vector3(x, 1, z));
        }
      });
    }

    // Set battle camera positions
    this.cameraController.setBattleCombatants(positions);
  }

  _setupMenuScene(menuData) {
    const scene = this.scenes.menu;

    // Clear scene
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }

    // Simple dark background
    const bg = new THREE.Mesh(
      new THREE.PlaneGeometry(100, 100),
      new THREE.MeshBasicMaterial({ color: 0x1a1a2e })
    );
    bg.position.z = -10;
    scene.add(bg);

    scene.fog = new THREE.FogExp2(0x1a1a2e, 0.05);
  }

  getScene() {
    if (this.transitioning) {
      return this.scenes[this.transitionFromState] || this.scenes[this.currentState];
    }
    return this.scenes[this.currentState];
  }

  getCamera() {
    return this.cameraController.camera;
  }

  update(dt) {
    if (this.transitioning) {
      this.transitionT += dt / this.transitionDuration;
      const t = clamp(this.transitionT, 0, 1);

      if (t < 0.5) {
        // Fade to black
        this.overlayMaterial.opacity = smoothstep(0, 1, t * 2);
      } else {
        // Fade from black
        this.overlayMaterial.opacity = smoothstep(1, 0, (t - 0.5) * 2);
        // Switch scene at midpoint
        if (t >= 0.5 && this.currentState !== this.transitionToState) {
          this._completeTransition();
        }
      }

      if (t >= 1) {
        this.transitioning = false;
        this.overlayMaterial.opacity = 0;
      }
    }
  }

  render() {
    // Render the current scene
    this.renderer.render(this.getScene(), this.getCamera());

    // Render overlay on top for transitions
    if (this.overlayMaterial.opacity > 0) {
      this.renderer.autoClear = false;
      this.renderer.render(this.overlayScene, this.overlayCamera);
      this.renderer.autoClear = true;
    }
  }
}

export default SceneManager;
