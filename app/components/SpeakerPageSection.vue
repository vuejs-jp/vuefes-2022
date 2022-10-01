<script setup lang="ts">
import SpeakerPageBlock from '~/components/SpeakerPageBlock.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { speakers } from '~/utils/speakers.constants'
import SpeakerPageHeading from './SpeakerPageHeading.vue'
import { ISponsor } from '../types/sponsors'
import { SHOW_SPONSOR_SESSION } from '~/utils/feature.constants'

const mainSessionSpeakers = speakers.filter(speaker => speaker.session.type === 'main')
const LTSpeakers = speakers.filter(speaker => speaker.session.type === 'LT')

const { fetchContent } = useSponsorsCMS()
const { pending, data: sponsors } = useLazyAsyncData('sponsors', () => fetchContent())

const sessionSponsors = computed(() => [...sponsors.value.platinum, ...sponsors.value.gold])
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
          text="セッション"
          class="mb-5 md:mb-10"
        />
        <div class="grid grid-cols-2 gap-4 mb-14 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:mb-20">
          <SpeakerPageBlock
            v-for="speaker in mainSessionSpeakers"
            :key="speaker.id"
            :speaker="speaker"
          />
        </div>
        <SpeakerPageHeading
          text="ライトニングトーク"
          class="mb-5 md:mb-10"
        />
        <div class="grid grid-cols-2 gap-4 mb-14 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:mb-20">
          <SpeakerPageBlock
            v-for="speaker in LTSpeakers"
            :key="speaker.id"
            :speaker="speaker"
          />
        </div>
        <template v-if="SHOW_SPONSOR_SESSION">
          <SpeakerPageHeading
            text="スポンサーセッション"
            class="mb-5 md:mb-10"
          />
          <div class="grid grid-cols-2 gap-4 mb-14 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:mb-20">
            <div
              v-for="sponsor in sessionSponsors"
              :key="sponsor.name_en"
            >
              <n-link :to="`/sponsor-sessions/${sponsor.name_en}`">
                <img
                  :src="`/sponsor/${sponsor.name_en}.png`"
                  :alt="sponsor.name_jp"
                  class="mb-2 md:mb-4"
                >
                <p class="text-lg font-bold text-vue-blue md:text-22">{{ sponsor.name_jp }}</p>
              </n-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
