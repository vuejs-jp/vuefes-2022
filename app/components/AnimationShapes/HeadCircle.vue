<template>
  <g
    :transform="transform()"
    class="fill-sangosyu"
  >
    <circle
      ref="shape"
      cx="0"
      cy="0"
      r="0"
    />
  </g>
</template>
<script lang="ts">
import { gsap, Power2 } from 'gsap'
import { PropType } from '@nuxt/bridge/dist/runtime/vue2-bridge'

interface IPropParts {
  type: string
  x: number
  y: number
  rotate: number
  src: string
  key: string
}

export default {
  props: {
    parts: {
      type: Object as PropType<IPropParts>,
      required: true
    }
  },
  setup(props, setupContext) {
    const refs = setupContext.refs

    const KEY_FRAME = [0, 60]

    const transform = () => {
      return `translate(${props.parts.x}, ${props.parts.y}) rotate(${props.parts.rotate})`
    }

    const setAnimation = () => {
      setTimeout(() => {
        gsap.to(refs.shape, 0.6, {
          attr: {
            r: KEY_FRAME[1],
          },
          ease: Power2.easeOut
        })
      }, 0)
    }

    onMounted(() => {
      setAnimation()
    })

    onBeforeUnmount(() => {
      gsap.to(this.$refs.shape, 0.2, {
        attr: {
          r: this.keyFrame[0]
        },
        ease: Power2.easeOut
      })
    })

    return { transform }
  }

}

</script>