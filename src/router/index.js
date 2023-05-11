// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'music-disabler',
        name: 'Menu Music Disabler',
        component: () => import(/* webpackChunkName: "home" */ '@/views/MusicDisabler.vue'),
      },
      {
        path: 'button-mapper',
        name: 'Button mapper',
        component: () => import(/* webpackChunkName: "home" */ '@/views/ButtonMapper.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
