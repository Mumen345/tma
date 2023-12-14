import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store'
import Toasted from 'vue-toasted';

var VueScrollTo = require('vue-scrollto');

Vue.use(Toasted)
Vue.use(VueScrollTo)
// Vue.use(axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
