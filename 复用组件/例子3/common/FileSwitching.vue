<template>
  <div>
    <van-list>
       <van-cell v-for="(item, index) in contentTitleList" :key="index">
         <div class="title">{{ item.title }}</div>
         <div class="main">
           <div class="date">{{ item.date }}</div>
           <div class="content" v-show="item.content">{{item.content}}</div>
         </div>
       </van-cell>
    </van-list>
  </div>
</template>

<script>
export default {
  props: {
    contentTitleList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.title{
  font-size: 16px;
}
.date{
  font-size: 14px;
  color:  #999999;
}
.main{
  display: flex;
  justify-content: space-between;
}
.content{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #1492FF;
  font-weight: 400;
}
</style>
