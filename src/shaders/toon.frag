// Toon fragment shader — cell shading with rim lighting and outline support
// Ni no Kuni inspired: bright, saturated, stepped lighting bands

uniform vec3 uColor;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform vec3 uAmbientColor;
uniform float uRoughness;
uniform float uMetalness;
uniform float uOutlineWidth;
uniform vec3 uOutlineColor;
uniform float uRimPower;
uniform vec3 uRimColor;
uniform float uTime;
uniform int uSteps;

varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;
varying vec2 vUv;
varying vec4 vColor;

// Stepped lighting function — creates the cell-shaded band look
float toonLight(float NdotL, int steps) {
  float level = floor(NdotL * float(steps)) / float(steps - 1);
  return clamp(level, 0.0, 1.0);
}

// Simple diffuse + stepped specular
vec3 toonShade(vec3 normal, vec3 lightDir, vec3 viewDir) {
  float NdotL = max(dot(normal, lightDir), 0.0);
  float diffuse = toonLight(NdotL, uSteps);

  // Specular — stepped for toon look
  vec3 halfDir = normalize(lightDir + viewDir);
  float NdotH = max(dot(normal, halfDir), 0.0);
  float spec = 0.0;
  if (NdotL > 0.5) {
    spec = pow(NdotH, 32.0);
    spec = step(0.5, spec); // Hard step for toon specular
  }

  // Rim lighting — fresnel-based edge glow
  float NdotV = max(dot(normal, viewDir), 0.0);
  float rim = pow(1.0 - NdotV, uRimPower);
  rim = smoothstep(0.4, 1.0, rim);

  vec3 ambient = uAmbientColor;
  vec3 diffuseColor = uColor * vColor.rgb;
  vec3 lit = diffuseColor * (ambient + uLightColor * diffuse);
  lit += uLightColor * spec * 0.6;
  lit += uRimColor * rim * 0.5;

  return lit;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  vec3 lightDir = normalize(-uLightDir);

  vec3 color = toonShade(normal, lightDir, viewDir);

  // Subtle outline darkening at grazing angles (inverted hull does the thick outline)
  float NdotV = max(dot(normal, viewDir), 0.0);
  float outlineFactor = 1.0 - smoothstep(0.85, 0.95, NdotV);
  color = mix(color, uOutlineColor, outlineFactor * 0.3);

  // Gamma correction
  color = pow(color, vec3(1.0 / 2.2));

  gl_FragColor = vec4(color, 1.0);
}
