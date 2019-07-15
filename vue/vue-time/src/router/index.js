import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Timeentries from '@/components/time-entries'
import Log from '@/components/log'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'time-entries',
      component: Timeentries,
      children: [{
        path: 'log',
        name: 'log',
        component: Log
      }]
    },
  ]
})
