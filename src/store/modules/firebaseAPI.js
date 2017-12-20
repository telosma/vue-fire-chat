import * as types from '../mutationTypes'

const state = {
  currentUser: null,
  currentChannel: null
}

const mutations = {
  [types.SET_USER] (state, user) {
    state.currentUser = user
  }
}

const actions = {
  setUser({commit}, user) {
    commit(types.SET_USER, user)
  }
}

const getters = {
  currentUser: state => state.currentUser
}

export default {
  state,
  getters,
  actions,
  mutations,
}
