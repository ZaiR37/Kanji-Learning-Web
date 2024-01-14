import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import KanjiView from '../views/KanjiView.vue'
import QuizView from '../views/QuizView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/kanji-list',
      name: 'Kanji List',
      component: KanjiView
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: QuizView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    }
  ]
})

export default router
