<template>
  <div class="basicInformation">
    <van-row class="card" v-for="(item,index) in data" :key="index" :style="{background: item.background}">
      <van-col span="15">
        <div class="title">{{ item.baseTitle }}</div>
        <van-row>
          <van-col span="10">
            <span class="number">{{ item.baseNum }}</span>
          </van-col>
          <van-col span="14">
            <div style="line-height: 30px">
              <span class="text">{{ item.baseText }}</span>
              <span class="triangle"></span>
              <span class="growth">{{item.baseGrowth}}</span>
            </div>
          </van-col>
        </van-row>
      </van-col>
      <van-col span="9">
        <van-image :src="item.img" width="32" height="32" class="icon" v-show="item.img"/>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type: Array,
      default: () => [],
    }
  },
}
</script>
<style scoped lang="less">
.basicInformation{
  .card{
    // background: #FFFFFF;
    // box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.08);
    border-radius: 8px;
    padding:12px 15px;
    margin-top: 16px;
    &:first-child{
      margin-top: 0;
    }
  }
  .title{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #838383;
    font-weight: 400;
    margin-bottom: 12px;
  }
  .number{
    font-family: PingFangSC-Medium;
    font-size: 20px;
    color: #000000;
    font-weight: 500;
    padding-right: 24px;
  }
  .text{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #999999;
    font-weight: 400;
    padding-right: 8px;
  }

  .growth{
    font-family: PingFangSC-Medium;
    font-size: 12px;
    //color: #0FBE4F;
    color: #D40200;
    font-weight: 500;
  }
  .triangle{
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 5px solid #D40200;
    margin-right: 4px;
  }
  .icon{
    // width: 32px;
    // height: 32px;
    margin: 5px 0px 20px 0;
    float: right;
  }
}

</style>
