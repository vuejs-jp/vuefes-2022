<script setup lang="ts">
import { message1, message2, message3, message4, message5, representative } from '~/utils/constants'
</script>

<template>
  <section
    id="message"
    class="py-20 bg-white lg:py-40"
  >
    <div
      class="px-5 mx-auto max-w-[43.75rem] lg:flex lg:gap-6 lg:justify-between lg:items-center lg:max-w-[74.375rem]"
    >
      <div class="shrink-0 mb-10 text-center lg:mb-20">
        <div class="font-kokuryu-heading text-[2.5rem] text-vue-blue opacity-10 lg:text-[5rem]">
          ことづけ
        </div>
        <h2 class="-mt-6 text-xl font-extrabold text-vue-blue lg:-mt-10 lg:text-[2.5rem]">
          Message
        </h2>
      </div>
      <div class="text-sm leading-7 text-vue-blue lg:max-w-[45rem] lg:text-lg lg:leading-8">
        <p class="mb-6">{{ message1 }}</p>
        <p class="mb-6">{{ message2 }}</p>
        <p class="mb-6">{{ message3 }}</p>
        <p class="mb-6">{{ message4 }}</p>
        <p class="mb-6">{{ message5 }}</p>
        <p class="text-right">{{ representative }}</p>
      </div>
    </div>
  </section>
</template>
