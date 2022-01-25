<template lang="pug">
.ina-pagination.pagination
  el-pagination(
    :current-page="props.fetchFormState.page"
    @current-change="props.handlePageChange"
    :page-size="props.fetchFormState.count"
    :total="props.resultTable.total"
    background
    small
    prev-text="«"
    next-text="»"
    layout="slot, prev, pager, next"
  )
    span.pagination-slot(tabIndex="1" @click="props.handlePageChange(1)") {{ '首頁' }}

  el-pagination(
    :total="props.resultTable.total"
    small
    layout="slot"
  )
    span.pagination-slot(tabIndex="2" @click="props.handlePageChange(lastPage)") {{ '末頁' }}

</template>

<script>
import { computed } from 'vue'

export default {
  name: 'ina-pagination',

  props: {
    fetchFormState: {
      type: Object,
      default: () => {
        return {
          page: 1,
          count: 20
        }
      }
    },

    resultTable: {
      type: Object,
      default: () => {
        return {
          total: 0
        }
      }
    },

    handlePageChange: {
      type: Function,
      default: () => {}
    }
  },

  setup (props) {
    const lastPage = computed(() => Math.ceil(props.resultTable.total / props.fetchFormState.count))

    return {
      props,
      lastPage
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
