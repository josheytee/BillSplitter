import Vue from 'vue'
import Vuex from 'vuex'

// Pages
import Login from '@/view/pages/Login/store'
import Register from '@/view/pages/Register/store'
import CreateBill from '@/view/pages/CreateBill/store'
import Bills from '@/view/pages/Bills/store'
import App from '../App'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    App,
    Login,
    Register,
    CreateBill,
    Bills
  },
  strict: debug
})
