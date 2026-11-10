// Player.js — Overworld player character for McChronicles

import * as THREE from 'three';
import { clamp, lerpAngle, randomInt } from '../utils/math.js';

export class Player {
  constructor(characterId, assetManager) {
    this.characterId = characterId;
    this.assetManager = assetManager;

    // Create the visual mesh
    this.mesh = assetManager.createCharacterMesh(characterId);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    // Position & rotation
    this.position = new THREE.Vector3(0, 0, 0);
    this.rotation = 0; // facing angle in radians (around Y axis)
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.rotation;

    // Movement
    this.speed = 8;            // units per second
    this.sprintMultiplier = 1.6;
    this.direction = new THREE.Vector3(0, 0, 0); // current movement direction
    this.isMoving = false;

    // Region
    this.currentRegion = null;

    // Encounter system
    this.encounterStepCounter = 0;
    this.encounterThreshold = randomInt(30, 50);

    // Idle animation
    this.idleTime = 0;
    this._baseY = 0;
  }

  /**
   * Update the player each frame.
   * @param {number} dt - delta time in seconds
   * @param {object} input - { up, down, left, right, sprint, interact }
   * @param {object} region - the current Region instance
   * @returns {'encounter' | null}
   */
  update(dt, input, region) {
    this.currentRegion = region;

    // Build movement vector from WASD input
    let dx = 0;
    let dz = 0;
    if (input.up) dz -= 1;
    if (input.down) dz += 1;
    if (input.left) dx -= 1;
    if (input.right) dx += 1;

    const moving = dx !== 0 || dz !== 0;
    this.isMoving = moving;

    if (moving) {
      // Normalise diagonal movement
      const len = Math.sqrt(dx * dx + dz * dz);
      dx /= len;
      dz /= len;

      const sprint = input.sprint ? this.sprintMultiplier : 1;
      const moveSpeed = this.speed * sprint;
      const moveDist = moveSpeed * dt;

      // Calculate new position
      let newX = this.position.x + dx * moveDist;
      let newZ = this.position.z + dz * moveDist;

      // Collision with region bounds
      const halfSize = region.size / 2;
      const margin = 2; // keep player inside the playable area
      newX = clamp(newX, -halfSize + margin, halfSize - margin);
      newZ = clamp(newZ, -halfSize + margin, halfSize - margin);

      this.position.x = newX;
      this.position.z = newZ;

      // Update direction vector
      this.direction.set(dx, 0, dz);

      // Rotate mesh to face movement direction
      const targetAngle = Math.atan2(dx, dz);
      this.rotation = lerpAngle(this.rotation, targetAngle, 10 * dt);
      this.mesh.rotation.y = this.rotation;

      // Increment encounter counter
      this.encounterStepCounter += moveDist * 0.5; // scale so threshold feels right

      // Reset idle timer
      this.idleTime = 0;

      // Check for encounter trigger
      if (this.encounterStepCounter >= this.encounterThreshold) {
        this.encounterStepCounter = 0;
        this.encounterThreshold = randomInt(30, 50);
        return 'encounter';
      }
    } else {
      // Not moving — idle animation
      this.getIdleAnimation(dt);
    }

    // Sync mesh position
    this.mesh.position.x = this.position.x;
    this.mesh.position.z = this.position.z;

    return null;
  }

  /**
   * Interact action — returns null by default.
   * The Region class handles nearby NPC/treasure detection.
   * @returns {null}
   */
  interact() {
    return null;
  }

  /**
   * Set the player's position in the overworld.
   * @param {number} x
   * @param {number} z
   */
  setPosition(x, z) {
    this.position.set(x, 0, z);
    this.mesh.position.set(x, this._baseY, z);
  }

  /**
   * Subtle bob animation when idle.
   * @param {number} dt - delta time
   */
  getIdleAnimation(dt) {
    this.idleTime += dt;
    const bob = Math.sin(this.idleTime * 2.5) * 0.08;
    this.mesh.position.y = this._baseY + bob;
  }

  /**
   * Get the current facing angle in radians.
   * @returns {number}
   */
  getDirection() {
    return this.rotation;
  }
}
