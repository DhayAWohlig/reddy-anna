// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - Predict Win',
    // title: 'Cupgame',
    htmlAttrs: {
      lang: 'en',
    },
    script: [{ src: '/js/gtm.js' }],
    // script: [
    //   {
    //     src: 'static/gtm.js',
    //     head: true,
    //   },
    // ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
      { name: 'og:title', content: '' },
      { name: 'og:site_name', content: '' },
      {
        name: 'og:description',
        content: '',
      },
    ],

    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://www.betconstruct.com/fs/userFiles-v2/bcv2/images/88213478-100769-virtual-sports.png',
      },
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

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/Plugins/breakpoint.js', '~/Plugins/bootstrap-vue.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    // Doc: https://github.com/nuxt-community/dotenv-module
    ['@nuxtjs/dotenv', { filename: 'prod-lotus.env' }],
  ],
  recaptcha: {
    hideBadge: true, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Ld1zj8gAAAAAPA9uRyYq_ONeITHXJd_u67bDeXH',
    secretKey: '6Ld1zj8gAAAAABNTqkPgIZuT8IAWe0LSdsQx4nLd',
    version: 2, // Version
    size: 'invisible', // Size: 'compact', 'normal', 'invisible' (v2)
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#e15b27',
          accent: '#f8d0ce',
          secondary: '#a5d9fe',
          info: '#e76f26',
          warning: '#FF9800',
          error: '#ff5252',
          success: '#43A047',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
