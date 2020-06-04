import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StorePage from '@/components/StorePage'
import elementUIDemo from '@/components/ElementUIDemo'
import VuexDemo1 from '@/components/Vuex_Demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo/one',
      name: 'store',
      component: StorePage
    },
    {
      path: '/demo/two',
      name: 'VuexDemo1',
      component: VuexDemo1
    },
    {
      path: '/elementUI/demo',
      name: 'elementUIDemo',
      component: elementUIDemo
    },
  ]
})
