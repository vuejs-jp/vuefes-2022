<script setup lang="ts">
import SpeakerPageBlock from '~/components/SpeakerPageBlock.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { speakers } from '~/utils/speakers.constants'
import SpeakerPageHeading from './SpeakerPageHeading.vue'
</script>

<template>
  <section
    id="speakers"
    class="px-5 md:px-10 lg:px-20"
  >
    <div class="py-20 lg:py-40">
      <div class="mx-auto mb-20 md:max-w-700 lg:max-w-1260">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Speakers"
          title-yamato="スピーカー"
        />
        <SpeakerPageHeading
          text="メインセッション"
          class="mb-5 md:mb-10"
        />
        <div class="grid grid-cols-2 gap-4 mb-14 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:mb-20">
          <SpeakerPageBlock
            v-for="speaker in speakers"
            :key="speaker.id"
            :speaker="speaker"
          />
        </div>
        <SpeakerPageHeading
          text="スポンサーセッション"
          class="mb-5 md:mb-10"
        />
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="i in 9">
            <img
              src="https://storage.googleapis.com/p_6280f74da671510018fd44c9/dce46775-9b1a-441c-a3b8-abdbaeb7a159%2Fmedpeer.png"
              alt="メドピア株式会社"
              class="mb-2 md:mb-4"
              loading="lazy"
            >
            <p class="text-lg font-bold text-vue-blue md:text-22">メドピア株式会社</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
