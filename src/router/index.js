import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    name: 'Cat',
    component: () => import('@/components/Cat.vue')
  },
  {
    path: '',
    name: 'Contact',
    component: () => import('@/views/ContactMe.vue')
  },
  {
    path: '',
    name: 'SkillsList',
    component: () => import('@/views/SkillsList.vue')
  },
  // {
  //   path: '/Timeline',
  //   name: 'Timeline',
  //   component: () => import('@/views/Timeline.vue')
  // },
  {
    path: '',
    name: 'Diplomas',
    component: () => import('@/views/Diplomas.vue')
  },
  {
    path: '',
    name: 'MyGitHub',
    component: () => import('@/views/MyGitHubRepo.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
