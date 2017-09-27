import * as types from '../mutation-types'

const state = {
    name: 'index',
    count: 1
}
const getters = {
  getIndexName: state => state.name
}

const actions = {
  getIndexCount ({ commit }) {
      commit(types.INDEX_ADD_COUNT)
  }
}

const mutations = {
  [types.INDEX_ADD_COUNT] (state) {
    state.count++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}