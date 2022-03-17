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
    class="py-2.5 px-10 w-full text-sm font-medium text-center text-white bg-gradient-to-r rounded-lg focus:ring-4 focus:ring-blue-300 hover:opacity-80 sm:w-auto from-vue-green to-asagi"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
