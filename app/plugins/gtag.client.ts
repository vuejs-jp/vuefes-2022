import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig()
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: runtimeConfig.gtagId,
      },
    },
    nuxtApp.$router,
  )
})
