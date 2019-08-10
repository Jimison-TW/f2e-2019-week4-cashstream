import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {
    step(state) {
      // return state.route.path.charAt(5)
    }
  },
  mutations: {},
  actions: {}
})
