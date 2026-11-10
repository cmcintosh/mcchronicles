// AudioSystem.js — Facade that coordinates all audio sub-engines
// Manages: AudioEngine (core), SfxEngine, MusicEngine, AmbientEngine, VoicePlayer
// Provides backward-compatible API for existing Game.js code

import AudioEngine from './AudioEngine.js';
import SfxEngine from './SfxEngine.js';
import MusicEngine, { TRACK_IDS, REGION_TRACK_MAP } from './MusicEngine.js';
import AmbientEngine from './AmbientEngine.js';
import VoicePlayer from './VoicePlayer.js';

export default class AudioSystem {
  constructor() {
    this.audioEngine = new AudioEngine();
    this.sfx = new SfxEngine(this.audioEngine);
    this.music = new MusicEngine(this.audioEngine);
    this.ambient = new AmbientEngine(this.audioEngine);
    this.voice = new VoicePlayer(this.audioEngine);

    this._initialized = false;
    this._currentMusicType = null;
    this._currentRegionId = null;
  }

  /**
   * Initialize all audio systems. MUST be called after a user gesture.
   */
  async init() {
    if (this._initialized) return;

    await this.audioEngine.init();
    this.sfx.init();
    await this.music.init();
    this.ambient.init();
    this.voice.init();

    this._initialized = true;
  }

  /**
   * Ensure audio context is running.
   */
  ensureRunning() {
    this.audioEngine.ensureRunning();
  }

  // ═══ MUSIC ═════════════════════════════════════════════════════════

  /**
   * Play music by type and region.
   * Backward-compatible with existing Game.js calls.
   * @param {'title'|'overworld'|'battle'|'town'|'dungeon'|'boss'|'victory'|'inn'|'emotional'|'minigame'} type
   * @param {string} regionId - Optional region key
   */
  playMusic(type, regionId) {
    if (!this._initialized) return;
    this.audioEngine.ensureRunning();

    this._currentMusicType = type;
    this._currentRegionId = regionId;

    let trackId = null;

    switch (type) {
      case 'title':
        trackId = TRACK_IDS.TITLE;
        break;
      case 'overworld':
        trackId = REGION_TRACK_MAP[regionId] || TRACK_IDS.FRY_VALLEY;
        break;
      case 'battle':
        trackId = TRACK_IDS.BATTLE;
        break;
      case 'boss':
        trackId = TRACK_IDS.BOSS;
        break;
      case 'victory':
        // Play victory fanfare, then resume overworld
        this.music.playTrack(TRACK_IDS.VICTORY);
        setTimeout(() => {
          if (this._currentMusicType === 'victory') {
            this.playMusic('overworld', this._currentRegionId);
          }
        }, 16000); // Fanfare ~15s
        return;
      case 'inn':
        trackId = TRACK_IDS.INN;
        break;
      case 'emotional':
        trackId = TRACK_IDS.EMOTIONAL;
        break;
      case 'minigame':
        trackId = TRACK_IDS.MINIGAME;
        break;
      case 'hamburglar':
        trackId = TRACK_IDS.HAMBURGLAR;
        break;
      case 'final_boss':
        trackId = TRACK_IDS.FINAL_BOSS;
        break;
      case 'final_boss_phase4':
        trackId = TRACK_IDS.FINAL_BOSS_PHASE4;
        break;
      case 'breakfast':
        trackId = TRACK_IDS.BREAKFAST;
        break;
      default:
        // Fallback: use region track
        if (regionId) {
          trackId = REGION_TRACK_MAP[regionId] || TRACK_IDS.FRY_VALLEY;
        } else {
          trackId = TRACK_IDS.TITLE;
        }
    }

    if (trackId) {
      this.music.playTrack(trackId);
    }
  }

  /**
   * Stop all music.
   */
  stopMusic() {
    this.music.stopTrack();
    this._currentMusicType = null;
  }

