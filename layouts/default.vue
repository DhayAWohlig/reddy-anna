<template>
  <v-app dark>
    <noscript v-html="iFrameCode" />
    <Snackbar></Snackbar>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '~/components/Snackbar.vue'
export default {
  components: { Snackbar },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      iFrameCode:
        '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WLSGQNB"height="0" width="0" style="display:none;visibility:hidden"></iframe>',
    }
  },
}
</script>

<style></style>
