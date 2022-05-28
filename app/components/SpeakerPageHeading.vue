<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h3 class="py-4 px-5 text-xl font-bold text-vue-blue lg:py-5 lg:px-7 lg:text-2xl bg-gradient">
    {{ text }}
  </h3>
</template>

<style>
.bg-gradient {
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}
</style>