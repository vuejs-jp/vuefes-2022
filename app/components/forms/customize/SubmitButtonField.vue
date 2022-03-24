<script setup lang="ts">
interface ISubmitButtonFieldEmit {
  (e: 'onClick'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true
  },
})
const emit = defineEmits<ISubmitButtonFieldEmit>()

const handleClick = () => {
  emit('onClick')
}
</script>

<template>
  <button
    type="submit"
    class="py-2.5 px-52 w-full text-sm font-medium text-center text-white focus:ring-4 focus:ring-blue-300 hover:opacity-80 sm:w-auto rounded-4xl shadow-submit bg-submit"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
