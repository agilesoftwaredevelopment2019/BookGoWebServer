import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import LogIn from './views/LogIn.vue'
import SignUp from './views/SignUp.vue'
import Notification from './views/Notification.vue'
import Book from './views/Book.vue'
import Buy from './views/Buy.vue'
import Search from './views/Search.vue'
import MyPage from './views/MyPage.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
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
      component: Book,
      props: true
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/search',
      name: 'search',
      props: true,
      component: Search
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
