import { defineNuxtConfig } from '@nuxt/bridge'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['~/assets/main.scss'],
  serverMiddleware: [{ path: '/api/hello', handler: '~/server/api/hello.ts' }],
  buildModules: ['@nuxtjs/svg', '@nuxtjs/tailwindcss'],
})
