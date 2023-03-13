<template>
  <div>
    <v-app-bar app dense fixed height="60px">
      <div
        v-if="$breakpoint.smAndDown"
        class="d-none justify-content-between py-2 w-100 align-items-center"
        :class="$breakpoint.smAndDown ? '' : ''"
      >
        <v-app-bar-nav-icon
          color="white"
          class="ham-icon d-none"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <!-- <v-card-actions v-if="$breakpoint.smAndDown" class="justify-center"> -->
        <v-btn
          v-if="$breakpoint.smAndDown"
          rounded
          small
          color="#4caf50"
          :href="whatsappLink"
          class="elevation-0 text-right d-none"
          >Join Now</v-btn
        >
      </div>
      <v-toolbar class="container">
        <v-toolbar-title class="">
          <nuxt-link to="/">
            <v-toolbar-title>
              <!-- <v-icon size="25">mdi-home</v-icon> -->
              <!-- <span class="f16">Home</span> -->
              <span class="f16 text-capitalize">{{ hostName }}</span>
            </v-toolbar-title>
          </nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-title v-if="!$breakpoint.smAndDown" class="mx-5 d-none">
          <nuxt-link to="/about-us">
            <v-toolbar-title
              ><v-icon size="25">mdi-account</v-icon>
              <span class="f16">About Us</span></v-toolbar-title
            >
          </nuxt-link>
        </v-toolbar-title>
        <v-toolbar-title v-if="!$breakpoint.smAndDown" class="d-none">
          <nuxt-link to="/our-brand-ambassador">
            <v-icon size="25">mdi-bullhorn-variant</v-icon>
            <span class="f16">Our Brand Ambassadors</span>
          </nuxt-link>
        </v-toolbar-title>
      </v-toolbar>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed right temporary>
      <v-list nav dense flat>
        <v-list-item-group
          v-model="group"
          active-class="transparent"
          class="transparent"
        >
          <v-list-item
            v-for="(nav, index) in navigations"
            :key="index"
            :ripple="false"
            class="text-left"
          >
            <v-list-item-title @click="active(index)">
              <nuxt-link :to="nav.link" class="helllp">
                <v-icon
                  class="mr-2"
                  :color="index === activeNav ? '#e15b27' : ''"
                >
                  {{ nav.icon }}
                </v-icon>
                <span :class="index === activeNav ? 'activeText' : ''">
                  {{ nav.name }}
                </span>
              </nuxt-link>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ['domainName', 'hostName'],

  data: () => ({
    drawer: false,
    group: null,
    whatsappLink: 'http://wa.link/promofp',
    scrollTop: 0,
  }),

  computed: {
    navigations() {
      return this.$store.state.headerBar.navigations
    },
    activeNav() {
      return this.$store.state.headerBar.active
    },
  },
  watch: {
    handleScroll(event) {
      this.scrollTop = event.currentTarget.scrollTop
      console.log('SCROLL', this.scrollTop)
    },
    group() {
      this.drawer = false
    },
  },

  mounted() {
    this.active()
  },

  methods: {
    active() {
      if (this.$route.name === 'index') {
        this.$store.commit('headerBar/set_active', 0)
      } else if (this.$route.name === 'about-us') {
        this.$store.commit('headerBar/set_active', 1)
      } else if (this.$route.name === 'our-brand-ambassador') {
        this.$store.commit('headerBar/set_active', 2)
      }
    },
  },
}
</script>

<style lang="scss">
header {
  background: transparent !important;
  box-shadow: none !important;
}
.hamburger-mobile {
  // background-color: #e15b27;
  position: relative;
  padding: 10px 0 10px;
}

.activeText {
  color: #e15b27;
}
/* .head-text {
  color: white;
  text-decoration: none;
}
.head-text:hover {
  color: black;
  text-decoration: none;
} */
a {
  color: white !important;
  text-decoration: none;
  &:hover {
    color: black !important;
    text-decoration: none;
  }
}
// .ham-icon {
//   position: absolute;
//   top: 6px;
//   left: 0;
// }
.v-toolbar__content {
  height: 49px !important;
}
</style>
