import Vue from 'vue'
import Router from 'vue-router'
import Longin from '@/components/Login'
import Home from '@/components/Index'

Vue.use(Router)

let route = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Longin
    },{
      path: '/index',
      name: 'home',
      component: Home
    }
  ]
})

route.beforeEach((to, from, next) => {
  next()
})
export default route;