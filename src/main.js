import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import VeeValidate, { Validator } from 'vee-validate'
import VueLoading from 'vuex-loading'


const config = {
  events: 'register'
}

Vue.use(VueLoading)
Vue.use(VeeValidate, config)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vueLoading: new VueLoading({
    useVuex: true
  }),
  template: '<App/>',
  components: {
    App
  }
})
