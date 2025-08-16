<template>
  <main class="flex flex-col gap-20">
    <Hero class="overflow-hidden" />
    <AboutMe id="about-me overflow-hidden" />
  </main>
</template>
<script setup lang="ts">
import Hero from '~/components/hero.vue'
import AboutMe from '~/components/about-me.vue'
</script>
