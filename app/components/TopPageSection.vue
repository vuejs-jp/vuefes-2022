<template>
  <section class="pb-7">
    <div class="relative mx-auto max-w-[1920px]">
      <div class="px-5">
        <div
          class="aspect-[648/384] mx-auto mb-[6.23vw] max-w-[1176px] md:aspect-[780/384] lg:aspect-[1176/384] lg:mb-9"
        >
          <top-animation />
        </div>
        <div class="flex flex-wrap gap-x-8 gap-y-2.5 justify-center items-baseline mb-16">
          <h1
            class="text-[7.01vw] font-extrabold leading-none text-center text-vue-blue lg:text-[4.0625rem]"
          >
            {{ conferenceTitle }}
          </h1>
          <p
            class="text-[3.9vw] text-center text-vue-blue lg:text-[2.5rem]"
          >
            {{ eventDate }}
          </p>
        </div>
        <p class="text-[5.7vw] font-bold text-center text-vue-blue lg:text-[2.5rem]">
          {{ streamingNow }}
        </p>
        <div class="flex flex-wrap gap-x-[3.125rem] gap-y-7 justify-center mt-8 mb-24 lg:my-[3.125rem]">
          <a
            v-for="track in tracks"
            :key="track.id"
            :href="track.url"
            target="_blank"
            rel="noopener"
            class="hover:opacity-80 transition-opacity"
          >
            <div
              class="flex flex-col gap-[0.4875rem] justify-center w-[80vw] max-w-[30rem] h-32 min-h-[20vh] font-bold rounded-full md:w-[30rem] md:h-[6.75rem] lg:w-[30rem] lg:h-[6.75rem]"
              :class="track.bgClass"
            >
              <p class="text-2xl font-bold text-center text-white lg:text-2xl">{{ track.name }}</p>
              <p class="text-xl font-bold text-center text-white lg:text-lg">{{ track.hashTag }}</p>
            </div>
          </a>
        </div>
        <div class="text-right lg:mb-4">
          <TweetButtonField
            :title-label="tweetLabel"
            @on-click="tweet"
          />
        </div>
      </div>
      <picture>
        <source
          srcset="/img/wave_lg.png"
          media="(min-width: 981px)"
        >
        <source
          srcset="/img/wave_md.png"
          media="(min-width: 771px)"
        >
        <img
          class="absolute bottom-0 left-1/2 -z-10 opacity-40 -translate-x-1/2"
          src="/img/wave_sm.png"
          alt=""
        >
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import TweetButtonField from '~/components/forms/customize/TweetButtonField.vue'
import { conferenceTitle, eventDate, streamingNow, tracks, medpeerTrack, medpeerHashTag, futureTrack, futureHashTag, cloudsignTrack, cloudsignHashTag, tweetLabel, tweetUrl } from '~/utils/constants'
import TopAnimation from '~/components/TopAnimation.vue'

const tweet = () => {
  window.open(tweetUrl, '__blank')
}
</script>
