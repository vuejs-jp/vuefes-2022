<template>
  <section class="pb-7">
    <div class="relative mx-auto max-w-1920">
      <div class="px-5">
        <div
          v-if="!SHOW_ANIMATION"
          class="aspect-[650/384] mb-[6.23vw] md:aspect-[782/384] lg:aspect-auto lg:mb-9"
        >
          <picture>
            <source
              srcset="/img/kv_solid_lg.png"
              media="(min-width: 981px)"
            >
            <source
              srcset="/img/kv_solid_md.png"
              media="(min-width: 771px)"
            >
            <img
              class="mx-auto"
              src="/img/kv_solid_sm.png"
              :alt="conferenceTitle"
              width="1178"
              height="384"
            >
          </picture>
        </div>
        <div
          v-if="SHOW_ANIMATION"
          class="aspect-[648/384] mx-auto mb-[6.23vw] max-w-1176 md:aspect-[780/384] lg:aspect-[1176/384] lg:mb-9"
        >
          <top-animation />
        </div>
        <div class="flex flex-wrap gap-x-8 gap-y-2.5 justify-center items-baseline mb-8 md:mb-16">
          <h1
            class="text-[7.01vw] font-extrabold leading-none text-center text-vue-blue lg:text-65"
          >
            {{ conferenceTitle }}
          </h1>
          <p
            class="text-[3.9vw] text-center text-vue-blue lg:text-40"
          >
            {{ eventDate }}
          </p>
        </div>
        <p
          v-if="LIVE_YOUTUBE"
          class="text-[5.7vw] font-bold text-center text-vue-blue md:text-40"
        >
          {{ streamingNow }}
        </p>
        <div class="flex flex-wrap gap-x-[3.125rem] gap-y-4 justify-center mt-4 mb-12 md:gap-y-7 lg:gap-y-7 lg:mt-6">
          <a
            v-for="track in tracks"
            :key="track.id"
            :href="track.url"
            target="_blank"
            rel="noopener"
            class="hover:opacity-80 transition-opacity"
          >
            <div
              class="flex flex-col justify-center w-[67vw] max-w-480 h-16 font-bold rounded-full shadow-card md:w-120 md:h-27 lg:w-120 lg:h-27"
              :class="track.bgClass"
            >
              <p class="text-base font-bold text-center text-white md:text-2xl lg:text-2xl">{{ track.name }}</p>
              <p class="text-sm font-normal text-center text-white md:text-xl lg:text-xl">{{ track.hashTag }}</p>
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
          :srcset="`${urlBasePath}/img/wave_lg.png`"
          media="(min-width: 981px)"
        >
        <source
          :srcset="`${urlBasePath}/img/wave_md.png`"
          media="(min-width: 771px)"
        >
        <img
          class="absolute bottom-0 left-1/2 -z-10 opacity-40 -translate-x-1/2"
          :src="`${urlBasePath}/img/wave_sm.png`"
          alt=""
        >
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import TweetButtonField from '~/components/forms/customize/TweetButtonField.vue'
import { conferenceTitle, eventDate, streamingNow, tracks, tweetLabel, tweetUrl } from '~/utils/constants'
import { LIVE_YOUTUBE, SHOW_ANIMATION } from '~/utils/feature.constants'
import TopAnimation from '~/components/TopAnimation.vue'

const tweet = () => {
  window.open(tweetUrl, '__blank')
}
</script>
