import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import Improve from '../views/Improve.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'LandingPage',
  component: LandingPage
}, 
{
  path: '/home',
  name: 'Home',
  component: Home
},
{
  path: '/improve',
  name: 'Improve',
  component: Improve
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
