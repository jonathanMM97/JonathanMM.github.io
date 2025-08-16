<template>
  <div
    class="fixed w-full font-inter h-fit flex py-4 px-6 text-alabasterWhite sm:justify-normal justify-between"
  >
    <p class="w-fit uppercase font-bold text-base">Jonathan</p>
    <div class="w-fit hidden sm:flex gap-4 ml-auto">
      <NuxtLink :to="$localePath('index', 'en')">{{ $t('header.home') }}</NuxtLink>
      <NuxtLink :to="$localePath('index', 'en')">{{ $t('header.about-me') }}</NuxtLink>
      <NuxtLink :to="$localePath('index', 'en')">{{ $t('header.studies') }}</NuxtLink>
      <NuxtLink :to="$localePath('index', 'en')">{{ $t('header.project') }}</NuxtLink>
      <NuxtLink :to="$localePath('index', 'en')">{{ $t('header.contact') }}</NuxtLink>
      <NuxtLink
        :to="$localePath('index', 'en')"
        class="flex group gap-2 justify-center items-center"
      >
        <span>{{ $t('header.lang') }}</span>
        <SimpleArrow
          class="rotate-0 group-hover:rotate-180 transition-transform duration-500 ease-in-out"
        />
        <Tooltip
          class="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-500 ease-in-out"
        >
          <div class="flex text-onyx divide-x-[1px] divide-solid divide-onyx">
            <NuxtLink class="px-2" :to="$localePath('index', 'es')">ES</NuxtLink>
            <NuxtLink class="px-2" :to="$localePath('index', 'en')">EN</NuxtLink>
          </div>
        </Tooltip>
      </NuxtLink>
    </div>
    <Menu class="size-6 flex sm:hidden" />
  </div>
</template>

<script setup lang="ts">
import SimpleArrow from '@/assets/icons/simple-arrow.svg'
import Menu from '@/assets/icons/menu.svg'
import Tooltip from '~/components/Tooltip.vue'
</script>
