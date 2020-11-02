import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home'
import ErrorPage from '../views/ErrorPage.vue'
import Search from '../views/Search/'
import LoadingMoreHot from '../views/LoadingMoreHot/'
import LoadingMoreNew from '../views/LoadingMoreNew/'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/loading-hot',
    name: 'loading-hot',
    component: LoadingMoreHot
  },
  {
    path: '/loading-new',
    name: 'loading-new',
    component: LoadingMoreNew
  },
  {
    path: '*', // 所有不在路由表的页面均重定向到404页面
    name: 'error',
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
