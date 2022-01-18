import AgentService from '@/services/AgentService'
import { callApi } from '@/helper'

// 會員列表/ 列表清單
const getGeneralAgentTableList = async (formData) => {
  const result = await callApi({
    apifunction: AgentService.getGeneralAgentTableList,
    formData: formData,
    type: 'getResult'
  })
  return result
}

// 會員列表/ 更新會員
const putGeneralAgent = async (formData) => {
  const result = await callApi({
    apifunction: AgentService.putGeneralAgent,
    formData: formData,
    type: 'getBoolean'
  })
  return result
}

export default {
  putGeneralAgent,
  getGeneralAgentTableList
}
