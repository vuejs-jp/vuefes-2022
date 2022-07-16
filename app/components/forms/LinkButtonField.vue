<script setup lang="ts">
interface ILinkButtonFieldEmit {
  //
}

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  isExternalLink: {
    type: Boolean,
    default: false
  },
  titleLabel: {
    type: String,
    required: true
  },
})

const emit = defineEmits<ILinkButtonFieldEmit>()
</script>

<template>
  <div
    class="relative inline-block h-16 w-full max-w-[30rem] rounded-4xl shadow-submit transition before:-z-10 before:block before:h-full before:w-full before:rounded-4xl before:bg-submit-border hover:shadow-submit-hover lg:h-[4.5rem]"
  >
    <div class="absolute top-0 flex h-full w-full items-center justify-center p-px">
      <a
        v-if="isExternalLink"
        :href="link"
        class="flex h-full w-full items-center justify-center rounded-4xl bg-submit text-xl font-bold text-white transition-opacity focus:ring-4 focus:ring-blue-300 lg:text-2xl"
        target="_blank"
        rel="noopener"
      >
        {{ titleLabel }}
      </a>
      <nuxt-link
        v-else
        :to="link"
        class="flex h-full w-full items-center justify-center rounded-4xl bg-submit text-xl font-bold text-white transition-opacity focus:ring-4 focus:ring-blue-300 lg:text-2xl"
      >
        {{ titleLabel }}
      </nuxt-link>
    </div>
  </div>
</template>
