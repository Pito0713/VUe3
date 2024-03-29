import { createStore } from 'vuex'
import { MENU_LIST, TIMEZONE_DEFAULT, TIMEZONE_ENABLE } from '@/configs/site'
import moment from 'moment-timezone'
import router from '@/router'

const state = {
  pageCode: '',
  menu: [],
  timezone: '',
  timezone_num: 0
}
export default createStore({
  state,

  mutations: {
    SET_DEFAULT (state) {
      state.pageCode = ''
      state.menu = []
      state.timezone = ''
      state.timezone_num = 0
    },

    SET_PAGE_CODE (state, payload) {
      state.pageCode = payload
    },

    SET_TIME_MOMENT (state, payload) {
      state.timezone = TIMEZONE_DEFAULT
      moment.tz.setDefault(TIMEZONE_DEFAULT)
      if (TIMEZONE_ENABLE) window.localStorage.setItem('timezone', TIMEZONE_DEFAULT)
    }
  },

  actions: {
    setDefault ({ commit }) {
      commit('SET_DEFAULT')
    },

    setPageCode ({ commit }) {
      // 先撈清單內路徑
      let targetName = router.currentRoute.value.name
      const targetroute = MENU_LIST.find((node) => {
        //  找到目前相關的Menu 路徑
        const target = node.child.find(subNode => subNode.route === targetName)
        if (target) {
          // commit 呼叫mutaction
          commit('SET_PAGE_CODE', target.code)
        }
        return target
      })

      // 若沒有清單內 取當前路徑的開頭關聯路徑
      if (['', null, undefined].includes(targetroute)) {
        const tempStrArr = targetName.split('/')
        if (tempStrArr.length > 1) targetName = tempStrArr[0] + '/' + tempStrArr[1]

        MENU_LIST.find((node) => {
          const target = node.child.find(subNode => subNode.route === targetName)
          if (target) {
            commit('SET_PAGE_CODE', target.code)
            return true
          }
        })
      }
    },

    setMoment ({ commit }) {
      commit('SET_TIME_MOMENT')
    }
  },

  modules: {
  }
})
