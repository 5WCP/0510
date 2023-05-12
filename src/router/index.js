import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import("../views/LogIn.vue")
    },
    {
      path: '/page',
      name: 'Page',
      component: () => import("../views/Page.vue")
    }
  ]
})

export default router
