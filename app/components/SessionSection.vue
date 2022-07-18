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
  <section class="px-5 mx-auto max-w-[900px] text-vue-blue">
    <span class="inline-block py-1 px-4 mb-[15px] text-sm font-extrabold text-white bg-vue-blue md:text-lg">
      {{ speakerInfo.session.time }}min
    </span>
    <h3 class="mb-[40px] text-xl font-bold leading-8 md:mb-[50px] md:text-[25px]">
      {{ speakerInfo.session.title }}
    </h3>
    <p class="mb-[40px] text-base leading-8 md:mb-[100px] md:text-lg md:leading-9">
      {{ speakerInfo.session.description }}
    </p>
    <div class="p-5 border border-vue-blue md:flex md:p-[50px] ">
      <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-[60px] md:mr-[50px] md:text-[22px]">
        Speaker Profile
      </p>
      <div>
        <div class="mb-[30px] md:flex md:mb-0">
          <img
            class="mx-auto mb-[20px] w-[110px] h-[110px] md:mr-[30px] md:ml-0 md:w-[150px] md:h-[150px]"
            alt="thumbnail"
            :src="speakerInfo.image"
          >
          <div class="text-center md: md:pt-[20px] md:text-left">
            <p class="mb-[10px] text-[11px] opacity-60 md:text-sm">
              {{ speakerInfo.company }}
            </p>
            <p class="mb-[20px] text-[15px] font-bold md:text-xl">
              {{ speakerInfo.name_jp }}
            </p>
            <span class="flex justify-center md:justify-start">
              <a
                :aria-label="`${speakerInfo.name_jp}のTwitterアカウント`"
                target="_blank"
                class="mr-[20px]"
                :href="`https://twitter.com/${speakerInfo.twitter}`"
              >
                <img
                  class="w-6 md:w-[22px]"
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
                  class="w-6 md:w-[22px]"
                  src="/icon/github_logo-invert.svg"
                  alt="Githubのlogo"
                >
              </a>
            </span>
          </div>
        </div>
        <p class="text-sm leading-7 md:text-base md:leading-8">
          {{ speakerInfo.bio }}
        </p>
      </div>
    </div>
    <div class="mt-[50px] mb-[80px] text-center md:mt-[100px] md:mb-[160px]">
      <LinkButtonField
        link="/"
        title-label="トップに戻る"
        :is-external-link="false"
      />
    </div>
  </section>
</template>
