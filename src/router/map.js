const routes = [
  {
    path: '/',
    redirect: { name: 'welcome' },
    component: () => import('@/page'),
    children: [
      // == 首頁 ==
      { path: '/', component: () => import('@/page/templates/welcome'), name: 'welcome', meta: { requiresAuth: true } },
      // // -- 會員列表 --
      { path: '/general-agent/general-agent-report', component: () => import('@/page/templates/general-agent/general-agent-report'), name: 'general-agent/general-agent-report', meta: { requiresAuth: true } },
      { path: '/general-agent/general-agent-report/general-agent-update', component: () => import('@/page/templates/general-agent/general-agent-report/general-agent-update'), name: 'general-agent/general-agent-report/general-agent-update', meta: { requiresAuth: true } },
      { path: '/general-agent/add-general-agent', component: () => import('@/page/templates/general-agent/add-general-agent'), name: 'general-agent/add-general-agent', meta: { requiresAuth: true } },

      // == 點數紀錄 ==
      { path: '/points-operation/points-list', component: () => import('@/page/templates/points-operation/points-list'), name: 'points-operation/points-list', meta: { requiresAuth: true } },
      { path: '/points-operation/points-serve', component: () => import('@/page/templates/points-operation/points-serve'), name: 'points-operation/points-serve', meta: { requiresAuth: true } }

    ]
  }
]

export { routes }
