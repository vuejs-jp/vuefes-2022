<script setup lang="ts">
import OpenSvg from '~/static/icon/open_logo.svg?inline'
import CloseSvg from '~/static/icon/close_logo.svg?inline'

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="py-10 px-2.5">
    <div
      class="flex w-full cursor-pointer justify-between text-sm leading-7 lg:text-lg lg:leading-8"
      @click="open"
      @keyup="open"
    >
      <slot name="title" />
      <transition
        name="rotate"
        mode="out-in"
      >
        <OpenSvg v-if="isOpen" />
        <CloseSvg v-if="!isOpen" />
      </transition>
    </div>
    <transition name="open">
      <div
        v-if="isOpen"
        class="pt-10 text-sm leading-7 lg:text-lg lg:leading-8"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>
