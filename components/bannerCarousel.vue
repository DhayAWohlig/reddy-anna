<template>
  <div class="hero-slider">
    <!-- <img
      src="@/assets/images/digimaze_mobile-brand-am.png"
      alt=""
      style="max-width: 18rem"
    /> -->
    <VueSlickCarousel v-bind="settings">
      <v-card
        v-for="(mobileBanner, n) in mobileBanners"
        :key="n"
        flat
        color="transparent"
        class="mx-auto"
      >
        <v-img
          contain
          :src="require(`@/assets/images/${mobileBanner.myImage}.png`)"
          :lazy-src="require(`@/assets/images/${mobileBanner.myImage}.png`)"
          max-width="287px"
          class="mx-auto"
          :alt="mobileBanner.alt"
        ></v-img>
      </v-card>
    </VueSlickCarousel>
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
      mobileBanners: [
        {
          myImage: 'lotus1',
          alt: '',
        },
        {
          myImage: 'lotus1',
          alt: '',
        },
        {
          myImage: 'lotus1',
          alt: '',
        },
      ],
      settings: {
        focusOnSelect: true,
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        // variableWidth: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
.hero-slider {
  .slick-list {
    margin: 0 auto !important;
    width: 17rem !important;
  }
}
</style>