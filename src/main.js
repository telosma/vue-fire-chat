import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firebaseIntance } from './config/firebaseConfig'
import VueI18n from 'vue-i18n'
import vnMessage from './lang/vn.json'
import enMessage from './lang/en.json'

require('semantic-ui-css/semantic.css')

Vue.use(VueI18n)

const messages = {
  vn: vnMessage,
  en: enMessage,
}
const i18n = new VueI18n({
  locale: 'vn', // set locale
  messages,
  fallbackLocale: 'vn',
})

new Vue({
  el: '#app',
  i18n,
  router,
  render: h => h(App)
})
