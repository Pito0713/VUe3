<template lang="pug">
.points-operation(v-loading.lock="loading")
  main-base-layout
    template(#mainTitle) {{ '點數紀錄' }}
    template(#subtitle) {{ '列表' }}
    template(#searchBarContent)
      .content-label
        .label {{ '帳號' }}
        el-input(v-model="fetchForm.account" size="small" :placeholder="'請輸入帳號'" clearable)

      .content-label
        .label {{ '選擇原因' }}
        el-select(v-model="fetchForm.payment" size="small" :placeholder="'请選擇原因'" clearable)
          el-option(v-for="(item, index) of POINTS_OPERATION_PAYMENT_LIST" :label="item.label" :value="item.value" :key="index")

      .content-label
        .label {{ '出款單號' }}
        el-input(v-model="fetchForm.withdraw" size="small" :placeholder="'請輸出單號'" clearable)

      .content-label
        .label {{ '入款單號' }}
        el-input(v-model="fetchForm.deposit" size="small" :placeholder="'請輸入單號'" clearable)

      .content-label
        .label {{ '選擇日期' }}
        el-date-picker(v-model="fetchForm.daterange" range-separator="~" type="daterange" :start-placeholder="'開始日期'" :end-placeholder="'结束日期'" value-format="YYYY-MM-DD" size="small" :placeholder="'請選擇'" :clearable="false" :disabled-date="disabledDate")

      .content-label
        .label {{ '最小金额' }}
        el-input(v-model="fetchForm.minMoney" size="small" :placeholder="'請輸入最小額度'" clearable)

      .content-label
        .label {{ '最大金额' }}
        el-input(v-model="fetchForm.maxMoney" size="small" :placeholder="'請輸入最大額度'" clearable)

    template(#searchBarButton)
      div.button-label
        el-button(@click="search" type="primary" size="small") {{ '搜尋' }}

    template(#tableTitle) {{ '點數纪录' }}
    template(#tableContent)
      el-table(:data="resultTable.data")
        el-table-column(:label="'ID'" prop="id" min-width="100" key="id")
        el-table-column(:label="'帳號'" prop="account" min-width="130" key="account")
        el-table-column(:label="'原因'" prop="reason" min-width="130" key="reason")
        el-table-column(:label="'內容'" prop="payment" :formatter="paymentFormatter" min-width="200" key="payment")
        el-table-column(:label="'錢錢'" prop="amount" min-width="130" key="amount")
        el-table-column(:label="'單據'" prop="record" min-width="130" key="record")
        el-table-column(:label="'IP'" prop="ip" min-width="130" key="ip")
        el-table-column(:label="'備註'" prop="remark" min-width="130" key="remark")
        el-table-column(:label="'創建日期'" prop="createRange" :formatter="rfc3339TimeFormatter" min-width="200" key="createRange")

      ina-pagination(
        :fetchFormState="fetchFormState"
        :resultTable="resultTable"
        :handlePageChange="handlePageChange"
      )

</template>

<script>
import { ref } from 'vue'
import mixinApi from './mixin-api'
import moment from 'moment-timezone'
import { sleep, deepCopy, rfc3339Transform, rfc3339TimeFormatter, getDateString } from '@/helper'
import inaPagination from '@/components/ina-pagination'
import { POINTS_OPERATION_PAYMENT_LIST } from '@/configs/site'

export default {
  name: 'points-operation',

  components: {
    inaPagination
  },

  setup () {
    // == data ==
    const loading = ref(false)
    const fetchForm = ref({
      account: '',
      payment: '',
      withdraw: '',
      deposit: '',
      daterange: [moment().format('YYYY-MM-DD'), moment().add(1, 'days').format('YYYY-MM-DD')],
      minMoney: 1,
      maxMoney: 10000000,
      page: 1,
      count: 20
    })
    const fetchFormState = ref({})
    const resultTable = ref({
      data: [],
      total: 0,
      totalAmount: 0
    })

    // == event ==

    const disabledDate = (date) => {
      return moment().subtract(2, 'month').startOf('month') > moment(getDateString(date))
    }

    const search = async () => {
      fetchForm.value.page = 1
      await renderResultTable(fetchForm.value)
    }

    const renderResultTable = async (formData) => {
      loading.value = true

      const submitData = {
        page: formData.page,
        count: formData.count
      }
      if (!['', null, undefined].includes(formData.account)) submitData.account = formData.account
      if (!['', null, undefined].includes(formData.payment)) submitData.payment = formData.payment
      if (!['', null, undefined].includes(formData.withdraw)) submitData.withdraw = formData.withdraw
      if (!['', null, undefined].includes(formData.deposit)) submitData.deposit = formData.deposit
      if (!['', null, undefined].includes(formData.minMoney)) submitData.minMoney = formData.minMoney
      if (!['', null, undefined].includes(formData.maxMoney)) submitData.maxMoney = formData.maxMoney
      if (formData.daterange.length === 2) {
        submitData.daterange = [rfc3339Transform(formData.daterange[0]), rfc3339Transform(formData.daterange[1])]
      }
      // == testData ==
      await sleep(0.5)
      const result = await mixinApi.getPointsOperationList(submitData)
      if (result !== undefined) {
        resultTable.value = result
        fetchFormState.value = deepCopy(formData)
      }
      loading.value = false
    }

    const handlePageChange = async (targetPage) => {
      fetchFormState.value.page = targetPage
      const submitData = deepCopy(fetchFormState.value)
      await renderResultTable(submitData)
    }

    // == formatter ==
    const paymentFormatter = (row, column, cellValue) => {
      let result = '錯誤'
      const target = mixinApi.POINTS_OPERATION_PAYMENT_CONTEXT_LIST.find(item => item.value === cellValue)

      if (target.value !== undefined) result = target.label

      return result
    }

    // == init ==
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
      POINTS_OPERATION_PAYMENT_LIST,
      // == boolean ==
      loading,
      // == event ==
      disabledDate,
      search,
      handlePageChange,
      // == formatter ==
      rfc3339TimeFormatter,
      paymentFormatter
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
