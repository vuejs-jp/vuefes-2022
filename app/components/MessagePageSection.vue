<template>
  <section
    id="message"
    class="container py-40 px-0 m-0 max-w-full"
  >
    <div class="text-center bg-white md:px-0 md:w-full md:text-center lg:px-0">
      <div class="flex justify-center items-center md:flex-row lg:flex-col">
        <div class="flex flex-col justify-center items-center 3xl:pr-12 pb-20 md:pb-20 md:mr-0 md:text-center lg:mr-0">
          <div class="w-60 text-6xl opacity-10 lg:w-80 lg:text-center font-kokuryu-heading text-vue-blue">{{ `ことづけ` }}</div>
          <div class="-m-5 w-36 text-4xl font-extrabold 3xl:text-center md:w-36 lg:w-36 text-vue-blue">{{ `Message` }}</div>
        </div>
        <div class="3xl:px-12 md:w-full lg:pl-24 text-vue-blue w-192">
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
