<template>
  <section
    id="footer"
    class="py-10 text-white bg-vue-blue lg:py-20"
  >
    <img
      class="mx-auto mb-10 w-37.5 lg:mb-20 lg:w-60"
      :src="`/icon/vuefes_logo-invert.svg`"
      alt="Vue fes 2022"
    >
    <contact-list class="mb-5 lg:mb-10" />
    <past-events class="mb-3.5 lg:mb-3.5" />
    <privacy-policy-and-coc class="mb-10 lg:mb-20" />
    <copyright-text />
  </section>
</template>

<script setup lang="ts">
import ContactList from '~/components/footer/ContactList.vue'
import PastEvents from '~/components/footer/PastEvents.vue'
import PrivacyPolicyAndCoc from '~/components/footer/PrivacyPolicyAndCoc.vue'
import CopyrightText from '~/components/footer/CopyrightText.vue'
</script>
