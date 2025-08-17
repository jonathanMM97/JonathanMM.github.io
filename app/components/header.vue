<template>
  <div
    class="fixed w-full font-inter h-fit flex py-4 px-6 text-alabasterWhite sm:justify-normal justify-between"
  >
    <p v-if="open" class="w-fit uppercase font-bold text-base">Jonathan</p>
    <div
      class="w-fit flex sm:pointer-events-auto pointer-events-none sm:static absolute transition-all duration-300 ease-in-out opacity-0 sm:opacity-100 gap-4 ml-auto sm:translate-x-0 translate-x-[200px]"
      :class="{
        'left-1/2 opacity-100 !translate-x-0 flex-col bg-alabasterWhite text-onyx': open
      }"
    >
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
    <Menu v-if="!open" class="size-6 flex sm:hidden" @click="open = true" />
    <Close v-if="open" class="size-6 absolute right-4 top-4" @click="open = false" />
  </div>
</template>

<script setup lang="ts">
import SimpleArrow from '@/assets/icons/simple-arrow.svg'
import Menu from '@/assets/icons/menu.svg'
import Close from '@/assets/icons/close.svg'
import Tooltip from '~/components/Tooltip.vue'

const open = ref(false)
</script>
