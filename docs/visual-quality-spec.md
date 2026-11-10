# McChronicles — Visual Quality Specification

> **Target:** Ni no Kuni / Dragon Quest XI cel-shaded visual quality in Three.js r160
> **Current State:** Flat terrain, cone-on-cylinder trees, box houses, gradient sky, no post-processing
> **Deploy:** https://mcchronicles.wembassy.com (port 8130, Cloudflare tunnel)

---

## 1. Post-Processing Pipeline

### EffectComposer Setup
```javascript
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
```

### Pipeline Chain
1. **RenderPass** — Base scene render
2. **UnrealBloomPass** — Glow on bright areas
   - resolution: 512×512 (quarter res for performance)
   - strength: 0.6
   - radius: 0.4
   - threshold: 0.85 (only brightest areas bloom)
3. **OutlinePass** — Cel-shaded character outlines
   - edgeStrength: 4.0
   - edgeGlow: 0.8
   - edgeThickness: 1.0
   - visibleEdgeColor: 0x222222
   - hiddenEdgeColor: 0x111111
4. **FXAAShader** — Anti-aliasing (faster than MSAA on web)
5. **OutputPass** — Final color space conversion

### Integration into Game.js
```javascript
// Replace: renderer.render(scene, camera);
// With:
composer.render();
```

### Performance Budget
- Total post-processing cost: <3ms per frame
- Bloom at quarter resolution: ~0.8ms
- Outline pass: ~1.0ms
- FXAA: ~0.5ms
- Output: ~0.3ms

---

## 2. Sky System

### Procedural Sky Dome
Create a large sphere (radius 500) with a custom shader for multi-stop gradient:

```glsl
// Fragment shader (sky dome)
uniform vec3 uZenithColor;    // Top of sky
uniform vec3 uMidColor;       // Middle
uniform vec3 uHorizonColor;   // Horizon
uniform vec3 uGroundColor;    // Below horizon
uniform vec3 uSunColor;       // Sun glow
uniform vec3 uSunDir;         // Sun direction
uniform float uTime;

varying vec3 vWorldPos;

void main() {
  vec3 dir = normalize(vWorldPos);
  float h = dir.y; // -1 to 1
  
  // Multi-stop gradient
  vec3 color;
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
  color += uSunColor * sunGlow;
  
  // Clouds (procedural noise)
  float cloudNoise = fbm(dir.xz * 3.0 + uTime * 0.02, 4);
  float cloud = smoothstep(0.4, 0.7, cloudNoise) * smoothstep(0.0, 0.4, h);
  color = mix(color, vec3(1.0), cloud * 0.6);
  
  gl_FragColor = vec4(color, 1.0);
}
```

### Procedural Clouds
- Use FBM (Fractal Brownian Motion) noise in the sky shader
- Animate by offsetting noise coordinates with `uTime`
- Cloud density: `smoothstep(0.4, 0.7, fbm(...))`
- Cloud color: white with slight tint from sun color
- Alternative: 6-8 sprite planes with canvas-generated cloud textures, drifting slowly

### Sun
- Visual: Bright sphere (radius 5) at direction `uSunDir`, distance 300
- Material: MeshBasicMaterial, color 0xFFFFEE, no fog
- Bloom interaction: High emissive value triggers UnrealBloomPass glow
- Optional: Lens flare sprite (additive blending) — skip for MVP

### Per-Region Sky Parameters (8 regions)
| Region | Zenith | Mid | Horizon | Sun | Fog |
|--------|--------|-----|---------|-----|-----|
| Fry Valley | 0x4A90D9 | 0x87CEEB | 0xF0D590 | 0xFFFFCC | 0xF0D590 |
| Burger Highlands | 0x2E5A88 | 0x5B8FB9 | 0xC9A96E | 0xFFE5B4 | 0xC9A96E |
| McCafe Springs | 0x6B4E8E | 0xB88ED4 | 0xFFD1DC | 0xFFF0E0 | 0xFFD1DC |
| McFlurry Tundra | 0x1A3A5C | 0x4A7BA8 | 0xC8E0F0 | 0xF0F8FF | 0xC8E0F0 |
| Drive-Thru Desert | 0xD4915A | 0xE8B584 | 0xF5D5A0 | 0xFFFFE0 | 0xF5D5A0 |
| Happy Meal Forest | 0x2D5A3D | 0x5FAF7F | 0xFFE4A0 | 0xFFFFCC | 0xFFE4A0 |
| Play Place Plains | 0x3A6EA5 | 0x7FB3D5 | 0xFFC857 | 0xFFFFE0 | 0xFFC857 |
| Golden Arches Castle | 0x1A1A2E | 0x3D3D5C | 0x6B6B8C | 0xCCCCAA | 0x6B6B8C |

