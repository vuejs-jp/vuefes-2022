<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import { ISponsor, Rank } from '~/types/sponsors'
import SponsorCard from '~/components/sponsors/SponsorCard.vue'

const props = defineProps({
  sponsors: {
    type: Array as CustomPropType<ISponsor[]>,
    required: true,
  }
})
const sponsorCardClass = computed(() => {
  const rank = props.sponsors?.[0]?.rank
  if (rank === 'platinum') {
    return 'w-full max-w-[35.625rem] sm:max-w-[18.6875rem] md:max-w-[23rem]'
  }
  return 'w-full max-w-[16.625rem] sm:max-w-[13rem] md:max-w-[13rem] lg:max-w-[16.65rem]'
})
const sponsorRankClass = computed(() => {
  const rank = props.sponsors?.[0]?.rank
  if (rank === 'platinum') {
    return ''
  }
  return ''
})
const sponsorListTitle = computed(() => {
  const rank: Rank = props.sponsors?.[0]?.rank
  switch (rank) {
  case 'platinum':
    return 'Platinum'
  case 'gold':
    return 'Gold'
  case 'silver':
    return 'Silver'
  case 'bronze':
    return 'Bronze'
  case 'media':
    return '配信'
  default:
    const _missing: Never = rank
    return ''
  }
})
</script>

<template>
  <div
    v-if="sponsors.length"
    class="mb-[5rem]"
  >
    <h2 class="mb-[2.47rem] text-2xl font-bold text-center">{{ sponsorListTitle }}</h2>
    <div
      class="flex flex-wrap gap-[2.375rem] sm:gap-[2.375rem] justify-center md:gap-[3.75rem]"
      :class="sponsorRankClass"
    >
      <SponsorCard
        v-for="sponsor in sponsors"
        :key="sponsor.id"
        class=""
        :class="sponsorCardClass"
        :sponsor="sponsor"
      />
    </div>
  </div>
</template>