<template>
  <div class="flex flex-col">
    <img
      alt="Vue Fes 2022"
      :src="`/icon/vuefes_logo.svg`"
    >
    <nuxt-link
      to="/"
      title="トップへ戻る"
      class="flex justify-center items-center"
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
      },
    },
  },
}
</script>
