<script setup lang="ts">
import { defineProps, defineEmits } from '#imports'
import MenuIcon from '~/components/navbar/MenuIcon.vue'
import { menuLinks } from '~/utils/constants'
const props = defineProps<{
  isOpen: Boolean
}>()

const emit = defineEmits<{
  (openedEvent: 'open'):void
  (closedEvent: 'close'): void
}>()

const localIsOpen = computed({
  get: () => props.isOpen,
  set: (value: boolean) => {
    value ? emit('open'): emit('close')
  }
})

</script>

<template>
  <div class="">
    <div
      role="button"
      tabindex="0"
      class="px-2 leading-3 cursor-pointer lg:hidden"
      @click="localIsOpen = !localIsOpen"
      @keyup.enter="localIsOpen = !localIsOpen"
    >
      <menu-icon :is-open="localIsOpen" />
    </div>
    <nav
      v-if="localIsOpen"
      class="absolute inset-x-0 top-[13.51vw] bottom-0 z-10 w-full h-screen bg-white/90"
    >
      <ul class="flex flex-col space-y-6 ">
        <li
          v-for="(link, index) in menuLinks"
          :key="index"
          @click="localIsOpen = false"
          @keyup.enter="localIsOpen = false"
        >
          <nuxt-link
            class="block py-4 px-8 w-full text-center"
            :to="link.uri"
          >
            {{ link.displayName }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nav class="hidden lg:block">
      <ul class="flex space-x-6 ">
        <li
          v-for="(link, index) in menuLinks"
          :key="index"
          @click="localIsOpen = false"
          @keyup.enter="localIsOpen = false"
        >
          <nuxt-link
            :to="link.uri"
          >
            {{ link.displayName }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
