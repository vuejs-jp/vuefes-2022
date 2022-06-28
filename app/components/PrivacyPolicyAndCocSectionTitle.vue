<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  titleYamato: {
    type: String,
    required: true,
  },
  titleType: {
    type: String,
    default: 'Coc'
  }
})

const titleYamatoSizeClass = computed(() => {
  return props.titleType === 'PrivacyPolicy' ? 'text-[2.188rem]' : 'text-[2.5rem]'
})
</script>

<template>
  <div class="shrink-0 text-center text-vue-blue">
    <div
      :class="titleYamatoSizeClass"
      class="font-kokuryu-heading opacity-10 lg:text-[5rem]"
    >
      {{ titleYamato }}
    </div>
    <h1 class="mt-[-1.5rem] text-[1.25rem] font-extrabold lg:-mt-14 lg:text-[2.5rem]">
      {{ title }}
    </h1>
  </div>
</template>
