<template>
  <div>
      <horizontal-bar-chart :echart-id="'goChart6'" :data="tripsData" style="height: 300px;"></horizontal-bar-chart>
  </div>
</template>

<script>
import horizontalBarChart from '@/views/components/bar/horizontalBarChart'
export default {
  components:{
    horizontalBarChart,
  },
   data(){
      return{
        tripsData:{
        num:5,
        ydata:[ "城站火车站", "省人民医院","武林广场", "省妇保", "邵逸夫医院", "萧山机场", "浙二医院", "三坝地铁站", "浙一医院", "火车东站"],
        series:
          {
            name: "热门站点出行人数",
            type: "bar",
            barWidth: 15,
            data: [1425, 1722, 1875, 2051, 2871, 3033, 4020, 5563, 5860, 7074],
            itemStyle: {normal: {color: '#91CB75',barBorderRadius: [10,10,10,10],}}
          },
      }
    }
</script>
