import * as THREE from 'three';
import { initStage, glow, std, createAudio, speak, warmPalette, loadTex, applyFloorTexture, applyBackdrop } from '../demo/base.js';
import { createWhitePhoneModel } from './models.js';

// 时光电话白膜：参考复古电话的左侧听筒、中央屏幕、数字键盘和底部功能键布局。
export function buildPhoneScene(canvas, onEvent) {
  const stage = initStage(canvas, { cameraZ: 6.1, targetY: 0.72, ...warmPalette });
  const { scene, clickables, camera, raycaster, controls } = stage;
  const audio = createAudio();
  const model = createWhitePhoneModel();
  model.root.position.y = 0.04;
  scene.add(model.root);

  // —— 照片质感层（源自旧版 dist 贴图方案）：地板 + 老客厅背景板 + 暖黄点光 ——
  applyFloorTexture(scene, 'textures/ward-floor.jpg', 5, 5);
  applyBackdrop(scene, 'textures/phone-bg.jpg', 18, 9, [0.5, 3, -4.2]);
  const warmLamp = new THREE.PointLight(0xffd848, 6, 14, 1.5);
  warmLamp.position.set(0.5, 3.2, -3.2);
  scene.add(warmLamp);

  // 拨号盘贴照片：机身正面那块面板变成老式拨号盘画面
  model.dialFace.material.map = loadTex('textures/phone-dial.jpg');
  model.dialFace.material.needsUpdate = true;
  // 屏幕作为 emissiveMap：接通后屏幕亮起显示画面（色由 onFrame 里随 callOn 渐亮）
  model.screen.material.emissiveMap = loadTex('textures/phone-screen.jpg');
  model.screen.material.emissive = new THREE.Color(0xffffff);
  model.screen.material.emissiveIntensity = 0;

  // 接通时播放的真人声线片段（旧版 dist 的 AI 声音演示音）
  const voiceClip = new Audio('audio/voice.mp3');
  voiceClip.preload = 'auto';

  const ledRail = new THREE.Mesh(new THREE.BoxGeometry(2.72, 0.035, 0.045), glow(0xffcf8a, 0.15));
  ledRail.position.copy(model.ledRail.position).add(new THREE.Vector3(0, 0.04, 0.025));
  model.root.add(ledRail);
  const ledPulse = new THREE.PointLight(0xffcf8a, 0, 4, 2);
  ledPulse.position.set(0.2, 0.9, -0.9);
  scene.add(ledPulse);

  const state = { lifted: false, dial: 0, callOn: false };

  // —— 听筒：初始卧在机身左侧搁垫上，可拿起来拖动一段距离 ——
  const restLocal = model.handset.position.clone();
  const handTarget = restLocal.clone();
  const restWorld = new THREE.Vector3();
  model.handset.getWorldPosition(restWorld);

  // —— 电话线：从机身前侧出线，绕过左前角连到听筒底部，拿起后自然垂下 ——
  const cordMat = std({ color: 0xb3a382, roughness: 0.85, metalness: 0.05 });
  const plugMat = std({ color: 0x9da3a2, roughness: 0.7, metalness: 0.35 });
  const basePlug = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.08, 20), plugMat);
  basePlug.rotation.x = Math.PI / 2;
  basePlug.position.set(0.55, 0.23, 1.2);
  basePlug.castShadow = true;
  scene.add(basePlug);
  const handPlug = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 0.08, 16), plugMat);
  handPlug.position.set(0, -0.15, -0.5);
  model.handset.add(handPlug);

  const cordFrom = new THREE.Vector3(0.55, 0.23, 1.16);
  const cordAttachLocal = new THREE.Vector3(0, -0.1, -0.5);
  const cordMid = new THREE.Vector3(-1.5, 0.5, 1.15);
  const cordTo = new THREE.Vector3();
  const buildCord = (t = 0) => {
    model.handset.localToWorld(cordAttachLocal.clone(), cordTo);
    const mid = cordMid.clone();
    mid.x += Math.sin(t * 1.7) * 0.04;
    mid.y += Math.sin(t * 2.1) * 0.02;
    return new THREE.TubeGeometry(
      new THREE.QuadraticBezierCurve3(cordFrom.clone(), mid, cordTo.clone()),
      26, 0.03, 8, false
    );
  };
  const cord = new THREE.Mesh(buildCord(), cordMat);
  cord.castShadow = true;
  scene.add(cord);

  // —— 生活小物 ②：泛黄的号码纸条 ——
  const paperMat = std({ color: 0xf3e4bc, roughness: 0.95 });
  const inkMat = std({ color: 0x8f7a58, roughness: 0.9 });
  const note = new THREE.Group();
  const noteCard = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.34, 0.016), paperMat);
  noteCard.castShadow = true;
  note.add(noteCard);
  for (let i = 0; i < 3; i += 1) {
    const line = new THREE.Mesh(new THREE.BoxGeometry(0.28 - i * 0.05, 0.018, 0.006), inkMat);
    line.position.set(-0.05 + i * 0.02, 0.09 - i * 0.095, 0.014);
    note.add(line);
  }
  note.position.set(1.35, 0.6, -0.72);
  note.rotation.set(-0.35, -0.28, 0.05);
  scene.add(note);

  // —— 生活小物 ③：地上的老相框 ——
  const frameGroup = new THREE.Group();
  const frameBorder = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.58, 0.03), std({ color: 0xf0ece2, roughness: 0.8 }));
  frameBorder.castShadow = true;
  const photoPane = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.46, 0.034), std({ color: 0xe3c39c, roughness: 0.9 }));
  frameGroup.add(frameBorder, photoPane);
  frameGroup.position.set(-2.45, 0.3, 0.85);
  frameGroup.rotation.set(-0.12, 0.5, 0.06);
  scene.add(frameGroup);

  const handsetMeshes = [];
  model.handset.traverse((obj) => { if (obj.isMesh) handsetMeshes.push(obj); });
  clickables.push(...handsetMeshes, model.dialFace, ...model.numberKeys, ...model.bottomKeys, ...model.functionKeys, ...model.lowerKeys);
  const handsetParts = new Set(handsetMeshes);
  const numberKeys = new Set(model.numberKeys);

  // —— 拿起听筒：按住拖到耳边，松开离底座够远就保持拿着，放回底座附近就挂机 ——
  let dragging = false;
  const dragPlane = new THREE.Plane();
  const dragHit = new THREE.Vector3();
  const grabOffset = new THREE.Vector3();
  const handLocal = new THREE.Vector3();
  const handWorldNow = new THREE.Vector3();
  const toNDC = (e) => {
    const rect = canvas.getBoundingClientRect();
    return new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
  };

  const onPointerDown = (e) => {
    if (e.button !== 0 || dragging) return;
    raycaster.setFromCamera(toNDC(e), camera);
    const hit = raycaster.intersectObjects([model.handset], true)[0];
    if (!hit) return;
    dragging = true;
    controls.enabled = false;
    document.body.style.cursor = 'grabbing';
    if (!state.lifted) {
      state.lifted = true;
      onEvent?.('拿起听筒');
    }
    audio.click();
    const camDir = camera.getWorldDirection(new THREE.Vector3());
    dragPlane.setFromNormalAndCoplanarPoint(camDir, hit.point);
    grabOffset.copy(hit.point).sub(model.handset.getWorldPosition(new THREE.Vector3()));
    if (model.handset.getWorldPosition(new THREE.Vector3()).distanceTo(restWorld) < 0.45) {
      handTarget.copy(restLocal).add(new THREE.Vector3(0.35, 0.9, 0.5));
    }
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    raycaster.setFromCamera(toNDC(e), camera);
    if (!raycaster.ray.intersectPlane(dragPlane, dragHit)) return;
    dragHit.sub(grabOffset);
    const delta = dragHit.clone().sub(restWorld);
    if (delta.length() > 1.5) delta.setLength(1.5);
    dragHit.copy(restWorld).add(delta);
    dragHit.y = Math.min(Math.max(dragHit.y, 0.75), 2.7);
    model.root.worldToLocal(dragHit, handLocal);
    handTarget.copy(handLocal);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    dragging = false;
    controls.enabled = true;
    model.handset.getWorldPosition(handWorldNow);
    const overHandset = raycaster
      .setFromCamera(stage.pointer, camera)
      .intersectObjects([model.handset], true).length > 0;
    document.body.style.cursor = overHandset ? 'pointer' : 'default';
    if (handWorldNow.distanceTo(restWorld) < 0.55) {
      state.lifted = false;
      state.callOn = false;
      handTarget.copy(restLocal);
      audio.click();
      onEvent?.('放下听筒，通话结束');
    }
  };

  canvas.addEventListener('pointerdown', onPointerDown, true);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  stage.onClick((obj) => {
    if (obj === model.handset || handsetParts.has(obj)) return;
    if (numberKeys.has(obj)) {
      if (!state.lifted) {
        audio.click();
        onEvent?.('请先拿起听筒');
      } else {
        state.dial += 1;
        audio.click();
        onEvent?.(`拨号 ${state.dial}`);
      }
      obj.position.y -= 0.035;
      setTimeout(() => { obj.position.y += 0.035; }, 110);
      return;
    }
    if (obj === model.dialFace && state.lifted && !state.callOn) {
      state.callOn = true;
      audio.chime();
      onEvent?.('接通：AI 声音模组已启动');
      voiceClip.currentTime = 0;
      voiceClip.play().catch(() => speak('你好，我记得你的声音。'));
    }
  });

  let litT = 0;
  stage.onFrame((dt, t) => {
    const target = state.callOn ? 1 : 0;
    litT += (target - litT) * 2.2 * dt;
    const pulse = litT * (0.7 + 0.3 * Math.sin(t * 5));
    ledRail.material.emissiveIntensity = 0.15 + pulse * 1.6;
    ledPulse.intensity = pulse * 8;
    // 屏幕随接通渐亮，显示 phone-screen 画面
    model.screen.material.emissiveIntensity = pulse * 1.3;

    // 拖动时跟手，平时缓缓回到目标位；拿起后带一点悬空的轻轻晃动
    if (dragging) {
      model.handset.position.copy(handTarget);
    } else {
      model.handset.position.lerp(handTarget, 1 - Math.exp(-8 * dt));
      if (state.lifted) model.handset.position.y += Math.sin(t * 1.9) * 0.012;
    }
    const tiltZ = state.lifted ? -0.38 : 0;
    const tiltY = state.lifted ? 0.32 : -0.08;
    model.handset.rotation.z += (tiltZ - model.handset.rotation.z) * (1 - Math.exp(-5 * dt));
    model.handset.rotation.y += (tiltY - model.handset.rotation.y) * (1 - Math.exp(-5 * dt));

    cord.geometry.dispose();
    cord.geometry = buildCord(t);
  });

  stage.hover(clickables, () => { document.body.style.cursor = 'pointer'; }, () => { document.body.style.cursor = 'default'; });

  const baseDestroy = stage.destroy.bind(stage);
  stage.destroy = () => {
    canvas.removeEventListener('pointerdown', onPointerDown, true);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
    baseDestroy();
  };

  return stage;
}