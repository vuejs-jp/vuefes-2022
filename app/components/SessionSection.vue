<script setup lang="ts">
import { CustomPropType } from '~/types/shims-vue'
import LinkButtonField from '~/components/forms/LinkButtonField'

interface ISession {
  id: string
  title: string
  description: string
  area: string
  type: string
  started_at: string
  ended_at: string
  time: string
  speaker: string
  tags?: string
  slide_url?: string
  fortee_url?: string
  youtube_url?: string
}
interface ISpeaker {
  id: string
  name_jp: string
  name_jp_kana: string
  name_en: string
  bio: string
  session: ISession
  title: string
  company: string
  twitter?: string
  facebook?: string
  connpass?: string
  github?: string
  related_url?: string
  image: string
}

const props = defineProps({
  speaker: {
    type: Object as CustomPropType<ISpeaker>,
    required: true
  }
})
</script>
<template>
  <section class="px-5 pb-20 mx-auto max-w-[43.75rem] text-vue-blue">
    <span class="py-1 px-2 text-sm font-extrabold leading-7 text-white bg-vue-blue">
      {{ props.speaker.session.time }}min
    </span>
    <h3 class="mt-3 mb-7 text-lg font-bold leading-8 text-vue-blue lg:max-w-[45rem] lg:text-lg">
      {{ props.speaker.session.title }}
    </h3>
    <p class="mb-4 text-sm leading-7 lg:mb-8 lg:leading-8">
      {{ props.speaker.session.description }}
    </p>
    <div class="p-6 space-y-6 border border-vue-blue md:grid md:grid-cols-7 md:p-10">
      <p class="h-1/2 text-[1.25rem] font-extrabold text-center md:flex md:col-span-2 md:items-center md:mt-[-1.5rem]">
        Speaker Profile
      </p>
      <div class="md:col-span-5">
        <div class="mb-6 md:flex md:space-x-6">
          <img
            class="mx-auto w-32 h-32 md:mx-0"
            alt="thumbnail"
            :src="props.speaker.image"
          >
          <div class="text-center md:text-left">
            <p class="mt-3 text-sm opacity-60 md:mt-2 md:text-[0.25rem]">
              {{ props.speaker.company }}
            </p>
            <p class="mt-2 text-lg font-bold text-vue-blue md:text-sm">
              {{ props.speaker.name_jp }}
            </p>
            <span class="flex justify-center mx-auto mt-3 mb-6 space-x-5 md:justify-start md:mt-6 md:space-x-3">
              <a
                target="_blank"
                :href="`https://twitter.com/${props.speaker.twitter}`"
              >
                <img
                  class="w-8 md:w-5"
                  src="/icon/twitter_logo.svg"
                  alt="Twitterのlogo"
                >
              </a>
              <a
                target="_blank"
                :href="`https://github.com/${props.speaker.github}`"
              >
                <img
                  class="w-8 md:w-5"
                  src="/icon/github_logo-invert.svg"
                  alt="Twitterのlogo"
                >
              </a>
            </span>
          </div>
        </div>
        <p class="mb-4 text-sm leading-6 lg:mb-8">
          {{ props.speaker.bio }}
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