<script setup lang="ts">
import { CustomPropType } from '~/types/shims-vue'

interface IProps {
  name: string
  title: string
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
  <!-- <router-link :to="`/sessions/${props.speaker.name_jp}`"> -->
  <div class="text-vue-blue">
    <img
      class="mb-2.5 w-full"
      :alt="`${props.speaker.name}の写真`" 
      :src="props.speaker.image"
      loading="lazy"
    >
    <p class="text-xs">{{ props.speaker.title }}</p>
    <p class="text-lg font-bold lg:text-[22px]">{{ props.speaker.name }}</p>
  </div>
  <!-- </router-link> -->
</template>
