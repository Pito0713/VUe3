<template lang="pug">
.header-bar
  .header-bar__left
    .menu-switch(@click="handleToggleMenu" :class="{ 'is-minnor': menuEnable }")
      img.menu-switch-image(src="./images/toggleMenu.svg")
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  components: {
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

    const isInWelcomePage = computed(() => {
      return route.name === 'welcome'
    })

    const handleToggleMenu = () => {
      emit('toggleMenu')
    }

    return {
      route,
      router,
      isInWelcomePage,
      handleToggleMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
