// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/utils/localStorageExpire'  //或'utils/localStorageExpire', 所以一定要注意路径
import Vue from 'vue'
import App from './App'
import router from './router'

//状态管理

import store from './store';


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//为Vue增加vuex状态管理
  components: { App },
  template: '<App/>'
})
