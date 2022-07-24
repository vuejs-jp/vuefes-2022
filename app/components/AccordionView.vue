<script setup lang="ts">
import OpenSvg from '~/static/icon/open_logo.svg?inline'
import CloseSvg from '~/static/icon/close_logo.svg?inline'

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="mb-5 last:border-0 border-b border-vue-blue md:mb-10">
    <div
      class="flex gap-5 justify-between items-center mb-5 cursor-pointer md:mb-10"
      tabindex="0"
      @click="open"
      @keyup="open"
    >
      <p class="text-15 font-bold text-left text-vue-blue md:text-lg"><slot name="title" /></p>
      <CloseSvg
        v-if="isOpen"
        class="shrink-0"
      />
      <OpenSvg
        v-if="!isOpen"
        class="shrink-0"
      />
    </div>
    <div
      v-if="isOpen"
      class="mb-5 md:mb-10"
    >
      <slot name="content" />
    </div>
  </div>
</template>
