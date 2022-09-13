<script setup lang="ts">
import PageTitle from '~~/app/components/PageTitle.vue'
import NavPageSection from '~/components/NavPageSection.vue'
import SessionSection from '~/components/SessionSection.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { generalOg, twitterOg } from '~/utils/og.constants'
import { conferenceTitle, linkUrl } from '~/utils/constants'
import { sponsorSessions } from '~/utils/sponsorSessions.constant'
import SpeakerProfiles from '~~/app/components/speakers/SpeakerProfiles.vue'
    
const route = useRoute()
    
const sessionInfo = computed(() => sponsorSessions.find(session => session.id === route.params.sponsor))

const { fetchContentByName } = useSponsorsCMS()
const { pending, data: sponsor } = useLazyAsyncData('sponsor-session', () => fetchContentByName(route.params.sponsor))
    
const url = `https://vuefes.jp/2022/sponsor-sessions/${sessionInfo.value.id}`
const title = `${sessionInfo.value.session.title}（${sessionInfo.value.sponsor}） | ${conferenceTitle}`
const description = `${conferenceTitle} のスポンサーセッション情報です。スポンサーの ${sessionInfo.value.sponsor} が、「${sessionInfo.value.session.title}」を発表します。`
const ogImageUrl = `${linkUrl}speaker-og-images/${sessionInfo.value.id}.jpg`
    
useNuxt2Meta({
  title,
  meta: [
    ...generalOg(title, description, url, ogImageUrl),
    ...twitterOg(title, description, ogImageUrl),
  ]
})
</script>

<template>
  <div v-if="!pending">
    <nav-page-section class="mb-12" />
    <PageTitle
      class="mb-10 md:mb-24"
      title="Session"
      title-yamato="セッション"
    />
    <div class="aspect-[250/140] mx-auto mb-3 w-40 md:mb-6 md:w-62.5">
      <img
        :src="sponsor.image.src"
        :alt="sponsor.name_jp"
      >
    </div>
    <p class="mb-8 text-base font-bold text-center text-vue-blue md:mb-15 md:text-22">{{ sponsor.name_jp }}</p>
    <SessionSection :session-info="sessionInfo">
      <SpeakerProfiles :speaker-profiles="sessionInfo.speakers" />
    </SessionSection>
    <ichimatsu-divided-bar color="vue-blue" />
    <footer-page-section />
  </div>
</template>
    