<script setup lang="ts">
import SubTitle from '~/components/SubTitle.vue'
import SpeakerProfile from '~/components/speakers/SpeakerProfile.vue'
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
  <div>
    <SubTitle class="mb-14">
      {{ eventInfo.title }}
    </SubTitle>
    <div
      v-if="eventInfo.logoList.length"
      class="flex mx-auto mb-14 max-w-[400px]"
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
            rel="noreferrer"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              loading="lazy"
              class="object-contain w-full"
            >
          </a>
        </template>
        <template v-else>
          <img
            :src="logo.src"
            :alt="logo.alt"
            loading="lazy"
            class="object-contain w-full"
          >
        </template>
      </div>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <div class="mb-14">
      <p
        class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8"
        v-html="eventInfo.description"
      />
    </div>
    <template v-if="eventInfo.isShowSpeakerProfile">
      <div class="p-5 border border-vue-blue md:flex md:p-[3.125rem]">
        <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-[3.75rem] md:mr-[3.125rem] md:text-[1.375rem]">
          Speaker Profile
        </p>
        <div>
          <div
            v-for="(speakerProfile, index) in eventInfo.speakerProfileList"
            :key="index"
            class="mb-14 last:mb-0"
          >
            <SpeakerProfile
              :speaker-profile="speakerProfile"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
