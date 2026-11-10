// TutorialPopup.js — Simple first-time controls tutorial overlay
// Shows a dismissible popup with control instructions on first play.

const TUTORIAL_SHOWN_KEY = 'mcchronicles_tutorial_shown';

const TUTORIAL_CONTENT = [
  { icon: 'WASD', text: 'Move your character around the world' },
  { icon: '⇧ Shift', text: 'Hold to sprint/dash' },
  { icon: 'Enter', text: 'Confirm / Interact / Talk' },
  { icon: 'Esc', text: 'Cancel / Open Pause Menu' },
  { icon: '↑↓←→', text: 'Navigate battle menus' },
  { icon: 'Gamepad', text: 'Xbox/PlayStation controllers are supported' },
];

export default class TutorialPopup {
  /**
   * Show the tutorial popup if it hasn't been shown before.
   * @param {HTMLElement} container
   * @param {function} [onDismiss] — callback when popup is closed
   */
  static showIfNeeded(container, onDismiss) {
    // Check if already shown (localStorage)
    try {
      if (localStorage.getItem(TUTORIAL_SHOWN_KEY) === '1') {
        if (onDismiss) onDismiss();
        return;
      }
    } catch (e) {
      // localStorage might be unavailable; show anyway
    }

    const overlay = document.createElement('div');
    overlay.className = 'mc-tutorial-overlay';
    overlay.style.cssText = `
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 500;
      pointer-events: auto;
      font-family: 'Cinzel', 'Trajan Pro', 'Times New Roman', Georgia, serif;
    `;

    const panel = document.createElement('div');
    panel.className = 'mc-tutorial-panel';
    panel.style.cssText = `
      background: rgba(26, 26, 46, 0.95);
      border: 2px solid #d4af37;
      border-radius: 12px;
      padding: 32px 40px;
      max-width: 480px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(212, 175, 55, 0.3);
      text-align: center;
    `;

    const title = document.createElement('h2');
    title.textContent = 'Welcome to McChronicles';
    title.style.cssText = `
      color: #d4af37;
      font-size: 24px;
      margin: 0 0 8px 0;
      font-weight: bold;
    `;
    panel.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = 'A McDonald\'s JRPG Adventure';
    subtitle.style.cssText = `
      color: #aaa;
      font-size: 14px;
      margin: 0 0 24px 0;
    `;
    panel.appendChild(subtitle);

    const list = document.createElement('div');
    list.style.cssText = 'text-align: left; margin: 0 auto; max-width: 360px;';

    for (const item of TUTORIAL_CONTENT) {
      const row = document.createElement('div');
      row.style.cssText = `
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 0;
        border-bottom: 1px solid rgba(212, 175, 55, 0.15);
      `;

      const icon = document.createElement('span');
      icon.textContent = item.icon;
      icon.style.cssText = `
        color: #d4af37;
        font-weight: bold;
        min-width: 80px;
        font-size: 14px;
        font-family: monospace;
      `;
      row.appendChild(icon);

      const text = document.createElement('span');
      text.textContent = item.text;
      text.style.cssText = 'color: #ddd; font-size: 13px;';
      row.appendChild(text);

      list.appendChild(row);
    }
    panel.appendChild(list);

    const button = document.createElement('button');
    button.textContent = 'Got it!';
    button.style.cssText = `
      margin-top: 24px;
      padding: 10px 32px;
      background: rgba(212, 175, 55, 0.2);
      border: 2px solid #d4af37;
      border-radius: 6px;
      color: #d4af37;
      font-family: inherit;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.2s;
    `;
    button.addEventListener('mouseenter', () => {
      button.style.background = 'rgba(212, 175, 55, 0.4)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.background = 'rgba(212, 175, 55, 0.2)';
    });
    button.addEventListener('click', () => {
      try {
        localStorage.setItem(TUTORIAL_SHOWN_KEY, '1');
      } catch (e) {
        // Ignore localStorage errors
      }
      if (overlay.parentElement) {
        overlay.parentElement.removeChild(overlay);
      }
      if (onDismiss) onDismiss();
    });
    panel.appendChild(button);

    // Also dismiss on Enter/Escape
    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === 'Escape') {
        button.click();
        window.removeEventListener('keydown', onKey);
      }
    };
    window.addEventListener('keydown', onKey);

    overlay.appendChild(panel);
    container.appendChild(overlay);
  }

  /**
   * Reset the tutorial (show again on next play).
   */
  static reset() {
    try {
      localStorage.removeItem(TUTORIAL_SHOWN_KEY);
    } catch (e) {
      // Ignore
    }
  }
}
