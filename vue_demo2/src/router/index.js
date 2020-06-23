import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import StorePage from '@/components/StorePage'
import elementUIDemo from '@/components/ElementUIDemo'
import VuexDemo1 from '@/components/Vuex_Demo1'
import LocalFoldDemo from '@/components/LocalFold' //折叠
import AxiosDemo from '@/components/AxiosDemo' 
import SvgDemo from '@/components/SvgDemo'
import SyncDemo from '@/components/SyncDemo'

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
    {
      path: '/demo/LocalFold', 
      name: 'LocalFoldDemo',
      component: LocalFoldDemo
    },
    {
      path: '/demo/Axios', 
      name: 'AxiosDemo',
      component: AxiosDemo
    },
    {
      path: '/demo/SvgDemo', 
      name: 'SvgDemo',
      component: SvgDemo
    },
    {
      path: '/demo/SyncDemo', 
      name: 'Sync',
      component: SyncDemo
    },
  ]
})
