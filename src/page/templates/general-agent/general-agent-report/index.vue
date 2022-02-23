<template lang="pug">
.general-agent-report(v-loading.lock="loading")
  main-base-layout
    template(#mainTitle) {{ '會員' }}
    template(#subtitle) {{ '列表' }}
    template(#titleButton)
      div.title-button-label
        el-button(size="small" @click="goPage()") {{ '新增' }}
    template(#searchBarContent)
      .content-label
        .label {{ '帳號' }}
        el-input(v-model="fetchForm.account" size="small" :placeholder="'請輸入帳號'" clearable)

      .content-label
        .label {{ '名稱' }}
        el-input(v-model="fetchForm.name" size="small" :placeholder="'請輸入名稱'" clearable)

      .content-label
        .label {{ '帳號狀態' }}
        el-select(v-model="fetchForm.status" size="small" :placeholder="'請選擇帳號'" clearable)
          el-option(v-for="(item, index) of GENERAL_AGENT_STATUS_LIST" :label="item.label" :value="item.value" :key="index")

    template(#searchBarButton)
      div.button-label
        el-button(@click="search" type="primary" size="small") {{ '搜尋' }}

    template(#tableTitle) {{ '會員帳號' }}
    template(#tableContent)
      el-table(:data="resultTable.data")
        el-table-column(:label="'帳號'" prop="account"  min-width="100" key="account")
        el-table-column(:label="'姓名'" prop="name"  min-width="130" key="name")
        el-table-column(:label="'名稱'" prop="agentName"  min-width="130" key="agentName")
        el-table-column(:label="'餘額'" prop="wallet"  min-width="130" key="wallet")
        el-table-column(:label="'錢錢'" prop="bet"  min-width="130" key="bet")
        el-table-column(:label="'權限'" prop="profit"  min-width="150" key="profit")
        el-table-column(:label="'狀態'" prop="status" :formatter="statusFormatter"  min-width="130" key="status")
        el-table-column(:label="'創建日期'" prop="createTime" :formatter="timeFormatter"  min-width="200" key="createTime")
        el-table-column(:label="'更新日期'" prop="updateTime" :formatter="timeFormatter"  min-width="200" key="updateTime")
        el-table-column(:label="'操作'" prop="update"  min-width="130" key="update")
          template(v-slot="scope")
            .table-button-label
              el-button(@click="goUpdatePage(scope.row)" type="primary" size="small") {{ '編輯' }}

      ina-pagination(
        :fetchFormState="fetchFormState"
        :resultTable="resultTable"
        :handlePageChange="handlePageChange"
      )

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import mixinApi from './mixin-api'
import { sleep, timeFormatter } from '@/helper'
import inaPagination from '@/components/ina-pagination'
import { GENERAL_AGENT_STATUS_LIST } from '@/configs/site'

export default {
  name: 'general-agent-report',

  components: {
    inaPagination
  },

  setup () {
    // == data ==
    const router = useRouter()
    const fetchForm = ref({
      account: '',
      name: '',
      status: ''
    })
    const fetchFormState = ref({})
    const resultTable = ref({
      data: [],
      total: 0,
      totalAmount: 0
    })
    const loading = ref(false)

    // == event ==
    const search = async () => {
      fetchForm.value.page = 1
      const submitData = fetchForm.value
      await renderResultTable(submitData)
    }

    const renderResultTable = async (formData) => {
      loading.value = true

      const submitData = {
        // siteCode: formData.account,
        // perpage: formData.name,
        // page: formData.status,
      }
      if (!['', null, undefined].includes(formData.account)) submitData.account = formData.account
      if (!['', null, undefined].includes(formData.name)) submitData.name = formData.name
      if (!['', null, undefined].includes(formData.status)) submitData.status = formData.status

      // == testData ==
      await sleep(0.5)
      const result = await mixinApi.getGeneralAgentTableList(submitData)
      if (result !== undefined) {
        resultTable.value = result
        fetchFormState.value = formData
      }
      loading.value = false
    }

    const handlePageChange = async (targetPage) => {
      fetchFormState.value.page = targetPage
      const submitData = fetchFormState.value
      await renderResultTable(submitData)
    }

    const goPage = () => {
      router.push({
        name: 'general-agent/add-general-agent'
      })
    }

    const goUpdatePage = (row) => {
      const fetchForm = row
      router.push({
        name: 'general-agent/general-agent-report/general-agent-update',
        query: {
          fetchForm: JSON.stringify(fetchForm)
        }
      })
    }

    // == formatter ==
    const statusFormatter = (row, column, cellValue) => {
      let result = '錯誤'
      const target = GENERAL_AGENT_STATUS_LIST.find(item => item.value === cellValue)
      if (target.value !== undefined) result = target.label

      return result
    }

    // == init ===
    const init = async () => {
      loading.value = true

      await renderResultTable(fetchForm.value)

      loading.value = false
    }

    init()

    return {
      // == data ==
      fetchForm,
      fetchFormState,
      resultTable,
      // == list ==
      GENERAL_AGENT_STATUS_LIST,
      // == boolean ==
      loading,
      // == event ==
      search,
      handlePageChange,
      goPage,
      goUpdatePage,
      // == formatter ==
      timeFormatter,
      statusFormatter
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
