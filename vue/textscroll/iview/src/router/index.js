import Vue from 'vue'
import Router from 'vue-router'
import  Login from '@/components/Login'
import Home from '@/components/Home'
// import HelloWorld from '@/components/HelloWorld'
import F1 from '@/components/view/demo1/father'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/table',
    //   name: 'Home',
    //   component: Home
    // },
    {
      path: '/f1',
      name: 'F1',
      component: F1
    }
  ]
})
