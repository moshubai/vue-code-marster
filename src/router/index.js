import Vue from 'vue'
import VueRouter from 'vue-router'
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
        name: 'About-child',
        component: () => import(/* webpackChunkName: "about" */ '@page/About-child.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
