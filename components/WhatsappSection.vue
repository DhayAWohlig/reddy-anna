<template>
  <div>
    <h6 class="text-center">
      Daily <strong class="color--yellow chip--dark">5 Lakhs+</strong>
      <span class="text-capitalize">{{ hostName }}</span> Winners
    </h6>
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
      <v-btn block rounded color="green" :href="whatsappLink">
        <v-icon size="25" class="mr-2"> mdi-whatsapp </v-icon> Click Here
      </v-btn>
      <v-card-text
        class="text-center pa-1"
        :class="$vuetify.breakpoint.xsOnly ? 'f8' : 'f12'"
        >(Click on the above WhatsApp button to get your account
        created)</v-card-text
      >
    </v-card>
    <v-card class="primary--border bg-card-color-opacity d-none">
      <a href="https://wa.link/lotuspower" target="_blank"
        ><img src="@/assets/images/getinwhatsapp.jpeg"
      /></a>
    </v-card>
  </div>
</template>
<script>
export default {
  props: { domainName: String, hostName: String },
  data() {
    return {
      whatsappLink: 'http://wa.link/promofp',
    }
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
.color--yellow {
  color: #fff600;
}

.chip--dark {
  background: #1b1b1b;
  font-family: gothambold;
  padding: 5px 12px;
  border-radius: 30px;
  font-size: 20px;
}
</style>
