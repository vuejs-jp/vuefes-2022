<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import SponsorLogo from '~/components/sponsors/SponsorLogo.vue'
import { sponsorSupportLevelTitle } from '~/utils/sponsors.constants'

const props = defineProps({
  sponsors: {
    type: Array as CustomPropType<ISponsor[]>,
    required: true,
  }
})
const supportLevelTitle = computed(() => {
  return sponsorSupportLevelTitle(props.sponsors?.[0]?.rank)
})
const sponsorRankClass = computed(() => {
  const rank = props.sponsors?.[0]?.rank
  if (rank === 'platinum') {
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }
  return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
})
const sponsorCardClass = computed(() => {
  const rank = props.sponsors?.[0]?.rank
  if (rank === 'platinum') {
    return 'w-full max-w-[41.875rem] sm:max-w-[18.6875rem] md:max-w-[23rem]'
  }
  return 'w-full max-w-[19.75rem] sm:max-w-[13rem] md:max-w-[13rem] lg:max-w-[16.65rem]'
})
</script>

<template>
  <div
    v-if="sponsors.length"
    class="mb-[5rem] text-sponsor"
  >
    <h2
      :id="supportLevelTitle"
      class="mb-[2.47rem] text-2xl font-bold"
    >
      {{ supportLevelTitle }}
    </h2>
    <div
      class="flex gap-[2.375rem] sm:gap-[2.375rem] md:gap-[3.75rem]"
      :class="sponsorRankClass"
    >
      <div
        v-for="sponsor in sponsors"
        :key="sponsor.name_en"
        :class="sponsorCardClass"
      >
        <SponsorLogo
          :id="sponsor.name_en"
          class=""
          :sponsor="sponsor"
        />
        <h3>{{ sponsor.name_jp }}</h3>
        <nuxt-link :to="sponsor.corporate_url">{{ sponsor.corporate_url }}</nuxt-link>
        <p v-if="sponsor.bio">{{ sponsor.bio }}</p>
      </div>
    </div>
  </div>
</template>
