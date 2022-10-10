<script setup lang="ts">
import { defineProps, defineEmits } from '#imports'
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
  <div>
    <button
      type="button"
      @click="localIsOpen = true"
    >
      <img
        alt="オープンボタン"
        src="~/assets/img/menu-open.svg"
      >
    </button>
    <transition name="fade">
      <nav
        v-if="localIsOpen"
        class="fixed top-0 left-0 z-10 h-screen w-screen bg-white text-vue-blue"
      >
        <div class="px-[3vw] pt-[5vw] text-right">
          <button
            type="button"
            class="cursor-pointer"
            @click="localIsOpen = false"
          >
            <img
              alt="クローズボタン"
              src="~/assets/img/menu-close.svg"
            >
          </button>
        </div>
        <ul class="mx-[3vw]">
          <li
            v-for="link in menuLinks"
            :key="link.displayName"
            class="block border-b border-vue-blue py-6 text-center last:border-b-0"
          >
            <!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
            <nuxt-link
              :to="link.uri"
              class="font-bold"
              @click.native="localIsOpen = false"
            >
              {{ link.displayName }}
            </nuxt-link>
            <!-- eslint-enable vue/no-deprecated-v-on-native-modifier -->
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>