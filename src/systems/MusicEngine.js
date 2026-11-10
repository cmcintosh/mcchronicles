// MusicEngine.js — Procedural music using Tone.js
// 20 tracks defined as Tone.js sequences
// McDonald's-influenced style: upbeat synth-pop, catchy hooks, family-friendly
// Adaptive boss music with 3 intensity layers

import * as Tone from 'tone';

export default class MusicEngine {
  constructor(audioEngine) {
    this.audioEngine = audioEngine;
    this.currentTrackId = null;
    this.currentTrack = null;
    this.currentSynths = [];
    this.currentSequences = [];
    this._intensityLevel = 0;
    this._bossLayers = { base: false, drums: false, lead: false };
    this._fadeInterval = null;

    // Bus connection — we route through the AudioEngine's music bus
    this._musicDestination = null;
  }

  /**
   * Initialize — called after AudioEngine.init()
   */
  async init() {
    await Tone.start();

    // Connect Tone.js destination to our music bus
    const musicBus = this.audioEngine.getBus('music');
    if (musicBus) {
      // Route Tone through our bus
      this._musicDestination = musicBus;
    }
  }

  /**
   * Connect a Tone.js instrument to our music bus.
   */
  _connect(node) {
    if (this._musicDestination) {
      node.connect(this._musicDestination);
    } else {
      node.toDestination();
    }
  }

  // ═══ TRACK MANAGEMENT ═══════════════════════════════════════════════

  /**
   * Play a track by ID.
   * @param {string} trackId - Track identifier (e.g. 'M01', 'M02')
   */
  playTrack(trackId) {
    if (this.currentTrackId === trackId) return;
    this.stopTrack();

    const trackDef = TRACK_DEFINITIONS[trackId];
    if (!trackDef) {
      console.warn(`[MusicEngine] Unknown track: ${trackId}`);
      return;
    }

    this.currentTrackId = trackId;
    this.currentTrack = trackDef;
    this._intensityLevel = 0;
    this._bossLayers = { base: false, drums: false, lead: false };

    try {
      // Set BPM
      if (trackDef.bpm) {
        Tone.Transport.bpm.value = trackDef.bpm;
      }

      // Start transport
      Tone.Transport.start();

      // Build and start the track
      const built = trackDef.build.call(this);
      this.currentSynths = built.synths || [];
      this.currentSequences = built.sequences || [];
      this._bossLayerNodes = built.layers || null;

      // Start all sequences
      this.currentSequences.forEach(seq => seq.start(0));

      // For boss tracks, start with base layer only
      if (trackDef.adaptive && this._bossLayerNodes) {
        this._setAdaptiveLayers(0);
      }
    } catch (e) {
      console.error(`[MusicEngine] Error playing track ${trackId}:`, e);
    }
  }

  /**
   * Stop the current track.
   */
  stopTrack() {
    // Stop and dispose sequences
    this.currentSequences.forEach(seq => {
      try { seq.stop(); seq.dispose(); } catch (e) {}
    });
    this.currentSequences = [];

    // Stop and dispose synths
    this.currentSynths.forEach(synth => {
      try { synth.dispose(); } catch (e) {}
    });
    this.currentSynths = [];

    // Stop transport
    Tone.Transport.stop();
    Tone.Transport.cancel();

    this.currentTrackId = null;
    this.currentTrack = null;
    this._intensityLevel = 0;

    if (this._fadeInterval) {
      clearInterval(this._fadeInterval);
      this._fadeInterval = null;
    }
  }

  /**
   * Transition to a new track with crossfade.
   * @param {string} trackId - Target track
   * @param {number} fadeTime - Fade duration in seconds
   */
  transitionTo(trackId, fadeTime = 1.0) {
    if (this.currentTrackId === trackId) return;

    // Fade out current
    if (this._musicDestination && this.currentTrackId) {
      this.audioEngine.fadeBus('music', 0, fadeTime * 0.5);
    }

    setTimeout(() => {
      // Restore music bus volume and play new track
      if (this._musicDestination) {
        this.audioEngine.setBusVolume('music', this.audioEngine.getBusVolume('music'));
      }
      this.playTrack(trackId);
    }, fadeTime * 500);
  }

  /**
   * Set intensity level for adaptive music (boss battles).
   * @param {number} level - 0 = base, 1 = add drums, 2 = add intense lead
   */
  setIntensity(level) {
    this._intensityLevel = level;
    this._setAdaptiveLayers(level);
  }

  /**
   * Update boss music intensity based on boss HP percentage.
   * @param {number} bossHpPercent - 0.0 to 1.0
   */
  updateBossIntensity(bossHpPercent) {
    if (bossHpPercent > 0.66) this.setIntensity(0);
    else if (bossHpPercent > 0.33) this.setIntensity(1);
    else this.setIntensity(2);
  }

