import { defineNuxtConfig } from '@nuxt/bridge'
import { generalOg, twitterOg } from './app/utils/og.constants'
import { preloadImages } from './app/utils/preload.constants'
import { conferenceTitle } from './app/utils/constants'
import { isProd } from './app/utils/environment.constants'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  router: {
    base: isProd ? '/2022/' : '/',
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
  },
  serverMiddleware: [{ path: '/api/hello', handler: '~/server/api/hello.ts' }],
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
  generate: {
    dir: 'dist/2022',
  },
  publicRuntimeConfig: {
    NUXT_KOKURYU_FONT_ID: process.env.NUXT_KOKURYU_FONT_ID,
    NUXT_GTAG_ID: process.env.NUXT_GTAG_ID,
  },
  build: {
    extractCSS: true,
  },
})
