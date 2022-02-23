<template>
  <!--elementPlus 全域選項-->
  <el-config-provider />
    <router-view/>
</template>

<script>
import { computed, watch } from 'vue'
import Store from '@/store'
import { useRoute } from 'vue-router'

export default {
  setup () {
    const routeName = computed(() => useRoute())
    const timezone = computed(() => Store.state.timezone)

    // timezone
    if (['', null, undefined].includes(timezone.value)) Store.dispatch('setMoment')

    // aside-menu
    // 監聽路徑 則呼叫dispatch
    watch(
      () => routeName.value.path,
      (newIndex, oldIndex) => {
        Store.dispatch('setPageCode')
      }
    )

    return {
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/share";
</style>
