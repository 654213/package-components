<template>
  <div :id="echartId" :data="timeChart"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  props: {
    timeChart: {
      type: Object,
      default: () => {},
    },
    echartId: {
      type: String,
      default: "pieEbarChartschart",
    },
    times: Boolean,
  },

  data() {
    return {};
  },

  watch: {
    timeChart: {
      handler() {
        this.time();
      },
    },
  },

  methods: {
    time() {
      let _this = this;
      let timeChart = echarts.init(document.getElementById(this.echartId));
      let option1 = {
        title: {
          text: this.timeChart.title,
          left: "left",
          subtext: this.timeChart.subtitle,
          subtextStyle: {
            color: "rgba(44,53,66,0.45)",
            fontSize: 15,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "10%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          top: 0,
          data: this.timeChart.ldata,
          left: "center",
        },
        xAxis: [
          {
            type: "category",
            data: this.timeChart.xdata,
            axisPointer: {
              type: "shadow",
            },
            //文字样式
            axisLabel: {
              show: true,
              textStyle: {
                color: "rgba(44,53,66,0.45)",
              },
              // interval:0,
              rotate: _this.times ? -45 : 0,
              // formatter: function (value) {
              //   if(value.length>6){
              //     return value;
              //   }
              //   if(value.length<6){
              //     return value.split("").join("\n")
              //   }
              // },
              formatter: function (value) {
                // console.log(value);
                console.log(typeof value);
                if(_this.times) {
                  return value;
                }
                if(!_this.times){
                  let newParamsName = "";
                  let paramsNameNumber = value.length;
                  let provideNumber = 4;
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
                }  }
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(65,97,128,0.15)",
                width: 1,
                type: "solid",
              },
            },
          },
        ],
        series: this.timeChart.series,
        //     [
        //   {
        //     name: this.timeChart.sname3,
        //     type: "bar",
        //     barWidth: "25%",
        //     data: this.timeChart.sdata3,
        //     itemStyle: {
        //       color: '#fffffff',
        //       barBorderRadius: [6,6,6,6],
        //     },
        //   },
        // ],
      };
      timeChart.setOption(option1);
      window.addEventListener("resize", function () {
        timeChart.resize();
      });
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.time();
    });
  },
};
</script>
<style lang="less">
//#time {
//  width: 100%;
//}
</style>
