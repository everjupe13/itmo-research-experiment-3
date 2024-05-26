import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: { title: 'Главная' }
  },
  {
    name: 'Recommendations',
    path: '/recommendations',
    component: () => import('@/views/RecommendationsVIew.vue'),
    meta: { title: 'Рекомендации' }
  },
  {
    name: 'Analyze',
    path: '/analyze',
    component: () => import('@/views/AnalyzeView.vue'),
    meta: { title: 'Провести анализ' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(to => {
  document.title = to.meta.title as string
})

export { router, routes }
