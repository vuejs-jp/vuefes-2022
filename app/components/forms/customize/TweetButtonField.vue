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
    class="w-[56.62vw] h-[9.48vw] text-[3.38vw] text-center text-vue-blue bg-white rounded-4xl border border-vue-blue hover:opacity-60 transition-opacity md:w-[48.98vw] md:h-[6.43vw] md:text-[2.45vw] lg:w-107.5 lg:h-15.75 lg:text-2xl"
    @click="handleClick"
  >
    <div class="flex justify-center items-center align-middle">
      <TwitterSvg class="w-[3.64vw]" />
      <span class="ml-[1.82vw] lg:ml-1">
        <span class="font-bold">Twitter</span> ー {{ titleLabel }}
      </span>
    </div>
  </button>
</template>
