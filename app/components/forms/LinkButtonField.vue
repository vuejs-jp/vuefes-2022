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
    class="inline-block before:block relative before:-z-10 w-full before:w-full max-w-[30rem] h-16 before:h-full before:bg-submit-border rounded-4xl before:rounded-4xl shadow-submit hover:shadow-submit-hover transition lg:h-[4.5rem]"
  >
    <div class="flex absolute top-0 justify-center items-center p-px w-full h-full">
      <a
        v-if="isExternalLink"
        role="button"
        :href="link"
        class="flex justify-center items-center w-full h-full text-xl font-bold text-white bg-submit rounded-4xl focus:ring-4 focus:ring-blue-300 transition-opacity lg:text-2xl"
        target="_blank"
        rel="noopener"
      >
        {{ titleLabel }}
      </a>
      <nuxt-link
        v-else
        role="button"
        :to="link"
        class="flex justify-center items-center w-full h-full text-xl font-bold text-white bg-submit rounded-4xl focus:ring-4 focus:ring-blue-300 transition-opacity lg:text-2xl"
        target="_self"
      >
        {{ titleLabel }}
      </nuxt-link>
    </div>
  </div>
</template>
