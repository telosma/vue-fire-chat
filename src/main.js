import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseIntance } from './config/firebaseConfig'

require('semantic-ui-css/semantic.css')

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
