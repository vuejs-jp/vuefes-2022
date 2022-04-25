<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'

const props = defineProps({
  color: {
    type: String as CustomPropType<'white' | 'vue-blue' | 'hiwamoegi' | 'silver-tree'>,
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
    return 'bg-ichimatsu-hiwamoegi bg-white'
  case 'silver-tree':
    return 'bg-ichimatsu-silver-tree'
  default:
    return 'bg-ichimatsu-white'
  }
})
</script>

<template>
  <div
    class="w-full h-10 bg-vertical-20 bg-40 lg:h-20 lg:bg-vertical-40 lg:bg-80"
    :class="colorClass"
  />
</template>
