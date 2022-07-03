<script setup lang="ts">
import SpeakerPageBlock from '~/components/SpeakerPageBlock.vue'
import SpeakerLTSection from '~/components/SpeakerLTSection.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { SHOW_SPEAKER_LIST } from '~/utils/feature.constants'

const mock_speaker = {
  id: '1',
  name_jp: '名前入ります．',
  name_jp_kana: '日本語カナ',
  name_en: '',
  bio: '本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．',
  session:
    '本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．本文はいります．',
  title:
    'タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．タイトルが入ります．',
  company: '社名等入ります．社名等入ります．',
  twitter: '',
  facebook: '',
  connpass: '',
  github: '',
  related_url: '',
  image: 'https://placehold.jp/150x150.png',
}
</script>

<template>
  <section
    id="speakers"
    class="px-5 md:px-10"
  >
    <div class="py-20 lg:py-40">
      <div class="px-5 mx-auto max-w-[78.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Speakers"
          title-yamato="スピーカー"
        />
        <template v-if="SHOW_SPEAKER_LIST">
          <section
            class="grid grid-cols-2 gap-x-4 gap-y-6 mt-20 md:grid-cols-3 md:gap-10 lg:grid-cols-5 lg:gap-6"
          >
            <SpeakerPageBlock
              v-for="i in 15"
              :key="i"
              :speaker="mock_speaker"
            />
          </section>
        </template>
        <SpeakerLTSection />
      </div>
    </div>
  </section>
</template>
