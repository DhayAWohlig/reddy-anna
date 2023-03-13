<template>
  <v-snackbar
    v-model="model"
    top
    :color="$store.state.snackbar.color"
    :timeout="$store.state.snackbar.timeout"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ $store.state.snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn
        text
        v-bind="attrs"
        @click="$store.snackbar.commit('snackbar/set_close')"
        >Close</v-btn
      >
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    model: {
      get() {
        return this.$store.getters['snackbar/get_model']
      },
      set(v) {
        return this.$store.commit('snackbar/set_model', v)
      },
    },
  },
}
</script>
