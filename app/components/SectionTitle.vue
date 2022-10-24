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
    <div class="font-kokuryu-heading text-40 opacity-10 lg:text-80">
      {{ titleYamato }}
    </div>
    <h2 class="-mt-6 text-xl font-extrabold lg:-mt-14 lg:text-40">
      {{ title }}
    </h2>
  </div>
</template>
