<template>
  <g :transform="transform">
    <clipPath id="clip-boundary">
      <rect
        x="-60"
        y="-60"
        width="120"
        height="120"
      />
    </clipPath>
    <clipPath :id="CLIP_ID">
      <circle
        ref="shape"
        cx="0"
        cy="0"
        r="0"
        clip-path="url(#clip-boundary)"
      />
    </clipPath>
    <image
      key="1"
      :href="`/img/animation/${parts.src}`"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
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
  name: 'HeadPhoto',
  props: {
    parts: {
      type: Object as PropType<IPropParts>,
      required: true
    }
  },

  setup(props, setupContext) {
    const useAnimeParts = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME = [0, 60 * (2 ^ 0.5)]
    const CLIP_ID = `photo-clip${props.parts.key}`

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

    return { transform, CLIP_ID }
  }
}
</script>