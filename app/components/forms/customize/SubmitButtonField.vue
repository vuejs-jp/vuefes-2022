<script setup lang="ts">
interface ISubmitButtonFieldEmit {
  (e: 'click'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
})
const emit = defineEmits<ISubmitButtonFieldEmit>()

const buttonClass = computed(() => {
  if (props.disabled === true) {
    return 'opacity-50'
  }
  return 'focus:ring-4 focus:ring-blue-300 hover:opacity-80'
})

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button
    type="submit"
    :disabled="disabled"
    class="w-full max-w-[30rem] h-16 text-xl font-bold text-white bg-submit rounded-4xl shadow-submit transition-opacity lg:h-[4.5rem] lg:text-2xl"
    :class="buttonClass"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
