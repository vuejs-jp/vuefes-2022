<script setup lang="ts">
import OpenSvg from '~/static/icon/open_logo.svg?inline'
import CloseSvg from '~/static/icon/close_logo.svg?inline'

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="mb-[20px] last:border-0 border-b border-vue-blue">
    <div
      class="flex gap-5 justify-between items-center mb-[20px] cursor-pointer"
      @click="open"
      @keyup="open"
    >
      <p class="text-[15px] font-bold text-left text-vue-blue"><slot name="title" /></p>
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
      class="mb-[20px]"
    >
      <slot name="content" />
    </div>
  </div>
</template>
