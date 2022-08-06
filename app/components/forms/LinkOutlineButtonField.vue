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
  <a
    v-if="isExternalLink"
    :href="link"
    class="flex justify-center items-center py-2 font-bold text-vue-blue rounded-4xl border border-vue-blue hover:opacity-40 transition md:py-3 md:text-lg"
    target="_blank"
    rel="noopener"
  >
    {{ titleLabel }}
  </a>
  <nuxt-link
    v-else
    :to="link"
    class="flex justify-center items-center py-2 font-bold text-vue-blue rounded-4xl border border-vue-blue hover:opacity-40 transition md:py-3 md:text-lg"
  >
    {{ titleLabel }}
  </nuxt-link>
</template>
