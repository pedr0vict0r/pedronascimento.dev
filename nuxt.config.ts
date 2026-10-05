// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://pedronascimento.dev.br'
const siteName = 'Pedro Nascimento Developer'
const description = 'Um Desenvolvedor de Belém do Pará'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-05',
  devtools: { enabled: true },

  modules: ['@nuxtjs/color-mode'],

  css: ['~/assets/css/main.css', '~/assets/css/fonts.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: siteName,
      meta: [
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: siteName },
        { property: 'og:locale', content: 'pt_BR' },
        { property: 'og:url', content: `${siteUrl}/` },
        { property: 'og:title', content: siteName },
        { property: 'og:description', content: description },
        // gerada por scripts/gera-imagens.py
        { property: 'og:image', content: `${siteUrl}/og-image.jpg` },
        { property: 'og:image:width', content: '1024' },
        { property: 'og:image:height', content: '1024' },
        { property: 'og:image:alt', content: 'Caricatura de Pedro Nascimento' },
        { name: 'twitter:card', content: 'summary' },
      ],
      link: [
        { rel: 'canonical', href: `${siteUrl}/` },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    },
  },

  // tema: segue o sistema; sem preferência detectável, cai no escuro
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
})
