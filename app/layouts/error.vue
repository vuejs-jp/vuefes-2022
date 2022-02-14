<template>
  <div class="error">
    <img
      alt="Vue Fes 2022"
      :src="`/icon/vuefes_logo.svg`"
    >
    <nuxt-link
      to="/"
      title="トップへ戻る"
      class="icon"
    >
      Oooops, something is wrong \ {{ error.statusCode }} / error
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    error: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
