<script setup lang="ts">
type NameClassType = 'tsuchi' | 'vue-blue'

const props = defineProps({
  name: {
    type: String as NameClassType,
    required: true
  },
})

const nameClass = computed(() => {
  if (props.name === 'tsuchi') return 'bg-ichimatsu-tsuchi'
  return 'bg-ichimatsu-vue-blue'
})
</script>

<template>
  <div :class="`my-0 mx-auto w-full h-10 bg-40 bg-vertical-20 ${nameClass}`" />
</template>
