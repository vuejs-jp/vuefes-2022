<script setup lang="ts">
import { networkLinks } from '~/utils/constants'
</script>

<template>
  <div class="flex justify-center items-center pb-8 md:flex-wrap md:px-48">
    <a
      v-for="network in networkLinks"
      :key="network.value"
      :href="network.url"
      :title="network.description"
      class="flex justify-center items-center px-4 mr-2 mb-0 w-40 h-10 no-underline hover:bg-white rounded-full border-2 border-gray-200 shadow-sm md:mb-5 hover:text-vue-blue"
    >
      <div class="pr-2 text-right rounded-full">
        <img
          :src="`/icon/${network.value}_logo.svg`"
          :alt="`${network.title} logo`"
          class="w-4"
        >
      </div>
      <div class="text-left">
        <p class="text-xs font-medium">{{ network.title }}</p>
      </div>
    </a>
  </div>
</template>
