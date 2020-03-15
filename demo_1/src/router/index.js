import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import hrService from '@/components/HrService'
import hrproService from '@/components/HrProService'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/hr/hrService',
      name: 'hrService',
      component: hrService
    },
    {
      path: '/hr/hrproService',
      name: 'hrproService',
      component: hrproService
    }
  ]
})
