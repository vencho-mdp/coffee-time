// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
  modules: [
   "@nuxtjs/tailwindcss",
   "@sidebase/nuxt-auth",
   "@vite-pwa/nuxt",
   ["@nuxtjs/google-fonts", {
    families: {
      'Courier Prime': true,
      'Huntress': true,
      'Anton': true
    }
   }]
  ],
   tailwindcss: {
    editorSupport: true
    // editorSupport: { autocompleteUtil: { as: 'tailwindClasses' } }
  },
   runtimeConfig: {
    FUDO_API_KEY: '',
FUDO_API_SECRET: '',
FUDO_API_TOKEN: '',
 public: {
      baseURL: process.env.NODE_ENV === 'production' ?	'http://app.croissant.com.ar/' : 'http://localhost:3000',
    },
  },
   auth: {
    globalAppMiddleware: true,
    origin:'https://app.croissant.com.ar/'
   },
})