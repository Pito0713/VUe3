import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PageBaseLayOut from '@/components/page-base-layout/page-base-layout-install'

const app = createApp(App)
  .use(store) // 引入vuex
  .use(router) // 引入 vue-router
  .use(ElementPlus)
  .use(PageBaseLayOut)
  .mount('#app')

export default app
