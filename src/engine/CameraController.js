import * as THREE from 'three';
import { lerp, lerpAngle, clamp, smoothstep } from '../utils/math.js';

/**
 * CameraController — manages a THREE.PerspectiveCamera across four JRPG camera modes.
 *
 * Modes:
 *   - "overworld": third-person follow cam behind the player, with Q/E yaw rotation
 *   - "battle":    framed on the midpoint of all combatants, with subtle sin/cos sway
 *   - "menu":      static 45-degree overhead angle
 *   - "title":     slow orbit around the origin
 *
 * Mode transitions are blended over ~0.33 seconds using lerp on both
 * camera position and lookAt target.
 */
export default class CameraController {
  /**
   * @param {THREE.PerspectiveCamera} camera
   */
  constructor(camera) {
    this.camera = camera;

    // --- State -------------------------------------------------------------
    this.currentMode = 'overworld';
    this.targetObject = null;           // THREE.Object3D | { position: THREE.Vector3 }
    this.cameraYaw = 0;                 // radians, overworld rotation
    this.transitionT = 1;               // 0 → 1, 1 means transition complete
    this.transitionSpeed = 3.0;         // units per second

    // Transition start / end snapshots
    this.previousPosition = new THREE.Vector3();
    this.previousLookAt = new THREE.Vector3();
    this.targetPosition = new THREE.Vector3();
    this.targetLookAt = new THREE.Vector3();

    // Working look-at point (where the camera points each frame)
    this.currentLookAt = new THREE.Vector3();

    // --- Mode-specific configuration ---------------------------------------
    this.overworldOffset = new THREE.Vector3(0, 6, 10);
    this.overworldFollowSpeed = 5.0;
    this.overworldYawSpeed = 2.5;       // radians per second when Q/E held
    this.overworldSmoothing = 0.08;     // lerp factor for smooth follow
    this.overworldBobAmplitude = 0.1;   // subtle vertical bob
    this.overworldBobSpeed = 1.0;       // bob frequency multiplier

    // Battle mode
    this.battleCombatants = [];         // array of THREE.Vector3
    this.battleTime = 0;
    this.battleSwayAmplitude = 0.6;
    this.battleSwaySpeed = 1.2;
    this.battleDistance = 18;
    this.battleHeight = 12;

    // Menu mode
    this.menuPosition = new THREE.Vector3(0, 20, 20);
    this.menuLookAt = new THREE.Vector3(0, 0, 0);

    // Title mode
    this.titleRadius = 20;
    this.titleHeight = 10;
    this.titleOrbitSpeed = 0.1;         // radians per second (slow orbit)

    // Region / fog reference
    this.regionData = null;

    // Input flags for Q/E rotation (set externally or polled in update)
    this.inputRotateLeft = false;       // Q
    this.inputRotateRight = false;      // E

    // Initialize current lookAt to camera's current target
    this.currentLookAt.set(0, 0, 0);

    // Initialise previous snapshots from the camera's current transform
    this.previousPosition.copy(this.camera.position);
    this.previousLookAt.copy(this.currentLookAt);
    this.targetPosition.copy(this.camera.position);
    this.targetLookAt.copy(this.currentLookAt);
  }

  // -----------------------------------------------------------------------
  //  Public API
  // -----------------------------------------------------------------------

  /**
   * Switch to a new camera mode. Begins a blended transition from the
   * current position/lookAt to the new mode's framing.
   * @param {'overworld'|'battle'|'menu'|'title'} mode
   */
  setMode(mode) {
    if (mode === this.currentMode) return;

    // Snapshot where we are right now as the transition start
    this.previousPosition.copy(this.camera.position);
    this.previousLookAt.copy(this.currentLookAt);

    this.currentMode = mode;
    this.transitionT = 0;

    // Immediately compute the destination for the new mode so the
    // transition has a stable end point throughout the blend.
    this._updateTargetPosition(0);
  }

  /**
   * Set the follow target for overworld (and general) mode.
   * @param {THREE.Object3D|{position: THREE.Vector3}} target
   */
  setTarget(target) {
    this.targetObject = target;
  }

  /**
   * Set combatant positions for battle camera framing.
   * @param {THREE.Vector3[]} positions
   */
  setBattleCombatants(positions) {
    this.battleCombatants = positions;
  }

  /**
   * Store region data and optionally adjust fog on the scene's fog object.
   * The camera itself doesn't hold fog, but we can store the values for
   * the renderer/scene to consume.
   * @param {{fogColor?: number, fogDensity?: number, fogNear?: number, fogFar?: number}} regionData
   */
  setRegion(regionData) {
    this.regionData = regionData;

    // If the camera has a reference to a scene with fog, update it.
    // Three.js stores fog on the scene, not the camera — but we can
    // apply it if the caller has attached a fog object to camera.userData.
    const fog = this.camera.userData.fog;
    if (fog && regionData) {
      if (regionData.fogColor !== undefined) {
        fog.color.setHex(regionData.fogColor);
      }
      if (regionData.fogDensity !== undefined) {
        fog.density = regionData.fogDensity;
      }
      if (regionData.fogNear !== undefined) {
        fog.near = regionData.fogNear;
      }
      if (regionData.fogFar !== undefined) {
        fog.far = regionData.fogFar;
      }
    }
  }

  // -----------------------------------------------------------------------
  //  Per-frame update
  // -----------------------------------------------------------------------

