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
  <section class="px-5 mx-auto max-w-900 text-vue-blue">
    <span class="inline-block py-1 px-4 mb-2.5 text-sm font-extrabold text-white bg-vue-blue md:text-lg">
      {{ speakerInfo.session.time }}min
    </span>
    <h2 class="mb-5 text-xl font-bold leading-8 md:mb-10 md:text-25">
      {{ speakerInfo.session.title }}
    </h2>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="mb-8 text-sm leading-7 md:mb-20 md:text-lg md:leading-8 description"
      v-html="speakerInfo.session.description"
    />
    <!-- eslint-enaable vue/no-v-html -->
    <div class="p-5 border border-vue-blue md:flex md:p-12.5">
      <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-15 md:mr-12.5 md:text-22">
        Speaker Profile
      </p>
      <div>
        <div class="mb-5 md:flex md:mb-0">
          <img
            class="mx-auto mb-5 w-28 h-28 md:mr-8 md:ml-0 md:w-37.5 md:h-37.5"
            :alt="`${speakerInfo.name}の写真`"
            :src="speakerInfo.image"
          >
          <div class="text-center md: md:pt-5 md:text-left">
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
    <div class="mt-12 mb-20 text-center md:mt-24 md:mb-40">
      <LinkButtonField
        link="/"
        title-label="トップに戻る"
        :is-external-link="false"
      />
    </div>
  </section>
</template>

<style scoped>
.description ::v-deep ul {
  list-style: disc;
  margin: revert;
  padding: revert;
}

.description ::v-deep p + p {
  margin-top: 2em;
}
</style>