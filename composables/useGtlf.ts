import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
let object: THREE.Object3D
export const useGtlf = async (landingLoading: HTMLElement, windowWidth: number, windowHeight: number) => {
  const loader = new GLTFLoader();
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x572470);

  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;

  camera = new THREE.PerspectiveCamera(45, windowWidth / windowHeight, 0.3, 1000);
  camera.position.set(1.9, 1.05, -0.6);

  renderer = new THREE.WebGLRenderer();
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setSize(windowWidth, windowHeight);
  landingLoading?.appendChild(renderer.domElement);

  
  loader.load(
    new URL('public/media/room.glb', import.meta.url).href,
    (gltf) => {
      gltf.scene.children[0].intensity = 10;
      gltf.scene.children[1].visible = false;
      gltf.scene.children[2].visible = false;
      gltf.scene.children[112].intensity = 60;
      object = gltf.scene
      scene.add(object);
    },
    undefined,
    (error) => {
      console.error('Error loading GLTF model', error);
    }
  );

  camera.lookAt(-70, -5, 1); // function to rotate

  const resizeObject = (width: number) => {
    const aspectRatio = width / windowHeight;
    const scaleFactor = aspectRatio / 2; // Ajusta el factor de escala a tu gusto

    if (object) {
      // Ajustar la escala del objeto en el eje y proporcionalmente al ancho
      object.scale.set(scaleFactor, scaleFactor * 0.75, scaleFactor); // Reduce la altura (Y) más rápido que el ancho
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  const onWindowResize = (width: number, height: number) => {
    if (camera && renderer) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
  };

  resizeObject(windowWidth);

  return {
    camera,
    renderer,
    object
  }
}