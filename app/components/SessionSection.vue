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
  <section class="mx-auto max-w-[43.75rem] px-5 pb-20 text-vue-blue">
    <span class="bg-vue-blue py-1 px-2 text-sm font-extrabold leading-7 text-white">
      {{ speakerInfo.session.time }}min
    </span>
    <h3 class="mt-3 mb-7 text-lg font-bold leading-8 text-vue-blue lg:max-w-[45rem] lg:text-lg">
      {{ speakerInfo.session.title }}
    </h3>
    <p class="mb-4 text-sm leading-7 lg:mb-8 lg:leading-8">
      {{ speakerInfo.session.description }}
    </p>
    <div class="space-y-6 border border-vue-blue p-6 md:grid md:grid-cols-7 md:p-10">
      <p class="h-1/2 text-center text-[1.25rem] font-extrabold md:col-span-2 md:mt-[-1.5rem] md:flex md:items-center">
        Speaker Profile
      </p>
      <div class="md:col-span-5">
        <div class="mb-6 md:flex md:space-x-6">
          <img
            class="mx-auto h-32 w-32 md:mx-0"
            alt="thumbnail"
            :src="speakerInfo.image"
          >
          <div class="text-center md:text-left">
            <p class="mt-3 text-sm opacity-60 md:mt-2 md:text-[0.25rem]">
              {{ speakerInfo.company }}
            </p>
            <p class="mt-2 text-lg font-bold text-vue-blue md:text-sm">
              {{ speakerInfo.name_jp }}
            </p>
            <span class="mx-auto mt-3 mb-6 flex justify-center space-x-5 md:mt-6 md:justify-start md:space-x-3">
              <a
                :aria-label="`${speakerInfo.name_jp}のTwitterアカウント`"
                target="_blank"
                :href="`https://twitter.com/${speakerInfo.twitter}`"
              >
                <img
                  class="w-8 md:w-5"
                  src="/icon/twitter_logo.svg"
                  alt="Twitterのlogo"
                >
              </a>
              <a
                :aria-label="`${speakerInfo.name_jp}のGitHubアカウント`"
                target="_blank"
                :href="`https://github.com/${speakerInfo.github}`"
              >
                <img
                  class="w-8 md:w-5"
                  src="/icon/github_logo-invert.svg"
                  alt="Githubのlogo"
                >
              </a>
            </span>
          </div>
        </div>
        <p class="mb-4 text-sm leading-6 lg:mb-8">
          {{ speakerInfo.bio }}
        </p>
      </div>
    </div>
    <div class="mt-12 text-center lg:mt-16">
      <LinkButtonField
        link="/"
        title-label="トップに戻る"
        :is-external-link="false"
      />
    </div>
  </section>
</template>
