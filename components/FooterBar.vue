<template>
  <div>
    <section class="social">
      <v-container>
        <v-row class="position-relative">
          <v-col class="col-md-4 col-12 text-center follow__sec col p-0 pt-4">
            <div class="social-icons">
              <!-- 92/q-y8923 gmail -->
              <div
                id="st-1"
                class="sharethis-inline-share-buttons st-center st-inline-share-buttons st-animated"
              >
                <div
                  class="st-btn st-first"
                  data-network="facebook"
                  style="display: inline-block"
                >
                  <img
                    alt="facebook sharing button"
                    src="https://platform-cdn.sharethis.com/img/facebook.svg"
                  />
                </div>
                <div
                  class="st-btn"
                  data-network="twitter"
                  style="display: inline-block"
                >
                  <img
                    alt="twitter sharing button"
                    src="https://platform-cdn.sharethis.com/img/twitter.svg"
                  />
                </div>
                <div
                  class="st-btn"
                  data-network="whatsapp"
                  style="display: inline-block"
                >
                  <a href="https://api.whatsapp.com/send?phone=917579999938">
                    <img
                      alt="whatsapp sharing button"
                      src="https://platform-cdn.sharethis.com/img/whatsapp.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
          </v-col>
          <v-col class="col-12 col-sm-6 pb-0 col-md-4">
            <div class="text-center mt-2 d-none">
              <span
                class="text-uppercase disclaimer-text pr-2"
                :class="
                  $vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''
                "
                ><a href="/privacy-policy" class="disclaimer_text"
                  ><span>{{ hostName }}</span> Policy</a
                ></span
              >
              <span
                class="text-uppercase disclaimer-text pr-2"
                :class="
                  $vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''
                "
                ><a href="/responsible-gaming" class="disclaimer_text"
                  >Responsible Gaming</a
                ></span
              >
              <span
                class="text-uppercase disclaimer-text"
                :class="
                  $vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''
                "
                ><a href="/terms-conditions" class="disclaimer_text"
                  >Terms and Conditions</a
                ></span
              >
            </div>
            <div>
              <ul class="social__menu text-center">
                <li class="social__list mb-3">
                  <!-- <a class="social__link">&nbsp;</a> -->
                </li>
                <li class="social__list mb-3">
                  <a href="#" class="social__link">Refer &amp; Earn</a>
                </li>
                <li class="social__list">
                  <!-- <a href="#" class="social__link">Witzeal Fairplay</a> -->
                  <a href="#" class="social__link text-capitalize">{{
                    hostName
                  }}</a>
                </li>
              </ul>
            </div>
          </v-col>
          <v-col class="col-12 col-sm-6 col-md-4 pb-0">
            <div>
              <ul class="social__menu text-center">
                <li class="social__list mb-3">
                  <a href="/responsible-gaming" class="social__link"
                    >Responsible Gaming</a
                  >
                </li>
                <li class="social__list mb-3">
                  <a href="/terms-conditions" class="social__link"
                    >Terms &amp; Conditions</a
                  >
                </li>
                <li class="social__list mb-3">
                  <a href="/privacy-policy" class="social__link">
                    <span class="text-capitalize">{{ hostName }}</span>
                    Policy</a
                  >
                </li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" class="m-0 p-0">
            <div class="text-center">
              <p class="mb-0 color--white">
                <span class="text-uppercase"
                  >{{ hostName }} Private Limited</span
                >
              </p>
              <p class="color--white">
                A 101, Beattock, Moffat, Dumfries and Galloway. United
                KingdomPostal code-DG10 9RE
              </p>
            </div></v-col
          >
        </v-row>
      </v-container>
    </section>
    <section class="disclaimer p-0 m-0">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center line-height">
              <v-img
                contain
                :src="'/Background/18.png'"
                :lazy-src="'/Background/18.png'"
                aspect-ratio="2"
                max-height="50"
                max-width="70"
                class="mx-auto my-1"
              ></v-img>
            </div>
            <div class="disclamer__subtitle text-center">
              <p>
                <em>
                  This game involves a component of monetary risk and may be
                  addictive. Please play responsibly, and at your own risk. Only
                  people of 18+ are eligible to play these games.
                </em>
              </p>
              <p class="text-uppercase copyright m-0 p-0">
                Copyright © 2023 {{ hostName }} Policy All Rights Reserved
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  props: ['domainName', 'hostName'],
  data() {
    return {}
  },
}
</script>
<style lang="scss">
ul.social__menu {
  list-style: none;
  margin: 0;
  padding: 0;
  li.social__link {
    color: #fff;
  }
}

div.social-icons {
  > #st-1 {
    .st-btn {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -moz-transition: opacity 0.2s ease-in, top 0.2s ease-in;
      -ms-transition: opacity 0.2s ease-in, top 0.2s ease-in;
      -o-transition: opacity 0.2s ease-in, top 0.2s ease-in;
      -webkit-transition: opacity 0.2s ease-in, top 0.2s ease-in;
      transition: opacity 0.2s ease-in, top 0.2s ease-in;
      -moz-border-radius: 20px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      display: inline-block;
      font-size: 11px;
      height: 32px;
      line-height: 32px;
      margin-right: 8px;
      padding: 0 8px;
      position: relative;
      text-align: center;
      top: 0;
      vertical-align: top;
      white-space: nowrap;
    }
    .st-btn > img {
      display: inline-block;
      height: 16px;
      width: 16px;
      position: relative;
      top: 8px;
      vertical-align: top;
    }
    .st-btn[data-network='facebook'] {
      background-color: #4267b2;
    }
    .st-btn[data-network='twitter'] {
      background-color: #55acee;
    }
    .st-btn[data-network='whatsapp'] {
      background-color: #25d366;
    }
    .st-btn[data-network='skype'] {
      background-color: #00aff0;
    }
  }
}
</style>