### Day/Night Cycle
**Decision: NO day/night cycle in initial implementation.** Each region has a fixed time-of-day aesthetic. Day/night adds complexity and shader overhead. Add in post-MVP if time allows.

---

## 3. Terrain System

### Vertex Displacement
```javascript
function createTerrainGeometry(width, height, segments, amplitude, seed) {
  const geo = new THREE.PlaneGeometry(width, height, segments, segments);
  geo.rotateX(-Math.PI / 2);
  
  const pos = geo.attributes.position;
  const noise = new SeededRandom(seed);
  
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    // Multi-octave noise for rolling hills
    let h = 0;
    h += simplexNoise(x * 0.02, z * 0.02) * amplitude;
    h += simplexNoise(x * 0.05, z * 0.05) * amplitude * 0.5;
    h += simplexNoise(x * 0.1, z * 0.1) * amplitude * 0.25;
    pos.setY(i, h);
  }
  geo.computeVertexNormals();
  return geo;
}
// amplitude: 2-4 units for gentle rolling terrain
// segments: 64×64 for good detail/performance balance
```

### Multi-Color Vertex Painting
```javascript
// Paint vertices based on height and slope
const colors = [];
const pos = geo.attributes.position;
const nor = geo.attributes.normal;

for (let i = 0; i < pos.count; i++) {
  const y = pos.getY(i);
  const slope = 1.0 - nor.getY(i); // 0 = flat, 1 = vertical
  
  let color;
  if (slope > 0.5) {
    color = rockColor; // Steep = rock
  } else if (y > amplitude * 0.6) {
    color = highlandColor; // High = lighter grass/rock
  } else if (y < -amplitude * 0.3) {
    color = valleyColor; // Low = darker, wetter
  } else {
    color = grassColor; // Mid = grass
  }
  
  // Blend path color near path waypoints
  if (distanceToPath(pos.getX(i), pos.getZ(i)) < 3.0) {
    color = lerp(color, pathColor, 1.0 - distanceToPath / 3.0);
  }
  
  colors.push(color.r, color.g, color.b);
}
geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
```

### Water Features
```javascript
// Reflective water plane
const waterGeo = new THREE.PlaneGeometry(40, 40);
const waterMat = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uColor: { value: new THREE.Color(0x4A90D9) },
    uNormalMap: { value: generateRippleNormalMap() }
  },
  vertexShader: waterVert,
  fragmentShader: waterFrag,
  transparent: true,
  opacity: 0.7
});
// Fragment: fresnel + animated normal ripples + reflection approximation
```

### Path System
- Winding dirt path from region entrance to key landmarks
- Width: 3-4 units (wider than before)
- Color-blended into terrain (not a separate mesh)
- Generated by sampling waypoints and painting vertex colors within distance threshold

### Region-Specific Terrain
| Region | Terrain Style | Primary Color | Secondary | Features |
|--------|--------------|---------------|-----------|----------|
| Fry Valley | Grassland | 0x7CB342 | 0x8D6E63 (dirt) | Gentle hills, golden path |
| Burger Highlands | Mountain | 0x8D6E63 | 0x616161 (rock) | Steep, rocky, snow caps |
| McFlurry Tundra | Snow | 0xE3F2FD | 0xB3E5FC (ice) | Flat, ice patches, slippery |
| Drive-Thru Desert | Desert | 0xF5D5A0 | 0xE8C084 (dune) | Dunes, sand, mirage effect |
| Happy Meal Forest | Forest floor | 0x558B2F | 0x6D4C41 (soil) | Flat, leafy, flower patches |
| Play Place Plains | Meadow | 0x9CCC65 | 0x8D6E63 (path) | Flat, colorful, playground |
| Golden Arches Castle | Stone | 0x757575 | 0x616161 (dark) | Flat stone, magical glow |
| Shadow Realm | Shadow | 0x1A1A2E | 0x16213E | Distorted, dark, glowing edges |

