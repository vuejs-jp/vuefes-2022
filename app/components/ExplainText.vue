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
  <p class="mx-auto mt-[5vw] mb-[10vw] leading-7 lg:leading-8 lg:text-lg text-left text-vue-blue md:text-[16px] text-sm" v-html="explain" />
  <!-- eslint-enable-next-line -->
</template>
