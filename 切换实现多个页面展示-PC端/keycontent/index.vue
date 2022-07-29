<template>
  <div class="keyContent">
    <el-row :gutter="20">
      <el-col :lg="12" :md="24">
        <el-image :src="this.contentData[0].img1url" style="width: 100%;height: 100%" :fit="'contain'"></el-image>
      </el-col>
      <el-col :lg="12" :md="24">
        <el-image :src="this.contentData[0].img2url" style="width: 100%;height: 100%" :fit="'contain'"></el-image>
       </el-col>
    </el-row>
    <div class="content">
      <div class="text">{{this.contentData[0].name}}</div>
      <div class="text">{{this.contentData[0].text}}</div>
    </div>
  </div>

</template>
<script>
export default {
  props:{
    contentData:{
      type:Array,
      default:()=>[]
    }
  },
  mounted(){

  },
}
</script>
<style scoped lang="less">
.keyContent{
  img{
    width: 100%;
    height: 500px;
  }
  .content{
    margin: 20px 0;
  }
  .text{
    font-size: 16px;
    color: #464646;
    line-height: 26px;
    font-weight: 400;
  }

}
</style>
