import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './map'

// 建立
const router = createRouter({
  // 可創建 http協議網址
  history: createWebHistory(process.env.BASE_URL),
  // 導入路徑
  routes
})

export default router
