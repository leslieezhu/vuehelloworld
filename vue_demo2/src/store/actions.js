export default {
  //此方法被StorePage.vue 中的 dispatch 调用 
  searchPositionHistory: ({ commit }, param) => commit('SEARCHPOSITIONHISTORY', param)
}