<template>
  <!-- <div> -->
    <!-- <div v-for="(item,i) in projectList" :key="i">
    <van-row>
      <van-col>
        <div class="name">{{item.name}}</div>
        <div class="content">{{item.content}}</div>
        <div class="line"></div>
      </van-col>
    </van-row>
    </div> -->
    <file-switch :contentTitleList="data"/>
  <!-- </div> -->
</template>
<script>
import FileSwitch from '@/views/components/FileSwitching.vue'
export default {
  components:{
    FileSwitch
  },
  data(){
    return {
      data:[
        {
          title:'社区多功能运动场',
          date:'递铺镇'
        },
        {
          title:'笼式足球场',
          date:'天荒坪镇'
        },
        {
          title:'百姓健身房',
          date:'全县'
        },
      ]
    }
  }
}
</script>
<style lang="less" scoped>
  // .name{
  //   font-family: PingFangSC-Regular;
  //   font-size: 16px;
  //   color: #333333;
  //   line-height: 52px;
  //   font-weight: 400;
  // }
  // .content{
  //   font-family: PingFangSC-Regular;
  //   font-size: 14px;
  //   color: #999999;
  //   font-weight: 400;
  // }
  // .line{
  //   width: 370px;
  //   height:100%;
  //   border: 0.5px solid #E5E5E5;
  //   margin: 10px 0;
  // }
</style>