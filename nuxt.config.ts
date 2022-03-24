import { defineNuxtConfig } from '@nuxt/bridge'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  target: 'static',
  css: ['~/assets/main.scss'],
  head: {
    meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  },
  serverMiddleware: [{ path: '/api/hello', handler: '~/server/api/hello.ts' }],
  buildModules: ['@nuxtjs/device', '@nuxtjs/svg', '@nuxtjs/tailwindcss'],
  publicRuntimeConfig: {
    NUXT_KOKURYU_FONT_ID: process.env.NUXT_KOKURYU_FONT_ID,
  },
})
