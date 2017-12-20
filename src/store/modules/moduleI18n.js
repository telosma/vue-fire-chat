import * as types from '../mutationTypes'
import app from '../../main'

const mutations = {
  [types.SET_LANG] (state, payload) {
    app.$i18n.locale = payload
  }
}

const actions = {
  setLang({commit}, payload) {
    commit(types.SET_LANG, payload)
  }
}

export default {
  mutations,
  actions,
  namespaced: true,
}
