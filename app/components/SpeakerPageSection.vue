<script setup lang="ts">
import SpeakerPageBlock from '~/components/SpeakerPageBlock.vue'
import SpeakerLTSection from '~/components/SpeakerLTSection.vue'
import SectionTitle from '~/components/SectionTitle.vue'
import { SHOW_SPEAKER_LIST } from '~/utils/feature.constants'
import { speakers } from '~/utils/speakers.constants'
</script>

<template>
  <section
    id="speakers"
    class="px-5 md:px-10 lg:px-20"
  >
    <div class="py-20 lg:py-40">
      <div class="mx-auto mb-20 md:max-w-[43.75rem] lg:max-w-[78.75rem]">
        <SectionTitle
          class="mb-10 lg:mb-20"
          title="Speakers"
          title-yamato="スピーカー"
        />
        <template v-if="SHOW_SPEAKER_LIST">
          <section
            class="grid grid-cols-2 gap-4 mb-14 md:grid-cols-3 md:gap-6 lg:grid-cols-5 lg:mb-20"
          >
            <SpeakerPageBlock
              v-for="speaker in speakers"
              :key="speaker.name"
              :speaker="speaker"
            />
          </section>
        </template>
        <SpeakerLTSection />
      </div>
    </div>
  </section>
</template>
