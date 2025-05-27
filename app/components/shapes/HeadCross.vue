<template>
  <g
    :transform="transform"
    class="fill-anime-asagi"
  >
    <polygon
      key="1"
      ref="shape1"
      :points="KEY_FRAME1[0]"
    />
    <polygon
      key="2"
      ref="shape2"
      :points="KEY_FRAME2[0]"
    />
    <polygon
      key="3"
      ref="shape3"
      :points="KEY_FRAME3[0]"
    />
    <polygon
      key="4"
      ref="shape4"
      :points="KEY_FRAME4[0]"
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
  name: 'HeadCross',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const { createAnimation, fadeAnimation, transformPosition } = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME1 = ['0 -60 0 -60 0 -60', '-54 -60 54 -60 0 -6']
    const KEY_FRAME2 = ['-60 0 -60 0 -60 0', '-60 -54 -60 54 -6 0']
    const KEY_FRAME3 = ['0 60 0 60 0 60', '54 60 -54 60 0 6']
    const KEY_FRAME4 = ['60 0 60 0 60 0', '60 54 60 -54 6 0']

    const transform = transformPosition(props)

    const createAnimations = () => {
      setTimeout(() => {
        createAnimation(refs.shape1, { points: KEY_FRAME1[1] })
        createAnimation(refs.shape2, { points: KEY_FRAME2[1] })
        createAnimation(refs.shape3, { points: KEY_FRAME3[1] })
        createAnimation(refs.shape4, { points: KEY_FRAME4[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      fadeAnimation(refs.shape1, { points:KEY_FRAME1[0] })
      fadeAnimation(refs.shape2, { points:KEY_FRAME2[0] })
      fadeAnimation(refs.shape3, { points:KEY_FRAME3[0] })
      fadeAnimation(refs.shape4, { points:KEY_FRAME4[0] })
    }

    onMounted(() => {
      createAnimations()
    })

    onBeforeUnmount(() => {
      fadeAnimations()
    })

    return {
      KEY_FRAME1,
      KEY_FRAME2,
      KEY_FRAME3,
      KEY_FRAME4,
      transform,
    }
  }
})
</script>
