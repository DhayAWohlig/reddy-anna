<template>
  <div>
    <div class="abc">
      <header-bar></header-bar>
    </div>
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="fill-height"
      :class="$breakpoint.smAndDown ? '' : 'flex-row-reverse'"
    >
      <v-col cols="12" lg="5">
        <v-img
          :src="
            require('@/static/Background/Fairplay_Play-Now-Landing-Page_Blue-bg.jpg')
          "
          :lazy-src="
            require('@/static/Background/Fairplay_Play-Now-Landing-Page_Blue-bg.jpg')
          "
          class="form2"
          :class="!$vuetify.breakpoint.smAndDown ? 'px-10' : 'px-5'"
          :height="!$vuetify.breakpoint.smAndDown ? '100vh' : ''"
        >
          <v-row
            no-gutters
            align="center"
            justify="center"
            class="fill-height"
            :class="$vuetify.breakpoint.smAndDown ? 'sectionHeight' : ''"
          >
            <whatsapp-block></whatsapp-block>
          </v-row>
        </v-img>
      </v-col>
      <v-col cols="12" lg="7">
        <!-- <a :href="whatsappLink"> -->
        <v-img
          :src="
            !$vuetify.breakpoint.smAndDown
              ? '/Background/DeskTop-ABD-And-Eion-Without-logo-orange-bg.jpg'
              : '/Background/Mobile--ABD-And-Eion-Without-logo-orange-bg.jpg'
          "
          :lazy-src="
            !$vuetify.breakpoint.smAndDown
              ? '/Background/DeskTop-ABD-And-Eion-Without-logo-orange-bg.jpg'
              : '/Background/Mobile--ABD-And-Eion-Without-logo-orange-bg.jpg'
          "
          :class="!$vuetify.breakpoint.smAndDown ? 'DesktopHeight' : ''"
        >
        </v-img>
        <!-- </a> -->
      </v-col>
    </v-row>
    <div class="text-center my-2 my-line">
      <span
        class="text-uppercase disclaimer-text"
        :class="$vuetify.breakpoint.smAndDown ? 'disclaimer-textxs' : ''"
        >Disclaimer : This game involves an element of financial risk and may be
        addictive. Please play responsibly and at your own risk.</span
      >
    </div>
  </div>
</template>

<script>
// import Form from '~/components/Form.vue'
import WhatsappBlock from '~/components/WhatsappBlock.vue'
import HeaderBar from '~/components/HeaderBar.vue'
// import WhatsappSection from '~/components/WhatsappSection.vue'

export default {
  components: {
    // Form,
    WhatsappBlock,
    HeaderBar,
    // WhatsappSection,
  },
  data: () => ({
    title5: 'AVAIL YOUR BONUS',
    NEW_WHATSAPP_NO: '447938442927',
    whatsappLink: 'https://fairplay.co.in/',
  }),
  methods: {
    checkHref() {
      const url = 'https://fairplay.club/'
      if (this.$route.query.btag && this.$route.query.clickid) {
        return `${url}?btag=${this.$route.query.btag}&clickid=${this.$route.query.clickid}`
      } else if (this.$route.query.btag) {
        return `${url}?btag=${this.$route.query.btag}`
      } else if (this.$route.query.clickid) {
        return `${url}?clickid=${this.$route.query.clickid}`
      } else {
        return `${url}`
      }
    },
    goToWhatsapp() {
      window.open(`https://api.whatsapp.com/send?phone=${this.NEW_WHATSAPP_NO}`)
    },
  },
}
</script>

<style lang="scss">
.main-index {
  .v-image__image {
    background-size: cover;
    height: 100vh;
  }
}
.form2 {
  .v-image__image--cover {
    background-size: 100% 100%;
  }
}
.DesktopHeight {
  height: 100vh;
}
@media screen and (min-device-width: 960px) and (max-device-width: 1024px) {
  .col-lg-7 {
    max-width: 100%;
    width: 100%;
    flex: 0 0 auto;
  }
  .DesktopHeight {
    height: 100% !important;
  }
  .col-lg-5 {
    max-width: 100%;
    width: 100%;
    flex: 0 0 auto;
  }
}

@media screen and (min-device-width: 1025px) and (max-device-width: 2300px) {
  .v-image__image--cover {
    background-size: 100% 100% !important;
  }
}
.disclaimer-text {
  font-size: 10px;
}
.disclaimer-textxs {
  font-size: 7px !important;
}
.my-line {
  line-height: 1 !important;
}
.avail-bonus {
  display: flex;
  place-content: center;
  // justify-content: space-between;
}
.avail-your-bonus {
  font-size: larger;
  font-weight: 900;
  // display: grid;
  // place-items: center;
}
.my-icon {
  display: grid;
  place-items: center;
}
.whatsapp-link {
  // cursor: pointer;
  border-radius: 5px;
}
.main-title-text {
  // border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
  background-color: rgb(225, 91, 39);
  border-color: rgb(225, 91, 39);
  // border-radius: 5px;
  width: 100%;
  text-align: center;
  margin: auto;
  letter-spacing: 1px;
  .in-t-text {
    color: #ffffff;
    padding: 2px;
  }
}

.sectionHeight {
  padding: 56px 0;
}
@media screen and (max-device-width: 320px) {
  .sectionHeight {
    padding: 48px 0 !important;
  }
}
</style>
