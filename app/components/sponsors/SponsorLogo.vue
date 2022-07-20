<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import ISponsor from '~/types/sponsors'

const props = defineProps({
  sponsor: {
    type: Object as CustomPropType<ISponsor>,
    required: true,
  }
})
</script>

<template>
  <nuxt-link
    :to="`/sponsors/#${sponsor.name_en}`"
    class="shadow-card hover:shadow-card-hover transition"
  >
    <img
      :src="props.sponsor.image"
      :alt="props.sponsor.name_jp"
      v-bind="$attrs"
      class="aspect-16/9 object-cover w-full bg-center"
    >
  </nuxt-link>
</template>