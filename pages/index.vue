<template>
  <h1>Hello world!</h1>
</template>

<script>
export default {
  data() {
    return {
      title: "Home page",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Home page description",
        },
      ],
    };
  },
};
</script>