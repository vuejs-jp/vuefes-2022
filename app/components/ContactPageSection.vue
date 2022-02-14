<template>
  <section
    id="contact"
    class="container py-4 px-6 mx-auto"
  >
    <div class="flex justify-center items-center align-middle">
      <div class="pr-8 text-xl font-bold">{{ `Contact` }}</div>
      <div class="p-0 m-0">
        <div class="grid gap-6 mb-2 md:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="network in networkLinks"
            :key="network.value"
            :href="network.url"
            :title="network.description"
            class="flex items-center p-4 w-48 no-underline bg-gray-800 rounded-lg border-2 border-gray-200 shadow-sm"
          >
            <div class="p-3 mr-4 bg-white rounded-full">
              <img
                :src="`/icon/${network.value}_logo.svg`"
                :alt="`${network.title} logo`"
                class="w-8"
              >
            </div>
            <div>
              <p class="mb-2 text-sm font-medium text-white">{{ network.title }}</p>
            </div>
          </a>
        </div>
        <div class="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <a
            v-for="website in websiteLinks"
            :key="website.value"
            :href="website.url"
            :title="website.description"
            class="mt-6 text-base leading-4 text-gray-800 hover:text-gray-500 focus:underline focus:outline-none cursor-pointer"
          >
            {{ website.title }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { networkLinks, websiteLinks } from '~/utils/constants'
</script>
