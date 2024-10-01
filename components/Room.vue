<script setup lang="ts">
import * as THREE from 'three'
import { useWindowSize } from '@vueuse/core'
const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})

const landingLoading = ref<HTMLElement | null>(null)
const { width } = useWindowSize()

let r: Function | null = null
let cam: THREE.PerspectiveCamera
let rend: THREE.WebGLRenderer
let obj: THREE.Object3D

onMounted(async () => {
  if (landingLoading) {
    const { camera, renderer, object } = await useGtlf(
      landingLoading.value as HTMLElement,
      props.width - 200,
      props.height
    )
    cam = camera
    rend = renderer
    obj = object
  }
})

watch(props, () => {
  const dividendo = ref(2);
  if (props.width <= 828) {
    dividendo.value = 4
  }
  if (cam && rend) {
    console.log(props.width - 200, props.height)
    rend.setSize((props.width - 200), props.height)
    cam.aspect = (props.width / dividendo.value) / (props.height / dividendo.value)
    cam.updateProjectionMatrix()
    console.log(cam.aspect)
    if (obj) {
      obj.scale.set(cam.aspect / 2, (cam.aspect / 2) * 0.75, cam.aspect / 2)
    }
  }
})
</script>

<template>
  <div class="jmm-flex jmm-justify-center jmm-h-auto jmm-bg-neutral-800">
    <div ref="landingLoading" class="jmm-mask-gradient-bottom" />
  </div>
</template>
