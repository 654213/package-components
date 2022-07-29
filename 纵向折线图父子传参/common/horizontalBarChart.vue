<template>
  <div :id="echartId"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  props: {
    data: {
      type: Object,
      default: () => {
      },
    },
    echartId: {
      type: String,
      default: "echarts1",
    },
  },
  mounted() {
    this.setOption();
  },
  methods:{
    setOption(){
      let num=this.data.num;
      let mychart = echarts.init(document.getElementById(this.echartId));
      let option={
        title:this.data.title,
        tooltip:{
          trigger:'axis',
        },
        legend:this.data.legend,
        grid:{
          left: "3%",
          right: "5%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis:{
          type:'value',
          axisLabel: {
            fontSize:10
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(65,97,128,0.15)",
              width: 1,
              type: "solid",
            },
          },
        },
        yAxis:{
        type: "category",
          data: this.data.ydata,
          axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          show: true,
            textStyle: {
            color: "rgba(44,53,66,0.45)",
          },
            formatter: function (value) {
              let newParamsName = "";
              let paramsNameNumber = value.length;
              let provideNumber = num;
              let rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (let p = 0; p < rowNumber; p++) {
                  let tempStr = "";
                  let start = p * provideNumber;
                  let end = start + provideNumber;
                  if (p === rowNumber - 1) {
                    tempStr = value.substring(start, paramsNameNumber);
                  } else {
                    tempStr = value.substring(start, end) + "\n";
                  }
                  newParamsName += tempStr; // 最终拼成的字符串
                }
              } else {
                newParamsName = value;
              }
              return newParamsName;
            }
        },
      },
        series:this.data.series,
      };
      mychart.setOption(option);
      window.addEventListener("resize", function () {
        mychart.resize();
      });

    }
  }
}
</script>

<style scoped>

</style>
