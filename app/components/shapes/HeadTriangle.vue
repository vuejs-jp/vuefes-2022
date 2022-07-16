<template>
  <g
    :transform="transform"
    class="fill-anime-tohoh"
  >
    <polygon
      ref="shape"
      :points="KEY_FRAME[0]"
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
  name: 'HeadTriangle',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const { createAnimation, fadeAnimation, transformPosition } = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']

    const transform = transformPosition(props)

    const createAnimations = () => {
      setTimeout(() => {
        createAnimation(refs.shape, { points: KEY_FRAME[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      fadeAnimation(refs.shape, { points: KEY_FRAME[0] })
    }

    onMounted(() => {
      createAnimations()
    })

    onBeforeUnmount(() => {
      fadeAnimations()
    })

    return {
      transform,
      KEY_FRAME
    }
  }

}
</script>