import Vue from 'vue';
import Vuex from 'vuex';
import * as func from './function';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

// import * as getters from './getters'; //这种导入在此无效
// import * as mutations from './mutations';
// import * as actions from './actions';
Vue.use(Vuex);

//第15行的state,核心代码,返回 state, 即初始化之获得state对象,关键是理解func.local.get , 传递给第23行;  ||  这种风格的代码发现有特定的逻辑
// 初始化时,先执行了 func.local.get(),即
const state = func.local.get() || {
  searchPositionHistory: {}
}

//const state = func.local.get()  /* 1. 可以执行,执行function.js 中的get方法 */
//const state = {
//   searchPositionHistory: {}
// }
//执行getter.js 中的
//Vuex 需要安装:npm install --save vuex
//getters 必须是一个 object
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});