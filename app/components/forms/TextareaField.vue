<script setup lang="ts">
interface ITextareaFieldEmit {
  (e: 'input', value: string): void
}

const props = defineProps({
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
</script>

<template>
  <label
    :for="idLabel"
    class="block text-sm font-bold text-vue-blue lg:text-lg"
  >
    {{ titleLabel }}
    <textarea
      :id="idLabel"
      class="block py-3.5 px-4 mt-2.5 w-full h-[130px] text-vue-blue bg-transparent border border-vue-blue lg:py-7 lg:px-8 lg:h-[180px]"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      @input="handleInput"
    />
  </label>
</template>
