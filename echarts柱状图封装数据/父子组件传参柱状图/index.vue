<template>
  <div class="funTourist">
    <fun-tourist class="fun" :echartId="funT" :timeChart="annualData" />
  </div>
</template>
<script>
import FunTourist from "@/views/components/bar/BarChart.vue";
import {getDateYear} from "@/util";
export default {
  name:'funtourist',
  components: { FunTourist },
  data() {
    return {
      funT: "funT",
      annualData: {
        xdata: getDateYear(5),
        series:[
          {
            type: "bar",
            barWidth: "35%",
            data: [1928.84,2237.52,2504.5,2243.4,2104.7],
            itemStyle: {
              color: '#5D7AD9',
              barBorderRadius: [6,6,6,6],
            },
          }
        ]
      }
    };
  },
};
</script>
<style lang="less" scoped>
.fun{
  height: 240px;
}
</style>
