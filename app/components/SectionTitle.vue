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
    <div class="font-kokuryu-heading text-[10.39vw] opacity-10 lg:text-[5rem]">
      {{ titleYamato }}
    </div>
    <h2 class="mt-[-7vw] text-[5.19vw] font-extrabold lg:-mt-14 lg:text-[2.5rem]">
      {{ title }}
    </h2>
  </div>
</template>
