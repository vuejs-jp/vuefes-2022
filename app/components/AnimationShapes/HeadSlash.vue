<template>
  <g
    :transform="transform"
    :class="getFillColor()"
  >
    <polygon
      key="0"
      ref="shape1"
      :points="KEY_FRAME1[0]"
    />
    <polygon
      key="1"
      ref="shape2"
      :points="KEY_FRAME2[0]"
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
  name: 'HeadSlash',
  props: {
    parts: {
      type: Object as PropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const useAnimeParts = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME1 = ['-60 -60 -60 -60 -60 -60', '-60 -60 54 -60 -60 54']
    const KEY_FRAME2 = ['60 60 60 60 60 60', '60 60 -54 60 60 -54']

    const transform = useAnimeParts.transform(props)

    // ランダムで色を返す
    const getFillColor = () => {
      const randomBool = Math.floor(Math.random()*2)
      if (randomBool) {
        return 'fill-anime-hiwamoegi'
      } else {
        return 'fill-anime-vue-green'
      }
    }

    const createAnimations = () => {
      setTimeout(() => {
        useAnimeParts.createAnimation(refs.shape1, { points: KEY_FRAME1[1] })
        useAnimeParts.createAnimation(refs.shape2, { points: KEY_FRAME2[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      useAnimeParts.fadeAnimation(refs.shape1, { points: KEY_FRAME1[0] })
      useAnimeParts.fadeAnimation(refs.shape2, { points: KEY_FRAME2[0] })
    }

    onMounted(() => {
      createAnimations()
    })

    onBeforeUnmount(() => {
      fadeAnimations()
    })

    return {
      transform,
      getFillColor,
      KEY_FRAME1,
      KEY_FRAME2
    }
  }
}
</script>