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
        <div class="number">{{ item.num }}</div>
      </div>
    </van-col>
  </van-row>
</template>
<script>
export default {
  props: { data: { type: Object, default: () => {} } },
  data() {return{}},
};
</script>
<style lang="less" scoped>
.itemBg {
  padding: 16px;
  border-radius: 8px;
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

</style>
