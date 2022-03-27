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
    required: false
  },
})
const emit = defineEmits<ISubmitButtonFieldEmit>()

const buttonClass = computed(() => {
  if (props.disabled === true) {
    return 'w-full max-w-[30rem] h-16 text-xl font-bold text-white bg-submit rounded-4xl shadow-submit opacity-50 lg:h-[4.5rem] lg:text-2xl'
  }
  return 'w-full max-w-[30rem] h-16 text-xl font-bold text-white bg-submit rounded-4xl focus:ring-4 focus:ring-blue-300 shadow-submit hover:opacity-80 lg:h-[4.5rem] lg:text-2xl'
})

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <button
    type="submit"
    :disabled="disabled"
    :class="buttonClass"
    @click="handleClick"
  >
    {{ titleLabel }}
  </button>
</template>
