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
      v-show="parts.src == 'image01.png'"
      key="1"
      :href="images[0]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
    <image
      v-show="parts.src == 'image02.png'"
      key="2"
      :href="images[1]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
    <image
      v-show="parts.src == 'image03.png'"
      key="3"
      :href="images[2]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
    <image
      v-show="parts.src == 'image04.png'"
      key="4"
      :href="images[3]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
    <image
      v-show="parts.src == 'image05.png'"
      key="5"
      :href="images[4]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
    <image
      v-show="parts.src == 'image06.png'"
      key="6"
      :href="images[5]"
      x="-60"
      y="-60"
      width="120"
      height="120"
      :clip-path="`url(#${CLIP_ID})`"
    />
  </g>
</template>
<script lang="ts">
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

export default {
  name: 'HeadPhoto',
  props: {
    parts: {
      type: Object as CustomPropType<IPropParts>,
      required: true,
    },
  },

  setup(props, setupContext) {
    const useAnimeParts = useAnimationParts()
    const refs = setupContext.refs

    const KEY_FRAME = [0, 60 * (2 ^ 0.5)]
    const CLIP_ID = `photo-clip${props.parts.key}`

    const transform = useAnimeParts.transform(props)

    const images = [Image01, Image02, Image03, Image04, Image05, Image06]

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

    return { transform, CLIP_ID, images }
  },
}
</script>
