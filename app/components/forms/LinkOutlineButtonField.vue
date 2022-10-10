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
    class="flex items-center justify-center rounded-4xl border border-vue-blue py-2 font-bold text-vue-blue transition hover:opacity-40 md:py-3 md:text-lg"
    target="_blank"
    rel="noopener"
  >
    {{ titleLabel }}
  </a>
  <nuxt-link
    v-else
    :to="link"
    class="flex items-center justify-center rounded-4xl border border-vue-blue py-2 font-bold text-vue-blue transition hover:opacity-40 md:py-3 md:text-lg"
  >
    {{ titleLabel }}
  </nuxt-link>
</template>