  _setAdaptiveLayers(level) {
    if (!this._bossLayerNodes) return;

    // Layer 0: base (always on)
    if (this._bossLayerNodes.base) {
      this._bossLayerNodes.base.forEach(node => {
        node.volume.rampTo(0, 0.3);
      });
    }

    // Layer 1: drums
    if (this._bossLayerNodes.drums) {
      const vol = level >= 1 ? 0 : -Infinity;
      this._bossLayerNodes.drums.forEach(node => {
        node.volume.rampTo(vol, 0.5);
      });
    }

    // Layer 2: intense lead
    if (this._bossLayerNodes.lead) {
      const vol = level >= 2 ? 0 : -Infinity;
      this._bossLayerNodes.lead.forEach(node => {
        node.volume.rampTo(vol, 0.5);
      });
    }
  }

  /**
   * Dispose.
   */
  dispose() {
    this.stopTrack();
  }
}

// ═════════════════════════════════════════════════════════════════════
// TRACK DEFINITIONS — 20 tracks
// ═════════════════════════════════════════════════════════════════════

const TRACK_DEFINITIONS = {
  // ─── M01: McWorld Overture — Title Screen ───────────────────────
  M01: {
    bpm: 110,
    build() {
      const synths = [];
      const sequences = [];

      // Main lead — analog-style synth
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.2, sustain: 0.3, release: 0.8 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      // Bass
      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 0.5 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // Glockenspiel accent
      const bell = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.5, sustain: 0, release: 1 },
        volume: -12,
      });
      this._connect(bell);
      synths.push(bell);

      // Drums
      const kick = new Tone.MembraneSynth({ volume: -6 });
      this._connect(kick);
      synths.push(kick);

      // Melody — C major, upbeat pop-orchestral
      const melodyNotes = [
        'C4', 'E4', 'G4', 'C5', 'B4', 'G4', 'E4', 'G4',
        'A4', 'C5', 'E5', 'D5', 'C5', 'B4', 'G4', 'E4',
        'F4', 'A4', 'C5', 'F5', 'E5', 'C5', 'A4', 'C5',
        'G4', 'B4', 'D5', 'G5', 'F5', 'D5', 'B4', 'G4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      // Bass line
      const bassNotes = ['C2', 'C2', 'G2', 'G2', 'F2', 'F2', 'G2', 'G2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '4n', time);
      }, bassNotes, '4n');
      sequences.push(bassSeq);

      // Bell accents on downbeats
      const bellNotes = ['C5', null, 'E5', null, 'G5', null, 'E5', null];
      const bellSeq = new Tone.Sequence((time, note) => {
        if (note) bell.triggerAttackRelease(note, '16n', time);
      }, bellNotes, '2n');
      sequences.push(bellSeq);

      // Kick drum
      const kickSeq = new Tone.Sequence((time) => {
        kick.triggerAttackRelease('C1', '8n', time);
      }, [true, null, true, null], '4n');
      sequences.push(kickSeq);

      return { synths, sequences };
    },
  },

  // ─── M02: Fry Valley Fields — Overworld ─────────────────────────
  M02: {
    bpm: 115,
    build() {
      const synths = [];
      const sequences = [];

      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.3, release: 1 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.1, decay: 0.3, sustain: 0.4, release: 0.5 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // C major pentatonic — bright, adventurous
      const melodyNotes = [
        'C4', 'E4', 'G4', 'A4', 'G4', 'E4', 'D4', 'E4',
        'G4', 'A4', 'C5', 'D5', 'C5', 'A4', 'G4', 'E4',
        'F4', 'A4', 'C5', 'D5', 'C5', 'A4', 'G4', 'F4',
        'E4', 'G4', 'A4', 'C5', 'D5', 'C5', 'A4', 'G4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['C2', 'A2', 'F2', 'G2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M03: Highland Trek — Burger Highlands ───────────────────────
  M03: {
    bpm: 120,
    build() {
      const synths = [];
      const sequences = [];

      // Pop-rock electric guitar feel
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.15, sustain: 0.2, release: 0.3 },
        volume: -12,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.02, decay: 0.2, sustain: 0.3, release: 0.3 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      const kick = new Tone.MembraneSynth({ volume: -6 });
      this._connect(kick);
      synths.push(kick);

      const snare = new Tone.NoiseSynth({
        envelope: { attack: 0.001, decay: 0.1, sustain: 0 },
        volume: -12,
      });
      this._connect(snare);
      synths.push(snare);

      // D minor pentatonic — determined, energetic
      const melodyNotes = [
        'D4', 'F4', 'A4', 'C5', 'A4', 'F4', 'D4', 'F4',
        'G4', 'A4', 'C5', 'D5', 'C5', 'A4', 'G4', 'F4',
        'D4', 'F4', 'A4', 'D5', 'C5', 'A4', 'F4', 'D4',
        'E4', 'G4', 'A4', 'C5', 'A4', 'G4', 'F4', 'E4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['D2', 'D2', 'G2', 'A2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '2n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      // Drums
      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '8n', time);
      }, [1, 0, 1, 0], '4n');
      sequences.push(kickSeq);

      const snareSeq = new Tone.Sequence((time, beat) => {
        if (beat) snare.triggerAttackRelease('8n', time);
      }, [0, 1, 0, 1], '4n');
      sequences.push(snareSeq);

      return { synths, sequences };
    },
  },

  // ─── M04: Cafe Corner — McCafe Springs Town ─────────────────────
  M04: {
    bpm: 90,
    build() {
      const synths = [];
      const sequences = [];

      // Warm jazz piano
      const piano = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 1.5 },
        volume: -8,
      });
      this._connect(piano);
      synths.push(piano);

      // Acoustic bass
      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.05, decay: 0.3, sustain: 0.5, release: 0.8 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // Light percussion
      const hihat = new Tone.NoiseSynth({
        envelope: { attack: 0.001, decay: 0.03, sustain: 0 },
        volume: -18,
      });
      this._connect(hihat);
      synths.push(hihat);

      // C# major — warm, cozy
      const melodyNotes = [
        'Eb4', 'G4', 'Bb4', 'C5', 'Bb4', 'G4', 'Eb4', 'G4',
        'Ab4', 'C5', 'Eb5', 'D5', 'C5', 'Ab4', 'F4', 'Ab4',
        'G4', 'Bb4', 'D5', 'Eb5', 'D5', 'Bb4', 'G4', 'Bb4',
        'C5', 'Eb5', 'G5', 'F5', 'Eb5', 'C5', 'Bb4', 'Ab4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        piano.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['Eb2', 'Ab2', 'F2', 'G2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      const hihatSeq = new Tone.Sequence((time) => {
        hihat.triggerAttackRelease('16n', time);
      }, [1, 0, 1, 0, 1, 0, 1, 0], '8n');
      sequences.push(hihatSeq);

      return { synths, sequences };
    },
  },

  // ─── M05: Frozen Melody — McFlurry Tundra ───────────────────────
  M05: {
    bpm: 100,
    build() {
      const synths = [];
      const sequences = [];

      // Crystalline synth
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.1, decay: 0.3, sustain: 0.4, release: 2 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      // Pad
      const pad = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.5, decay: 0.5, sustain: 0.6, release: 2 },
        volume: -14,
      });
      this._connect(pad);
      synths.push(pad);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.2, decay: 0.5, sustain: 0.4, release: 1 },
        volume: -12,
      });
      this._connect(bass);
      synths.push(bass);

      // A major — ethereal but warm
      const melodyNotes = [
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'E5',
        'D5', 'F5', 'A5', 'B5', 'A5', 'F5', 'D5', 'F5',
        'E5', 'G5', 'B5', 'C6', 'B5', 'G5', 'E5', 'G5',
        'A5', 'E5', 'C5', 'A4', 'B4', 'D5', 'E5', 'A4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '4n', time);
      }, melodyNotes, '4n');
      sequences.push(melody);

      const padNotes = ['A3', 'D4', 'E4', 'A3'];
      const padSeq = new Tone.Sequence((time, note) => {
        pad.triggerAttackRelease(note, '1n', time);
      }, padNotes, '1n');
      sequences.push(padSeq);

      const bassNotes = ['A2', 'D2', 'E2', 'A2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M06: Desert Mirage — Drive-Thru Desert ─────────────────────
  M06: {
    bpm: 105,
    build() {
      const synths = [];
      const sequences = [];

      // 80s FM synth
      const lead = new Tone.PolySynth(Tone.FMSynth, {
        harmonicity: 3,
        modulationIndex: 10,
        envelope: { attack: 0.01, decay: 0.2, sustain: 0.3, release: 0.5 },
        modulationEnvelope: { attack: 0.01, decay: 0.2, sustain: 0.3, release: 0.5 },
        volume: -10,
      });
      this._connect(lead);
      synths.push(lead);

      // Slap bass
      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.2, release: 0.2 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // Drum machine
      const kick = new Tone.MembraneSynth({ volume: -8 });
      this._connect(kick);
      synths.push(kick);

      // Eb minor pentatonic — nostalgic, MTV-era adventure
      const melodyNotes = [
        'Eb4', 'Gb4', 'Ab4', 'Bb4', 'Ab4', 'Gb4', 'Eb4', 'Gb4',
        'Ab4', 'Bb4', 'Db5', 'Eb5', 'Db5', 'Bb4', 'Ab4', 'Gb4',
        'F4', 'Ab4', 'Bb4', 'Db5', 'Bb4', 'Ab4', 'F4', 'Ab4',
        'Gb4', 'Ab4', 'Bb4', 'Eb5', 'Db5', 'Bb4', 'Gb4', 'Eb4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['Eb2', 'Ab2', 'F2', 'Gb2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '8n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '4n');
      sequences.push(bassSeq);

      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '8n', time);
      }, [1, 0, 0, 1, 0, 0, 1, 0], '8n');
      sequences.push(kickSeq);

      return { synths, sequences };
    },
  },

  // ─── M07: Toyland Waltz — Happy Meal Forest ─────────────────────
  M07: {
    bpm: 120,
    build() {
      const synths = [];
      const sequences = [];

      // Music box
      const lead = new Tone.Synth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.001, decay: 0.3, sustain: 0, release: 0.5 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      // Pop synth
      const pad = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 0.8 },
        volume: -12,
      });
      this._connect(pad);
      synths.push(pad);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.05, decay: 0.2, sustain: 0.4, release: 0.4 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // B major — playful, magical, catchy (3/4 waltz feel)
      const melodyNotes = [
        'B4', 'D5', 'F5', 'B5', 'F5', 'D5',
        'C5', 'E5', 'G5', 'C6', 'G5', 'E5',
        'A4', 'C5', 'E5', 'A5', 'E5', 'C5',
        'D5', 'F5', 'A5', 'D6', 'A5', 'F5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const padNotes = ['B3', 'C4', 'A3', 'D4'];
      const padSeq = new Tone.Sequence((time, note) => {
        pad.triggerAttackRelease(note, '2n', time);
      }, padNotes, '2n');
      sequences.push(padSeq);

      const bassNotes = ['B2', 'C3', 'A2', 'D3'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '2n', time);
      }, bassNotes, '2n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M08: Playground Hero — Play Place Plains ───────────────────
  M08: {
    bpm: 130,
    build() {
      const synths = [];
      const sequences = [];

      // High-energy pop synth
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.2, release: 0.3 },
        volume: -10,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.2 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      const kick = new Tone.MembraneSynth({ volume: -6 });
      this._connect(kick);
      synths.push(kick);

      // E major — chart-hit vibe, fun
      const melodyNotes = [
        'E4', 'G#4', 'B4', 'E5', 'D5', 'B4', 'G#4', 'B4',
        'C5', 'E5', 'G5', 'A5', 'G5', 'E5', 'C5', 'E5',
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'A4',
        'B4', 'D5', 'F5', 'B5', 'A5', 'F5', 'D5', 'B4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['E2', 'E2', 'A2', 'B2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '4n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '8n');
      sequences.push(bassSeq);

      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '8n', time);
      }, [1, 0, 1, 0, 1, 0, 1, 0], '8n');
      sequences.push(kickSeq);

      return { synths, sequences };
    },
  },

  // ─── M09: Golden Throne — Golden Arches Castle ──────────────────
  M09: {
    bpm: 70,
    build() {
      const synths = [];
      const sequences = [];

      // Pipe organ
      const organ = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.05, decay: 0.3, sustain: 0.7, release: 1.5 },
        volume: -10,
      });
      this._connect(organ);
      synths.push(organ);

      // Choir (aahs)
      const choir = new Tone.PolySynth(Tone.AMSynth, {
        harmonicity: 1.5,
        envelope: { attack: 0.5, decay: 0.5, sustain: 0.8, release: 2 },
        volume: -14,
      });
      this._connect(choir);
      synths.push(choir);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.1, decay: 0.5, sustain: 0.6, release: 1 },
        volume: -12,
      });
      this._connect(bass);
      synths.push(bass);

      // G minor — epic but melodic, classical influence
      const melodyNotes = [
        'G4', 'Bb4', 'D5', 'G5', 'F5', 'D5', 'Bb4', 'D5',
        'Eb5', 'G5', 'Bb5', 'D6', 'C6', 'Bb5', 'G5', 'Eb5',
        'D5', 'F5', 'A5', 'D6', 'C6', 'A5', 'F5', 'D5',
        'Eb5', 'G5', 'Bb5', 'Eb6', 'D6', 'Bb5', 'G5', 'F5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        organ.triggerAttackRelease(note, '4n', time);
      }, melodyNotes, '4n');
      sequences.push(melody);

      const choirNotes = ['G3', 'Eb3', 'D3', 'Eb3'];
      const choirSeq = new Tone.Sequence((time, note) => {
        choir.triggerAttackRelease(note, '1n', time);
      }, choirNotes, '1n');
      sequences.push(choirSeq);

      const bassNotes = ['G1', 'Eb2', 'D2', 'Eb2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M10: Shadow Realm ──────────────────────────────────────────
  M10: {
    bpm: 60,
    build() {
      const synths = [];
      const sequences = [];

      // Dark melodic pad
      const pad = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 1, decay: 1, sustain: 0.8, release: 3 },
        volume: -12,
      });
      this._connect(pad);
      synths.push(pad);

      // Minor key lead
      const lead = new Tone.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.3, decay: 0.5, sustain: 0.5, release: 2 },
        volume: -10,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.5, decay: 1, sustain: 0.5, release: 2 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // D minor — dark melodic minor key, never atonal, ambient
      const melodyNotes = [
        'D4', 'F4', 'A4', 'D5', 'C5', 'A4', 'F4', 'A4',
        'Bb4', 'D5', 'F5', 'A5', 'G5', 'F5', 'D5', 'F5',
        'E4', 'G4', 'Bb4', 'E5', 'D5', 'Bb4', 'G4', 'Bb4',
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'A4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '2n', time);
      }, melodyNotes, '2n');
      sequences.push(melody);

      const padNotes = ['D3', 'Bb3', 'E3', 'A3'];
      const padSeq = new Tone.Sequence((time, note) => {
        pad.triggerAttackRelease(note, '1n', time);
      }, padNotes, '1n');
      sequences.push(padSeq);

      const bassNotes = ['D1', 'Bb1', 'E1', 'A1'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M11: Battle Beat — Standard Battle ─────────────────────────
  M11: {
    bpm: 140,
    build() {
      const synths = [];
      const sequences = [];

      // Pop-rock synth stabs
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.15, release: 0.2 },
        volume: -10,
      });
      this._connect(lead);
      synths.push(lead);

      // Electric bass
      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.2 },
        volume: -8,
      });
      this._connect(bass);
      synths.push(bass);

      const kick = new Tone.MembraneSynth({ volume: -4 });
      this._connect(kick);
      synths.push(kick);

      const snare = new Tone.NoiseSynth({
        envelope: { attack: 0.001, decay: 0.08, sustain: 0 },
        volume: -10,
      });
      this._connect(snare);
      synths.push(snare);

      // A minor — driving, upbeat tension
      const melodyNotes = [
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'E5',
        'F4', 'A4', 'C5', 'F5', 'E5', 'C5', 'A4', 'C5',
        'G4', 'B4', 'D5', 'G5', 'F5', 'D5', 'B4', 'D5',
        'E4', 'G4', 'B4', 'E5', 'D5', 'B4', 'G4', 'B4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['A2', 'F2', 'G2', 'E2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '8n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '8n');
      sequences.push(bassSeq);

      // Driving drums
      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '8n', time);
      }, [1, 0, 1, 0, 1, 0, 1, 0], '8n');
      sequences.push(kickSeq);

      const snareSeq = new Tone.Sequence((time, beat) => {
        if (beat) snare.triggerAttackRelease('16n', time);
      }, [0, 0, 1, 0, 0, 0, 1, 0], '8n');
      sequences.push(snareSeq);

      return { synths, sequences };
    },
  },

  // ─── M12: Boss Battle — Adaptive 3 Layers ──────────────────────
  M12: {
    bpm: 150,
    adaptive: true,
    build() {
      const synths = [];
      const sequences = [];

      // === LAYER 0: Base melody + bass ===
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.02, decay: 0.15, sustain: 0.2, release: 0.3 },
        volume: -10,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.2 },
        volume: -8,
      });
      this._connect(bass);
      synths.push(bass);

      // D minor — dramatic pop-orchestral, heavy but melodic
      const melodyNotes = [
        'D4', 'F4', 'A4', 'D5', 'C5', 'A4', 'F4', 'A4',
        'Bb4', 'D5', 'F5', 'Bb5', 'A5', 'F5', 'D5', 'F5',
        'G4', 'Bb4', 'D5', 'G5', 'F5', 'D5', 'Bb4', 'D5',
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'E5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['D2', 'Bb2', 'G2', 'A2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '4n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '8n');
      sequences.push(bassSeq);

      // === LAYER 1: Drums (start muted) ===
      const kick = new Tone.MembraneSynth({ volume: -Infinity });
      this._connect(kick);
      synths.push(kick);

      const snare = new Tone.NoiseSynth({
        envelope: { attack: 0.001, decay: 0.08, sustain: 0 },
        volume: -Infinity,
      });
      this._connect(snare);
      synths.push(snare);

      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '8n', time);
      }, [1, 0, 1, 0, 1, 0, 1, 0], '8n');
      sequences.push(kickSeq);

      const snareSeq = new Tone.Sequence((time, beat) => {
        if (beat) snare.triggerAttackRelease('16n', time);
      }, [0, 0, 1, 0, 0, 0, 1, 0], '8n');
      sequences.push(snareSeq);

      // === LAYER 2: Intense lead (start muted) ===
      const intenseLead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'square' },
        envelope: { attack: 0.005, decay: 0.05, sustain: 0.1, release: 0.1 },
        volume: -Infinity,
      });
      this._connect(intenseLead);
      synths.push(intenseLead);

      const intenseNotes = [
        'D6', 'F6', 'A6', 'D7', 'C7', 'A6', 'F6', 'A6',
        'Bb6', 'D7', 'F7', 'Bb7', 'A7', 'F7', 'D7', 'F7',
        'G6', 'Bb6', 'D7', 'G7', 'F7', 'D7', 'Bb6', 'D7',
        'A6', 'C7', 'E7', 'A7', 'G7', 'E7', 'C7', 'E7',
      ];
      const intenseSeq = new Tone.Sequence((time, note) => {
        intenseLead.triggerAttackRelease(note, '16n', time);
      }, intenseNotes, '16n');
      sequences.push(intenseSeq);

      const layers = {
        base: [lead, bass],
        drums: [kick, snare],
        lead: [intenseLead],
      };

      return { synths, sequences, layers };
    },
  },

  // ─── M13: Hamburglar's Theme ────────────────────────────────────
  M13: {
    bpm: 80,
    build() {
      const synths = [];
      const sequences = [];

      // Emotional pop-ballad synth
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.05, decay: 0.3, sustain: 0.4, release: 1.5 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      const piano = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.02, decay: 0.4, sustain: 0.5, release: 1.5 },
        volume: -10,
      });
      this._connect(piano);
      synths.push(piano);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.1, decay: 0.4, sustain: 0.5, release: 1 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // Bb minor — emotional pop-ballad, minor key, hopeful undercurrent
      const melodyNotes = [
        'Bb4', 'Db5', 'F5', 'Bb5', 'Ab5', 'F5', 'Db5', 'F5',
        'Eb5', 'Gb5', 'Bb5', 'Eb6', 'Db6', 'Bb5', 'Gb5', 'Bb5',
        'F5', 'Ab5', 'C6', 'F6', 'Eb6', 'C6', 'Ab5', 'F5',
        'Gb5', 'Bb5', 'Db6', 'Gb6', 'F6', 'Db6', 'Bb5', 'Gb5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '4n', time);
      }, melodyNotes, '4n');
      sequences.push(melody);

      const pianoNotes = ['Bb3', 'Eb4', 'F4', 'Gb4'];
      const pianoSeq = new Tone.Sequence((time, note) => {
        piano.triggerAttackRelease(note, '1n', time);
      }, pianoNotes, '1n');
      sequences.push(pianoSeq);

      const bassNotes = ['Bb1', 'Eb2', 'F2', 'Gb2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M14: McLord's Shadow — Final Boss ──────────────────────────
  M14: {
    bpm: 160,
    adaptive: true,
    build() {
      const synths = [];
      const sequences = [];

      // === LAYER 0: Epic dark orchestral base ===
      const strings = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.1, decay: 0.3, sustain: 0.6, release: 1 },
        volume: -10,
      });
      this._connect(strings);
      synths.push(strings);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.02, decay: 0.1, sustain: 0.4, release: 0.3 },
        volume: -8,
      });
      this._connect(bass);
      synths.push(bass);

      // C minor — epic dark orchestral, driving, intense
      const melodyNotes = [
        'C4', 'Eb4', 'G4', 'C5', 'Bb4', 'G4', 'Eb4', 'G4',
        'Ab4', 'C5', 'Eb5', 'Ab5', 'G5', 'Eb5', 'C5', 'Eb5',
        'F4', 'Ab4', 'C5', 'F5', 'Eb5', 'C5', 'Ab4', 'C5',
        'G4', 'Bb4', 'D5', 'G5', 'F5', 'D5', 'Bb4', 'D5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        strings.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['C2', 'Ab2', 'F2', 'G2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '8n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '8n');
      sequences.push(bassSeq);

      // === LAYER 1: Drums ===
      const kick = new Tone.MembraneSynth({ volume: -Infinity });
      this._connect(kick);
      synths.push(kick);

      const snare = new Tone.NoiseSynth({
        envelope: { attack: 0.001, decay: 0.06, sustain: 0 },
        volume: -Infinity,
      });
      this._connect(snare);
      synths.push(snare);

      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '16n', time);
      }, [1, 0, 1, 1, 0, 1, 0, 1], '16n');
      sequences.push(kickSeq);

      const snareSeq = new Tone.Sequence((time, beat) => {
        if (beat) snare.triggerAttackRelease('32n', time);
      }, [0, 0, 0, 0, 1, 0, 0, 0], '16n');
      sequences.push(snareSeq);

      // === LAYER 2: Intense lead ===
      const intenseLead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'square' },
        envelope: { attack: 0.005, decay: 0.03, sustain: 0.08, release: 0.08 },
        volume: -Infinity,
      });
      this._connect(intenseLead);
      synths.push(intenseLead);

      const intenseNotes = [
        'C6', 'Eb6', 'G6', 'C7', 'Bb6', 'G6', 'Eb6', 'G6',
        'Ab6', 'C7', 'Eb7', 'Ab7', 'G7', 'Eb7', 'C7', 'Eb7',
        'F6', 'Ab6', 'C7', 'F7', 'Eb7', 'C7', 'Ab6', 'C7',
        'G6', 'Bb6', 'D7', 'G7', 'F7', 'D7', 'Bb6', 'D7',
      ];
      const intenseSeq = new Tone.Sequence((time, note) => {
        intenseLead.triggerAttackRelease(note, '16n', time);
      }, intenseNotes, '16n');
      sequences.push(intenseSeq);

      const layers = {
        base: [strings, bass],
        drums: [kick, snare],
        lead: [intenseLead],
      };

      return { synths, sequences, layers };
    },
  },

  // ─── M15: Golden Purification — Final Boss Phase 4 ──────────────
  M15: {
    bpm: 170,
    build() {
      const synths = [];
      const sequences = [];

      // Triumphant pop-orchestral, uplifting, massive
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.3 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      const strings = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.05, decay: 0.2, sustain: 0.5, release: 0.5 },
        volume: -12,
      });
      this._connect(strings);
      synths.push(strings);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.08, sustain: 0.3, release: 0.15 },
        volume: -8,
      });
      this._connect(bass);
      synths.push(bass);

      const kick = new Tone.MembraneSynth({ volume: -4 });
      this._connect(kick);
      synths.push(kick);

      // C major — triumphant, uplifting, massive
      const melodyNotes = [
        'C5', 'E5', 'G5', 'C6', 'B5', 'G5', 'E5', 'G5',
        'A5', 'C6', 'E6', 'D6', 'C6', 'A5', 'F5', 'A5',
        'G5', 'B5', 'D6', 'G6', 'F6', 'D6', 'B5', 'G5',
        'E5', 'G5', 'C6', 'E6', 'D6', 'B5', 'G5', 'C6',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const stringsNotes = ['C4', 'F4', 'G4', 'C4'];
      const stringsSeq = new Tone.Sequence((time, note) => {
        strings.triggerAttackRelease(note, '1n', time);
      }, stringsNotes, '1n');
      sequences.push(stringsSeq);

      const bassNotes = ['C2', 'F2', 'G2', 'C2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '8n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3], bassNotes[3], bassNotes[3]], '16n');
      sequences.push(bassSeq);

      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '16n', time);
      }, [1, 0, 1, 0, 1, 0, 1, 1], '16n');
      sequences.push(kickSeq);

      return { synths, sequences };
    },
  },

  // ─── M16: Victory Fanfare ───────────────────────────────────────
  M16: {
    bpm: 120,
    build() {
      const synths = [];
      const sequences = [];

      // Short pop fanfare — catchy, celebratory
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'square' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.5 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.3 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      // C major — short pop fanfare
      const melodyNotes = [
        'C5', null, 'E5', 'G5', 'C6', 'E6', 'G6', 'C7',
        'A5', null, 'C6', 'E6', 'A6', 'C7', 'E7', 'A7',
        'F5', null, 'A5', 'C6', 'F6', 'A6', 'C7', 'F7',
        'G5', 'B5', 'D6', 'G6', 'B6', 'D7', 'G7', 'C7',
      ];
      const melody = new Tone.Sequence((time, note) => {
        if (note) lead.triggerAttackRelease(note, '16n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['C2', 'A2', 'F2', 'G2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '2n', time);
      }, bassNotes, '2n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M17: Restful Night — Inn/Save ──────────────────────────────
  M17: {
    bpm: 70,
    build() {
      const synths = [];
      const sequences = [];

      // Calm acoustic pop
      const guitar = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.3, sustain: 0.4, release: 1.5 },
        volume: -8,
      });
      this._connect(guitar);
      synths.push(guitar);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.1, decay: 0.4, sustain: 0.5, release: 1 },
        volume: -12,
      });
      this._connect(bass);
      synths.push(bass);

      // D major — calm, peaceful, warm
      const melodyNotes = [
        'D4', 'F#4', 'A4', 'D5', 'C#5', 'A4', 'F#4', 'A4',
        'G4', 'B4', 'D5', 'G5', 'F#5', 'D5', 'B4', 'D5',
        'E4', 'G4', 'B4', 'E5', 'D5', 'B4', 'G4', 'B4',
        'A4', 'D5', 'F#5', 'A5', 'G5', 'E5', 'D5', 'F#5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        guitar.triggerAttackRelease(note, '4n', time);
      }, melodyNotes, '4n');
      sequences.push(melody);

      const bassNotes = ['D2', 'G2', 'E2', 'A2'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '1n', time);
      }, bassNotes, '1n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M18: Heart Strings — Emotional Scenes ──────────────────────
  M18: {
    bpm: 60,
    build() {
      const synths = [];
      const sequences = [];

      // Solo piano → strings
      const piano = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sine' },
        envelope: { attack: 0.02, decay: 0.5, sustain: 0.4, release: 2 },
        volume: -8,
      });
      this._connect(piano);
      synths.push(piano);

      const strings = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'sawtooth' },
        envelope: { attack: 0.5, decay: 1, sustain: 0.6, release: 3 },
        volume: -14,
      });
      this._connect(strings);
      synths.push(strings);

      // A minor — sad but hopeful, melodic
      const melodyNotes = [
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'E5',
        'F4', 'A4', 'C5', 'F5', 'E5', 'C5', 'A4', 'C5',
        'D4', 'F4', 'A4', 'D5', 'C5', 'A4', 'F4', 'A4',
        'E4', 'G4', 'B4', 'E5', 'D5', 'B4', 'G4', 'B4',
      ];
      const melody = new Tone.Sequence((time, note) => {
        piano.triggerAttackRelease(note, '2n', time);
      }, melodyNotes, '2n');
      sequences.push(melody);

      const stringsNotes = ['A3', 'F3', 'D3', 'E3'];
      const stringsSeq = new Tone.Sequence((time, note) => {
        strings.triggerAttackRelease(note, '1n', time);
      }, stringsNotes, '1n');
      sequences.push(stringsSeq);

      return { synths, sequences };
    },
  },

  // ─── M19: Mini-Game Mix — 8-bit Chiptune ────────────────────────
  M19: {
    bpm: 135,
    build() {
      const synths = [];
      const sequences = [];

      // 8-bit chiptune — NES-era square waves
      const lead = new Tone.Synth({
        oscillator: { type: 'square' },
        envelope: { attack: 0.001, decay: 0.05, sustain: 0.3, release: 0.1 },
        volume: -10,
      });
      this._connect(lead);
      synths.push(lead);

      const harmony = new Tone.Synth({
        oscillator: { type: 'square' },
        envelope: { attack: 0.001, decay: 0.05, sustain: 0.3, release: 0.1 },
        volume: -14,
      });
      this._connect(harmony);
      synths.push(harmony);

      const bass = new Tone.Synth({
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.01, decay: 0.1, sustain: 0.3, release: 0.1 },
        volume: -12,
      });
      this._connect(bass);
      synths.push(bass);

      // G major — bouncy, arcade nostalgia
      const melodyNotes = [
        'G4', 'B4', 'D5', 'G5', 'F5', 'D5', 'B4', 'D5',
        'C5', 'E5', 'G5', 'C6', 'B5', 'G5', 'E5', 'G5',
        'A4', 'C5', 'E5', 'A5', 'G5', 'E5', 'C5', 'E5',
        'D5', 'F5', 'A5', 'D6', 'C6', 'A5', 'F5', 'A5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '16n', time);
      }, melodyNotes, '16n');
      sequences.push(melody);

      const harmonyNotes = [
        'B3', 'D4', 'G4', 'B4',
        'C4', 'E4', 'G4', 'C5',
        'A3', 'C4', 'E4', 'A4',
        'D4', 'F4', 'A4', 'D5',
      ];
      const harmonySeq = new Tone.Sequence((time, note) => {
        harmony.triggerAttackRelease(note, '8n', time);
      }, harmonyNotes, '8n');
      sequences.push(harmonySeq);

      const bassNotes = ['G2', 'C3', 'A2', 'D3'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '4n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '8n');
      sequences.push(bassSeq);

      return { synths, sequences };
    },
  },

  // ─── M20: Breakfast Dawn — Post-Game ────────────────────────────
  M20: {
    bpm: 115,
    build() {
      const synths = [];
      const sequences = [];

      // Fresh upbeat pop
      const lead = new Tone.PolySynth(Tone.Synth, {
        oscillator: { type: 'triangle' },
        envelope: { attack: 0.02, decay: 0.15, sustain: 0.3, release: 0.8 },
        volume: -8,
      });
      this._connect(lead);
      synths.push(lead);

      const bass = new Tone.MonoSynth({
        oscillator: { type: 'sine' },
        envelope: { attack: 0.05, decay: 0.2, sustain: 0.4, release: 0.4 },
        volume: -10,
      });
      this._connect(bass);
      synths.push(bass);

      const kick = new Tone.MembraneSynth({ volume: -8 });
      this._connect(kick);
      synths.push(kick);

      // F major — fresh, adventurous, new energy
      const melodyNotes = [
        'F4', 'A4', 'C5', 'F5', 'E5', 'C5', 'A4', 'C5',
        'Bb4', 'D5', 'F5', 'Bb5', 'A5', 'F5', 'D5', 'F5',
        'G4', 'Bb4', 'D5', 'G5', 'F5', 'D5', 'Bb4', 'D5',
        'C5', 'E5', 'G5', 'C6', 'Bb5', 'G5', 'E5', 'G5',
      ];
      const melody = new Tone.Sequence((time, note) => {
        lead.triggerAttackRelease(note, '8n', time);
      }, melodyNotes, '8n');
      sequences.push(melody);

      const bassNotes = ['F2', 'Bb2', 'G2', 'C3'];
      const bassSeq = new Tone.Sequence((time, note) => {
        bass.triggerAttackRelease(note, '4n', time);
      }, [bassNotes[0], bassNotes[0], bassNotes[1], bassNotes[1], bassNotes[2], bassNotes[2], bassNotes[3], bassNotes[3]], '8n');
      sequences.push(bassSeq);

      const kickSeq = new Tone.Sequence((time, beat) => {
        if (beat) kick.triggerAttackRelease('C1', '8n', time);
      }, [1, 0, 1, 0, 1, 0, 1, 0], '8n');
      sequences.push(kickSeq);

      return { synths, sequences };
    },
  },
};

