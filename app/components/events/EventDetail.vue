<script setup lang="ts">
import SpeakerProfiles from '~/components/speakers/SpeakerProfiles.vue'
import PageSubTitle from '~/components/PageSubTitle.vue'
import type { CustomPropType } from '~/types/shims-vue'
import { IEvent } from '~/types/events'

const props = defineProps({
  event: {
    type: Object as CustomPropType<IEvent>,
    required: true,
  }
})

const eventInfo = computed(() => props.event)
</script>

<template>
  <div
    :id="eventInfo.id"
    class="pt-[17vw] mt-[-17vw] md:pt-32 md:-mt-32"
  >
    <PageSubTitle class="mb-7 md:mb-14">
      {{ eventInfo.title }}
    </PageSubTitle>
    <div
      v-if="eventInfo.logoList.length"
      class="flex mx-auto mb-14 max-w-400"
    >
      <div
        v-for="(logo, index) in eventInfo.logoList"
        :key="index"
        class="mr-10 last:mr-0"
      >
        <template v-if="logo.link">
          <a
            :href="logo.link"
            target="_blank"
            rel="noopener"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="aspect-square w-full"
            >
          </a>
        </template>
        <template v-else>
          <img
            :src="logo.src"
            :alt="logo.alt"
            class="object-contain w-full"
          >
        </template>
      </div>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="mb-14 text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8"
      v-html="eventInfo.description"
    />
    <!-- eslint-enable vue/no-v-html -->
    <template v-if="eventInfo.isShowSpeakerProfile">
      <SpeakerProfiles :speaker-profiles="eventInfo.speakerProfileList" />
    </template>
  </div>
</template>
