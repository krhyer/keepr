import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Vaults from '@/components/Vaults'
import Vault from '@/components/Vault'
// import Keeps from '@/components/Keeps'
// import Keep from '@/components/Keep'
// import AllKeeps from '@/components/AllKeeps'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vaults',
      name: 'Vaults',
      component: Vaults
    },
    {
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault
    },
    // {
    //   path: '/vaults/:id/keeps',
    //   name: 'Keeps',
    //   component: Keeps
    // },
    // {
    //   path: '/keeps',
    //   name: 'AllKeeps',
    //   component: AllKeeps
    // },
    // {
    //   path: '/keeps/:id',
    //   name: 'Keep',
    //   component: Keep
    // },
    // {
    // path: "*",
    // redirect: "/"    
    // }
  ]
})
