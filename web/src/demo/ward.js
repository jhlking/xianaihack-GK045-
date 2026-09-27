import * as THREE from 'three';
import { initStage, glow, std, makeButton, createAudio, speak, warmPalette, loadTex, applyFloorTexture, applyBackdrop } from '../demo/base.js';
import { createWhiteHospitalBedModel } from './models.js';

// 心愿病房白膜：参考可升降病床、床头/床尾板、双侧护栏、床垫和脚轮结构。
export function buildWardScene(canvas, onEvent) {
  const stage = initStage(canvas, { cameraZ: 6.8, targetY: 0.75, ...warmPalette, background: 0x241a10 });
  const { scene, clickables } = stage;
  const audio = createAudio();
  const bedModel = createWhiteHospitalBedModel();
  bedModel.root.position.set(-0.65, 0, 0);
  scene.add(bedModel.root);

  // —— 照片质感层（源自旧版 dist 贴图方案）：地板 + 病房墙壁背景板 + 暖光点光 ——
  applyFloorTexture(scene, 'textures/ward-floor.jpg', 5, 5);
  applyBackdrop(scene, 'textures/ward-wall.jpg', 20, 9, [0, 3.2, -4]);
  const warmLamp = new THREE.PointLight(0xffc538, 7.5, 14, 1.5);
  warmLamp.position.set(0, 3.6, -3);
  scene.add(warmLamp);
  // 毯子贴病房针织毯照片（整体替换材质确保贴图上屏；repeat 降到 2 让毛圈纹理清晰可见）
  bedModel.blanket.material = new THREE.MeshStandardMaterial({
    map: loadTex('textures/ward-blanket.jpg', 2, 1.4),
    color: 0xffffff,
    roughness: 0.94,
    metalness: 0,
  });

  // 按下按钮后播放的真人声音（旧版 dist 的心愿病房演示音）
  const wishClip = new Audio('audio/wish.mp3');
  wishClip.preload = 'auto';

  // 床头暖灯：让病房有家的温度
  const bedLamp = new THREE.PointLight(0xffd9a0, 7, 9, 2);
  bedLamp.position.set(-0.4, 2.7, 1.6);
  scene.add(bedLamp);

  // —— 生活小物 ①：床头小柜 ——
  const warmWhiteMat = std({ color: 0xf0ece2, roughness: 0.78 });
  const table = new THREE.Group();
  const tableTop = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.05, 0.55), warmWhiteMat);
  tableTop.position.y = 0.6;
  tableTop.castShadow = true;
  table.add(tableTop);
  for (const [tx, tz] of [[-0.36, -0.21], [0.36, -0.21], [-0.36, 0.21], [0.36, 0.21]]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.58, 10), std({ color: 0xd8d2c6, roughness: 0.85 }));
    leg.position.set(tx, 0.29, tz);
    leg.castShadow = true;
    table.add(leg);
  }
  table.position.set(-3.0, 0, 0.8);
  scene.add(table);

  // —— 生活小物 ②：柜上的花瓶与三枝小花 ——
  const flowers = new THREE.Group();
  const vase = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.05, 0.22, 18), std({ color: 0xcfe0d4, roughness: 0.4 }));
  vase.position.y = 0.11;
  vase.castShadow = true;
  flowers.add(vase);
  const stemMat = std({ color: 0x9fbf9a, roughness: 0.9 });
  const petalColors = [0xe8b4bc, 0xf3e2c8, 0xf0d8a8];
  for (let i = 0; i < 3; i += 1) {
    const ang = -0.5 + i * 0.5;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.34, 6), stemMat);
    stem.position.set(Math.sin(ang) * 0.05, 0.37, Math.cos(ang) * 0.025);
    stem.rotation.z = -ang * 0.55;
    const bloom = new THREE.Mesh(new THREE.SphereGeometry(0.062, 12, 12), std({ color: petalColors[i], roughness: 0.85 }));
    bloom.position.set(stem.position.x - ang * 0.1, 0.54, stem.position.z);
    bloom.castShadow = true;
    flowers.add(stem, bloom);
  }
  flowers.position.set(-3.0, 0.63, 0.8);
  scene.add(flowers);

  // —— 生活小物 ③：柜角的水杯 ——
  const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.13, 16), std({ color: 0xf5f2ea, roughness: 0.25, metalness: 0.1 }));
  cup.position.set(-2.78, 0.7, 0.94);
  cup.castShadow = true;
  scene.add(cup);

  // —— 生活小物 ④：搭在床尾的针织披毯 ——
  const throwBlanket = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.09, 1.62), std({ color: 0xe3b7bd, roughness: 0.95 }));
  throwBlanket.position.set(0.93, 1.63, 0);
  throwBlanket.rotation.z = 0.12;
  throwBlanket.castShadow = true;
  scene.add(throwBlanket);
  const blanketFold = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 1.48), std({ color: 0xdca7ad, roughness: 0.95 }));
  blanketFold.position.set(0.9, 1.7, 0.02);
  blanketFold.rotation.z = -0.06;
  blanketFold.castShadow = true;
  scene.add(blanketFold);

  // —— 生活小物 ⑤：半开的窗帘（呼应故事里的那半扇窗）——
  const rodMat = std({ color: 0xd8d2c6, roughness: 0.7 });
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.6, 10), rodMat);
  rod.rotation.z = Math.PI / 2;
  rod.position.set(-2.0, 2.78, -1.7);
  scene.add(rod);
  const curtainL = new THREE.Mesh(new THREE.BoxGeometry(0.72, 2.4, 0.07), std({ color: 0xe6d8c0, roughness: 0.96 }));
  curtainL.position.set(-2.83, 1.56, -1.7);
  curtainL.castShadow = true;
  scene.add(curtainL);
  const curtainR = new THREE.Mesh(new THREE.BoxGeometry(0.45, 2.4, 0.07), std({ color: 0xd7d2bf, roughness: 0.96 }));
  curtainR.position.set(-1.16, 1.56, -1.7);
  curtainR.castShadow = true;
  scene.add(curtainR);
  // 帘布竖向褶皱：让它一眼读作布料
  const foldMatA = std({ color: 0xece0c8, roughness: 0.96 });
  const foldMatB = std({ color: 0xd8c6a6, roughness: 0.96 });
  const addFold = (x, mat) => {
    const fold = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.42, 10), mat);
    fold.position.set(x, 1.56, -1.66);
    fold.castShadow = true;
    scene.add(fold);
  };
  [-0.24, -0.12, 0, 0.12, 0.24].forEach((dx, i) => addFold(-2.83 + dx, i % 2 ? foldMatB : foldMatA));
  [-0.15, 0, 0.15].forEach((dx, i) => addFold(-1.16 + dx, i % 2 ? foldMatB : foldMatA));
  // 帘后透出的傍晚暖光
  const windowGlow = new THREE.PointLight(0xffe0b0, 4, 7, 2);
  windowGlow.position.set(-2.0, 1.7, -1.1);
  scene.add(windowGlow);

  const display = new THREE.Group();
  const displayMat = new THREE.MeshStandardMaterial({ color: 0xe7e8e3, roughness: 0.76 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0xaeb6b5, roughness: 0.9 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 1.9, 16), displayMat);
  pole.position.set(2.18, 1.0, 0);
  display.add(pole);
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.1, 24), displayMat);
  foot.position.set(2.18, 0.05, 0);
  display.add(foot);
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(1.45, 1.04, 0.12), displayMat);
  bezel.position.set(2.18, 2.02, 0);
  display.add(bezel);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(1.3, 0.86), darkMat);
  screen.position.set(2.18, 2.02, 0.07);
  display.add(screen);
  // 屏幕内容：接通后 emissiveMap 显示 ward-screen 照片（亮起后是屏幕里的亲人画面）
  screen.material.emissiveMap = loadTex('textures/ward-screen.jpg');
  screen.material.emissive = new THREE.Color(0xffffff);
  screen.material.emissiveIntensity = 0;
  const screenLight = new THREE.PointLight(0xffdfad, 0, 6, 2);
  screenLight.position.set(2.18, 2.02, 0.7);
  display.add(screenLight);

  const figure = new THREE.Group();
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 24, 24), glow(0xffe6c4, 1.4));
  head.position.y = 0.72;
  figure.add(head);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.6, 8, 24), glow(0xffe6c4, 1.2));
  body.position.y = 0.28;
  figure.add(body);
  figure.position.set(2.18, 1.35, 0.15);
  figure.scale.setScalar(0.55);
  figure.visible = false;
  display.add(figure);

  const modules = [];
  const colors = [0xffcf8a, 0xa8e6c3, 0xffe6c4];
  for (let i = 0; i < 3; i += 1) {
    const box = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.24), displayMat);
    box.position.set(1.78 + i * 0.35, 0.5, 0);
    display.add(box);
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), glow(colors[i], 1.3));
    dot.position.set(box.position.x, box.position.y, 0.14);
    display.add(dot);
    modules.push({ dot, color: colors[i] });
  }
  scene.add(display);

  const btn = makeButton({ radius: 0.2, height: 0.12, capColor: 0xd94f43, bodyColor: 0x9c4a40, ringColor: 0xffc98a, y: 0.32 });
  btn.group.position.set(2.18, 0.82, 0.62);
  scene.add(btn.group);
  clickables.push(btn.cap);

  const state = { lit: false, litT: 0 };
  let clickLock = false;
  stage.onClick((obj) => {
    if (obj !== btn.cap || clickLock) return;
    clickLock = true;
    setTimeout(() => { clickLock = false; }, 2200);
    btn.cap.position.y -= 0.04;
    setTimeout(() => { btn.cap.position.y += 0.04; }, 120);
    audio.chime();
    state.lit = true;
    onEvent?.('按下按钮：AI 视频分身启动，读取微信记忆…');
    wishClip.currentTime = 0;
    wishClip.play().catch(() => speak('我一直在你的记忆里。我爱你。'));
  });

  let modulePulse = 0;
  stage.onFrame((dt, t) => {
    state.litT += ((state.lit ? 1 : 0) - state.litT) * 2.4 * dt;
    const k = state.litT;
    // emissive 色用白：让 ward-screen 照片以原色亮起（此前是纯色发光）
    screen.material.emissive = new THREE.Color(0xffffff);
    screen.material.emissiveIntensity = k * 1.35;
    screen.material.color.set(0x25221d);
    screenLight.intensity = k * 9;
    figure.visible = k > 0.15;
    figure.scale.setScalar(0.55 * Math.min(1, k * 1.25));
    figure.position.z = 0.15 + Math.sin(t * 1.3) * 0.01 * k;
    btn.ring.material.emissiveIntensity = 0.45 + Math.sin(t * 2.2) * 0.2 + k * 1.2;
    modulePulse = (modulePulse + dt * 2.2) % 1;
    modules.forEach((module, index) => {
      module.dot.material.emissive = new THREE.Color(module.color);
      module.dot.material.emissiveIntensity = 0.35 + ((modulePulse * 1.6 + index * 0.33) % 1) * 1.3;
    });
  });

  stage.hover(clickables, () => { document.body.style.cursor = 'pointer'; }, () => { document.body.style.cursor = 'default'; });
  return stage;
}
