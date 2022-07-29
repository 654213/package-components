<template>
  <van-row :gutter="16">
    <van-col
      v-for="(item, index) in data"
      :key="index"
      :span="12"
    >
      <div class="itemBg"
           :style="{ background: item.color, boxShadow:item.boxShadow}">
        <div class="name">{{ item.name }}</div>
        <div class="number bc" v-if="item.name ==='社会保障持卡人数(人)'">{{ item.num }}</div>
        <div class="number" v-else-if="item.name==='安吉县最低工资标准(元)'">
          <!-- <div class="name">{{ item.name }}</div> -->
          <div class="num">
            <span class="number bg">{{ item.num }}</span>
            <span class="ic">较去年</span>
            <span class="trangle"></span>
            <span class="tight">130</span>
            </div>
        </div>
        <div class="number" v-else>{{ item.num }}</div>
      </div>
    </van-col>
  </van-row>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [] } },
  data() {return{}},
};
</script>
<style lang="less" scoped>
.itemBg {
  height: 110px;
  padding: 16px;
  border-radius: 8px;
  margin-top: 10px;
}
.name{
  font-size: 14px;
  color: #FFFFFF;
  font-weight: 400;
}
.number{
  font-size: 24px;
  color: #FFFFFF;
  font-weight: 500;
}
.bc{
  padding: 18px 0;
}
.bg{
  padding: 18px 0;
}
.num{
  display: flex;
  justify-content: space-around;
}
.ic{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #FFFFFF;
  font-weight: 400;
  padding: 28px 5px;
}
.trangle{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 5px solid #D40200;
    padding: 18px 2px;
}
.tight{
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #D40200;
  font-weight: 500;
  padding: 28px 2px;
}

</style>
