<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/demo/one">
          <div>StoreDemo</div>
        </router-link>
      </li>
      <li>
        <router-link to="/demo/two">
          <div>StoreDemo_1</div>
        </router-link>
      </li>
      <li>
        <router-link to="/elementUI/demo">
          <div>elementUIDemo</div>
        </router-link>
      </li>
      <li>
        <router-link to="/demo/LocalFold">
          <div>折叠Demo</div>
        </router-link>
      </li>
      <li>
        <router-link to="/demo/Axios">
          <div>Axios实践</div>
        </router-link>
      </li>
      <li>
        <router-link to="/demo/SvgDemo">
          <div>Svg实践</div>
        </router-link>
      </li>
    </ul>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
