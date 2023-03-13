<template>
  <div class="fill-height">
    <div class="d-flex fill-height">
      <v-row class="fill-height pl-5" justify="start" align="center">
        <v-col md="8" cols="8">
          <div class="testp">
            <div class="abc text-uppercase white--text font-weight-bold">
              sign up to participate <br />
              in the fairplay contest and
            </div>
            <div
              class="main-dubai middle-one text-uppercase font-weight-bold"
              style=""
            >
              <div class="win-to-trip">win a trip to</div>
              <div>Dubai.</div>
            </div>
            <div
              class="text-uppercase white--text all-you font-weight-bold"
              :class="!$vuetify.breakpoint.smAndDown ? '' : 'd-none'"
            >
              all you have to do is signup on <br />
              fairplay and predict these questions
            </div>
            <div
              class="text-uppercase white--text all-you font-weight-bold"
              :class="!$vuetify.breakpoint.smAndDown ? 'd-none' : ''"
            >
              all you have to do is signup on fairplay and predict these
              questions
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="bottom-text pl-5">
      <v-row>
        <v-col md="7" cols="7">
          <div
            class="white-patch font-weight-bold"
            :class="!$vuetify.breakpoint.smAndDown ? '' : 'd-none'"
          >
            Increase your chance of winning by sharing <br />
            your participation on your social handles and tag us along with 4 of
            your friends
          </div>
          <div
            class="white-patch font-weight-bold"
            :class="!$vuetify.breakpoint.smAndDown ? 'd-none' : ''"
          >
            Increase your chance of winning by sharing your participation on
            your social handles and tag us along with 4 of your friends
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="social-icon">
      <v-row justify="center">
        <v-col v-for="item in features" :key="item.key" cols="4" class="pa-0">
          <!-- <a :href="item.link" target="_blank" class="text-decoration-none"> -->
          <a :href="item.link" target="_blank" class="text-decoration-none">
            <v-card color="transparent" elevation="0" tile>
              <div class="text-center">
                <v-avatar class="ma-0" size="30" tile>
                  <v-img
                    :src="require(`@/assets/images/features/${item.image}.png`)"
                    :lazy-src="
                      require(`@/assets/images/features/${item.image}.png`)
                    "
                  ></v-img>
                </v-avatar>
                <!-- <v-card-title class="text-md-h6">{{ item.name }}</v-card-title> -->
                <!-- <span :class="!$vuetify.breakpoint.smAndDown ? '' : 'd-none'"> -->
                <span>
                  {{ item.name }}
                </span>
              </div>
            </v-card>
          </a>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          name: 'FairPlay_India',
          key: 'FairPlay_India',
          image: 'insta-social',
          link: 'https://instagram.com/fairplay_india',
        },
        {
          name: 'FairPlayIn',
          key: 'FairPlayIn',
          image: 'FB-social',
          link: 'https://www.facebook.com/FairPlay-103941624783096/',
        },

        {
          name: 'FairPlay_India',
          key: 'FairPlay-India',
          image: 'tw-social',
          link: 'https://twitter.com/FairPlay_India',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.fill-height {
  height: 100%;
}
.bottom-text {
  position: absolute;
  bottom: 10%;
  p {
    font-size: 15px;
  }
}
.social-icon {
  position: absolute;
  bottom: 4%;
  width: 50%;
  padding-left: 12px;
  span {
    color: black;
    font-weight: bold;
    font-size: 12px;
  }
  .v-card__text {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 0px !important;
  }
}
.white-patch {
  font-size: 0.875rem !important;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: 0.07em !important;
  font-family: 'Roboto', sans-serif !important;
  color: #000000;
}
.testp {
  .abc {
    font-size: 16px;
    line-height: 1.5rem;
  }
  .main-dubai {
    font-size: 6rem;
    color: #ff2f00;
    font-weight: 300;
    line-height: 5.3rem;
    letter-spacing: -0.015625em;
    .win-to-trip {
      font-size: 4rem;
    }
  }
  .all-you {
    font-size: 16px;
  }
  // .text-h3 {
  //   color: #ff2f00;
  //   line-height: 1.5rem;
  // }
}
@media only screen and (max-width: 600px) {
  .social-icon {
    bottom: 5%;
    .v-avatar {
      min-width: 12px !important;
      height: 12px !important;
      width: 12px !important;
    }
  }
  .testp {
    p {
      font-size: 14px;
      line-height: 1rem;
    }
    .main-dubai {
      font-size: 3rem;
      line-height: 2.1rem;
      .win-to-trip {
        font-size: 2rem;
      }
    }
    .all-you {
      font-size: 13px;
      line-height: 1rem;
    }
  }
  .white-patch {
    font-size: 8px !important;
    line-height: 0.65rem !important;
  }
  .testp {
    .abc {
      line-height: 1.1rem;
    }
    .main-dubai,
    .win-to-trip {
      font-size: 2.5rem;
      line-height: 2.2rem;
    }
  }
  .social-icon span {
    font-size: 7px;
  }
}
</style>
