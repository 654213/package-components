<template>
  <div class="tabButton">
    <van-tabs v-model="active" @change="changeTab">
      <van-tab v-for="(item,index) in tabsData" :key="index"
               :name = "item.name"
               :title = "item.name">
        <template #title >
          <div class="tab">
            {{ item.name }}
          </div>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: {
    tabsData: {
      type: Array,
      default: () => []
    },
    currentType:{
      type:String,
      default:''
    }
  },
  watch:{
    currentType(nval){
      this.active = nval;
    }
  },
  data(){
    return{
      active:'',
    }
  },
  mounted() {

  },
  methods: {
    changeTab(name) {
      this.$emit('change-tab-name', name)
    },
  }
}
</script>

<style lang="less" scoped>
//.tabButton{
//  .tab{
//    font-size: 16px;
//    font-weight: 400;
//    height: 40px;
//    padding: 0 10px;
//    line-height: 40px;
//    border-radius: 4px;
//    background: #F2F3F5;
//    color: #262626;
//    margin-right: 10px;
//  }
//  .tab:hover{
//    color: #FFFFFF;
//    background: #1492FF;
//    margin-right: 10px;
//  }
//}
/deep/ .van-tabs__wrap--scrollable .van-tab{
  padding:0;
}
.tabButton /deep/ .van-tab{
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  color: #262626;
  background: #F2F3F5;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  padding: 0 10px;
  margin-right: 10px;
  &:last-child{
    margin-right: 0;
  }
}
.tabButton /deep/.van-tab--active{
  color: #FFFFFF;
  background: #1492FF;
  border-radius: 4px;
  font-weight: 400;
  font-family: PingFangSC-Regular;
  padding: 0 10px;
  margin-right: 10px;
  &:last-child{
    margin-right: 0;
  }
}
.tabButton /deep/.van-tabs__line{
  height: 0;
}
.tabButton /deep/ .van-tabs__nav--line.van-tabs__nav--complete{
  padding-left: 0;
  padding-right: 0;
}
</style>
