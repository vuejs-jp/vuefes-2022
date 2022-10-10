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
  <div class="border border-vue-blue p-5 md:flex md:p-12.5">
    <p class="mb-5 shrink-0 text-center text-sm font-extrabold md:mt-15 md:mr-12.5 md:text-22">
      Speaker Profile
    </p>
    <div>
      <div>
        <div class="mb-5 md:mb-0 md:flex">
          <img
            class="mx-auto mb-5 h-28 w-28 md:mr-8 md:ml-0 md:h-37.5 md:w-37.5"
            :alt="`${speakerInfo.name}の写真`"
            :src="speakerInfo.image"
          >
          <div class="md: text-center md:pt-5 md:text-left">
            <p class="text-11 opacity-60 md:text-sm">
              {{ speakerInfo.title }}
            </p>
            <p class="mb-4 text-15 font-bold md:text-xl">
              {{ speakerInfo.name }}
            </p>
            <span class="flex justify-center md:justify-start">
              <a
                v-if="speakerInfo.twitter"
                :aria-label="`${speakerInfo.name}のTwitterアカウント`"
                target="_blank"
                rel="noopener"
                class="mr-5 flex"
                :href="`https://twitter.com/${speakerInfo.twitter}`"
              >
                <img
                  class="w-6"
                  src="/icon/twitter_logo.svg"
                  alt="Twitterのlogo"
                >
              </a>
              <a
                v-if="speakerInfo.github"
                :aria-label="`${speakerInfo.name}のGitHubアカウント`"
                target="_blank"
                rel="noopener"
                :href="`https://github.com/${speakerInfo.github}`"
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
          v-html="speakerInfo.description"
        />
        <!-- eslint-enaable vue/no-v-html -->
      </div>
    </div>
  </div>
</template>
