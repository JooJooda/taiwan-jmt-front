import { createRouter, createWebHistory } from 'vue-router'
import FoodList from '../views/FoodList.vue'
import HomePage from '@/views/HomePage.vue'

const routes = [
  {
    path: '/foodList',
    name: 'foodList',
    component: FoodList
  },
  {
    path: '/homePage',
    name: 'homePage',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(){
    return{ top: 0 }
  }
})

export default router