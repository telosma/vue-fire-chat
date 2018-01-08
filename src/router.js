import Vue from 'vue'
import VueRouter from 'vue-router'
import AppHome from './components/Chat'
import AppLogin from './components/Login'
import AppRegister from './components/Register'

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
      meta: { auth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: AppLogin
    },
    {
      path: '/register',
      name: 'register',
      component: AppRegister
    },
    {
      path: '*',
      component: AppLogin,
      name: 'notyetImplement'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!firebase.auth().currentUser) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
