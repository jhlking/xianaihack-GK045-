import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

// 暖棕台灯夜色调：旧物在夜灯下的回忆感（供各演示场景使用）
export const warmPalette = {
  background: 0x1c130b,
  floorColor: 0x3a281a,
  hemiSky: 0xffe8c8,
  hemiGround: 0x2a1a0c,
  rim: 0xffc98a,
};

// 共享舞台：渲染器 + 泛光 + PBR 灯光 + 拾取 + 每帧回调 + 点击回调
export function initStage(canvas, {
  background = 0x0b0d12,
  floorColor = 0x181c26,
  hemiSky = 0xc8d8ff,
  hemiGround = 0x17120b,
  rim = 0x7ec8ff,
  cameraX = 2.4,
  cameraY = 2.1,
  cameraZ = 6,
  targetY = 0.4,
} = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(background);
  scene.fog = new THREE.Fog(background, 14, 44);

  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.set(cameraX, cameraY, cameraZ);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.target.set(0, targetY, 0);
  controls.minDistance = 2.2;
  controls.maxDistance = 14;
  controls.maxPolarAngle = Math.PI * 0.6;

  const hemi = new THREE.HemisphereLight(hemiSky, hemiGround, 0.75);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xfff0da, 1.5);
  key.position.set(4, 7, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -8;
  key.shadow.camera.right = 8;
  key.shadow.camera.top = 8;
  key.shadow.camera.bottom = -8;
  scene.add(key);
  const rimLight = new THREE.PointLight(rim, 14, 22, 2);
  rimLight.position.set(-4, 2.4, -2);
  scene.add(rimLight);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(9, 64),
    new THREE.MeshStandardMaterial({ color: floorColor, roughness: 0.92, metalness: 0.08 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(999, 999);
  const clock = new THREE.Clock();
  const frameCbs = [];
  let disposed = false;
  let raf = 0;

  const resize = () => {
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.85, 0.45, 0.82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  resize();
  window.addEventListener('resize', resize);

  const loop = () => {
    if (disposed) return;
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    for (const cb of frameCbs) cb(dt, t);
    controls.update();
    composer.render();
    raf = requestAnimationFrame(loop);
  };
  raf = requestAnimationFrame(loop);

  const onPointerMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  };
  canvas.addEventListener('pointermove', onPointerMove);

  const hover = (objects, onEnter, onLeave) => {
    let current = null;
    frameCbs.push(() => {
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(objects, false)[0]?.object || null;
      if (hit !== current) {
        if (current && onLeave) onLeave(current);
        if (hit && onEnter) onEnter(hit);
        current = hit;
      }
    });
  };

  const clickables = [];
  const onClick = (cb) => {
    const onDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
      const hit = raycaster.intersectObjects(clickables, true)[0]?.object;
      if (hit) cb(hit);
    };
    canvas.addEventListener('pointerdown', onDown);
    return () => canvas.removeEventListener('pointerdown', onDown);
  };

  const destroy = () => {
    disposed = true;
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    canvas.removeEventListener('pointermove', onPointerMove);
    document.body.style.cursor = 'default';
    controls.dispose();
    composer.dispose();
    renderer.dispose();
  };

  return {
    renderer, scene, camera, controls, raycaster, pointer, clock, bloom,
    hover, onClick, onFrame: (cb) => frameCbs.push(cb),
    clickables,
    destroy,
  };
}

// 照片贴图加载：RepeatWrapping + 可选平铺次数 + sRGB 色彩空间
// （源自旧版 dist 的 3D 演示贴图方案：textures/ 下的照片质感贴图）
export function loadTex(url, rx, ry) {
  const tex = new THREE.TextureLoader().load(url);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  if (rx !== undefined) tex.repeat.set(rx, ry);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// 场景内的圆形地板（initStage 建的 CircleGeometry），替换为照片贴图材质
export function applyFloorTexture(scene, url, rx = 5, ry = 5) {
  const floor = scene.children.find(
    (o) => o.isMesh && o.geometry && o.geometry.type === 'CircleGeometry'
  );
  if (floor) {
    floor.material = new THREE.MeshStandardMaterial({
      map: loadTex(url, rx, ry),
      roughness: 0.88,
      metalness: 0.04,
    });
  }
  return floor;
}

// 照片背景板：竖在场景后方的大幅面照片（旧版 dist 的场景背景方案）
export function applyBackdrop(scene, url, width, height, position) {
  const backdrop = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshStandardMaterial({
      map: loadTex(url),
      roughness: 0.96,
      metalness: 0,
    })
  );
  backdrop.position.set(...position);
  scene.add(backdrop);
  return backdrop;
}

// PBR 材质工厂
export function std({ color, metalness = 0.1, roughness = 0.5, emissive = 0x000000, emissiveIntensity = 0 }) {
  return new THREE.MeshStandardMaterial({
    color,
    metalness,
    roughness,
    emissive,
    emissiveIntensity,
  });
}

// 自发光材质（配合泛光形成光晕）
export function glow(color, intensity = 1.2, roughness = 0.4) {
  return new THREE.MeshStandardMaterial({
    color: 0x111111,
    emissive: color,
    emissiveIntensity: intensity,
    metalness: 0,
    roughness,
  });
}

// 圆形按钮（可按压：缩放模拟行程）
export function makeButton({ radius = 0.22, height = 0.12, capColor = 0xe34a3f, bodyColor = 0x2a2f3a, ringColor = 0x7ec8ff, y = 0.3 }) {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius * 0.92, height, 32),
    std({ color: bodyColor, metalness: 0.6, roughness: 0.4 })
  );
  body.position.y = y;
  body.castShadow = true;
  group.add(body);
  const cap = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.8, radius * 0.8, height * 0.72, 32),
    std({ color: capColor, metalness: 0.15, roughness: 0.32 })
  );
  cap.position.y = y + height * 0.42;
  cap.castShadow = true;
  group.add(cap);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(radius, height * 0.16, 12, 40),
    glow(ringColor, 0.8)
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = y;
  group.add(ring);
  return { group, cap, ring };
}

// 简易音频：点击声 + 提示音
export function createAudio() {
  let ctx = null;
  const ensure = () => {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  const tone = (freq, dur = 0.12, type = 'sine', vol = 0.12, when = 0) => {
    const c = ensure();
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = type;
    o.frequency.value = freq;
    g.gain.setValueAtTime(0, c.currentTime + when);
    g.gain.linearRampToValueAtTime(vol, c.currentTime + when + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + when + dur);
    o.connect(g).connect(c.destination);
    o.start(c.currentTime + when);
    o.stop(c.currentTime + when + dur + 0.05);
  };
  return {
    click: () => { tone(2200, 0.05, 'square', 0.05); tone(1400, 0.04, 'square', 0.04, 0.02); },
    chime: () => { tone(660, 0.5, 'sine', 0.09); tone(880, 0.6, 'sine', 0.08, 0.14); tone(1100, 0.8, 'sine', 0.07, 0.3); },
    soft: () => { tone(440, 0.4, 'sine', 0.07); },
  };
}

// 语音播报（浏览器内置 TTS，中文）
export function speak(text) {
  try {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'zh-CN';
    u.rate = 0.92;
    u.pitch = 1.05;
    const voices = window.speechSynthesis.getVoices();
    const zh = voices.find((v) => v.lang.startsWith('zh'));
    if (zh) u.voice = zh;
    window.speechSynthesis.speak(u);
  } catch {
    // 忽略 TTS 失败
  }
}
