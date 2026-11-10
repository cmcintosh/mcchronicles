import * as THREE from 'three'
import toonVert from '../shaders/toon.vert?raw'
import toonFrag from '../shaders/toon.frag?raw'

/**
 * ShaderManager — cached toon shader material factory for the JRPG renderer.
 *
 * Provides createToonMaterial() and createOutlineMaterial() with caching so
 * that meshes sharing the same colour + options reuse a single GPU material.
 */

// ── Default uniform values ────────────────────────────────────────────────

const DEFAULT_LIGHT_DIR = new THREE.Vector3(-0.5, -1.0, -0.3)
const DEFAULT_LIGHT_COLOR = 0xfff4dd
const DEFAULT_AMBIENT_COLOR = 0x4466aa
const DEFAULT_STEPS = 4
const DEFAULT_RIM_POWER = 3.0
const DEFAULT_RIM_COLOR = 0x888899
const DEFAULT_OUTLINE_WIDTH = 0.03
const DEFAULT_OUTLINE_COLOR = 0x111111
const DEFAULT_ROUGHNESS = 0.6
const DEFAULT_METALNESS = 0.0

// ── Caches ────────────────────────────────────────────────────────────────

/** @type {Map<string, THREE.ShaderMaterial>} */
const toonCache = new Map()

/** @type {Map<string, THREE.Material>} */
const outlineCache = new Map()

// ── Helpers ───────────────────────────────────────────────────────────────

/**
 * Convert a hex colour (0xff0000) into a THREE.Color → uniform vec3 value.
 * @param {number} hex
 * @returns {THREE.Color}
 */
function colorHexToThree(hex) {
  return new THREE.Color(hex)
}

/**
 * Build a stable hash string from a colour hex + options object.
 * Only the *values* that differ from defaults are included to maximise cache
 * hits, but we still include every key so that e.g. `{ steps: 4 }` and
 * `{ steps: 5 }` produce different keys.
 *
 * @param {number} color
 * @param {Record<string, any>} opts
 * @returns {string}
 */
function buildCacheKey(color, opts) {
  const keys = Object.keys(opts).sort()
  const parts = keys.map(k => `${k}:${opts[k]}`)
  return `${color.toString(16)}|${parts.join(',')}`
}

/**
 * Resolve an option that may be a hex colour or a THREE.Color.
 * Always returns a THREE.Color suitable for uniform value.
 *
 * @param {number|THREE.Color} value
 * @param {number} fallbackHex
 * @returns {THREE.Color}
 */
function resolveColor(value, fallbackHex) {
  if (value === undefined || value === null) {
    return new THREE.Color(fallbackHex)
  }
  if (value instanceof THREE.Color) {
    return value.clone()
  }
  return new THREE.Color(value)
}

/**
 * Resolve a Vector3 option or return a clone of the fallback.
 *
 * @param {THREE.Vector3|undefined} value
 * @param {THREE.Vector3} fallback
 * @returns {THREE.Vector3}
 */
function resolveVector3(value, fallback) {
  if (value instanceof THREE.Vector3) {
    return value.clone()
  }
  return fallback.clone()
}

// ── Public API ────────────────────────────────────────────────────────────

/**
 * Create (or retrieve from cache) a toon ShaderMaterial.
 *
 * @param {number} color   Hex colour e.g. 0xff0000
 * @param {Object} [options]  Override any uniform default.
 * @param {number|THREE.Color} [options.uLightColor]
 * @param {THREE.Vector3} [options.uLightDir]
 * @param {number|THREE.Color} [options.uAmbientColor]
 * @param {number} [options.uRoughness]
 * @param {number} [options.uMetalness]
 * @param {number} [options.uOutlineWidth]
 * @param {number|THREE.Color} [options.uOutlineColor]
 * @param {number} [options.uRimPower]
 * @param {number|THREE.Color} [options.uRimColor]
 * @param {number} [options.uTime]
 * @param {number} [options.uSteps]
 * @returns {THREE.ShaderMaterial}
 */
export class ShaderManager {
  createToonMaterial(color, options = {}) {
    return createToonMaterial(color, options);
  }
  createOutlineMaterial(color, options = {}) {
    return createOutlineMaterial(color, options);
  }
  updateTime(time) {
    return updateTime(time);
  }
  clearCache() {
    return clearCache();
  }
  getCacheSize() {
    return getCacheSize();
  }
}

