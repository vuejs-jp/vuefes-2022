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
    <div class="font-kokuryu-heading text-[2.5rem] opacity-10 lg:text-[5rem]">
      {{ titleYamato }}
    </div>
    <h2 class="mt-[-1.5rem] text-[1.25rem] font-extrabold lg:-mt-14 lg:text-[2.5rem]">
      {{ title }}
    </h2>
  </div>
</template>
