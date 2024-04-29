export default {
  target: 'static',
  head: {
    title: 'Pedro Nascimento Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Um Desenvolvedor de Belém do Pará',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Pedro Nascimento Developer',
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'pt_BR',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://pedronascimento.dev.br/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Pedro Nascimento Developer',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Um Desenvolvedor de Belém do Pará',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://avatars.githubusercontent.com/u/17133455',
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: '1024',
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: '1024',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy'
  ],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },

}
