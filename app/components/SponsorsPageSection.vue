<script setup lang="ts">
import SponsorList from '~/components/sponsors/SponsorList.vue'
import { ISponsor, Rank } from '~/types/sponsors'
import SectionTitle from '~/components/SectionTitle.vue'
import { sponsors } from '~/utils/sponsors.constants'

const platinumSponsors = sponsors.filter(sponsor => sponsor.rank === 'platinum')
const goldSponsors = sponsors.filter(sponsor => sponsor.rank === 'gold')
const silverSponsors = sponsors.filter(sponsor => sponsor.rank === 'silver')
const bronzeSponsors = sponsors.filter(sponsor => sponsor.rank === 'bronze')
const specialMediaSponsors = sponsors.filter(sponsor => sponsor.rank === 'SpecialMedia')
const mediaSponsors = sponsors.filter(sponsor => sponsor.rank === 'media')
const broadcastSponsors = sponsors.filter(sponsor => sponsor.rank === 'broadcaster')
</script>

<template>
  <section
    id="sponsors"
    class="py-10 px-5 bg-sponsors md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="mx-auto max-w-[41.875rem] sm:max-w-[51.25rem] md:max-w-[73.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Sponsors"
          title-yamato="スポンサー"
        />
        <SponsorList :sponsors="platinumSponsors" />
        <SponsorList :sponsors="goldSponsors" />
        <SponsorList :sponsors="silverSponsors" />
        <SponsorList :sponsors="bronzeSponsors" />
        <SponsorList :sponsors="specialMediaSponsors" />
        <SponsorList :sponsors="mediaSponsors" />
        <SponsorList :sponsors="broadcastSponsors" />
      </div>
    </div>
  </section>
</template>