// Export track definitions for external use
export { TRACK_DEFINITIONS };

// Track ID mapping for convenience
export const TRACK_IDS = {
  TITLE: 'M01',
  FRY_VALLEY: 'M02',
  HIGHLANDS: 'M03',
  MCCAFE: 'M04',
  TUNDRA: 'M05',
  DESERT: 'M06',
  FOREST: 'M07',
  PLAINS: 'M08',
  CASTLE: 'M09',
  SHADOW_REALM: 'M10',
  BATTLE: 'M11',
  BOSS: 'M12',
  HAMBURGLAR: 'M13',
  FINAL_BOSS: 'M14',
  FINAL_BOSS_PHASE4: 'M15',
  VICTORY: 'M16',
  INN: 'M17',
  EMOTIONAL: 'M18',
  MINIGAME: 'M19',
  BREAKFAST: 'M20',
};

// Map region IDs to overworld track IDs
export const REGION_TRACK_MAP = {
  fry_valley: 'M02',
  burger_highlands: 'M03',
  mccafe_springs: 'M04',
  mcflurry_tundra: 'M05',
  drive_thru_desert: 'M06',
  happy_meal_forest: 'M07',
  play_place_plains: 'M08',
  golden_arches_castle: 'M09',
  shadow_realm: 'M10',
};
