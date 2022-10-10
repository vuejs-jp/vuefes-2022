<script setup lang="ts">
import { copyrightDetail } from '~/utils/constants'
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <p
    class="text-center text-xs lg:text-base"
    v-html="copyrightDetail"
  />
  <!-- eslint-enable -->
</template>
