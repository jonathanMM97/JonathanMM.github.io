<template>
  <main class="jmm-flex jmm-flex-col jmm-overflow-hidden">
    <Header />
    <Room class="jmm-object" :width="roomWidth" :height="roomHeight"  />
    <Content />
  </main>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width: roomWidth, height: roomHeight } = useWindowSize()
const previousSize = ref(0)

watch(roomWidth, () => {
  previousSize.value = roomWidth.value - previousSize.value
})
</script>
