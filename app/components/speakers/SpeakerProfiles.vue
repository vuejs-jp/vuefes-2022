<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import { ISpeakerProfile } from '~/types/interface'

const props = defineProps({
  speakerProfiles: {
    type: Array as CustomPropType<ISpeakerProfile[]>,
    required: true,
  }
})
</script>

<template>
  <div class="p-5 text-vue-blue border border-vue-blue md:flex md:p-12.5">
    <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-15 md:mr-12.5 md:text-22">
      Speaker Profile<template v-if="speakerProfiles.length > 1">s</template>
    </p>
    <div>
      <div
        v-for="speaker in speakerProfiles"
        :key="speaker.name"
        class="mb-8 last:mb-0"
      >
        <div class="mb-5 md:flex md:mb-0">
          <img
            class="mx-auto mb-5 w-28 h-28 md:mr-8 md:ml-0 md:w-37.5 md:h-37.5"
            :alt="`${speaker.name}の写真`"
            :src="speaker.image"
          >
          <div class="text-center md: md:pt-5 md:text-left">
            <p class="text-11 opacity-60 md:text-sm">
              {{ speaker.title }}
            </p>
            <p class="mb-4 text-15 font-bold md:text-xl">
              {{ speaker.name }}
            </p>
            <span class="flex justify-center md:justify-start">
              <a
                v-if="speaker.twitter"
                :aria-label="`${speaker.name}のTwitterアカウント`"
                target="_blank"
                rel="noopener"
                class="flex mr-5"
                :href="`https://twitter.com/${speaker.twitter}`"
              >
                <img
                  class="w-6"
                  src="/icon/twitter_logo.svg"
                  alt="Twitterのlogo"
                >
              </a>
              <a
                v-if="speaker.github"
                :aria-label="`${speaker.name}のGitHubアカウント`"
                target="_blank"
                rel="noopener"
                :href="`https://github.com/${speaker.github}`"
              >
                <img
                  class="w-6"
                  src="/icon/github_logo-invert.svg"
                  alt="Githubのlogo"
                >
              </a>
            </span>
          </div>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <p
          class="text-xs leading-6 md:text-base md:leading-7"
          v-html="speaker.description"
        />
        <!-- eslint-enaable vue/no-v-html -->
      </div>
    </div>
  </div>
</template>
