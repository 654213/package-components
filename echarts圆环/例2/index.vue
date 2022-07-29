//Template
<div style="margin-top: 20px;display:flex;">
      <div style="background: #FFFFFF;margin-right: 20px;width: 50%;padding: 20px">
        <div>
          <p class="title"><span></span>岱山县床位情况</p>
          <div style="position: relative;">
            <div ref="mychart1" style="height: 400px;width: 100%"></div>
            <div style="position: absolute; top: 50%; left: 50%;transform: translate(-50%,-50%);text-align: center;">
              <p style="font-size: 18px">岱山县床位总数</p>
              <p style="font-size: 24px;font-weight: 700;">5400</p>
            </div>
          </div>
        </div>
      </div>
</div>

//script

methods: {
    getChart() {
      let echarts = require("echarts");
      let myChart1 = echarts.init(this.$refs.mychart1);
      let option = {
        tooltip: {
          trigger: 'item'
        },
        // legend: {
        //     top: '5%',
        //     left: 'center'
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            // label: {
            //     show: false,
            //     position: 'center'
            // },
            label: {
              // alignTo: 'edge',
              formatter: '{name|{b}{c}}床',
              // formatter:function(params){
              //     str =  '{name|{c}}\n\n'+ '日门诊人数' + params.data.person;
              //     return str
              // },
              fontSize: 16,
              minMargin: 10,
              edgeDistance: 10,
              lineHeight: 10,
              rich: {
                time: {
                  fontSize: 18,
                  color: '#333'
                }
              }
            },
            // emphasis: {
            //     label: {
            //         show: true,
            //         fontSize: '40',
            //         fontWeight: 'bold'
            //     }
            // },
            labelLine: {
              show: true
            },
            data: [
              {
                value: 1200, person: 1200, name: '中医院', itemStyle: {
                  normal: {
                    color: '#007BEB',
                  },
                },
              },
              {
                value: 3000, person: 350, name: '第一人民医院', itemStyle: {
                  normal: {
                    color: '#FF7A43',
                  },
                },
              },
              {
                value: 1200, person: 600, name: '第二人民医院', itemStyle: {
                  normal: {
                    color: '#F365E3',
                  },
                },
              },
            ]
          }
        ]
      };
      myChart1.setOption(option);

      window.addEventListener("resize", function () {
        myChart1.resize()
        // myChart1.resize()
      })
      this.$on('hook:destroyed', () => {
        window.removeEventListener("resize", function () {
          myChart1.resize();
          // myChart1.resize()
        });
      })
    },
  },
mounted() {
    this.getChart()
  }