<template>
  <v-row no-gutters justify="center" align="center" class="primary fill-height">
    <div class="text-center">
      <div class="mb-5" v-for="item in features" :key="item.key">
        <v-img
          :src="require(`@/assets/images/${item.image}.png`)"
          :lazy-src="require(`@/assets/images/${item.image}.png`)"
          :alt="features.alt_tag"
          class="mx-auto"
          max-width="250"
        ></v-img>
      </div>
      <h1 class="mb-3">THANK YOU!</h1>
      <div class="title mb-3">
        <a href="https://fairplay.club">Return to home</a>
      </div>
    </div>
  </v-row>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      //   CDN_IMG_URL: process.env.CDN_IMG_URL
      features: [
        {
          alt_tag: 'Thank_you',
          image: 'Thank_you_icon',
        },
      ],
    }
  },
}
</script>
<style scoped lang="scss">
a {
  color: white;
  text-decoration: none;
  &:hover {
    color: #090909;
    text-decoration: underline;
  }
}
</style>
