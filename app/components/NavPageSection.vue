<template>
  <header class="py-[5vw] px-[2vw] lg:py-10">
    <nav class="flex justify-between items-center">
      <div class="flex">
        <nuxt-link to="/">
          <VuefesLogo class="mr-[2.6vw] w-[39.48vw] h-[3.51vw] lg:mr-5 lg:w-50 lg:h-9" />
        </nuxt-link>
        <p
          class="flex after:block items-center pt-[1vw] after:ml-[1vw] after:w-[6vw] after:h-px text-[1.69vw] font-bold text-vue-blue after:border-b after:border-vue-blue lg:pt-2 lg:text-base"
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
            class="text-xl hover:opacity-60 transition-opacity"
          >
            {{ link.displayName }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { subtitle } from '~/utils/constants'
import VuefesLogo from '~/assets/icon/vuefes_logo.svg'
import NavMenu from '~/components/navbar/NavMenu.vue'
import { menuLinks, urlBasePath } from '~/utils/constants'


const isOpen = ref(false)

function toggleOpen(opened:boolean) {
  isOpen.value = opened
  document.querySelector('html').style.overflow = opened ? 'hidden' : ''
}
</script>
