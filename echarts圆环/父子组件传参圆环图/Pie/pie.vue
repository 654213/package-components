<template>
  <div style="height: 100%;width:100%;">
    <div :id="echartId" style="height: 100%;width:100%;"></div>
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
    title:String,
    minAngle: String

  },
  data() {
    return {
      // mychart: null,
    }
  },
  methods: {
    setOption(data,unit) {
      console.log("piepie",data);
      let mychart = echarts.init(document.getElementById(this.echartId));
      let option = {
        // title: {
        //   text: title,
        //   left: 'center',
        //   textStyle: {
        //     color: '#999',
        //     fontWeight: 'normal',
        //     fontSize: 14
        //   }
        // },
        title: {
          text:this.title,
          left:'center',
          top:'40%',
          textStyle: {
            color: '#000',
            fontWeight: 'normal',
            fontSize: 12
          }
        },
        series: [
          {
            startAngle: this.startAngle,
            type: 'pie',
            radius: this.radius,
            // top: 33.3 + '%',
            // height: '33.33%',
            left: 'center',
            top:'20%',
            bottom: '5%',
            width: '100%',
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            label: {
              alignTo: 'edge',
              // formatter: '{name|{b}}\n{time|{c}人}',
              formatter: `{name|{b}}\n{number|{c}${unit}}`,
              minMargin: 5,
              edgeDistance: 10,
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
            data: data,
            minAngle: this.minAngle
          }
        ]
      };
      mychart.setOption(option);
      window.onresize = function () {
        mychart.resize();
      };
    },
  },
  mounted() {

  }
}
</script>
