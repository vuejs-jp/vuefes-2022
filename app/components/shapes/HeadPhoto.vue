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
      :href="imageSrc"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
  </g>
</template>
<script lang="ts">
import { urlBasePath } from '~/utils/constants'
import type { CustomPropType } from '~/types/shims-vue'
import { useAnimationParts } from '~/composables/useAnimationParts'

import Image01 from '!url-loader!~/assets/img/animation/image01.png'
import Image02 from '!url-loader!~/assets/img/animation/image02.png'
import Image03 from '!url-loader!~/assets/img/animation/image03.png'
import Image04 from '!url-loader!~/assets/img/animation/image04.png'
import Image05 from '!url-loader!~/assets/img/animation/image05.png'
import Image06 from '!url-loader!~/assets/img/animation/image06.png'

interface IPropParts {
  type: string
  x: number
  y: number
  rotate: number
  src: string
  key: string
}

export default defineComponent({
  name: 'HeadPhoto',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true,
    },
  },

  setup(props, setupContext) {
    const { createAnimation, fadeAnimation, transformPosition } = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME = [0, 60 * (2 ^ 0.5)]
    const CLIP_ID = `photo-clip${props.parts.key}`

    const transform = transformPosition(props)

    const imageSrc = computed(() => {
      const images = {
        'image01.png': Image01,
        'image02.png': Image02,
        'image03.png': Image03,
        'image04.png': Image04,
        'image05.png': Image05,
        'image06.png': Image06,
      }
      return `${urlBasePath}/${images[props.parts.src]}`
    })

    const createAnimations = () => {
      setTimeout(() => {
        createAnimation(refs.shape, { r: KEY_FRAME[1] })
      }, 0)
    }

    const fadeAnimations = () => {
      fadeAnimation(refs.shape, { r: KEY_FRAME[0] })
    }

    onMounted(() => {
      createAnimations()
    })

    onBeforeUnmount(() => {
      fadeAnimations()
    })

    return { transform, CLIP_ID, imageSrc }
  },
})
</script>
