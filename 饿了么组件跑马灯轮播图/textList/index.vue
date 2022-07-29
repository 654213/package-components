<template>
  <div>
    <el-row :gutter="10">
      <el-col :xl="6" :lg="8" :sm="12" :xs="24" v-for="(p,i) in communityData" :key="i">
        <div class="colbg">
          <div class="text">{{p.name}}</div>
          <div class="number">{{p.number}}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props:{
    communityData:{
      type:Array,
      default:()=>[]
    }
  },
  mounted(){
    console.log(this.communityData);
  }
}
</script>
<style scoped lang="less">
.colbg{
  background: #1492ff0f;
  display: flex;
  justify-content: space-between;
  padding:12px 20px ;
  border-radius: 5px;
  margin-bottom: 10px;
  .text{
    line-height: 36px;
    font-size: 16px;
    color: #333333;
    font-weight: 500;
  }
  .number{
    font-size: 24px;
    color: #1492FF;
    font-weight: 500;
  }
}
</style>