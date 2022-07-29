<template>

    <content-no-header-back :title="'人群画像'">
      <div class="sx-flex-center" style="height:100%">
        <div id="ageEchart" style="height:100%;width:100%"></div>
      </div>
    </content-no-header-back>

</template>
<script>
import ContentNoHeaderBack from '@/components/content-no-header-back/index.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'personnel',
  components: {
    ContentNoHeaderBack
  },
  data () {
    return {
      yData: [],
      valueList: [],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        // legend: {
        //   top: 10,
        //   left: 0,
        //   right:20,
        //   bottom: 20
        // },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {
            fontSize: 12,
            color: '#fff',
            fontWeight: 'bold'
          }
        },
        yAxis: {
          type: 'category',
          data: this.yData,
          axisLabel: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#fff'
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: this.valueList,
            itemStyle: {
              borderRadius: 20,
              color: new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: '#DAB40C' },
                { offset: 0.5, color: '#DAB40C' },
                { offset: 1, color: '#DAB40C' }
              ])

            }
          }

        ]
      },
      echart: null
    }
  },
  computed: {
    ...mapGetters(['portraitList'])
  },
  methods: {

    getChart () {
      const chartDom = document.getElementById('ageEchart')
      this.echart = this.$echarts.init(chartDom)

      this.echart.setOption(this.option)
      window.addEventListener('resize', function () {
        this.echart.resize()
      })
    },
    setOption () {
      this.option.yAxis.data = this.yData
      this.option.series[0].data = this.valueList
      this.echart.setOption(this.option)
    }
  },
  mounted () {
    this.getChart()
  },
  watch: {
    portraitList (nVal) {
      this.yData = []
      this.valueList = []
      nVal.forEach(ele => {
        this.yData.push(ele.crowdTag)
        this.valueList.push(ele.numberOfTags)
      })
      this.setOption()
    }
  }
}
</script>
<style>

</style>
