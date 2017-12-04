import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseIntance } from './config/firebaseConfig'
import i18n from './lang/i18n'
import store from './store'

require('semantic-ui-css/semantic.css')

const app = new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app
