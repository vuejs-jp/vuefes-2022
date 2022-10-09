<script setup lang="ts">
import NavPageSection from '~/components/NavPageSection.vue'

const showNav = ref(false)
const nav = ref(null)

const checkShowNav = () => {
  // 画面トップから50pxスクロールしたら表示する。
  showNav.value = window.pageYOffset > 50
}

onMounted(() => {
  checkShowNav()
  window.addEventListener('scroll', checkShowNav)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkShowNav)
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