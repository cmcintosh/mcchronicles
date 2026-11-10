// PostProcessing.js — EffectComposer pipeline with Bloom, Outline, and FXAA
// Ni no Kuni inspired post-processing for cel-shaded JRPG look

import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export class PostProcessing {
  constructor(renderer, scene, camera) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;

    // Create composer
    this.composer = new EffectComposer(renderer);

    // 1. RenderPass — base scene render
    this.renderPass = new RenderPass(scene, camera);
    this.composer.addPass(this.renderPass);

    // 2. UnrealBloomPass — glow on bright areas (quarter res for performance)
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(512, 512),
      0.6,   // strength
      0.4,   // radius
      0.85   // threshold (only brightest areas bloom)
    );
    this.composer.addPass(this.bloomPass);

    // 3. OutlinePass — cel-shaded character outlines
    this.outlinePass = new OutlinePass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      scene,
      camera
    );
    this.outlinePass.edgeStrength = 4.0;
    this.outlinePass.edgeGlow = 0.8;
    this.outlinePass.edgeThickness = 1.0;
    this.outlinePass.visibleEdgeColor.set(0x222222);
    this.outlinePass.hiddenEdgeColor.set(0x111111);
    this.outlinePass.pulsePeriod = 0; // No pulsing
    this.composer.addPass(this.outlinePass);

    // 4. FXAAShader — anti-aliasing
    this.fxaaPass = new ShaderPass(FXAAShader);
    this.fxaaPass.material.uniforms['resolution'].value.set(
      1 / window.innerWidth,
      1 / window.innerHeight
    );
    this.composer.addPass(this.fxaaPass);

    // 5. OutputPass — final color space conversion
    this.outputPass = new OutputPass();
    this.composer.addPass(this.outputPass);

    // Track selected objects for outline
    this.selectedObjects = [];
  }

  /**
   * Update the scene and camera references (for scene transitions)
   */
  setScene(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.renderPass.scene = scene;
    this.renderPass.camera = camera;
    this.outlinePass.renderScene = scene;
    this.outlinePass.renderCamera = camera;
  }

  /**
   * Add objects to receive cel-shaded outlines
   */
  addOutline(objects) {
    if (!Array.isArray(objects)) objects = [objects];
    for (const obj of objects) {
      if (!this.selectedObjects.includes(obj)) {
        this.selectedObjects.push(obj);
      }
    }
    this.outlinePass.selectedObjects = this.selectedObjects;
  }

  /**
   * Clear all outline objects
   */
  clearOutlines() {
    this.selectedObjects = [];
    this.outlinePass.selectedObjects = this.selectedObjects;
  }

  /**
   * Render the post-processing pipeline
   */
  render() {
    this.composer.render();
  }

  /**
   * Update on resize
   */
  setSize(width, height) {
    this.composer.setSize(width, height);
    this.fxaaPass.material.uniforms['resolution'].value.set(
      1 / width,
      1 / height
    );
  }

  /**
   * Dispose resources
   */
  dispose() {
    this.composer.dispose();
  }
}

export default PostProcessing;
