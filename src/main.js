
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCeeFjAYcTLPunCaL-YHOmu9jpsYEZTC-E',
      authDomain: 'lottery-mm.firebaseapp.com',
      databaseURL: 'https://lottery-mm.firebaseio.com',
      projectId: 'lottery-mm',
      storageBucket: 'lottery-mm.appspot.com',
      messagingSenderId: '17579503659',
      appId: '1:17579503659:web:249ccb8a9bbab20b67ba6e',
      measurementId: 'G-4G9CRDWY8N',
    })
  },
  render: h => h(App),
}).$mount('#app')
