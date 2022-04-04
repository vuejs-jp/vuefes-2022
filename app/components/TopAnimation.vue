<template>
  <section>
    <!--    <g v-for="item in itemsFlatten" :key="item.key">-->
    <!--      <component :is="item.type" :item="item" />-->
    <!--    </g>-->
    <p>{{ itemsFlatten() }}</p>
  </section>
</template>
<script lang="ts">
import useAnimation from '~/composables/useAnimation'
export default {
  setup() {
    const useAnime = useAnimation()
    return { ...useAnime }
  }
}
</script>