import Vue from 'vue'
import Vuex from 'vuex'
// this.$store.state.count  vue全局实例
Vue.use(Vuex);  // 启用Vuex 和router一样，可拔插的

const state = {
  count: 0
}

// 改？ 修改要管起来 要严谨
const mutations = {
  // 按我的方式来改
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
}

const getters ={
  eventOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// 组件只能跟actions交流 组件不可以直接跟state修改交流
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd({commit, state}) {
    // 奇数
    // 将组件逻辑放到action
    if ((state.count + 1 ) % 2 === 0 ) {
      commit('increment')
    }
  },
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      },2000)
    })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})