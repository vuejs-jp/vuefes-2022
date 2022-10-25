<template>
  <client-only>
    <svg :viewBox="`0 0 ${state.width} ${state.height}`">
      <g transform="translate(-6, -6)">
        <transition-group
          tag="g"
          mode="out-in"
          @leave="transitionLeave"
          @enter="transitionEnter"
        >
          <g
            v-for="item in itemsFlatten()"
            :key="item.key"
          >
            <component
              :is="item.type"
              :parts="item"
            />
          </g>
        </transition-group>
      </g>
    </svg>
  </client-only>
</template>

<script lang="ts">
import { useAnimation } from '~/composables/useAnimation'
import HeadCircle from '~/components/shapes/HeadCircle.vue'
import HeadCross from '~/components/shapes/HeadCross.vue'
import HeadHorizontal from '~/components/shapes/HeadHorizontal.vue'
import HeadSlash from '~/components/shapes/HeadSlash.vue'
import HeadTriangle from '~/components/shapes/HeadTriangle.vue'
import HeadPhoto from '~/components/shapes/HeadPhoto.vue'

export default defineComponent({
  components: {
    HeadCircle,
    HeadCross,
    HeadHorizontal,
    HeadSlash,
    HeadTriangle,
    HeadPhoto,
  },
  setup() {
    const useAnime = useAnimation()
    return { ...useAnime }
  },
})
</script>
