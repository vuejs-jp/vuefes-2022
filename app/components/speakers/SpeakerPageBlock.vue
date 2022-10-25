<script setup lang="ts">
import { ISpeaker } from '~/types/interface'

const props = defineProps<{
  speaker: ISpeaker
}>()

const speakerInfo = computed(() => props.speaker)
</script>
<template>
  <router-link :to="`/sessions/${speakerInfo.id}`">
    <div class="text-vue-blue">
      <img
        class="aspect-square mb-2.5 w-full"
        :alt="`${speakerInfo.profile.name}の写真`" 
        :src="speakerInfo.profile.image"
        loading="lazy"
      >
      <p class="text-xs">
        {{ speakerInfo.profile.title }}
      </p>
      <p class="text-lg font-bold lg:text-22">
        {{ speakerInfo.profile.name }}
      </p>
    </div>
  </router-link>
</template>
