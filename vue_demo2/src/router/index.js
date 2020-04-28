import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StorePage from '@/components/StorePage'
import elementUIDemo from '@/components/ElementUIDemo'

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
      path: '/elementUI/demo',
      name: 'elementUIDemo',
      component: elementUIDemo
    },
  ]
})
