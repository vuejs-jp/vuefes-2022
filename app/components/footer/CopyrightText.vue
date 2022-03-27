<script setup lang="ts">
import { copyrightDetail } from '~/utils/constants'
</script>

<template>
  <p
    class="text-xs text-center lg:text-base"
    v-html="copyrightDetail"
  />
</template>
