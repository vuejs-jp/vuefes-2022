<template>
  <g
    :transform="transform"
    class="fill-anime-typescript-blue"
  >
    <rect
      key="1"
      ref="shape1"
      x="-60"
      y="-60"
      width="120"
      height="0"
    />
    <rect
      key="2"
      ref="shape2"
      x="-60"
      y="60"
      width="120"
      height="0"
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
  name: 'HeadHorizontal',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true
    }
  },
  setup(props, setupContext) {
    const { createAnimation, fadeAnimation, transformPosition } = useAnimationParts()
    const refs = setupContext.refs

    const transform = transformPosition(props)


    const createAnimations = () => {
      setTimeout(() => {
        createAnimation(refs.shape1, { height: 55 })
        createAnimation(refs.shape2, { y: 5, height: 55 })
      }, 0)
    }

    const fadeAnimations = () => {
      fadeAnimation(refs.shape1, { y: -60, height: 0 })
      fadeAnimation(refs.shape2, { y: 60, height: 0 })
    }

    onMounted(() => {
      createAnimations()
    })

    onBeforeUnmount(() => {
      fadeAnimations()
    })

    return { transform }
  }
})
</script>
