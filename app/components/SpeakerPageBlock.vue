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

const speakerInfo = computed(() => props.speaker)
</script>
<template>
  <router-link :to="`/sessions/${props.speaker.id}`">
    <div class="text-vue-blue">
      <img
        class="mb-2.5 w-full"
        :alt="`${speakerInfo.name}の写真`" 
        :src="speakerInfo.image"
        loading="lazy"
      >
      <p class="text-xs">{{ speakerInfo.title }}</p>
      <p class="text-lg font-bold lg:text-[1.375rem]">{{ speakerInfo.name }}</p>
    </div>
  </router-link>
</template>
