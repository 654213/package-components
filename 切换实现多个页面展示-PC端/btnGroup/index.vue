<template>
  <div class="btnGroup">
    <el-row :gutter="20">
      <el-col :span="4" v-for="(p,i) in typeData" :key="i">
        <div  :style="{background:i===curIndex?p.background:''}" :class="i===curIndex?'title-active':'title'" @click="changeTitle(p,i)" >{{p.title}}</div>
      </el-col>
    </el-row>
  </div>

</template>
<script>
export default {
  props:{
    typeData:{
      type:Array,
      default:()=>[]
    }
  },
  data(){
    return{
      curIndex:0,
    }
  },
  methods:{
    changeTitle(p,i){
      this.curIndex=i;
      this.$emit('changeTitle',p);
    }
  }
}
</script>
<style scoped lang="less">
.btnGroup{
  .title-active{
    background-color: #02a7f0;
    color: #fff;
    font-size: 18px;
    text-align: center;
    padding:17px;
  }
  .title{
    font-size: 18px;
    text-align: center;
    border: 1px solid #aaaaaa;
    padding:17px;
  }
}
</style>