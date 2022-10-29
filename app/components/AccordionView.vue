<script setup lang="ts">
import OpenSvg from '~/assets/icon/open_logo.svg'
import CloseSvg from '~/assets/icon/close_logo.svg'

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}

const start = (el: HTMLElement) => {
  el.style.height = el.scrollHeight + 'px'
}

const end = (el: HTMLElement) => {
  el.style.height = ''
}
</script>

<template>
  <div class="mb-5 last:border-0 border-b border-vue-blue md:px-6 md:mb-10">
    <div
      class="flex gap-5 justify-between items-center pb-5 cursor-pointer md:pb-10"
      tabindex="0"
      @click="open"
      @keyup="open"
    >
      <slot name="title" />
      <transition
        name="rotate"
        mode="out-in"
      >
        <div>
          <OpenSvg v-if="isOpen" />
          <CloseSvg v-if="!isOpen" />
        </div>
      </transition>
    </div>
    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        v-show="isOpen"
        class=""
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
