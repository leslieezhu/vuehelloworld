<template>
  <div class="hello">
    <h1>Vuex实践之一</h1>
    <a @click="setHandler">SET</a>
    <a @click="getHandler">GET</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      person : {
        name : "Tom",
        gender : "Male",
        age : 20
      }
    }
  },
  mounted () {
    
  },
  //$store 在 main.js 全局引入, dispatch Vuex 原生方法,涉及vuex原理知识
  //Vuex会到actions.js中匹配的方法, 这里使用 searchPositionHistory 进行关联
  methods: {
    setHandler () {
      this.$store.dispatch("searchPositionHistory", this.person ) //dispatch：含有异步操作,写法： this.$store.dispatch('mutations方法名',值)
    },                                                            //commit：同步操作，写法：this.$store.commit('mutations方法名',值) 
    getHandler () {
      //debugger
      var historyItem = this.$store.getters.getSearchPositionHistory 
      console.log(historyItem)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  cursor:pointer;
}
</style>