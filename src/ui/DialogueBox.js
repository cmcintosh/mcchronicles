// DialogueBox.js — McChronicles JRPG Storybook Dialogue Box
// Ornate bottom-screen dialogue with typewriter effect, backdrop images, and TTS voice

const STYLE_ID = 'mc-dialogue-box-styles';

const DIALOGUE_STYLES = `
@keyframes mc-dialogue-slide-up {
  from { transform: translateY(100%) translateY(20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

@keyframes mc-dialogue-banner-shine {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

@keyframes mc-dialogue-pulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

@keyframes mc-backdrop-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes mc-backdrop-fade-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}

.mc-dialogue-overlay {
  position: fixed;
  bottom: 0; left: 0;
  width: 100vw;
  z-index: 9000;
  display: none;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem 2rem;
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', serif;
  pointer-events: none;
}

.mc-dialogue-overlay.visible {
  display: flex;
  animation: mc-dialogue-slide-up 0.4s ease-out;
}

.mc-dialogue-box {
  width: 100%;
  max-width: 800px;
  position: relative;
  pointer-events: auto;
  background: linear-gradient(180deg, rgba(45,25,10,0.97) 0%, rgba(35,18,8,0.98) 50%, rgba(40,22,10,0.97) 100%);
  border: 3px solid transparent;
  border-image: linear-gradient(135deg, #ffd700, #cc8800, #ffaa22, #cc8800, #ffd700) 1;
  border-radius: 8px;
  padding: 0;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.6), 0 0 30px rgba(255,180,40,0.15), inset 0 0 20px rgba(0,0,0,0.4);
}

/* Scrollwork corners */
.mc-dialogue-box::before,
.mc-dialogue-box::after {
  content: '';
  position: absolute;
  width: 30px; height: 30px;
  border: 2px solid #ffd700;
  pointer-events: none;
}

.mc-dialogue-box::before {
  top: -2px; left: -2px;
  border-right: none; border-bottom: none;
  border-top-left-radius: 8px;
  box-shadow: -1px -1px 4px rgba(255,200,80,0.3);
}

.mc-dialogue-box::after {
  bottom: -2px; right: -2px;
  border-left: none; border-top: none;
  border-bottom-right-radius: 8px;
  box-shadow: 1px 1px 4px rgba(255,200,80,0.3);
}

.mc-dialogue-banner {
  position: absolute;
  top: -18px; left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #8b4513, #d4a017, #ffd700, #d4a017, #8b4513);
  background-size: 200% auto;
  padding: 0.3rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  color: #2a1a05;
  text-shadow: 0 1px 0 rgba(255,255,255,0.3);
  letter-spacing: 0.12em;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0,0,0,0.5), 0 0 15px rgba(255,200,80,0.3);
  animation: mc-dialogue-banner-shine 4s linear infinite;
  z-index: 2;
}

.mc-dialogue-banner::before,
.mc-dialogue-banner::after {
  content: '✦';
  color: #2a1a05;
  margin: 0 0.5rem;
  font-size: 0.8rem;
}

.mc-dialogue-content {
  padding: 2.2rem 2rem 1.5rem;
  min-height: 80px;
  max-height: 200px;
  overflow-y: auto;
}

.mc-dialogue-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #f0e0c0;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
  letter-spacing: 0.02em;
  margin: 0;
  min-height: 2rem;
}

.mc-dialogue-text .mc-cursor {
  display: inline-block;
  width: 10px;
  height: 1.2em;
  background: #ffd700;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: mc-dialogue-pulse 0.6s ease-in-out infinite;
}

.mc-dialogue-prompt {
  position: absolute;
  bottom: 0.5rem; right: 1rem;
  font-size: 0.8rem;
  color: rgba(255,215,0,0.6);
  font-style: italic;
  letter-spacing: 0.1em;
  animation: mc-dialogue-pulse 1.2s ease-in-out infinite;
}

/* Ornamental divider in the box */
.mc-dialogue-ornament {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 10%, rgba(204,136,0,0.15) 50%, transparent 90%);
  pointer-events: none;
}

/* Dimming backdrop */
.mc-dialogue-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.3);
  z-index: 8999;
  display: none;
  pointer-events: none;
}

.mc-dialogue-backdrop.visible {
  display: block;
  pointer-events: auto;
}

/* Story backdrop image — full screen behind dialogue */
.mc-story-backdrop {
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  z-index: 8998;
  display: none;
  pointer-events: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000;
}

.mc-story-backdrop.visible {
  display: block;
  animation: mc-backdrop-fade-in 0.8s ease-out forwards;
}

.mc-story-backdrop.fading-out {
  animation: mc-backdrop-fade-out 0.6s ease-out forwards;
}

/* Voice mute/unmute button */
.mc-voice-toggle {
  position: fixed;
  top: 1rem; right: 1rem;
  z-index: 9001;
  background: rgba(45,25,10,0.9);
  border: 2px solid #ffd700;
  border-radius: 50%;
  width: 44px; height: 44px;
  cursor: pointer;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #ffd700;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.5);
  pointer-events: auto;
}

.mc-voice-toggle.visible {
  display: flex;
}

.mc-voice-toggle:hover {
  transform: scale(1.1);
  box-shadow: 0 2px 15px rgba(255,200,80,0.4);
}

.mc-voice-toggle.muted {
  opacity: 0.5;
}
`;

