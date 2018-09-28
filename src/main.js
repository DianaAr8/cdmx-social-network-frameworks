import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
// Vue.use(Router)


const router = new VueRouter({
  routes
})

const config = {
  apiKey: "AIzaSyCQUmANFCfeuGa2E1uMJNGTiYjp97yRYBk",
  authDomain: "social-network-vue-f2793.firebaseapp.com",
  databaseURL: "https://social-network-vue-f2793.firebaseio.com",
  projectId: "social-network-vue-f2793",
  storageBucket: "social-network-vue-f2793.appspot.com",
  messagingSenderId: "432750321013"
};
firebase.initializeApp(config);

window.firebase-firebase;


new Vue({
  router,
  el: '#app',
  render: h => h(App),
  
})
