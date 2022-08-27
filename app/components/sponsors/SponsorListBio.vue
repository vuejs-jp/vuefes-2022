<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import { sponsorSupportLevelTitle } from '~/utils/sponsors.constants'
import { ISponsor } from '~~/app/types/sponsors'

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
    return 'grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3'
  }
  return 'grid-cols-2 gap-4 md:grid-cols-3 md:gap-7 lg:grid-cols-4'
})
</script>

<template>
  <div class="mb-12 text-vue-blue md:mb-16">
    <h2
      :id="supportLevelAnchor"
      class="mb-6 font-yu-gothic text-xl font-bold md:text-3xl"
    >
      {{ supportLevelTitle }}
    </h2>
    <div
      class="grid"
      :class="sponsorRankClass"
    >
      <div
        v-for="sponsor in sponsors"
        :id="sponsor.name_en"
        :key="sponsor.name"
        class="mb-2 md:mb-7"
      >
        <a
          :href="sponsor.corporate_url"
          target="_blank"
          rel="noopener"
        >
          <img
            :src="sponsor.image.src"
            :alt="sponsor.name_jp"
            loading="lazy"
            class="aspect-video mb-5 w-full"
          >
        </a>
        <h3 class="text-lg font-bold leading-5 md:text-2xl">{{ sponsor.name_jp }}</h3>
        <a
          :href="sponsor.corporate_url"
          target="_blank"
          rel="noopener"
          class="inline-block mb-4 text-sm underline break-all hover:opacity-40 transition md:text-lg"
        >{{ sponsor.corporate_url }}</a>
        <!-- eslint-disable vue/no-v-html -->
        <p
          v-if="sponsor.bio"
          class="text-sm leading-6 break-all md:text-lg md:leading-8"
          v-html="sponsor.bio"
        />
        <!-- eslint-enable vue/no-v-html -->
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep .link {
  @apply underline hover:opacity-40 transition
}
</style>
