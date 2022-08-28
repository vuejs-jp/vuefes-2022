<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import { ISpeakerProfile } from '~/types/interface'

const props = defineProps({
  speakerProfile: {
    type: Object as CustomPropType<ISpeakerProfile>,
    required: true,
  }
})

const speakerInfo = computed(() => props.speakerProfile)
</script>

<template>
  <div>
    <div class="mb-5 md:flex md:mb-0">
      <img
        class="mx-auto mb-5 w-28 h-28 md:mr-8 md:ml-0 md:w-[9.375rem] md:h-[9.375rem]"
        :alt="`${speakerInfo.name}の写真`"
        :src="speakerInfo.image"
      >
      <div class="text-center md: md:pt-5 md:text-left">
        <p class="text-[0.6875rem] opacity-60 md:text-sm">
          {{ speakerInfo.title }}
        </p>
        <p class="mb-4 text-[0.9375rem] font-bold md:text-xl">
          {{ speakerInfo.name }}
        </p>
        <span class="flex justify-center md:justify-start">
          <template v-if="speakerInfo.twitter">
            <a
              :aria-label="`${speakerInfo.name}のTwitterアカウント`"
              target="_blank"
              rel="noreferrer"
              class="flex mr-5"
              :href="`https://twitter.com/${speakerInfo.twitter}`"
            >
              <img
                class="w-6"
                src="/icon/twitter_logo.svg"
                alt="Twitterのlogo"
              >
            </a>
          </template>
          <template v-if="speakerInfo.github">
            <a
              :aria-label="`${speakerInfo.name}のGitHubアカウント`"
              target="_blank"
              rel="noreferrer"
              :href="`https://github.com/${speakerInfo.github}`"
            >
              <img
                class="w-6"
                src="/icon/github_logo-invert.svg"
                alt="Githubのlogo"
              >
            </a>
          </template>
        </span>
      </div>
    </div>
    <!-- eslint-disable vue/no-v-html -->
    <p
      class="text-sm leading-7 md:text-base md:leading-8"
      v-html="speakerInfo.description"
    />
  </div>
</template>
