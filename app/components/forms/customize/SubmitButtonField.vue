<script setup lang="ts">
interface ISubmitButtonFieldEmit {
  (e: 'click'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true,
  },
})
const emit = defineEmits<ISubmitButtonFieldEmit>()

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button
    type="submit"
    class="w-full max-w-[480px] h-16 text-xl font-bold text-white bg-submit rounded-4xl focus:ring-4 focus:ring-blue-300 shadow-submit hover:opacity-80 lg:h-[72px] lg:text-2xl"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
