<script setup lang="ts">
import { ref, onMounted } from 'vue'
const originMt = ref(160)
const header = ref<HTMLElement | null>(null)

const updateMarginHeader = (marginTop: number): void => {
  header.value?.setAttribute('style', 'margin-top:' + marginTop + 'px')
}

onMounted(() => {
  updateMarginHeader(originMt.value)
})
</script>

<template>
  <div ref="header" class="jmm-fixed jmm-flex jmm-w-full jmm-gap-40 jmm-white jmm-z-10 jmm-justify-center">
    <img class="jmm-w-20" src="@/public/media/projects.svg" alt="projects">
    <img class="jmm-w-24" src="@/public/media/studies.png" alt="projects">
  </div>
</template>
