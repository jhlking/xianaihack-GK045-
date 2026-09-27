import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const WHITE = 0xe9e9e4;
const WHITE_HIGHLIGHT = 0xf7f7f2;
const WHITE_SEAM = 0xbfc3c1;
const WHITE_DARK = 0x9da3a2;

function clay(color = WHITE, roughness = 0.86) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness: 0,
  });
}

function roundedBox(width, height, depth, radius = 0.08, material = clay()) {
  const mesh = new THREE.Mesh(
    new RoundedBoxGeometry(width, height, depth, 3, radius),
    material
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function cylinder(radius, height, material = clay(), segments = 24) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, segments), material);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function addPart(group, mesh, position, rotation) {
  mesh.position.set(...position);
  if (rotation) mesh.rotation.set(...rotation);
  group.add(mesh);
  return mesh;
}

function makeSlot(width, height, depth = 0.035) {
  return roundedBox(width, height, depth, Math.min(width, height) * 0.2, clay(WHITE_SEAM, 0.96));
}

export function createWhitePhoneModel() {
  const root = new THREE.Group();
  root.name = 'WhiteFilm_TimePhone';
  const bodyMat = clay(WHITE, 0.78);
  const trimMat = clay(WHITE_HIGHLIGHT, 0.72);
  const seamMat = clay(WHITE_SEAM, 0.94);
  const darkMat = clay(WHITE_DARK, 0.9);

  const base = roundedBox(3.35, 0.42, 2.32, 0.18, bodyMat);
  base.position.y = 0.23;
  root.add(base);

  const topPlate = roundedBox(3.04, 0.1, 1.96, 0.1, trimMat);
  topPlate.position.set(0.18, 0.49, 0.03);
  root.add(topPlate);

  // 左侧放听筒的浅搁垫：听筒拿起后机身保持清爽，不会留下“话筒”轮廓
  const restPad = roundedBox(0.46, 0.05, 1.55, 0.025, seamMat);
  restPad.position.set(-1.15, 0.565, 0.02);
  root.add(restPad);

  const screenFrame = roundedBox(1.24, 0.08, 1.2, 0.08, seamMat);
  screenFrame.position.set(-0.38, 0.57, -0.38);
  root.add(screenFrame);
  const screen = roundedBox(1.08, 0.045, 1.02, 0.05, darkMat);
  screen.position.set(-0.38, 0.64, -0.38);
  root.add(screen);

  const numberKeys = [];
  const keyXs = [0.42, 0.86, 1.3];
  const keyZs = [-0.7, -0.25, 0.2, 0.65];
  for (let row = 0; row < keyZs.length; row += 1) {
    for (let col = 0; col < keyXs.length; col += 1) {
      const key = roundedBox(0.34, 0.12, 0.28, 0.05, trimMat);
      key.position.set(keyXs[col], 0.61, keyZs[row]);
      root.add(key);
      numberKeys.push(key);
    }
  }
  const bottomKeys = [];
  for (const x of [0.42, 0.86, 1.3]) {
    const key = roundedBox(0.34, 0.12, 0.28, 0.05, trimMat);
    key.position.set(x, 0.61, 1.02);
    root.add(key);
    bottomKeys.push(key);
  }

  const functionKeys = [];
  for (let row = 0; row < 2; row += 1) {
    for (let col = 0; col < 3; col += 1) {
      const key = roundedBox(0.25, 0.1, 0.22, 0.04, trimMat);
      key.position.set(-0.42 + col * 0.3, 0.61, 0.88 + row * 0.32);
      root.add(key);
      functionKeys.push(key);
    }
  }

  const lowerKeys = [];
  for (let i = 0; i < 6; i += 1) {
    const key = roundedBox(0.28, 0.1, 0.22, 0.04, trimMat);
    key.position.set(-0.75 + i * 0.3, 0.52, 1.08);
    root.add(key);
    lowerKeys.push(key);
  }

  const dialFace = roundedBox(0.9, 0.045, 0.9, 0.08, clay(WHITE_HIGHLIGHT, 0.9));
  dialFace.position.set(-0.38, 0.69, -0.38);
  root.add(dialFace);

  // —— 听筒：香蕉形手柄 + 听筒端 + 送话端，卧在机身左侧搁垫上 ——
  const handset = new THREE.Group();
  handset.name = 'phone-handset';
  const handleCurve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, -0.02, -0.6),
    new THREE.Vector3(0, -0.12, 0),
    new THREE.Vector3(0, -0.02, 0.6)
  );
  const handle = new THREE.Mesh(new THREE.TubeGeometry(handleCurve, 24, 0.085, 12, false), bodyMat);
  handle.castShadow = true;
  handle.receiveShadow = true;
  handset.add(handle);

  const earCup = new THREE.Mesh(new THREE.CylinderGeometry(0.185, 0.16, 0.15, 28), bodyMat);
  earCup.position.set(0, -0.02, 0.7);
  earCup.rotation.x = Math.PI / 2 - 0.45;
  earCup.castShadow = true;
  earCup.receiveShadow = true;
  handset.add(earCup);
  const earPlate = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.012, 24), seamMat);
  earPlate.position.set(0, 0, 0.081);
  earCup.add(earPlate);
  for (let i = 0; i < 6; i += 1) {
    const a = (i / 6) * Math.PI * 2;
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.02, 8), darkMat);
    hole.position.set(Math.cos(a) * 0.04, Math.sin(a) * 0.04, 0.012);
    earPlate.add(hole);
  }
  const earCenter = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.02, 8), darkMat);
  earCenter.position.set(0, 0, 0.012);
  earPlate.add(earCenter);

  const micCup = new THREE.Mesh(new THREE.CylinderGeometry(0.145, 0.125, 0.13, 24), bodyMat);
  micCup.position.set(0, -0.02, -0.7);
  micCup.rotation.x = -(Math.PI / 2 - 0.45);
  micCup.castShadow = true;
  micCup.receiveShadow = true;
  handset.add(micCup);
  const micPlate = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.012, 20), seamMat);
  micPlate.position.set(0, 0, -0.07);
  micCup.add(micPlate);
  for (let rx = -1; rx <= 1; rx += 1) {
    for (let ry = -1; ry <= 1; ry += 1) {
      const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.009, 0.009, 0.018, 8), darkMat);
      hole.position.set(rx * 0.028, ry * 0.028, -0.012);
      micPlate.add(hole);
    }
  }
  handset.position.set(-1.15, 0.8, 0.02);
  handset.rotation.y = -0.08;
  root.add(handset);

  const ledRail = roundedBox(2.9, 0.035, 0.05, 0.02, seamMat);
  ledRail.position.set(0.18, 0.51, -1.01);
  root.add(ledRail);

  return {
    root,
    handset,
    dialFace,
    screen,
    numberKeys,
    bottomKeys,
    functionKeys,
    lowerKeys,
    ledRail,
  };
}

