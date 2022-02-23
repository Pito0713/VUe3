<template lang="pug">
.general-agent-update(v-loading.lock="loading")
  create-and-update-base-layout
    template(#mainTitle) {{ '會員' }}
    template(#subtitle) {{ '更新' }}

    template(#formContent)
      el-form(label-width="100px" ref="form" label-position="top")
        form-item.el-form-content(:label="'帳號'")
          el-input(:disabled="disabledForm.account" v-model="fetchForm.account" size="small" clearable)

        form-item.el-form-content(:label="'密碼'")
          el-input(:disabled="disabledForm.password" v-model="fetchForm.password" size="small" :placeholder="'請輸入密碼'" clearable)

        form-item.el-form-content(:label="'姓名'")
          el-input(:disabled="disabledForm.name" v-model="fetchForm.name" size="small" :placeholder="'請輸入姓名'" clearable)

        form-item.el-form-content(:label="'電話'")
          el-input(:disabled="disabledForm.phone" v-model="fetchForm.phone" size="small" :placeholder="'請輸入電話'" clearable)

        form-item.el-form-content(:label="'名稱'")
          el-input(:disabled="disabledForm.agentName" v-model="fetchForm.agentName" size="small" :placeholder="'請輸入名稱'" clearable)

        form-item.el-form-content(:label="'選擇狀態'")
          el-select(:disabled="disabledForm.status" v-model="fetchForm.status" size="small" :placeholder="'請選擇狀態'")
            el-option(v-for="(item, index) of GENERAL_AGENT_STATUS_LIST" :label="item.label" :value="item.value" :key="index")

        form-item.el-form-content(:label="'備註'")
          el-input(:disabled="disabledForm.remark" v-model="fetchForm.remark" maxlength="100" show-word-limit type="textarea" size="small" :placeholder="'可輸入狀態'" clearable)

        form-item.form-table
          .form-table__title  {{ '支付列表' }}
          el-table.form-table__content(:data="fetchForm.bankList")
            el-table-column(:label="'帳號'" prop="account"  min-width="100" key="account")
            el-table-column(:label="'支付名称'" prop="bankName"  min-width="130" key="bankName")
            el-table-column(:label="'支付支行'" prop="bankBranch" min-width="130" key="bankBranch")
            el-table-column(:label="'支付户名'" prop="bankAccountName"  min-width="130" key="bankAccountName")
            el-table-column(:label="'支付帳號'" prop="bankAccount"  min-width="130" key="bankAccount")
            el-table-column(:label="'創建日期'" prop="bankCearteTime" :formatter="timeFormatter"  min-width="180" key="bankCearteTime")
            el-table-column(:label="'更新日期'" prop="bankUpdateTime" :formatter="timeFormatter" min-width="180" key="bankUpdateTime")
            el-table-column(min-width="130" key="update")
              template(v-slot="scope")
                .table-button-label
                  el-button(@click="goDeleteBankCard(scope.row.id)" type="primary" size="small") {{ '刪除' }}
    template(#formButton)
      el-form
        .button-label
          el-button(@click="update" type="primary" size="small") {{ '更新' }}
          el-button(@click="goPage" type="primary" size="small") {{ '回列表' }}

</template>

<script>
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import mixinApi from './mixin-api'
import { ElMessageBox, ElMessage } from 'element-plus'
import { timeFormatter } from '@/helper'
import { GENERAL_AGENT_STATUS_LIST } from '@/configs/site'
import formItem from '@/components/form-item'

export default {
  name: 'general-agent-update',

  components: {
    formItem
  },

  setup () {
    // == data ==
    const router = useRouter()
    const route = useRoute()
    const fetchForm = ref({
      account: '',
      password: '',
      name: '',
      phone: '',
      agentName: '',
      status: '',
      remark: '',
      bankList: []
    })
    const disabledForm = ref({
      account: false,
      password: false,
      name: false,
      phone: false,
      agentName: false,
      status: false,
      remark: false
    })
    const loading = ref(false)

    watch(
      () => fetchForm.value.phone,
      (newValue, oldValue) => {
        const isOnlyNumber = /^[0-9]*$/.test(newValue)
        if (!isOnlyNumber) fetchForm.value.phone = oldValue
      }
    )

    // == event ==
    const initDisabledForm = () => {
      disabledForm.value = {
        account: true,
        password: false,
        name: false,
        phone: false,
        agentName: false,
        status: false,
        remark: false
      }
    }

    const goPage = () => {
      router.push({
        name: 'general-agent/general-agent-report'
      })
    }

    const goDeleteBankCard = (id) => {
      ElMessageBox.confirm(
        '刪除支付', {
          confirmButtonText: '確定',
          cancelButtonText: '取消'
        })
        .then(async () => {
          fetchForm.value.bankList = fetchForm.value.bankList?.filter(item => item.id !== id)
          ElMessage({
            message: '成功刪除',
            type: 'success'
          })
        })
        .catch(() => {
        })
    }

    const update = async () => {
      if (!loading.value) {
        loading.value = true

        const submitData = fetchForm.value
        const isSuccess = await mixinApi.putGeneralAgent(submitData)
        if (isSuccess) {
          ElMessage({
            message: '已成功',
            type: 'success'
          })
        }

        loading.value = false
      }
    }

    const setFetchForm = () => {
      if ('fetchForm' in route.query) {
        fetchForm.value = Object.assign({}, fetchForm.value, JSON.parse(route.query.fetchForm))
      }
    }

    // == init ===
    const init = async () => {
      loading.value = true
      initDisabledForm()

      await setFetchForm()
      loading.value = false
    }

    init()

    return {
      // == data ==
      fetchForm,
      disabledForm,
      // == list ==
      GENERAL_AGENT_STATUS_LIST,
      // == boolean ==
      loading,
      // == event ==
      goPage,
      goDeleteBankCard,
      update,
      // == formatter ==
      timeFormatter
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";

::v-deep(.el-input--small) {
  width: 270px
}

::v-deep(.el-table__header) {
  line-height: 0px;
}

.form-table {
  width: 100%;
  border-radius: to-rem(3px);
  border-top: to-rem(3px) solid #d2d6de;
  margin-bottom: to-rem(20px);
  box-shadow: 0 to-rem(1px) to-rem(1px) rgba(0, 0, 0, 0.1);
}

.form-table__title {
  padding: to-rem(10px);
  font-weight: 500;
  font-size: to-rem(18px);
  color: $block-title-font-color;
  line-height: to-rem(18px);
}

.form-table__content {
  border-top: to-rem(1px) solid #f4f4f4;
}
</style>
