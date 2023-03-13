<template>
  <div class="about-content">
    <div justify="center" class="mb-5 mt-2">
      <v-list-item class="pa-0">
        <v-list-item-content class="pa-0">
          <v-list-item-title class="text-justify mb-2">
            Welcome to {{ hostName }} - a one of a kind gaming portal- a one
            stop shop for new age fantasy gaming. Experience the thrill and
            excitement of Fantasy with {{ hostName }}’s live cricket, football
            and tennis sports where one can not only play and win before the
            match but live as the match progresses- all the way to the last
            ball.
          </v-list-item-title>

          <v-list-item-title class="text-justify mb-2">
            {{ hostName }} endorses responsible and secure gaming, assuring the
            users of safety of their data and finances at all times with the
            latest security measures. Team {{ hostName }} prides itself on being
            a turning point and a benchmark in the world of fantasy gaming,
            making genuine and one of a kind gaming accessible to all.
            {{ hostName }} ensures the confidentiality of its users and the
            security of their information at all times.
          </v-list-item-title>

          <v-list-item-title class="text-justify mb-2">
            All safety measures are taken with regard to customer data and their
            transactions and no data is ever shared with a third party by
            {{ hostName }}. For all queries and site related questions, our
            client support team is available 24*7.
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </div>
    <v-card
      class="primary--border bg-card-color-opacity"
      justify="center"
      :class="$vuetify.breakpoint.xsOnly ? 'pa-4' : 'pa-11'"
    >
      <v-card-text
        class="pt-0 font-weight-bold line-hei white--text"
        :class="$vuetify.breakpoint.xsOnly ? 'f-size1' : 'f-size'"
      >
        Now Create An Account Easily On WhatsApp!
      </v-card-text>
      <v-card-text
        class="py-0 pb-5 white--text font-weight-bold"
        :class="$vuetify.breakpoint.xsOnly ? '' : 'f16'"
      >
        Click To Send A Message And Join The Club Today!
      </v-card-text>
      <v-btn
        :loading="loading"
        block
        rounded
        color="green"
        :href="whatsappLink"
      >
        <v-icon size="25" class="mr-2"> mdi-whatsapp </v-icon> Click Here
      </v-btn>
      <v-card-text
        class="text-center pa-1"
        :class="$vuetify.breakpoint.xsOnly ? 'f8' : 'f12'"
        >(Click on the above WhatsApp button to get your account
        created)</v-card-text
      >
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      whatsappLink: 'http://wa.link/promofp',
      domainName: '',
      hostName: '',
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
<style lang="scss" scoped>
.f-size {
  font-size: 30px;
}
.f-size1 {
  font-size: 20px;
}
.line-hei {
  line-height: 1.2;
}
.primary--border {
  border: 2px solid;
  border-color: #ff5f9e;
}
.bg-card-color-opacity {
  background-color: rgba(0, 0, 0, 0.75);
}
.v-list-item__title,
.v-list-item__subtitle {
  white-space: normal !important;
}
.about-content {
  a {
    color: white !important;
    text-decoration: none;
    &:hover {
      color: #e36c21 !important;
      text-decoration: none;
    }
  }
  .abt-us-join {
    color: white !important;
    text-decoration: none;
    &:hover {
      color: black !important;
      text-decoration: none;
    }
  }
}
</style>
