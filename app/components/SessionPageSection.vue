<script setup lang="ts">
import LinkButtonField from '~/components/forms/LinkButtonField.vue'
import SpeakerProfile from '~/components/speakers/SpeakerProfile.vue'
import { CustomPropType } from '~/types/shims-vue'
import { ISpeaker } from '~/types/interface'

const props = defineProps({
  sessionInfo: {
    type: Object as CustomPropType<ISpeaker>,
    required: true
  }
})
</script>

<template>
  <section class="px-5 mx-auto max-w-900 text-vue-blue">
    <span class="inline-block py-1 px-4 mb-2.5 text-sm font-extrabold text-white bg-vue-blue md:text-lg">
      {{ sessionInfo.session.time }}min
    </span>
    <h2 class="mb-5 text-xl font-bold leading-8 md:mb-10 md:text-25">
      {{ sessionInfo.session.title }}
    </h2>
    <!-- eslint-disable vue/no-v-html -->
    <div
      class="mb-8 text-sm leading-7 md:mb-20 md:text-lg md:leading-8 description"
      v-html="sessionInfo.session.description"
    />
    <!-- eslint-enaable vue/no-v-html -->
    <slot>
      <SpeakerProfile :speaker-profile="sessionInfo.profile" />
    </slot>
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
