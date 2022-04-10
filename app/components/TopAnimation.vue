<template>
  <section class="mx-[5vw] mt-[1vw] text-center">
    <client-only>
      <svg class="w-full h-auto">
        <g transform="translate(-6, -6)">
          <transition-group
            tag="g"
            mode="out-in"
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
      <p>{{ itemsFlatten() }}</p>
    </client-only>
  </section>
</template>
<script lang="ts">
import useAnimation from '~/composables/useAnimation'
import HeadCircle from '~/components/AnimationShapes/HeadCircle.vue'
export default {
  components: {
    HeadCircle
  },
  setup() {
    const useAnime = useAnimation()
    return { ...useAnime }
  }
}
</script>