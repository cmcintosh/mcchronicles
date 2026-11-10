// SfxEngine.js — Procedural sound effects using Web Audio API
// 100+ SFX synthesized with oscillators, noise buffers, filters, envelopes
// No audio files needed — everything generated in code

export default class SfxEngine {
  constructor(audioEngine) {
    this.audioEngine = audioEngine;
    this.ctx = null;
    this.bus = null;
    this._noiseCache = {};
  }

  /**
   * Initialize — called after AudioEngine.init()
   */
  init() {
    this.ctx = this.audioEngine.getContext();
    this.bus = this.audioEngine.getBus('sfx');
    this._preloadNoiseBuffers();
  }

  /**
   * Pre-create reusable noise buffers.
   */
  _preloadNoiseBuffers() {
    this._noiseCache.short = this.audioEngine.createNoiseBuffer(0.2);
    this._noiseCache.medium = this.audioEngine.createNoiseBuffer(0.5);
    this._noiseCache.long = this.audioEngine.createNoiseBuffer(1.0);
    this._noiseCache.brownShort = this.audioEngine.createBrownNoiseBuffer(0.5);
    this._noiseCache.brownMedium = this.audioEngine.createBrownNoiseBuffer(1.0);
    this._noiseCache.brownLong = this.audioEngine.createBrownNoiseBuffer(2.0);
    this._noiseCache.pinkMedium = this.audioEngine.createPinkNoiseBuffer(0.5);
  }

  /**
   * Play a sound effect by name.
   * @param {string} name - SFX identifier (e.g. 'hit_physical', 'ui_select')
   */
  playSfx(name) {
    if (!this.ctx || !this.bus) return;
    this.audioEngine.ensureRunning();

    const fn = this._sfxMap[name];
    if (fn) {
      fn.call(this);
    } else {
      console.warn(`[SfxEngine] Unknown SFX: ${name}`);
    }
  }

  // ─── Helper: play a single note ──────────────────────────────────
  _note(freq, waveform, startTime, duration, volume, destination) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = waveform;
    osc.frequency.value = freq;