---

## 4. Foliage System

### Tree Types (4)
```javascript
// 1. Round Canopy Tree (Fry Valley, Happy Meal Forest, Play Place Plains)
function createRoundCanopyTree(seed) {
  const tree = new THREE.Group();
  // Trunk: CylinderGeometry(0.3, 0.4, 3, 8)
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.4, 3, 8),
    toonMaterial(0x6D4C41)
  );
  trunk.position.y = 1.5;
  trunk.castShadow = true;
  tree.add(trunk);
  
  // Canopy: 3-5 IcoSpheres of varying sizes
  const canopyGroup = new THREE.Group();
  const rng = new SeededRandom(seed);
  for (let i = 0; i < 4; i++) {
    const r = 1.2 + rng.next() * 0.6;
    const canopy = new THREE.Mesh(
      new THREE.IcosahedronGeometry(r, 1),
      toonMaterial(0x558B2F)
    );
    canopy.position.set(
      (rng.next() - 0.5) * 1.5,
      3 + (rng.next() - 0.5) * 0.5,
      (rng.next() - 0.5) * 1.5
    );
    canopy.castShadow = true;
    canopyGroup.add(canopy);
  }
  tree.add(canopyGroup);
  return tree;
}

// 2. Pine Tree (McFlurry Tundra, Burger Highlands)
// ConeGeometry(1.2, 4, 6) stacked 2-3 high, dark green

// 3. Dead Tree (Drive-Thru Desert)
// CylinderGeometry trunk, no canopy, bare branches (thin cylinders at angles)

// 4. Flowering Tree (Happy Meal Forest, Play Place Plains)
// Like round canopy but with pink/yellow flower particles around canopy
```

### Bushes
- Cluster of 3-5 small IcoSpheres (radius 0.3-0.5)
- Color variation: base green ± 15% hue shift per cluster
- Cast soft shadows

### Grass (InstancedMesh)
```javascript
const grassGeo = new THREE.PlaneGeometry(0.1, 0.6);
grassGeo.translate(0, 0.3, 0); // Pivot at base
const grassMat = toonMaterial(0x558B2F, { transparent: true, side: THREE.DoubleSide });

const COUNT = 5000; // Per region chunk
const grass = new THREE.InstancedMesh(grassGeo, grassMat, COUNT);

// Per-instance: position, rotation, scale, color
const dummy = new THREE.Object3D();
const color = new THREE.Color();
for (let i = 0; i < COUNT; i++) {
  dummy.position.set(
    (Math.random() - 0.5) * 80,
    getTerrainHeight(x, z),
    (Math.random() - 0.5) * 80
  );
  dummy.rotation.y = Math.random() * Math.PI;
  dummy.scale.setScalar(0.8 + Math.random() * 0.6);
  dummy.updateMatrix();
  grass.setMatrixAt(i, dummy.matrix);
  
  // Color variation
  color.setHSL(0.25 + Math.random() * 0.1, 0.5, 0.35 + Math.random() * 0.15);
  grass.setColorAt(i, color);
}
```

### Wind Animation (Vertex Shader)
```glsl
// In grass vertex shader
uniform float uTime;
attribute float aPhase;

void main() {
  vec3 pos = position;
  // Bend top of blade more than bottom
  float bendFactor = pos.y / 0.6; // 0 at base, 1 at tip
  pos.x += sin(uTime * 1.5 + aPhase) * bendFactor * 0.15;
  pos.z += cos(uTime * 1.3 + aPhase) * bendFactor * 0.1;
  ...
}
```

### Flowers
- Colored dots/sprites: small plane (0.15×0.15) with simple flower texture (canvas-generated)
- Colors: yellow, pink, purple, white (region-dependent)
- Scattered randomly on terrain, 200-500 per region

