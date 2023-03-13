<template>
  <v-select
    class="country-code"
    :items="countryCodes"
    item-text="code"
    item-value="dial_code"
    outlined
    dense
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-slot:item="data">
      {{ data.item.code }} - {{ data.item.name }} ({{
        '+' + data.item.dial_code
      }})
    </template>
  </v-select>
</template>

<script>
import CountryCodesJson from '@/assets/country-codes/country-codes.json'

export default {
  data() {
    return {
      countryCodes: CountryCodesJson,
    }
  },
}
</script>
<style lang="scss">
.country-code {
  width: 66px !important;
  background-color: #fff !important;
  border-radius: 7px !important;
  margin-top:-9px !important;

  .v-text-field__details {
    display: none !important;
  }

  .v-input__control .v-input__slot {
    padding: 0 0 0 8px !important;
    margin: 0 !important;
    height:30px;
  }

  .v-select__slot .v-input__append-inner {
    padding: 0 !important;
  }
  .v-select__selection--comma {
    color: #000000 !important;
  }
  .v-icon {
    color: #000000 !important;
  }
  .v-input__slot {
    min-height: 25px !important;
  }
  .v-select__slot .v-input__append-inner {
    margin-top: 5px !important;
  }
  .v-text-field--outlined.v-input--is-focused fieldset,
  fieldset {
    border: 0px solid #ededed !important;
  }
  fieldset:hover {
    border: 0px solid #ededed !important;
  }

}
</style>
