<template lang="pug">
el-container.layout(:class="{ 'menu-zoom': !menuEnable }")
  el-aside.layout__aside
    aside-menu(:menuEnable="menuEnable" @toggleMenu="toggleMenu")
  el-container.layout__container
    el-header.layout__container__header(height="50px")
      header-bar(:menuEnable="menuEnable" @toggleMenu="toggleMenu")
    el-main.layout__container__main
      router-view
    el-footer.layout__container__footer
      span.layout__container__footer__text.font-bold Copyright © 2022 &nbsp;
      span.layout__container__footer__text . All rights reserved.

</template>

<script>
import { computed, ref } from 'vue'
import Store from '@/store'
import asideMenu from '@/components/aside-menu'
import headerBar from '@/components/header-bar'

export default {
  name: 'pages',

  components: {
    asideMenu,
    headerBar
  },

  setup () {
    const menuEnable = ref(true)
    const menu = computed(() => Store.state.menu)
    const toggleMenu = () => {
      menuEnable.value = !menuEnable.value
    }

    return {
      menuEnable,
      menu,
      toggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
