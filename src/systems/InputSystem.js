/**
 * InputSystem.js
 *
 * Unified keyboard + gamepad input system for the McChronicles JRPG.
 * Tracks pressed, justPressed, and justReleased states per key.
 * Provides action-based queries (confirm, cancel, menu, sprint, etc.)
 * and a normalized movement vector combining keyboard and gamepad.
 *
 * Pure ES module — no Three.js dependency.
 */

// ─── Action → key-code mapping ───────────────────────────────────────────────

const ACTION_KEYS = {
  confirm:       ['Enter', 'Space'],
  cancel:        ['Escape'],
  menu:          ['Escape'],
  sprint:        ['ShiftLeft', 'ShiftRight'],
  camera_left:   ['KeyQ'],
  camera_right:  ['KeyE'],
  party_1:       ['Digit1'],
  party_2:       ['Digit2'],
  party_3:       ['Digit3'],
  party_4:       ['Digit4'],
};

// Gamepad button indices
const GP_BUTTON = {
  confirm:      0,  // A
  cancel:       1,  // B
  menu:         9,  // Start
  camera_left:  4,  // LB
  camera_right: 5,  // RB
};

// Movement key sets
const MOVE_UP    = new Set(['KeyW', 'ArrowUp']);
const MOVE_DOWN  = new Set(['KeyS', 'ArrowDown']);
const MOVE_LEFT  = new Set(['KeyA', 'ArrowLeft']);
const MOVE_RIGHT = new Set(['KeyD', 'ArrowRight']);

// ─── Helper: clamp and deadzone ──────────────────────────────────────────────

const DEADZONE = 0.15;

function applyDeadzone(value) {
  if (Math.abs(value) < DEADZONE) return 0;
  // Remap so that values just outside the deadzone start at 0
  const sign = Math.sign(value);
  return sign * (Math.abs(value) - DEADZONE) / (1 - DEADZONE);
}

// ─── InputSystem ─────────────────────────────────────────────────────────────

export default class InputSystem {
  constructor() {
    /** Keys currently held down (by event.code). */
    this._pressed = new Set();

    /** Keys that went down *this* frame. */
    this._justPressed = new Set();

    /** Keys that went up *this* frame. */
    this._justReleased = new Set();

    // Raw browser key state — true while the physical key is down.
    this._rawKeyDown = new Set();

    // Gamepad state tracking for edge detection
    this._gpButtonWasDown = new Array(16).fill(false);

    // --- Event listeners -------------------------------------------------

    this._onKeyDown = (e) => {
      // Prevent the browser from handling game-relevant keys (e.g. scrolling
      // on arrow keys / space).  We still allow F12 / dev-tools shortcuts.
      if (this._isGameKey(e.code)) {
        e.preventDefault();
      }
      if (!this._rawKeyDown.has(e.code)) {
        // First physical press — will be registered as justPressed in update()
        this._rawKeyDown.add(e.code);
      }
    };

    this._onKeyUp = (e) => {
      this._rawKeyDown.delete(e.code);
      // Mark for justReleased detection in update()
      if (this._pressed.has(e.code)) {
        this._justReleased.add(e.code);
      }
    };

    // Handle blur — release everything so we don't get "stuck" keys.
    this._onBlur = () => {
      for (const code of this._rawKeyDown) {
        if (this._pressed.has(code)) {
          this._justReleased.add(code);
        }
      }
      this._rawKeyDown.clear();
    };

    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('blur', this._onBlur);
  }

  // ─── Public API ───────────────────────────────────────────────────────────

  /**
   * Called once per frame (before game logic).
   * Polls the raw keyboard state and gamepad state, then computes
   * justPressed / justReleased deltas.
   */
  update() {
    // --- Keyboard edge detection -----------------------------------------
    // Clear previous-frame edge sets
    this._justPressed.clear();
    this._justReleased.clear();

    // Detect newly-pressed keys (in rawKeyDown but not yet in _pressed)
    for (const code of this._rawKeyDown) {
      if (!this._pressed.has(code)) {
        this._pressed.add(code);
        this._justPressed.add(code);
      }
    }

    // Detect released keys (in _pressed but no longer in rawKeyDown)
    for (const code of this._pressed) {
      if (!this._rawKeyDown.has(code)) {
        this._justReleased.add(code);
      }
    }

    // Remove released keys from _pressed
    for (const code of this._justReleased) {
      this._pressed.delete(code);
    }

    // --- Gamepad edge detection ------------------------------------------
    this._pollGamepad();
  }

  /**
   * True while the key (event.code string) is held down.
   * @param {string} code — e.g. 'KeyW', 'Enter', 'Space'
   * @returns {boolean}
   */
  isPressed(code) {
    return this._pressed.has(code);
  }

  /**
   * True only on the frame the key transitioned from up → down.
   * @param {string} code
   * @returns {boolean}
   */
  wasJustPressed(code) {
    return this._justPressed.has(code);
  }

  /**
   * True only on the frame the key transitioned from down → up.
   * @param {string} code
   * @returns {boolean}
   */
  wasJustReleased(code) {
    return this._justReleased.has(code);
  }

