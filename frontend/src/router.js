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
    path: '/HomeLogin/:userId',
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
    path: '/RegisterDormitory/:userId',
    name: 'RegisterDormitory',
    component: () => import('./views/RegisDor.vue')
  },
  {
    path: '/NotiPayment/:userId/:dorId',
    name: 'NotiPayment',
    component: () => import('./views/NotiPayment.vue')
  },
  {
    path: '/Renter/:userId/:dorId',
    name: 'Renter',
    component: () => import('./views/RenterPage.vue')
  },
  {
    path: '/Dormitory/:userId/:dorId',
    name: 'Dormitory',
    component: () => import('./views/DorPage.vue')
  },
  {
    path: '/EditDormitory/:userId/:dorId',
    name: 'EditDormitory',
    component: () => import('./views/EditDor.vue')
  },
  {
    path: '/AddRenter/:userId/:dorId',
    name: 'AddRenter',
    component: () => import('./views/AddRenter.vue')
  },
  {
    path: '/RenterDetail/:userId/:dorId/:rentId',
    name: 'DetailRenter',
    component: () => import('./views/RenterDetail.vue')
  },
  {
    path: '/EditRenter/:userId/:dorId/:rentId',
    name: 'EditRenter',
    component: () => import('./views/EditRenter.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router