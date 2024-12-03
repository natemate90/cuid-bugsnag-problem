// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['nuxt-bugsnag'],

  bugsnag: {
    performance: true,
    config: {
      apiKey: 'YOUR_API_KEY',
      enabledReleaseStages: ['development'],
      releaseStage: 'development'
    }
  }
})