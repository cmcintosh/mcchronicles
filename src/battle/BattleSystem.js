// BattleSystem.js — Core ATB battle controller for McChronicles JRPG

import * as THREE from 'three';
import BattleEntity from './BattleEntity.js';
import PartyMember from './PartyMember.js';
import Enemy from './Enemy.js';
import BattleScene from './BattleScene.js';
import Ability from './abilities/Ability.js';
import FryMageAbilities from './abilities/FryMageAbilities.js';
import McTankAbilities from './abilities/McTankAbilities.js';
import SkyScoutAbilities from './abilities/SkyScoutAbilities.js';
import McCrusaderAbilities from './abilities/McCrusaderAbilities.js';
import MoonBardAbilities from './abilities/MoonBardAbilities.js';
import { ABILITIES, STATUS_EFFECTS, ELEMENTS } from '../data/abilities.js';
import { MONSTERS, getEncounter } from '../data/monsters.js';
import { ITEMS } from '../data/items.js';
import { clamp, randomChoice, randomChance } from '../utils/math.js';

// Ability registry — merge all character ability objects into a single lookup map
const ABILITY_REGISTRY = {
  ...FryMageAbilities,
  ...McTankAbilities,
  ...SkyScoutAbilities,
  ...McCrusaderAbilities,
  ...MoonBardAbilities,
};

export default class BattleSystem {
  constructor() {
    // Entity arrays
    this.party = [];
    this.enemies = [];
    this.reserve = [];

    // Turn management
    this.turnQueue = [];
    this.activeEntity = null;
    this.battleState = 'idle'; // idle | selecting | targeting | executing | animating | victory | defeat | flee

    // Scene and UI
    this.battleScene = null;
    this.battleUI = null; // set externally

    // Command state
    this.pendingCommand = null;

    // Log
    this.battleLog = [];

    // Region/context data
    this.regionData = null;

    // Callbacks
    this.onVictory = null;
    this.onDefeat = null;
    this.onFlee = null;

    // Animation timer
    this._animationTimer = 0;
    this._animationDuration = 0;

    // Inventory reference (set externally or cloned from game state)
    this.inventory = {};

    // Total rewards (accumulated on victory)
    this._pendingRewards = null;

    // Battle speed: 'normal' or 'fast'
    this.battleSpeed = 'normal';

    // Auto-battle: when true, AI controls party members
    this.autoBattle = false;
  }

  // ────────────────────────────────────────────────────────────
  //  Battle Start
  // ────────────────────────────────────────────────────────────

  /**
   * Start a battle.
   * @param {Array<{characterId: string, level: number, hp: number, mp: number}>} partyData
   * @param {string[]} enemyIds — array of monster IDs
   * @param {object} regionData — region info for scene background
   */
  start(partyData, enemyIds, regionData) {
    this.regionData = regionData || { id: 'plains', name: 'Battlefield' };

    // Create battle scene
    this.battleScene = new BattleScene();
    this.battleScene.setupArena(regionData);

    // Create party members
    this.party = partyData.map((pd, idx) => {
      const member = new PartyMember(pd.characterId, pd.level, pd.hp, pd.mp);
      member.battleIndex = idx;
      member.atb = 0;
      member.isDefending = false;
      return member;
    });

    // Create enemies with level scaling based on region difficulty
    const baseLevel = regionData?.dangerLevel || 1;
    this.enemies = enemyIds.map((monsterId, idx) => {
      const monsterData = MONSTERS[monsterId];
      if (!monsterData) {
        console.warn(`BattleSystem: Unknown monster ID "${monsterId}", using mcnugget_goblin as fallback`);
        return new Enemy('mcnugget_goblin', baseLevel, idx);
      }
      // Scale enemy level based on tier
      let enemyLevel = baseLevel;
      if (monsterData.tier === 'normal') enemyLevel = baseLevel + 2;
      else if (monsterData.tier === 'elite') enemyLevel = baseLevel + 5;
      else if (monsterData.tier === 'boss') enemyLevel = baseLevel + 10;

      const enemy = new Enemy(monsterId, enemyLevel, idx);
      enemy.atb = 0;
      return enemy;
    });

    // Place entities in the scene
    this.battleScene.placeParty(this.party);
    this.battleScene.placeEnemies(this.enemies);

    // Reset state
    this.turnQueue = [];
    this.activeEntity = null;
    this.battleState = 'idle';
    this.pendingCommand = null;
    this.battleLog = [];
    this._animationTimer = 0;

    // Initial UI update
    if (this.battleUI) {
      this.battleUI.update(this.party, this.enemies, null);
    }

    this.showMessage('Battle Start!');
  }

