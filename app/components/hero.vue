<template>
  <div
    class="!overflow-x-hidden flex flex-col lg:flex-row items-center lg:items-start justify-between text-alabasterWhite"
  >
    <div class="flex flex-col gap-5 lg:self-end items-center lg:items-start">
      <h1 class="text-[60px] lg:text-[100px]">{{ $t('hero.name') }}</h1>
      <p class="text-[18px] text-[32px]">{{ $t('hero.job') }}</p>
      <button class="flex gap-2 p-2 w-fit border-alabasterWhite border-2 rounded-lg">
        {{ $t('hero.contact') }}
        <SimpleIcon class="size-4 -rotate-90" />
      </button>
      <div class="w-full flex gap-4 lg:mb-40 justify-center lg:justify-normal">
        <div class="flex flex-col gap-2">
          <p class="text-[25px] lg:text-[35px] font-bold">{{ $t('hero.yearsExperience') }}</p>
          <p class="text-[12px] lg:text-base">{{ $t('hero.experience') }}</p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[25px] lg:text-[35px] font-bold">{{ $t('hero.numProjects') }}</p>
          <p class="text-[12px] lg:text-base">{{ $t('hero.projects') }}</p>
        </div>
      </div>
    </div>
    <div
      class="lg:absolute flex flex-col lg:flex-row lg:right-10 lg:bottom-60 lg:[writing-mode:vertical-lr]"
    >
      <p>{{ $t('hero.expertise') }}</p>
      <p>html</p>
    </div>
    <UseImage
      class="lg:mt-40 max-size-[300px] sm:size-[500px] lg:size-[700px] lg:mr-80"
      :src="imageHero"
      alt="Profile image 1"
    />
  </div>
</template>

<script setup lang="ts">
import { UseImage } from '@vueuse/components'
import imageHero from '@/assets/bg-about.webp'
import SimpleIcon from '@/assets/icons/simple-arrow.svg'
</script>
