<template>
  <div>
    <h1>Vuex实践之一</h1>
    <a @click="increment">[updateUserInfo]</a>
    <a @click="decrement">[updateCartCount]</a>
    <a @click="adda">[add]</a>
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
      //传递二个参数，形式一
      //this.$store.dispatch("updateUserInfo", "nick"); //this.$store.commit("increment", 'nick');
      //传递二个参数，形式二
      this.$store.dispatch({
        type : 'updateUserInfo',
        nickName : 'nick'
      })
      //this.$store.dispatch("updateUserInfo", {aaa: 'aaa', bbb: 'bbb'});
      //this.$store.commit("updateUserInfo" , {aaa: 'aaa', bbb: 'bbb'}) //可以运行,调用mutations中的updateUserInfo
    },
    decrement() {
      this.$store.dispatch("updateCartCount", 1); // this.$store.commit("decrement", 1);
    },
    adda(){
        //触发action
        this.$store.dispatch('increment',5); //vuex第一步,先调actions中对应的方法,
    }
  }
};
</script>

<style scoped>
a {
  cursor:pointer;
}
</style>
