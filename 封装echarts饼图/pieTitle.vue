<template>
  <div style="height: 100%;width:100%;">
    <div :id="echartId" style="height: 140px;width:100%;"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts';

export default {
  props: {
    echartId: {
      type: String,
      default: 'pieEchart'
    },
    radius: {
      type: Array,
      default: () => {
        return ['30%', '50%']
      }
    },

    startAngle: {
      type: String,
      default: '15'
    },


  },
  data() {
    return {
      // mychart: null,
    }
  },
  methods: {
    setOption(data,unit) {
      let mychart = echarts.init(document.getElementById(this.echartId));
      let option = {
        tooltip:{},
        // title: {
        //   text: '阅读书籍分布',
        //   left: 'center',
        //   textStyle: {
        //     color: '#999',
        //     fontWeight: 'normal',
        //     fontSize: 14
        //   }
        // },
        series: [
          {
            startAngle: this.startAngle,
            type: 'pie',
            radius: this.radius,
            // top: 33.3 + '%',
            // height: '33.33%',
            left: 'center',
            width: '100%',
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            label: {
              alignTo: 'edge', //文字对齐
              // formatter: '{name|{b}}\n{time|{c}人}',
              formatter: `{name|{b}}\n{number|{c}${unit}}`,
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
              const isLeft = params.labelRect.x < mychart.getWidth() / 2;
              const points = params.labelLinePoints;
              // Update the end point.
              points[2][0] = isLeft
                  ? params.labelRect.x
                  : params.labelRect.x + params.labelRect.width;
              return {
                labelLinePoints: points
              };
            },
            data: data
          }
        ]
      };
      mychart.setOption(option);
      setTimeout(function (){
        window.onresize = function () {
          mychart.resize();
        };
      },200)
    },
  },
  mounted() {

  }
}
</script>
