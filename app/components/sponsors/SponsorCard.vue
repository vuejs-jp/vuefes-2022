<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import ISponsor from '~/types/sponsors'

const props = defineProps({
  sponsor: {
    type: Object as CustomPropType<ISponsor>,
    required: true,
  }
})
const imageStyle = computed(() => `background-image: url(${props.sponsor.image})`)
</script>

<template>
  <nuxt-link
    :to="`/sponsors/#${sponsor.id}`"
    class="aspect-16/9 bg-center bg-cover shadow-card hover:shadow-card-hover transition"
    :style="imageStyle"
  />
</template>