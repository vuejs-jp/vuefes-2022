<script setup lang="ts">
import { CustomPropType } from '~/types/shims-vue'

interface IProps {
  name_jp: string
  company: string
  image: string
}

const props = defineProps({
  speaker: {
    type: Object as CustomPropType<IProps>,
    required: true
  }
})
</script>
<template>
  <router-link :to="`/sessions/${props.speaker.name_jp}`">
    <div class="w-full">
      <img
        class="w-full"
        alt="thumbnail"
        :src="props.speaker.image"
      >
      <p class="mt-3 text-sm opacity-60 md:mt-2 lg:mt-1 lg:text-[0.25rem]">{{ props.speaker.company }}</p>
      <p class="text-lg font-bold text-vue-blue lg:text-sm">{{ props.speaker.name_jp }}</p>
    </div>
  </router-link>
</template>