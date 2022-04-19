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
import { PropType } from '@nuxt/bridge/dist/runtime/vue2-bridge'
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
      type: Object as PropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const useAnimeParts = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME = ['60 60 60 60 60 60', '60 60 -52 60 60 -52']

    const transform = useAnimeParts.transform(props)

    const createAnimations = () => {
      setTimeout(() => {
        useAnimeParts.createAnimation(refs.shape, { points: KEY_FRAME[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      useAnimeParts.fadeAnimation(refs.shape, { points: KEY_FRAME[0] })
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