- vuex 大型化 mudules来支持
  this.$store.user.
- user
  state     info 登录 注册 退出
  actions
  mutations

  vuex先设计，搭好结构，围绕着状态(token) -> 令牌环 this.$store.user.token
  -> 跳转到登录页

- 登录鉴权
  1. 延迟加载路由,性能优化   component: () => import('@/pages/index')

