// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  modules: [
    '@nuxt/devtools',
    '@pinia/nuxt',
    '@nuxt/ui',
    [
      'nuxt-typed-router',
      {
        plugins: true
      }
    ]
  ],

  imports: {
    dirs: ['store']
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
