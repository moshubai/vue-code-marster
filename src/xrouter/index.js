import Vue from 'vue'
import VueRouter from './xvue-router-hash.js'
// import VueRouter from './xvue-router-history.js'
import Home from '@page/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@page/About.vue'),
    children: [
      {
        path: '/about/child',
        component: () => import(/* webpackChunkName: "about" */ '@page/About-child.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  // 
  // mode: 'history',
  routes
})

export default router
