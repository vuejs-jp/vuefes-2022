<script setup lang="ts">
interface IInputFieldEmit {
  (e: 'input', value: string): void
  (e: 'blur', value: string): void
}

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  idLabel: {
    type: String,
    required: true,
  },
  titleLabel: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits<IInputFieldEmit>()

const handleInput = (e) => {
  if (!(e.target instanceof HTMLInputElement)) {
    return
  }
  emit('input', e.target.value)
}

const handleFocusOut = (e) => {
  if (!(e.target instanceof HTMLInputElement)) {
    return
  }
  emit('blur', e.target.value)
}
</script>

<template>
  <label
    :for="idLabel"
    class="block text-sm font-bold text-vue-blue lg:text-lg"
  >
    {{ titleLabel }}
    <input
      :id="idLabel"
      :name="name"
      :type="type"
      class="block py-3.5 px-4 mt-2.5 w-full h-12 text-vue-blue bg-transparent border border-vue-blue lg:py-7 lg:px-8 lg:h-[4.625rem]"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
      @blur="handleFocusOut"
    >
  </label>
</template>
