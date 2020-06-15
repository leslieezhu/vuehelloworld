// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'   /* vuex实践 */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false
//方便全局引用store,怎样调用,参考StorePage.vue
Vue.prototype.$store = store; //会引起 @\store\function.js 被调用

Vue.use(ElementUI);
//axios模块之一
import loading from '@/utils/loading' // 引入自定义插件 loading.js 
Vue.use(loading) // 编程模式: 将loading注册给vue,目的全局使用loading,参考loading.js//是Vue自定义插件编程模式, 为了可以使用use方法,果然在它的代码内实现了install方法

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
export default vm;