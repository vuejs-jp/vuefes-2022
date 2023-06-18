import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'
import { generalOg, twitterOg } from './app/utils/og.constants'
import { preloadImages } from './app/utils/preload.constants'
import { conferenceTitle, urlBasePath } from './app/utils/constants'
import { isProd } from './app/utils/environment.constants'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  router: {
    base: urlBasePath,
  },
  app: {
    buildAssetsDir: '/_nuxt/',
    baseURL: isProd ? '/2022/' : '/',
  },

  target: 'static',
  css: ['~/assets/main.scss'],
  head: {
    title: conferenceTitle,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      ...generalOg(),
      ...twitterOg(),
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '180x180', href: '/icon/apple-touch-icon.png' },
      ...preloadImages(),
    ],
    htmlAttrs: {
      lang: 'ja',
    },
    bodyAttrs: {
      class: [isProd ? 'prod-body' : 'body'],
    },
  },
  serverMiddleware: [{ path: '/api/hello', handler: '~/server/api/hello.ts' }],
  modules: ['@nuxtjs/tailwindcss'],
  vite: {
    plugins: [svgLoader()],
  },
  bridge: {
    meta: true,
  },
  generate: {
    dir: 'dist/2022',
  },
  runtimeConfig: {
    public: {
      kokuryuFontId: process.env.NUXT_KOKURYU_FONT_ID,
      gtagId: process.env.NUXT_GTAG_ID,
      newtCdnToken: process.env.NUXT_NEWT_CDN_TOKEN,
      newtSpaceUid: process.env.NUXT_NEWT_SPACE_UID,
    },
  },
})
