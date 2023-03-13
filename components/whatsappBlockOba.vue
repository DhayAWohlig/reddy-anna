<template>
  <div>
    <div justify="center" class="my-4">
      AB de Villiers is one of the best spinners in the world, getting some of
      the finest batsmen to dance to his tune. The player has made earned
      himself a reputation for being a T20 specialist.
    </div>
    <div justify="center" class="mt-2 mb-5">
      Eoin Morgan is one of England’s most celebrated captains. Known for his
      calmness and composure while at the crease, the left-handed batsman is
      extremely good at finishing the innings. His captaincy has always been
      precise and to the point with amazing results including the 2019 ODI World
      Cup!
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
  border-color: #e15b27;
}
.bg-card-color-opacity {
  background-color: rgba(0, 0, 0, 0.75);
}
.oba-us-join {
  color: white !important;
  text-decoration: none;
  &:hover {
    color: black !important;
    text-decoration: none;
  }
}
</style>
