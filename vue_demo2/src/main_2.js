import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(vuex);//必须的
const store = new Vuex.store({
  state: {
    nickName: "",
    cartCount: 0
  },

  mutations: {
    updateUserInfo(state, nickName) {
      state.nickName = nickName;
    },
    updateCartCount(state, cartCount) {
      state.cartCount += cartCount;
    }
  },

  actions: {
    updateUserInfo(context) {
      context.commit("updateUserInfo");
    },
    updateCartCount(context) {
      context.commit("updateCartCount");
    }
  }
})

new Vue({
  el: "#app",
  store,
  router,
  components: {App},
  template: '<App/>'
})