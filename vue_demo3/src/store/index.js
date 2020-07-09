import Vue from 'vue';
import Vuex from 'vuex';
//import app from './modules/app';//传给modules,在app.js 里面定义 state, mutations, actions
import book from './modules/book';
import basicData from './modules/basicData';
import getters from './getters';
Vue.use(Vuex);
//app 表示 modules/app.js, 如Vuex是绿色的,说明没有安装Vuex模块, npm install --save vuex, (package.json dependencies)
//app.js 的作用和怎样设计?
//关于Vuex对象怎样被调用? 一般模式: 将Vuex对象挂载给Vue全局, 往往以$store作为变量名,
//接着调用Vuex的 dispatch('参数1','参数2') 异步调用由参数1所引用的function, commit('参数1','参数2')表示同步调用, 请看具体代码
const store = new Vuex.Store({
  modules:{
    book,
    basicData
  },
  getters
})

export default store