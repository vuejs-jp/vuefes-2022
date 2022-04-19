<template>
  <section class="pb-7">
    <div class="relative pb-[18vw] mx-auto max-w-[1920px] md:pb-[15vw] lg:pb-[11vw]">
      <div class="px-5">
        <top-animation />
        <h1
          class="mb-[2.6vw] text-[7.01vw] font-extrabold leading-none text-center text-vue-blue lg:mb-2.5 lg:text-[4.0625rem]"
        >
          {{ conferenceTitle }}
        </h1>
        <p
          class="mb-[6.49vw] text-[3.9vw] text-center text-vue-blue lg:mb-[3.125rem] lg:text-[2.5rem]"
        >
          {{ eventDate }}
        </p>
        <div class="text-right md:text-center">
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
          class="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          src="/img/wave_sm.png"
          alt=""
        >
      </picture>
    </div>
  </section>
</template>

<script setup lang="ts">
import TweetButtonField from '~/components/forms/customize/TweetButtonField.vue'
import { conferenceTitle, eventDate, tweetLabel, tweetUrl } from '~/utils/constants'
import TopAnimation from '~/components/TopAnimation.vue'

const tweet = () => {
  window.open(tweetUrl, '__blank')
}
</script>
