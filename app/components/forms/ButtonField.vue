<script setup lang="ts">
interface IButtonFieldEmit {
  (e: 'onClick'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true
  },
})
const emit = defineEmits<IButtonFieldEmit>()

const handleClick = () => {
  emit('onClick')
}
</script>

<template>
  <button
    type="submit"
    class="py-2.5 px-10 w-full text-sm font-medium text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 sm:w-auto"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
