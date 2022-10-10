<script setup lang="ts">
import TwitterSvg from '~/static/icon/twitter_logo.svg?inline'

interface ITweetButtonFieldEmit {
  (e: 'on-click'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true,
  },
})
const emit = defineEmits<ITweetButtonFieldEmit>()

const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <button
    type="submit"
    class="h-[9.48vw] w-[56.62vw] rounded-4xl border border-vue-blue bg-transparent text-center text-[3.38vw] text-vue-blue transition-opacity hover:opacity-60 md:h-[6.43vw] md:w-[48.98vw] md:text-[2.45vw] lg:h-[3.9375rem] lg:w-[26.875rem] lg:text-[1.5rem]"
    @click="handleClick"
  >
    <div class="flex items-center justify-center align-middle">
      <TwitterSvg class="w-[3.64vw]" />
      <span class="ml-[1.82vw] lg:ml-1">
        <span class="font-bold">Twitter</span> ー {{ titleLabel }}
      </span>
    </div>
  </button>
</template>
