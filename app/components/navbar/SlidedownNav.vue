<script setup>
import NavPageSection from '../NavPageSection.vue'

const showNav = ref(false)
const nav = ref(null)

const callback = () => {
  showNav.value = window.pageYOffset > nav.value.$el.clientHeight
}

onMounted(() => {
  window.addEventListener('scroll', callback)
})

onUnmounted(() => {
  window.removeEventListener('scroll', callback)
})
</script>

<template>
  <NavPageSection
    ref="nav"
    class="fixed z-10 w-full bg-white/90 nav-hidden"
    :class="{'nav-show': showNav}"
  />
</template>

<style>
.nav-hidden {
  top: -116px;
  transition: top 0.2s;
}

.nav-show {
  top: 0;
}
</style>