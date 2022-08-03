<script setup lang="ts">
import { CustomPropType } from '~/types/shims-vue'
import LinkButtonField from '~/components/forms/LinkButtonField'
import { ISpeaker } from '~/types/interface'

const props = defineProps({
  speaker: {
    type: Object as CustomPropType<ISpeaker>,
    required: true
  }
})

const speakerInfo = computed(() => props.speaker)
</script>
<template>
  <section class="px-5 mx-auto max-w-[56.25rem] text-vue-blue">
    <span class="inline-block py-1 px-4 mb-2.5 text-sm font-extrabold text-white bg-vue-blue md:text-lg">
      {{ speakerInfo.session.time }}min
    </span>
    <h3 class="mb-5 text-xl font-bold leading-8 md:text-[1.5625rem]">
      {{ speakerInfo.session.title }}
    </h3>
    <p class="mb-8 text-base leading-8 md:mb-20 md:text-lg md:leading-9">
      {{ speakerInfo.session.description }}
    </p>
    <div class="p-5 border border-vue-blue md:flex md:p-[3.125rem]">
      <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-[3.75rem] md:mr-[3.125rem] md:text-[1.375rem]">
        Speaker Profile
      </p>
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
            </span>
          </div>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <p
          class="text-sm leading-7 md:text-base md:leading-8"
          v-html="speakerInfo.description"
        />
        <!-- eslint-enaable vue/no-v-html -->
      </div>
    </div>
    <div class="mt-12 mb-20 text-center md:mt-24 md:mb-40">
      <LinkButtonField
        link="/"
        title-label="トップに戻る"
        :is-external-link="false"
      />
    </div>
  </section>
</template>
