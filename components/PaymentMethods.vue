<template>
  <div class="payment-methods-component">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="12" sm="12">
          <div
            class="text-md-left text-center"
            :class="$breakpoint.smAndDown ? '' : ''"
          >
            <h2
              class="font-weight-bold text-center text-capitalize"
              :class="$breakpoint.smAndDown ? 'title' : 'display-1'"
            >
              <!-- payment methods -->
              Withdraw Your Winnings Instantly with
            </h2>
          </div>
        </v-col>
        <v-col cols="12" md="12" sm="12">
          <VueSlickCarousel v-bind="settings" width="80%">
            <div
              v-for="(paymentMethod, n) in paymentMethods"
              :key="n"
              class="pa-2"
            >
              <v-card
                color="white"
                class="ma-1 payment-card"
                :height="$breakpoint.smAndDown ? 60 : 70"
                :width="$breakpoint.smAndDown ? 100 : 160"
                ><v-img
                  contain
                  :src="`${paymentMethod.myImage}`"
                  :lazy-src="`${paymentMethod.myImage}`"
                  aspect-ratio="2"
                  max-height="50"
                  max-width="70"
                  class="mx-auto"
                  :alt="paymentMethod.alt"
                ></v-img>
              </v-card>
            </div>
          </VueSlickCarousel>
        </v-col>
      </v-row>
      <div></div>
    </v-container>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      model: null,
      CDN_IMG_URL: process.env.CDN_IMG_URL,
      paymentMethods: [
        {
          myImage:
            'https://fairplay-image.fairplay.club/payment-methods/bank-deposit.png',
          alt: 'Bank-deposit',
        },
        {
          myImage:
            'https://fairplay-image.fairplay.club/payment-methods/gpay.png',
          alt: 'Gpay',
        },
        {
          myImage:
            'https://fairplay-image.fairplay.club/payment-methods/paytm.png',
          alt: 'Paytm',
        },
        {
          myImage:
            'https://fairplay-image.fairplay.club/payment-methods/phonepe.png',
          alt: 'Phonepe',
        },
        {
          myImage:
            'https://fairplay-image.fairplay.club/payment-methods/upi.png',
          alt: 'Upi',
        },
        // { myImage: 'paypal', alt: 'Paypal' },
        // { myImage: 'ethereum', alt: 'Ethereum' },
        // { myImage: 'bitcoin', alt: 'Bitcoin' },
        // { myImage: 'tether', alt: 'Tether' }
      ],
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
        ],
      },
    }
  },
}
</script>
<style lang="scss">
.payment-card {
  display: flex !important;
  align-items: center;
  padding: 0 10px;
}
</style>
