// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      'title': 'nuxt-3'
    }
  },

  modules: [
    '@nuxtjs/eslint-module',
  ],

  devServer: {
    port: 3003
  }
})
