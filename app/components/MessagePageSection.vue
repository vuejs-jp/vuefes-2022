<template>
  <section
    id="message"
    class="container mx-auto max-w-full"
  >
    <div class="py-40 px-4 bg-white md:px-0 md:w-full md:text-center lg:px-0 lg:text-center">
      <div class="flex justify-center items-center md:flex-col lg:flex-row">
        <div class="px-12 mr-24 text-4xl font-extrabold md:pb-20 md:mr-0 md:text-center lg:p-20 lg:mr-0 lg:w-36 lg:text-center text-vue-blue">
          {{ `Message` }}
        </div>
        <div class="md:px-12 lg:px-36 text-vue-blue lg:w-192">
          <div
            class="pb-7 font-normal text-left text-vue-blue"
            v-html="message"
          />
          <div class="font-bold text-right text-vue-blue">{{ representative }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { message, representative } from '~/utils/constants'
</script>
