import Vue from 'vue'
import Vuex from 'vuex'
import firebaseAPI from './modules/firebaseAPI'
import moduleI18n from './modules/moduleI18n'
import createPersist from 'vuex-localstorage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    firebaseAPI: firebaseAPI,
    moduleI18n: moduleI18n,
  },
  strict: false,
  plugins: [createPersist({
    namespace: 'namespace-for-state',
    initialState: {},
    expires: 24 * 60 * 60 * 1e3     //ONE_DAY
  })]
})
