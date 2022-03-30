<template>
  <section class="pb-7">
    <div class="relative pb-[18vw] mx-auto max-w-[1920px] md:pb-[15vw] lg:pb-[11vw]">
      <div class="px-5">
        <img
          class="mx-auto mb-[6.23vw] lg:mb-9"
          :src="topImageSrc"
          :alt="conferenceTitle"
          width="1178"
        >
        <h1
          class="mb-[2.6vw] text-[7.01vw] font-extrabold leading-none text-center text-vue-blue lg:mb-2.5 lg:text-[4.0625rem]"
        >
          {{ conferenceTitle }}
        </h1>
        <p
          class="mb-[6.49vw] text-[3.9vw] font-extrabold text-center text-vue-blue lg:mb-[3.125rem] lg:text-[2.5rem]"
        >
          {{ eventDate }}
        </p>
        <div class="text-right md:text-center">
          <TweetButtonField
            :title-label="tweetLabel"
            @onClick="tweet"
          />
        </div>
      </div>
      <img
        class="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
        :src="waveImageSrc"
        :alt="conferenceTitle"
      >
    </div>
  </section>
</template>

<script setup lang="ts">
import TweetButtonField from '~/components/forms/customize/TweetButtonField.vue'
import { getTopImage, getWaveImage } from '~/services/showImages'
import { conferenceTitle, eventDate, tweetLabel, tweetUrl } from '~/utils/constants'

const topImageSrc = ref<string>('')
const waveImageSrc = ref<string>('')

const tweet = () => {
  window.open(tweetUrl, '__blank')
}

onMounted((): void => {
  Promise.all([
    topImageSrc.value = getTopImage(),
    waveImageSrc.value = getWaveImage()
  ])
})
</script>
