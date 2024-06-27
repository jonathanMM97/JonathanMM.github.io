<!-- TuComponente.vue -->
<template>
  <main ref="landingLoading" class="landing"></main>
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ref, onMounted } from 'vue'

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const landingLoading = ref(null);
scene.background = new THREE.Color(0x678380);

let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;

onMounted(() => {
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.3, 1000);
  camera.position.set(1.7, 1.3, -0.6);

  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(window.innerWidth, window.innerHeight);
  landingLoading.value?.appendChild(renderer.domElement);

  loader.load(
    new URL('public/media/room.glb', import.meta.url).href,
    (gltf) => {
      console.log(gltf);
      gltf.scene.children[0].intensity = 10;
      gltf.scene.children[112].intensity = 60;
      scene.add(gltf.scene);
      renderer.render(scene, camera);
    },
    undefined,
    (error) => {
      console.error('Error loading GLTF model', error);
    }
  );

  camera.lookAt(-40, -10, 1);

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
.landing {
  max-width: 1920px;
  height: 100vh;
}
</style>