export default class DialogueBox {
  constructor() {
    this._container = null;
    this._backdrop = null;
    this._storyBackdrop = null;
    this._textEl = null;
    this._bannerEl = null;
    this._promptEl = null;
    this._voiceToggle = null;
    this._dialogueQueue = [];
    this._currentIndex = 0;
    this._fullText = '';
    this._displayedText = '';
    this._typeSpeed = 30; // ms per character
    this._typeAccumulator = 0;
    this._isTyping = false;
    this._isVisible = false;
    this._onComplete = null;
    this._keyHandler = null;
    this._clickHandler = null;

    // Backdrop state
    this._currentBackdropUrl = null;
    this._backdropFadeTimer = null;

    // Voice state
    this._voiceMuted = false;
    this._voicePrefix = null;
    this._currentAudio = null;

    this._injectStyles();
    this._build();
  }

  _injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = DIALOGUE_STYLES;
    document.head.appendChild(style);
  }

  _build() {
    // Story backdrop image (full screen)
    this._storyBackdrop = document.createElement('div');
    this._storyBackdrop.className = 'mc-story-backdrop';
    document.body.appendChild(this._storyBackdrop);

    // Dimming backdrop
    this._backdrop = document.createElement('div');
    this._backdrop.className = 'mc-dialogue-backdrop';
    document.body.appendChild(this._backdrop);

    // Main overlay
    this._container = document.createElement('div');
    this._container.className = 'mc-dialogue-overlay';

    // Box
    const box = document.createElement('div');
    box.className = 'mc-dialogue-box';

    // Ornament line
    const ornament = document.createElement('div');
    ornament.className = 'mc-dialogue-ornament';
    box.appendChild(ornament);

    // Banner (speaker name)
    this._bannerEl = document.createElement('div');
    this._bannerEl.className = 'mc-dialogue-banner';
    this._bannerEl.textContent = '';
    box.appendChild(this._bannerEl);

    // Content area
    const content = document.createElement('div');
    content.className = 'mc-dialogue-content';

    this._textEl = document.createElement('p');
    this._textEl.className = 'mc-dialogue-text';
    this._textEl.textContent = '';
    content.appendChild(this._textEl);

    box.appendChild(content);

    // Continue prompt
    this._promptEl = document.createElement('div');
    this._promptEl.className = 'mc-dialogue-prompt';
    this._promptEl.textContent = '▼ Press Space';
    this._promptEl.style.display = 'none';
    box.appendChild(this._promptEl);

    this._container.appendChild(box);
    document.body.appendChild(this._container);

    // Voice toggle button
    this._voiceToggle = document.createElement('button');
    this._voiceToggle.className = 'mc-voice-toggle';
    this._voiceToggle.title = 'Toggle Voice Narration';
    this._voiceToggle.textContent = '🔊';
    this._voiceToggle.addEventListener('click', () => {
      this._voiceMuted = !this._voiceMuted;
      this._voiceToggle.classList.toggle('muted', this._voiceMuted);
      this._voiceToggle.textContent = this._voiceMuted ? '🔇' : '🔊';
      if (this._voiceMuted && this._currentAudio) {
        this._currentAudio.pause();
        this._currentAudio = null;
      }
    });
    document.body.appendChild(this._voiceToggle);

    // Key handler
    this._keyHandler = (e) => {
      if (!this._isVisible) return;
      if (e.code === 'Enter' || e.code === 'Space' || e.code === 'NumpadEnter') {
        e.preventDefault();
        e.stopPropagation();
        this._advance();
      }
    };
  }

  _advance() {
    if (this._isTyping) {
      // Skip typewriter — show full text immediately
      this._skip();
      return;
    }

    this._currentIndex++;

    if (this._currentIndex >= this._dialogueQueue.length) {
      // Dialogue complete
      this.hide();
      const cb = this._onComplete;
      this._onComplete = null;
      if (cb) cb();
      return;
    }

    this._showCurrentLine();
  }

  _showCurrentLine() {
    const entry = this._dialogueQueue[this._currentIndex];
    if (!entry) return;

    // Update banner
    this._bannerEl.textContent = entry.speaker || '';

    // Set full text
    this._fullText = entry.text || '';
    this._displayedText = '';
    this._textEl.textContent = '';
    this._isTyping = true;
    this._typeAccumulator = 0;
    this._promptEl.style.display = 'none';

    // Play voice audio for this line
    this._playVoiceLine(this._currentIndex);
  }

  _playVoiceLine(lineIndex) {
    // Stop any currently playing audio
    if (this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio = null;
    }

    if (this._voiceMuted || !this._voicePrefix) return;

    const audioUrl = `${this._voicePrefix}_${lineIndex}.mp3`;

    // Try to play the voice file
    const audio = new Audio(audioUrl);
    audio.onerror = () => {
      // Voice file not found — silently ignore
      this._currentAudio = null;
    };
    audio.onended = () => {
      this._currentAudio = null;
    };

    this._currentAudio = audio;
    audio.play().catch(() => {
      // Autoplay might be blocked — ignore
      this._currentAudio = null;
    });
  }

  _updateTyping(dt) {
    if (!this._isTyping) return;

    this._typeAccumulator += dt;

    while (this._typeAccumulator >= this._typeSpeed && this._displayedText.length < this._fullText.length) {
      this._typeAccumulator -= this._typeSpeed;
      this._displayedText = this._fullText.slice(0, this._displayedText.length + 1);

      // Rebuild text with cursor
      this._textEl.innerHTML = this._escapeHtml(this._displayedText) + '<span class="mc-cursor"></span>';
    }

    if (this._displayedText.length >= this._fullText.length) {
      this._isTyping = false;
      // Remove cursor, show prompt
      this._textEl.textContent = this._fullText;
      if (this._currentIndex < this._dialogueQueue.length - 1) {
        this._promptEl.textContent = '▼ Press Space';
      } else {
        this._promptEl.textContent = '✦ Press Space to close';
      }
      this._promptEl.style.display = 'block';
    }
  }

  _escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Show a sequence of dialogue lines.
   * @param {Array<{speaker: string, text: string}>} dialogueArray
   * @param {Function} onComplete - Called when all dialogue is dismissed
   * @param {Object} options - Optional: { backdrop, voicePrefix }
   */
  show(dialogueArray, onComplete, options = {}) {
    if (!dialogueArray || dialogueArray.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    this._dialogueQueue = dialogueArray;
    this._currentIndex = 0;
    this._onComplete = onComplete || null;
    this._isVisible = true;

    // Show story backdrop if provided
    if (options.backdrop) {
      this._showBackdrop(options.backdrop);
    }

    // Set voice prefix for audio
    this._voicePrefix = options.voicePrefix || null;

    this._container.classList.add('visible');
    this._backdrop.classList.add('visible');

    // Show voice toggle if voice is available
    if (this._voicePrefix) {
      this._voiceToggle.classList.add('visible');
    }

    this._showCurrentLine();

    // Attach key handler
    document.addEventListener('keydown', this._keyHandler, true);

    // Click on box also advances
    const box = this._container.querySelector('.mc-dialogue-box');
    if (box) {
      box.addEventListener('click', this._clickHandler = () => this._advance());
    }
  }

  _showBackdrop(url) {
    if (this._currentBackdropUrl === url) return;

    // Clear any pending fade-out
    if (this._backdropFadeTimer) {
      clearTimeout(this._backdropFadeTimer);
      this._backdropFadeTimer = null;
    }

    this._storyBackdrop.classList.remove('fading-out');
    this._storyBackdrop.style.backgroundImage = `url('${url}')`;
    this._storyBackdrop.classList.add('visible');
    this._currentBackdropUrl = url;
  }

  _hideBackdrop() {
    if (!this._currentBackdropUrl) return;

    this._storyBackdrop.classList.add('fading-out');

    // After fade-out animation, fully hide
    this._backdropFadeTimer = setTimeout(() => {
      this._storyBackdrop.classList.remove('visible', 'fading-out');
      this._storyBackdrop.style.backgroundImage = '';
      this._currentBackdropUrl = null;
      this._backdropFadeTimer = null;
    }, 600);
  }

  hide() {
    this._isVisible = false;
    this._isTyping = false;
    this._container.classList.remove('visible');
    this._backdrop.classList.remove('visible');
    this._textEl.textContent = '';
    this._bannerEl.textContent = '';
    this._promptEl.style.display = 'none';

    // Hide story backdrop
    this._hideBackdrop();

    // Stop voice audio
    if (this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio = null;
    }

    // Hide voice toggle
    this._voiceToggle.classList.remove('visible');

    // Clear voice prefix
    this._voicePrefix = null;

    document.removeEventListener('keydown', this._keyHandler, true);

    const box = this._container.querySelector('.mc-dialogue-box');
    if (box && this._clickHandler) {
      box.removeEventListener('click', this._clickHandler);
      this._clickHandler = null;
    }
  }

  /**
   * Per-frame update for typewriter animation.
   * @param {number} dt - Delta time in milliseconds
   */
  update(dt) {
    if (this._isVisible && this._isTyping) {
      this._updateTyping(dt);
    }
  }

  /**
   * Skip the current typewriter effect, showing the full line immediately.
   */
  skip() {
    if (this._isTyping) {
      this._displayedText = this._fullText;
      this._isTyping = false;
      this._textEl.textContent = this._fullText;
      if (this._currentIndex < this._dialogueQueue.length - 1) {
        this._promptEl.textContent = '▼ Press Space';
      } else {
        this._promptEl.textContent = '✦ Press Space to close';
      }
      this._promptEl.style.display = 'block';
    }
  }

  /**
   * Set voice muted state.
   * @param {boolean} muted
   */
  setVoiceMuted(muted) {
    this._voiceMuted = muted;
    this._voiceToggle.classList.toggle('muted', muted);
    this._voiceToggle.textContent = muted ? '🔇' : '🔊';
    if (muted && this._currentAudio) {
      this._currentAudio.pause();
      this._currentAudio = null;
    }
  }

  destroy() {
    this.hide();
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
    if (this._backdrop && this._backdrop.parentNode) {
      this._backdrop.parentNode.removeChild(this._backdrop);
    }
    if (this._storyBackdrop && this._storyBackdrop.parentNode) {
      this._storyBackdrop.parentNode.removeChild(this._storyBackdrop);
    }
    if (this._voiceToggle && this._voiceToggle.parentNode) {
      this._voiceToggle.parentNode.removeChild(this._voiceToggle);
    }
  }
}
