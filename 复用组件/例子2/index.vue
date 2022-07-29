<template>
  <div class="basicInformation">
    <!-- <van-row class="card" v-for="(item,index) in this.baseData" :key="index" :style="{background: item.background}">
      <van-col span="15">
        <div class="title">{{ item.baseTitle }}</div>
        <van-row>
          <van-col span="10">
            <span class="number">{{ item.baseNum }}</span>
          </van-col>
          <van-col span="14">
            <div style="margin-top: 6px;margin-left: 20px">
              <span class="text">{{ item.baseText }}</span>
              <span class="triangle"></span>
              <span class="growth">{{item.baseGrowth}}</span>
            </div>
          </van-col>
        </van-row>
      </van-col>
      <van-col span="9">
        <img :src="item.img" class="icon">
      </van-col>
    </van-row> -->
    <text-data :data="baseData"/>
  </div>
</template>
<script>
import TextData from '@/views/components/common/textData.vue'
export default {
  components:{
    TextData
  },
  data(){
    return{
      baseData:[
        {
          baseTitle:'举办招聘会场次(场)',
          baseNum:85,
          baseText:'同比',
          baseGrowth:'3.42%',
          img: require('/public/static/images/pay-for-work/icon_lysd_jbzphcc.png'),
          // color:'#D40200',
          background: ' rgba(255,153,1,0.05)'
        },
        {
          baseTitle:'城镇登记失业率',
          baseNum:'2.04%',
          baseText:'同比',
          baseGrowth:'0.57%',
          img: require('/public/static/images/pay-for-work/icon_lysd_czdjsyl.png'),
          // color:'#D40200',
          background: 'rgba(19,171,231,0.05)'
        },
        {
          baseTitle:'失业保险待遇平均水平(元)',
          baseNum:104,
          baseText:'同比',
          baseGrowth:'9.38%',
          img: require('/public/static/images/pay-for-work/icon_lysd_sybxdypjsp.png'),
          // color:'#D40200',
          background: 'rgba(51,204,155,0.05)'
        },
  
      ]
    }
  },
}
</script>
<style scoped lang="less">

</style>
