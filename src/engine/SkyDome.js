// SkyDome.js — Procedural sky dome with multi-stop gradient, sun glow, and FBM clouds
// Per-region sky colors for atmospheric variation

import * as THREE from 'three';

// Sky parameters per region (from visual-quality-spec.md)
const SKY_PARAMS = {
  fry_valley: {
    zenith: 0x4A90D9, mid: 0x87CEEB, horizon: 0xF0D590,
    ground: 0x8B7355, sun: 0xFFFFCC, sunDir: new THREE.Vector3(-0.3, 0.5, -0.4),
  },
  burger_highlands: {
    zenith: 0x2E5A88, mid: 0x5B8FB9, horizon: 0xC9A96E,
    ground: 0x6B4423, sun: 0xFFE5B4, sunDir: new THREE.Vector3(-0.4, 0.6, -0.3),
  },
  mcflurry_tundra: {
    zenith: 0x1A3A5C, mid: 0x4A7BA8, horizon: 0xC8E0F0,
    ground: 0xAADDFF, sun: 0xF0F8FF, sunDir: new THREE.Vector3(-0.2, 0.7, -0.5),
  },
  happy_meal_forest: {
    zenith: 0x2D5A3D, mid: 0x5FAF7F, horizon: 0xFFE4A0,
    ground: 0x2e5d2e, sun: 0xFFFFCC, sunDir: new THREE.Vector3(0.3, 0.5, -0.4),
  },
  drive_thru_desert: {
    zenith: 0xD4915A, mid: 0xE8B584, horizon: 0xF5D5A0,
    ground: 0xd4a851, sun: 0xFFFFE0, sunDir: new THREE.Vector3(-0.2, 0.8, -0.2),
  },
  mccafe_springs: {
    zenith: 0x6B4E8E, mid: 0xB88ED4, horizon: 0xFFD1DC,
    ground: 0x6b5610, sun: 0xFFF0E0, sunDir: new THREE.Vector3(-0.3, 0.6, -0.3),
  },
  play_place_plains: {
    zenith: 0x3A6EA5, mid: 0x7FB3D5, horizon: 0xFFC857,
    ground: 0x663366, sun: 0xFFFFE0, sunDir: new THREE.Vector3(-0.3, 0.5, -0.4),
  },
  golden_arches_castle: {
    zenith: 0x1A1A2E, mid: 0x3D3D5C, horizon: 0x6B6B8C,
    ground: 0x333333, sun: 0xCCCCAA, sunDir: new THREE.Vector3(-0.2, 0.4, -0.3),
  },
};

// FBM noise function in GLSL
const FBM_GLSL = `
  // Simple hash-based noise
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
      if (i >= octaves) break;
      value += amplitude * noise(p * frequency);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }
`;

const SKY_VERTEX = `
  varying vec3 vWorldPos;
  void main() {
    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPosition.xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAGMENT = `
  uniform vec3 uZenithColor;
  uniform vec3 uMidColor;
  uniform vec3 uHorizonColor;
  uniform vec3 uGroundColor;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform float uTime;

  varying vec3 vWorldPos;

  ${FBM_GLSL}

  void main() {
    vec3 dir = normalize(vWorldPos);
    float h = dir.y; // -1 (ground) to 1 (zenith)

    vec3 color;

    // Multi-stop gradient: zenith -> mid -> horizon -> ground
    if (h > 0.0) {
      float t1 = smoothstep(0.0, 0.3, h);
      float t2 = smoothstep(0.3, 0.7, h);
      color = mix(uHorizonColor, uMidColor, t1);
      color = mix(color, uZenithColor, t2);
    } else {
      color = mix(uHorizonColor, uGroundColor, smoothstep(0.0, -0.3, h));
    }

    // Sun glow
    float sunDot = max(0.0, dot(dir, normalize(uSunDir)));
    float sunGlow = pow(sunDot, 8.0) * 0.5;
    float sunCore = pow(sunDot, 64.0) * 0.8;
    color += uSunColor * (sunGlow + sunCore);

    // Procedural clouds using FBM noise
    vec2 cloudCoord = dir.xz / max(abs(dir.y), 0.1) * 3.0 + uTime * 0.02;
    float cloudNoise = fbm(cloudCoord, 4);
    float cloud = smoothstep(0.4, 0.7, cloudNoise) * smoothstep(0.0, 0.4, h) * smoothstep(0.0, 0.5, dir.y);
    // Tint clouds with sun color
    vec3 cloudColor = mix(vec3(1.0), uSunColor, 0.3);
    color = mix(color, cloudColor, cloud * 0.6);

    gl_FragColor = vec4(color, 1.0);
  }
`;

export class SkyDome {
  constructor() {
    this.radius = 500;

    const geometry = new THREE.SphereGeometry(this.radius, 32, 16);

    this.material = new THREE.ShaderMaterial({
      vertexShader: SKY_VERTEX,
      fragmentShader: SKY_FRAGMENT,
      uniforms: {
        uZenithColor: { value: new THREE.Color(0x4A90D9) },
        uMidColor: { value: new THREE.Color(0x87CEEB) },
        uHorizonColor: { value: new THREE.Color(0xF0D590) },
        uGroundColor: { value: new THREE.Color(0x8B7355) },
        uSunColor: { value: new THREE.Color(0xFFFFCC) },
        uSunDir: { value: new THREE.Vector3(-0.3, 0.5, -0.4) },
        uTime: { value: 0.0 },
      },
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
    });

    this.mesh = new THREE.Mesh(geometry, this.material);
    this.mesh.userData.persistent = true;
    this.mesh.frustumCulled = false;

    // Sun mesh (bright sphere)
    this.sunMesh = new THREE.Mesh(
      new THREE.SphereGeometry(5, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xFFFFEE, fog: false })
    );
    this.sunMesh.userData.persistent = true;
    this.sunMesh.frustumCulled = false;
  }

  /**
   * Set sky colors for a specific region
   */
  setRegion(regionId) {
    const params = SKY_PARAMS[regionId];
    if (!params) return;

    this.material.uniforms.uZenithColor.value.setHex(params.zenith);
    this.material.uniforms.uMidColor.value.setHex(params.mid);
    this.material.uniforms.uHorizonColor.value.setHex(params.horizon);
    this.material.uniforms.uGroundColor.value.setHex(params.ground);
    this.material.uniforms.uSunColor.value.setHex(params.sun);
    this.material.uniforms.uSunDir.value.copy(params.sunDir);

    // Position sun mesh at direction * 300
    this.sunMesh.position.copy(params.sunDir).multiplyScalar(300);
  }

  /**
   * Update time uniform for cloud animation
   */
  update(time) {
    this.material.uniforms.uTime.value = time;
  }

  /**
   * Add sky dome and sun to a scene
   */
  addToScene(scene) {
    scene.add(this.mesh);
    scene.add(this.sunMesh);
  }

  /**
   * Remove from scene
   */
  removeFromScene(scene) {
    scene.remove(this.mesh);
    scene.remove(this.sunMesh);
  }
}

export default SkyDome;
