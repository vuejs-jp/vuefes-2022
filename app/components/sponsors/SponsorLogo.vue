<script setup lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import { ISponsor } from '~/types/sponsors'

const props = defineProps({
  sponsor: {
    type: Object as CustomPropType<ISponsor>,
    required: true,
  }
})
</script>

<template>
  <a
    v-if="sponsor"
    :id="sponsor.name_jp"
    :href="`/sponsors#${sponsor.name_en}`"
    class="shadow-card hover:shadow-card-hover transition"
  >
    <img
      :src="props.sponsor.image.src"
      :alt="props.sponsor.name_jp"
      class="aspect-16/9 object-cover w-full bg-center"
    >
  </a>
</template>
