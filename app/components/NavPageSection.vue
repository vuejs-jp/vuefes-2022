<template>
  <header class="py-[5vw] px-[3vw] lg:py-10">
    <nav class="flex">
      <nuxt-link to="/">
        <img
          class="mr-[2.6vw] h-[3.51vw] w-[19.48vw] lg:mr-5 lg:h-9 lg:w-[200px]"
          :src="`/icon/vuefes_logo.svg`"
          :alt="conferenceTitle"
        >
      </nuxt-link>
      <p
        class="flex items-center pt-[1vw] text-[1.69vw] font-bold text-vue-blue after:ml-[1.95vw] after:block after:h-px after:w-[6.49vw] after:border-b after:border-vue-blue lg:pt-2 lg:text-base"
      >
        {{ subtitle }}
      </p>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { conferenceTitle, subtitle } from '~/utils/constants'
</script>
