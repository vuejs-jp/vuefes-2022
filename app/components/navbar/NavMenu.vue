<script setup lang="ts">
import { defineProps, defineEmits } from '#imports'
import MenuOpenLogo from '~/assets/img/menu-open.svg'
import MenuCloseLogo from '~/assets/img/menu-close.svg'
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
      <MenuOpenLogo />
    </button>
    <transition name="fade">
      <nav
        v-if="localIsOpen"
        class="fixed top-0 left-0 z-10 w-screen h-screen text-vue-blue bg-white"
      >
        <div class="px-[3vw] pt-[5vw] text-right">
          <button
            type="button"
            class="cursor-pointer"
            @click="localIsOpen = false"
          >
            <MenuCloseLogo />
          </button>
        </div>
        <ul class="mx-[3vw]">
          <li
            v-for="link in menuLinks"
            :key="link.displayName"
            class="block py-6 text-center border-b last:border-b-0 border-vue-blue"
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