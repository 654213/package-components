<template>
  <div ref="pcPie" :style="{ width: chartWidth, height: chartHeight }"></div>
</template>
<script>
export default {
  name: 'pc-pie',
  props: {
    chartWidth: {
      type: [String, Number],
      default: '80%'
    },
    chartHeight: {
      type: [String, Number],
      default: '80%'
    },
    infoData: {
      type: Array,
      default: () => []
    },
    // title: Object,
    // legend: Object,
    // chartData: [Object, Array],
    // name: String,
    // chartColor: {
    //   type: Array,
    //   default: () => []
    // },
    // radius: [String, Array]
    option: {
      tooltip: {
        trigger: 'item',
        formatter: '{c}'
      },
      // title: null,
      // legend: null,
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
      series: {
        // name: this.name,
        // type: 'pie',
        // radius: this.radius,
        // data: null,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
          // color: chartColor
        },
        label: {
          normal: {
            show: false
          },
          show: false
        },
        labelLine: {
          show: false
        }
      }
    }
  },

  data () {
    return {
      newOptions: this.option,
      initChart: null
    }
  },

  methods: {
    init () {
      this.initCharts = this.$echarts.init(this.$refs.pcPie)

      this.setOption()

      window.addEventListener('resize', function () {
        this.initCharts.resize()
      })
    },
    setOption () {
      this.newOptions.series.data = this.infoData
      this.initCharts.setOption(this.newOptions)
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    infoData () {
      this.setOption()
    }

  }
}
</script>
