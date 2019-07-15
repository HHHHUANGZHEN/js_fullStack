import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  plans: [],
  totalTime: 0
}
const mutations = {
  [types.ADD_TOTAL_TIME](state, time) {
    state.totalTime = state.totalTime + time
  },
  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },
  [types.SAVE_PLAN] (state, plan) {
    const avatar = '../../build/logo.png'
    state.plans.push(
      Object.assign({ name: '活着', avatar: avatar }, plan)
    )
  },
  [types.DELETE_PLAN] (state, index) {
    state.plans.splice(index, 1);
  }
},
actions = {
  addTotalTime({ commit }, time) {
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan({ commit }, plan) {
    commit(types.SAVE_PLAN, plan)
  },
  deletePlan({ commit }, plan) {
    commit(types.DELETE_PLAN, plan)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})