<script setup lang="ts">
import PageTitle from '~~/app/components/PageTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import SessionSection from '~/components/SessionSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { speakers } from '~/utils/speakers.constants'

const route = useRoute()

const speaker = computed(() => {
  return speakers.find(speaker => speaker.id === route.params.speaker)
})
</script>
<template>
  <div>
    <nav-page-section class="mb-[50px]" />
    <PageTitle
      class="mb-[40px] md:mb-[100px]"
      title="Session"
      title-yamato="セッション"
    />
    <SessionSection :speaker="speaker" />
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
