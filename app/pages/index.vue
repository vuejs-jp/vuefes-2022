<template>
  <div>
    <nav-page-section />
    <top-page-section />
    <ichimatsu-divided-bar name="tsuchi" />
    <form-page-section />
    <ichimatsu-divided-bar name="vue-blue" />
    <footer-page-section />
  </div>
</template>

<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import TopPageSection from '~/components/TopPageSection.vue'
import FormPageSection from "~/components/FormPageSection.vue";
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
</script>
