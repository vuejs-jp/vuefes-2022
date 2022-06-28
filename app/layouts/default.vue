<script setup lang="ts">
import { initHeadingFont } from '../services/initHeadingFont'

onMounted(() => {
  if (document !== undefined) {
    initHeadingFont()
  }
})
</script>

<template>
  <router-view />
</template>
