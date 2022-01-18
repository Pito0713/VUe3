<template lang="pug">
el-form-item.inner-form-item(
  v-if="hasValidator"
  :label="viewLabel"
  @focusout.native="slotValidate"
  v-bind="$attrs"
  v-on="$attrs"
  :class="{ 'is-error': validator.$error }"
)
  template(v-for="(value, name) in $slots")
    slot(:name="name" :slot="name")

//- 無驗證時單純轉傳
el-form-item.inner-form-item(v-else :label="label" v-bind="$attrs" v-on="$attrs")
  template(v-for="(value, name) in $slots")
    slot(:name="name" :slot="name")
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'form-item',

  components: {
  },
  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: ''
    },

    validator: {
      type: Object
    },

    isShowStar: {
      type: Boolean,
      default: true
    }
  },

  setup (props) {
    const hasValidator = computed(() => props.validator !== undefined)
    const viewLabel = computed(() => hasValidator.value && props.isShowStar === true && ('required' in props.validator || 'customRequired' in props.validator) ? `*${props.label}` : props.label)
    const slotValidate = () => {
      props.validator.$touch()
    }

    return {
      hasValidator,
      viewLabel,
      slotValidate
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/share";

.inner-form-item {
  margin-bottom: to-rem(15px);
  min-width: to-rem(210px);

  ::v-deep(.el-form-item__label) {
    padding-bottom: to-rem(5px);
    color: $main-title-font-color;
    font-weight: 700;
    line-height: 1.2;
  }
}
</style>
