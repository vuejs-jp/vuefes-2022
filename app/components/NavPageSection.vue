<template>
  <header class="py-[5vw] px-[3vw] lg:py-10">
    <nav class="flex justify-between items-center">
      <div class="flex">
        <nuxt-link to="/">
          <img
            class="mr-[2.6vw] w-[19.48vw] h-[3.51vw] lg:mr-5 lg:w-[200px] lg:h-9"
            :src="`/icon/vuefes_logo.svg`"
            :alt="conferenceTitle"
          >
        </nuxt-link>
        <p
          class="flex after:block items-center pt-[1vw] after:ml-[1.95vw] after:w-[6.49vw] after:h-px text-[1.69vw] font-bold text-vue-blue after:border-b after:border-vue-blue lg:pt-2 lg:text-base"
        >
          {{ subtitle }}
        </p>
      </div>
      <nav-menu
        class="xl:hidden"
        :is-open="isOpen"
        @open="toggleOpen(true)"
        @close="toggleOpen(false)"
      />
      <ul class="hidden space-x-6 xl:flex">
        <li
          v-for="(link, index) in menuLinks"
          :key="index"
        >
          <nuxt-link
            :to="`/${link.uri}`"
            class="text-xl"
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
