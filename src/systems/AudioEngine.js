// AudioEngine.js — Core Web Audio API setup with bus routing
// Creates AudioContext on first user interaction, manages master + 4 buses

export default class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.buses = {};
    this._initialized = false;
    this._muted = false;

    // Default bus volumes
    this.busVolumes = {
      music: 0.7,
      sfx: 0.8,
      voice: 1.0,
      ambient: 0.5,
    };

    // Master volume
    this.masterVolume = 1.0;
  }

  /**
   * Initialize the AudioContext and bus routing.
   * MUST be called after a user gesture (click, keypress).
   */
  async init() {
    if (this._initialized) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      console.warn('[AudioEngine] Web Audio API not supported');
      return;
    }

    this.ctx = new AudioContextClass();

    // Resume immediately if suspended (browser autoplay policy)
    if (this.ctx.state === 'suspended') {
      try {
        await this.ctx.resume();
      } catch (e) {
        console.warn('[AudioEngine] Could not resume context:', e);
      }
    }

    // Master gain → destination
    this.master = this.ctx.createGain();
    this.master.gain.value = this.masterVolume;
    this.master.connect(this.ctx.destination);

    // Create 4 buses: music, sfx, voice, ambient
    for (const busName of Object.keys(this.busVolumes)) {
      const gain = this.ctx.createGain();
      gain.gain.value = this.busVolumes[busName];
      gain.connect(this.master);
      this.buses[busName] = gain;
    }

    this._initialized = true;
  }

  /**
   * Ensure context is running (resume if suspended by browser autoplay policy).
   */
  ensureRunning() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Get the AudioContext (or null if not initialized).
   */
  getContext() {
    return this.ctx;
  }

  /**
   * Get a specific bus GainNode.
   */
  getBus(name) {
    return this.buses[name] || null;
  }

  // ─── Volume Controls ──────────────────────────────────────────────

  /**
   * Set master volume (0.0 - 1.0).
   */
  setMasterVolume(value) {
    this.masterVolume = Math.max(0, Math.min(1, value));
    if (this.master && !this._muted) {
      this.master.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  /**
   * Set volume for a specific bus (0.0 - 1.0).
   */
  setBusVolume(busName, value) {
    this.busVolumes[busName] = Math.max(0, Math.min(1, value));
    if (this.buses[busName]) {
      this.buses[busName].gain.setValueAtTime(this.busVolumes[busName], this.ctx.currentTime);
    }
  }

  /**
   * Get current volume for a bus.
   */
  getBusVolume(busName) {
    return this.busVolumes[busName] ?? 0;
  }

  /**
   * Fade a bus volume over time.
   */
  fadeBus(busName, targetValue, duration = 1.0) {
    if (!this.buses[busName] || !this.ctx) return;
    const now = this.ctx.currentTime;
    this.buses[busName].gain.cancelScheduledValues(now);
    this.buses[busName].gain.setValueAtTime(this.buses[busName].gain.value, now);
    this.buses[busName].gain.linearRampToValueAtTime(targetValue, now + duration);
  }

  // ─── Mute Controls ────────────────────────────────────────────────

  mute() {
    this._muted = true;
    if (this.master) {
      this.master.gain.setValueAtTime(0, this.ctx.currentTime);
    }
  }

  unmute() {
    this._muted = false;
    if (this.master) {
      this.master.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  isMuted() {
    return this._muted;
  }

  // ─── Utility ──────────────────────────────────────────────────────

  /**
   * Create a noise buffer (white noise) of given duration.
   */
  createNoiseBuffer(duration = 1.0) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }

  /**
   * Create a brown noise buffer (softer, more natural).
   */
  createBrownNoiseBuffer(duration = 1.0) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5; // Scale up
    }
    return buffer;
  }

  /**
   * Create a pink noise buffer.
   */
  createPinkNoiseBuffer(duration = 1.0) {
    const sampleRate = this.ctx.sampleRate;
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < length; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  /**
   * Dispose and clean up.
   */
  dispose() {
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
    this._initialized = false;
  }
}