export function createToonMaterial(color, options = {}) {
  const key = buildCacheKey(color, options)

  const cached = toonCache.get(key)
  if (cached) return cached

  const uColor = colorHexToThree(color)
  const uLightDir = resolveVector3(options.uLightDir, DEFAULT_LIGHT_DIR)
  const uLightColor = resolveColor(options.uLightColor, DEFAULT_LIGHT_COLOR)
  const uAmbientColor = resolveColor(options.uAmbientColor, DEFAULT_AMBIENT_COLOR)
  const uRoughness = options.uRoughness ?? DEFAULT_ROUGHNESS
  const uMetalness = options.uMetalness ?? DEFAULT_METALNESS
  const uOutlineWidth = options.uOutlineWidth ?? DEFAULT_OUTLINE_WIDTH
  const uOutlineColor = resolveColor(options.uOutlineColor, DEFAULT_OUTLINE_COLOR)
  const uRimPower = options.uRimPower ?? DEFAULT_RIM_POWER
  const uRimColor = resolveColor(options.uRimColor, DEFAULT_RIM_COLOR)
  const uTime = options.uTime ?? 0.0
  const uSteps = options.uSteps ?? DEFAULT_STEPS

  const material = new THREE.ShaderMaterial({
    vertexShader: toonVert,
    fragmentShader: toonFrag,
    uniforms: {
      uColor:        { value: uColor },
      uLightDir:     { value: uLightDir },
      uLightColor:   { value: uLightColor },
      uAmbientColor: { value: uAmbientColor },
      uRoughness:    { value: uRoughness },
      uMetalness:    { value: uMetalness },
      uOutlineWidth: { value: uOutlineWidth },
      uOutlineColor: { value: uOutlineColor },
      uRimPower:     { value: uRimPower },
      uRimColor:     { value: uRimColor },
      uTime:         { value: uTime },
      uSteps:        { value: uSteps },
    },
  })

  toonCache.set(key, material)
  return material
}

/**
 * Create (or retrieve from cache) an inverted-hull outline material.
 *
 * This is a simple dark material rendered on back-faces with polygon offset
 * so that when the mesh is scaled slightly larger it produces a toon outline.
 *
 * @param {number} [color]     Hex colour for the outline (default 0x111111)
 * @param {Object} [options]
 * @param {number} [options.outlineWidth]  Not used in the material itself but
 *   included in the cache key so meshes with different widths get different
 *   materials if the user wants to vary the colour by width.
 * @param {number|THREE.Color} [options.uOutlineColor]  Override outline colour.
 * @returns {THREE.MeshBasicMaterial}
 */
export function createOutlineMaterial(color = DEFAULT_OUTLINE_COLOR, options = {}) {
  const outlineColor = options.uOutlineColor !== undefined
    ? resolveColor(options.uOutlineColor, color)
    : colorHexToThree(color)

  const key = `outline|${outlineColor.getHexString()}|${options.outlineWidth ?? DEFAULT_OUTLINE_WIDTH}`

  const cached = outlineCache.get(key)
  if (cached) return cached

  const material = new THREE.MeshBasicMaterial({
    color: outlineColor,
    side: THREE.BackSide,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  })

  outlineCache.set(key, material)
  return material
}

/**
 * Update the uTime uniform on every cached toon material.
 * Call once per frame from the render loop.
 *
 * @param {number} time  Elapsed time in seconds (e.g. clock.getElapsedTime())
 */
export function updateTime(time) {
  for (const material of toonCache.values()) {
    material.uniforms.uTime.value = time
  }
}

/**
 * Clear all cached materials. Useful when switching scenes or disposing
 * resources to avoid stale references.
 */
export function clearCache() {
  for (const mat of toonCache.values()) mat.dispose()
  for (const mat of outlineCache.values()) mat.dispose()
  toonCache.clear()
  outlineCache.clear()
}

/**
 * Return the current number of cached toon materials (for debugging).
 *
 * @returns {number}
 */
export function getCacheSize() {
  return toonCache.size + outlineCache.size
}

export default {
  createToonMaterial,
  createOutlineMaterial,
  updateTime,
  clearCache,
  getCacheSize,
}
