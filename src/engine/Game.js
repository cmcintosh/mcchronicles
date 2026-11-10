// Game.js — Main game class. Owns renderer, SceneManager, CameraController, AssetManager, ShaderManager.
// Manages game states, main loop, input, game state data, and save/load.
// Integrates UI, Battle, World, Nemesis, and Systems layers.

import * as THREE from 'three';
import { ShaderManager } from './ShaderManager.js';
import { AssetManager } from './AssetManager.js';
import CameraController from './CameraController.js';
import { SceneManager } from './SceneManager.js';
import InputSystem from '../systems/InputSystem.js';
import AudioSystem from '../systems/AudioSystem.js';
import SaveSystem from '../systems/SaveSystem.js';
import QuestSystem from '../systems/QuestSystem.js';
import ProgressionSystem from '../systems/ProgressionSystem.js';
import { TweenManager } from '../utils/easing.js';
import { clamp, lerp, xpForLevel, levelFromXP, formatNumber } from '../utils/math.js';
import { generateNemesisName } from '../utils/procedural.js';
import { CHARACTERS, STARTING_PARTY, RECRUIT_ORDER, CHARACTER_UNLOCK } from '../data/characters.js';
import { MONSTERS, getEncounter } from '../data/monsters.js';
import { REGIONS, REGION_CONNECTIONS, REGION_ORDER } from '../data/regions.js';
import { ITEMS, SHOPS } from '../data/items.js';
import { STORY_BEATS, SIDE_QUESTS } from '../data/story.js';
import { NemesisSystem } from '../nemesis/NemesisSystem.js';
import TitleScreen from '../ui/TitleScreen.js';
import DialogueBox from '../ui/DialogueBox.js';
import HUD from '../ui/HUD.js';
import MainMenu from '../ui/MainMenu.js';
import BattleUI from '../battle/BattleUI.js';
import TutorialPopup from '../ui/TutorialPopup.js';
import { ABILITIES } from '../data/abilities.js';

export const GameState = {
  TITLE: 'title',
  OVERWORLD: 'overworld',
  BATTLE: 'battle',
  MENU: 'menu',
  DIALOGUE: 'dialogue',
  GAME_OVER: 'game_over',
  VICTORY: 'victory',
};

export class Game {
  constructor(canvas) {
    this.canvas = canvas || document.getElementById('game-canvas');

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    );
    this.camera.position.set(0, 10, 15);

    // Core engine systems
    this.shaderManager = new ShaderManager();
    this.assetManager = new AssetManager(this.shaderManager);
    this.cameraController = new CameraController(this.camera);
    this.sceneManager = new SceneManager(this.renderer, this.cameraController, this.assetManager);
    this.inputSystem = new InputSystem();
    this.audioSystem = new AudioSystem();
    this.saveSystem = new SaveSystem();
    this.tweenManager = new TweenManager();

    // Game systems
    this.questSystem = new QuestSystem();
    this.questSystem.init();
    this.nemesisSystem = new NemesisSystem();
    this.nemesisSystem.init();
    this.progressionSystem = new ProgressionSystem();

    // Clock
    this.clock = new THREE.Clock();
    this.lastTime = 0;

    // Game state
    this.state = GameState.TITLE;
    this.previousState = null;

    // Player data
    this.party = [];
    this.partyMemberIds = [...STARTING_PARTY];
    this.recruitedIds = [...STARTING_PARTY];
    this.gold = 100;
    this.inventory = {};
    this.playTime = 0;
    this.steps = 0;

    // Familiars
    this.familiars = [];
    this.equippedFamiliars = {}; // characterId -> familiarId

    // Current region
    this.currentRegionId = 'fry_valley';
    this.currentRegionData = null;

    // Player position in overworld
    this.playerPosition = new THREE.Vector3(0, 0, 0);
    this.playerRotation = 0;
    this.playerMesh = null;
    this.playerSpeed = 5.0;
    this.playerSprintSpeed = 8.0;

    // Encounter tracking
    this.stepCount = 0;
    this.encounterCooldown = 0;

    // Dialogue state
    this.currentDialogue = null;
    this.dialogueIndex = 0;
    this.dialogueComplete = false;

    // Battle data
    this.battleData = null;

    // Save slot
    this.saveSlot = 'mcchronicles_save_1';

    // UI components
    this.titleScreen = new TitleScreen();
    this.dialogueBox = new DialogueBox();
    this.hud = new HUD();
    this.mainMenu = new MainMenu();

    // Bind methods
    this._onResize = this._onResize.bind(this);
    this._loop = this._loop.bind(this);

    // Resize listener
    window.addEventListener('resize', this._onResize);

    // Set up title screen callback
    this.titleScreen.onSelect((action) => {
      this._handleTitleSelect(action);
    });

    // Start at title
    this.sceneManager.setState('title');
    this.titleScreen.show();

    // Audio init (deferred until user interaction)
    this._audioInitialized = false;

