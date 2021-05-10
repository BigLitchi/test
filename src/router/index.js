import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import One from '../views/One'
import Two from '../views/Two'
import UserUpdate from '../views/UserUpdate'
import Charts from '../views/Charts'
import Login from '../views/Login'
import Main from '../views/Main'
import Product from '../views/Product'
import ProductUpdate from '../views/ProductUpdate'
import OrderList from '../views/OrderList'

Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
    children:[
      {
        path: '/one',
        name: 'one',
        component: One
      },
      {
        path: '/two',
        name: 'two',
        component: Two
      },
    
      {
        path: '/Product',
        name: 'Product',
        component: Product
      },
      {
        path: '/UserUpdate',
        name: 'UserUpdate',
        component: UserUpdate
      },
      {
        path: '/ProductUpdate',
        name: 'ProductUpdate',
        component: ProductUpdate
      },

      {
        path: '/OrderList',
        name: 'OrderList',
        component: OrderList
      },
    ]
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
