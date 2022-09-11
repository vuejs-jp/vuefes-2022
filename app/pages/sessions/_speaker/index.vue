<script setup lang="ts">
import PageTitle from '~~/app/components/PageTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import SessionSection from '~/components/SessionSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { speakers } from '~/utils/speakers.constants'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle, linkUrl } from '~/utils/constants'

const route = useRoute()

const speaker = computed(() => {
  return speakers.find(speaker => speaker.id === route.params.speaker)
})

const url = `https://vuefes.jp/2022/sessions/${speaker.value.id}`
const title = `${speaker.value.session.title}（${speaker.value.profile.name}） | ${conferenceTitle}`
const description = `${conferenceTitle} のセッション情報です。スピーカーの ${speaker.value.profile.name} が、「${speaker.value.session.title}」を発表します。`
const ogImageUrl = `${linkUrl}speaker-og-images/${speaker.value.id}.jpg`

useNuxt2Meta({
  title,
  meta: [
    ...generalOg(title, description, url, ogImageUrl),
    ...twitterOg(title, description, ogImageUrl),
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
    <SessionSection :session-info="speaker" />
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
