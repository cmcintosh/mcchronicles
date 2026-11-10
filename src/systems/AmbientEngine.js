// AmbientEngine.js — Per-region ambient soundscapes using filtered noise + oscillators
// 8 region soundscapes, crossfade between regions

export default class AmbientEngine {
  constructor(audioEngine) {
    this.audioEngine = audioEngine;
    this.ctx = null;
    this.bus = null;
    this.currentRegion = null;
    this.layers = [];
    this._fadeInterval = null;
  }

  /**
   * Initialize — called after AudioEngine.init()
   */
  init() {
    this.ctx = this.audioEngine.getContext();
    this.bus = this.audioEngine.getBus('ambient');
  }

  /**
   * Region ambient configurations.
   * Each region has a wind color (bandpass freq), wind intensity, and an extra layer.
   */
  static REGION_CONFIG = {
    fry_valley: {
      windColor: 400,
      windIntensity: 0.15,
      extra: 'birdChirps',
    },
    burger_highlands: {
      windColor: 200,
      windIntensity: 0.30,
      extra: 'rockRumble',
    },
    mccafe_springs: {
      windColor: 600,
      windIntensity: 0.10,
      extra: 'waterBubbles',
    },
    mcflurry_tundra: {
      windColor: 150,
      windIntensity: 0.35,
      extra: 'iceCracks',
    },
    drive_thru_desert: {
      windColor: 300,
      windIntensity: 0.25,
      extra: 'sandHiss',
    },
    happy_meal_forest: {
      windColor: 500,
      windIntensity: 0.08,
      extra: 'toyChimes',
    },
    play_place_plains: {
      windColor: 700,
      windIntensity: 0.05,
      extra: 'distantLaughter',
    },
    golden_arches_castle: {
      windColor: 250,
      windIntensity: 0.15,
      extra: 'magicHum',
    },
    shadow_realm: {
      windColor: 100,
      windIntensity: 0.20,
      extra: 'shadowWhispers',
    },
  };

  /**
   * Start ambient for a region.
   * @param {string} regionId - Region key from REGION_CONFIG
   */
  startAmbient(regionId) {
    if (!this.ctx || !this.bus) return;
    this.audioEngine.ensureRunning();

    const config = AmbientEngine.REGION_CONFIG[regionId];
    if (!config) {
      console.warn(`[AmbientEngine] No ambient config for region: ${regionId}`);
      return;
    }

    // If same region already playing, do nothing
    if (this.currentRegion === regionId && this.layers.length > 0) return;

    this.stopAmbient();

    this.currentRegion = regionId;

    // Base layer: wind/atmosphere
    const wind = this._createWind(config.windColor, config.windIntensity);
    this.layers.push(wind);

    // Extra layer
    if (config.extra) {
      const extra = this._createExtraLayer(config.extra);
      if (extra) this.layers.push(extra);
    }
  }

