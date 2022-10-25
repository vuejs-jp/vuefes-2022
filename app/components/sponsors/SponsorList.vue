<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import SponsorLogo from '~/components/sponsors/SponsorLogo.vue'
import { sponsorSupportLevelTitle } from '~/utils/sponsors.constants'
import { ISponsor } from '~/types/sponsors'

const props = defineProps({
  sponsors: {
    type: Array as CustomPropType<ISponsor[]>,
    required: true,
  }
})

const supportLevelTitle = computed(() => {
  return sponsorSupportLevelTitle(props.sponsors?.[0]?.rank)
})

const sponsorCardClass = computed(() => {
  const rank = props.sponsors?.[0]?.rank
  if (rank === 'platinum') {
    return 'w-[78vw] md:w-[43%] lg:w-[31%] lg:max-w-[368px] md:mb-[4%]'
  }
  return 'w-[36vw] md:w-[27%] lg:w-[22.5%] lg:max-w-[266px] md:mb-[4%] lg:mb-[3%]'
})

</script>

<template>
  <div
    v-if="sponsors"
    class="mb-10 last:mb-0 md:mb-20"
  >
    <h3 class="mb-4 font-yu-gothic text-xl font-bold text-center text-vue-blue md:mb-10 md:text-3xl">{{ supportLevelTitle }}</h3>
    <div
      class="flex flex-wrap gap-[5.33vw] justify-center px-5 md:gap-[4%] lg:gap-[3%]"
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
