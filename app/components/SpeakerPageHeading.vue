<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h3 class="py-3 px-4 text-base font-bold text-vue-blue lg:py-5 lg:px-7 lg:text-2xl bg-gradient">
    {{ text }}
  </h3>
</template>

<style scoped>
.bg-gradient {
  background: rgb(255 255 255);
  background: linear-gradient(90deg, rgb(255 255 255 / 100%) 0%, rgb(255 255 255 / 0%) 100%);
}
</style>
