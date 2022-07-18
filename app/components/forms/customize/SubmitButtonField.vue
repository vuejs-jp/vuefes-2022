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

const handleClick = () => {
  emit('click')
}
</script>

<template>
  <div
    class="inline-block before:block relative before:-z-10 w-full before:w-full max-w-[30rem] h-16 before:h-full before:bg-submit-border rounded-4xl before:rounded-4xl shadow-submit transition lg:h-[4.5rem]"
    :class="{ 'hover:shadow-submit-hover': !disabled, 'opacity-40': disabled }"
  >
    <div class="flex absolute top-0 justify-center items-center p-px w-full h-full">
      <button
        type="submit"
        :disabled="disabled"
        class="w-full h-full text-xl font-bold text-white bg-submit rounded-4xl focus:ring-4 focus:ring-blue-300 transition-opacity lg:text-2xl"
        @click="handleClick"
      >
        {{ titleLabel }}
      </button>
    </div>
  </div>
</template>
