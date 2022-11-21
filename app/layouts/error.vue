<template>
  <div class="flex flex-col">
    <VuefesLogo />
    <nuxt-link
      to="/"
      title="トップへ戻る"
      class="flex items-center justify-center"
    >
      Oooops, something is wrong \ {{ error.statusCode }} / error
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import VuefesLogo from '~/assets/icon/vuefes_logo.svg'

export default {
  components: {
    VuefesLogo
  },
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
