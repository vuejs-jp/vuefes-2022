<script setup lang="ts">
import SpeakerPageBlock from '~/components/speakers/SpeakerPageBlock.vue'
import SpeakerPageHeading from '~/components/speakers/SpeakerPageHeading.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { speakers } from '~/utils/speakers.constants'
import { SHUFFLE_SPEAKERS } from '~/utils/feature.constants'
import { ISpeaker } from '~/types/interface'

const shuffleArray = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

const mainSessionSpeakers = speakers.filter(speaker => speaker.session.type === 'main')

const evan = mainSessionSpeakers.find(speaker => speaker.type === 'evan')
const foreignSpeakers = shuffleArray(mainSessionSpeakers.filter((speaker: ISpeaker) => speaker.type === 'foreign'))
const domesticSpeakers = shuffleArray(mainSessionSpeakers.filter((speaker: ISpeaker) => speaker.type === 'domestic'))

const LTSpeakers = speakers.filter((speaker: ISpeaker) => speaker.session.type === 'LT')

const showSessionSpeakers = computed(() => {
  if (SHUFFLE_SPEAKERS) {
    return [evan].concat(foreignSpeakers, domesticSpeakers)
  }
  return mainSessionSpeakers
})

const showLTSpeakers = computed(() => {
  return LTSpeakers
})

const { fetchContent } = useSponsorsCMS()
const { data: sponsors } = useLazyAsyncData('sponsors', () => fetchContent())

const sessionSponsors = (computed(() => [...sponsors.value.platinum, ...sponsors.value.gold]))
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
        <div class="mb-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:mb-20 lg:grid-cols-5">
          <SpeakerPageBlock
            v-for="speaker in showSessionSpeakers"
            :key="speaker.id"
            :speaker="speaker"
          />
        </div>
        <SpeakerPageHeading
          text="ライトニングトーク"
          class="mb-5 md:mb-10"
        />
        <div class="mb-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:mb-20 lg:grid-cols-5">
          <SpeakerPageBlock
            v-for="speaker in showLTSpeakers"
            :key="speaker.id"
            :speaker="speaker"
          />
        </div>
        <SpeakerPageHeading
          text="スポンサーセッション"
          class="mb-5 md:mb-10"
        />
        <div class="mb-14 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:mb-20 lg:grid-cols-5">
          <div
            v-for="sponsor in sessionSponsors"
            :key="sponsor.name_en"
          >
            <nuxt-link :to="`/sponsor-sessions/${sponsor.name_en}`">
              <img
                :src="`/sponsor/${sponsor.name_en}.png`"
                :alt="sponsor.name_jp"
                class="mb-2 md:mb-4"
              >
              <p class="text-lg font-bold text-vue-blue md:text-22">{{ sponsor.name_jp }}</p>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
