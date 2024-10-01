<template>
  <main id="main">
    <div ref="landingLoading" class="landing" />
  </main>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ref, onMounted } from 'vue';

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const landingLoading = ref<HTMLElement | null>(null);
scene.background = new THREE.Color(0x572470);

let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

onMounted(() => {
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.3, 1000);
  camera.position.set(1.9, 1.05, -0.6);

  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  landingLoading.value?.appendChild(renderer.domElement);

  loader.load(
    new URL('public/media/room.glb', import.meta.url).href,
    (gltf) => {
      gltf.scene.children[0].intensity = 10;
      gltf.scene.children[1].visible = false;
      gltf.scene.children[2].visible = false;
      gltf.scene.children[112].intensity = 60;
      scene.add(gltf.scene);
      renderer.render(scene, camera);
    },
    undefined,
    (error) => {
      console.error('Error loading GLTF model', error);
    }
  );

  camera.lookAt(-70, -5, 1); // function to rotate

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', onWindowResize);
});

const onWindowResize = () => {
  if (camera && renderer) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
};
</script>

<style scoped>
#main {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #262626;
  color: white;
}
.landing {
  width: 100%;
  height: 100%;
  mask-image: linear-gradient(to bottom, black 80%, transparent);
}
</style>
