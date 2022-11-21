<script setup lang="ts">
import PageTitle from '~/components/PageTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import SessionPageSection from '~/components/SessionPageSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { speakers } from '~/utils/speakers.constants'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle, linkUrl } from '~/utils/constants'

const route = useRoute()

const speaker = computed(() => {
  return speakers.find(speaker => {
    return speaker.id === route.params.speaker
  })
})

const url = computed(() => `https://vuefes.jp/2022/sessions/${speaker.value.id}`)
const title = computed(() => {
  return `${speaker.value.session?.title}（${speaker.value.profile?.name}） | ${conferenceTitle}`
})
const description = computed(() => `${conferenceTitle} のセッション情報です。スピーカーの ${speaker.value.profile?.name} が、「${speaker.value.session?.title}」を発表します。`)
const ogImageUrl = computed(() => `${linkUrl}speaker-og-images/${speaker.value.id}.jpg`)

useHead({
  title,
  meta: [
    ...generalOg(title.value, description.value, url.value, ogImageUrl.value),
    ...twitterOg(title.value, description.value, ogImageUrl.value),
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
    <SessionPageSection :session-info="speaker" />
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
