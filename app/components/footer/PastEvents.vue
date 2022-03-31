<script setup lang="ts">
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <div class="flex gap-4 justify-center">
    <a
      v-for="website in websiteLinks"
      :key="website.value"
      target="_blank"
      rel="noreferrer"
      :href="website.url"
      :title="website.description"
      class="text-xs leading-4 hover:text-gray-500 underline focus:underline focus:outline-none transition cursor-pointer lg:text-lg"
    >
      {{ website.title }}
    </a>
  </div>
</template>
