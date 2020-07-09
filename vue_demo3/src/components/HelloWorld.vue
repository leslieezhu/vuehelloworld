<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/demo/one">
      <div>VuexDemo</div>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
//以下为了演示ES6新增语法, ... 对象展开运费符
const getters = {
  a: () => 1,
  b: () => 2,
  c: () => 3
};

function fn(keys) {
  const data = {};
  keys.forEach(key => {
    if (getters.hasOwnProperty(key)) {
      data[key] = getters[key];
    }
  });
  return data;
}

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    ...mapGetters(["number"]), //属于Vuex原生的语法,通过引入mapGetters可以轻松的取到vuex中存储的数据,并在此vue页面中构建成计算属性并返回getter的返回值,至于怎么用,为什么是这样,是官网中原生预定义的
    ...fn(["a", "b", "c"]) //演示ES6新增语法 ...称:对象展开运算符, 还有其它一些语法参考官方API
  },
  //为什么$store可以访问? 即在main.js new Vue 时传入的,可以理解为Vue原生的语法, 所以如果要掌握coding,需要查看下Vuex的API
  mounted() {
    this.$store.dispatch("setNumber", 10).then(() => {  //为什么可以then? return commit
      //这里调用book.js中的actions中的setNumber,所以掌握actions下function怎样设计
      console.log(this.number);
    });
    console.log(this.a, this.b, this.c);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
