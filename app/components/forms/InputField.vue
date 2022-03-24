<script setup lang="ts">
interface IInputFieldEmit {
  (e: 'onChange', value: string): void
}

const props = defineProps({
  idLabel: {
    type: String,
    required: true
  },
  titleLabel: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
})
const emit = defineEmits<IInputFieldEmit>()

const handleChange = (e) => {
  if (!(e.target instanceof HTMLInputElement)) {
    return;
  }
  emit('onChange', e.target.value)
}
</script>

<template>
  <label
    :for="idLabel"
    class="block mb-2 text-sm font-bold text-vue-blue"
  >
    {{ titleLabel }}
    <input
      :id="idLabel"
      :type="type"
      class="block p-2.5 w-full text-sm bg-transparent border focus:border-blue-500 focus:ring-blue-500 text-vue-blue border-vue-blue"
      :placeholder="placeholder"
      :required="required"
      @input="handleChange"
    >
  </label>
</template>
