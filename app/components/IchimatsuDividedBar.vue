<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'

const props = defineProps({
  color: {
    type: String as CustomPropType<'white' | 'vue-blue' | 'hiwamoegi' | 'silver-tree' | 'sangosyu' | 'tohoh' | 'asagi' | 'timetable' | 'typescript-blue'>,
    required: true,
  },
})

const colorClass = computed(() => {
  switch (props.color) {
  case 'white':
    return 'bg-ichimatsu-white'
  case 'vue-blue':
    return 'bg-ichimatsu-vue-blue'
  case 'hiwamoegi':
    return 'bg-ichimatsu-hiwamoegi'
  case 'silver-tree':
    return 'bg-ichimatsu-silver-tree'
  case 'sangosyu':
    return 'bg-ichimatsu-sangosyu'
  case 'tohoh':
    return 'bg-ichimatsu-tohoh'
  case 'asagi':
    return 'bg-ichimatsu-asagi'
  case 'timetable':
    return 'bg-ichimatsu-timetable'
  case 'typescript-blue':
    return 'bg-ichimatsu-typescript-blue'
  default:
    return 'bg-ichimatsu-white'
  }
})
</script>

<template>
  <div
    class="h-10 w-full bg-40 bg-vertical-20 lg:h-20 lg:bg-80 lg:bg-vertical-40"
    :class="colorClass"
  />
</template>
