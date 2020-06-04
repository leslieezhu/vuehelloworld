<template>
  <div>
    <h1>Vuex实践之一</h1>
    <a @click="increment">SET</a>
    <a @click="decrement">GET</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    increment() {
      this.$store.dispatch("updateUserInfo", "nick"); //this.$store.commit("increment", 'nick');
    },
    decrement() {
      this.$store.dispatch("updateCartCount", 1); // this.$store.commit("decrement", 1);
    }
  }
};
</script>

<style scoped>
a {
  cursor:pointer;
}
</style>
