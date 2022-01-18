import GameService from '@/services/GameService'
import { callApi } from '@/helper'

// 系統服務/輸入原因
const INTO_PAYMENT_REASON_LIST = [
  { label: '轉入', value: 1 },
  { label: '錢錢轉入', value: 0 }
]

// 系統服務/輸出原因
const RAISE_PAYMENT_REASON_LIST = [
  { label: '轉出', value: 1 },
  { label: '錢錢轉出', value: 0 }
]

// 系統服務/資料
const getPointsServeinfo = async (formData) => {
  const result = await callApi({
    apifunction: GameService.getPointsServeinfo,
    formData: formData,
    type: 'getResult'
  })
  return result
}

// 系統服務/更新
const postPointsServeUpdate = async (formData) => {
  const result = await callApi({
    apifunction: GameService.postPointsServeUpdate,
    formData: formData,
    type: 'getBoolean'
  })
  return result
}

export default {
  getPointsServeinfo,
  postPointsServeUpdate,
  INTO_PAYMENT_REASON_LIST,
  RAISE_PAYMENT_REASON_LIST
}
