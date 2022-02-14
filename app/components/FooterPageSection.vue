<template>
  <section
    id="footer"
    class="container py-16 px-4 mx-auto sm:px-6 lg:px-12 xl:px-20"
  >
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
      <div class="flex flex-col shrink-0">
        <div class="dark:text-white">
          <img
            :src="`/icon/vuefes_logo.svg`"
            alt="Vue fes 2022"
          >
        </div>
        <p class="mt-4 text-sm leading-none text-gray-800">
          {{ copyright }}
        </p>
        <p class="mt-4 text-sm leading-none text-gray-800">
          {{ `All rights reserved.` }}
        </p>
        <div class="flex gap-x-4 items-center mt-12">
          <button
            v-for="network in networkLinks"
            :key="network.value"
            :aria-label="network.title"
            class="flex shrink-0 justify-center items-center w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 opacity-50 cursor-pointer"
          >
            <img
              :src="`/icon/${network.value}_logo.svg`"
              :alt="`${network.title} logo`"
              class="w-8"
            >
          </button>
        </div>
      </div>
      <div class="flex flex-col ml-8 sm:ml-0">
        <h2 class="text-base font-semibold leading-4 text-gray-800">
          {{ `Past Events` }}
        </h2>
        <a
          v-for="website in websiteLinks"
          :key="website.value"
          :href="website.url"
          class="mt-6 text-base leading-4 text-gray-800 hover:text-gray-500 focus:underline focus:outline-none cursor-pointer"
        >
          {{ website.title }}
        </a>
      </div>
      <div class="flex flex-col">
        <h2 class="text-base font-semibold leading-4 text-gray-800">
          {{ `Support` }}
        </h2>
        <a
          href="javascript:void(0)"
          class="mt-6 text-base leading-4 text-gray-800 hover:text-gray-500 focus:underline focus:outline-none cursor-pointer"
        >
          {{ `Privacy Policy` }}
        </a>
      </div>
      <div class="hidden mt-10 lg:block">
        <div class="flex justify-between items-center mt-4 border cursor-pointer">
          {{ copyrightDetail }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { copyright, copyrightDetail, networkLinks, websiteLinks } from '~/utils/constants'
</script>
