import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  is_filtered: false
}

const mutations = {
  UPDATE_FILTERED(state, bool) {
    state.is_filtered = bool
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
