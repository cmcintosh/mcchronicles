// VoicePlayer.js — Playback of edge-tts MP3 voice files
// Loads and plays voice files from /voice/ directory, connected to voice bus

export default class VoicePlayer {
  constructor(audioEngine) {
    this.audioEngine = audioEngine;
    this.ctx = null;
    this.bus = null;
    this.currentSource = null;
    this.currentBuffer = null;
    this.muted = false;
    this.volume = 1.0;
    this._cache = new Map();
  }

  /**
   * Initialize — called after AudioEngine.init()
   */
  init() {
    this.ctx = this.audioEngine.getContext();
    this.bus = this.audioEngine.getBus('voice');
  }

  /**
   * Play a voice file.
   * @param {string} filePath - Path to MP3 file (e.g. '/voice/game_start_0.mp3')
   * @returns {Promise<void>} Resolves when audio finishes playing
   */
  async play(filePath) {
    if (!this.ctx || !this.bus || this.muted) return;

    this.audioEngine.ensureRunning();

    // Stop current playing audio
    this.stop();

    try {
      // Check cache first
      let audioBuffer = this._cache.get(filePath);

      if (!audioBuffer) {
        // Fetch and decode
        const response = await fetch(filePath);
        if (!response.ok) {
          console.warn(`[VoicePlayer] Failed to load: ${filePath} (${response.status})`);
          return;
        }

        const arrayBuffer = await response.arrayBuffer();
        audioBuffer = await this.ctx.decodeAudioData(arrayBuffer);

        // Cache for reuse (limit cache to 50 entries)
        if (this._cache.size >= 50) {
          const firstKey = this._cache.keys().next().value;
          this._cache.delete(firstKey);
        }
        this._cache.set(filePath, audioBuffer);
      }

      // Create buffer source
      const source = this.ctx.createBufferSource();
      source.buffer = audioBuffer;

      // Gain for volume control
      const gain = this.ctx.createGain();
      gain.gain.value = this.volume;

      source.connect(gain);
      gain.connect(this.bus);

      source.start();

      this.currentSource = source;
      this.currentGain = gain;

      return new Promise(resolve => {
        source.onended = () => {
          if (this.currentSource === source) {
            this.currentSource = null;
            this.currentGain = null;
          }
          resolve();
        };
      });
    } catch (e) {
      console.warn(`[VoicePlayer] Error playing ${filePath}:`, e);
    }
  }

  /**
   * Stop currently playing voice audio.
   */
  stop() {
    if (this.currentSource) {
      try {
        this.currentSource.stop();
      } catch (e) {
        // Already stopped
      }
      this.currentSource = null;
      this.currentGain = null;
    }
  }

  /**
   * Toggle mute.
   */
  toggleMute() {
    this.muted = !this.muted;
    if (this.muted) {
      this.stop();
    }
    return this.muted;
  }

  /**
   * Set voice volume (0.0 - 1.0).
   */
  setVolume(value) {
    this.volume = Math.max(0, Math.min(1, value));
    if (this.currentGain) {
      this.currentGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  /**
   * Check if voice is currently playing.
   */
  isPlaying() {
    return this.currentSource !== null;
  }

  /**
   * Clear the voice cache.
   */
  clearCache() {
    this._cache.clear();
  }

  /**
   * Dispose.
   */
  dispose() {
    this.stop();
    this.clearCache();
  }
}
