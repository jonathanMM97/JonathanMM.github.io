// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Jonathan Creative Developer',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'description', content: "Welcome to my digital playground — where code meets creativity. As a Creative Developer, I blend interactive design, animation, and front-end development to craft immersive web experiences that not only look beautiful but feel alive. From experimental interfaces to storytelling-driven visuals, I bring ideas to life through a mix of technology and imagination." }
      ]
    },
    baseURL: process.env.BASE_URL ?? '/'
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/seo'],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  site: {
    url: 'https://www.jonathanmm.com/',
    name: 'Jonathan Creative Developer',
  },
  devtools: { enabled: true },
})
