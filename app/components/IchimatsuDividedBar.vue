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
    class="w-full h-10 bg-vertical-20 bg-40 lg:h-20 lg:bg-vertical-40 lg:bg-80"
    :class="colorClass"
  />
</template>
