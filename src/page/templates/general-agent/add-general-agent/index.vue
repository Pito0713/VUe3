<template lang="pug">
.bet-list(v-loading.lock="loading")
  create-and-update-base-layout
    template(#mainTitle) {{ '會員' }}
    template(#subtitle) {{ '新增' }}
    template(#formContent)
      el-form(label-width="100px" ref="form" label-position="top" :model="formData")
        form-item.el-form-content(:label="'帳號'" prop="account")
          el-input(v-model="formData.account" size="small" :placeholder="'請輸入帳號'" clearable)

        form-item.el-form-content(:label="'密碼'" prop="password")
          el-input(v-model="formData.password" size="small" :placeholder="'請輸入密碼'" clearable)

        form-item.el-form-content(:label="'姓名'" prop="name")
          el-input(v-model="formData.name" size="small" :placeholder="'請輸入姓名'" clearable)

        form-item.el-form-content(:label="'名稱'" prop="agentName")
          el-input(v-model="formData.agentName" size="small" :placeholder="'請輸入名稱'" clearable)
    template(#formButton)
      el-form
        .button-label
          el-button(@click='submit(formData)' type="primary" size="small") {{ '新增' }}

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import mixinApi from './mixin-api'
import formItem from '@/components/form-item'

export default {
  name: 'add-general-agent',

  components: {
    formItem
  },

  setup () {
    // == data ==
    const router = useRouter()
    const formData = ref({
      account: '',
      password: '',
      name: '',
      agentName: ''
    })
    const verifyList = ref([
      { value: 'account', text: '帳號' },
      { value: 'password', text: '密碼' },
      { value: 'name', text: '姓名' },
      { value: 'agentName', text: '名稱' }
    ])
    const loading = ref(false)

    // == event ==
    const submit = async (value) => {
      const submitData = {
        account: value.account,
        password: value.password,
        name: value.name,
        agentName: value.agentName
      }

      // 驗證
      for (const [key, val] of Object.entries(formData.value)) {
        if (['', null, undefined].includes(val)) {
          const target = verifyList.value.filter(node => node.value === key)
          return ElMessageBox.alert(`${target[0].text}` + '不能為空', {
            confirmButtonText: '確定'
          }).catch(() => {})
        }
      }

      if (!loading.value) {
        loading.value = true

        const isSuccess = await mixinApi.postGeneralAgentCreate(submitData)
        if (isSuccess) {
          ElMessage({
            message: '已成功新增',
            type: 'success'
          })
          router.push({
            name: 'general-agent/general-agent-report'
          })
        }
        loading.value = false
      }
    }
    return {
      // == data ==
      formData,
      // == boolean ==
      loading,
      // == event ==
      submit
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";

.el-form-content {
  width: 270px
}
</style>
