<template>
  <div class="flex flex-col justify-center items-center">
    <UseImage class="size-[200px] rounded-full" :src="profileImg" />
  </div>
  <p class="font-inter">
    <strong class="font-bold">Two years of bringing code and creativity together</strong>. Hi! I'm
    <strong class="font-bold">Jonathan</strong>, 27-year-old creative developer from
    <strong class="font-bold"> Chiclana de la Frontera</strong>. I specialize in front-end
    development, where I combine visual storytelling with clean, responsive code. I'm passionate
    about building intuitive, engaging digital experiences that not only look great but feel great
    to use.
  </p>
</template>

<script setup lang="ts">
import { UseImage } from '@vueuse/components'
import profileImg from '~/assets/profile.webp'
</script>
