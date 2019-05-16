import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import router from './router'
import store from './store/'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
        apiKey: "AIzaSyASIWM4JPAoJJvW-x6q0EtGx-ByjGPp-Tk",
        authDomain: "game-parc.firebaseapp.com",
        databaseURL: "https://game-parc.firebaseio.com",
        projectId: "game-parc",
        storageBucket: "game-parc.appspot.com",
        messagingSenderId: "148852793017",
        appId: "1:148852793017:web:e1b16008f43182ea"
      };
/*
var firebaseConfig = {
		apiKey: "AIzaSyAowpGLtG2tuzt95Xv51b6NwNPqNa5QFQQ",
		authDomain: "vuex-test-a61dc.firebaseapp.com",
		databaseURL: "https://vuex-test-a61dc.firebaseio.com",
		projectId: "vuex-test-a61dc",
		storageBucket: "vuex-test-a61dc.appspot.com",
		messagingSenderId: "370217216011",
		appId: "1:370217216011:web:189319d56ffb29dd"
      };
*/
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
