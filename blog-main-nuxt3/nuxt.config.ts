import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: '寻觅 - 记录美好风景',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'static/image/favicon.ico' }
    ]
  },
  vite: {
    logLevel: 'info'
  }
})
