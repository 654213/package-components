<template>
  <el-card class="sx-card">
    <div slot="header" class="sx-card-header" v-if="showHeader">
      <div class="sx-card-header-title-wapper sx-flex-space-between"  style="display: flex;justify-content: space-between">
        <div style="justify-content:left;">
        <span v-for="(item,index) in titleList" :key="index" class="sx-card-header-title-wapper-title"
              :class="item.select?'title-active':''" @click="handleClickTitle(item)">{{ item.name }}</span>
        </div>
        <span v-show="rightTitle"
            class="sx-card-header-title-wapper-title title-active" style="font-size: 16px">{{rightTitle}}</span>
        <div v-show="rightButton"
              class="sx-card-header-title-wapper-title title-active" style="font-size: 16px">
          <el-button type="primary" @click="toUrl(1)">业务系统</el-button>
          <el-button type="primary" @click="toUrl(2)" v-show="isShowSecondBtn">驾驶舱</el-button>
        </div>
      </div>
    </div>
    <div>
      <slot/>
    </div>
  </el-card>
</template>

<script>
export default {
  props: {
    titleList: {
      type: Array,
      default: () => []
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    rightButton:{
      type: Boolean,
      default: false
    },
    isShowSecondBtn:{
      type: Boolean,
      default: true
    },
    rightTitle:{

      type: String,
      default: ''
    }
  },
  methods: {
    handleClickTitle(item) {
      this.$emit('handle-click-title', item)
    },
    toUrl(type){
      this.$emit('handle-click-url', type)
    }
  }
}
</script>

<style lang="less" scoped>
@theme-color-blue: #1492FF;
.sx-card {
  margin-bottom: 20px;

  &-header {
    height: 100%;

    &-title-wapper {
      width: 100%;
      padding: 0 20px;
      border-left: 4px solid @theme-color-blue;

      &-title {
        font-weight: 600;
        font-size: 16px;
        color: #999999;
        font-weight: 600;
        padding-right: 20px;
        line-height: 20px;
      }

      .title-active {
        color: @theme-color-blue;
        font-size: 20px;
      }
    }
  }

  /deep/ .el-card__header {
    padding: 18px 0;
  }

}
</style>
