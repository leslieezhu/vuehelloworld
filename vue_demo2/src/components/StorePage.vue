<template>
  <div class="hello">
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
      this.$store.dispatch("searchPositionHistory", this.person )
    },
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

</style>