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
})


</script>

<template>
  <div class="shrink-0 text-center text-vue-blue">
    <div
      class="font-kokuryu-heading opacity-10 custom-yamato"
    >
      {{ titleYamato }}
    </div>
    <h1 class="mt-[-6vw] font-extrabold md:-mt-14 custom-title">
      {{ title }}
    </h1>
  </div>
</template>

<style scoped>
.custom-yamato {
  font-size: clamp(1rem, 9.09vw, 80px);
}

.custom-title {
  font-size: clamp(1rem, 5.19vw, 40px);
}
</style>