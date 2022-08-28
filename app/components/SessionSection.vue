<script setup lang="ts">
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SpeakerProfile from '~/components/speakers/SpeakerProfile.vue'
import { CustomPropType } from '~/types/shims-vue'
import { ISpeaker } from '~/types/interface'

const props = defineProps({
  speaker: {
    type: Object as CustomPropType<ISpeaker>,
    required: true
  }
})

const speakerInfo = computed(() => props.speaker)
</script>
<template>
  <section class="px-5 mx-auto max-w-[56.25rem] text-vue-blue">
    <span class="inline-block py-1 px-4 mb-2.5 text-sm font-extrabold text-white bg-vue-blue md:text-lg">
      {{ speakerInfo.session.time }}min
    </span>
    <h3 class="mb-5 text-xl font-bold leading-8 md:text-[1.5625rem]">
      {{ speakerInfo.session.title }}
    </h3>
    <p class="mb-8 text-base leading-8 md:mb-20 md:text-lg md:leading-9">
      {{ speakerInfo.session.description }}
    </p>
    <div class="p-5 border border-vue-blue md:flex md:p-[3.125rem]">
      <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-[3.75rem] md:mr-[3.125rem] md:text-[1.375rem]">
        Speaker Profile
      </p>
      <div>
        <SpeakerProfile
          :speaker-profile="speakerInfo.profile"
        />
      </div>
    </div>
    <div class="mt-12 mb-20 text-center md:mt-24 md:mb-40">
      <LinkButtonField
        link="/"
        title-label="トップに戻る"
        :is-external-link="false"
      />
    </div>
  </section>
</template>
