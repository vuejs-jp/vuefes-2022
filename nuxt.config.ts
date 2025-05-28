import { defineNuxtConfig } from '@nuxt/bridge'
import { generalOg, twitterOg } from './app/utils/og.constants'
import { preloadImages } from './app/utils/preload.constants'
import { conferenceTitle } from './app/utils/constants'
import { isProd } from './app/utils/environment.constants'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  router: {
    base: '/2022/',
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
      { rel: 'icon', type: 'image/x-icon', href: '/2022/favicon.ico' },
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
  buildModules: ['@nuxtjs/device', '@nuxtjs/svg', '@nuxtjs/tailwindcss'],
  modules: [
    [
      '@nuxtjs/google-gtag', // GA3
      {
        id: process.env.NUXT_GTAG_ID,
        debug: !isProd,
      },
    ],
  ],
  bridge: {
    meta: true,
  },
  generate: {
    dir: 'dist/2022',
  },
  publicRuntimeConfig: {
    kokuryuFontId: process.env.NUXT_KOKURYU_FONT_ID,
    gtagId: process.env.NUXT_GTAG_ID,
    newtCdnToken: process.env.NUXT_NEWT_CDN_TOKEN,
    newtSpaceUid: process.env.NUXT_NEWT_SPACE_UID,
  },
  build: {
    extractCSS: true,
    loaders: {
      imgUrl: {
        esModule: false,
      },
    },
  },
})
