<script setup lang="ts">
interface ITweetButtonFieldEmit {
  (e: 'onClick'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true,
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
    class="w-[218px] h-9 text-sm text-center text-vue-blue bg-transparent rounded-4xl border border-vue-blue hover:opacity-80 lg:w-[480px] lg:h-16 lg:text-2xl"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
