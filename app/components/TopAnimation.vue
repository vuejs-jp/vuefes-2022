<template>
  <section class="mt-[1vw] mb-[5vw] h-[calc(120px*3_+_12px*2)] lg:h-[calc(((100vw_-_7.8vw*2_-_12px*8)/9)*3_+_12px*2)] 3xl:h-[calc(120px*3_+_12px*2)]">
    <client-only>
      <svg
        class="mx-auto max-w-full h-auto"
        :width="state.width"
        :height="state.height"
        :viewBox="`0 0 ${state.width} ${state.height}`"
      >
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
  </section>
</template>
<script lang="ts">
import { useAnimation } from '~/composables/useAnimation'
import HeadCircle from '~/components/AnimationShapes/HeadCircle.vue'
import HeadCross from '~/components/AnimationShapes/HeadCross.vue'
import HeadHorizontal from '~/components/AnimationShapes/HeadHorizontal.vue'
import HeadSlash from '~/components/AnimationShapes/HeadSlash.vue'
import HeadTriangle from '~/components/AnimationShapes/HeadTriangle.vue'
import HeadPhoto from '~/components/AnimationShapes/HeadPhoto.vue'

export default {
  components: {
    HeadCircle,
    HeadCross,
    HeadHorizontal,
    HeadSlash,
    HeadTriangle,
    HeadPhoto
  },
  setup() {
    const useAnime = useAnimation()
    return { ...useAnime }
  }
}
</script>