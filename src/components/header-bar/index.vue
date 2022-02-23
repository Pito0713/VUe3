<template lang="pug">
.header-bar
  .header-bar__left
    .menu-switch(@click="handleToggleMenu" :class="{ 'is-minnor': menuEnable }")
      img.menu-switch-image(src="./images/toggleMenu.svg")
  .header-bar__right
    Date
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import Date from './date'

export default {
  components: {
    Date
  },

  props: [
    'menuEnable'
  ],

  emit: [
    'toggleMenu'
  ],

  setup (props, { emit }) {
    const route = useRoute()
    const router = useRouter()

    const handleToggleMenu = () => {
      // 回傳點擊父件的toggleMenu
      emit('toggleMenu')
    }

    return {
      route,
      router,
      handleToggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
