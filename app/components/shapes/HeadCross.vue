<template>
  <g
    :transform="transform"
    class="fill-anime-asagi"
  >
    <polygon
      key="1"
      :ref="shape1"
      :points="KEY_FRAME1[0]"
    />
    <polygon
      key="2"
      :ref="shape2"
      :points="KEY_FRAME2[0]"
    />
    <polygon
      key="3"
      :ref="shape3"
      :points="KEY_FRAME3[0]"
    />
    <polygon
      key="4"
      :ref="shape4"
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
    const shape1 = ref()
    const shape2 = ref()
    const shape3 = ref()
    const shape4 = ref()

    const KEY_FRAME1 = ['0 -60 0 -60 0 -60', '-54 -60 54 -60 0 -6']
    const KEY_FRAME2 = ['-60 0 -60 0 -60 0', '-60 -54 -60 54 -6 0']
    const KEY_FRAME3 = ['0 60 0 60 0 60', '54 60 -54 60 0 6']
    const KEY_FRAME4 = ['60 0 60 0 60 0', '60 54 60 -54 6 0']

    const transform = transformPosition(props)

    const createAnimations = () => {
      setTimeout(() => {
        createAnimation(shape1.value, { points: KEY_FRAME1[1] })
        createAnimation(shape2.value, { points: KEY_FRAME2[1] })
        createAnimation(shape3.value, { points: KEY_FRAME3[1] })
        createAnimation(shape4.value, { points: KEY_FRAME4[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      fadeAnimation(shape1.value, { points:KEY_FRAME1[0] })
      fadeAnimation(shape2.value, { points:KEY_FRAME2[0] })
      fadeAnimation(shape3.value, { points:KEY_FRAME3[0] })
      fadeAnimation(shape4.value, { points:KEY_FRAME4[0] })
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
      shape1,
      shape2,
      shape3,
      shape4,
    }
  }
})
</script>