    const attack = 0.005;
    const release = Math.min(0.05, duration * 0.3);
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + attack);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(gain);
    gain.connect(destination || this.bus);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  // ─── Helper: noise burst ─────────────────────────────────────────
  _noiseBurst(buffer, startTime, duration, filterType, filterFreq, volume) {
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = filterType || 'lowpass';
    filter.frequency.setValueAtTime(filterFreq || 1000, startTime);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume || 0.3, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    src.start(startTime);
    src.stop(startTime + duration + 0.05);
    return { src, filter, gain };
  }

  // ─── Helper: frequency sweep ─────────────────────────────────────
  _sweep(waveform, startFreq, endFreq, startTime, duration, volume) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = waveform;
    osc.frequency.setValueAtTime(startFreq, startTime);
    osc.frequency.exponentialRampToValueAtTime(Math.max(0.01, endFreq), startTime + duration);
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  // ═══ BATTLE SFX (40+) ═════════════════════════════════════════════

  _hit_physical() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.1, 'lowpass', 800, 0.35);
    this._note(120, 'sawtooth', now, 0.08, 0.2);
  }

  _hit_critical() {
    const now = this.ctx.currentTime;
    // Ring mod effect for critical
    const noise = this.ctx.createBufferSource();
    noise.buffer = this._noiseCache.short;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1500;
    filter.Q.value = 5;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    noise.start(now);
    noise.stop(now + 0.2);
    // High-pitched sting
    this._note(1200, 'square', now, 0.1, 0.15);
  }

  _hit_magical() {
    const now = this.ctx.currentTime;
    this._sweep('sine', 800, 200, now, 0.2, 0.25);
    this._note(440, 'triangle', now, 0.15, 0.15);
  }

  _hit_enemy() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.08, 'lowpass', 600, 0.3);
    this._note(200, 'sawtooth', now, 0.06, 0.15);
  }

  _enemy_defeat() {
    const now = this.ctx.currentTime;
    // Descending tone
    this._sweep('sawtooth', 400, 80, now, 0.3, 0.2);
    // Noise wash
    this._noiseBurst(this._noiseCache.medium, now, 0.3, 'lowpass', 500, 0.15);
  }

  _level_up() {
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
    notes.forEach((f, i) => {
      this._note(f, 'triangle', now + i * 0.08, 0.15, 0.2);
    });
    // Sparkle
    this._note(2093, 'sine', now + 0.4, 0.3, 0.1);
  }

  _ability_slash() {
    const now = this.ctx.currentTime;
    // Filtered noise sweep
    const src = this.ctx.createBufferSource();
    src.buffer = this._noiseCache.short;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(4000, now + 0.15);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.bus);
    src.start(now);
    src.stop(now + 0.2);
  }

  _ability_fire() {
    const now = this.ctx.currentTime;
    // Low noise + descending pitch
    this._noiseBurst(this._noiseCache.medium, now, 0.3, 'lowpass', 2000, 0.25);
    this._sweep('sawtooth', 300, 80, now, 0.3, 0.15);
  }

  _ability_ice() {
    const now = this.ctx.currentTime;
    // High crystal tones
    this._sweep('sine', 3000, 600, now, 0.25, 0.2);
    this._note(2000, 'triangle', now, 0.2, 0.1);
    // Shimmer
    setTimeout(() => {
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      this._note(4000, 'sine', t, 0.1, 0.08);
      this._note(3000, 'sine', t + 0.05, 0.1, 0.08);
    }, 100);
  }

  _ability_electric() {
    const now = this.ctx.currentTime;
    // Sawtooth buzz + ring mod
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.linearRampToValueAtTime(60, now + 0.2);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    // Ring mod via gain modulation
    const mod = this.ctx.createOscillator();
    mod.frequency.value = 50;
    const modGain = this.ctx.createGain();
    modGain.gain.value = 0.5;
    mod.connect(modGain);
    modGain.connect(gain.gain);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    mod.start(now);
    osc.stop(now + 0.25);
    mod.stop(now + 0.25);
    // Buzz noise
    this._noiseBurst(this._noiseCache.short, now, 0.15, 'bandpass', 2000, 0.15);
  }

  _ability_holy() {
    const now = this.ctx.currentTime;
    // Bell tone + ascending harmonics
    this._note(523.25, 'sine', now, 0.4, 0.2);
    this._note(1046.5, 'sine', now, 0.35, 0.1);
    this._note(1568, 'sine', now + 0.1, 0.3, 0.08);
    this._note(2093, 'sine', now + 0.2, 0.25, 0.06);
  }

  _ability_dark() {
    const now = this.ctx.currentTime;
    // Detuned low oscillators
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc2.type = 'sawtooth';
    osc1.frequency.value = 80;
    osc2.frequency.value = 83; // Detuned
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.bus);
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  }

  _ability_heal() {
    const now = this.ctx.currentTime;
    // Rising sine + bell
    this._sweep('sine', 392, 784, now, 0.4, 0.2);
    this._note(523.25, 'triangle', now + 0.1, 0.3, 0.12);
    this._note(783.99, 'sine', now + 0.2, 0.3, 0.08);
  }

  _ability_buff() {
    const now = this.ctx.currentTime;
    // Warm chord stab
    [392, 493.88, 587.33].forEach(f => {
      this._note(f, 'triangle', now, 0.2, 0.12);
    });
  }

  _ability_debuff() {
    const now = this.ctx.currentTime;
    // Descending dissonant tone
    this._sweep('sawtooth', 300, 150, now, 0.2, 0.15);
    this._note(155, 'square', now, 0.15, 0.08);
  }

  _block() {
    const now = this.ctx.currentTime;
    // Metallic clink
    const osc = this.ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.value = 2500;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  _miss() {
    const now = this.ctx.currentTime;
    // Whoosh
    this._sweep('sine', 2000, 400, now, 0.15, 0.12);
  }

  _flee_success() {
    const now = this.ctx.currentTime;
    // Rising whoosh
    this._sweep('sine', 200, 2000, now, 0.3, 0.15);
  }

  _flee_fail() {
    const now = this.ctx.currentTime;
    // Buzz
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, now);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.12);
  }

  _victory() {
    const now = this.ctx.currentTime;
    // Short pop fanfare — 3 notes
    this._note(523.25, 'square', now, 0.15, 0.2);
    this._note(659.25, 'square', now + 0.15, 0.15, 0.2);
    this._note(783.99, 'square', now + 0.3, 0.3, 0.2);
    // Harmonies
    this._note(659.25, 'triangle', now + 0.15, 0.15, 0.1);
    this._note(783.99, 'triangle', now + 0.3, 0.3, 0.1);
  }

  _game_over() {
    const now = this.ctx.currentTime;
    // Descending sad tones over 2 seconds
    const notes = [
      { f: 440, t: 0, dur: 0.3 },
      { f: 392, t: 0.3, dur: 0.3 },
      { f: 349.23, t: 0.6, dur: 0.3 },
      { f: 293.66, t: 0.9, dur: 0.3 },
      { f: 261.63, t: 1.2, dur: 0.5 },
      { f: 196, t: 1.7, dur: 0.8 },
    ];
    notes.forEach(({ f, t, dur }) => {
      this._note(f, 'sawtooth', now + t, dur, 0.15);
    });
  }

  _combo() {
    const now = this.ctx.currentTime;
    // Double hit + bell
    this._noiseBurst(this._noiseCache.short, now, 0.06, 'lowpass', 800, 0.25);
    this._noiseBurst(this._noiseCache.short, now + 0.08, 0.06, 'lowpass', 1000, 0.25);
    this._note(1568, 'sine', now + 0.16, 0.15, 0.1);
  }

  // Additional battle SFX
  _hit_heavy() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.15, 'lowpass', 400, 0.4);
    this._note(80, 'sawtooth', now, 0.1, 0.25);
  }

  _hit_light() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.05, 'highpass', 2000, 0.15);
  }

  _ability_wind() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.medium, now, 0.4, 'bandpass', 600, 0.2);
  }

  _ability_earth() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.brownShort, now, 0.3, 'lowpass', 300, 0.3);
    this._note(60, 'sine', now, 0.3, 0.2);
  }

  _ability_poison() {
    const now = this.ctx.currentTime;
    // Bubbling
    for (let i = 0; i < 4; i++) {
      const t = now + i * 0.05;
      this._note(200 + i * 50, 'sawtooth', t, 0.06, 0.08);
    }
  }

  _ability_holy_beam() {
    const now = this.ctx.currentTime;
    this._sweep('sine', 400, 1600, now, 0.5, 0.2);
    this._note(1046.5, 'sine', now, 0.5, 0.1);
  }

  _ability_shadow() {
    const now = this.ctx.currentTime;
    // Low drone + whisper noise
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 55;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.45);
    this._noiseBurst(this._noiseCache.pinkMedium, now, 0.4, 'bandpass', 200, 0.08);
  }

  _boss_roar() {
    const now = this.ctx.currentTime;
    // Deep roar
    this._sweep('sawtooth', 150, 50, now, 0.6, 0.3);
    this._noiseBurst(this._noiseCache.brownMedium, now, 0.5, 'lowpass', 200, 0.2);
  }

  _boss_slam() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.brownShort, now, 0.3, 'lowpass', 150, 0.4);
    this._note(50, 'sine', now, 0.3, 0.25);
  }

  _encounter_alert() {
    const now = this.ctx.currentTime;
    // Whoosh + alert tone
    this._sweep('sawtooth', 100, 800, now, 0.15, 0.15);
    this._note(880, 'square', now + 0.1, 0.1, 0.15);
    this._note(660, 'square', now + 0.2, 0.1, 0.12);
  }

  _battle_start() {
    const now = this.ctx.currentTime;
    // Dramatic stinger
    this._note(220, 'sawtooth', now, 0.15, 0.2);
    this._note(440, 'sawtooth', now + 0.05, 0.15, 0.15);
    this._noiseBurst(this._noiseCache.short, now, 0.1, 'bandpass', 1000, 0.2);
  }

  _battle_turn() {
    const now = this.ctx.currentTime;
    this._note(660, 'sine', now, 0.05, 0.1);
  }

  _battle_win_cinematic() {
    const now = this.ctx.currentTime;
    // Extended fanfare
    const notes = [
      { f: 523.25, t: 0, dur: 0.15 },
      { f: 659.25, t: 0.12, dur: 0.15 },
      { f: 783.99, t: 0.24, dur: 0.15 },
      { f: 1046.5, t: 0.36, dur: 0.3 },
      { f: 1318.51, t: 0.6, dur: 0.4 },
    ];
    notes.forEach(({ f, t, dur }) => {
      this._note(f, 'square', now + t, dur, 0.18);
      this._note(f * 0.5, 'triangle', now + t, dur, 0.08);
    });
  }

  // ═══ UI SFX (20+) ═════════════════════════════════════════════════

  _ui_navigate() {
    const now = this.ctx.currentTime;
    this._note(880, 'square', now, 0.04, 0.12);
  }

  _ui_select() {
    const now = this.ctx.currentTime;
    this._note(660, 'square', now, 0.05, 0.12);
    this._note(990, 'square', now + 0.05, 0.06, 0.12);
  }

  _ui_cancel() {
    const now = this.ctx.currentTime;
    this._note(440, 'square', now, 0.06, 0.12);
    this._note(330, 'square', now + 0.06, 0.08, 0.12);
  }

  _ui_cursor() {
    const now = this.ctx.currentTime;
    this._note(1200, 'square', now, 0.02, 0.06);
  }

  _ui_error() {
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.linearRampToValueAtTime(100, now + 0.2);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.22);
  }

  _ui_save() {
    const now = this.ctx.currentTime;
    this._note(880, 'sine', now, 0.15, 0.12);
    this._note(1108.73, 'sine', now + 0.1, 0.2, 0.12);
  }

  _ui_load() {
    const now = this.ctx.currentTime;
    this._note(659.25, 'sine', now, 0.1, 0.12);
    this._note(880, 'sine', now + 0.08, 0.1, 0.12);
    this._note(1108.73, 'sine', now + 0.16, 0.2, 0.12);
  }

  _ui_quest_accept() {
    const now = this.ctx.currentTime;
    // 2-note fanfare
    this._note(523.25, 'square', now, 0.15, 0.15);
    this._note(783.99, 'square', now + 0.15, 0.2, 0.15);
  }

  _ui_quest_complete() {
    const now = this.ctx.currentTime;
    // 4-note fanfare
    this._note(523.25, 'square', now, 0.1, 0.15);
    this._note(659.25, 'square', now + 0.1, 0.1, 0.15);
    this._note(783.99, 'square', now + 0.2, 0.1, 0.15);
    this._note(1046.5, 'square', now + 0.3, 0.3, 0.15);
    // Harmony
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => {
      this._note(f * 0.5, 'triangle', now + i * 0.1, 0.15, 0.06);
    });
  }

  _ui_item() {
    const now = this.ctx.currentTime;
    // Sparkle
    this._note(1568, 'sine', now, 0.1, 0.1);
    this._note(2093, 'sine', now + 0.05, 0.1, 0.06);
  }

  _ui_shop_buy() {
    const now = this.ctx.currentTime;
    // Coin sound
    this._note(1318.51, 'square', now, 0.06, 0.12);
    this._note(1760, 'square', now + 0.06, 0.1, 0.1);
  }

  _ui_shop_sell() {
    const now = this.ctx.currentTime;
    // Coin + register
    this._note(1318.51, 'square', now, 0.06, 0.1);
    this._noiseBurst(this._noiseCache.short, now + 0.05, 0.05, 'bandpass', 3000, 0.1);
  }

  _ui_equip() {
    const now = this.ctx.currentTime;
    // Click + chime
    this._noiseBurst(this._noiseCache.short, now, 0.03, 'highpass', 3000, 0.15);
    this._note(880, 'sine', now + 0.03, 0.1, 0.1);
  }

  _ui_unequip() {
    const now = this.ctx.currentTime;
    // Click
    this._noiseBurst(this._noiseCache.short, now, 0.03, 'highpass', 2000, 0.12);
  }

  _ui_craft() {
    const now = this.ctx.currentTime;
    // Ding
    this._note(1568, 'sine', now, 0.2, 0.12);
    this._note(2093, 'sine', now + 0.05, 0.2, 0.08);
  }

  _ui_craft_fail() {
    const now = this.ctx.currentTime;
    // Fizzle
    this._noiseBurst(this._noiseCache.short, now, 0.15, 'lowpass', 400, 0.15);
    this._sweep('sawtooth', 300, 100, now, 0.15, 0.1);
  }

  _ui_save_point() {
    const now = this.ctx.currentTime;
    // Warm hum + chime
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 220;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.linearRampToValueAtTime(0.001, now + 0.5);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.55);
    this._note(880, 'sine', now + 0.1, 0.3, 0.1);
  }

  _ui_fast_travel() {
    const now = this.ctx.currentTime;
    // Whoosh + chime
    this._sweep('sine', 200, 2000, now, 0.3, 0.12);
    this._note(1046.5, 'sine', now + 0.2, 0.2, 0.1);
  }

  _ui_notification() {
    const now = this.ctx.currentTime;
    // Soft bell
    this._note(783.99, 'sine', now, 0.2, 0.1);
  }

  _ui_menu_open() {
    const now = this.ctx.currentTime;
    this._note(440, 'triangle', now, 0.1, 0.1);
    this._note(660, 'triangle', now + 0.05, 0.1, 0.08);
  }

  _ui_menu_close() {
    const now = this.ctx.currentTime;
    this._note(660, 'triangle', now, 0.08, 0.1);
    this._note(440, 'triangle', now + 0.05, 0.08, 0.08);
  }

  _ui_tab_switch() {
    const now = this.ctx.currentTime;
    this._note(740, 'square', now, 0.04, 0.08);
  }

  _ui_page_turn() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.08, 'highpass', 3000, 0.06);
  }

  _ui_level_up() {
    const now = this.ctx.currentTime;
    // Ascending notes for UI level up
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((f, i) => {
      this._note(f, 'square', now + i * 0.08, 0.12, 0.15);
    });
  }

  // ═══ WORLD SFX (20+) ═══════════════════════════════════════════════

  _footstep_grass() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.06, 'lowpass', 500, 0.08);
  }

  _footstep_stone() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.04, 'highpass', 1500, 0.06);
  }

  _footstep_snow() {
    const now = this.ctx.currentTime;
    // Crunch
    this._noiseBurst(this._noiseCache.short, now, 0.08, 'bandpass', 2500, 0.1);
  }

  _footstep_sand() {
    const now = this.ctx.currentTime;
    // Soft scrape
    this._noiseBurst(this._noiseCache.short, now, 0.06, 'bandpass', 800, 0.06);
  }

  _footstep_wood() {
    const now = this.ctx.currentTime;
    // Hollow thud
    this._note(150, 'sine', now, 0.06, 0.1);
    this._noiseBurst(this._noiseCache.short, now, 0.03, 'bandpass', 600, 0.05);
  }

  _treasure_chest() {
    const now = this.ctx.currentTime;
    // Wood creak + lid
    this._sweep('sawtooth', 100, 200, now, 0.2, 0.1);
    this._noiseBurst(this._noiseCache.short, now + 0.15, 0.1, 'lowpass', 800, 0.12);
  }

  _door_open() {
    const now = this.ctx.currentTime;
    // Creak
    this._sweep('sawtooth', 150, 300, now, 0.3, 0.08);
    this._noiseBurst(this._noiseCache.short, now + 0.2, 0.1, 'lowpass', 600, 0.08);
  }

  _region_enter() {
    const now = this.ctx.currentTime;
    // Whoosh
    this._sweep('sine', 100, 1000, now, 0.4, 0.12);
    this._noiseBurst(this._noiseCache.medium, now, 0.4, 'bandpass', 800, 0.06);
  }

  _save_point_hum() {
    const now = this.ctx.currentTime;
    // Warm hum
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 220;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.85);
  }

  _water_splash() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.12, 'bandpass', 1500, 0.15);
    this._note(800, 'sine', now, 0.08, 0.08);
  }

  _bush_rustle() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.1, 'highpass', 2000, 0.08);
  }

  _jump() {
    const now = this.ctx.currentTime;
    // Whoosh up
    this._sweep('sine', 300, 800, now, 0.1, 0.1);
  }

  _camp_set() {
    const now = this.ctx.currentTime;
    // Fire crackle start
    this._noiseBurst(this._noiseCache.medium, now, 0.3, 'lowpass', 600, 0.12);
  }

  _familiar_collect() {
    const now = this.ctx.currentTime;
    // Sparkle + chime
    this._note(1318.51, 'sine', now, 0.15, 0.1);
    this._note(1568, 'sine', now + 0.05, 0.15, 0.08);
    this._note(2093, 'sine', now + 0.1, 0.2, 0.06);
  }

  _cooking_done() {
    const now = this.ctx.currentTime;
    // Ding + sizzle
    this._note(1568, 'sine', now, 0.15, 0.12);
    this._noiseBurst(this._noiseCache.short, now + 0.1, 0.2, 'lowpass', 1000, 0.08);
  }

  _clock_chime() {
    const now = this.ctx.currentTime;
    // Bell
    this._note(880, 'sine', now, 0.4, 0.12);
    this._note(659.25, 'sine', now + 0.2, 0.4, 0.08);
  }

  _rock_break() {
    const now = this.ctx.currentTime;
    // Crack
    this._noiseBurst(this._noiseCache.short, now, 0.15, 'lowpass', 400, 0.2);
    this._note(100, 'sawtooth', now, 0.1, 0.12);
  }

  _ice_break() {
    const now = this.ctx.currentTime;
    // Glass break
    this._noiseBurst(this._noiseCache.short, now, 0.15, 'highpass', 3000, 0.15);
    this._note(2000, 'triangle', now, 0.1, 0.08);
    this._note(1500, 'triangle', now + 0.05, 0.1, 0.06);
  }

  _fall_damage() {
    const now = this.ctx.currentTime;
    // Thud + groan
    this._noiseBurst(this._noiseCache.brownShort, now, 0.15, 'lowpass', 200, 0.2);
    this._note(80, 'sawtooth', now, 0.15, 0.12);
  }

  _transition() {
    const now = this.ctx.currentTime;
    this._sweep('sine', 200, 1200, now, 0.3, 0.1);
  }

  // ═══ ENVIRONMENT SFX (20) ═════════════════════════════════════════

  _wind_gentle() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.pinkMedium, now, 0.5, 'bandpass', 400, 0.08);
  }

  _wind_mountain() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.brownMedium, now, 0.5, 'bandpass', 200, 0.15);
  }

  _water_flow() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.medium, now, 0.5, 'highpass', 1000, 0.08);
  }

  _ice_crack() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.1, 'highpass', 2500, 0.12);
  }

  _sand_drift() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.3, 'bandpass', 300, 0.06);
  }

  _forest_birds() {
    const now = this.ctx.currentTime;
    // Chirp
    this._sweep('sine', 2000, 3000, now, 0.05, 0.06);
    setTimeout(() => {
      if (!this.ctx) return;
      this._sweep('sine', 2500, 3500, this.ctx.currentTime, 0.05, 0.06);
    }, 200);
  }

  _playground() {
    const now = this.ctx.currentTime;
    // Distant laugh — filtered noise burst
    this._noiseBurst(this._noiseCache.medium, now, 0.3, 'bandpass', 700, 0.06);
  }

  _castle_echo() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.15, 'bandpass', 250, 0.1);
  }

  _shadow_hum() {
    const now = this.ctx.currentTime;
    // Low drone
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.value = 100;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.55);
  }

  _fire_crackle() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.short, now, 0.2, 'lowpass', 800, 0.1);
    setTimeout(() => {
      if (!this.ctx) return;
      this._noiseBurst(this._noiseCache.short, this.ctx.currentTime, 0.1, 'lowpass', 600, 0.06);
    }, 100);
  }

  _rain() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.medium, now, 0.5, 'highpass', 2000, 0.06);
  }

  _thunder() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.brownMedium, now, 0.5, 'lowpass', 300, 0.3);
  }

  _crowd_murmur() {
    const now = this.ctx.currentTime;
    this._noiseBurst(this._noiseCache.pinkMedium, now, 0.5, 'bandpass', 500, 0.06);
  }

  _magic_hum() {
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = 440;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(gain);
    gain.connect(this.bus);
    osc.start(now);
    osc.stop(now + 0.55);
  }

  _portal_open() {
    const now = this.ctx.currentTime;
    this._sweep('sine', 100, 1600, now, 0.4, 0.12);
    this._noiseBurst(this._noiseCache.medium, now, 0.4, 'bandpass', 800, 0.08);
  }

  _item_drop() {
    const now = this.ctx.currentTime;
    this._note(880, 'sine', now, 0.08, 0.08);
    this._noiseBurst(this._noiseCache.short, now, 0.05, 'lowpass', 1000, 0.05);
  }

  _chest_appear() {
    const now = this.ctx.currentTime;
    this._note(659.25, 'sine', now, 0.2, 0.1);
    this._note(880, 'sine', now + 0.1, 0.2, 0.08);
  }

  _secret_found() {
    const now = this.ctx.currentTime;
    // Magical discovery sound
    this._note(783.99, 'sine', now, 0.15, 0.12);
    this._note(1046.5, 'sine', now + 0.1, 0.15, 0.1);
    this._note(1318.51, 'sine', now + 0.2, 0.25, 0.08);
  }

  _achievement() {
    const now = this.ctx.currentTime;
    // Achievement unlocked
    this._note(523.25, 'square', now, 0.1, 0.12);
    this._note(659.25, 'square', now + 0.08, 0.1, 0.12);
    this._note(783.99, 'square', now + 0.16, 0.1, 0.12);
    this._note(1046.5, 'square', now + 0.24, 0.25, 0.12);
  }

  _save_complete() {
    const now = this.ctx.currentTime;
    this._note(880, 'sine', now, 0.15, 0.12);
    this._note(1108.73, 'sine', now + 0.1, 0.2, 0.1);
    this._note(1318.51, 'sine', now + 0.2, 0.25, 0.08);
  }

  // ═══ SFX Map (all 100+ effects) ═══════════════════════════════════
  // Built dynamically from the methods above (methods starting with _)

  // We'll build the map in the constructor-like init
}