  // ────────────────────────────────────────────────────────────
  //  Main Update Loop
  // ────────────────────────────────────────────────────────────

  /**
   * Main update called every frame.
   * @param {number} dt — delta time in seconds
   */
  update(dt) {
    if (this.battleState === 'victory' || this.battleState === 'defeat' || this.battleState === 'flee') {
      // Still update scene effects for visual flair
      if (this.battleScene) this.battleScene.update(dt);
      return;
    }

    // Fill ATB gauges for all alive entities when in interactive states
    if (this.battleState === 'idle' || this.battleState === 'selecting' || this.battleState === 'targeting') {
      this._fillATB(dt);
    }

    // Tick status effects on all entities (real-time DoT/HoT/regen)
    const allEntities = [...this.party, ...this.enemies];
    for (const entity of allEntities) {
      if (entity.isAlive() && entity.update) {
        entity.update(dt);
      }
    }

    // Process turn queue when idle
    if (this.battleState === 'idle') {
      if (!this.activeEntity && this.turnQueue.length > 0) {
        // Sort by agility (highest first), then by ATB fill time
        this.turnQueue.sort((a, b) => b.getStatWithMods('agi') - a.getStatWithMods('agi'));
        const entity = this.turnQueue.shift();
        this.startTurn(entity);
      }
    }

    // Auto-battle: AI controls party members
    if (this.autoBattle && this.battleState === 'selecting' && this.activeEntity instanceof PartyMember) {
      this._autoBattleAct(this.activeEntity);
    }

    // Handle animation state
    if (this.battleState === 'animating') {
      this._animationTimer += dt;
      if (this._animationTimer >= this._animationDuration) {
        this._animationTimer = 0;
        this._animationDuration = 0;
        this.battleState = 'idle';
      }
    }

    // Update scene effects
    if (this.battleScene) this.battleScene.update(dt);

    // Check end conditions
    this.checkBattleEnd();
  }

