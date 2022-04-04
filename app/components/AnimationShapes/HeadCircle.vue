<template>
  <!--  <g :transform="transform">-->
  <g>
    <circle
      ref="shape"
      cx="0"
      cy="0"
      r="0"
    />
  </g>
</template>
<script lang="ts" script>
import { PropType } from '@nuxt/bridge/dist/runtime/vue2-bridge'
interface IPropItem {
  type: string
  src: string

}

const props = defineProps({
  // item: {
  //   required: true,
  //   type: Object as PropType<IProp.item>
  // }
})
</script>