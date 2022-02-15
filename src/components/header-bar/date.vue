<template lang="pug">
.date-time
  a {{currentTime}}
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import moment from 'moment-timezone'
import { TIME_FORMAT } from '@/configs/site'
export default {
  setup () {
    const currentTime = ref(moment().format(TIME_FORMAT))
    const Interval = ref([])

    onMounted(() => {
      Interval.value = setInterval(() => {
        currentTime.value = moment().format(TIME_FORMAT)
      }, 1000)
    })

    onUnmounted(() => clearInterval(Interval.value))

    return {
      currentTime
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