---

## 5. Structure System

### House (Generic Town Building)
```
Geometry:
- Base: BoxGeometry(4, 3, 4) — wall color: 0xF5DEB3 (wheat)
- Roof: ConeGeometry(3, 2, 4) — rotated 45°, roof color: 0x8B4513 (saddle brown)
- Door: BoxGeometry(1, 1.8, 0.1) — position (0, 0.9, 2.05) — color: 0x654321
- Windows: 2× BoxGeometry(0.8, 0.8, 0.1) — position (±1.2, 1.5, 2.05) — color: 0x87CEEB with frame
- Chimney: BoxGeometry(0.5, 1, 0.5) — position (1.2, 3.5, 0) — color: 0x8B4513
- All use MeshToonMaterial with 3-step gradient map
```

### Shop
```
- Base: BoxGeometry(5, 3, 4) — wider than house
- Roof: flat BoxGeometry(5.5, 0.3, 4.5) — or shallow cone
- Sign: BoxGeometry(3, 0.8, 0.1) above door — canvas texture "SHOP"
- Display window: BoxGeometry(2, 1.5, 0.1) — lit color 0xFFE4B5
- Door: centered, with awning (triangular prism)
```

### Inn
```
- Base: BoxGeometry(5, 5, 4) — two stories
- Roof: ConeGeometry(3.5, 2.5, 4)
- Windows: 4 windows (2 per floor), lit at "evening" — warm yellow 0xFFD700
- Sign: "INN" with moon/star icon
- Door: wider, welcoming
```

### Golden Arches (The Iconic M)
```javascript
function createGoldenArches() {
  const group = new THREE.Group();
  const archMat = toonMaterial(0xFFD700, { emissive: 0xFFD700, emissiveIntensity: 0.3 });
  
  // Left arch: TorusGeometry segment (half torus, rotated)
  const leftArch = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 0.3, 8, 16, Math.PI),
    archMat
  );
  leftArch.position.set(-1.5, 3, 0);
  leftArch.rotation.z = 0;
  leftArch.castShadow = true;
  
  // Right arch: mirror
  const rightArch = leftArch.clone();
  rightArch.position.x = 1.5;
  rightArch.scale.x = -1;
  
  // Crossbar: thin box connecting at the right height
  const crossbar = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.3, 0.3),
    archMat
  );
  crossbar.position.set(0, 1.5, 0);
  
  // Base pedestal
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(4, 0.5, 1),
    toonMaterial(0x654321)
  );
  base.position.y = 0.25;
  
  group.add(leftArch, rightArch, crossbar, base);
  return group;
}
```

### Castle Walls
```
- Wall: BoxGeometry(10, 4, 1) — stone color 0x757575
- Battlements: Small BoxGeometry(0.8, 0.5, 1.2) every 2 units along top
- Gate: BoxGeometry(2, 3, 0.2) — dark wood 0x3E2723, centered
- Towers at corners: CylinderGeometry(1.5, 1.5, 6, 12) + ConeGeometry(2, 2, 12) roof
- Arrow slits: thin BoxGeometry(0.2, 1, 0.1) cut into walls
```

### Region-Specific Structures
- **Cactus** (Desert): CylinderGeometry body + 2 arm cylinders, green, spiky
- **Ice Palace** (Tundra): Large IcoSpheres clustered, ice-blue translucent
- **Toy Village** (Happy Meal Forest): Colorful boxes, oversized toy blocks as buildings
- **French Quarter** (Act 4): Ornate buildings with balconies, pastel colors, wrought-iron details
- **Shadow Realm** (Act 5): Inverted/dark versions of familiar structures

---

## 6. Lighting System

### Directional Light (Golden Hour)
```javascript
const sunLight = new THREE.DirectionalLight(0xFFE5B4, 1.5); // Warm golden
sunLight.position.set(30, 40, 20);
sunLight.castShadow = true;
sunLight.shadow.mapSize.set(4096, 4096);
sunLight.shadow.camera.near = 0.5;
sunLight.shadow.camera.far = 100;
sunLight.shadow.camera.left = -50;
sunLight.shadow.camera.right = 50;
sunLight.shadow.camera.top = 50;
sunLight.shadow.camera.bottom = -50;
sunLight.shadow.bias = -0.0005;
sunLight.shadow.normalBias = 0.02;
```

