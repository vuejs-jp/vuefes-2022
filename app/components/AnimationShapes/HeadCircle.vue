<template>
  <g
    :transform="transform"
    class="fill-anime-sangosyou"
  >
    <circle
      ref="shape"
      cx="0"
      cy="0"
      r="0"
    />
  </g>
</template>
<script lang="ts">
import type { CustomPropType } from '~/types/shims-vue'
import { useAnimationParts } from '~/composables/useAnimationParts'

interface IPropParts {
  type: string
  x: number
  y: number
  rotate: number
  src: string
  key: string
}

export default {
  name: 'HeadCircle',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const useAnimeParts = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME = [0, 60]

    const transform = useAnimeParts.transform(props)

    const createAnimations = () => {
      setTimeout(() => {
        useAnimeParts.createAnimation(refs.shape, { r: KEY_FRAME[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      useAnimeParts.fadeAnimation(refs.shape, { r: KEY_FRAME[0] })
    }

    onMounted(() => {
      createAnimations()
    })

    onBeforeUnmount(() => {
      fadeAnimations()
    })

    return { transform }
  }

}

</script>