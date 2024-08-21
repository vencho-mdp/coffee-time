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
    FUDO_API_KEY: "MUAyMjgyMzM=",
FUDO_API_SECRET:"CMGvSoois9aijpLmlsVot8HPodqkG5sX" ,
FUDO_API_TOKEN: "eyJhbGciOiJIUzI1NiJ9.eyJhaSI6MjI4MjMzLCJ1aSI6MSwiZXhwIjoxNzI0Mjc2OTYzfQ.dwWyIp2s5IODLcFFPNGpKuf3dJHPo2KkftoPlvJolUU",
 public: {
      baseURL: 'https://coffee-time-pied.vercel.app/',
    },
  },
   auth: {
    globalAppMiddleware: true,
    origin:'https://coffee-time-pied.vercel.app/'
   },
})