  /**
   * Advance the camera: handle transitions, input, and mode-specific logic.
   * @param {number} dt  delta time in seconds
   */
  update(dt) {
    // --- Advance transition timer ----------------------------------------
    if (this.transitionT < 1) {
      this.transitionT = Math.min(1, this.transitionT + this.transitionSpeed * dt);
    }

    // --- Handle overworld yaw input --------------------------------------
    if (this.currentMode === 'overworld') {
      if (this.inputRotateLeft) {
        this.cameraYaw += this.overworldYawSpeed * dt;
      }
      if (this.inputRotateRight) {
        this.cameraYaw -= this.overworldYawSpeed * dt;
      }
    }

    // --- Compute the desired position & lookAt for the active mode -------
    this._updateTargetPosition(dt);

    // --- Blend or apply --------------------------------------------------
    if (this.transitionT < 1) {
      const t = smoothstep(0, 1, this.transitionT);
      this.camera.position.lerpVectors(
        this.previousPosition,
        this.targetPosition,
        t
      );
      this.currentLookAt.lerpVectors(
        this.previousLookAt,
        this.targetLookAt,
        t
      );
    } else {
      // Transition complete — smooth follow toward target with lerp smoothing
      const smoothing = this.currentMode === 'overworld' ? this.overworldSmoothing : clamp(this.overworldFollowSpeed * dt, 0, 1);
      this.camera.position.lerp(this.targetPosition, smoothing);
      this.currentLookAt.lerp(this.targetLookAt, smoothing);
    }

    this.camera.lookAt(this.currentLookAt);
  }

  // -----------------------------------------------------------------------
  //  Internal: compute the desired end position & lookAt for the active mode
  // -----------------------------------------------------------------------

  /**
   * Updates this.targetPosition and this.targetLookAt based on currentMode.
   * @param {number} dt
   * @private
   */
  _updateTargetPosition(dt) {
    switch (this.currentMode) {
      case 'overworld':
        this._computeOverworld(dt);
        break;
      case 'battle':
        this._computeBattle(dt);
        break;
      case 'menu':
        this._computeMenu();
        break;
      case 'title':
        this._computeTitle(dt);
        break;
      default:
        // Fallback: stay put
        this.targetPosition.copy(this.camera.position);
        this.targetLookAt.copy(this.currentLookAt);
        break;
    }
  }

  // --- Overworld ---------------------------------------------------------

  /** @private */
  _computeOverworld(dt) {
    if (!this.targetObject) {
      this.targetPosition.copy(this.camera.position);
      this.targetLookAt.copy(this.currentLookAt);
      return;
    }

    const playerPos = this.targetObject.position;

    // Rotate the default offset around the Y axis by cameraYaw
    const cosY = Math.cos(this.cameraYaw);
    const sinY = Math.sin(this.cameraYaw);

    const offsetX = this.overworldOffset.x * cosY - this.overworldOffset.z * sinY;
    const offsetZ = this.overworldOffset.x * sinY + this.overworldOffset.z * cosY;
    const offsetY = this.overworldOffset.y;

    // Subtle vertical bob for "alive" feel
    const bobY = Math.sin(performance.now() * 0.001 * this.overworldBobSpeed) * this.overworldBobAmplitude;

    this.targetPosition.set(
      playerPos.x + offsetX,
      playerPos.y + offsetY + bobY,
      playerPos.z + offsetZ
    );

    // Look at the player's position (slightly above feet)
    this.targetLookAt.set(
      playerPos.x,
      playerPos.y + 1.0,
      playerPos.z
    );
  }

  // --- Battle ------------------------------------------------------------

  /** @private */
  _computeBattle(dt) {
    this.battleTime += dt;

    if (this.battleCombatants.length === 0) {
      // No combatants — default battle framing
      this.targetPosition.set(0, this.battleHeight, this.battleDistance);
      this.targetLookAt.set(0, 0, 0);
      return;
    }

    // Compute midpoint of all combatant positions
    const midpoint = new THREE.Vector3();
    for (const pos of this.battleCombatants) {
      midpoint.add(pos);
    }
    midpoint.divideScalar(this.battleCombatants.length);

    // Position camera at an angle above and away from the midpoint.
    // We place it behind and above, offset to one side for a dramatic angle.
    const angle = -Math.PI * 0.25; // 45-degree viewing angle

    const baseX = midpoint.x + Math.sin(angle) * this.battleDistance;
    const baseZ = midpoint.z + Math.cos(angle) * this.battleDistance;
    const baseY = midpoint.y + this.battleHeight;

    // Subtle sway
    const swayX = Math.sin(this.battleTime * this.battleSwaySpeed) * this.battleSwayAmplitude;
    const swayY = Math.cos(this.battleTime * this.battleSwaySpeed) * this.battleSwayAmplitude;

    this.targetPosition.set(
      baseX + swayX,
      baseY + swayY,
      baseZ
    );

    // Look at the midpoint, slightly raised
    this.targetLookAt.set(
      midpoint.x,
      midpoint.y + 1.5,
      midpoint.z
    );
  }

  // --- Menu --------------------------------------------------------------

  /** @private */
  _computeMenu() {
    // Static 45-degree overhead angle
    this.targetPosition.copy(this.menuPosition);
    this.targetLookAt.copy(this.menuLookAt);
  }

  // --- Title -------------------------------------------------------------

  /** @private */
  _computeTitle(dt) {
    // Slowly orbit around origin
    // Use accumulated time via battleTime-like accumulator
    if (!this._titleAngle) this._titleAngle = 0;
    this._titleAngle += this.titleOrbitSpeed * dt;

    const x = Math.cos(this._titleAngle) * this.titleRadius;
    const z = Math.sin(this._titleAngle) * this.titleRadius;
    const y = this.titleHeight;

    this.targetPosition.set(x, y, z);
    this.targetLookAt.set(0, 0, 0);
  }
}
