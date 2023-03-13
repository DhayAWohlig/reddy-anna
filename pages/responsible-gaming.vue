<template>
  <div class="bg">
    <v-container class="privacy-policy">
      <v-row no-gutters>
        <v-col cols="12" md="12">
          <h1 class="text-capitalize headline font-weight-bold mb-2">
            Responsible Gaming
          </h1>
          <v-list-item class="list_item">
            <v-list-item-content>
              <h2 class="text-capitalize text-subtitle-1 font-weight-bold mb-2">
                Our Mission Statement
              </h2>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left pb-4"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                {{ domainName }} encourages all its players to play responsibly.
                We are committed to helping players who wish to stop playing or
                who wish to limit the amount that they play.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="list_item">
            <v-list-item-content>
              <h2 class="text-capitalize text-subtitle-1 font-weight-bold mb-2">
                Ensure Responsible Play
              </h2>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Players must be 18 years of age to play fantasy sports for real
                money.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Players can set their monthly playing limit on their own. There
                is also an option for players to set the daily playing limit, by
                sending us a request from their registered email address. Once
                set, these limits can be changed again only after 72 hours from
                the previous change.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Players can request for their accounts to be temporarily
                blocked, if they want to self-exclude themselves for some time.
                Players can self-exclude themselves for following time limits –
                48 hours, 72 hours, 1 week, 2 weeks, 1 month, 2 months and 6
                months by contacting us on help@{{ domainName }} Once confirmed,
                these limits cannot be reversed / modified. If you have
                withdrawable balance and wish to withdraw it, please contact us
                on the same email address.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Players can request for their accounts to be temporarily
                blocked, if they want to self-exclude themselves for some time.
                Players can self-exclude themselves for following time limits –
                48 hours, 72 hours, 1 week, 2 weeks, 1 month, 2 months and 6
                months by contacting us on help@{{ domainName }} Once confirmed,
                these limits cannot be reversed / modified. If you have
                withdrawable balance and wish to withdraw it, please contact us
                on the same email address.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Players can follow our ‘Guide to Responsible Play in order to
                keep a check on their play behaviour.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="list_item">
            <v-list-item-content>
              <h2 class="text-capitalize text-subtitle-1 font-weight-bold mb-2">
                Guide to Responsible Play
              </h2>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Sometimes, players may find it hard to recognize that their
                online play is getting out of control. A common reaction is to
                minimize, hide or deny such problems and the harm it could be
                causing. Some people will lie to themselves about how much money
                or time is being spent on online playing.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Following are some of the best practices to help you play
                responsibly:
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Play fantasy sports in moderation and only for entertainment.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Do not play fantasy sports to make money or escape problems.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Never chase your losses while playing fantasy sports.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Set aside an entertainment budget for fantasy sports.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Use the Add Cash limit option to help control the amount you
                spend. For further information, please visit our Add cash limits
                page.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Balance the time you spend on playing online fantasy sports with
                other leisure activities.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Recognize whether you are not playing responsibly
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="list_item">
            <v-list-item-content>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left pb-4"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Please fill this form so that we can analyse your Game behavior:
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left pb-4"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Click here to fill the questionnaire.
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left pb-4"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Please note, we are bound to take an action based on your
                responses. Please be careful while filling the form. The action
                could be to reduce your deposit limits to as low as zero, based
                on your answers.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item class="list_item">
            <v-list-item-content>
              <h2 class="text-capitalize text-subtitle-1 font-weight-bold mb-2">
                The fantasy sports Federation
              </h2>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                The fantasy sports Federation is a not-for-profit society
                established under the Societies Registration Act, to guide and
                support the online fantasy sports industry in providing
                sustainable and healthy entertainment to players across India.To
                Learn More..
              </v-list-item-title>
              <v-list-item-title
                class="body-2 nowrap text-md-justify text-sm-left"
                :class="
                  $vuetify.breakpoint.smAndDown ? 'text-justify px-3' : ''
                "
              >
                Disclaimer: For any promotion or account related queries, you
                can reach out to us on help@{{ domainName }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <v-row class="mr-0">
        <v-col cols="12" lg="12" md="12">
          <payment-methods></payment-methods>
        </v-col>
      </v-row>
      <v-row class="mr-0">
        <v-col cols="12" lg="12" md="12">
          <div class="text-center mt-2">
            <span
              class="text-uppercase disclaimer-text pr-2"
              :class="$vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''"
              ><a href="/privacy-policy">{{ hostName }} Policy</a></span
            >
            <span
              class="text-uppercase disclaimer-text pr-2"
              :class="$vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''"
              ><a href="/responsible-gaming">Responsible Gaming</a></span
            >
            <span
              class="text-uppercase disclaimer-text"
              :class="$vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''"
              ><a href="/terms-conditions">Terms and Conditions</a></span
            >
          </div>
        </v-col>
      </v-row>
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
      <div class="text-center mb-2 line-height">
        <span
          class="text-uppercase disclaimer-text"
          :class="$vuetify.breakpoint.mdAndDown ? 'disclaimer-textxs' : ''"
          >Copyright © 2021 {{ domainName }} All Rights Reserved</span
        >
      </div>
    </v-container>
  </div>
</template>

<script>
import PaymentMethods from '../components/PaymentMethods.vue'
export default {
  components: {
    PaymentMethods,
  },
  data() {
    return {
      title: '',
      domainName: '',
      hostName: '',
    }
  },
  head() {
    return {
      title: `Responsible Gaming - ${this.hostName}`,
    }
  },
  created() {
    if (process.client) {
      this.getDomain()
    }
  },
  methods: {
    getDomain() {
      this.domainName = window.location.hostname
      this.hostName = window.location.hostname.split('.')[0]
    },
  },
}
</script>
<style scoped lang="scss">
.bg {
  background-color: #260a2b;
}
.disclaimer-text {
  font-size: 10px;
}
.disclaimer-textxs {
  font-size: 7px !important;
  color: white;
}
a {
  color: white !important;
  text-decoration: none;
  &:hover {
    color: #e15b27 !important;
    text-decoration: none;
  }
}
.list_item {
  .v-list-item__title,
  .v-list-item__subtitle {
    text-overflow: unset !important;
    white-space: normal !important;
  }
}
</style>
