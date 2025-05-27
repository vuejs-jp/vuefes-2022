<script setup lang="ts">
import { ISponsor } from '~/types/sponsors'
import { REDIRECT_URL } from '~/utils/environment.constants'

const props = defineProps<{
  sponsor: ISponsor
}>()
</script>

<template>
  <nuxt-link
    v-if="sponsor"
    :id="sponsor.name_jp"
    :to="`/sponsors#${sponsor.name_en}`"
    class="shadow-card hover:shadow-card-hover transition"
  >
    <img
      :src="`${REDIRECT_URL}/sponsor/${props.sponsor.image.src}`"
      :alt="props.sponsor.name_jp"
      class="aspect-16/9 object-cover w-full bg-center"
    >
  </nuxt-link>
</template>
