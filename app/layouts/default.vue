<script setup lang="ts">
import { initHeadingFont } from '~/services/initHeadingFont'
import SlidedownNav from '~/components/navbar/SlidedownNav.vue'

onMounted(() => {
  if (document !== undefined) {
    initHeadingFont()
  }
})
</script>

<template>
  <div>
    <SlidedownNav />
    <router-view />
  </div>
</template>
