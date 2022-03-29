<template>
  <section class="py-7">
    <div class="px-5">
      <img
        class="mx-auto mb-6 lg:mb-9"
        src="/img/kv_solid_3x.png"
        :alt="conferenceTitle"
        width="1178"
      >
      <h1 class="mb-2.5 text-2xl font-extrabold text-center text-vue-blue md:text-5xl lg:text-6xl">
        {{ conferenceTitle }}
      </h1>
      <p
        class="mb-[25px] font-extrabold text-center text-vue-blue md:mb-14 md:text-3xl lg:text-4xl"
      >
        {{ eventDate }}
      </p>
      <div class="text-center">
        <TweetButtonField
          :title-label="tweetLabel"
          @onClick="tweet"
        />
      </div>
    </div>
    <img
      :src="waveImageSrc"
      :alt="conferenceTitle"
    >
  </section>
</template>

<script setup lang="ts">
import TweetButtonField from '~/components/forms/customize/TweetButtonField.vue'
import { conferenceTitle, eventDate, tweetLabel, tweetUrl } from '~/utils/constants'
import { onMounted, ref } from '@vue/composition-api'

const waveImageSrc = ref<string>()

const tweet = () => {
  window.open(tweetUrl, '__blank')
}

// 画面サイズで波の画像の読み込み先を切り替え
onMounted((): void => {
  const windowSize =  window.innerWidth
  if(windowSize <= 770) {
    waveImageSrc.value = '/img/wave_sm.png'
    return
  }
  if(770 < windowSize && windowSize <= 980) {
    waveImageSrc.value = '/img/wave_md.png'
    return
  }
  if(980 < windowSize) {
    waveImageSrc.value = '/img/wave_lg.png'
    return
  }
})
</script>
