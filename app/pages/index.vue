<template>
  <div>
    <nav-page-section />
    <top-page-section />
    <ichimatsu-divided-bar color="white" />
    <message-page-section />
    <ichimatsu-divided-bar color="white" />
    <form-page-section />
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>

<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import TopPageSection from '~/components/TopPageSection.vue'
import MessagePageSection from '~/components/MessagePageSection.vue'
import FormPageSection from '~/components/FormPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'

import { initHeadingFont } from '~/plugins/initHeadingFont'

onMounted(() => {
  if (document !== undefined) {
    initHeadingFont()
  }
})
</script>
