<template>
  <div class="sx-core-card" style="height:100%">
    <div class="sx-flex-center" style="flex-direction:row">
        <img :src="item.icon" width="18" alt="" style="margin-right:20px"/>
          <span class="sx-core-card-title" :style="{color:item.color}">{{item.title}}</span>
    </div>
    <div class="sx-core-card-line" style="margin-top:10px;"></div>
    <div v-if="isEchart" style="width: 100%;height: 80%;">
       <slot/>
    </div>
    <div v-else style="margin-top: 20px;padding-bottom: 10px">
      <div v-for="(ele,index) in  item.contentList" :key="index" class="sx-flex-space-between" style="
    padding: 0px 20px;">
        <span class="sx-core-card-content-name" >{{ele.name}}</span>
        <span class="sx-core-card-content-num" :style="{color:item.color}">{{ele.num}} <span class="sx-core-card-content-unit" v-if="ele.unit">{{ele.unit}}</span></span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      default:()=>{}
    },
    isEchart:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="less" scoped>
  .sx-core-card{
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    padding: 10px 0px;
    //padding:10px 20px;
    &-title{
      font-size: 18px;
      font-weight: bold;
    }
    &-line{
      height: 1px;
      border: 1px solid #E5E5E5;
      margin: 0px 20px;
    }
    &-content-name{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      font-weight: 400;
    }
    &-content-num{
      font-family: PingFangSC-Regular;
      text-align: right;
      font-weight: 600;
      font-size: 24px;
    }
    &-content-unit{
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #262626;
      font-weight: 400;
    }
  }
</style>
