// Procedural generation helpers

import { SeededRandom, clamp, randomChoice, randomInt } from './math.js';

// Simple value noise for terrain height
export function valueNoise2D(seed) {
  const rng = new SeededRandom(seed);
  const size = 256;
  const grid = new Float32Array(size * size);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = rng.next();
  }

  function sample(x, z) {
    x = ((x % size) + size) % size;
    z = ((z % size) + size) % size;
    return grid[Math.floor(z) * size + Math.floor(x)];
  }

  function smooth(x, z) {
    const ix = Math.floor(x);
    const iz = Math.floor(z);
    const fx = x - ix;
    const fz = z - iz;
    const a = sample(ix, iz);
    const b = sample(ix + 1, iz);
    const c = sample(ix, iz + 1);
    const d = sample(ix + 1, iz + 1);
    const u = fx * fx * (3 - 2 * fx);
    const v = fz * fz * (3 - 2 * fz);
    return lerp4(a, b, c, d, u, v);
  }

  return (x, z, scale = 1) => {
    return smooth(x * scale, z * scale);
  };
}

function lerp4(a, b, c, d, u, v) {
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

// Fractal noise (octaves of value noise)
export function fractalNoise2D(seed, octaves = 4, persistence = 0.5, lacunarity = 2) {
  const noise = valueNoise2D(seed);
  return (x, z, scale = 1) => {
    let total = 0;
    let amplitude = 1;
    let frequency = 1;
    let maxValue = 0;
    for (let i = 0; i < octaves; i++) {
      total += noise(x, z, scale * frequency) * amplitude;
      maxValue += amplitude;
      amplitude *= persistence;
      frequency *= lacunarity;
    }
    return total / maxValue;
  };
}

// Generate a procedural texture via Canvas API
export function generateTexture(width, height, drawFn) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  drawFn(ctx, width, height);
  return canvas;
}

// Convert a canvas to a THREE.CanvasTexture
export function canvasToTexture(canvas, THREE) {
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

// Generate a noise-based terrain heightmap
export function generateHeightmap(seed, width, depth, scale = 0.02) {
  const noise = fractalNoise2D(seed, 4, 0.5, 2);
  const heights = new Float32Array(width * depth);
  for (let z = 0; z < depth; z++) {
    for (let x = 0; x < width; x++) {
      heights[z * width + x] = noise(x, z, scale) * 2 - 0.5;
    }
  }
  return heights;
}

// Scattered object placement within a region
export function scatterObjects(region, count, area, seed, createFn) {
  const rng = new SeededRandom(seed);
  const objects = [];
  for (let i = 0; i < count; i++) {
    const x = rng.range(-area / 2, area / 2);
    const z = rng.range(-area / 2, area / 2);
    const obj = createFn(rng, i);
    if (obj) {
      obj.position.set(x, 0, z);
      objects.push(obj);
    }
  }
  return objects;
}

// Name generation for Nemesis system
const HAMBURGLAR_FIRST_PARTS = [
  'Three-Finger', 'One-Eye', 'Sly', 'Crooked', 'Greasy', 'Slippery',
  'Sneaky', 'Rotten', 'Black', 'Mad', 'Crazy', 'Silent',
  'Smiling', 'Broken', 'Wild', 'Cold', 'Iron', 'Silver',
  'Golden', 'Midnight', 'Dawn', 'Shade', 'Smoke', 'Ash',
];

const HAMBURGLAR_NAMES = [
  'Mack', 'Jack', 'Rex', 'Vex', 'Dex', 'Nix', 'Zax', 'Blax',
  'Crumb', 'Grindle', 'Munch', 'Crunch', 'Slab', 'Gristle',
  'Bun', 'Patty', 'Melt', 'Sizzle', 'Char', 'Drip', 'Grease',
  'Sloppy', 'Wicked', 'Dastardly', 'Mean', 'Nasty', 'Foul',
  'Rancid', 'Stale', 'Burnt', 'Crispy', 'Soggy', 'Moldy',
];

const HAMBURGLAR_TITLES = [
  'the Greasy', 'the Burger Thief', 'the Bun Snatcher',
  'the Fry Filcher', 'the Patty Pirate', 'the Meat Miser',
  'the Condiment Criminal', 'the Snack Stealer',
  'of the Dark Arches', 'the Wrong Order', 'the Cold Fry',
  'the Burnt Bun', 'the Soggy Patty', 'the Missing Toy',
];

export function generateNemesisName(seed) {
  const rng = new SeededRandom(seed);
  const part = randomChoice(HAMBURGLAR_FIRST_PARTS);
  const name = randomChoice(HAMBURGLAR_NAMES);
  const title = rng.chance(0.5) ? ` ${randomChoice(HAMBURGLAR_TITLES)}` : '';
  return `Hamburglar ${part} ${name}${title}`;
}

// Procedural color palette generation
export function generatePalette(baseHue, count = 5) {
  const palette = [];
  for (let i = 0; i < count; i++) {
    const hue = (baseHue + (i * 360 / count)) % 360;
    const sat = 40 + (i * 10) % 40;
    const light = 40 + (i * 15) % 30;
    palette.push(`hsl(${hue}, ${sat}%, ${light}%)`);
  }
  return palette;
}

// Poisson disk-like sampling for non-overlapping placement
export function poissonDisk(area, minDist, maxAttempts = 30, seed = Date.now()) {
  const rng = new SeededRandom(seed);
  const points = [];
  const cellSize = minDist / Math.sqrt(2);
  const gridW = Math.ceil(area / cellSize);
  const gridH = Math.ceil(area / cellSize);
  const grid = new Array(gridW * gridH).fill(null);

  function gridIndex(x, z) {
    const gx = Math.floor((x + area / 2) / cellSize);
    const gz = Math.floor((z + area / 2) / cellSize);
    return gz * gridW + gx;
  }

  function tooClose(x, z) {
    const gx = Math.floor((x + area / 2) / cellSize);
    const gz = Math.floor((z + area / 2) / cellSize);
    for (let dz = -2; dz <= 2; dz++) {
      for (let dx = -2; dx <= 2; dx++) {
        const nx = gx + dx;
        const nz = gz + dz;
        if (nx < 0 || nz < 0 || nx >= gridW || nz >= gridH) continue;
        const idx = nz * gridW + nx;
        const p = grid[idx];
        if (p) {
          const ddx = p.x - x;
          const ddz = p.z - z;
          if (ddx * ddx + ddz * ddz < minDist * minDist) return true;
        }
      }
    }
    return false;
  }

  // Seed with random points
  for (let i = 0; i < maxAttempts * 2; i++) {
    const x = rng.range(-area / 2, area / 2);
    const z = rng.range(-area / 2, area / 2);
    if (!tooClose(x, z)) {
      points.push({ x, z });
      grid[gridIndex(x, z)] = { x, z };
    }
  }

  // Grow from existing points
  const active = [...points];
  while (active.length > 0 && points.length < 500) {
    const idx = randomInt(0, active.length - 1);
    const base = active[idx];
    let found = false;
    for (let i = 0; i < maxAttempts; i++) {
      const angle = rng.range(0, Math.PI * 2);
      const dist = rng.range(minDist, minDist * 2);
      const x = base.x + Math.cos(angle) * dist;
      const z = base.z + Math.sin(angle) * dist;
      if (Math.abs(x) > area / 2 || Math.abs(z) > area / 2) continue;
      if (!tooClose(x, z)) {
        points.push({ x, z });
        grid[gridIndex(x, z)] = { x, z };
        active.push({ x, z });
        found = true;
        break;
      }
    }
    if (!found) active.splice(idx, 1);
  }

  return points;
}
