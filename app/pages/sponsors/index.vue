<script setup lang="ts">
import { conferenceTitle, ogSponsorDescription } from '~/utils/constants'
import { useSponsorsCMS } from '~/composables/useCMS'

import NavPageSection from '~/components/NavPageSection.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkOutlineButtonField from '~/components/forms/LinkOutlineButtonField.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SponsorListBio from '~/components/sponsors/SponsorListBio.vue'
import { generalOg, twitterOg } from '~/utils/og.constants'
import Endpoints from '~/utils/endpoints.constants'

const sponsors = ref(null)
const { fetchContent } = useSponsorsCMS({ modelUid: 'sponsor' })
fetchContent().then((response) => {
  sponsors.value = response
})
</script>
<template>
  <div class="mx-[3.125rem] md:mx-[8.75rem] lg:mx-[23.125rem]">
    <NavPageSection />
    <SectionTitle
      class="mb-10 lg:mb-20"
      title="Sponsors"
      title-yamato="スポンサー"
    />
    <div class="flex flex-wrap gap-[1.25rem] mb-[6.25rem]">
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Platinum"
        link="/sponsors/#Platinum"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Gold"
        link="/sponsors/#Gold"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Silver"
        link="/sponsors/#Silver"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Bronze"
        link="/sponsors/#Bronze"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Special Media"
        link="/sponsors/#specialMedia"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Media"
        link="/sponsors/#media"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="配信"
        link="/sponsors/#broadcaster"
      />
    </div>
    <template v-if="sponsors">
      <SponsorListBio :sponsors="sponsors.platinum" />
      <SponsorListBio :sponsors="sponsors.gold" />
      <SponsorListBio :sponsors="sponsors.silver" />
      <SponsorListBio :sponsors="sponsors.bronze" />
      <SponsorListBio :sponsors="sponsors.specialMedia" />
      <SponsorListBio :sponsors="sponsors.media" />
      <SponsorListBio :sponsors="sponsors.broadcaster" />
      <div class="mt-12 mb-20 text-center md:mt-24 md:mb-40">
        <LinkButtonField
          link="/sponsors"
          title-label="トップに戻る"
          :is-external-link="false"
        />
      </div>
    </template>
  </div>
</template>