// Build the SFX map from all _-prefixed methods
const sfxMethodNames = Object.getOwnPropertyNames(SfxEngine.prototype)
  .filter(name => name.startsWith('_') && !name.startsWith('_') && name !== 'init' && typeof SfxEngine.prototype[name] === 'function')
  .filter(name => !['_note', '_noiseBurst', '_sweep', '_preloadNoiseBuffers'].includes(name));

// Actually, let's just build it explicitly for clarity and to avoid false positives
SfxEngine.prototype._sfxMap = {};

// Auto-populate: any method starting with underscore (but not the helpers) is a SFX
const _helperMethods = new Set(['_note', '_noiseBurst', '_sweep', '_preloadNoiseBuffers', 'init', 'playSfx', 'dispose']);
const _allMethods = Object.getOwnPropertyNames(SfxEngine.prototype);
for (const name of _allMethods) {
  if (name.startsWith('_') && !_helperMethods.has(name) && typeof SfxEngine.prototype[name] === 'function') {
    // Map: 'hit_physical' → _hit_physical method
    const sfxName = name.substring(1);
    SfxEngine.prototype._sfxMap[sfxName] = SfxEngine.prototype[name];
  }
}

// Also add legacy compat names that map to the new ones
const _legacyMap = {
  blip: '_ui_navigate',
  select: '_ui_select',
  confirm: '_ui_select',
  cancel: '_ui_cancel',
  cursor: '_ui_cursor',
  fire: '_ability_fire',
  ice: '_ability_ice',
  heal: '_ability_heal',
  hit: '_hit_physical',
  slash: '_ability_slash',
  levelup: '_level_up',
  save: '_ui_save',
  error: '_ui_error',
  treasure: '_treasure_chest',
  transition: '_transition',
  menu_open: '_ui_menu_open',
  menu_close: '_ui_menu_close',
};
for (const [legacyName, methodName] of Object.entries(_legacyMap)) {
  SfxEngine.prototype._sfxMap[legacyName] = SfxEngine.prototype[methodName];
}
