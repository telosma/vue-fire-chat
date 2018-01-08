import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseInstance } from './config/firebaseConfig'
import i18n from './lang/i18n'
import store from './store'
import directives from './directives'

require('semantic-ui-css/semantic.css')

window.firebase = firebaseInstance
Vue.directive('click-outside', directives.ClickOutside)

const unsubcribe = firebase.auth().onAuthStateChanged(user => {
  store.dispatch('setUser', user)

  const app = new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
  }).$mount('#app')

  unsubcribe()
})

export default app
