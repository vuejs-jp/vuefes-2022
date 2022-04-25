<script setup lang="ts">
import { defineProps } from '#imports'
const props = defineProps<{
  isOpen: Boolean
}>()
</script>

<template>
  <div>
    <div
      class="flex flex-col space-y-[6px]"
      :class="isOpen ? 'opened' : 'closed'"
    >
      <hr class="border-slate-600">
      <hr class="border-slate-600">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.closed {
  @apply items-end;

  :first-child {
    @apply w-6;
  }

  :nth-child(2) {
    @apply w-3;
  }
}

.opened {
  @apply pt-1 items-center;

  :first-child {
    @apply w-4  rotate-45;
  }

  :nth-child(2) {
    @apply w-4 -translate-y-[0.41rem] -rotate-45;
  }
}
</style>