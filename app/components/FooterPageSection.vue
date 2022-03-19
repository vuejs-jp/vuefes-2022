<template>
  <section
    id="footer"
    class="container mx-auto max-w-full"
  >
    <div class="py-16 px-4 text-white bg-vue-blue">
      <div class="flex justify-center items-center px-36 md:flex-col md:px-12 md:w-full">
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
