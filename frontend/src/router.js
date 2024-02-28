import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/HomePage.vue')
  },
  {
    path: '/HomeLogin',
    name: 'HomeLogin',
    component: () => import('./views/HomeLogin.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('./views/LoginPage.vue')
  },
  {
    path: '/Register',
    name: 'Register',
    component: () => import('./views/RegiterPage.vue')
  },
  {
    path: '/RegisterDormitory',
    name: 'RegisterDOrmitory',
    component: () => import('./views/RegisDor.vue')
  },
  {
    path: '/NotiPayment',
    name: 'NotiPayment',
    component: () => import('./views/NotiPayment.vue')
  },
  {
    path: '/Renter',
    name: 'Renter',
    component: () => import('./views/RenterPage.vue')
  },
  {
    path: '/Dormitory',
    name: 'Dormitory',
    component: () => import('./views/DorPage.vue')
  },
  {
    path: '/EditDormitory',
    name: 'EditDormitory',
    component: () => import('./views/EditDor.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router