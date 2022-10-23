<script setup lang="ts">
interface IButtonFieldEmit {
  (e: 'on-click'): void
}

const props = defineProps({
  titleLabel: {
    type: String,
    required: true
  },
})
const emit = defineEmits<IButtonFieldEmit>()

const handleClick = () => {
  emit('on-click')
}
</script>

<template>
  <div
    class="inline-block before:block relative before:-z-10 w-full before:w-full max-w-480 h-16 before:h-full before:bg-submit-border rounded-4xl before:rounded-4xl shadow-submit hover:shadow-submit-hover transition lg:h-18"
  >
    <div class="flex absolute top-0 justify-center items-center p-px w-full h-full">
      <button
        type="submit"
        class="w-full h-full text-xl font-bold text-white bg-submit rounded-4xl focus:ring-4 focus:ring-blue-300 transition-opacity lg:text-2xl"
        @click="handleClick"
      >
        {{ titleLabel }}
      </button>
    </div>
  </div>
</template>
