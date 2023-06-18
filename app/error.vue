<script setup lang="ts">
interface ErrorProps {
  error: { statusCode: string }
}
const props = defineProps<ErrorProps>()
</script>

<template>
  <div class="error">
    <nuxt-link
      to="/"
      title="トップへ戻る"
    >
      <h2>Oooops, something is wrong \ {{ error.statusCode }} / error</h2>
      <h3>Please click here to return to the top of the website!</h3>
    </nuxt-link>
  </div>
</template>
