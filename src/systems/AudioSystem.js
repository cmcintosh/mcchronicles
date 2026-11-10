// AudioSystem.js — Procedural audio engine using Web Audio API
// No external audio files. All sounds generated with oscillators and noise.

export default class AudioSystem {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.muted = false;
    this.masterVolume = 1;
    this.musicVolume = 0.5;
    this.sfxVolume = 0.7;

    this.currentMusic = null; // { type, regionId, intervalId, stopFn }
    this.musicSchedulerId = null;

    // Region-specific config: tempo (ms per step), waveform, scale
    this.regionConfig = {
      fry_valley:      { tempo: 400, wave: 'triangle', scale: 'majorPentatonic', root: 261.63 },
      burger_highlands:{ tempo: 360, wave: 'square',   scale: 'minorPentatonic', root: 293.66 },
      mcflurry_tundra: { tempo: 500, wave: 'sine',     scale: 'majorPentatonic', root: 220.00 },
      happy_meal_forest:{ tempo: 380, wave: 'triangle', scale: 'majorPentatonic', root: 246.94 },
      drive_thru_desert:{ tempo: 340, wave: 'sawtooth', scale: 'minorPentatonic', root: 311.13 },
      mccafe_springs:  { tempo: 450, wave: 'sine',     scale: 'majorPentatonic', root: 277.18 },
      play_place_plains:{ tempo: 320, wave: 'square',  scale: 'majorPentatonic', root: 329.63 },
      golden_arches_castle:{ tempo: 280, wave: 'sawtooth', scale: 'minorPentatonic', root: 196.00 },
    };

    // Type-specific overrides
    this.typeConfig = {
      overworld: { tempoMul: 1.0, waveOverride: null },
      battle:    { tempoMul: 0.55, waveOverride: 'sawtooth' },
      town:      { tempoMul: 1.3, waveOverride: 'sine' },
      dungeon:   { tempoMul: 0.75, waveOverride: 'square' },
    };

