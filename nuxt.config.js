export default {
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Reddy Anna',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Reddy Anna',
      },
      { name: 'og:title', content: 'Reddy Anna' },
      { name: 'og:site_name', content: 'Reddy Anna' },
      {
        name: 'og:description',
        content: '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',
      },
    ],
  },
  css: [
    // CSS file in the project
    '~/assets/scss/style.css',
    // SCSS file in the project
    '~/assets/scss/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/Plugins/breakpoint.js', '~/Plugins/bootstrap-vue.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: 'prod-fairplay.env' }],
  ],
  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Ld1zj8gAAAAAPA9uRyYq_ONeITHXJd_u67bDeXH',
    secretKey: '6Ld1zj8gAAAAABNTqkPgIZuT8IAWe0LSdsQx4nLd',
    version: 2, // Version
    size: 'invisible', // Size: 'compact', 'normal', 'invisible' (v2)
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],
  static: {
    prefix: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
