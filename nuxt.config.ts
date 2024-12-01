// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-01',
  devtools: { enabled: true },
  nitro:{
    preset: "cloudflare-pages"
  },
    modules: [
      "@nuxt/icon",
      "@nuxt/image",
      "@nuxt/fonts",
      "@samk-dev/nuxt-vcalendar",
      "@pinia/nuxt"
    ],

// nuxt.config.js
  runtimeConfig: {
 
      // Variables públicas accesibles en el cliente
      public: {
          SUPABASE_URL: process.env.SUPABASE_URL,
          // Variables privadas solo para el servidor
          SUPABASE_KEY: process.env.SUPABASE_KEY,
      }
  },
  plugins: [
      '~/plugins/supabase.js'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      title: "Creati Hogar",
    },
    pageTransition: { name: "page", mode: "out-in" },
  }
})