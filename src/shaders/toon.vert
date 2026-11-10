// Toon vertex shader — Ni no Kuni inspired cell shading
// Computes lighting in view space for the toon fragment shader

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec2 vUv;
varying vec4 vColor;

attribute vec3 instanceColor;

void main() {
  vUv = uv;
  vColor = vec4(1.0);

  #ifdef USE_INSTANCING
    vColor = vec4(instanceColor, 1.0);
  #endif

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  vNormal = normalize(normalMatrix * normal);
  vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

  gl_Position = projectionMatrix * mvPosition;
}
