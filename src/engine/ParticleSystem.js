// ParticleSystem.js — Per-region atmospheric particles using THREE.Points
// Types: pollen, snow, fireflies, sand, leaves, steam, shadow motes

import * as THREE from 'three';

const PARTICLE_PARAMS = {
  fry_valley: { type: 'pollen', count: 200, color: 0xFFD700, size: 3, behavior: 'rise' },
  burger_highlands: { type: 'pollen', count: 100, color: 0xE8B584, size: 3, behavior: 'rise' },
  mcflurry_tundra: { type: 'snow', count: 400, color: 0xFFFFFF, size: 4, behavior: 'fall' },
  happy_meal_forest: { type: 'fireflies', count: 80, color: 0xFFEB3B, size: 5, behavior: 'rise' },
  drive_thru_desert: { type: 'sand', count: 300, color: 0xD4A76A, size: 2, behavior: 'wind' },
  mccafe_springs: { type: 'steam', count: 60, color: 0xFFFFFF, size: 6, behavior: 'rise' },
  play_place_plains: { type: 'leaves', count: 100, color: 0xFF9800, size: 5, behavior: 'fall' },
  golden_arches_castle: { type: 'shadow_motes', count: 150, color: 0x6A0DAD, size: 3, behavior: 'drift' },
};

const PARTICLE_VERTEX = `
  uniform float uSize;
  uniform float uTime;
  attribute float aPhase;
  attribute vec3 aVelocity;
  varying float vAlpha;

  void main() {
    vec3 pos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = uSize * (100.0 / -mvPosition.z);
    vAlpha = 0.5 + 0.5 * sin(uTime * 2.0 + aPhase);
  }
`;

const PARTICLE_FRAGMENT = `
  uniform vec3 uColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float dist = length(uv);
    if (dist > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export class ParticleSystem {
  constructor() {
    this.currentParticles = null;
    this.currentRegion = null;
  }

  /**
   * Create a particle system for a specific region
   */
  create(regionId, regionSize = 80) {
    const params = PARTICLE_PARAMS[regionId];
    if (!params) return null;

    const count = params.count;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const phases = new Float32Array(count);

    const halfSize = regionSize / 2;

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * regionSize;
      positions[i * 3 + 1] = Math.random() * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * regionSize;

      // Velocity based on behavior type
      switch (params.behavior) {
        case 'rise':
          velocities[i * 3] = (Math.random() - 0.5) * 0.02;
          velocities[i * 3 + 1] = 0.01 + Math.random() * 0.02;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
          break;
        case 'fall':
          velocities[i * 3] = (Math.random() - 0.5) * 0.02;
          velocities[i * 3 + 1] = -0.02 - Math.random() * 0.03;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
          break;
        case 'wind':
          velocities[i * 3] = 0.05 + Math.random() * 0.03;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
          break;
        case 'drift':
          velocities[i * 3] = (Math.random() - 0.5) * 0.015;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.015;
          break;
        default:
          velocities[i * 3] = (Math.random() - 0.5) * 0.02;
          velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
          velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      }

      phases[i] = Math.random() * Math.PI * 2;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    geo.setAttribute('aVelocity', new THREE.BufferAttribute(velocities, 3));

    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(params.color) },
        uSize: { value: params.size },
        uTime: { value: 0.0 },
      },
      vertexShader: PARTICLE_VERTEX,
      fragmentShader: PARTICLE_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: false,
    });

    const points = new THREE.Points(geo, mat);
    points.userData.type = 'regionParticles';
    points.userData.regionId = regionId;
    points.userData.params = params;
    points.userData.regionSize = regionSize;
    points.frustumCulled = false;

    this.currentParticles = points;
    this.currentRegion = regionId;
    return points;
  }

  /**
   * Update particle positions and wrap around region bounds
   */
  update(points, dt) {
    if (!points || !points.geometry) return;

    const positions = points.geometry.attributes.position;
    const velocities = points.geometry.attributes.aVelocity;
    const params = points.userData.params;
    const halfSize = points.userData.regionSize / 2;

    for (let i = 0; i < positions.count; i++) {
      let x = positions.getX(i) + velocities.getX(i) * dt * 60;
      let y = positions.getY(i) + velocities.getY(i) * dt * 60;
      let z = positions.getZ(i) + velocities.getZ(i) * dt * 60;

      // Wrap around region bounds
      if (x > halfSize) x = -halfSize;
      if (x < -halfSize) x = halfSize;
      if (z > halfSize) z = -halfSize;
      if (z < -halfSize) z = halfSize;

      // Wrap vertically based on behavior
      if (y > 15) y = 0;
      if (y < 0) y = 15;

      positions.setXYZ(i, x, y, z);
    }
    positions.needsUpdate = true;
  }

  /**
   * Update time uniform
   */
  updateTime(time) {
    if (this.currentParticles && this.currentParticles.material) {
      this.currentParticles.material.uniforms.uTime.value = time;
    }
  }
}

export default ParticleSystem;
