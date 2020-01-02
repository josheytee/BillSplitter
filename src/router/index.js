import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Login from '@/view/pages/Login/route'
import Register from '@/view/pages/Register/route'
import CreateBill from '@/view/pages/CreateBill/route'
import Bills from '@/view/pages/Bills/route'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: "Login"
      }
    },
    Login,
    Register,
    CreateBill,
    Bills
  ]
})

export default router
