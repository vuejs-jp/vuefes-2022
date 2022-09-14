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
  <section class="px-5 mx-auto max-w-900 text-vue-blue">
    <span class="inline-block py-1 px-4 mb-2.5 text-sm font-extrabold text-white bg-vue-blue md:text-lg">
      {{ speakerInfo.session.time }}min
    </span>
    <h2 class="mb-5 text-xl font-bold leading-8 md:mb-10 md:text-25">
      {{ speakerInfo.session.title }}
    </h2>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="mb-8 text-sm leading-7 md:mb-20 md:text-lg md:leading-8 description"
      v-html="speakerInfo.session.description"
    />
    <!-- eslint-enaable vue/no-v-html -->
    <div class="p-5 border border-vue-blue md:flex md:p-12.5">
      <p class="shrink-0 mb-5 text-sm font-extrabold text-center md:mt-15 md:mr-12.5 md:text-22">
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

<style scoped>
.description ::v-deep ul {
  list-style: disc;
  margin: revert;
  padding: revert;
}

.description ::v-deep p + p {
  margin-top: 2em;
}
</style>