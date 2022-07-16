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
    class="relative inline-block h-16 w-full max-w-[30rem] rounded-4xl shadow-submit transition before:-z-10 before:block before:h-full before:w-full before:rounded-4xl before:bg-submit-border hover:shadow-submit-hover lg:h-[4.5rem]"
  >
    <div class="absolute top-0 flex h-full w-full items-center justify-center p-px">
      <button
        type="submit"
        class="h-full w-full rounded-4xl bg-submit text-xl font-bold text-white transition-opacity focus:ring-4 focus:ring-blue-300 lg:text-2xl"
        @click="handleClick"
      >
        {{ titleLabel }}
      </button>
    </div>
  </div>
</template>
