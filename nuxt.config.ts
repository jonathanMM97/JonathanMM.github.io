// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jonathan Creative Developer',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ],
      meta: [{ name: 'description', content: 'Here is where my code meets creativity.' }]
    },
    baseURL: process.env.BASE_URL ?? '/'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  components: [
    {
      path: '~/app/components',
      pathPrefix: false
    }
  ],
  site: {
    url: 'https://www.jonathanmm.com/',
    name: 'Jonathan Creative Developer'
  },
  devtools: { enabled: true }
})
