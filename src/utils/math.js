// Math utility functions

export const TAU = Math.PI * 2;
export const HALF_PI = Math.PI / 2;
export const QUARTER_PI = Math.PI / 4;

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function lerp(a, b, t) {
  return a + (b - a) * t;
}

export function lerpAngle(a, b, t) {
  let diff = b - a;
  while (diff > Math.PI) diff -= TAU;
  while (diff < -Math.PI) diff += TAU;
  return a + diff * t;
}

export function random(min, max) {
  return Math.random() * (max - min) + min;
}

export function randomInt(min, max) {
  return Math.floor(random(min, max + 1));
}

export function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function randomChance(probability) {
  return Math.random() < probability;
}

export function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function distance2D(x1, z1, x2, z2) {
  const dx = x2 - x1;
  const dz = z2 - z1;
  return Math.sqrt(dx * dx + dz * dz);
}

export function distance3D(x1, y1, z1, x2, y2, z2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

export function angleTo(x1, z1, x2, z2) {
  return Math.atan2(x2 - x1, z2 - z1);
}

export function normalize(x, z) {
  const len = Math.sqrt(x * x + z * z);
  if (len < 0.0001) return { x: 0, z: 0 };
  return { x: x / len, z: z / len };
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function smootherstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * t * (t * (t * 6 - 15) + 10);
}

export function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Seeded random number generator
export class SeededRandom {
  constructor(seed = Date.now()) {
    this.seed = seed;
  }

  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min, max) {
    return this.next() * (max - min) + min;
  }

  int(min, max) {
    return Math.floor(this.range(min, max + 1));
  }

  choice(array) {
    return array[Math.floor(this.next() * array.length)];
  }

  chance(prob) {
    return this.next() < prob;
  }
}

// XP curve: level n requires n*100 + n^2*50 total XP
export function xpForLevel(level) {
  return Math.floor(100 * level + 50 * level * level);
}

export function levelFromXP(totalXP) {
  let level = 1;
  let needed = xpForLevel(1);
  while (totalXP >= needed) {
    totalXP -= needed;
    level++;
    needed = xpForLevel(level);
  }
  return { level, xpIntoLevel: totalXP, xpForNext: needed };
}
