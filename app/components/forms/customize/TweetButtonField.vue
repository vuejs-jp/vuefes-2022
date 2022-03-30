<script setup lang="ts">
import TwitterSvg from '~/static/icon/twitter_logo.svg?inline'

interface ITweetButtonFieldEmit {
  (e: 'onClick'): void
}

// const props = defineProps({
//   titleLabel: {
//     type: String,
//     required: true,
//   },
// })
const emit = defineEmits<ITweetButtonFieldEmit>()

const handleClick = () => {
  emit('onClick')
}
</script>

<template>
  <button
    type="submit"
    class="w-[56.62vw] h-[9.48vw] text-[3.38vw] text-center text-vue-blue bg-transparent rounded-4xl border border-vue-blue hover:opacity-60 transition-opacity md:w-[48.98vw] md:h-[6.43vw] md:text-[2.45vw] lg:w-[26.875rem] lg:h-[3.9375rem] lg:text-[1.5rem]"
    @click="handleClick"
  >
    <div class="flex justify-center items-center align-middle">
      <TwitterSvg class="w-[3.64vw]" />
      <span class="ml-[1.82vw] lg:ml-1">
        <span class="font-bold">Twitter</span> ー @vuefes #vuefes
      </span>
    </div>
  </button>
</template>
