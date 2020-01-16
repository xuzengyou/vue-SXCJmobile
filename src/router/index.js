import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Header from '../components/header.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // },
  {
    path: '/gupiao',
    name: 'gupiao',
    component: () => import(/* webpackChunkName: "about" */ '../views/gupiao.vue')
  },
  {
    path: '/waihui',
    name: 'waihui',
    component: () => import(/* webpackChunkName: "about" */ '../views/waihui.vue')
  },
  {
    path: '/*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "about" */ '../views/notfound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
