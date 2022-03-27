<script setup lang="ts">
import { PropType } from '@nuxt/bridge/dist/runtime/vue2-bridge'

const props = defineProps({
  color: {
    type: String as PropType<'white' | 'vue-blue'>,
    required: true,
  },
})

const colorClass = computed(() => {
  return props.color === 'white' ? 'bg-ichimatsu-white' : 'bg-ichimatsu-vue-blue'
})
</script>

<template>
  <div
    class="w-full h-10 bg-40 bg-vertical-20"
    :class="colorClass"
  />
</template>
