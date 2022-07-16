<script setup lang="ts">
import { websiteLinks } from '~/utils/constants'
</script>

<template>
  <div class="flex justify-center gap-8">
    <a
      v-for="website in websiteLinks"
      :key="website.value"
      target="_blank"
      rel="noreferrer"
      :href="website.url"
      :title="website.description"
      class="cursor-pointer text-xs leading-4 underline transition hover:text-gray-500 lg:text-lg"
    >
      {{ website.title }}
    </a>
  </div>
</template>
