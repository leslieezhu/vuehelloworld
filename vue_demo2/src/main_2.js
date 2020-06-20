import Vue from 'vue'
import App from './App' /* 基本配置,入口模板*/
import Vuex from 'vuex'
import router from './router'
//Vuex基本使用例子(使用dispatch和commit)
Vue.use(Vuex); //必须的
//演示Vuex的3个基本模块作用,mutations、
const store = new Vuex.Store({
  state: {
    nickName: "",
    cartCount: 0
  },

  mutations: {
    //注意：和action的context.commit("updateUserInfo",agrs)相对应
    updateUserInfo: (state, n) => {
      //debugger
      state.nickName = n;
      //state.nickName = n.nickName;//传递二个参数，形式二
    },
    updateCartCount:(state,cartCount) =>{
      state.cartCount += cartCount;
    },
    increment: (state, n) => {
      state.count += n;
    }
  },
  actions: {
    //Step1： 被Vuex_Demo1.vue的 this.$store.dispatch("updateUserInfo", "xxx"); 
    updateUserInfo(context,agrs) {
      context.commit("updateUserInfo",agrs);//Step2：再去调用mutations中的updateUserInfo
    },
    updateCartCount(context) {
      context.commit("updateCartCount");
    },
    increment(context, args) {
      context.commit('increment', args);
    }
  }
})
//Vue的模块全局挂载模式模式
Vue.prototype.$store = store;

new Vue({
  el: "#app",
  store,
  router,
  components: {
    App
  }, //加载入口模板@/App.vue,与第2行对应
  template: '<App/>'
})