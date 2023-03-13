<template>
  <div>
    <h3 class="my-terms">Terms and Conditions:</h3>
    <div v-for="qstn in qstns" :key="qstn" class="bulletTerms d-flex">
      <div class="bullet-icon">
        <i class="fas fa-circle pr-1" style="color: #e15b27"></i>
      </div>
      <div class="terms-colors mr-2" v-html="qstn.name"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qstns: [
        {
          name: 'One person can enter the contest only once, multiple entries will be invalidated',
        },
        {
          name: 'Only participants with correct answers will be eligible for the reward',
        },
        { name: 'Winners will be chosen through a lucky draw system' },
        {
          name: 'Winners will be announced on <b>18th October at 6:00pm</b> IST',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h3 {
  z-index: 1;
  font-size: 14px;
  font-weight: 900;
}
.terms p,
i {
  font-weight: bold;
  font-size: 10px;
}
.terms-colors {
  color: #000000;
  font-size: 12px;
  font-weight: bold;
}
.my-terms {
  color: #000000 !important;
}
.bulletTerms .bullet-icon {
  line-height: 15px;
}
</style>