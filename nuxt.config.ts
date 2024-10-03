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
  pwa: {
        registerType: 'autoUpdate',
 manifest: {
      name: 'App Croissant',
      short_name: 'Croissant',
      theme_color: '#ffffff',
      icons: [
        
        {
          src: 'images/logo_croissant.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'images/logo_croissant.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
     client: {
      // installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
  },
   tailwindcss: {
    editorSupport: true
    // editorSupport: { autocompleteUtil: { as: 'tailwindClasses' } }
  },
   runtimeConfig: {
    FUDO_API_KEY: '',
FUDO_API_SECRET: '',
FUDO_API_TOKEN: '',
 public: {
      baseURL: process.env.NODE_ENV === 'production' ?	'https://app.croissant.com.ar/' : 'http://localhost:3000',
    },
  },
   auth: {
    globalAppMiddleware: true,
    origin:'https://app.croissant.com.ar/'
   },
})