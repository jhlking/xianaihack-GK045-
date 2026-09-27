import * as THREE from 'three';
import { initStage, glow, std, createAudio, speak, warmPalette, loadTex, applyFloorTexture, applyBackdrop } from '../demo/base.js';
import { createWhiteBrushModel } from './models.js';

// 声纹梳白膜：参考椭圆气垫梳、宽手柄和密集梳齿，录音模组作为梳背传感器。
export function buildCombScene(canvas, onEvent) {
  const stage = initStage(canvas, { cameraX: 1.9, cameraY: 1.6, cameraZ: 2.3, targetY: 0.6, ...warmPalette });
  const { scene, clickables } = stage;
  const audio = createAudio();
  const model = createWhiteBrushModel();
  model.root.rotation.z = -0.12;
  model.root.position.y = 0.08;
  scene.add(model.root);
  clickables.push(model.root);

  // —— 照片质感层（源自旧版 dist 贴图方案）：地板 + 梳妆台背景板 + 暖光点光 ——
  applyFloorTexture(scene, 'textures/ward-floor.jpg', 5, 5);
  applyBackdrop(scene, 'textures/comb-bg.jpg', 14, 8, [0, 2.8, -3.8]);
  const warmLamp = new THREE.PointLight(0xffcc50, 5, 10, 1.6);
  warmLamp.position.set(0, 3, -2.8);
  scene.add(warmLamp);
  // 木纹：手柄与梳头贴上 comb-wood 木纹照片，白膜变回木质梳
  const woodTex = loadTex('textures/comb-wood.jpg', 2, 4);
  model.handle.material = new THREE.MeshStandardMaterial({
    map: woodTex, color: 0xffffff, roughness: 0.6, metalness: 0.05,
  });
  model.head.material = new THREE.MeshStandardMaterial({
    map: woodTex, color: 0xffffff, roughness: 0.58, metalness: 0.05,
  });

  const led = new THREE.Mesh(new THREE.SphereGeometry(0.06, 16, 16), glow(0xa8e6c3, 0.3));
  led.position.set(0, 1.14, 0);
  model.root.add(led);
  const ledLight = new THREE.PointLight(0xa8e6c3, 0, 2, 2);
  ledLight.position.set(0, 1.18, 0);
  scene.add(ledLight);

  const rings = [];
  for (let i = 0; i < 4; i += 1) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28 + i * 0.14, 0.012, 8, 48), glow(0xa8e6c3, 1.1));
    ring.position.set(0, 1.3, 0);
    ring.scale.setScalar(0.01);
    scene.add(ring);
    rings.push(ring);
  }

  // —— 生活小物 ①②：两枚发圈（蜜粉 / 暖杏）躺在木梳旁 ——
  const tieA = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.034, 12, 28), std({ color: 0xd9a0a2, roughness: 0.9 }));
  tieA.rotation.set(Math.PI / 2 + 0.12, 0.2, 0);
  tieA.position.set(0.72, 0.05, 0.55);
  tieA.castShadow = true;
  scene.add(tieA);
  const tieB = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 12, 26), std({ color: 0xe0b489, roughness: 0.9 }));
  tieB.rotation.set(Math.PI / 2 - 0.1, -0.15, 0.4);
  tieB.position.set(-0.78, 0.045, 0.62);
  tieB.castShadow = true;
  scene.add(tieB);

  // —— 生活小物 ③：仰面斜放的小圆镜 ——
  const mirror = new THREE.Group();
  const rimMat = std({ color: 0xf0ece2, roughness: 0.75 });
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.022, 12, 36), rimMat);
  rim.castShadow = true;
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.148, 32), std({ color: 0xdfe4e8, roughness: 0.15, metalness: 0.85 }));
  face.position.z = 0.008;
  const mirrorHandle = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.024, 0.22, 12), rimMat);
  mirrorHandle.position.set(0, -0.27, 0);
  mirrorHandle.castShadow = true;
  mirror.add(rim, face, mirrorHandle);
  mirror.rotation.set(-1.28, 0.35, 0.1);
  mirror.position.set(0.92, 0.15, -0.42);
  scene.add(mirror);

  const state = { recording: false, recordT: 0 };
  const basePosition = model.root.position.clone();
  const startRecording = () => {
    state.recording = true;
    state.recordT = 0;
    audio.chime();
    onEvent?.('开始录音：梳头时请轻声说话…');
  };
  const stopRecording = () => {
    state.recording = false;
    audio.soft();
    onEvent?.('录音完成：声纹分析中 → 已存入回忆库');
    speak('声音已收录，这是给未来的温柔回放。');
  };

  stage.onClick(() => {
    if (state.recording) stopRecording();
    else startRecording();
  });

  stage.onFrame((dt, t) => {
    if (state.recording) {
      state.recordT += dt;
      model.root.position.x = Math.sin(state.recordT * 2.6) * 0.52;
      model.root.rotation.z = -0.12 + Math.sin(state.recordT * 2.6) * 0.06;
      const pulse = 0.7 + Math.sin(t * 7) * 0.3;
      led.material.emissiveIntensity = 1 + pulse;
      ledLight.intensity = pulse * 4;
      rings.forEach((ring, index) => {
        const progress = (state.recordT * 1.4 + index * 0.25) % 1;
        ring.scale.setScalar(0.01 + progress * 1.5);
        ring.material.opacity = 1 - progress;
        ring.material.transparent = true;
      });
    } else {
      model.root.position.x += (basePosition.x - model.root.position.x) * 5 * dt;
      model.root.rotation.z += (-0.12 - model.root.rotation.z) * 5 * dt;
      led.material.emissiveIntensity = 0.2;
      ledLight.intensity = 0;
      rings.forEach((ring) => ring.scale.setScalar(0.01));
    }
    model.root.position.y = basePosition.y + Math.sin(t * 1.4) * 0.025;
  });

  stage.hover(clickables, () => { document.body.style.cursor = 'pointer'; }, () => { document.body.style.cursor = 'default'; });
  return stage;
}
