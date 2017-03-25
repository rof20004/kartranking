import Vue from 'vue'
import Router from 'vue-router'
import Auth from '../auth'
import Login from '@/components/Login'
import Home from '@/components/Home'
import BateriaAdd from '@/components/BateriaAdd'
import BateriaList from '@/components/BateriaList'
import BateriaDetail from '@/components/BateriaDetail'

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
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth,
      children: [
        {
          path: '',
          name: 'BateriaList',
          component: BateriaList,
          beforeEnter: requireAuth
        },
        {
          path: '/bateria',
          name: 'BateriaAdd',
          component: BateriaAdd,
          beforeEnter: requireAuth
        },
        {
          path: '/bateria/:bateriaId',
          name: 'BateriaDetail',
          component: BateriaDetail,
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
