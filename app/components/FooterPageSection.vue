<template>
  <section
    id="footer"
    class="container py-16 px-4 mx-auto max-w-full text-white bg-vuefes-primary-2"
  >
    <div class="flex flex-col justify-center items-center">
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
  </section>
</template>

<script setup lang="ts">
import ContactList from '~/components/footer/ContactList.vue'
import PastEvents from '~/components/footer/PastEvents.vue'
import CopyrightText from '~/components/footer/CopyrightText.vue'
</script>
