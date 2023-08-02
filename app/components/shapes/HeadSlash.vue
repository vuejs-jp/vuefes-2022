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

export default defineComponent({
  name: 'HeadSlash',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const { createAnimation, fadeAnimation, transformPosition } = useAnimationParts()
    const shape1 = ref()
    const shape2 = ref()

    const KEY_FRAME1 = ['-60 -60 -60 -60 -60 -60', '-60 -60 54 -60 -60 54']
    const KEY_FRAME2 = ['60 60 60 60 60 60', '60 60 -54 60 60 -54']

    const transform = transformPosition(props)

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
        createAnimation(shape1.value, { points: KEY_FRAME1[1] })
        createAnimation(shape2.value, { points: KEY_FRAME2[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      fadeAnimation(shape1.value, { points: KEY_FRAME1[0] })
      fadeAnimation(shape2.value, { points: KEY_FRAME2[0] })
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
})
</script>
