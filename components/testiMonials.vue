<template>
  <section class="section__space">
    <div id="winner_id">
      <h2 class="main__heading text-center">
        <span class="color--skyblue"><strong>3 Crores+</strong></span> Happy
        Gamers &amp; Counting
      </h2>
      <div class="col-12 mx-auto">
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="(testmoni, n) in testimonials"
            :key="n"
            class="pa-2 pt-15"
          >
            <v-card
              color="white"
              class="text-center mx-auto testmoni-card d-flex pb-10"
              max-width="374"
            >
              <div class="winner__card topmt-3">
                <v-avatar height="100" width="100">
                  <img
                    :src="`${testmoni.myImage}`"
                    :lazy-src="`${testmoni.myImage}`"
                    :alt="testmoni.alt"
                    contain
                    class="winner__img"
                    aspect-ratio="2"
                    max-height="100"
                    max-width="100"
                  />
                </v-avatar>
                <v-card-text class="m-0 p-0">
                  <v-row align="center" class="mx-0">
                    <ul
                      class="rating__menu d-flex justify-content-center m-0 p-0"
                    >
                      <li class="rating_list">
                        <img
                          src="https://1101993670.rsc.cdn77.org/img/WebSite/images/rating-4_5.png"
                          alt="rating"
                        />
                      </li>
                    </ul>
                    <h4 class="winner__name mb-0">
                      <strong>{{ testmoni.name }}</strong>
                    </h4>
                    <p class="winner__place">{{ testmoni.place }}</p>
                    <h2 class="winner__title mb-0">
                      {{ testmoni.winamount }}
                    </h2>
                    <p class="winner__date">{{ testmoni.since }}</p>
                    <div class="winner__desc mb-0 px-4 py-0">
                      <p>
                        <em>
                          {{ testmoni.desc }}
                        </em>
                      </p>
                    </div>
                    <div class="mCustomScrollbar _mCS_4">
                      <div
                        id="mCSB_4"
                        class="mCustomScrollBox mCS-dark-3 mCSB_vertical mCSB_inside"
                        tabindex="0"
                      >
                        <div
                          id="mCSB_4_container"
                          class="mCSB_container"
                          style="position: relative; top: 0px; left: 0px"
                          dir="ltr"
                        >
                          <em>
                            {{ testmoni.Desc }}
                          </em>
                        </div>
                        <div
                          id="mCSB_4_scrollbar_vertical"
                          class="mCSB_scrollTools mCSB_4_scrollbar mCS-dark-3 mCSB_scrollTools_vertical"
                          style="display: block"
                        >
                          <div class="mCSB_draggerContainer">
                            <div
                              id="mCSB_4_dragger_vertical"
                              class="mCSB_dragger"
                              style="
                                position: absolute;
                                min-height: 30px;
                                display: block;
                                height: 102px;
                                max-height: 130px;
                                top: 0px;
                              "
                            >
                              <div
                                class="mCSB_dragger_bar"
                                style="line-height: 30px"
                              ></div>
                              <div class="mCSB_draggerRail"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-row>
                </v-card-text>
              </div>
            </v-card>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
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
      testimonials: [
        {
          myImage:
            'https://1101993670.rsc.cdn77.org/img/WebSite/images/praveen.png',
          alt: 'Abdul',
          name: 'Abdul Muqeet',
          place: 'Prayagraj, UP',
          winamount: 'WON ₹  25 Lakh',
          since: 'Playing Since 2019',
          desc: 'I just want to say a big “THANK YOU“ to Shining   for being most genuine app and give us chance to play Game, Shining   is a platform where we can enjoy with friends by playing games, the only thing which is required here is sportsman spirit and gaming skill.',
        },
        {
          myImage:
            'https://1101993670.rsc.cdn77.org/img/WebSite/images/sultan.png',
          alt: 'Sultan',
          name: 'Sultan Mirza',
          place: 'Gujarat',
          winamount: 'WON ₹ 20 Lakh',
          since: 'Playing Since 2018',
          desc: 'Very Nice Game app for playing games with friends and families. Too much better than other online gaming apps. I love it, Reliable and trustworthy app. Play &amp; Enjoy!',
        },
        {
          myImage:
            'https://1101993670.rsc.cdn77.org/img/WebSite/images/babu.png',
          alt: 'Babu',
          name: 'Babu Mondal',
          place: 'West Bengal',
          winamount: 'WON ₹ 30 Lakh',
          since: 'Playing Since 2016',
          desc: 'I’m Babu Mondal and very glad to say that I am playing on Shining   daily with my friends and families & enjoying Game. In one sentence “ Shining   is the only platform where we can play & enjoy”, I found it very cool!',
        },
        {
          myImage:
            'https://1101993670.rsc.cdn77.org/img/WebSite/images/behrul-islam.png',
          alt: 'Behrul',
          name: 'Behrul Islam',
          place: 'Meghalaya',
          winamount: 'WON ₹ 25 Lakh',
          since: 'Playing Since 2017',
          desc: 'After a few months of playing on Shining  , I am very clear that it is really easy to win rewards here. Unlike other applications that guarantee you to pay after reaching the required points but they didn’t pay. Here you get tokens and cashback offers by everyday spinning. Every game is good in the Shining   but game is my all-time favourite.',
        },
        {
          myImage:
            'https://1101993670.rsc.cdn77.org/img/WebSite/images/abdul.png',
          alt: 'Praveen',
          name: 'Praveen Kumar',
          place: 'Haryana',
          winamount: 'WON ₹ 10 Lakh',
          since: 'Playing Since 2018',
          desc: 'I just want to say a big “THANK YOU“ to Shining for being most genuine app and give us chance to play Game, Shining   is a platform where we can enjoy with friends by playing games, the only thing which is required here is sportsman spirit and gaming skill.',
        },
      ],
      settings: {
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
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

<style>
.topmt-3 {
  margin-top: -3rem;
}
</style>