### Hemisphere Light
```javascript
const hemiLight = new THREE.HemisphereLight(skyTopColor, groundColor, 0.6);
```

### Ambient Light
```javascript
const ambient = new THREE.AmbientLight(regionAmbientColor, 0.4);
```

### Fog
```javascript
scene.fog = new THREE.FogExp2(regionFogColor, 0.015);
// Per-region density: 0.01 (clear) to 0.03 (heavy fog)
```

### Per-Region Lighting Summary
| Region | Sun Color | Sun Intensity | Ambient | Hemi Sky | Fog Density |
|--------|-----------|---------------|---------|----------|-------------|
| Fry Valley | 0xFFE5B4 | 1.5 | 0xFFF8DC, 0.4 | 0x87CEEB | 0.015 |
| Burger Highlands | 0xFFD7A0 | 1.3 | 0xC9A96E, 0.3 | 0x5B8FB9 | 0.02 |
| McCafe Springs | 0xFFB3D9 | 1.2 | 0xFFD1DC, 0.4 | 0xB88ED4 | 0.012 |
| McFlurry Tundra | 0xE0F0FF | 1.0 | 0xC8E0F0, 0.5 | 0x4A7BA8 | 0.025 |
| Drive-Thru Desert | 0xFFE0A0 | 1.6 | 0xF5D5A0, 0.3 | 0xE8B584 | 0.02 |
| Happy Meal Forest | 0xFFEFC0 | 1.2 | 0xFFE4A0, 0.4 | 0x5FAF7F | 0.018 |
| Play Place Plains | 0xFFE5B4 | 1.4 | 0xFFC857, 0.4 | 0x7FB3D5 | 0.012 |
| Golden Arches Castle | 0xCCCCAA | 0.8 | 0x6B6B8C, 0.3 | 0x3D3D5C | 0.03 |
| Shadow Realm | 0x222244 | 0.3 | 0x111122, 0.2 | 0x1A1A2E | 0.04 |

---

## 7. Particle Systems

### Implementation
```javascript
function createParticleSystem(count, color, size, behavior, region) {
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  
  // Initialize positions in a volume above the terrain
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = Math.random() * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    velocities[i * 3] = (Math.random() - 0.5) * 0.02;
    velocities[i * 3 + 1] = behavior === 'rise' ? 0.01 + Math.random() * 0.02 : -0.01 - Math.random() * 0.02;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    phases[i] = Math.random() * Math.PI * 2;
  }
  
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  
  // Custom shader for soft circular particles
  const mat = new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uSize: { value: size },
      uTime: { value: 0 }
    },
    vertexShader: `
      uniform float uSize;
      uniform float uTime;
      attribute float aPhase;
      varying float vAlpha;
      void main() {
        vec3 pos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = uSize * (100.0 / -mvPosition.z);
        vAlpha = 0.5 + 0.5 * sin(uTime + aPhase);
      }
    `,
    fragmentShader: `
      uniform vec3 uColor;
      varying float vAlpha;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float dist = length(uv);
        if (dist > 0.5) discard;
        float alpha = smoothstep(0.5, 0.0, dist) * vAlpha;
        gl_FragColor = vec4(uColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  
  return new THREE.Points(geo, mat);
}
```

### Per-Region Particles
| Region | Particle | Count | Color | Behavior | Size |
|--------|----------|-------|-------|----------|------|
| Fry Valley | Pollen | 200 | 0xFFD700 | Rise slowly, drift | 3px |
| McFlurry Tundra | Snowflakes | 400 | 0xFFFFFF | Fall, drift | 4px |
| Happy Meal Forest | Fireflies | 80 | 0xFFEB3B | Rise, pulse | 5px |
| Drive-Thru Desert | Sand | 300 | 0xD4A76A | Horizontal wind | 2px |
| Play Place Plains | Leaves | 100 | 0xFF9800 | Fall, rotate | 5px |
| McCafe Springs | Steam | 60 | 0xFFFFFF | Rise, dissipate | 6px |
| Shadow Realm | Shadow motes | 150 | 0x6A0DAD | Drift, pulse | 3px |

---

## 8. Camera System

### Overworld Camera (JRPG 3/4 View)
```javascript
const OVERWORLD_OFFSET = new THREE.Vector3(0, 6, 10); // Was (0, 8, 12) — too top-down
const CAMERA_SMOOTHING = 0.08; // Lerp factor
const CAMERA_BOB = 0.1; // Subtle vertical bob

