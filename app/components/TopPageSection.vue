<template>
  <section class="py-7">
    <div class="relative pb-[18vw] mx-auto max-w-[1920px] md:pb-[15vw] lg:pb-[11vw]">
      <div class="px-5">
        <img
          class="mx-auto mb-[6.23vw] lg:mb-9"
          src="/img/kv_solid_3x.png"
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
import { conferenceTitle, eventDate, tweetLabel, tweetUrl } from '~/utils/constants'

const waveImageSrc = ref<string>('')

const tweet = () => {
  window.open(tweetUrl, '__blank')
}

// 画面サイズで波の画像の読み込み先を切り替え
onMounted((): void => {
  const windowSize = window.innerWidth
  if (windowSize <= 770) {
    waveImageSrc.value = '/img/wave_sm.png'
    return
  }
  if (770 < windowSize && windowSize <= 980) {
    waveImageSrc.value = '/img/wave_md.png'
    return
  }
  if (980 < windowSize) {
    waveImageSrc.value = '/img/wave_lg.png'
    return
  }
})
</script>
