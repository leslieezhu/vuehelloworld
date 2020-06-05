export default {
  //此方法被StorePage.vue 中的 dispatch 调用,至于为什么是这些参数,以及commit方法的作用,参考Vuex 
  //第6行,传入字符串'SEARCHPOSITIONHISTORY',根据这个常量可以在mutations.js调用对应的function
  searchPositionHistory: ({
    commit
  }, param) => commit('SEARCHPOSITIONHISTORY', param) //接着再到mutations.js中调用对应方法
}