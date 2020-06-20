import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件, 对应 src\components\SvgIcon\index.vue

// webpack.base.conf.js include: [resolve("src/icons")] 会自动加载此文件
// register globally
Vue.component('svg-icon', SvgIcon)  //注册全局组件,之后在SvgDemo.vue使用 <svg-icon>
 
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)