  /**
   * Returns true when *any* key mapped to the named action satisfies
   * the `wasJustPressed` condition (edge-triggered).
   *
   * For 'sprint' the check is `isPressed` (held, not edge) since sprint
   * is a continuous modifier.
   *
   * @param {string} name — one of: confirm, cancel, menu, sprint,
   *        camera_left, camera_right, party_1, party_2, party_3, party_4
   * @returns {boolean}
   */
  getAction(name) {
    // Sprint is a held action, not edge-triggered
    if (name === 'sprint') {
      // Keyboard
      const keys = ACTION_KEYS[name];
      if (keys) {
        for (const code of keys) {
          if (this.isPressed(code)) return true;
        }
      }
      // Gamepad — no standard sprint button; use left stick click (button 10)
      // or right trigger (7) if pressed past threshold
      const gp = this._getActiveGamepad();
      if (gp) {
        if (gp.buttons[10] && gp.buttons[10].pressed) return true;
        if (gp.buttons[7] && gp.buttons[7].value > 0.5) return true;
      }
      return false;
    }

    // Edge-triggered actions
    const keys = ACTION_KEYS[name];
    if (keys) {
      for (const code of keys) {
        if (this.wasJustPressed(code)) return true;
      }
    }

    // Gamepad contribution
    const gpBtnIndex = GP_BUTTON[name];
    if (gpBtnIndex !== undefined) {
      const gp = this._getActiveGamepad();
      if (gp && gp.buttons[gpBtnIndex]) {
        // Edge detection handled in _pollGamepad — we store transient
        // justPressed flags in _gpJustPressed
        if (this._gpJustPressed && this._gpJustPressed.has(gpBtnIndex)) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Returns a normalized {x, z} movement vector combining keyboard
   * (WASD / arrows) and the left analog stick of the first active gamepad.
   *
   *  - x: left (-1) / right (+1)
   *  - z: up/forward (-1) / down/back (+1)  (Three.js convention)
   *
   * @returns {{x: number, z: number}}
   */
  getMovementVector() {
    let x = 0;
    let z = 0;

    // --- Keyboard --------------------------------------------------------
    if (this._anyPressed(MOVE_UP))    z -= 1;
    if (this._anyPressed(MOVE_DOWN))  z += 1;
    if (this._anyPressed(MOVE_LEFT))  x -= 1;
    if (this._anyPressed(MOVE_RIGHT)) x += 1;

    // --- Gamepad left stick ----------------------------------------------
    const gp = this._getActiveGamepad();
    if (gp) {
      const rawX = gp.axes[0] || 0;
      const rawY = gp.axes[1] || 0;
      const gx = applyDeadzone(rawX);
      const gy = applyDeadzone(rawY);

      x += gx;
      z += gy; // gamepad Y is down-positive, matching our z convention
    }

    // --- Normalize -------------------------------------------------------
    const len = Math.hypot(x, z);
    if (len > 1) {
      x /= len;
      z /= len;
    }

    return { x, z };
  }

  /**
   * Remove all event listeners.  Call when the system is no longer needed
   * (e.g. scene disposal) to prevent leaks.
   */
  dispose() {
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('blur', this._onBlur);
    this._pressed.clear();
    this._justPressed.clear();
    this._justReleased.clear();
    this._rawKeyDown.clear();
    this._gpButtonWasDown.fill(false);
  }

  // ─── Internal helpers ────────────────────────────────────────────────────

  /**
   * Returns true if *any* code in the given Set is currently pressed.
   * @param {Set<string>} codes
   * @returns {boolean}
   * @private
   */
  _anyPressed(codes) {
    for (const code of codes) {
      if (this._pressed.has(code)) return true;
    }
    return false;
  }

  /**
   * Whether a key code is one we care about (for preventDefault purposes).
   * @param {string} code
   * @returns {boolean}
   * @private
   */
  _isGameKey(code) {
    return (
      MOVE_UP.has(code) ||
      MOVE_DOWN.has(code) ||
      MOVE_LEFT.has(code) ||
      MOVE_RIGHT.has(code) ||
      code === 'Enter' ||
      code === 'Space' ||
      code === 'Escape' ||
      code === 'KeyQ' ||
      code === 'KeyE' ||
      code === 'Digit1' ||
      code === 'Digit2' ||
      code === 'Digit3' ||
      code === 'Digit4' ||
      code === 'ShiftLeft' ||
      code === 'ShiftRight'
    );
  }

  /**
   * Returns the first connected, non-null gamepad or null.
   * @returns {Gamepad|null}
   * @private
   */
  _getActiveGamepad() {
    if (!navigator.getGamepads) return null;
    const pads = navigator.getGamepads();
    if (!pads) return null;
    for (let i = 0; i < pads.length; i++) {
      if (pads[i] && pads[i].connected) return pads[i];
    }
    return null;
  }

  /**
   * Polls the active gamepad and updates edge-detection sets.
   * Stores transient justPressed button indices in _gpJustPressed.
   * @private
   */
  _pollGamepad() {
    this._gpJustPressed = new Set();

    const gp = this._getActiveGamepad();
    if (!gp) {
      // If gamepad disconnected, reset all "was down" flags
      this._gpButtonWasDown.fill(false);
      return;
    }

    for (let i = 0; i < gp.buttons.length; i++) {
      const isDown = gp.buttons[i] ? gp.buttons[i].pressed : false;
      const wasDown = this._gpButtonWasDown[i];

      if (isDown && !wasDown) {
        // Edge: just pressed
        this._gpJustPressed.add(i);
      }

      // Also feed justReleased back into the keyboard-style API for
      // gamepad buttons that map to key codes.  This lets wasJustReleased
      // work transparently for gamepad buttons via getAction — though the
      // primary use-case is getAction / getMovementVector.

      this._gpButtonWasDown[i] = isDown;
    }
  }
}
