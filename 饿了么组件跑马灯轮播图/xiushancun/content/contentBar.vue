<template>
  <div class="contentbar">
    <div v-for="item in this.contentList" :key="item.id">
      <span class="content1">{{item.content}}</span>
    </div>
    
  </div>
</template>
<script>
export default {
  name: 'contentBar',
  data(){
    return{
      contentList:[     
        {
          id: 0,
          content:"秀南村位于秀山岛南部，与三江码头隔海相望。2005年7月由原来的南浦、石井潭、热跳三个行政村撤并而成。根据地域特点，秀南村共划为分南浦、石井潭、热跳新村3个全科网格。每个网格分别成立由协管员及专职网格员，切实有效地管理和服务外来流动人口。秀南村推动未来乡村试点建设，加快建设共同富裕示范单元，打造共同富裕示范区海岛样板，不断推进乡村振兴先行试行，为其他离岛村镇提供可复制经验和模板。"
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.content1{
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #464646;
  line-height: 26px;
  font-weight: 400;
}
</style>
