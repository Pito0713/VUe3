<template lang="pug">
.backward
  router-link.site-title(:to="{name: 'welcome'}")
    transition(name="slide-fade")
      i(v-if="!menuEnable" :class="'home'")
      span(v-else-if="menuEnable") {{ 'ＨＯＭＥ' }}

  .user-info(:to="{name: 'welcome'}" :class="{ 'user-info_collapse': !menuEnable }")
    transition(name="slide-fade")
      .user-info__item
        img.user-info__image(src="./images/member.svg"  :class="{ 'user-info__image_collapse': !menuEnable }")
        .user-info__text(v-if="menuEnable")
          .user-info__text__name
            a {{ userAccount }}
          .user-info__text__info
            .circle.circle--Auth
            a {{ userAccount + '/' + userAuth }}

  .navigation-area(v-if="menuEnable")
    a {{ '導 覽 區' }}

  el-scrollbar(:class="{ 'el-scrollbar_collapse': !menuEnable }")
    el-menu.aside-menu__menu(
      :default-active="'item' + pageCode"
      :unique-opened="true"
      :collapse="!menuEnable"
      active-text-color="#ffffff"
      background-color="#222d32"
      text-color="#fff"
    )
      template(v-for="(menuNode, index) in MENU_LIST")
        el-sub-menu(:index="index.toString()")
          template(#title)
            div.aside-menu__menu__submenu__content
              i.aside-menu__menu__submenu__icon(:class="[menuNode.name, {'area-increase': !menuEnable}]")
              div.aside-menu__menu__submenu__text(v-show="menuEnable") {{ menuNode.text }}
          template(v-if="!menuEnable")
            .collapse__menu__title {{ menuNode.text }}
          template(v-for="(childNode, childIndex) in menuNode.child")
            router-link(:to="{ name: childNode.route }")
              el-menu-item(:index="'item' + childNode.code")
                span.el-menu-item__content__text(:class="{ 'el-menu-item_collapse': !menuEnable }") {{ childNode.text }}

</template>

<script>
import { ref, computed } from 'vue'
import Store from '@/store'
import { MENU_LIST } from '@/configs/site'

export default {
  props: {
    menuEnable: Boolean
  },

  setup () {
    const pageCode = computed(() => Store.state.pageCode)
    const menu = computed(() => Store.state.menu)
    const userAccount = ref('QAQ')
    const userAuth = ref('ADMINISTRATOR')
    const findMenuNode = (code) => {
      const target = menu.value.find(node => node.code === code)
      if (target) return true
      return false
    }

    const findMenuChildNode = (subCode) => {
      let result
      for (const group of menu.value) {
        result = group.auth_sub_option.find(node => node.code === subCode)
        if (result !== undefined) break
      }
      if (result !== undefined) return true
      else return false
    }

    return {
      pageCode,
      MENU_LIST,
      userAccount,
      userAuth,
      menu,
      findMenuNode,
      findMenuChildNode
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
