<template>
  <div class="common">
    <div ref="mypie" class="pie"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  name: 'Common',
  props:['data','unit','color'],
  data(){
    return {
      myChart: null
    }
  },
  methods:{
    getChart(){
      let xdata = [];
      for(var item of this.data){
        xdata.push(item.name)
      }
      let option = {
            legend:{
              left:'0%',
              right: '5%',
              bottom: '5%'
            },
            xAxis: {
              type: 'category',
              data: xdata,
              axisLabel:{
                fontFamily: 'PingFangSC-Light',
                fontSize: '10px',
                color: 'rgba(44,53,66,0.45)',
                fontWeight: '200',
                rotate: -45
              }
            },
            yAxis: {
              type: 'value',
              name: this.unit
            },
            series: [
                {
                data: this.data,
                itemStyle:{
                  color: this.color
                },
                type: 'bar',
                barWidth: '30%'
              }
            ]
      };
      this.myChart.setOption(option);
     
    }
  },
  mounted(){
    this.myChart = echarts.init(this.$refs.mypie);
    let that = this
    window.addEventListener("resize", function(){
        console.log('mychart',that.myChart)
        that.myChart.resize();
      })
    this.getChart();
  }
}
</script>
<style lang="less" scoped>
.common{
  width: 100%;
  height: 189px;
}
.pie{
  width: 100%;
  height: 100%;
}
</style>