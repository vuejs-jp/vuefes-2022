export default () => {
  const nuxtApp = useNuxtApp()
  return {
    gsap: nuxtApp.$gsap,
    Power2: nuxtApp.$Power2,
  }
}
