<script setup lang="ts">
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <div class="flex justify-center items-center pb-20">
    <a
      v-for="website in websiteLinks"
      :key="website.value"
      :href="website.url"
      :title="website.description"
      class="mt-6 mr-8 text-base leading-4 hover:text-gray-500 underline focus:underline focus:outline-none cursor-pointer md:mr-0 md:text-center"
    >
      {{ website.title }}
    </a>
  </div>
</template>
