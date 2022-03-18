<template>
  <section class="container mx-auto max-w-full">
    <div class="flex flex-col justify-center items-center py-12 px-3 md:px-4 bg-tsuchi">
      <h1 class="mt-8 text-3xl font-semibold leading-10 text-center text-gray-800 dark:text-white md:mt-12 md:w-9/12 lg:w-7/12 lg:text-4xl">
        {{ conferenceTitle }}
      </h1>
      <p class="mt-10 text-base leading-normal text-center text-gray-600 dark:text-white md:w-9/12 lg:w-7/12">
        {{ message }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { conferenceTitle, message } from '~/utils/constants'
</script>
