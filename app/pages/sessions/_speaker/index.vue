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

const url = `https://vuefes.jp/2022/sessions/${speaker.value.id}`
const title = `${speaker.value.session.title}（${speaker.value.name}） | Vue Fes Japan Online 2022`
const description = `Vue Fes Japan Online 2022 のセッション情報です。スピーカーの ${speaker.value.name} が、「${speaker.value.session.title}」を発表します。`
const ogImageUrl = `https://vuefes.jp/2022/speaker-og-images/${speaker.value.id}.jpg`

useNuxt2Meta({
  title,
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:url', name: 'og:url', content: url },
    { hid: 'og:title', name: 'og:title', content: title },
    { hid: 'og:description', name: 'og:description', content: description },
    { hid: 'og:image', name: 'og:image', content: ogImageUrl },
    {
      hid: 'og:image:secure_url',
      name: 'og:image:secure_url',
      content: ogImageUrl
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    },
    { hid: 'twitter:title', name: 'twitter:title', content: title },
    { hid: 'twitter:image', name: 'twitter:image', content: ogImageUrl }
  ]
})
</script>
<template>
  <div>
    <nav-page-section class="mb-12" />
    <PageTitle
      class="mb-10 md:mb-24"
      title="Session"
      title-yamato="セッション"
    />
    <SessionSection :speaker="speaker" />
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
