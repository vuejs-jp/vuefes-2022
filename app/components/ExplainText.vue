<script setup lang="ts">
const props = defineProps({
  explain: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <p
    class="text-sm leading-7 text-vue-blue lg:text-lg lg:leading-8"
    v-html="explain"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
