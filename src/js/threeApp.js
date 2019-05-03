import * as THREE from 'three';


let scene;
let camera;
let renderer;
let geometry;
let material;
let mesh;

const init = () => {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 10, 10000);
  camera.position.z = 1000;

  geometry = new THREE.BoxGeometry(200, 200, 200);
  material = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    wireframe: true,
  });

  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);
};

const animate = () => {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.04;
  mesh.rotation.y += 0.04;
  renderer.render(scene, camera);
};


export { init, animate };
