<template>
  <div ref="Pie" :style="{ width: chartWidth, height: chartHeight }"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'pieTo',
  props: {
    chartWidth: {
      type: [String, Number],
      default: '100%'
    },
    chartHeight: {
      type: [String, Number],
      default: '100%'
    },
    title: String,
    legend: Object,
    chartData: [Object, Array],
    name: String,
    chartColor: {
      type: Array,
      default: () => []
    },
    radius: [String, Array]
  },
  data(){
    return{
      myChart:null,
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this.myChart = echarts.init(this.$refs.Pie)
      this.initChart()
    })
  },
  methods: {
    initChart () {
      let datas = []
      if (Object.prototype.toString.call(this.chartData) === '[object Array]') {
        datas = this.chartData
      } else {
        const keyArray = this.chartData.columns
        this.chartData.rows.forEach((item) => {
          datas.push({
            value: item[keyArray[1]],
            name: item[keyArray[0]]
          })
        })
      }
      const chartColor = this.chartColor.length === 0 ? null : this.chartColor

      const options = {
        // legend: this.legend,
        // legend: {
        //   orient: 'vertical',
        //   left: 'right',
        //   align: 'left',
        //   // x:'center',
        //   y: 'center',
        //   itemWidth: 10,
        //   itemHeight: 10,
        //   textStyle: {
        //     color: '#ffffff',
        //     fontSize: 14
        //   }
        // },
        series: [
          {
            center: ['70%', '50%'],       
            startAngle: 0,
            type: 'pie',
            radius: this.radius,
            left: 'center',
            width: '100%',
            label: {
              alignTo: 'edge', //文字对齐
              // formatter: '{name|{b}}\n{time|{c}人}',
              formatter: `{name|{b}}\n{number|{c}}`,
              minMargin: 5,
              edgeDistance: 10,//文字边距 10
              lineHeight: 15,
              rich: {
                name: {
                  fontSize: 10,
                  color: '#666666'
                },
                number: {
                  fontSize: 10,
                  color: '#333333'
                }
              }
            },
            labelLine: {
              length: 15,
              length2: 0,
              maxSurfaceAngle: 80
            },
            labelLayout: function (params) {
              const isLeft = params.labelRect.x < ratioChart1.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                  ? params.labelRect.x
                  : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points
              };
            },
            itemStyle: {
              normal: {
                color: chartColor
              }
            },
            data: datas
          }
        ]
      }

      this.myChart.setOption(options)

      window.addEventListener('resize', function () {
        this.myChart.resize()
      })
    }
  },
  watch: {
    chartData: {
      handler () {
        this.initChart()
      },
      deep: true
    }
  }
}
</script>