    // Pentatonic scale intervals (semitone offsets from root)
    this.scales = {
      majorPentatonic: [0, 2, 4, 7, 9, 12, 14, 16, 19, 21],
      minorPentatonic: [0, 3, 5, 7, 10, 12, 15, 17, 19, 22],
    };
  }

  /**
   * Initialize the AudioContext. Must be called after a user interaction
   * (click, keypress, etc.) due to browser autoplay policies.
   */
  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
      console.warn('[AudioSystem] Web Audio API not supported');
      return;
    }
    this.ctx = new AudioContextClass();

    this.masterGain = this.ctx.createGain();
    this.musicGain = this.ctx.createGain();
    this.sfxGain = this.ctx.createGain();

    this.musicGain.connect(this.masterGain);
    this.sfxGain.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    this.masterGain.gain.value = this.masterVolume;
    this.musicGain.gain.value = this.musicVolume;
    this.sfxGain.gain.value = this.sfxVolume;
  }

  /**
   * Ensure context is running (resume if suspended).
   */
  _ensureRunning() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // ─── Volume Controls ────────────────────────────────────────────────

  setVolume(level) {
    this.masterVolume = Math.max(0, Math.min(1, level));
    if (this.masterGain && !this.muted) {
      this.masterGain.gain.value = this.masterVolume;
    }
  }

  setMusicVolume(level) {
    this.musicVolume = Math.max(0, Math.min(1, level));
    if (this.musicGain) {
      this.musicGain.gain.value = this.musicVolume;
    }
  }

  setSFXVolume(level) {
    this.sfxVolume = Math.max(0, Math.min(1, level));
    if (this.sfxGain) {
      this.sfxGain.gain.value = this.sfxVolume;
    }
  }

  mute() {
    this.muted = true;
    if (this.masterGain) {
      this.masterGain.gain.value = 0;
    }
  }

  unmute() {
    this.muted = false;
    if (this.masterGain) {
      this.masterGain.gain.value = this.masterVolume;
    }
  }

  // ─── Music ──────────────────────────────────────────────────────────

  /**
   * Start or switch background music.
   * @param {'overworld'|'battle'|'town'|'dungeon'} type
   * @param {string} regionId - One of the region keys in regionConfig
   */
  playMusic(type, regionId) {
    this._ensureRunning();
    if (!this.ctx) return;

    // Stop current music first
    this.stopMusic();

    const region = this.regionConfig[regionId] || this.regionConfig.fry_valley;
    const typeConf = this.typeConfig[type] || this.typeConfig.overworld;

    const tempo = region.tempo * (typeConf.tempoMul || 1);
    const wave = typeConf.waveOverride || region.wave;
    const scale = this.scales[region.scale] || this.scales.majorPentatonic;
    const root = region.root;

    let stepIndex = 0;
    const bassNotes = [root / 2, root / 2, root * 1.5, root / 2];

    const playStep = () => {
      if (!this.ctx || !this.currentMusic) return;

      const now = this.ctx.currentTime;

      // Melody note
      const noteIdx = scale[stepIndex % scale.length];
      const melodyFreq = root * Math.pow(2, noteIdx / 12);

      // Skip some steps for rests (every 4th step in town, every 5th in dungeon)
      let playMelody = true;
      if (type === 'town' && stepIndex % 4 === 3) playMelody = false;
      if (type === 'dungeon' && stepIndex % 5 === 4) playMelody = false;

      if (playMelody) {
        this._playNote(melodyFreq, wave, now, tempo / 1000 * 0.9, 0.15, this.musicGain);
      }

      // Bass note (every 2 steps)
      if (stepIndex % 2 === 0) {
        const bassFreq = bassNotes[(stepIndex / 2) % bassNotes.length];
        this._playNote(bassFreq, 'triangle', now, tempo / 1000 * 1.8, 0.12, this.musicGain);
      }

      // Percussion for battle
      if (type === 'battle' && stepIndex % 2 === 0) {
        this._playPercussion(now, 0.1);
      }

      stepIndex++;
    };

    // Play first step immediately
    playStep();

    // Schedule subsequent steps
    const intervalId = setInterval(playStep, tempo);

    this.currentMusic = {
      type,
      regionId,
      intervalId,
      stopFn: () => {
        clearInterval(intervalId);
      },
    };
  }

  stopMusic() {
    if (this.currentMusic) {
      this.currentMusic.stopFn();
      this.currentMusic = null;
    }
  }

  // ─── SFX ────────────────────────────────────────────────────────────

  /**
   * Play a sound effect.
   * @param {string} type - One of: blip, select, confirm, cancel, cursor,
   *   fire, ice, heal, hit, slash, levelup, save, error
   */
  playSFX(type) {
    this._ensureRunning();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const g = this.sfxGain;

    switch (type) {
      case 'blip':
        this._playNote(880, 'square', now, 0.05, 0.15, g);
        break;

      case 'select':
        this._playNote(660, 'square', now, 0.06, 0.15, g);
        this._playNote(990, 'square', now + 0.06, 0.06, 0.15, g);
        break;

      case 'confirm':
        this._playNote(523.25, 'square', now, 0.05, 0.15, g);
        this._playNote(659.25, 'square', now + 0.05, 0.05, 0.15, g);
        this._playNote(783.99, 'square', now + 0.10, 0.08, 0.15, g);
        break;

      case 'cancel':
        this._playNote(440, 'square', now, 0.06, 0.15, g);
        this._playNote(330, 'square', now + 0.06, 0.08, 0.15, g);
        break;

      case 'cursor':
        this._playNote(1200, 'square', now, 0.02, 0.08, g);
        break;

      case 'fire': {
        // Noise burst with low-pass sweep
        const noise = this._createNoiseBuffer(0.3);
        const src = this.ctx.createBufferSource();
        src.buffer = noise;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(2000, now);
        filter.frequency.exponentialRampToValueAtTime(200, now + 0.3);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        src.connect(filter);
        filter.connect(gain);
        gain.connect(g);
        src.start(now);
        src.stop(now + 0.3);
        break;
      }

      case 'ice': {
        // High-frequency sweep downward
        const osc = this.ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2000, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.4);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
        osc.connect(gain);
        gain.connect(g);
        osc.start(now);
        osc.stop(now + 0.4);
        // Add sparkle
        const osc2 = this.ctx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(3000, now);
        osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.3);
        const gain2 = this.ctx.createGain();
        gain2.gain.setValueAtTime(0.1, now);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc2.connect(gain2);
        gain2.connect(g);
        osc2.start(now);
        osc2.stop(now + 0.3);
        break;
      }

      case 'heal': {
        // Warm ascending tone
        const freqs = [392, 523.25, 659.25];
        freqs.forEach((f, i) => {
          this._playNote(f, 'sine', now + i * 0.1, 0.25, 0.15, g);
        });
        // Add shimmer
        const osc = this.ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1046.5, now);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
        osc.connect(gain);
        gain.connect(g);
        osc.start(now);
        osc.stop(now + 0.5);
        break;
      }

      case 'hit':
        this._playPercussion(now, 0.15);
        this._playNote(150, 'sawtooth', now, 0.08, 0.2, g);
        break;

      case 'slash': {
        // Quick noise sweep
        const noise = this._createNoiseBuffer(0.15);
        const src = this.ctx.createBufferSource();
        src.buffer = noise;
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(800, now);
        filter.frequency.exponentialRampToValueAtTime(3000, now + 0.15);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
        src.connect(filter);
        filter.connect(gain);
        gain.connect(g);
        src.start(now);
        src.stop(now + 0.15);
        break;
      }

      case 'levelup': {
        // Ascending arpeggio
        const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
        notes.forEach((f, i) => {
          this._playNote(f, 'square', now + i * 0.08, 0.12, 0.15, g);
        });
        break;
      }

      case 'save': {
        // Soft chime
        this._playNote(880, 'sine', now, 0.15, 0.12, g);
        this._playNote(1108.73, 'sine', now + 0.1, 0.2, 0.12, g);
        break;
      }

      case 'error': {
        // Buzz
        const osc = this.ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.linearRampToValueAtTime(100, now + 0.2);
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        osc.connect(gain);
        gain.connect(g);
        osc.start(now);
        osc.stop(now + 0.2);
        break;
      }

      default:
        console.warn(`[AudioSystem] Unknown SFX type: ${type}`);
    }
  }

  // ─── Victory / Defeat ───────────────────────────────────────────────

  playVictory() {
    this._ensureRunning();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const g = this.sfxGain;
    // Ascending arpeggio: C - E - G - C - E - G - C
    const notes = [
      { f: 523.25, t: 0.00 },
      { f: 659.25, t: 0.12 },
      { f: 783.99, t: 0.24 },
      { f: 1046.5, t: 0.36 },
      { f: 659.25, t: 0.48 },
      { f: 783.99, t: 0.60 },
      { f: 1046.5, t: 0.72 },
      { f: 1318.51, t: 0.84 },
    ];
    notes.forEach(({ f, t }) => {
      this._playNote(f, 'square', now + t, 0.18, 0.18, g);
    });
    // Final sustained chord
    [523.25, 659.25, 783.99].forEach(f => {
      this._playNote(f, 'triangle', now + 1.0, 0.6, 0.12, g);
    });
  }

  playDefeat() {
    this._ensureRunning();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const g = this.sfxGain;
    // Descending notes
    const notes = [
      { f: 440,    t: 0.00, dur: 0.3 },
      { f: 392,    t: 0.3,  dur: 0.3 },
      { f: 349.23, t: 0.6,  dur: 0.3 },
      { f: 293.66, t: 0.9,  dur: 0.3 },
      { f: 261.63, t: 1.2,  dur: 0.5 },
      { f: 196,    t: 1.7,  dur: 0.8 },
    ];
    notes.forEach(({ f, t, dur }) => {
      this._playNote(f, 'sawtooth', now + t, dur, 0.15, g);
    });
  }

  // ─── Internal Helpers ───────────────────────────────────────────────

  /**
   * Play a single note with an oscillator.
   */
  _playNote(freq, waveform, startTime, duration, volume, destination) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = waveform;
    osc.frequency.value = freq;

    // ADSR-like envelope
    const attack = 0.01;
    const release = Math.min(0.05, duration * 0.3);
    const decayTime = startTime + attack;
    const sustainLevel = volume * 0.7;
    const releaseStart = startTime + duration - release;

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, decayTime);
    gain.gain.linearRampToValueAtTime(sustainLevel, decayTime + 0.03);
    gain.gain.setValueAtTime(sustainLevel, releaseStart);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(destination || this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  /**
   * Play a percussion sound (filtered noise).
   */
  _playPercussion(startTime, volume) {
    if (!this.ctx) return;
    const noise = this._createNoiseBuffer(0.1);
    const src = this.ctx.createBufferSource();
    src.buffer = noise;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 200;
    filter.Q.value = 2;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    src.start(startTime);
    src.stop(startTime + 0.1);
  }

  /**
   * Create a noise buffer of the given duration (in seconds).
   */
  _createNoiseBuffer(duration) {
    const sampleRate = this.ctx.sampleRate;
    const buffer = this.ctx.createBuffer(1, Math.floor(sampleRate * duration), sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buffer;
  }
}
