<template lang="pug">
.points-serve(v-loading.lock="loading")
  template(v-if="!isGetInfo")
    div.title
      div.title__content
        div.title__content__main-title {{ '系统轉換' }}
        div.title__content__sub-title {{ '服務' }}

    section.container
      div.block
        el-form.block-padding
          el-input.el-form-content(v-model="formData.account" size="small" :placeholder="'請輸入正確帳號 ex:llrteset001'")
          .button-label
            el-button(@click="search" type="primary" size="small") {{ '搜尋' }}

  create-and-update-base-layout(v-if="isGetInfo")
    template(#mainTitle) {{ '轉換' }}
    template(#subtitle) {{ '服務' }}

    template(#formContent)
      el-form(label-width="100px" ref="form" label-position="top" :inline="true")
        form-item(:label="'帳號'")
          el-input(:disabled="disabledForm.account" v-model="fetchForm.account" size="small")

        form-item(:label="'角色'")
          el-input(:disabled="disabledForm.roleID" v-model="fetchForm.roleID" size="small")

        form-item(:label="'名稱'")
          el-input(:disabled="disabledForm.agentName" v-model="fetchForm.agentName" size="small")

        form-item(:label="'錢包'")
          el-input(:disabled="disabledForm.wallet" v-model="fetchForm.wallet" size="small")

        form-item(:label="'錢錢'")
          el-input(:disabled="disabledForm.amount" v-model="fetchForm.amount" size="small")

      el-form(label-width="100px" ref="form" label-position="top" :inline="true")
        form-item(:label="'轉入'")
          el-input(:disabled="disabledForm.intoScore" v-model="fetchForm.intoScore" size="small" :placeholder="'欲入分'" clearable)

        form-item(:label="'(轉入)原因'")
          el-select(:disabled="disabledForm.intoPaymentReason" v-model="fetchForm.intoPaymentReason" size="small" :placeholder="'请選擇(輸入)原因'")
            el-option(v-for="(item, index) of INTO_PAYMENT_REASON_LIST" :label="item.label" :value="item.value" :key="index")

        form-item(:label="'(轉入)備註'")
          el-input(:disabled="disabledForm.intoPaymentRemark" v-model="fetchForm.intoPaymentRemark" maxlength="100" show-word-limit type="textarea" size="small" :placeholder="'填寫(輸入)備註'" clearable)

      el-form(label-width="100px" ref="form" label-position="top" :inline="true")
        form-item(:label="'轉出'")
          el-input(:disabled="disabledForm.raisePoints" v-model="fetchForm.raisePoints" size="small" :placeholder="'欲出分'" clearable)

        form-item(:label="'(輸出)原因'")
          el-select(:disabled="disabledForm.raisePaymentReason" v-model="fetchForm.raisePaymentReason" size="small" :placeholder="'请選擇(輸出)原因'")
            el-option(v-for="(item, index) of RAISE_PAYMENT_REASON_LIST" :label="item.label" :value="item.value" :key="index")

        form-item(:label="'(輸出)備註'")
          el-input(:disabled="disabledForm.raisePaymentRemark" v-model="fetchForm.raisePaymentRemark" maxlength="100" show-word-limit type="textarea" size="small" :placeholder="'填寫(輸出)備註'" clearable)

    template(#formButton)
      el-form
        .button-label
          el-button(@click="goUpdate" type="primary" size="small") {{ '執行' }}
          el-button(@click="goChancel" type="primary" size="small") {{ '取消' }}

</template>

<script>
import { ref, watch } from 'vue'
import mixinApi from './mixin-api'
import { deepCopy } from '@/helper'
import formItem from '@/components/form-item'
import { ElMessageBox, ElMessage } from 'element-plus'

export default {
  name: 'points-operation',

  components: {
    formItem
  },

  setup () {
    // == data ==
    const loading = ref(false)
    const isGetInfo = ref(false)
    const formData = ref({
      account: ''
    })
    const fetchForm = ref({
      account: '',
      roleID: '',
      agentName: '',
      wallet: '',
      amount: '',
      intoScore: '',
      intoPaymentReason: '',
      raisePoints: '',
      raisePaymentReason: '',
      raisePaymentRemark: ''
    })
    const disabledForm = ref({
      account: false,
      roleID: false,
      agentName: false,
      wallet: false,
      amount: false,
      intoScore: false,
      intoPaymentReason: false,
      raisePoints: false,
      raisePaymentReason: false,
      raisePaymentRemark: false
    })

    watch(
      () => fetchForm.value.intoScore,
      (newValue, oldValue) => {
        const rule = new RegExp(/^(\d*)(\.\d{0,2})?$/)
        const isOnlyNumber = rule.test(newValue)
        if (!isOnlyNumber) {
          if (!['', null, undefined].includes(newValue)) {
            fetchForm.value.intoScore = oldValue
          }
        }
      }
    )

    watch(
      () => fetchForm.value.raisePoints,
      (newValue, oldValue) => {
        const rule = new RegExp(/^(\d*)(\.\d{0,2})?$/)
        const isOnlyNumber = rule.test(newValue)
        if (!isOnlyNumber) {
          if (!['', null, undefined].includes(newValue)) {
            fetchForm.value.raisePoints = oldValue
          }
        }
      }
    )

    // == event ==
    const initIsGetInfo = () => {
      isGetInfo.value = false
    }
    const initformData = () => {
      formData.value = {
        account: ''
      }
    }
    const intiDisabledForm = () => {
      disabledForm.value = {
        account: true,
        roleID: true,
        agentName: true,
        wallet: true,
        amount: true,
        intoScore: false,
        intoPaymentReason: false,
        raisePoints: false,
        raisePaymentReason: false,
        raisePaymentRemark: false
      }
    }
    const intiFetchForm = () => {
      fetchForm.value = {
        account: '',
        roleID: '',
        agentName: '',
        wallet: '',
        amount: '',
        intoScore: '',
        intoPaymentReason: '',
        raisePoints: '',
        raisePaymentReason: '',
        raisePaymentRemark: ''
      }
    }

    const search = async () => {
      const submitData = {}
      const warningList = {
        accountVacancy: '帳號不能空。',
        accountUndefined: '找不到帳號。'
      }

      // 驗證
      if (!['', null, undefined].includes(formData.value.account)) {
        submitData.account = formData.value.account
      } else {
        return warningElMessageBox(warningList.accountVacancy)
      }

      if (!loading.value) {
        loading.value = true

        const result = await mixinApi.getPointsServeinfo(submitData)
        if (!['', null, undefined].includes(result[0])) {
          fetchForm.value = deepCopy(result[0])
          isGetInfo.value = true
        } else {
          isGetInfo.value = false
          warningElMessageBox(warningList.accountUndefined)
        }

        loading.value = false
      }
    }

    const goUpdate = async () => {
      const warningList = {
        intoPayment: '請填寫輸入原因。',
        raisePayment: '請填寫輸出原因。'
      }

      // 驗證
      if (['', null, undefined].includes(fetchForm.value.intoPaymentReason)) {
        if (
          !['', null, undefined].includes(fetchForm.value.intoScore)
        ) return warningElMessageBox(warningList.intoPayment)
      }
      if (['', null, undefined].includes(fetchForm.value.raisePaymentReason)) {
        if (
          !['', null, undefined].includes(fetchForm.value.raisePoints)
        ) return warningElMessageBox(warningList.raisePayment)
      }

      // submitData
      const submitData = {}
      if (!['', null, undefined].includes(fetchForm.value.account)) submitData.account = fetchForm.value.account
      if (!['', null, undefined].includes(fetchForm.value.roleID)) submitData.roleID = fetchForm.value.roleID
      if (!['', null, undefined].includes(fetchForm.value.agentName)) submitData.agentName = fetchForm.value.agentName
      if (!['', null, undefined].includes(fetchForm.value.wallet)) submitData.wallet = fetchForm.value.wallet
      if (!['', null, undefined].includes(fetchForm.value.amount)) submitData.amount = fetchForm.value.amount
      if (!['', null, undefined].includes(fetchForm.value.intoScore)) submitData.intoScore = fetchForm.value.intoScore
      if (!['', null, undefined].includes(fetchForm.value.intoPaymentReason)) submitData.intoPaymentReason = fetchForm.value.intoPaymentReason
      if (!['', null, undefined].includes(fetchForm.value.intoPaymentRemark)) submitData.intoPaymentRemark = fetchForm.value.intoPaymentRemark
      if (!['', null, undefined].includes(fetchForm.value.raisePoints)) submitData.raisePoints = fetchForm.value.raisePoints
      if (!['', null, undefined].includes(fetchForm.value.raisePaymentReason)) submitData.raisePaymentReason = fetchForm.value.raisePaymentReason
      if (!['', null, undefined].includes(fetchForm.value.raisePaymentRemark)) submitData.raisePaymentRemark = fetchForm.value.raisePaymentRemark

      if (!loading.value) {
        loading.value = true

        const isSuccess = await mixinApi.postPointsServeUpdate(submitData)
        if (isSuccess) {
          ElMessage({
            message: '已完成',
            type: 'success'
          })
          // 初始化
          init()
        }

        loading.value = false
      }
    }

    const goChancel = async () => {
      loading.value = true
      // 初始化
      init()
      loading.value = false
    }

    const warningElMessageBox = (value) => {
      ElMessageBox.alert(value, {
        confirmButtonText: '確定'
      }).catch(() => {})
    }

    // == init ==
    const init = async () => {
      loading.value = true

      initIsGetInfo()
      intiDisabledForm()
      intiFetchForm()
      initformData()
      formData.value.account = 'llrtest001'

      loading.value = false
    }
    init()

    return {
      // == data ==
      fetchForm,
      disabledForm,
      formData,
      // == boolean ==
      loading,
      isGetInfo,
      // == list ==
      RAISE_PAYMENT_REASON_LIST: mixinApi.RAISE_PAYMENT_REASON_LIST,
      INTO_PAYMENT_REASON_LIST: mixinApi.INTO_PAYMENT_REASON_LIST,
      // == event ==
      search,
      goUpdate,
      goChancel
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";

.el-form-content {
  width: 200px
}

.title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: to-rem(15px) to-rem(15px) 0 to-rem(15px);
}

.title__content {
  display: flex;
  flex-direction: row;
}

.title__content__main-title {
  align-self: end;
  font-size: to-rem(24px);
  font-weight: 500;
  color: $main-title-font-color;
}

.title__content__sub-title {
  align-self: end;
  padding-left: to-rem(4px);
  font-size: to-rem(15px);
  font-weight: 300;
  color: $sub-title-font-color;
}

.container {
  padding: to-rem(15px);
}

.block {
  width: 100%;
  background-color: #fff;
  color: $main-title-font-color;
  box-shadow: 0 to-rem(1px) to-rem(1px) rgba(0, 0, 0, 0.1);
  border-top: to-rem(3px) solid #d2d6de;
  border-radius: to-rem(3px);
}

.block-padding {
  padding: to-rem(10px);
}
</style>