export function createWhiteHospitalBedModel() {
  const root = new THREE.Group();
  root.name = 'WhiteFilm_HospitalBed';
  const frameMat = clay(WHITE, 0.76);
  const panelMat = clay(WHITE_HIGHLIGHT, 0.72);
  const seamMat = clay(WHITE_SEAM, 0.92);

  const frame = roundedBox(3.2, 0.2, 1.72, 0.08, frameMat);
  frame.position.y = 0.66;
  root.add(frame);
  const mattress = roundedBox(2.98, 0.38, 1.48, 0.14, panelMat);
  mattress.position.set(-0.02, 0.92, 0);
  root.add(mattress);
  const blanket = roundedBox(1.76, 0.08, 1.44, 0.06, clay(WHITE_HIGHLIGHT, 0.94));
  blanket.name = 'blanket';
  blanket.position.set(0.56, 1.13, 0);
  root.add(blanket);
  const pillow = roundedBox(0.88, 0.22, 1.3, 0.12, panelMat);
  pillow.position.set(-1.0, 1.18, 0);
  root.add(pillow);

  const headboard = roundedBox(0.18, 1.38, 1.78, 0.14, frameMat);
  headboard.position.set(-1.62, 1.15, 0);
  root.add(headboard);
  const footboard = roundedBox(0.18, 1.12, 1.78, 0.14, frameMat);
  footboard.position.set(1.58, 1.02, 0);
  root.add(footboard);

  const railGroups = [];
  for (const side of [-1, 1]) {
    const rail = new THREE.Group();
    const top = roundedBox(0.12, 0.12, 1.55, 0.06, panelMat);
    top.rotation.y = Math.PI / 2;
    top.position.set(0, 0.2, 0);
    rail.add(top);
    const postA = cylinder(0.055, 0.42, seamMat, 16);
    postA.position.set(-0.58, -0.03, 0);
    rail.add(postA);
    const postB = cylinder(0.055, 0.42, seamMat, 16);
    postB.position.set(0.58, -0.03, 0);
    rail.add(postB);
    rail.position.set(0, 1.43, side * 0.88);
    rail.rotation.x = side * 0.015;
    root.add(rail);
    railGroups.push(rail);
  }

  const underFrame = roundedBox(2.8, 0.12, 1.2, 0.05, seamMat);
  underFrame.position.set(0, 0.42, 0);
  root.add(underFrame);
  const wheels = [];
  for (const x of [-1.3, 1.3]) {
    for (const z of [-0.62, 0.62]) {
      const wheel = cylinder(0.12, 0.08, seamMat, 20);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.16, z);
      root.add(wheel);
      wheels.push(wheel);
    }
  }

  return { root, mattress, pillow, blanket, headboard, footboard, railGroups, wheels };
}

export function createWhiteBrushModel() {
  const root = new THREE.Group();
  root.name = 'WhiteFilm_VoiceBrush';
  const shellMat = clay(WHITE_HIGHLIGHT, 0.72);
  const edgeMat = clay(WHITE, 0.82);
  const bristleMat = clay(WHITE_DARK, 0.9);

  const head = roundedBox(0.98, 0.18, 1.42, 0.35, shellMat);
  head.position.y = 0.83;
  root.add(head);
  const cushion = roundedBox(0.8, 0.06, 1.2, 0.24, edgeMat);
  cushion.position.set(0, 0.95, 0);
  root.add(cushion);
  const neck = roundedBox(0.34, 0.4, 0.28, 0.1, shellMat);
  neck.position.set(0, 0.55, 0);
  root.add(neck);
  const handle = roundedBox(0.42, 0.92, 0.34, 0.18, shellMat);
  handle.position.set(0, -0.08, 0);
  root.add(handle);

  const bristles = [];
  for (let x = -0.36; x <= 0.36; x += 0.12) {
    for (let z = -0.52; z <= 0.52; z += 0.12) {
      const pin = cylinder(0.018, 0.18, bristleMat, 8);
      pin.position.set(x, 1.09, z);
      root.add(pin);
      bristles.push(pin);
    }
  }
  const sensor = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.025, 12, 32), clay(WHITE_SEAM, 0.9));
  sensor.rotation.x = Math.PI / 2;
  sensor.position.set(0, 1.065, 0);
  root.add(sensor);

  return { root, head, handle, bristles, sensor };
}
