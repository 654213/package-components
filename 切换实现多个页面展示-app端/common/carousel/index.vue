<template>
  <div> 
    <van-swipe :autoplay="3000" class="my-swipe">
      <van-swipe-item v-for="(item, index) in data" :key="index">
        <img :src="item" style="width: 100%;height: 100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  props: ["data"],
}
</script>
<style scoped lang="css">
/deep/ .my-swipe .van-swipe-item {
  height: 160px;
  }
</style>
