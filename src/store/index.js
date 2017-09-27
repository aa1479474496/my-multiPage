import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import index from './modules/index'
import about from './modules/about'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
//   actions,
//   getters,
  modules: {
    index,
    about
  },
  strict: debug
})