  /**
   * Stop all ambient layers.
   */
  stopAmbient() {
    this.layers.forEach(layer => this._stopLayer(layer));
    this.layers = [];
    this.currentRegion = null;
    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }
  }

  /**
   * Crossfade to a new region's ambient.
   * @param {string} regionId - Target region
   * @param {number} fadeTime - Fade duration in seconds
   */
  crossfade(regionId, fadeTime = 2.0) {
    if (!this.ctx || !this.bus) return;
    if (this.currentRegion === regionId) return;

    // Fade out current layers
    const now = this.ctx.currentTime;
    this.layers.forEach(layer => {
      if (layer.gain) {
        layer.gain.gain.cancelScheduledValues(now);
        layer.gain.gain.setValueAtTime(layer.gain.gain.value, now);
        layer.gain.gain.linearRampToValueAtTime(0, now + fadeTime);
      }
    });

    // Schedule stop and start new
    setTimeout(() => {
      this.layers.forEach(layer => this._stopLayer(layer));
      this.layers = [];
      this.startAmbient(regionId);
    }, fadeTime * 1000);
  }

  // ─── Layer Creation ──────────────────────────────────────────────

  /**
   * Create a wind/atmosphere layer using filtered brown noise.
   */
  _createWind(colorFreq, intensity) {
    const noiseBuffer = this.audioEngine.createBrownNoiseBuffer(2.0);
    const source = this.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = colorFreq;
    filter.Q.value = 0.5;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;

    // Slow LFO modulation for natural wind variation
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.1;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = intensity * 0.3;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    // Fade in
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(intensity, now + 1.0);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    source.start();
    lfo.start();

    return { source, filter, gain, lfo, type: 'wind' };
  }

  /**
   * Create extra layer based on type.
   */
  _createExtraLayer(type) {
    switch (type) {
      case 'birdChirps':
        return this._createBirdChirps();
      case 'rockRumble':
        return this._createRockRumble();
      case 'waterBubbles':
        return this._createWaterBubbles();
      case 'iceCracks':
        return this._createIceCracks();
      case 'sandHiss':
        return this._createSandHiss();
      case 'toyChimes':
        return this._createToyChimes();
      case 'distantLaughter':
        return this._createDistantLaughter();
      case 'magicHum':
        return this._createMagicHum();
      case 'shadowWhispers':
        return this._createShadowWhispers();
      default:
        return null;
    }
  }

  _createBirdChirps() {
    // Periodic bird chirps using oscillator sweeps
    const layer = { type: 'birdChirps', intervals: [], gain: null };

    const gain = this.ctx.createGain();
    gain.gain.value = 0.06;
    gain.connect(this.bus);
    layer.gain = gain;

    const chirp = () => {
      if (!this.ctx || this.currentRegion === null) return;
      const now = this.ctx.currentTime;
      const baseFreq = 2000 + Math.random() * 1500;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq, now);
      osc.frequency.exponentialRampToValueAtTime(baseFreq + 500, now + 0.05);
      osc.frequency.exponentialRampToValueAtTime(baseFreq, now + 0.1);

      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(0.08, now + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(env);
      env.connect(gain);
      osc.start(now);
      osc.stop(now + 0.15);
    };

    const intervalId = setInterval(() => {
      if (Math.random() < 0.6) chirp();
    }, 1500 + Math.random() * 2000);
    layer.intervals.push(intervalId);

    return layer;
  }

  _createRockRumble() {
    // Low-frequency noise bursts
    const layer = { type: 'rockRumble', intervals: [], gain: null };

    const gain = this.ctx.createGain();
    gain.gain.value = 0.1;
    gain.connect(this.bus);
    layer.gain = gain;

    const rumble = () => {
      if (!this.ctx || this.currentRegion === null) return;
      const now = this.ctx.currentTime;
      const noiseBuffer = this.audioEngine.createBrownNoiseBuffer(0.5);
      const src = this.ctx.createBufferSource();
      src.buffer = noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 120;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0.15, now);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      src.connect(filter);
      filter.connect(env);
      env.connect(gain);
      src.start(now);
      src.stop(now + 0.5);
    };

    const intervalId = setInterval(() => {
      if (Math.random() < 0.3) rumble();
    }, 3000 + Math.random() * 4000);
    layer.intervals.push(intervalId);

    return layer;
  }

  _createWaterBubbles() {
    // Water bubble pops
    const layer = { type: 'waterBubbles', intervals: [], gain: null };

    const gain = this.ctx.createGain();
    gain.gain.value = 0.05;
    gain.connect(this.bus);
    layer.gain = gain;

    const bubble = () => {
      if (!this.ctx || this.currentRegion === null) return;
      const now = this.ctx.currentTime;
      const freq = 400 + Math.random() * 800;
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 0.08);
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(0.04, now + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.connect(env);
      env.connect(gain);
      osc.start(now);
      osc.stop(now + 0.12);
    };

    const intervalId = setInterval(() => {
      if (Math.random() < 0.5) bubble();
    }, 800 + Math.random() * 1500);
    layer.intervals.push(intervalId);

    return layer;
  }

  _createIceCracks() {
    // Random sharp cracking sounds
    const layer = { type: 'iceCracks', intervals: [], gain: null };

    const gain = this.ctx.createGain();
    gain.gain.value = 0.08;
    gain.connect(this.bus);
    layer.gain = gain;

    const crack = () => {
      if (!this.ctx || this.currentRegion === null) return;
      const now = this.ctx.currentTime;
      const noiseBuffer = this.audioEngine.createNoiseBuffer(0.1);
      const src = this.ctx.createBufferSource();
      src.buffer = noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 2500;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0.1, now);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      src.connect(filter);
      filter.connect(env);
      env.connect(gain);
      src.start(now);
      src.stop(now + 0.1);
    };

    const intervalId = setInterval(() => {
      if (Math.random() < 0.25) crack();
    }, 2000 + Math.random() * 3000);
    layer.intervals.push(intervalId);

    return layer;
  }

  _createSandHiss() {
    // Rhythmic high noise
    const noiseBuffer = this.audioEngine.createPinkNoiseBuffer(2.0);
    const source = this.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2000;
    filter.Q.value = 0.7;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 1.0);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    source.start();

    return { source, filter, gain, type: 'sandHiss' };
  }

  _createToyChimes() {
    // Random bell tones
    const layer = { type: 'toyChimes', intervals: [], gain: null };

    const gain = this.ctx.createGain();
    gain.gain.value = 0.05;
    gain.connect(this.bus);
    layer.gain = gain;

    const chime = () => {
      if (!this.ctx || this.currentRegion === null) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      const freq = notes[Math.floor(Math.random() * notes.length)];
      const osc = this.ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(0.06, now + 0.01);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc.connect(env);
      env.connect(gain);
      osc.start(now);
      osc.stop(now + 0.85);
    };

    const intervalId = setInterval(() => {
      if (Math.random() < 0.4) chime();
    }, 2000 + Math.random() * 3000);
    layer.intervals.push(intervalId);

    return layer;
  }

  _createDistantLaughter() {
    // Filtered noise bursts resembling distant laughter
    const layer = { type: 'distantLaughter', intervals: [], gain: null };

    const gain = this.ctx.createGain();
    gain.gain.value = 0.04;
    gain.connect(this.bus);
    layer.gain = gain;

    const laugh = () => {
      if (!this.ctx || this.currentRegion === null) return;
      const now = this.ctx.currentTime;
      const noiseBuffer = this.audioEngine.createPinkNoiseBuffer(0.5);
      const src = this.ctx.createBufferSource();
      src.buffer = noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 700;
      filter.Q.value = 2;
      const env = this.ctx.createGain();
      env.gain.setValueAtTime(0, now);
      env.gain.linearRampToValueAtTime(0.04, now + 0.05);
      env.gain.linearRampToValueAtTime(0.02, now + 0.2);
      env.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      src.connect(filter);
      filter.connect(env);
      env.connect(gain);
      src.start(now);
      src.stop(now + 0.5);
    };

    const intervalId = setInterval(() => {
      if (Math.random() < 0.3) laugh();
    }, 3000 + Math.random() * 4000);
    layer.intervals.push(intervalId);

    return layer;
  }

  _createMagicHum() {
    // Low drone for castle
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 110;
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = 165; // Perfect fifth

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 2.0);

    // Slow LFO for shimmer
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.3;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 0.02;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(this.bus);
    osc.start();
    osc2.start();
    lfo.start();

    return { source: osc, source2: osc2, gain, lfo, type: 'magicHum' };
  }

  _createShadowWhispers() {
    // Detuned noise whispers
    const noiseBuffer = this.audioEngine.createPinkNoiseBuffer(2.0);
    const source = this.ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 300;
    filter.Q.value = 1.5;

    const gain = this.ctx.createGain();
    gain.gain.value = 0;
    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 2.0);

    // Detuned drone underneath
    const drone = this.ctx.createOscillator();
    drone.type = 'sawtooth';
    drone.frequency.value = 50;
    const droneGain = this.ctx.createGain();
    droneGain.gain.value = 0.03;
    drone.connect(droneGain);
    droneGain.connect(this.bus);
    drone.start();

    source.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    source.start();

    return { source, filter, gain, drone, droneGain, type: 'shadowWhispers' };
  }

  // ─── Layer Cleanup ───────────────────────────────────────────────

  _stopLayer(layer) {
    try {
      if (layer.intervals) {
        layer.intervals.forEach(id => clearInterval(id));
      }
      if (layer.source) {
        layer.source.stop();
      }
      if (layer.source2) {
        layer.source2.stop();
      }
      if (layer.lfo) {
        layer.lfo.stop();
      }
      if (layer.drone) {
        layer.drone.stop();
      }
    } catch (e) {
      // Already stopped
    }
  }

  /**
   * Dispose.
   */
  dispose() {
    this.stopAmbient();
  }
}
