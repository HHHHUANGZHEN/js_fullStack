import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 校验
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // if(!cookie)
  next()
})
