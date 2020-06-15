import Vue from 'vue'
import loadingComponent from '@/components/loading'
//待理解
const LoadingConstructor = Vue.extend(loadingComponent)

const instance = new LoadingConstructor({
  el: document.createElement('div')
})

instance.show = false // 默认隐藏
const loading = {
  show() { // 显示方法
    instance.show = true
    document.body.appendChild(instance.$el)
  },
  hide() { // 隐藏方法
    instance.show = false
  }
}

export default {
  install() {    //Vue自定义插件编程模式,为了调用时使用Vue.use()方法,这里必须实现install方法
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({    //待理解
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}