import { State } from '@/store/interface'
import { Commit } from 'vuex'
import { getMovieList } from '@/api/movie'

const getters = {

}

const state: State = {
  movieList: [
    {
      name: '霸王别姬',
      title: 'dshaj',
      id: '13'
    }
  ]
}

const mutations = {}

const actions = {
  // api 前后端的分离点
  // commit mutations
  async movieList(context: {commit: Commit}, cate: String) {
    const res = await getMovieList(cate)
    .then((response) => response)
    return res
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}