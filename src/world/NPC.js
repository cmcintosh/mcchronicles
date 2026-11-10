// NPC.js — Overworld NPC and treasure chest class for McChronicles

import * as THREE from 'three';
import { distance2D } from '../utils/math.js';

export class NPC {
  /**
   * @param {object} config
   * @param {string} config.name
   * @param {number} config.x
   * @param {number} config.z
   * @param {string[]} config.dialogue
   * @param {THREE.Group} config.mesh
   * @param {boolean} [config.isTreasure=false]
   * @param {string|null} [config.treasureItem=null]
   * @param {string} [config.storyEvent]
   */
  constructor(config) {
    this.name = config.name;
    this.mesh = config.mesh;
    this.position = new THREE.Vector3(config.x, 0, config.z);
    this.dialogue = config.dialogue || [];
    this.interactable = config.interactable !== undefined ? config.interactable : true;
    this.isTreasure = config.isTreasure || false;
    this.treasureItem = config.treasureItem || null;
    this.isOpen = false;
    this.storyEvent = config.storyEvent || null;

    // Random phase offset for idle bob animation
    this.bobOffset = Math.random() * Math.PI * 2;
    this._baseY = 0;
    this._time = 0;

    // Position the mesh
    if (this.mesh) {
      this.mesh.position.copy(this.position);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
    }
  }

  /**
   * Interact with this NPC or treasure.
   * @returns {{type: 'treasure'|'dialogue', ...}|null}
   */
  interact() {
    if (this.isTreasure) {
      if (!this.isOpen) {
        this.isOpen = true;
        // Visual feedback — rotate or scale the chest lid
        if (this.mesh) {
          this.mesh.rotation.y = Math.PI * 0.15;
        }
        return { type: 'treasure', item: this.treasureItem };
      }
      return null; // already opened
    }

    if (this.interactable) {
      return { type: 'dialogue', lines: this.dialogue, name: this.name };
    }

    return null;
  }

  /**
   * Per-frame update for idle animation.
   * @param {number} dt
   */
  update(dt) {
    this._time += dt;
    if (this.mesh) {
      const bob = Math.sin(this._time * 1.8 + this.bobOffset) * 0.06;
      this.mesh.position.y = this._baseY + bob;
    }
  }

  /**
   * Set new dialogue lines.
   * @param {string[]} lines
   */
  setDialogue(lines) {
    this.dialogue = lines;
  }

  /**
   * 2D distance from this NPC to a point.
   * @param {number} x
   * @param {number} z
   * @returns {number}
   */
  distanceTo(x, z) {
    return distance2D(this.position.x, this.position.z, x, z);
  }
}
