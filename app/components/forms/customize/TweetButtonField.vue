<script setup lang="ts">
interface ITweetButtonFieldEmit {
  (e: 'onClick'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true
  },
})
const emit = defineEmits<ITweetButtonFieldEmit>()

const handleClick = () => {
  emit('onClick')
}
</script>

<template>
  <button
    type="submit"
    class="py-2.5 px-10 w-full text-sm font-medium text-center bg-transparent rounded-lg border focus:ring-4 focus:ring-blue-300 hover:opacity-80 sm:w-auto text-vuefes-tweet border-vuefes-tweet"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
