// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://iconsax.gitlab.io/i/icons.css'
      }
    ]
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://iconsax.gitlab.io/i/icons.css' }]
    }},
  modules: ["nuxt-icon",'@ant-design-vue/nuxt','nuxt-swiper','vue3-carousel-nuxt'],
});
