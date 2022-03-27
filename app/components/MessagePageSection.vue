<template>
  <section
    id="message"
    class="py-40 bg-white"
  >
    <div class="text-center md:px-0 md:w-full md:text-center lg:px-0">
      <div class="flex justify-center items-center md:flex-row lg:flex-col">
        <div
          class="flex flex-col justify-center items-center pb-20 md:pr-12 md:pb-20 md:mr-0 md:text-center lg:mr-0 3xl:pr-0"
        >
          <div
            class="w-60 font-kokuryu-heading text-6xl text-vue-blue opacity-10 lg:w-80 lg:text-center"
          >
            {{ `ことづけ` }}
          </div>
          <div
            class="-m-5 w-36 text-4xl font-extrabold text-vue-blue md:w-36 lg:w-36 3xl:text-center"
          >
            {{ `Message` }}
          </div>
        </div>
        <div class="w-192 text-vue-blue md:w-full lg:pl-24 3xl:px-12">
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
