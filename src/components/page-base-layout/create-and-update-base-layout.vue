<template lang="pug">
.create-and-update-layout.wrapper
  div.title
    div.title__content
      div.title__content__main-title
        //- 主標題文字
        slot(name="mainTitle")
      div.title__content__sub-title
        //- 副標題文字
        slot(name="subtitle")

  section.container
    div.block
      div.block-padding.container__content
        //- form表單內容
        slot(name="formContent")
      div.block-padding.block-footer.container__button
        //- form表單按鈕
        slot(name="formButton")

</template>

<script>
export default {
  name: 'create-and-update-base-layout'
}
</script>

<style lang="scss" scoped>
@import "./style";

.container__content {
  min-height: to-rem(400px);
}

.container__button {
  display: flex;
  flex-direction: row;
  min-height: to-rem(55px);
  border-top: to-rem(1px) solid #f4f4f4;

  ::v-deep(button) {
    position: relative;

    &:not(:first-child)::before {
      content: "";
      display: block;
      @include position(absolute, to-rem(8px), n, n, to-rem(-6px));
      width: to-rem(1px);
      height: to-rem(16px);
      border-left: to-rem(1px) solid $main-title-font-color;
    }
  }
}

</style>
