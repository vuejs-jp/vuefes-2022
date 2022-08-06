<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import LinkOutlineButtonField from '~/components/forms/LinkOutlineButtonField.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SponsorListBio from '~/components/sponsors/SponsorListBio.vue'
import PageTitle from '~/components/PageTitle.vue'
import FooterPageSection from '~/components/FooterPageSection.vue'
import IchimatsuDividedBar from '~/components/IchimatsuDividedBar.vue'
import { useSponsorsCMS } from '~/composables/useCMS'
import { SHOW_SPONSOR_LIST } from '~~/app/utils/feature.constants'
import { conferenceTitle } from '~~/app/utils/constants'
import { generalOg, twitterOg } from '~~/app/utils/og.constants'

const title = `スポンサー一覧 | ${conferenceTitle}`
const url = 'https://vuefes.jp/2022/sponsors'
const description = `${conferenceTitle} のスポンサー情報です。`

useNuxt2Meta({
  title,
  meta: [
    ...generalOg(title, description, url),
    ...twitterOg(title, description),
  ]
})

const sponsors = ref(null)
if (SHOW_SPONSOR_LIST) {
  const { fetchContent } = useSponsorsCMS({ modelUid: 'sponsor' })
  fetchContent().then((response) => {
    sponsors.value = response
  })
}
</script>
<template>
  <div>
    <NavPageSection />
    <PageTitle
      class="mb-10 md:mb-20"
      title="Sponsors"
      title-yamato="スポンサー"
    />
    <div
      v-if="SHOW_SPONSOR_LIST"
      class="px-5 mx-auto max-w-1190"
    >
      <div class="grid grid-cols-2 gap-4 mb-12 md:grid-cols-3 md:mb-24 lg:grid-cols-5">
        <LinkOutlineButtonField
          title-label="Platinum"
          link="#platinum"
        />
        <LinkOutlineButtonField
          title-label="Gold"
          link="#gold"
        />
        <LinkOutlineButtonField
          title-label="Silver"
          link="#silver"
        />
        <LinkOutlineButtonField
          title-label="Bronze"
          link="#bronze"
        />
        <LinkOutlineButtonField
          title-label="Special Media"
          link="#specialMedia"
        />
        <LinkOutlineButtonField
          title-label="Media"
          link="#media"
        />
        <!-- <LinkOutlineButtonField
          title-label="配信"
          link="#broadcaster"
        /> -->
      </div>
      <template v-if="sponsors">
        <SponsorListBio :sponsors="sponsors.platinum" />
        <SponsorListBio :sponsors="sponsors.gold" />
        <SponsorListBio :sponsors="sponsors.silver" />
        <SponsorListBio :sponsors="sponsors.bronze" />
        <SponsorListBio :sponsors="sponsors.specialMedia" />
        <SponsorListBio :sponsors="sponsors.media" />
        <!-- <SponsorListBio :sponsors="sponsors.broadcaster" /> -->
        <div class="mb-20 text-center">
          <LinkButtonField
            link="/"
            title-label="トップに戻る"
            :is-external-link="false"
          />
        </div>
      </template>
    </div>
    <IchimatsuDividedBar color="vue-blue" />
    <FooterPageSection />
  </div>
</template>
