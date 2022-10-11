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
        <p class="text-[3.9vw] font-bold text-center text-vue-blue lg:text-[2.5rem]">
          {{ streamingNow }}
        </p>
        <div class="flex flex-wrap gap-x-[3.125rem] justify-center lg:my-[3.125rem]">
          <a
            href="#"
            target="_blank"
            rel="noopener"
          >
            <div
              class="flex flex-col gap-[0.6875rem] justify-center font-bold bg-track-a rounded-full lg:w-[30rem] lg:h-[6.75rem]"
            >
              <p class="font-bold text-center text-white lg:text-2xl">{{ medpeerTrack }}</p>
              <p class="font-bold text-center text-white lg:text-lg">{{ medpeerHashTag }}</p>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener"
          >
            <div
              class="flex flex-col gap-[0.6875rem] justify-center font-bold bg-track-b rounded-full lg:w-[30rem] lg:h-[6.75rem]"
            >
              <p class="font-bold text-center text-white lg:text-2xl">{{ futureTrack }}</p>
              <p class="font-bold text-center text-white lg:text-lg">{{ futureHashTag }}</p>
            </div>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener"
          >
            <div
              class="flex flex-col gap-[0.6875rem] justify-center font-bold bg-track-c rounded-full lg:w-[30rem] lg:h-[6.75rem]"
            >
              <p class="font-bold text-center text-white lg:text-2xl">{{ cloudsignTrack }}</p>
              <p class="font-bold text-center text-white lg:text-lg">{{ cloudsignHashTag }}</p>
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
import { conferenceTitle, eventDate, streamingNow, medpeerTrack, medpeerHashTag, futureTrack, futureHashTag, cloudsignTrack, cloudsignHashTag, tweetLabel, tweetUrl } from '~/utils/constants'
import TopAnimation from '~/components/TopAnimation.vue'

const tweet = () => {
  window.open(tweetUrl, '__blank')
}
</script>
