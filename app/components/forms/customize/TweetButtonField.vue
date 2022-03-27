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
    class="py-2.5 px-10 w-full sm:w-auto text-sm font-medium text-center text-vue-blue bg-transparent rounded-4xl border border-vue-blue focus:ring-4 focus:ring-blue-300 hover:opacity-80"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
