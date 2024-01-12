// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      'title': 'nuxt-3'
    }
  },

  devServer: {
    port: 3003
  }
})
