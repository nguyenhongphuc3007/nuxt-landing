import { createI18n } from 'vue-i18n'
import vi from '../locales/vi.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      vi,
    }
  })

  vueApp.use(i18n)
})