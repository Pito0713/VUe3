export const DEFAULT_DELAY_TIME = 500

export const TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// 預設語系時區
export const TIMEZONE_DEFAULT = 'Asia/Shanghai'

export const MENU_LIST = [
  {
    code: 5,
    name: 'bulletins',
    text: '會員管理',
    child: [
      { code: 30, name: 'bulletin', text: '會員列表', route: 'general-agent/general-agent-report' },
      { code: 31, name: 'message', text: '新增會員', route: 'general-agent/add-general-agent' }
    ]
  },
  {
    code: 9,
    name: 'points',
    text: '點數紀錄',
    child: [
      { code: 56, name: 'points-operation/points-list', text: '點數紀錄', route: 'points-operation/points-list' },
      { code: 57, name: 'points-operation/points-serve', text: '系统轉點服務', route: 'points-operation/points-serve' }
    ]
  }
]

// 總代管理/總代列表
export const GENERAL_AGENT_STATUS_LIST = [
  { label: '維修中', text: 'WATCH', value: 0 },
  { label: '還在動', text: 'ACTIVE', value: 1 },
  { label: '不能動', text: 'BLOCK', value: 2 }
]

export const POINTS_OPERATION_PAYMENT_LIST = [
  { label: '提出', value: 1 },
  { label: '補入', value: 2 },
  { label: '點數轉出', value: 3 },
  { label: '點數轉入', value: 4 }
]
