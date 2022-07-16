<script setup lang="ts">
interface ITextareaFieldEmit {
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
  rows: {
    type: Number,
    required: true,
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

const emit = defineEmits<ITextareaFieldEmit>()

const handleInput = (e) => {
  if (!(e.target instanceof HTMLTextAreaElement)) {
    return
  }
  emit('input', e.target.value)
}

const handleFocusOut = (e) => {
  if (!(e.target instanceof HTMLTextAreaElement)) {
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
    <textarea
      :id="idLabel"
      :name="name"
      class="mt-2.5 block h-[8.125rem] w-full border border-vue-blue bg-transparent py-3.5 px-4 text-vue-blue lg:h-[11.25rem] lg:py-7 lg:px-8"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
      @blur="handleFocusOut"
    />
  </label>
</template>