    // Model preloading
    this._modelsPreloaded = false;
    this._preloadingModels = false;
  }

  /**
   * Preload all GLB models, showing a loading indicator.
   * Called when starting a new game or loading a save.
   */
  async _preloadModels() {
    // Models are now procedural (no GLB loading needed)
    this._modelsPreloaded = true;
  }

  _showLoadingScreen(text) {
    // Create or update loading overlay
    let overlay = document.getElementById('model-loading-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'model-loading-overlay';
      overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: linear-gradient(135deg, #1a0a2a, #2a1a3a);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: 'Courier New', monospace;
        color: #ffcc00;
      `;
      const spinner = document.createElement('div');
      spinner.id = 'loading-spinner';
      spinner.style.cssText = `
        width: 60px; height: 60px;
        border: 4px solid #333;
        border-top-color: #ffcc00;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
      `;
      const style = document.createElement('style');
      style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(style);
      overlay.appendChild(spinner);

      const label = document.createElement('div');
      label.id = 'loading-label';
      label.style.fontSize = '24px';
      label.textContent = text;
      overlay.appendChild(label);

      document.body.appendChild(overlay);
    } else {
      const label = document.getElementById('loading-label');
      if (label) label.textContent = text;
      overlay.style.display = 'flex';
    }
  }

  _hideLoadingScreen() {
    const overlay = document.getElementById('model-loading-overlay');
    if (overlay) {
      overlay.style.display = 'none';
    }
  }

  _initAudio() {
    if (this._audioInitialized) return;
    this._audioInitialized = true;
    try {
      this.audioSystem.init().then(() => {
        this.audioSystem.playMusic('title');
      }).catch(e => {
        console.warn('Audio init failed:', e);
      });
    } catch (e) {
      console.warn('Audio init failed:', e);
    }
  }

  _handleTitleSelect(action) {
    this._initAudio();

    switch (action) {
      case 'new_game':
      case 'newgame':
        this._startNewGame();
        break;
      case 'continue':
        if (data && data.slot !== undefined) {
          this.saveSlot = `mcchronicles_save_${data.slot}`;
        }
        if (this.saveSystem.hasSave(this.saveSlot)) {
          this.titleScreen.hide();
          this.load().catch(e => console.warn('Load failed:', e));
        }
        break;
      case 'settings':
        // Settings handled in title screen
        break;
    }
  }

  // === Main Loop ===
  start() {
    this.clock.start();
    requestAnimationFrame(this._loop);
  }

  _loop() {
    const time = this.clock.getElapsedTime();
    const dt = Math.min(time - this.lastTime, 0.1);
    this.lastTime = time;

    this.update(dt);
    this.render();

    requestAnimationFrame(this._loop);
  }

  update(dt) {
    // Update input
    this.inputSystem.update();

    // Update tweens
    this.tweenManager.update(performance.now());

    // Update shader time
    this.shaderManager.updateTime(this.clock.getElapsedTime());

    // Update scene manager (transitions)
    this.sceneManager.update(dt);

    // Update camera
    this.cameraController.update(dt);

    // State-specific updates
    switch (this.state) {
      case GameState.TITLE:
        this._updateTitle(dt);
        break;
      case GameState.OVERWORLD:
        this._updateOverworld(dt);
        break;
      case GameState.BATTLE:
        this._updateBattle(dt);
        break;
      case GameState.MENU:
        this._updateMenu(dt);
        break;
      case GameState.DIALOGUE:
        this._updateDialogue(dt);
        break;
      case GameState.GAME_OVER:
        this._updateGameOver(dt);
        break;
      case GameState.VICTORY:
        this._updateVictory(dt);
        break;
    }

    // Update animated objects in current scene
    this._updateAnimations(dt);

    this.playTime += dt;
  }

  render() {
    this.sceneManager.render();
  }

  // === Title State ===
  _updateTitle(dt) {
    // Title screen handles its own input via callbacks
    // But also allow Enter/Space to start new game
    if (this.inputSystem.wasJustPressed('Enter') || this.inputSystem.wasJustPressed('Space')) {
      if (!this.titleScreen._isVisible) return;
      this._initAudio();
      this._startNewGame(); // already async, fire and forget
    }
  }

  async _startNewGame() {
    // Preload 3D models
    await this._preloadModels();

    // Initialize party
    this.party = this.partyMemberIds.map(id => this._createPartyMember(id));
    this.gold = 100;
    this.inventory = { mc_flurry_potion: 3, ketchup_packet: 1 };
    this.questSystem = new QuestSystem();
    this.questSystem.init();
    this.nemesisSystem = new NemesisSystem();
    this.nemesisSystem.init();

    // Hide title
    this.titleScreen.hide();

    // Start in fry_valley
    this.changeRegion('fry_valley').catch(e => console.error('Region change failed:', e));

    // Show opening dialogue
    this.startDialogue(STORY_BEATS.game_start);

    // Show tutorial popup for first-time players (after dialogue)
    setTimeout(() => {
      TutorialPopup.showIfNeeded(this.container);
    }, 2000);

    // Play overworld music
    this.audioSystem.playMusic('overworld', 'fry_valley');
  }

  // === Overworld State ===
  _updateOverworld(dt) {
    // Movement
    const move = this.inputSystem.getMovementVector();
    const isSprinting = this.inputSystem.isPressed('ShiftLeft') || this.inputSystem.isPressed('ShiftRight');
    const speed = isSprinting ? this.playerSprintSpeed : this.playerSpeed;

    if (move.x !== 0 || move.z !== 0) {
      this.playerPosition.x += move.x * speed * dt;
      this.playerPosition.z += move.z * speed * dt;

      // Clamp to region bounds
      const regionSize = this.currentRegionData?.size || 80;
      const half = regionSize / 2 - 2;
      this.playerPosition.x = clamp(this.playerPosition.x, -half, half);
      this.playerPosition.z = clamp(this.playerPosition.z, -half, half);

      // Update rotation to face movement direction
      this.playerRotation = Math.atan2(move.x, move.z);

      // Step counting for encounters
      this.stepCount += speed * dt;
      this.steps += 1;

      // Check for random encounter
      if (this.encounterCooldown <= 0 && this.currentRegionData?.encounterRate > 0) {
        if (this.stepCount > 5 && Math.random() < this.currentRegionData.encounterRate) {
          this.stepCount = 0;
          this._triggerEncounter();
        }
      }
    }

    // Update player mesh
    if (this.playerMesh) {
      this.playerMesh.position.copy(this.playerPosition);
      this.playerMesh.rotation.y = this.playerRotation;

      // Idle bob animation
      const bob = Math.sin(this.clock.getElapsedTime() * 4) * 0.05;
      this.playerMesh.position.y = bob;
    }

    // Camera target follows player
    this.cameraController.setTarget({ position: this.playerPosition });

    // Encounter cooldown
    if (this.encounterCooldown > 0) {
      this.encounterCooldown -= dt;
    }

    // Check for NPC interaction
    if (this.inputSystem.wasJustPressed('Enter') || this.inputSystem.wasJustPressed('Space')) {
      this._checkNPCInteraction();
    }

    // Open menu
    if (this.inputSystem.wasJustPressed('Escape')) {
      this.openMenu();
    }

    // Check story events
    this._checkStoryEvents();

    // Check region transitions
    this._checkRegionTransition();

    // Update HUD
    this.hud.update(this.party, this.currentRegionData, this.playerPosition, this.questSystem.getActiveQuests()[0]);
  }

  _checkRegionTransition() {
    if (!this.currentRegionData) return;
    const connections = REGION_CONNECTIONS[this.currentRegionId];
    if (!connections) return;

    const half = this.currentRegionData.size / 2 - 1;

    // Check if player is at a border
    for (const targetId of connections) {
      const targetData = REGIONS[targetId];
      if (!targetData) continue;

      // Simple: if at any edge, transition to connected region
      // North edge
      if (this.playerPosition.z < -half + 1 && connections.includes(targetId)) {
        this._transitionToRegion(targetId, 'north');
        return;
      }
      // South edge
      if (this.playerPosition.z > half - 1 && connections.includes(targetId)) {
        this._transitionToRegion(targetId, 'south');
        return;
      }
      // East edge
      if (this.playerPosition.x > half - 1 && connections.includes(targetId)) {
        this._transitionToRegion(targetId, 'east');
        return;
      }
      // West edge
      if (this.playerPosition.x < -half + 1 && connections.includes(targetId)) {
        this._transitionToRegion(targetId, 'west');
        return;
      }
    }
  }

  _transitionToRegion(regionId, direction) {
    // Pick the first matching connection for this direction
    const connections = REGION_CONNECTIONS[this.currentRegionId];
    if (!connections || !connections.includes(regionId)) return;

    // Play transition sound
    this.audioSystem.playSFX('transition');

    this.changeRegion(regionId).catch(e => console.error('Region change failed:', e));

    // Position player at opposite edge
    const half = (REGIONS[regionId]?.size || 80) / 2 - 3;
    switch (direction) {
      case 'north':
        this.playerPosition.set(0, 0, half); // Enter from south
        break;
      case 'south':
        this.playerPosition.set(0, 0, -half); // Enter from north
        break;
      case 'east':
        this.playerPosition.set(-half, 0, 0); // Enter from west
        break;
      case 'west':
        this.playerPosition.set(half, 0, 0); // Enter from east
        break;
    }
  }

  _triggerEncounter() {
    const regionId = this.currentRegionData?.encounterZone;
    if (!regionId) return;

    const monsterIds = getEncounter(regionId);
    if (!monsterIds || monsterIds.length === 0) return;

    const encounterData = {
      monsters: monsterIds,
      region: this.currentRegionId,
    };

    this.startBattle(encounterData).catch(e => console.error('Battle start failed:', e));
  }

  _checkNPCInteraction() {
    const scene = this.sceneManager.getScene();
    const npcs = scene.children.filter(c => c.userData.type === 'npc' || c.userData.npcData);

    for (const npc of npcs) {
      const dist = npc.position.distanceTo(this.playerPosition);
      if (dist < 3.0) {
        const npcData = npc.userData.npcData;
        if (npcData && npcData.dialogue) {
          this.audioSystem.playSFX('select');
          this.startDialogue({
            id: `npc_${npcData.name}`,
            dialogue: npcData.dialogue.map((text) => ({
              speaker: npcData.name,
              text,
            })),
          });
        }
        return;
      }
    }

    // Check treasure chests
    const chests = scene.children.filter(c => c.userData.treasureData);
    for (const chest of chests) {
      if (chest.userData.opened) continue;
      const dist = chest.position.distanceTo(this.playerPosition);
      if (dist < 2.5) {
        chest.userData.opened = true;
        const treasure = chest.userData.treasureData;
        if (treasure) {
          this._addItem(treasure.item, 1);
          this.audioSystem.playSFX('treasure_chest');
          this.startDialogue({
            id: `treasure_${treasure.item}`,
            dialogue: [{
              speaker: 'Treasure',
              text: `You found a ${ITEMS[treasure.item]?.name || treasure.item}!`,
            }],
          });
        }
        return;
      }
    }

    // Check save point
    const savePoints = scene.children.filter(c => c.userData.type === 'savepoint');
    for (const sp of savePoints) {
      const dist = sp.position.distanceTo(this.playerPosition);
      if (dist < 3.0) {
        this.audioSystem.playSFX('ui_save');
        this.save();
        this.startDialogue({
          id: 'save_point',
          dialogue: [{
            speaker: 'Save Point',
            text: 'Your adventure has been saved! Rest easy, hero.',
          }],
        });
        return;
      }
    }
  }

  _checkStoryEvents() {
    if (!this.currentRegionData?.storyEvents) return;

    for (const event of this.currentRegionData.storyEvents) {
      if (event.trigger === 'location') {
        const dist = Math.sqrt(
          (event.x - this.playerPosition.x) ** 2 +
          (event.z - this.playerPosition.z) ** 2
        );
        if (dist < (event.radius || 5)) {
          const beat = STORY_BEATS[event.event];
          if (beat && !this.questSystem.hasSeenBeat(event.event)) {
            this.startDialogue(beat);
            this.questSystem.seeStoryBeat(event.event);
          }
        }
      }
    }
  }

  // === Battle State ===
  _updateBattle(dt) {
    if (!this.battleData) return;

    const bd = this.battleData;

    // Update BattleUI
    if (this.battleUI) {
      this.battleUI.update(bd.party, bd.enemies, bd.activeEntity);
    }

    // If executing an action, wait for it to complete
    if (bd.battleState === 'executing') {
      bd.actionTimer -= dt;
      if (bd.actionTimer <= 0) {
        bd.battleState = 'idle';
        bd.activeEntity = null;
        this._checkBattleEnd();
      }
      return;
    }

    // If victory/defeat screen showing, wait
    if (bd.battleState === 'victory' || bd.battleState === 'defeat') {
      if (this.inputSystem.wasJustPressed('Enter') || this.inputSystem.wasJustPressed('Space')) {
        this.endBattle({ result: bd.battleState });
      }
      return;
    }

    // Fill ATB gauges
    if (bd.battleState === 'idle') {
      const allEntities = [...bd.party, ...bd.enemies];
      for (const entity of allEntities) {
        if (!entity.isAlive) continue;
        if (entity.atbGauge >= 100) continue;

        const speed = entity.stats?.agi || entity.agi || 10;
        const speedMult = this.battleSpeed === 'fast' ? 2 : 1;
        entity.atbGauge += speed * dt * 8 * speedMult;

        if (entity.atbGauge >= 100) {
          entity.atbGauge = 100;
          bd.turnQueue.push(entity);
        }
      }

      // Process next in turn queue
      if (bd.turnQueue.length > 0 && !bd.activeEntity) {
        bd.activeEntity = bd.turnQueue.shift();
        bd.battleState = 'selecting';

        if (bd.activeEntity.isEnemy) {
          // Enemy AI turn
          this._executeEnemyTurn(bd.activeEntity, bd);
        } else if (this.autoBattle) {
          // Auto-battle: AI picks attack on random alive enemy
          const aliveEnemies = bd.enemies.filter(e => e.isAlive);
          if (aliveEnemies.length > 0) {
            const target = aliveEnemies[Math.floor(Math.random() * aliveEnemies.length)];
            this._executePlayerAction({ type: 'attack' }, target);
          }
        } else {
          // Player turn — show command menu
          if (this.battleUI) {
            this.battleUI.showCommandMenu(bd.activeEntity);
          }
        }
      }
    }

    // Escape with Escape key (only during idle or selecting)
    if (this.inputSystem.wasJustPressed('Escape') && bd.battleState === 'selecting' && !bd.activeEntity?.isEnemy) {
      if (this.battleUI) this.battleUI.hideCommandMenu();
      bd.battleState = 'idle';
      bd.activeEntity.atbGauge = 0;
      bd.activeEntity = null;
      this.endBattle({ result: 'escaped' });
    }
  }

  _executeEnemyTurn(enemy, bd) {
    // Simple AI: attack a random alive party member
    const aliveParty = bd.party.filter(p => p.isAlive);
    if (aliveParty.length === 0) {
      bd.battleState = 'defeat';
      return;
    }

    const target = aliveParty[Math.floor(Math.random() * aliveParty.length)];
    const damage = Math.max(1, Math.floor((enemy.stats?.atk || enemy.atk || 10) * 1.2 - (target.stats?.def || target.def || 5) * 0.5));

    target.currentHP -= damage;
    if (target.currentHP <= 0) {
      target.currentHP = 0;
      target.isAlive = false;
    }

    if (this.battleUI) {
      this.battleUI.showMessage(`${enemy.name} attacks ${target.name} for ${damage} damage!`);
      this.battleUI.showDamageNumber(damage, false, 0.5, 0.6);
    }

    // Reset and continue
    enemy.atbGauge = 0;
    bd.actionTimer = 1.0;
    bd.battleState = 'executing';
  }

  _executePlayerAction(action, target) {
    const bd = this.battleData;
    if (!bd || !bd.activeEntity) return;

    const actor = bd.activeEntity;

    if (action.type === 'attack') {
      const damage = Math.max(1, Math.floor((actor.atk || actor.stats?.atk || 15) * 1.5 - (target.stats?.def || target.def || 5) * 0.5));
      target.currentHP -= damage;
      if (target.currentHP <= 0) {
        target.currentHP = 0;
        target.isAlive = false;
      }
      if (this.battleUI) {
        this.battleUI.showMessage(`${actor.name} attacks ${target.name} for ${damage} damage!`);
        this.battleUI.showDamageNumber(damage, false, 0.5, 0.4);
      }
    } else if (action.type === 'ability') {
      const ability = ABILITIES[action.abilityId];
      if (ability) {
        if (ability.type === 'heal') {
          const heal = Math.floor((actor.mag || actor.stats?.mag || 20) * ability.power);
          target.currentHP = Math.min(target.maxHP || target.stats?.hp || 100, (target.currentHP || 0) + heal);
          if (this.battleUI) {
            this.battleUI.showMessage(`${actor.name} uses ${ability.name}! ${target.name} recovers ${heal} HP!`);
            this.battleUI.showDamageNumber(heal, true, 0.5, 0.4);
          }
        } else if (ability.type === 'aoe' || ability.type === 'ultimate') {
          const targets = ability.target === 'enemies' ? bd.enemies.filter(e => e.isAlive) : bd.party.filter(p => p.isAlive);
          for (const t of targets) {
            const damage = Math.max(1, Math.floor((actor.mag || actor.stats?.mag || 20) * ability.power - (t.stats?.def || t.def || 5) * 0.3));
            t.currentHP -= damage;
            if (t.currentHP <= 0) {
              t.currentHP = 0;
              t.isAlive = false;
            }
          }
          if (this.battleUI) this.battleUI.showMessage(`${actor.name} casts ${ability.name}! Hits all targets!`);
        } else {
          const damage = Math.max(1, Math.floor((actor.mag || actor.stats?.mag || 20) * ability.power - (target.stats?.def || target.def || 5) * 0.4));
          target.currentHP -= damage;
          if (target.currentHP <= 0) {
            target.currentHP = 0;
            target.isAlive = false;
          }
          if (this.battleUI) this.battleUI.showMessage(`${actor.name} uses ${ability.name}! ${damage} damage to ${target.name}!`);
        }
        actor.currentMP = Math.max(0, (actor.currentMP || 0) - (ability.mpCost || 0));
      }
    } else if (action.type === 'defend') {
      actor.isDefending = true;
      if (this.battleUI) this.battleUI.showMessage(`${actor.name} takes a defensive stance!`);
    } else if (action.type === 'item') {
      const item = ITEMS[action.itemId];
      if (item && item.effect === 'heal_hp') {
        target.currentHP = Math.min(target.maxHP || target.stats?.hp || 100, (target.currentHP || 0) + item.power);
        if (this.battleUI) this.battleUI.showMessage(`Used ${item.name}! ${target.name} recovers ${item.power} HP!`);
        this._removeItem(action.itemId, 1);
      } else if (item && item.effect === 'heal_mp') {
        target.currentMP = Math.min(target.maxMP || target.stats?.mp || 50, (target.currentMP || 0) + item.power);
        if (this.battleUI) this.battleUI.showMessage(`Used ${item.name}! ${target.name} recovers ${item.power} MP!`);
        this._removeItem(action.itemId, 1);
      } else if (item && item.effect === 'heal_both') {
        target.currentHP = Math.min(target.maxHP || target.stats?.hp || 100, (target.currentHP || 0) + item.power);
        target.currentMP = Math.min(target.maxMP || target.stats?.mp || 50, (target.currentMP || 0) + item.power);
        if (this.battleUI) this.battleUI.showMessage(`Used ${item.name}! ${target.name} recovers HP and MP!`);
        this._removeItem(action.itemId, 1);
      }
    }

    // Reset actor
    actor.atbGauge = 0;
    actor.isDefending = false;
    bd.actionTimer = 0.8;
    bd.battleState = 'executing';
    if (this.battleUI) {
      this.battleUI.hideCommandMenu();
      this.battleUI.hideAbilityMenu();
      this.battleUI.hideTargetSelect();
    }
  }

  _checkBattleEnd() {
    const bd = this.battleData;
    if (!bd) return;

    const aliveEnemies = bd.enemies.filter(e => e.isAlive);
    const aliveParty = bd.party.filter(p => p.isAlive);

    if (aliveEnemies.length === 0) {
      bd.battleState = 'victory';
      const totalXP = bd.enemies.reduce((sum, e) => sum + (e.xp || 10), 0);
      const totalGold = bd.enemies.reduce((sum, e) => sum + (e.gold || 5), 0);
      if (this.battleUI) {
        this.battleUI.showVictory({ xp: totalXP, gold: totalGold, items: [] });
      }
    } else if (aliveParty.length === 0) {
      bd.battleState = 'defeat';
      if (this.battleUI) {
        this.battleUI.showDefeat();
      }
    }
  }

  // === Menu State ===
  _updateMenu(dt) {
    if (this.inputSystem.wasJustPressed('Escape')) {
      this.closeMenu();
    }
  }

  // === Dialogue State ===
  _updateDialogue(dt) {
    // DialogueBox handles its own key events and calls onComplete
    // Just update the typewriter animation (dt in seconds, DialogueBox expects ms)
    this.dialogueBox.update(dt * 1000);

    if (!this.currentDialogue) {
      this.state = this.previousState || GameState.OVERWORLD;
      return;
    }

    // Allow Escape to skip dialogue
    if (this.inputSystem.wasJustPressed('Escape')) {
      this.dialogueBox.hide();
      const dialogue = this.currentDialogue;
      this.currentDialogue = null;
      this.dialogueIndex = 0;
      this.state = this.previousState || GameState.OVERWORLD;

      // Process dialogue effects even if skipped
      if (dialogue?.unlocks) {
        for (const charId of dialogue.unlocks) {
          if (!this.recruitedIds.includes(charId)) {
            this.recruitedIds.push(charId);
            this.partyMemberIds.push(charId);
            this.party.push(this._createPartyMember(charId));
          }
        }
      }
      if (dialogue?.id) {
        this.questSystem.seeStoryBeat(dialogue.id);
      }
    }
  }

  // === Game Over / Victory ===
  _updateGameOver(dt) {
    if (this.inputSystem.wasJustPressed('Enter') || this.inputSystem.wasJustPressed('Space')) {
      this.state = GameState.TITLE;
      this.sceneManager.setState('title');
      this.titleScreen.show();
      this.hud.hide();
    }
  }

  _updateVictory(dt) {
    if (this.inputSystem.wasJustPressed('Enter') || this.inputSystem.wasJustPressed('Space')) {
      this.state = GameState.TITLE;
      this.sceneManager.setState('title');
      this.titleScreen.show();
      this.hud.hide();
    }
  }

  // === Region Management ===
  async changeRegion(regionId) {
    const regionData = REGIONS[regionId];
    if (!regionData) {
      console.warn(`Unknown region: ${regionId}`);
      return;
    }

    this.currentRegionId = regionId;
    this.currentRegionData = regionData;

    // Reset player position to center
    this.playerPosition.set(0, 0, 0);
    this.playerRotation = 0;
    this.encounterCooldown = 2.0;

    // Create player mesh if not exists (procedural model)
    if (!this.playerMesh) {
      this.playerMesh = this.assetManager.createCharacterMesh(this.partyMemberIds[0]);
    }

    // Transition to overworld scene

    // Transition to overworld scene
    this.state = GameState.OVERWORLD;
    this.sceneManager.setState('overworld', { region: regionData });

    // Add player mesh to overworld scene
    const scene = this.sceneManager.getScene();
    if (this.playerMesh) {
      scene.add(this.playerMesh);
    }

    // Show HUD
    this.hud.show();

    // Play region music and ambient
    this.audioSystem.playMusic('overworld', regionId);
    this.audioSystem.crossfadeAmbient(regionId, 2.0);

    // Auto-save on region change
    this.save();
    if (this.hud) {
      this.hud.showNotification('Auto-saved', 1500);
    }

    // Trigger enter event
    if (regionData.storyEvents) {
      for (const event of regionData.storyEvents) {
        if (event.trigger === 'enter' && STORY_BEATS[event.event]) {
          if (!this.questSystem.hasSeenBeat(event.event)) {
            this.startDialogue(STORY_BEATS[event.event]);
          }
          break;
        }
      }
    }
  }

  // === Battle Management ===
  async startBattle(encounterData) {
    const monsterIds = encounterData.monsters || encounterData;
    const enemies = [];
    for (let i = 0; i < monsterIds.length; i++) {
      const id = monsterIds[i];
      const monster = MONSTERS[id];
      const mesh = this.assetManager.createMonsterMesh(id);
      const stats = { ...(monster?.stats || { hp: 50, atk: 10, def: 5, agi: 10, mag: 5, mp: 0 }) };
      enemies.push({
        id,
        name: monster?.name || id,
        stats,
        atk: stats.atk,
        def: stats.def,
        agi: stats.agi,
        mag: stats.mag,
        weakTo: monster?.weakTo || [],
        resists: monster?.resists || [],
        element: monster?.element || 'physical',
        mesh,
        currentHP: stats.hp,
        maxHP: stats.hp,
        currentMP: stats.mp,
        maxMP: stats.mp,
        atbGauge: 0,
        isAlive: true,
        isEnemy: true,
        statusEffects: [],
        abilities: monster?.abilities || ['enemy_bite'],
        xp: monster?.xp || 10,
        gold: monster?.gold || 5,
        drops: monster?.drops || [],
        isDefending: false,
      });
    }

    const battleParty = [];
    for (const member of this.party) {
      const stats = {
        hp: member.maxHP,
        mp: member.maxMP,
        atk: member.atk,
        def: member.def,
        agi: member.agi,
        mag: member.mag,
      };
      let mesh;
      mesh = this.assetManager.createCharacterMesh(member.id);
      battleParty.push({
        ...member,
        stats,
        mesh,
        atbGauge: 0,
        isAlive: member.currentHP > 0,
        isEnemy: false,
        statusEffects: [],
        isDefending: false,
      });
    }

    this.battleData = {
      party: battleParty,
      enemies,
      region: this.currentRegionId,
      round: 1,
      turnQueue: [],
      activeEntity: null,
      battleState: 'idle',
      actionTimer: 0,
    };

    this.previousState = this.state;
    this.state = GameState.BATTLE;
    this.sceneManager.setState('battle', { battle: this.battleData });
    this.hud.hide();
    this.audioSystem.playSFX('encounter_alert');
    this.audioSystem.transitionMusic('battle', this.currentRegionId, 0.5);

    // Create BattleUI
    if (this.battleUI) {
      this.battleUI.hide();
      this.battleUI = null;
    }
    this.battleUI = new BattleUI(document.body);
    this.battleUI.create();
    this.battleUI._lastActiveEntity = null;

    // Battle speed toggle
    this.battleSpeed = 'normal';
    this.battleUI.callbacks.onToggleSpeed = () => {
      this.battleSpeed = this.battleSpeed === 'normal' ? 'fast' : 'normal';
      return this.battleSpeed;
    };

    // Auto-battle toggle
    this.autoBattle = false;
    this.battleUI.callbacks.onToggleAuto = () => {
      this.autoBattle = !this.autoBattle;
      return this.autoBattle;
    };

    // Set up battle UI callbacks
    this.battleUI.callbacks.onSelectCommand = (cmd) => {
      const bd = this.battleData;
      if (!bd || !bd.activeEntity) return;
      const actor = bd.activeEntity;

      this.audioSystem.playSFX('select');

      switch (cmd) {
        case 'attack':
          this.battleUI.hideCommandMenu();
          this.battleUI.showTargetSelect(bd.enemies.filter(e => e.isAlive), true);
          this.battleUI.callbacks.onSelectTarget = (target) => {
            this._executePlayerAction({ type: 'attack' }, target);
          };
          break;
        case 'ability':
          this.battleUI.hideCommandMenu();
          this.battleUI.showAbilityMenu(actor);
          this.battleUI.callbacks.onSelectAbility = (abilityId) => {
            const ability = ABILITIES[abilityId];
            if (!ability) return;
            if ((actor.currentMP || 0) < ability.mpCost) {
              this.battleUI.showMessage('Not enough MP!');
              return;
            }
            if (ability.target === 'enemies' || ability.target === 'allies') {
              // AoE — execute immediately
              const targets = ability.target === 'enemies' ? bd.enemies.filter(e => e.isAlive) : bd.party.filter(p => p.isAlive);
              this._executePlayerAction({ type: 'ability', abilityId }, targets[0]);
            } else {
              // Single target
              const isEnemyTarget = ability.type === 'attack' || ability.type === 'ultimate';
              const targets = isEnemyTarget ? bd.enemies.filter(e => e.isAlive) : bd.party.filter(p => p.isAlive);
              this.battleUI.hideAbilityMenu();
              this.battleUI.showTargetSelect(targets, isEnemyTarget);
              this.battleUI.callbacks.onSelectTarget = (target) => {
                this._executePlayerAction({ type: 'ability', abilityId }, target);
              };
            }
          };
          break;
        case 'item':
          this.battleUI.hideCommandMenu();
          const items = Object.keys(this.inventory)
            .filter(id => ITEMS[id]?.type === 'consumable')
            .map(id => ({ id, ...ITEMS[id], count: this.inventory[id] }));
          this.battleUI.showItemMenu(items);
          this.battleUI.callbacks.onSelectItem = (itemId) => {
            this.battleUI.hideItemMenu();
            const item = ITEMS[itemId];
            if (!item) return;
            const targets = bd.party.filter(p => p.isAlive);
            this.battleUI.showTargetSelect(targets, false);
            this.battleUI.callbacks.onSelectTarget = (target) => {
              this._executePlayerAction({ type: 'item', itemId }, target);
            };
          };
          break;
        case 'defend':
          this._executePlayerAction({ type: 'defend' }, actor);
          break;
        case 'flee':
          this.battleUI.hideCommandMenu();
          const fleeChance = 0.5 + (bd.party[0]?.agi || 10) * 0.01 - (bd.enemies[0]?.agi || 10) * 0.01;
          if (Math.random() < fleeChance) {
            this.battleUI.showMessage('Got away safely!');
            setTimeout(() => this.endBattle({ result: 'escaped' }), 1000);
          } else {
            this.battleUI.showMessage('Could not escape!');
            actor.atbGauge = 0;
            this.battleData.battleState = 'executing';
            this.battleData.actionTimer = 0.8;
          }
          break;
      }
    };
  }

  endBattle(result) {
    // Clean up BattleUI
    if (this.battleUI) {
      this.battleUI.hide();
      this.battleUI = null;
    }

    if (result.result === 'victory') {
      // Award XP and gold
      let totalXP = 0;
      let totalGold = 0;
      for (const enemy of this.battleData.enemies) {
        totalXP += enemy.xp || 10;
        totalGold += enemy.gold || 5;
      }

      this.gold += totalGold;
      for (const member of this.party) {
        const xpGain = Math.floor(totalXP / this.party.length);
        const levelResult = this.progressionSystem.addXP(member, xpGain);

        if (levelResult.leveledUp) {
          // Add newly unlocked abilities
          for (const abilityId of levelResult.unlockedAbilities) {
            if (!member.abilities.includes(abilityId)) {
              member.abilities.push(abilityId);
            }
          }
        }
      }

      // Drop items
      for (const enemy of this.battleData.enemies) {
        if (enemy.drops) {
          for (const drop of enemy.drops) {
            if (Math.random() < drop.chance) {
              this._addItem(drop.item, 1);
            }
          }
        }
      }

      // Play victory fanfare
      this.audioSystem.playVictory();
    } else if (result.result === 'defeat') {
      this.audioSystem.playDefeat();
      this.state = GameState.GAME_OVER;
      this.sceneManager.setState('title');
      this.hud.hide();
      this.battleData = null;
      return;
    } else if (result.result === 'escaped') {
      // Just return to overworld
    }

    // Sync party HP/MP from battle data back to party
    if (this.battleData) {
      for (let i = 0; i < this.battleData.party.length && i < this.party.length; i++) {
        this.party[i].currentHP = this.battleData.party[i].currentHP;
        this.party[i].currentMP = this.battleData.party[i].currentMP;
      }
    }

    // Return to overworld
    this.state = GameState.OVERWORLD;
    this.sceneManager.setState('overworld', { region: this.currentRegionData });
    this.hud.show();
    this.encounterCooldown = 3.0;

    // Re-add player mesh
    const scene = this.sceneManager.getScene();
    if (this.playerMesh) {
      scene.add(this.playerMesh);
    }

    // Resume overworld music
    this.audioSystem.playMusic('overworld', this.currentRegionId);
    this.audioSystem.startAmbient(this.currentRegionId);

    // Autosave after battle
    this._autoSave();

    this.battleData = null;
  }

  // === Menu Management ===
  openMenu() {
    this.previousState = this.state;
    this.state = GameState.MENU;
    this.sceneManager.setState('menu', { menu: true });
    this.hud.hide();
    this.mainMenu.show(this.party, this.nemesisSystem, this.questSystem);
    this.audioSystem.playSFX('ui_menu_open');
  }

  closeMenu() {
    this.state = this.previousState || GameState.OVERWORLD;
    this.sceneManager.setState('overworld', { region: this.currentRegionData });
    this.mainMenu.hide();
    this.hud.show();

    // Re-add player mesh
    const scene = this.sceneManager.getScene();
    if (this.playerMesh) {
      scene.add(this.playerMesh);
    }

    this.audioSystem.playSFX('ui_menu_close');
  }

  // === Dialogue ===
  startDialogue(dialogueData) {
    if (!dialogueData) return;

    this.previousState = this.state;
    this.state = GameState.DIALOGUE;
    this.currentDialogue = dialogueData;
    this.dialogueIndex = 0;

    // Build dialogue options with backdrop and voice prefix
    const dialogueOptions = {};
    if (dialogueData.backdrop) {
      dialogueOptions.backdrop = dialogueData.backdrop;
    }
    if (dialogueData.id) {
      dialogueOptions.voicePrefix = `/voice/${dialogueData.id}`;
    }

    // Show dialogue box with all lines
    const lines = dialogueData.dialogue.map(l => ({ speaker: l.speaker, text: l.text }));
    this.dialogueBox.show(lines, () => {
      // onComplete
      const dialogue = this.currentDialogue;
      this.currentDialogue = null;
      this.dialogueIndex = 0;
      this.state = this.previousState || GameState.OVERWORLD;
      this.dialogueBox.hide();

      // Process dialogue effects
      if (dialogue?.unlocks) {
        for (const charId of dialogue.unlocks) {
          if (!this.recruitedIds.includes(charId)) {
            this.recruitedIds.push(charId);
            this.partyMemberIds.push(charId);
            this.party.push(this._createPartyMember(charId));
          }
        }
      }

      if (dialogue?.after && STORY_BEATS[dialogue.after]) {
        this.startDialogue(STORY_BEATS[dialogue.after]);
      }

      if (dialogue?.id) {
        this.questSystem.seeStoryBeat(dialogue.id);
      }
    }, dialogueOptions);
  }

  // === Save / Load ===
  save() {
    const saveData = {
      version: 1,
      partyMemberIds: this.partyMemberIds,
      recruitedIds: this.recruitedIds,
      party: this.party.map(m => ({
        id: m.id,
        level: m.level,
        xp: m.xp,
        currentHP: m.currentHP,
        currentMP: m.currentMP,
        equipment: m.equipment,
        abilities: m.abilities,
      })),
      gold: this.gold,
      inventory: this.inventory,
      currentRegionId: this.currentRegionId,
      playerPosition: { x: this.playerPosition.x, y: this.playerPosition.y, z: this.playerPosition.z },
      playerRotation: this.playerRotation,
      playTime: this.playTime,
      steps: this.steps,
      quests: this.questSystem.toData(),
      nemesis: this.nemesisSystem.toData(),
      familiars: this.familiars.map(f => f.toData ? f.toData() : f),
      equippedFamiliars: this.equippedFamiliars,
      timestamp: Date.now(),
    };

    try {
      this.saveSystem.save(this.saveSlot, saveData);
      this.saveSystem.autoSave(saveData);
    } catch (e) {
      console.warn('Failed to save:', e);
    }
  }

  /**
   * Auto-save with a brief HUD notification.
   * @private
   */
  _autoSave() {
    try {
      const saveData = {
        partyMemberIds: this.partyMemberIds,
        recruitedIds: this.recruitedIds,
        party: this.party.map(p => ({
          id: p.id, level: p.level, xp: p.xp || 0,
          currentHP: p.currentHP, currentMP: p.currentMP,
          equipment: p.equipment || {},
        })),
        gold: this.gold,
        inventory: this.inventory,
        currentRegionId: this.currentRegionId,
        playerPosition: { x: this.playerPosition.x, z: this.playerPosition.z },
        playerRotation: this.playerRotation,
        playTime: this.playTime,
        steps: this.steps,
        quests: this.questSystem ? this.questSystem.toData() : null,
        nemesis: this.nemesisSystem ? this.nemesisSystem.toData() : null,
        familiars: (this.familiars || []).map(f => f.toData ? f.toData() : f),
        equippedFamiliars: this.equippedFamiliars || [],
        timestamp: Date.now(),
      };
      this.saveSystem.autoSave(saveData);
      if (this.hud) {
        this.hud.showNotification('Auto-saved', 1500);
      }
    } catch (e) {
      console.warn('Auto-save failed:', e);
    }
  }

  async load() {
    try {
      const data = this.saveSystem.load(this.saveSlot);
      if (!data) return false;

      // Preload 3D models
      await this._preloadModels();

      this.partyMemberIds = data.partyMemberIds || [...STARTING_PARTY];
      this.recruitedIds = data.recruitedIds || [...this.partyMemberIds];
      this.party = (data.party || []).map(saved => {
        const member = this._createPartyMember(saved.id);
        member.level = saved.level || 1;
        member.xp = saved.xp || 0;
        member.currentHP = saved.currentHP || member.maxHP;
        member.currentMP = saved.currentMP || member.maxMP;
        member.equipment = saved.equipment || {};
        member.abilities = saved.abilities || member.abilities;
        return member;
      });
      this.gold = data.gold || 100;
      this.inventory = data.inventory || {};
      this.playTime = data.playTime || 0;
      this.steps = data.steps || 0;

      if (data.quests) this.questSystem.fromData(data.quests);
      if (data.nemesis) this.nemesisSystem = NemesisSystem.fromData(data.nemesis);
      if (data.familiars) this.familiars = data.familiars;
      if (data.equippedFamiliars) this.equippedFamiliars = data.equippedFamiliars;

      const regionId = data.currentRegionId || 'fry_valley';
      this.changeRegion(regionId).catch(e => console.error('Region change failed:', e));

      if (data.playerPosition) {
        this.playerPosition.set(data.playerPosition.x, data.playerPosition.y, data.playerPosition.z);
      }
      this.playerRotation = data.playerRotation || 0;

      return true;
    } catch (e) {
      console.warn('Failed to load:', e);
      return false;
    }
  }

  hasSave() {
    return this.saveSystem.hasSave(this.saveSlot);
  }

  // === Party Management ===
  _createPartyMember(characterId) {
    const char = CHARACTERS[characterId];
    if (!char) return null;

    const stats = { ...char.baseStats };

    return {
      id: characterId,
      name: char.name,
      title: char.title,
      role: char.role,
      description: char.description,
      level: 1,
      xp: 0,
      maxHP: stats.hp,
      maxMP: stats.mp,
      currentHP: stats.hp,
      currentMP: stats.mp,
      atk: stats.atk,
      def: stats.def,
      agi: stats.agi,
      mag: stats.mag,
      element: char.element,
      equipment: { weapon: null, armor: null, accessory: null },
      abilities: char.abilityTree.filter(a => a.level === 1).map(a => a.ability),
      color: char.color,
      portraitColors: char.portraitColors,
      growth: char.growth,
      abilityTree: char.abilityTree,
    };
  }

  _addItem(itemId, count = 1) {
    if (!this.inventory[itemId]) {
      this.inventory[itemId] = 0;
    }
    this.inventory[itemId] += count;
  }

  _removeItem(itemId, count = 1) {
    if (!this.inventory[itemId]) return false;
    this.inventory[itemId] -= count;
    if (this.inventory[itemId] <= 0) {
      delete this.inventory[itemId];
    }
    return true;
  }

  // === Animation Updates ===
  _updateAnimations(dt) {
    const scene = this.sceneManager.getScene();
    const time = this.clock.getElapsedTime();

    scene.traverse(child => {
      // Floating objects
      if (child.userData.float) {
        child.position.y += Math.sin(time * 2 + child.id) * 0.005;
      }

      // Spinning objects
      if (child.userData.spin) {
        child.rotation.y += dt * 3;
      }

      // Bouncing objects (slimes)
      if (child.userData.bounce) {
        const scale = 1 + Math.sin(time * 4) * 0.05;
        child.scale.y = scale;
      }

      // Particle effects
      if (child.userData.type === 'particles' && !child.userData.dead) {
        if (this.assetManager.updateParticleEffect) {
          this.assetManager.updateParticleEffect(child, dt);
        }
        if (child.userData.dead) {
          scene.remove(child);
        }
      }

      // Glowing save points
      if (child.userData.glow && child.material) {
        const intensity = 0.8 + Math.sin(time * 3) * 0.2;
        child.material.opacity = intensity;
      }

      // NPC idle bob
      if (child.userData.npcData) {
        child.position.y = Math.sin(time * 1.5 + child.id) * 0.1;
      }

      // Treasure chest hover
      if (child.userData.treasureData && !child.userData.opened) {
        child.rotation.y = Math.sin(time * 0.8) * 0.1;
      }

      // Grass wind animation — update shader time uniform
      if (child.userData.type === 'grass' && child.userData.grassMaterial) {
        child.userData.grassMaterial.uniforms.uTime.value = time;
      }

      // Water ripple animation — update shader time uniform
      if (child.userData.type === 'water' && child.userData.waterMaterial) {
        child.userData.waterMaterial.uniforms.uTime.value = time;
      }
    });
  }

  // === Window Resize ===
  _onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.sceneManager.onResize(w, h);
  }

  // === Cleanup ===
  dispose() {
    window.removeEventListener('resize', this._onResize);
    this.renderer.dispose();
    this.inputSystem.dispose();
    this.audioSystem.dispose();
    this.titleScreen.hide();
    this.dialogueBox.hide();
    this.hud.hide();
    this.mainMenu.hide();
  }
}

export default Game;
