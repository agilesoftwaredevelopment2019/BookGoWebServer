import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import Notification from './views/Notification.vue'
import Book from './views/Book.vue'
import Buy from './views/Buy.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/notification',
      name: 'notification',
      component: Notification
    },
    {
      path: '/book',
      name: 'book',
      component: Book
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    }
  ]
})
