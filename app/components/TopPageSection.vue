<template>
  <section class="container mx-auto max-w-full">
    <div class="flex flex-col justify-center items-center py-12 px-3 md:px-4 bg-tsuchi">
      <img
        :src="`/img/kv_solid.svg`"
        :alt="conferenceTitle"
        width="800"
      >
      <div class="relative w-full h-80 lg:w-11/12">
        <div class="flex absolute z-50 flex-col justify-center items-center mx-auto w-full top-30">
          <h1 class="mx-auto mt-9 mb-2.5 text-3xl font-extrabold leading-10 text-center md:mt-12 lg:text-4xl text-vue-blue">
            {{ conferenceTitle }}
          </h1>
          <p class="m-0 mx-auto text-4xl font-extrabold leading-normal text-center text-vue-blue">
            {{ eventDate }}
          </p>
          <div class="py-10 mx-auto text-center">
            <TweetButtonField
              :title-label="tweetLabel"
              @onClick="tweet"
            />
          </div>
        </div>
        <div class="block absolute top-32 mx-auto w-48 lg:top-16 lg:left-0">
          <img
            :src="`/img/wave_1.png`"
            :alt="conferenceTitle"
            :width="!$device.isMobileOrTablet ? 1160 : 960"
            class="max-w-none mix-blend-multiply"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import TweetButtonField from '~/components/forms/customize/TweetButtonField.vue'

import { conferenceTitle, eventDate, tweetLabel, tweetUrl } from '~/utils/constants'

const tweet = () => {
  window.open(tweetUrl, '__blank')
}
</script>
