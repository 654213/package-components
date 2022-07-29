<template>
  <div class="navbar" style="
  margin-bottom: 20px;">
    <div v-for="(item,i) in data" :key="i">
      <span class="content">{{item.content}}</span>
    </div>

  </div>
</template>
<script>
export default {
  name: 'navBar',
  props:{
    data: Array
  },
}
</script>
<style lang="less" scoped>
.content{
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #666666;
  line-height: 30px;
  font-weight: 400;
}
</style>
