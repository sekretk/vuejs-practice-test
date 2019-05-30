import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Client from './views/Client.vue'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: { 
        requiresAuth: true
    }
    },
    {
      path: '/client/:id',
      name: 'client',
      component: Client,
      meta: { 
        requiresAuth: true
    }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        guest: true
      }
    },
  ]
})
