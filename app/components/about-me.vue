<template>
  <div class="flex flex-col md:flex-row justify-center gap-8 items-center text-alabasterWhite">
    <UseImage class="max-h-[300px] lg:h-[500px]" :src="profileImg" alt="profile" />
    <div class="font-inter md:w-[600px]" v-html="$t('about-me.content')" />
  </div>
</template>

<script setup lang="ts">
import { UseImage } from '@vueuse/components'
import profileImg from '~/assets/bg-about-me.webp'
</script>
