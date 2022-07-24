<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import LinkOutlineButtonField from '~/components/forms/LinkOutlineButtonField.vue'
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SponsorListBio from '~/components/sponsors/SponsorListBio.vue'
import { generalOg, twitterOg } from '~/utils/og.constants'
import Endpoints from '~/utils/endpoints.constants'
import { sponsors } from '~/utils/sponsors.constants'

const platinumSponsors = sponsors.filter(sponsor => sponsor.rank === 'platinum')
const goldSponsors = sponsors.filter(sponsor => sponsor.rank === 'gold')
const silverSponsors = sponsors.filter(sponsor => sponsor.rank === 'silver')
const bronzeSponsors = sponsors.filter(sponsor => sponsor.rank === 'bronze')
const specialMediaSponsors = sponsors.filter(sponsor => sponsor.rank === 'specialMedia')
const mediaSponsors = sponsors.filter(sponsor => sponsor.rank === 'media')
const broadcastSponsors = sponsors.filter(sponsor => sponsor.rank === 'broadcaster')

</script>
<script lang="ts">
import { conferenceTitle, ogSponsorDescription } from '~/utils/constants'
export default {
  setup(){
    useHead({
      title: `スポンサーの一覧 | ${conferenceTitle}`,
      meta: [
        ...generalOg(
          `スポンサーの一覧 | ${conferenceTitle}`,
          ogSponsorDescription,
          `${Endpoints.BASE_URL}sponsors`,
        ),
        ...twitterOg(
          `スポンサーの一覧 | ${conferenceTitle}`,
          ogSponsorDescription,
          `${Endpoints.BASE_URL}sponsors`,
        )
      ]
    })
  }
}
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
        link="/sponsors/#Special Media"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="Media"
        link="/sponsors/#Media"
      />
      <LinkOutlineButtonField
        class="w-full max-w-[20rem] md:max-w-[13.75rem]"
        title-label="配信"
        link="/sponsors/#Broadcaster"
      />
    </div>
    <SponsorListBio :sponsors="platinumSponsors" />
    <SponsorListBio :sponsors="goldSponsors" />
    <SponsorListBio :sponsors="silverSponsors" />
    <SponsorListBio :sponsors="bronzeSponsors" />
    <SponsorListBio :sponsors="specialMediaSponsors" />
    <SponsorListBio :sponsors="mediaSponsors" />
    <SponsorListBio :sponsors="broadcastSponsors" />
    <div class="mt-12 mb-20 text-center md:mt-24 md:mb-40">
      <LinkButtonField
        link="/sponsors"
        title-label="トップに戻る"
        :is-external-link="false"
      />
    </div>
  </div>
</template>
