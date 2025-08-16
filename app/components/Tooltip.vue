<template>
  <div
    class="absolute translate-y-[100%] -translate-x-3 border-red rounded-lg p-2 bg-white shadow-lg after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:-translate-y-full after:border-l-[8px] after:border-r-[8px] after:border-b-[8px] after:border-l-transparent after:border-r-transparent after:border-b-white after:shadow-lg"
  >
    <slot />
  </div>
</template>

<script setup lang="ts"></script>
