<template>
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

    // aside-menu
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
