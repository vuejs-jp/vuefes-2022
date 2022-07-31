<script setup lang="ts">
import SponsorList from '~/components/sponsors/SponsorList.vue'
import { ISponsor, Rank } from '~/types/sponsors'
import SectionTitle from '~/components/SectionTitle.vue'
import { useSponsorsCMS } from '~/composables/useCMS'

const sponsors = ref(null)
const { fetchContent } = useSponsorsCMS({ modelUid: 'sponsor' })
fetchContent().then((response) => {
  sponsors.value = response
})
</script>

<template>
  <section
    id="sponsors"
    class="py-10 px-5 bg-sponsors md:px-10 lg:p-20"
  >
    <div class="py-20 bg-white lg:py-40">
      <div class="mx-auto max-w-[41.875rem] sm:max-w-[51.25rem] md:max-w-[73.75rem] lg:max-w-[78.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Sponsors"
          title-yamato="スポンサー"
        />
        <template v-if="sponsors">
          <SponsorList :sponsors="sponsors.platinum" />
          <SponsorList :sponsors="sponsors.gold" />
          <SponsorList :sponsors="sponsors.silver" />
          <SponsorList :sponsors="sponsors.bronze" />
          <SponsorList :sponsors="sponsors.specialMedia" />
          <SponsorList :sponsors="sponsors.media" />
          <SponsorList :sponsors="sponsors.broadcaster" />
        </template>
      </div>
    </div>
  </section>
</template>