  /**
   * Fill ATB gauges for all alive entities.
   * @param {number} dt
   * @private
   */
  _fillATB(dt) {
    const allEntities = [...this.party, ...this.enemies];

    for (const entity of allEntities) {
      if (!entity.isAlive()) continue;
      if (this.turnQueue.includes(entity)) continue;
      if (entity === this.activeEntity) continue;

      // ATB fill rate: base 100 / (agi * 0.5 + 10) seconds to fill
      // Higher agility = faster ATB fill
      // Apply battle speed multiplier for faster gameplay
      const speedMult = this.battleSpeed === 'fast' ? 2.0 : 1.0;
      const agi = entity.getStatWithMods('agi');
      let fillRate = (agi * 0.5 + 10) / 100 * speedMult; // fraction per second

      // Slow status halves fill rate
      if (entity.hasStatus('slow')) fillRate *= STATUS_EFFECTS.slow.atbMultiplier;

      // Defending slightly speeds up ATB (recovers faster)
      if (entity.isDefending) fillRate *= 1.2;

      entity.atb = clamp(entity.atb + fillRate * dt, 0, 100);

      if (entity.atb >= 100) {
        this.turnQueue.push(entity);
        if (this.battleUI) this.battleUI.update(this.party, this.enemies, this.activeEntity);
      }
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Turn Management
  // ────────────────────────────────────────────────────────────

  /**
   * Start a turn for the given entity.
   * @param {BattleEntity} entity
   */
  startTurn(entity) {
    // Tick status effects (DoT, HoT, duration decrements)
    this._tickEntityStatuses(entity);

    // Check if entity died from DoT
    if (!entity.isAlive()) {
      entity.atb = 0;
      this.battleState = 'idle';
      if (this.battleUI) this.battleUI.update(this.party, this.enemies, null);
      return;
    }

    // Check for skip-turn status effects (freeze, stun, sleep)
    const skipStatuses = ['freeze', 'stun', 'sleep'];
    for (const status of skipStatuses) {
      if (entity.hasStatus(status)) {
        const effect = STATUS_EFFECTS[status];
        this.showMessage(`${entity.name} is ${effect.name.toLowerCase()}! Skip turn.`);
        entity.tickStatus(status);
        entity.atb = 0;
        entity.isDefending = false;
        this.battleState = 'idle';
        if (this.battleUI) this.battleUI.update(this.party, this.enemies, null);
        return;
      }
    }

    this.activeEntity = entity;

    if (entity instanceof PartyMember) {
      // Player turn — show command menu
      this.battleState = 'selecting';
      if (this.battleUI) {
        this.battleUI.showCommandMenu(entity);
        this.battleUI.update(this.party, this.enemies, entity);
      }
    } else {
      // Enemy turn — AI chooses action
      this.battleState = 'executing';
      const action = entity.chooseAction(this.party, this.enemies);
      this._executeEnemyAction(entity, action);
    }
  }

  /**
   * Tick status effects on an entity (DoT, HoT, duration).
   * Works with the array-based statusEffects from BattleEntity.
   * @param {BattleEntity} entity
   * @private
   */
  _tickEntityStatuses(entity) {
    if (!entity.statusEffects || !Array.isArray(entity.statusEffects)) return;

    const toRemove = [];

    for (const effect of entity.statusEffects) {
      const effectDef = STATUS_EFFECTS[effect.id];
      if (!effectDef) continue;

      // Tick damage (burn, poison) — per turn, not per second
      if (effectDef.tickDamage) {
        const damage = Math.max(1, Math.floor(entity.getMaxHP() * effectDef.tickDamage));
        entity.takeDamage(damage);
        this.showMessage(`${entity.name} takes ${damage} ${effectDef.name} damage.`);
      }

      // Tick heal (regen)
      if (effectDef.tickHeal) {
        const heal = Math.max(1, Math.floor(entity.getMaxHP() * effectDef.tickHeal));
        entity.heal(heal);
      }

      // Tick MP regen
      if (effectDef.tickMP) {
        const mpRestore = Math.max(1, Math.floor(entity.getMaxMP() * effectDef.tickMP));
        entity.restoreMP(mpRestore);
      }

      // Decrement duration (turn-based)
      effect.remaining -= 1;
      if (effect.remaining <= 0) {
        toRemove.push(effect.id);
        this.showMessage(`${effectDef.name} wore off on ${entity.name}.`);
      }
    }

    for (const statusId of toRemove) {
      entity.removeStatus(statusId);
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Player Command Selection
  // ────────────────────────────────────────────────────────────

  /**
   * Player selects a command from the menu.
   * @param {string} command — 'attack' | 'ability' | 'item' | 'defend' | 'flee'
   */
  selectCommand(command) {
    if (!this.activeEntity || !(this.activeEntity instanceof PartyMember)) return;

    const entity = this.activeEntity;

    switch (command) {
      case 'attack': {
        // Basic attack — need target selection
        this.pendingCommand = {
          type: 'attack',
          abilityId: null,
          mpCost: 0,
        };
        this.battleState = 'targeting';
        if (this.battleUI) {
          this.battleUI.hideCommandMenu();
          this.battleUI.showTargetSelect(this.enemies, true);
        }
        break;
      }

      case 'ability': {
        if (this.battleUI) {
          this.battleUI.hideCommandMenu();
          this.battleUI.showAbilityMenu(entity);
        }
        break;
      }

      case 'item': {
        if (this.battleUI) {
          this.battleUI.hideCommandMenu();
          this.battleUI.showItemMenu(this._getUsableItems());
        }
        break;
      }

      case 'defend': {
        entity.isDefending = true;
        this.showMessage(`${entity.name} is defending.`);
        this._endTurn();
        break;
      }

      case 'flee': {
        this.flee();
        break;
      }

      default:
        console.warn(`BattleSystem: Unknown command "${command}"`);
    }
  }

  /**
   * Player selects an ability.
   * @param {string} abilityId
   */
  selectAbility(abilityId) {
    if (!this.activeEntity) return;

    const entity = this.activeEntity;
    const abilityData = ABILITIES[abilityId];

    if (!abilityData) {
      console.warn(`BattleSystem: Unknown ability "${abilityId}"`);
      return;
    }

    // Check MP
    if (entity.mp < abilityData.mpCost) {
      this.showMessage('Not enough MP!');
      return;
    }

    this.pendingCommand = {
      type: 'ability',
      abilityId: abilityId,
      mpCost: abilityData.mpCost,
    };

    // Determine target selection based on ability target type
    const targetType = abilityData.target; // 'enemy', 'enemies', 'ally', 'allies', 'self'

    this.battleState = 'targeting';

    if (this.battleUI) {
      this.battleUI.hideAbilityMenu();
    }

    if (targetType === 'self') {
      // No target selection needed — execute immediately on self
      this.selectTarget(this.party.indexOf(entity));
    } else if (targetType === 'enemy' || targetType === 'enemies') {
      if (this.battleUI) this.battleUI.showTargetSelect(this.enemies, true);
    } else if (targetType === 'ally' || targetType === 'allies') {
      if (this.battleUI) this.battleUI.showTargetSelect(this.party, false);
    }
  }

  /**
   * Player selects an item to use.
   * @param {string} itemId
   */
  selectItem(itemId) {
    if (!this.activeEntity) return;

    const itemData = ITEMS[itemId];
    if (!itemData || itemData.type !== 'consumable') {
      this.showMessage('Cannot use that item in battle.');
      return;
    }

    // Check inventory
    if (!this.inventory[itemId] || this.inventory[itemId] <= 0) {
      this.showMessage('You don\'t have any of that item!');
      return;
    }

    this.pendingCommand = {
      type: 'item',
      itemId: itemId,
      mpCost: 0,
    };

    // Items target allies (or self for revive)
    this.battleState = 'targeting';

    if (this.battleUI) {
      this.battleUI.hideItemMenu();
      this.battleUI.showTargetSelect(this.party, false);
    }
  }

  /**
   * Player selects a target for the pending command.
   * @param {number} targetIndex — index into the target array (enemies or party)
   */
  selectTarget(targetIndex) {
    if (!this.pendingCommand || !this.activeEntity) return;

    const command = this.pendingCommand;
    const entity = this.activeEntity;

    if (this.battleUI) {
      this.battleUI.hideTargetSelect();
    }

    // Resolve targets based on command type
    let targets = [];

    if (command.type === 'attack') {
      // Basic attack targets a single enemy
      const target = this.enemies[targetIndex];
      if (!target || !target.isAlive()) {
        this.showMessage('Invalid target.');
        this.battleState = 'selecting';
        if (this.battleUI) this.battleUI.showCommandMenu(entity);
        return;
      }
      targets = [target];
      this._executeAction(entity, { type: 'attack' }, targets);
    } else if (command.type === 'ability') {
      const abilityData = ABILITIES[command.abilityId];
      const targetType = abilityData.target;

      if (targetType === 'self') {
        targets = [entity];
      } else if (targetType === 'enemy') {
        const target = this.enemies[targetIndex];
        if (!target || !target.isAlive()) {
          this.showMessage('Invalid target.');
          this.battleState = 'selecting';
          if (this.battleUI) this.battleUI.showCommandMenu(entity);
          return;
        }
        targets = [target];
      } else if (targetType === 'enemies') {
        targets = this.enemies.filter((e) => e.isAlive());
      } else if (targetType === 'ally') {
        const target = this.party[targetIndex];
        if (!target || !target.isAlive()) {
          // Allow targeting dead allies for revive
          if (!target) {
            this.showMessage('Invalid target.');
            this.battleState = 'selecting';
            if (this.battleUI) this.battleUI.showCommandMenu(entity);
            return;
          }
        }
        targets = [target];
      } else if (targetType === 'allies') {
        targets = this.party.filter((p) => p.isAlive());
      }

      this._executeAction(entity, { type: 'ability', abilityId: command.abilityId }, targets);
    } else if (command.type === 'item') {
      const target = this.party[targetIndex];
      if (!target) {
        this.showMessage('Invalid target.');
        this.battleState = 'selecting';
        if (this.battleUI) this.battleUI.showCommandMenu(entity);
        return;
      }
      this._useItem(command.itemId, target);
      this._endTurn();
    }

    this.pendingCommand = null;
  }

  // ────────────────────────────────────────────────────────────
  //  Action Execution
  // ────────────────────────────────────────────────────────────

  /**
   * Execute a player action.
   * @param {BattleEntity} entity — the actor
   * @param {{type: string, abilityId?: string}} action — the action
   * @param {BattleEntity[]} targets — target entities
   * @private
   */
  _executeAction(entity, action, targets) {
    this.battleState = 'animating';
    this._animationTimer = 0;
    this._animationDuration = 0.8; // default animation duration

    if (action.type === 'attack') {
      // Basic attack: create a simple Ability with power 1.0
      const element = entity.element || 'physical';
      const attackAbility = new Ability({
        id: 'basic_attack',
        name: 'Attack',
        type: 'attack',
        element: element,
        mpCost: 0,
        power: 1.0,
        target: 'enemy',
        description: 'A basic attack.',
      });

      attackAbility.execute(entity, targets, this);
      this.showMessage(`${entity.name} attacks ${targets[0]?.name || 'the enemy'}!`);

    } else if (action.type === 'ability') {
      const abilityData = ABILITIES[action.abilityId];
      if (!abilityData) {
        console.warn(`BattleSystem: Unknown ability "${action.abilityId}"`);
        this._endTurn();
        return;
      }

      // Look up the ability class in the registry
      const AbilityClass = ABILITY_REGISTRY[action.abilityId];
      let abilityInstance;

      if (AbilityClass) {
        abilityInstance = new AbilityClass(abilityData);
      } else {
        // Fallback to base Ability for enemy abilities or unregistered abilities
        abilityInstance = new Ability(abilityData);
      }

      abilityInstance.execute(entity, targets, this);
      this.showMessage(`${entity.name} uses ${abilityData.name}!`);

      // Spend MP
      entity.spendMP(abilityData.mpCost);

      // Add particle effects based on element
      const elementInfo = ELEMENTS[abilityData.element] || ELEMENTS.physical;
      if (this.battleScene && targets.length > 0) {
        const targetPos = targets[0].position || new THREE.Vector3(0, 1, 0);
        this.addParticleEffect('burst', targetPos, elementInfo.color, 12);
      }

      // Longer animation for ultimates
      if (abilityData.type === 'ultimate') {
        this._animationDuration = 1.5;
      }
    }

    // Add to battle log
    this.battleLog.push(`${entity.name} acted.`);
    if (this.battleLog.length > 20) this.battleLog.shift();

    // After animation, end turn
    // We use a small delay to let animation play
    setTimeout(() => {
      this._endTurn();
    }, this._animationDuration * 1000);
  }

  /**
   * Execute an enemy action.
   * @param {Enemy} entity
   * @param {{type: string, abilityId?: string, targetIndex?: number}} action
   * @private
   */
  _executeEnemyAction(entity, action) {
    this.battleState = 'animating';
    this._animationTimer = 0;
    this._animationDuration = 0.8;

    let targets = [];

    if (action.type === 'attack' || action.abilityId) {
      const abilityId = action.abilityId || 'enemy_bite';
      const abilityData = ABILITIES[abilityId];

      if (abilityData) {
        // Resolve targets
        const targetType = abilityData.target;

        if (targetType === 'enemy') {
          // Enemy targets party members (from enemy perspective, 'enemy' = party)
          const aliveParty = this.party.filter((p) => p.isAlive());
          if (action.targetIndex != null && this.party[action.targetIndex]?.isAlive()) {
            targets = [this.party[action.targetIndex]];
          } else {
            // Check for taunt/cover
            const taunted = aliveParty.find((p) => p.hasStatus('taunt'));
            const covering = aliveParty.find((p) => p.hasStatus('cover'));
            if (taunted) {
              targets = [taunted];
            } else if (covering) {
              targets = [covering];
            } else {
              // Random target
              targets = [randomChoice(aliveParty)];
            }
          }
        } else if (targetType === 'enemies') {
          targets = this.party.filter((p) => p.isAlive());
        } else if (targetType === 'ally' || targetType === 'allies') {
          targets = this.enemies.filter((e) => e.isAlive());
        } else if (targetType === 'self') {
          targets = [entity];
        }

        // Create ability instance
        const abilityInstance = new Ability(abilityData);
        abilityInstance.execute(entity, targets, this);
        this.showMessage(`${entity.name} uses ${abilityData.name}!`);

        // Particle effects
        const elementInfo = ELEMENTS[abilityData.element] || ELEMENTS.physical;
        if (this.battleScene && targets.length > 0) {
          const targetPos = targets[0].position || new THREE.Vector3(0, 1, 0);
          this.addParticleEffect('burst', targetPos, elementInfo.color, 10);
        }

        // Longer animation for powerful abilities
        if (abilityData.power > 1.5) {
          this._animationDuration = 1.2;
        }
      }
    }

    this.battleLog.push(`${entity.name} acted.`);
    if (this.battleLog.length > 20) this.battleLog.shift();

    setTimeout(() => {
      this._endTurn();
    }, this._animationDuration * 1000);
  }

  /**
   * Use an item on a target.
   * @param {string} itemId
   * @param {BattleEntity} target
   * @private
   */
  _useItem(itemId, target) {
    const itemData = ITEMS[itemId];
    if (!itemData) return;

    switch (itemData.effect) {
      case 'heal_hp': {
        const healAmount = itemData.power;
        target.heal(healAmount);
        this.showMessage(`${target.name} recovers ${healAmount} HP!`);
        break;
      }
      case 'heal_mp': {
        target.restoreMP(itemData.power);
        this.showMessage(`${target.name} recovers ${itemData.power} MP!`);
        break;
      }
      case 'heal_both': {
        target.heal(itemData.power);
        target.restoreMP(itemData.power);
        this.showMessage(`${target.name} recovers ${itemData.power} HP and MP!`);
        break;
      }
      case 'revive': {
        if (!target.isAlive()) {
          const reviveHP = Math.floor(target.getMaxHP() * itemData.power);
          target.revive(reviveHP);
          this.showMessage(`${target.name} is revived with ${reviveHP} HP!`);
        } else {
          this.showMessage(`${target.name} is already alive!`);
          return; // Don't consume item
        }
        break;
      }
      case 'cure_status': {
        if (target.statusEffects) {
          target.statusEffects = [];
          this.showMessage(`${target.name}'s status ailments are cured!`);
        }
        break;
      }
      case 'buff_agi': {
        target.applyStatus('agi_up');
        this.showMessage(`${target.name}'s agility increased!`);
        break;
      }
      default:
        this.showMessage(`Used ${itemData.name}.`);
    }

    // Consume item from inventory
    if (this.inventory[itemId]) {
      this.inventory[itemId]--;
      if (this.inventory[itemId] <= 0) delete this.inventory[itemId];
    }

    // Particle effect for healing
    if (this.battleScene && target.position) {
      this.addParticleEffect('heal', target.position, 0x44ff88, 8);
    }
  }

  /**
   * End the current turn and reset state.
   * @private
   */
  _endTurn() {
    if (this.activeEntity) {
      this.activeEntity.atb = 0;
      this.activeEntity.isDefending = false;
    }

    this.activeEntity = null;
    this.pendingCommand = null;
    this.battleState = 'idle';

    if (this.battleUI) {
      this.battleUI.update(this.party, this.enemies, null);
    }

    this.checkBattleEnd();
  }

  // ────────────────────────────────────────────────────────────
  //  Battle End Conditions
  // ────────────────────────────────────────────────────────────

  /**
   * Check if the battle should end.
   */
  checkBattleEnd() {
    if (this.battleState === 'victory' || this.battleState === 'defeat' || this.battleState === 'flee') {
      return;
    }

    const allEnemiesDead = this.enemies.length > 0 && this.enemies.every((e) => !e.isAlive());
    const allPartyDead = this.party.length > 0 && this.party.every((p) => !p.isAlive());

    if (allEnemiesDead) {
      this.battleState = 'victory';
      this.endBattle('victory');
    } else if (allPartyDead) {
      this.battleState = 'defeat';
      this.endBattle('defeat');
    }
  }

  /**
   * End the battle with the given result.
   * @param {'victory'|'defeat'|'flee'} result
   */
  endBattle(result) {
    if (result === 'victory') {
      // Calculate rewards
      let totalXP = 0;
      let totalGold = 0;
      const drops = [];

      for (const enemy of this.enemies) {
        const monsterData = MONSTERS[enemy.monsterId];
        if (monsterData) {
          totalXP += monsterData.xp;
          totalGold += monsterData.gold;

          // Roll for drops
          if (monsterData.drops) {
            for (const drop of monsterData.drops) {
              if (randomChance(drop.chance)) {
                drops.push(drop.item);
              }
            }
          }
        }
      }

      const rewards = {
        xp: totalXP,
        gold: totalGold,
        items: drops,
      };

      this._pendingRewards = rewards;
      this.showMessage('Victory!');

      if (this.battleUI) {
        this.battleUI.showVictory(rewards);
      }

      if (this.onVictory) {
        this.onVictory(rewards);
      }

    } else if (result === 'defeat') {
      this.showMessage('The party has fallen...');

      if (this.battleUI) {
        this.battleUI.showDefeat();
      }

      if (this.onDefeat) {
        this.onDefeat();
      }

    } else if (result === 'flee') {
      this.showMessage('Got away safely!');

      if (this.onFlee) {
        this.onFlee();
      }
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Party Management
  // ────────────────────────────────────────────────────────────

  /**
   * Swap a party member with a reserve member.
   * @param {number} activeIdx — index in active party
   * @param {number} reserveIdx — index in reserve
   */
  swapMember(activeIdx, reserveIdx) {
    if (activeIdx < 0 || activeIdx >= this.party.length) return;
    if (reserveIdx < 0 || reserveIdx >= this.reserve.length) return;

    const activeMember = this.party[activeIdx];
    const reserveMember = this.reserve[reserveIdx];

    // Swap
    this.party[activeIdx] = reserveMember;
    this.reserve[reserveIdx] = activeMember;

    reserveMember.battleIndex = activeIdx;
    reserveMember.atb = 0;

    // Update scene positions — remove old mesh, add new
    if (this.battleScene) {
      if (activeMember.mesh && activeMember.mesh.parent) {
        activeMember.mesh.parent.remove(activeMember.mesh);
      }
      this.battleScene.placeParty(this.party);
    }

    if (this.battleUI) {
      this.battleUI.update(this.party, this.enemies, this.activeEntity);
      this.battleUI.showPartyStatus(this.party);
    }

    this.showMessage(`${reserveMember.name} joins the battle!`);
  }

  // ────────────────────────────────────────────────────────────
  //  Flee
  // ────────────────────────────────────────────────────────────

  /**
   * Attempt to flee from battle.
   */
  flee() {
    const aliveParty = this.party.filter((p) => p.isAlive());
    const aliveEnemies = this.enemies.filter((e) => e.isAlive());

    if (aliveParty.length === 0) return;

    const avgPartyAgi = aliveParty.reduce((sum, p) => sum + p.getStatWithMods('agi'), 0) / aliveParty.length;
    const avgEnemyAgi = aliveEnemies.length > 0
      ? aliveEnemies.reduce((sum, e) => sum + e.getStatWithMods('agi'), 0) / aliveEnemies.length
      : 10;

    // Flee chance: base 50% + 2% per agi difference, clamped 10%-90%
    const fleeChance = clamp(0.5 + (avgPartyAgi - avgEnemyAgi) * 0.02, 0.1, 0.9);

    if (randomChance(fleeChance)) {
      this.battleState = 'flee';
      if (this.battleUI) {
        this.battleUI.hideCommandMenu();
      }
      this.endBattle('flee');
    } else {
      this.showMessage('Failed to flee!');
      this._endTurn();
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Damage & Element Calculations
  // ────────────────────────────────────────────────────────────

  /**
   * Apply elemental multiplier to damage.
   * @param {number} damage
   * @param {string} element
   * @param {object} targetData — monster data with weakTo/resists arrays
   * @returns {number} modified damage
   */
  applyElementMultiplier(damage, element, targetData) {
    if (!targetData) return damage;

    if (targetData.weakTo && targetData.weakTo.includes(element)) {
      damage *= 2;
    }

    if (targetData.resists && targetData.resists.includes(element)) {
      damage *= 0.5;
    }

    return Math.floor(damage);
  }

  // ────────────────────────────────────────────────────────────
  //  Visual Effects (delegate to BattleScene)
  // ────────────────────────────────────────────────────────────

  /**
   * Add a particle effect to the scene.
   * Accepts either (type, position, color, count) or a single object.
   * @param {string|object} type — 'burst', 'heal', 'slash', etc. or effect data object
   * @param {THREE.Vector3} [position]
   * @param {number} [color] — hex color
   * @param {number} [count] — particle count
   */
  addParticleEffect(type, position, color, count) {
    if (!this.battleScene) return;

    // Handle single-object signature
    if (typeof type === 'object' && type !== null) {
      const data = type;
      type = data.type;
      position = data.position;
      color = data.color;
      count = data.count;
    }

    if (!position) position = new THREE.Vector3(0, 1, 0);
    if (color === undefined) color = 0xffaa00;
    if (count === undefined) count = 12;

    // Delegate to BattleScene.addParticleBurst
    if (this.battleScene.addParticleBurst) {
      this.battleScene.addParticleBurst(position, color, count);
    }
  }

  /**
   * Add a visual effect mesh to the scene.
   * @param {THREE.Object3D|object} mesh — effect mesh or effect data
   * @param {number} [duration] — seconds
   */
  addEffect(mesh, duration) {
    if (this.battleScene) {
      // If mesh is an object with type property (effect data), skip visual
      // (visual effects are handled by BattleScene particle methods)
      if (mesh && typeof mesh === 'object' && mesh.type && !mesh.isObject3D) {
        return;
      }
      this.battleScene.addEffect(mesh, duration || 1.0);
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Messaging
  // ────────────────────────────────────────────────────────────

  /**
   * Show a battle message.
   * @param {string} text
   */
  showMessage(text) {
    this.battleLog.push(text);
    if (this.battleLog.length > 20) this.battleLog.shift();

    if (this.battleUI) {
      this.battleUI.showMessage(text);
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Helpers
  // ────────────────────────────────────────────────────────────

  /**
   * Get usable consumable items from inventory.
   * @returns {Array<{itemId: string, quantity: number, data: object}>}
   * @private
   */
  _getUsableItems() {
    const usable = [];
    for (const [itemId, quantity] of Object.entries(this.inventory)) {
      if (quantity <= 0) continue;
      const itemData = ITEMS[itemId];
      if (itemData && itemData.type === 'consumable') {
        usable.push({ itemId, quantity, data: itemData });
      }
    }
    return usable;
  }

  /**
   * Set the inventory for battle item usage.
   * @param {object} inventory — map of itemId -> count
   */
  setInventory(inventory) {
    this.inventory = { ...inventory };
  }

  /**
   * Set the battle UI reference.
   * @param {BattleUI} ui
   */
  setBattleUI(ui) {
    this.battleUI = ui;
    // Wire up callbacks
    ui.callbacks = {
      onSelectCommand: (command) => this.selectCommand(command),
      onSelectAbility: (abilityId) => this.selectAbility(abilityId),
      onSelectTarget: (index) => this.selectTarget(index),
      onSelectItem: (itemId) => this.selectItem(itemId),
      onFlee: () => this.flee(),
      onToggleSpeed: () => this.toggleBattleSpeed(),
      onToggleAuto: () => this.toggleAutoBattle(),
    };
  }

  // ────────────────────────────────────────────────────────────
  //  Auto-Battle & Speed Toggle
  // ────────────────────────────────────────────────────────────

  /**
   * Toggle between normal and fast battle speed.
   */
  toggleBattleSpeed() {
    this.battleSpeed = this.battleSpeed === 'normal' ? 'fast' : 'normal';
    if (this.battleUI) {
      this.battleUI.showMessage(this.battleSpeed === 'fast' ? 'Battle Speed: Fast' : 'Battle Speed: Normal');
    }
    return this.battleSpeed;
  }

  /**
   * Toggle auto-battle on/off.
   */
  toggleAutoBattle() {
    this.autoBattle = !this.autoBattle;
    if (this.battleUI) {
      this.battleUI.showMessage(this.autoBattle ? 'Auto-Battle: ON' : 'Auto-Battle: OFF');
    }
    return this.autoBattle;
  }

  /**
   * AI-controlled action for a party member (auto-battle).
   * @param {PartyMember} entity
   * @private
   */
  _autoBattleAct(entity) {
    const aliveEnemies = this.enemies.filter((e) => e.isAlive());
    if (aliveEnemies.length === 0) return;

    // Simple AI: use strongest available ability if MP > 50%, else basic attack
    const abilities = entity.getAvailableAbilityObjects();
    const attackAbilities = abilities.filter((a) => a.type === 'attack' || a.type === 'aoe');

    if (attackAbilities.length > 0 && entity.mp > attackAbilities[0].mpCost) {
      // Use strongest attack ability
      const ability = attackAbilities.reduce((best, a) =>
        (a.power || 0) > (best.power || 0) ? a : best
      );
      this.selectAbility(ability.id);
      // Auto-select first alive enemy target
      setTimeout(() => {
        if (this.battleState === 'targeting') {
          const targetIdx = this.enemies.findIndex((e) => e.isAlive());
          if (targetIdx >= 0) this.selectTarget(targetIdx);
        }
      }, 50);
    } else {
      // Basic attack
      this.selectCommand('attack');
      setTimeout(() => {
        if (this.battleState === 'targeting') {
          const targetIdx = this.enemies.findIndex((e) => e.isAlive());
          if (targetIdx >= 0) this.selectTarget(targetIdx);
        }
      }, 50);
    }
  }

  // ────────────────────────────────────────────────────────────
  //  Cleanup
  // ────────────────────────────────────────────────────────────

  /**
   * Dispose of the battle system and all resources.
   */
  dispose() {
    if (this.battleScene) {
      this.battleScene.dispose();
      this.battleScene = null;
    }

    this.party = [];
    this.enemies = [];
    this.reserve = [];
    this.turnQueue = [];
    this.activeEntity = null;
    this.pendingCommand = null;
    this.battleLog = [];
    this.battleUI = null;
    this.regionData = null;
    this.onVictory = null;
    this.onDefeat = null;
    this.onFlee = null;
    this.inventory = {};
    this._pendingRewards = null;
    this._animationTimer = 0;
    this._animationDuration = 0;
    this.battleState = 'idle';
    this.battleSpeed = 'normal';
    this.autoBattle = false;
  }
}

// Re-export the ability registry for external use
export { ABILITY_REGISTRY };
