// main.js — Entry point for McChronicles: The Happy Meal Quest

import { Game } from './engine/Game.js';

// Get the game canvas
const canvas = document.getElementById('game-canvas');

// Create and start the game
const game = new Game(canvas);
game.start();

// Loading screen fade-out
function hideLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.remove();
    }, 800);
  }
}

// Animate loading bar then hide
const loadingBar = document.getElementById('loading-bar');
const loadingText = document.getElementById('loading-text');
const loadingSteps = [
  'Cooking fries...',
  'Summoning Ronald...',
  'Polishing golden arches...',
  'Wrapping Happy Meals...',
  'Hiding Hamburglar...',
  'Ready to play!',
];

let loadProgress = 0;
const loadInterval = setInterval(() => {
  loadProgress += 5;
  if (loadingBar) loadingBar.style.width = `${Math.min(loadProgress, 100)}%`;
  if (loadingText) {
    const step = Math.floor((loadProgress / 100) * loadingSteps.length);
    loadingText.textContent = loadingSteps[Math.min(step, loadingSteps.length - 1)];
  }

  if (loadProgress >= 100) {
    clearInterval(loadInterval);
    setTimeout(hideLoadingScreen, 300);
  }
}, 80);

// Window resize is handled by the Game class,
// but ensure the canvas fills the viewport
function resizeCanvas() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (canvas) {
    canvas.width = w;
    canvas.height = h;
  }
}
resizeCanvas();

// Export game instance for debugging
window.__game = game;
