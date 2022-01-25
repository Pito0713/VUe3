<template lang="pug">
.main-base-layout.wrapper
  div.title
    div.title__content
      div.title__content__main-title
        //- 主標題文字
        slot(name="mainTitle")
      div.title__content__sub-title
        //- 副標題文字
        slot(name="subtitle")
    div.title__button-box
      //- 與標題同一個層級的按鈕，ex:總代列表的新增
      slot(name="titleButton")

  section.container
    div.block.container__search
      div.block-title.block-padding.container__search__title
        //- 搜尋欄標題文字
        //- 預設文字顯示 搜寻条件，有特例文字才需傳入
        slot(name="searchBarTitle")
          | 搜尋條件
        div.container__search__title__button(
          @click="handleIsExtend"
        )
          i.expand-button(
            v-show="!isExtend"
          )
          i.contract-button(
            v-show="isExtend"
          )
      el-collapse-transition
        div.container__search__content(
          v-show="isExtend"
        )
          div.block-padding.search-bar-content
            //- 搜尋欄內容
            slot(name="searchBarContent")
      div.block-padding.block-footer.container__search__button
        //- 搜尋欄按鈕
        slot(name="searchBarButton")

    div.block.block-title.block-padding.block-footer.container__middle(
      v-if="hasMiddle"
    )
      //- 中間區塊內容，例：報表管理/注單列表的中間欄位
      slot(name="middleContent")

    div.block.container__table
      div.block-title.block-padding.container__table__title
        //- 列表欄位標題文字
        //- 預設文字為 列表
        slot(name="tableTitle")
          | 列表
      div.block-footer.container__table__content
        //- 列表欄位內容，例：table、分頁器
        slot(name="tableContent")
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'main-base-layout',

  props: {
    // 是否有中間區塊內容
    hasMiddle: {
      type: Boolean,
      default: false
    }
  },

  setup () {
    const isExtend = ref(true)
    const handleIsExtend = () => {
      isExtend.value = !isExtend.value
    }
    return {
      isExtend,
      handleIsExtend
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";

.title__button-box {
  display: flex;
  flex-direction: row;
}

.block-title {
  font-size: to-rem(18px);
  font-weight: 500;
  color: $block-title-font-color;
}

.container__search {
  margin-bottom: to-rem(20px);
}

.container__search__title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: to-rem(1px) solid #f4f4f4;
}

.container__search__title__button {
  @include position(relative, to-rem(3px), n, n, 0);
  width: to-rem(12px);
  height: to-rem(18px);
  padding: to-rem(5px);

  .expand-button{
    &::before {
      content: "";
      display: block;
      @include position(absolute, to-rem(5px), n, n, 0);
      width: to-rem(11px);
      height: to-rem(1px);
      border-top: to-rem(3px) solid #97a0b3;
    }

    &::after {
      content: "";
      display: block;
      @include position(absolute, to-rem(1px), n, n, 30%);
      width: to-rem(1px);
      height: to-rem(11px);
      border-left: to-rem(3px) solid #97a0b3;
    }
  }

  .contract-button {
    &::before {
      content: "";
      display: block;
      @include position(absolute, to-rem(5px), n, n, 0);
      width: to-rem(11px);
      height: to-rem(1px);
      border-top: to-rem(3px) solid #97a0b3;
    }
  }

  &:hover {
    cursor: pointer;
    .contract-button::before {
      border-top: to-rem(3px) solid #7a7d85;
    }
    .expand-button::before {
      border-top: to-rem(3px) solid #7a7d85;
    }
    .expand-button::after {
      border-left: to-rem(3px) solid #7a7d85;
    }
  }
}

.container__search__content {
  width: 100%;
}

.container__search__button {
  min-height: to-rem(55px);
  border-top: to-rem(1px) solid #f4f4f4;
}

.container__middle {
  margin-bottom: to-rem(20px);
}

.container__table__content {
  border-top: to-rem(1px) solid #f4f4f4;
}

</style>
