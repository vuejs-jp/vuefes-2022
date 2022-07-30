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
const supportLevelAnchor = computed(() => props.sponsors?.[0]?.rank)
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
    v-if="sponsors"
    class="mb-[5rem] text-sponsor"
  >
    <h2
      :id="supportLevelAnchor"
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
        :key="sponsor.name"
        :class="sponsorCardClass"
      >
        <SponsorLogo
          :sponsor="sponsor"
        />
        <h3 class="mt-[1.5rem] mb-[0.625rem] font-[1.5rem] font-bold text-sponsor">{{ sponsor.name_jp }}</h3>
        <a
          :href="sponsor.corporate_url"
          target="_blank"
          rel="noopener"
        >{{ sponsor.corporate_url }}</a>
        <p
          v-if="sponsor.bio"
          class="mt-[1.5rem]"
        >
          {{ sponsor.bio }}
        </p>
      </div>
    </div>
  </div>
</template>