  /**
   * Transition to a new music track with crossfade.
   */
  transitionMusic(type, regionId, fadeTime = 1.0) {
    if (!this._initialized) return;
    this._currentMusicType = type;
    this._currentRegionId = regionId;

    let trackId = null;
    switch (type) {
      case 'battle':
        trackId = TRACK_IDS.BATTLE;
        break;
      case 'overworld':
        trackId = REGION_TRACK_MAP[regionId] || TRACK_IDS.FRY_VALLEY;
        break;
      case 'boss':
        trackId = TRACK_IDS.BOSS;
        break;
      default:
        trackId = REGION_TRACK_MAP[regionId] || TRACK_IDS.FRY_VALLEY;
    }

    if (trackId) {
      this.music.transitionTo(trackId, fadeTime);
    }
  }

  /**
   * Set boss music intensity based on HP percentage.
   */
  setBossIntensity(bossHpPercent) {
    this.music.updateBossIntensity(bossHpPercent);
  }

  // ═══ SFX ══════════════════════════════════════════════════════════

  /**
   * Play a sound effect.
   * Supports both new SFX names and legacy names.
   */
  playSFX(type) {
    if (!this._initialized) return;
    this.sfx.playSfx(type);
  }

  // ═══ VICTORY / DEFEAT ══════════════════════════════════════════════

  /**
   * Play victory fanfare.
   */
  playVictory() {
    if (!this._initialized) return;
    this.sfx.playSfx('victory');
    this.playMusic('victory');
  }

  /**
   * Play defeat sequence.
   */
  playDefeat() {
    if (!this._initialized) return;
    this.sfx.playSfx('game_over');
    this.stopMusic();
  }

  // ═══ AMBIENT ═══════════════════════════════════════════════════════

  /**
   * Start ambient soundscape for a region.
   */
  startAmbient(regionId) {
    if (!this._initialized) return;
    this.ambient.startAmbient(regionId);
  }

  /**
   * Stop ambient soundscape.
   */
  stopAmbient() {
    this.ambient.stopAmbient();
  }

  /**
   * Crossfade ambient to a new region.
   */
  crossfadeAmbient(regionId, fadeTime = 2.0) {
    if (!this._initialized) return;
    this.ambient.crossfade(regionId, fadeTime);
  }

  // ═══ VOICE ═════════════════════════════════════════════════════════

  /**
   * Play a voice file.
   * @param {string} filePath - Path to MP3 file
   */
  async playVoice(filePath) {
    if (!this._initialized) return;
    await this.voice.play(filePath);
  }

  /**
   * Stop voice playback.
   */
  stopVoice() {
    this.voice.stop();
  }

  /**
   * Toggle voice mute.
   */
  toggleVoiceMute() {
    return this.voice.toggleMute();
  }

  /**
   * Set voice volume.
   */
  setVoiceVolume(value) {
    this.voice.setVolume(value);
  }

  // ═══ VOLUME CONTROLS ════════════════════════════════════════════════

  /**
   * Set master volume.
   */
  setVolume(level) {
    this.audioEngine.setMasterVolume(level);
  }

  /**
   * Set music volume.
   */
  setMusicVolume(level) {
    this.audioEngine.setBusVolume('music', level);
  }

  /**
   * Set SFX volume.
   */
  setSFXVolume(level) {
    this.audioEngine.setBusVolume('sfx', level);
  }

  /**
   * Set ambient volume.
   */
  setAmbientVolume(level) {
    this.audioEngine.setBusVolume('ambient', level);
  }

  /**
   * Set voice volume (bus level).
   */
  setVoiceBusVolume(level) {
    this.audioEngine.setBusVolume('voice', level);
  }

  // ═══ MUTE ═══════════════════════════════════════════════════════════

  mute() {
    this.audioEngine.mute();
  }

  unmute() {
    this.audioEngine.unmute();
  }

  isMuted() {
    return this.audioEngine.isMuted();
  }

  // ═══ DISPOSE ═════════════════════════════════════════════════════════

  dispose() {
    this.music.dispose();
    this.ambient.dispose();
    this.voice.dispose();
    this.audioEngine.dispose();
    this._initialized = false;
  }
}
