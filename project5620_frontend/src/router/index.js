import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import MainPage from '../views/ExhibitPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/RegisterPage',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/ExhibitPage',
      name: 'ExhibitPage',
      component: MainPage
    }
  ]
})

export default router
