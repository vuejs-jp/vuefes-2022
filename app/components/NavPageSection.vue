<template>
  <header class="py-[5vw] px-[3vw] lg:py-10">
    <nav class="flex">
      <img
        class="mr-[2.6vw] w-[19.48vw] h-[3.51vw] lg:mr-5 lg:w-[200px] lg:h-9"
        :src="`/icon/vuefes_logo.svg`"
        :alt="conferenceTitle"
      >
      <p
        class="after:block flex items-center pt-[1vw] after:ml-[1.95vw] after:w-[6.49vw] after:h-px text-[1.69vw] font-bold text-vue-blue after:border-b after:border-vue-blue lg:pt-2 lg:text-base"
      >
        {{ subtitle }}
      </p>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { conferenceTitle, subtitle } from '~/utils/constants'
</script>
