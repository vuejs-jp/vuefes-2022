<script setup lang="ts">
import { copyrightDetail } from '~/utils/constants'
</script>

<template>
  <div class="flex justify-center items-center mt-10">
    <div
      class="text-xs text-center"
      v-html="copyrightDetail"
    />
  </div>
</template>
