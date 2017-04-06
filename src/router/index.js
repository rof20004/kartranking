import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../auth'
import Login from '@/components/Login'
import Home from '@/components/Home'
import BateriaAdd from '@/components/bateria/BateriaAdd.vue'
import BateriaList from '@/components/bateria/BateriaList.vue'
import BateriaView from '@/components/bateria/BateriaView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: onlyGuest
    },
    {
      path: '/',
      component: Home,
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          name: 'bateria-list',
          component: BateriaList,
          beforeEnter: requireAuth
        },
        {
          path: '/bateria',
          name: 'bateria-add',
          component: BateriaAdd,
          beforeEnter: requireAuth
        },
        {
          path: '/bateria/:bateriaId',
          name: 'bateria-view',
          component: BateriaView,
          beforeEnter: requireAuth
        }
      ]
    }
  ]
})

function requireAuth (to, from, next) {
  Auth.onAuthStateChanged((user) => {
    if (!user) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  }, (error) => {
    console.error(error)
  })
}

function onlyGuest (to, from, next) {
  Auth.onAuthStateChanged((user) => {
    if (user) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }, (error) => {
    console.error(error)
  })
}
