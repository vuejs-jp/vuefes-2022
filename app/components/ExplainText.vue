<script setup lang="ts">
const props = defineProps({
  explain: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <!-- eslint-disable-next-line -->
  <p class="leading-7 lg:leading-8 lg:text-lg text-vue-blue text-sm" v-html="explain" />
  <!-- eslint-enable-next-line -->
</template>
