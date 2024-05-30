// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@sidebase/nuxt-auth", "@vite-pwa/nuxt"],
   auth: {
    globalAppMiddleware: true,
    origin:'https://coffee-time-pied.vercel.app/'
   },
})