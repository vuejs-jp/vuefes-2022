<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h3 class="py-3 px-4 text-base font-bold text-vue-blue bg-speakers lg:py-5 lg:px-7 lg:text-2xl">
    {{ text }}
  </h3>
</template>
