<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      this.$axios.test().then((res) => {
        console.log(res);
      });
      this.$axios.testPost().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
