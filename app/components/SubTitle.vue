<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="shrink-0 text-center text-vue-blue">
    <h2 class="mt-[-1.5rem] text-[1.25rem] font-extrabold text-vue-blue lg:-mt-14 lg:text-[2.5rem]">
      {{ title }}
    </h2>
  </div>
</template>
