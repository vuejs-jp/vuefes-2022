<template>
  <header class="py-[5vw] px-[2vw] lg:py-10">
    <nav class="flex items-center justify-between">
      <div class="flex">
        <nuxt-link to="/">
          <img
            class="mr-[2.6vw] h-[3.51vw] w-[19.48vw] lg:mr-5 lg:h-9 lg:w-[200px]"
            :src="`/icon/vuefes_logo.svg`"
            :alt="conferenceTitle"
          >
        </nuxt-link>
        <p
          class="flex items-center pt-[1vw] text-[1.69vw] font-bold text-vue-blue after:ml-[1vw] after:block after:h-px after:w-[6vw] after:border-b after:border-vue-blue lg:pt-2 lg:text-base"
        >
          {{ subtitle }}
        </p>
      </div>
      <nav-menu
        class="xxl:hidden"
        :is-open="isOpen"
        @open="toggleOpen(true)"
        @close="toggleOpen(false)"
      />
      <ul class="hidden space-x-5 text-vue-blue xxl:flex">
        <li
          v-for="(link, index) in menuLinks"
          :key="index"
        >
          <nuxt-link
            :to="`/${link.uri}`"
            class="text-xl transition-opacity hover:opacity-60"
          >
            {{ link.displayName }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { conferenceTitle, subtitle } from '~/utils/constants'
import NavMenu from '~/components/navbar/NavMenu.vue'
import { menuLinks } from '~/utils/constants'


const isOpen = ref(false)

function toggleOpen(opened:boolean) {
  isOpen.value = opened
  document.querySelector('html').style.overflow = opened ? 'hidden' : ''
}
</script>
