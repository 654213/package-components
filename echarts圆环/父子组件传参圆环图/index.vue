<template>
  <div>
    <pieEchart :echart-id="'pieechart'" :radius="radius" :title="title1"
               :startAngle = '90'
               ref="pieechart" style="height: 200px" />
    <pieEchart :echart-id="'pie'" :radius="radius" :title="title2"
               ref="pie" style="height: 200px;"
               :startAngle = '40'/>
    <pieEchart :echart-id="'piechart'" :radius="radius" :title="title3"
               ref="piechart" style="height: 200px;" />
  </div>
</template>
<script>
import pieEchart from './pie.vue'
export default {
  components: {
    pieEchart,

  },
  data(){
    return{
      radius: ['50%', '70%'],
      title1: "城镇本年新增\n就业人数",
      title2: "城镇登记\n失业人数",
      title3: "失业保险待遇本\n年享受人次数"
    }
  },
  mounted() {
    let data = [
     {
        name: "2020年",
        value: 29040,
        itemStyle: {
          color: "#74C0DD",
        },
      },
      {
        name: "2021年",
        value: 16283,
        itemStyle: {
          color: "#5D7AD9",
        },
      },
    ];
    let data1 = [
     {
        name: "2020年",
        value: 1957,
        itemStyle: {
          color: "#74C0DD",
        },
      },
      {
        name: "2021年",
        value: 2983,
        itemStyle: {
          color: "#5D7AD9",
        },
      },
    ];
    let data2 = [
     {
        name: "2020年",
        value: 4695,
        itemStyle: {
          color: "#74C0DD",
        },
      },
      {
        name: "2021年",
        value: 10394,
        itemStyle: {
          color: "#5D7AD9",
        },
      },
    ];

    // console.log(data);
    this.$refs.pieechart.setOption(data,'');
    this.$refs.pie.setOption(data1,'');
    this.$refs.piechart.setOption(data2,'');
  },
};
</script>
<style lang="less" scoped>

.name {
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #000000;
  text-align: center;
  font-weight: 500;
}

// .num {
//   position: relative;
//   top: -80px;
// }
// .num1 {
//   position: relative;
//   top: -80px;
// }
// .num2 {
//   position: relative;
//   top: -70px;
// }

// .name {
//   font-family: PingFangSC-Medium;
//   font-size: 12px;
//   color: #000000;
//   text-align: center;
//   font-weight: 500;
// }

</style>
