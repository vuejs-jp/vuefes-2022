<script setup lang="ts">
import { CustomPropType } from '~/types/shims-vue'

interface ISpeaker {
  id: string
  name_jp: string
  name_jp_kana: string
  name_en: string
  bio: string
  session: string
  title: string
  company: string
  twitter: string
  facebook: string
  connpass: string
  github: string
  related_url: string
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
      00min
    </span>
    <h3 class="mt-3 mb-7 text-lg font-bold leading-7 text-vue-blue lg:max-w-[45rem] lg:text-lg lg:leading-8">
      {{ props.speaker.title }}
    </h3>
    <p class="mb-4 text-sm leading-7 lg:mb-8 lg:leading-8">
      {{ props.speaker.session }}
    </p>
    <div class="grid grid-cols-7 p-10 border border-vue-blue">
      <p class="flex col-span-2 items-center mt-[-1.5rem] h-1/2 text-[1.25rem] font-extrabold lg:-mt-14">
        Speaker Profile
      </p>
      <div class="col-span-5">
        <div class="flex mb-6 space-x-6">
          <img
            class="w-32 h-32"
            alt="thumbnail"
            :src="props.speaker.image"
          >
          <div>
            <p class="mt-3 text-sm opacity-60 md:mt-2 lg:mt-1 lg:text-[0.25rem]">
              {{ props.speaker.company }}
            </p>
            <p class="mt-2 text-lg font-bold text-vue-blue lg:text-sm">
              {{ props.speaker.name_jp }}
            </p>
            <span class="flex mt-6 space-x-3">
              <img
                class="w-5"
                src="/icon/twitter_logo.svg"
                alt="Twitterのlogo"
              >
              <img
                class="w-5"
                src="/icon/github_logo-invert.svg"
                alt="Twitterのlogo"
              >
            </span>
          </div>
        </div>
        <p class="mb-4 text-sm leading-6 lg:mb-8">
          {{ props.speaker.bio }}
        </p>
      </div>
    </div>
  </section>
</template>