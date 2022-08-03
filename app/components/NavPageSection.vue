<template>
  <header
    class="sticky top-0 z-10 py-[5vw] px-[3vw] lg:py-10"
    :class="{ 'bg-white/90': showBackgroundColor }"
  >
    <nav class="flex justify-between items-center">
      <div class="flex">
        <nuxt-link to="/">
          <img
            class="mr-[2.6vw] w-[19.48vw] h-[3.51vw] lg:mr-5 lg:w-[200px] lg:h-9"
            :src="`/icon/vuefes_logo.svg`"
            :alt="conferenceTitle"
          >
        </nuxt-link>
        <p
          class="flex after:block items-center pt-[1vw] after:ml-[1.95vw] after:w-[6.49vw] after:h-px text-[1.69vw] font-bold text-vue-blue after:border-b after:border-vue-blue lg:pt-2 lg:text-base"
        >
          {{ subtitle }}
        </p>
      </div>
      <nav-menu
        :is-open="isOpen"
        @open="toggleOpen(true)"
        @close="toggleOpen(false)"
      />
    </nav>
  </header>
</template>

<script setup lang="ts">
import { conferenceTitle, subtitle } from '~/utils/constants'
import NavMenu from '~/components/navbar/NavMenu.vue'
import { onMounted, onUnmounted } from '#imports'
import useScrollWatcher, { ScrollEvent } from '~/composables/useScrollWatcher'
import useDebounce from '~/composables/useDebounce'

const debounce = useDebounce((scrollEvent: ScrollEvent) => {
  if (isOpen.value) {
    showBackgroundColor.value = true
    return
  }
  showBackgroundColor.value = scrollEvent.y !== 0
})

const { mount, unmount } = useScrollWatcher(debounce)
const showBackgroundColor = ref(false)
onMounted(() => {
  mount()
})

onUnmounted(() => {
  unmount()
})
const isOpen = ref(false)

function toggleOpen(opened:boolean) {
  showBackgroundColor.value = opened
  isOpen.value = opened
}
</script>
