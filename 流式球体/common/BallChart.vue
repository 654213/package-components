<template>
  <div
    ref="ballChart"
    :scolor="scolor"
    :sdata="sdata"
    style="height: 250px; "
  ></div>
</template>
<script>
import "echarts-liquidfill";
export default {
  props: {
    scolor: Array,
    sdata: String,
  },
  data() {
    return {};
  },
  methods: {
    getBall() {
      console.log(this.sdata);
      let _this=this;
      let echarts = require("echarts");
      let ballChart = echarts.init(this.$refs.ballChart);
      let option = {
        series: [
          {
            radius:'90%',
            type: "liquidFill",
            data: [0.4, 0.5],
            center: ["50%", "45%"],
            color: this.scolor,
            outline: {
              show: false,
            },
            label: {
              position: ["50%", "50%"],
              formatter: function () {
                return _this.sdata;
              },
              fontSize: 18,
              color: "#333",
            },
            // itemStyle: {
            //   opacity: 0.7
            // },
            // emphasis: {
            //     itemStyle: {
            //         opacity: 0.1
            //     }
            // },
            // backgroundStyle: {
            // //   borderWidth: 3,
            // //   shadowColor: 'rgba(0, 0, 0, 0.4)',
            // //   shadowBlur: 20
            // },
          },
        ],
      };
      ballChart.setOption(option);
      window.addEventListener("resize", function () {
        ballChart.resize();
      });
    },
  },
  mounted() {
    this.getBall();
  },
};
</script>
