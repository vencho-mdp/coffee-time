// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", ["@nuxtjs/google-fonts", {
   families: {
     'Courier Prime': true,
     'Huntress': true,
     'Anton': true
   }
  }], '@vite-pwa/nuxt'],
   tailwindcss: {
    editorSupport: true
    // editorSupport: { autocompleteUtil: { as: 'tailwindClasses' } }
  },
  pwa: {
      registerType: 'autoUpdate',
      manifest: {
      name: 'Croissant App',
      short_name: 'Crossi',
      description: 'Aplicación de puntos del Café Croissant',
            lang:'es',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'images/logo_croissant_pwa.png',
          type: 'image/png',
                    sizes: '144x144',
        },
       
      ],
    },
          workbox: {

      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: true,
      // suppressWarnings: true,
      navigateFallback: '/',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
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