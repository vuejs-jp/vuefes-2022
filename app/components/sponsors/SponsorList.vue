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
    return ''
  }
  return ''
})
const sponsorCardClass = computed(() => {
  const rank = props.sponsors?.[0]?.rank
  if (rank === 'platinum') {
    return 'w-full max-w-[35.625rem] sm:max-w-[18.6875rem] md:max-w-[23rem]'
  }
  return 'w-full max-w-[16.625rem] sm:max-w-[13rem] md:max-w-[13rem] lg:max-w-[16.65rem]'
})

</script>

<template>
  <div
    v-if="sponsors"
    class="mb-[5rem]"
  >
    <h2 class="mb-[2.47rem] text-2xl font-bold text-center"><nuxt-link :to="`/sponsors#${supportLevelTitle}`">{{ supportLevelTitle }}</nuxt-link></h2>
    <div
      class="flex flex-wrap gap-[2.375rem] sm:gap-[2.375rem] justify-center md:gap-[3.75rem]"
      :class="sponsorRankClass"
    >
      <SponsorLogo
        v-for="sponsor in sponsors"
        :key="sponsor.id"
        :class="sponsorCardClass"
        :sponsor="sponsor"
      />
    </div>
  </div>
</template>
