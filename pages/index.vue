<template>
  <div>
    <div class="hero">
      <div class="container">
        <div @scroll="handleScroll">
          <header-bar
            :domain-name="domainName"
            :host-name="hostName"
          ></header-bar>
        </div>
        <v-row
          :class="!$vuetify.breakpoint.mdAndDown ? 'dform' : 'mobalign'"
          class="py-12"
        >
          <v-col
            class="col-12 col-md-12 col-lg-6 d-none"
            :class="$vuetify.breakpoint.xsOnly ? 'py-12' : 'py-16'"
          >
            <whatsapp-section
              class="anim"
              :class="
                !$vuetify.breakpoint.mdAndDown ? 'px-8 py-20 form2' : 'px-6'
              "
            ></whatsapp-section>
          </v-col>
          <v-col
            class="col-12 col-md-12 col-lg-6 d-none"
            :class="$vuetify.breakpoint.xsOnly ? 'py-12' : 'p-0'"
          >
            <div class="text-center">
              <BannerCarousel />

              <!-- <img
                src="@/assets/images/digimaze_mobile-brand-am.png"
                alt=""
                style="max-width: 18rem"
              />
              <v-img
                width="100%"
                src="assets/images/digimaze_mobile-brand-am.png"
              ></v-img> -->
            </div>
          </v-col>
          <v-col
            cols="12"
            lg="5"
            class="align-cls d-none"
            :class="$vuetify.breakpoint.xsOnly ? 'py-12' : ''"
          >
            <v-img
              :class="
                !$vuetify.breakpoint.mdAndDown ? 'px-8 py-20 form2' : 'px-6'
              "
            >
              <v-row
                no-gutters
                align="center"
                justify="center"
                class="fill-height"
              >
                <v-col cols="12" md="8" lg="12" class="pt-3 max-width">
                  <div cols="12" lg="5" md="5" class="whatsapp-section-margin">
                    <whatsapp-section></whatsapp-section>
                  </div>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </div>
      <div class="container-fluid payment">
        <PaymentMethods />
      </div>
    </div>
    <div class="container-fluid">
      <TestiMonials :domain-name="domainName" :host-name="hostName" />
    </div>
    <PlayGames :domain-name="domainName" :host-name="hostName" />
    <FooterBar :domain-name="domainName" :host-name="hostName" />
  </div>
</template>

<script>
import PaymentMethods from '../components/PaymentMethods.vue'
import WhatsappSection from '~/components/WhatsappSection.vue'
import HeaderBar from '~/components/HeaderBar.vue'
import PlayGames from '~/components/PlayGames.vue'
import TestiMonials from '~/components/testiMonials.vue'
import BannerCarousel from '~/components/bannerCarousel.vue'
import FooterBar from '~/components/FooterBar.vue'

export default {
  components: {
    WhatsappSection,
    PaymentMethods,
    HeaderBar,
    TestiMonials,
    BannerCarousel,
    PlayGames,
    FooterBar,
  },
  data: () => ({
    title5: 'AVAIL YOUR BONUS',
    NEW_WHATSAPP_NO: '447938442927',
    domainName: '',
    hostName: '',
    scrollTop: 0,
  }),
  head() {
    return {
      title: `${this.domainName}`,
    }
  },
  created() {
    if (process.client) {
      this.getDomain()
    }
  },
  methods: {
    handleScroll(event) {
      this.scrollTop = event.currentTarget.scrollTop
      document.getElementsByTagName('header').classList.add('fixed')
    },
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
    getDomain() {
      this.domainName = window.location.hostname
      this.hostName = window.location.hostname.split('.')[0]
    },
  },
}
</script>
<style lang="scss">
.desalign {
  flex-direction: column;
}
.mobalign {
  // flex-direction: column-reverse;
}
.line-height {
  line-height: 0.5;
}
.dform {
  border-radius: 1px;
  // background-image: url('/Background/Playfairfantasy_Landing-Page_Desktop.jpg');
  // background-image: url('@/assets/images/backdrop.jpg');
  position: relative;
  height: 35rem;
  width: auto;
  background-position: center -4rem;
  background-size: cover;
  position: relative;
  // z-index: 98;
}
.text2 {
  color: #eace5d;
  font-weight: bold !important;
  border-radius: 4px;
  text-align: center;
}
.text3 {
  max-width: auto;
  color: #eace5d;
  font-weight: 800 !important;
  border-radius: 4px;
  text-align: center;
}
.text4 {
  // font-size: 40px;
  color: #eace5d;
  font-weight: bold !important;
  border-radius: 4px;
  margin-right: 80px;
}
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
.disclaimer_text {
  color: white !important;
  text-decoration: none;
  &:hover {
    color: #e15b27 !important;
    text-decoration: none;
  }
}
@media only screen and (max-width: 320px) {
  .text3 {
    max-width: 250px;
  }
  .text4 {
    margin-right: 40px !important;
  }
}
@media only screen and (min-width: 320px) and (max-width: 425px) {
  .text4 {
    margin-right: 50px !important;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  // .v-icon.v-icon {
  //   font-size: 70px;
  // }
  .text4 {
    margin-right: 170px;
  }
}
@media only screen and (min-width: 375px) and (max-width: 600px) {
  .text3 {
    max-width: 350px;
  }
  .text4 {
    margin-right: 70px !important;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1440px) {
  .max-width {
    max-width: 900px;
  }
  .text3 {
    max-width: 900px;
  }
  .text4 {
    margin-right: 270px;
  }
}
@media screen and (min-width: 1440px) {
  .text4 {
    margin-right: 100px;
  }
}

@media screen and (min-width: 960px) and (max-width: 1024px) {
  .col-lg-8a {
    max-width: 100%;
    width: 100%;
    flex: 0 0 auto;
  }
  .DesktopHeight {
    height: 100% !important;
  }
  .col-lg-5a {
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
  color: white;
}

.sectionHeight {
  padding: 42px 0;
}
@media screen and (max-device-width: 320px) {
  .sectionHeight {
    padding: 32px 0 !important;
  }
}
.d-grid {
  display: grid;
}
.align-cls {
  display: flex !important;
  justify-content: center !important;
}
</style>
