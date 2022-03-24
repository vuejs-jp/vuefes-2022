<template>
  <section
    id="footer"
    class="container py-16 mx-auto max-w-full bg-vue-blue"
  >
    <div class="px-4 text-white">
      <div class="flex flex-col laptop:flex-col justify-center items-center px-36 md:px-12 md:w-full">
        <div class="pb-16">
          <img
            :src="`/icon/vuefes_logo-invert.svg`"
            alt="Vue fes 2022"
          >
        </div>
        <contact-list />
        <past-events />
        <copyright-text />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactList from '~/components/footer/ContactList.vue'
import PastEvents from '~/components/footer/PastEvents.vue'
import CopyrightText from '~/components/footer/CopyrightText.vue'
</script>
