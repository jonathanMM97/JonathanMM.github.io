// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jonathan Portfolio',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'description', content: "TODO: write a description" }
      ]
    },
    baseURL: process.env.BASE_URL ?? '/'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },
  css: [
    '~/tailwind/main.css',
    '~/assets/css/reset.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
