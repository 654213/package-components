<template>
  <div class="infantProfile">
    <van-swipe :loop="false" :show-indicators="false" :width="width">
      <van-swipe-item v-for="(item,index) in childerData" :key="item.id" style="padding-right: 16px">
        <div class="card" :style="[{background:item.color},{boxShadow:item.shadowColor}]">
          <van-image v-if="item.imgUrl" :src="item.imgUrl" width="36" height="36" class="vanimg"></van-image>
          <div>
           <div class="name">{{item.name}}</div>
           <div class="num">{{item.num}}</div>
         </div>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>

export default {
  props:{
    childerData:{
      type:Array,
      default:()=>[],
    },
  },
  data(){
    return {
      width:0,
      show:false,
      item:{},
      index:0,
    }
  },
  mounted() {
    this.getScreenWidth();
  },
  methods: {
    getScreenWidth() {
      let screenWidth = document.body.scrollWidth;
      this.width = screenWidth - 150;
      console.log(this.width);
    },
    showContent(item) {
      this.show = true;
      this.index = item.id;
      this.item = this.festivalData[this.index];
    },
  }
}
</script>
<style scoped lang="less">
.infantProfile{
  .card{
    display: flex;
    //justify-content: space-between;
    border-radius: 8px;
    padding: 16px 16px 12px 16px;
    .vanimg{
      width: 36px;
      height: 36px;
      margin-right: 16px;
      margin-top: 10px;
    }
    .name{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #FFFFFF;
      font-weight: 400;
      margin-bottom: 6px;
    }
    .num{
      font-family: PingFangSC-Medium;
      font-size: 24px;
      color: #FFFFFF;
      font-weight: 500;
    }
  }
}
</style>

