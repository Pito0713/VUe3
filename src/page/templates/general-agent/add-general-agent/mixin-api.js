import AgentService from '@/services/AgentService'
import { callApi } from '@/helper'

// 會員列表/ 新增會員
const postGeneralAgentCreate = async (formData) => {
  const result = await callApi({
    apifunction: AgentService.postGeneralAgentCreate,
    formData: formData,
    type: 'getBoolean'
  })
  return result
}

export default {
  postGeneralAgentCreate
}
