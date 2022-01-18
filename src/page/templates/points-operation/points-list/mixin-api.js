import GameService from '@/services/GameService'
import { callApi } from '@/helper'

// 點數紀錄/ 列表
const getPointsOperationList = async (formData) => {
  const result = await callApi({
    apifunction: GameService.getPointsOperationList,
    formData: formData,
    type: 'getResult'
  })
  return result
}
const POINTS_OPERATION_PAYMENT_CONTEXT_LIST = [
  { label: '系统提分', value: 1 },
  { label: '系统入分', value: 2 },
  { label: '轉出', value: 3 },
  { label: '轉入', value: 4 },
  { label: '轉換失败', value: 5 }
]

export default {
  getPointsOperationList,
  POINTS_OPERATION_PAYMENT_CONTEXT_LIST
}