function updateOverworldCamera(camera, target, dt) {
  const desiredPos = target.position.clone().add(OVERWORLD_OFFSET);
  camera.position.lerp(desiredPos, CAMERA_SMOOTHING);
  
  // Subtle bob for "alive" feel
  camera.position.y += Math.sin(performance.now() * 0.001) * CAMERA_BOB;
  
  camera.lookAt(target.position.x, target.position.y + 1, target.position.z);
}
```

### Battle Camera
- Fixed position framing all combatants
- Slight zoom on active attacker (1.2x, 0.5s ease)
- Screen shake on big hits (amplitude proportional to damage)

### Title Screen Camera
- Slow orbit around a 3D scene (Fry Village vista)
- Orbit speed: 0.1 rad/s
- Height: 8 units, looking at village center

### Region Transition
- Cinematic: pull camera up and back over 2s, fade to black, fade in new region

---

## 9. Character/Monster Model Quality

### Current Assessment
- **Characters:** Basic shapes, recognizable but lack detail (e.g., Ronald is just red body + yellow suit + white face)
- **Monsters:** Simple primitives, some imaginative (McNugget Goblin) but flat
- **No outlines** — characters blend into environment

### Improvements Per Character
| Character | Current | Improvements |
|-----------|---------|-------------|
| Ronald | Red cylinder + yellow box | Add: red afro hair (IcoSphere), red nose (small sphere), white gloves (flattened spheres), yellow jumpsuit with zipper detail, red shoes (flattened cylinders), smile |
| Grimace | Purple pear shape | Add: teardrop body with gentle wobble, small arms/legs, sad eyes that brighten over game, purple gradient |
| Birdie | Yellow cone + beak | Add: feathered body (overlapping triangles), wings that flap in idle animation, pink scarf, bird feet |
| Big Mac | Blue uniform cylinder | Add: police hat (cylinder + brim), badge (small gold circle), nightstick at belt, broad shoulders, stern expression |
| Mac Tonight | Moon face + suit | Add: crescent moon face (custom geometry), sunglasses, piano key tie, smooth moon-glow material |
| Professor Fry (NEW) | — | Lab coat (white box + collar), wild hair (multiple thin cylinders), goggles (torus + lens), fry-launcher (custom: barrel + fries sticking out) |
| Happy Meal Kid (NEW) | — | Small child proportions, Happy Meal box as hat, colorful outfit (red/yellow), innocent expression |
| Captain Croissant (NEW) | — | Croissant-shaped helmet (curved torus), twin bread blades (flattened cylinders with crust texture), cape (plane with cloth physics-lite), leather armor |

### Outline Implementation
Use OutlinePass (post-processing) for all character and monster meshes:
- Add meshes to OutlinePass.selectedObjects array
- Outline color: 0x222222 (dark, not pure black)
- This creates the cel-shaded outline effect without modifying geometry

### Shadow Setup
- All characters/monsters: `castShadow = true, receiveShadow = true`
- All terrain: `receiveShadow = true`
- All structures: `castShadow = true, receiveShadow = true`
- Trees: `castShadow = true`

---

## 10. Title Screen Design

### 3D Background Scene
- Fry Village vista: small village with 3-4 houses, Golden Arches in distance, trees, flowers
- Camera: slow orbit (0.1 rad/s) at height 8, looking at village center
- Particles: golden pollen drifting (100 particles)
- Lighting: golden hour (warm directional + hemisphere)

### Logo & Menu (CSS Overlay)
```css
.mc-title-logo {
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  background: linear-gradient(135deg, #FFD700, #FFA500, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
  letter-spacing: 0.1em;
}

.mc-menu-button {
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid #FFB800;
  color: #FFB800;
  padding: 12px 32px;
  font-family: 'Press Start 2P', cursive;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.mc-menu-button:hover {
  background: rgba(255, 184, 0, 0.2);
  transform: scale(1.05);
}
```

### Menu Options
- New Game
- Continue (if save exists)
- Load Game
- Settings
- Credits

---

## 11. Performance Budget

| Metric | Target | Budget |
|--------|--------|--------|
| FPS | 60fps | 16.6ms/frame |
| Draw calls | <2000 | ~10ms |
| Triangles | <150K/scene | ~5ms |
| Post-processing | <3ms | Bloom 0.8 + Outline 1.0 + FXAA 0.5 + Output 0.3 |
| Particles | <500 per system | <1ms |
| Shadows | 4096 map | ~1.5ms |
| Total GPU | <14ms | Leaves 2.6ms headroom |
| Bundle JS | <1.5MB minified | — |
| Texture memory | <64MB | Procedural canvas textures |
| Audio loaded | <30MB | Voice per-region, procedural music/SFX |

### Optimization Techniques
1. **InstancedMesh** for grass (5000+), trees (200+), flowers (300+)
2. **Frustum culling** — Three.js does this automatically, verify bounding spheres
3. **LOD** — 3 levels for distant objects (swap at 30/60/90 units)
4. **Quarter-res bloom** — 512×512 instead of full res
5. **Canvas textures** — Generated once at load, ~10KB each in memory
6. **Region streaming** — Only load current region's assets
7. **Geometry merging** — Merge static structures in a town into one mesh

---

## 12. Implementation Priority

### Phase 1: Highest Impact, Lowest Effort (Days 1-2)
1. **Post-processing pipeline** — EffectComposer + Bloom + Outline + FXAA
   - *Impact: Transforms entire visual quality instantly*
   - *Effort: 2-3 hours*
2. **Camera angle** — Change to (0, 6, 10) + smoothing + bob
   - *Impact: Feels like a JRPG immediately*
   - *Effort: 30 minutes*
3. **Lighting overhaul** — Golden hour directional + hemisphere + ambient + 4096 shadows
   - *Impact: Dramatic mood improvement*
   - *Effort: 1 hour*
4. **Sky dome shader** — Multi-stop gradient + sun glow + per-region colors
   - *Impact: Eliminates boring flat sky*
   - *Effort: 2 hours*

### Phase 2: Medium Impact, Medium Effort (Days 3-4)
5. **Terrain vertex displacement** — Rolling hills + vertex painting
   - *Impact: Terrain looks natural*
   - *Effort: 3 hours*
6. **Foliage upgrade** — 4 tree types + InstancedMesh grass + flowers
   - *Impact: World feels alive*
   - *Effort: 4 hours*
7. **Structure upgrade** — Detailed houses, Golden Arches, castle walls
   - *Impact: Locations look like buildings, not boxes*
   - *Effort: 3 hours*
8. **Particle systems** — Per-region particles
   - *Impact: Atmosphere and mood*
   - *Effort: 2 hours*

### Phase 3: Polish (Days 5-6)
9. **Character model improvements** — Per-character detail upgrades
   - *Impact: Characters look like themselves*
   - *Effort: 4 hours*
10. **Title screen** — 3D background + styled menu
    - *Impact: First impression*
    - *Effort: 2 hours*
11. **Water features** — Reflective planes where appropriate
    - *Impact: Visual variety*
    - *Effort: 2 hours*
12. **Region-specific structures** — Cactus, ice palace, toy village, French Quarter
    - *Impact: Each region feels unique*
    - *Effort: 4 hours*

### Dependencies
- Post-processing must be first (everything benefits from it)
- Sky dome before terrain (terrain colors reference sky)
- Lighting before foliage (foliage needs proper shadows)
- Terrain before structures (structures sit on terrain)
- All visual systems before character improvements (characters lit by new lighting)

---

*Document Version: 1.0*
*Created: 2026-11-10*
*Author: Spock (CTO), Wembassy*
*Status: READY FOR IMPLEMENTATION*