<template>
  <div>
    <div class="sx-title-display">
      <div class="titleBg">
        <div class="sx-name14black">幼儿园在园人数（人）</div>
        <div class="sx_disply">
          <div class="sx-numberblue">3016</div>
          <!--          <img src="@/assets/images/老人信息/老人信息_补贴项目.png" class="sx-old-img"/>-->
        </div>
      </div>
      <div class="titleBg">
        <div class="sx-name14black">义务教育在校生数（人）</div>
        <div class="sx_disply">
          <div class="sx-numberblue">8883</div>
          <!--          <img src="@/assets/images/老人信息/老人信息_补贴老人.png" class="sx-old-img"/>-->
        </div>
      </div>
      <div class="titleBg" style="margin-right: 0px">
        <div class="sx-name14black">高中段在校生数（人）</div>
        <div class="sx_disply">
          <div class="sx-numberblue">2200</div>
          <!--          <img src="@/assets/images/老人信息/老人信息_补贴订单.png" class="sx-old-img"/>-->
        </div>
      </div>
    </div>
    <el-row id="eharts" :gutter="20">
      <el-col :xs="24" :sm="24" :lg="12" :xl="12">
        <div class="eharts-back">
          <p class="title"><span></span>入园入学报名人数</p>
          <div ref="mychart7" style="height: 400px;width: 100%;"></div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" :xl="12">
        <div class="eharts-back">
          <p class="title"><span></span>入学在校生人数</p>
          <div ref="mychart8" style="height: 400px;width: 100%;"></div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :lg="12" :xl="12">
        <div class="eharts-back" style="padding-right: 40px;">
          <p class="title"><span></span>少年入学率</p>
          <div class="echarts-flex">
            <div class="text-title" v-for="(item,index) in chart3List" :key="index">
              <div class="text16-33" style="color:#262626;">{{ item.name }}</div>
              <Progress style="margin-top: 20px" :percent="item.percent" text-inside :stroke-width="20"
                        stroke-color="#1492FF"></Progress>
            </div>
          </div>

        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" :xl="12">
        <div class="eharts-back">
          <p class="title"><span></span>教师学历比例</p>
          <div class="echarts-flex">
            <div class="text-title" v-for="(item,index) in chart4List" :key="index">
              <div class="text16-33" style="color:#262626;">{{ item.name }}</div>
              <div style="width:100%;display:flex;justify-content:center" class="div-number">
                <div>{{ item.leftNum }}</div>
                <div style="background:white">:</div>
                <div>{{ item.rightNum }}</div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" :xl="12" style="height:auto">
        <div class="eharts-back echart-footer">
          <div class="text16-33-center">小学段校级优质均衡系数</div>
          <div>0.295</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12" :xl="12" style="height:auto">
        <div class="eharts-back echart-footer">
          <div>初中段校级优质均衡系数</div>
          <div>0.178</div>

        </div>
      </el-col>


    </el-row>
    <div style="display:flex;margin-top: 20px">
      <div class="sx-organ-box" style="margin-right: 20px">
        <div class="sx-organ-title">全县各乡镇中小学及幼儿园数量</div>
        <div style="width: 100%;height: 1px;background: #E5E5E5;margin: 20px 0px"></div>
        <div ref="mychart1" style="height: 300px;width:100%;"></div>
      </div>
      <div class="sx-organ-box" style="margin-right: 20px">
        <div class="sx-organ-title">全县各乡镇义务教育入学概况</div>
        <div style="width: 100%;height: 1px;background: #E5E5E5;margin: 20px 0px"></div>
        <div ref="mychart2" style="height: 300px;width:100%;"></div>
      </div>
    </div>
    <div style="display:flex;margin-top: 20px">
      <div class="sx-organ-box" style="margin-right: 20px">
        <div class="sx-organ-title">全县各乡镇学前教育入学概况</div>
        <div style="width: 100%;height: 1px;background: #E5E5E5;margin: 20px 0px"></div>
        <div ref="mychart3" style="height: 300px;width:100%;"></div>
      </div>
      <div class="sx-organ-box" style="margin-right: 20px">
        <div class="sx-organ-title">全县各乡镇义务教育学历证明概况</div>
        <div style="width: 100%;height: 1px;background: #E5E5E5;margin: 20px 0px"></div>
        <div ref="mychart4" style="height: 300px;width:100%;"></div>
      </div>
    </div>
    <div style="display:flex;margin-top: 20px">
      <div class="sx-organ-box" style="margin-right: 20px">
        <div class="sx-organ-title">全县各乡镇考试优待人数</div>
        <div style="width: 100%;height: 1px;background: #E5E5E5;margin: 20px 0px"></div>
        <div style="position: relative">
          <div ref="mychart5" style="height: 300px;width:100%;"></div>
          <div style="left: 33%;top: 45%;font-size: 24px;color: #000000;position: absolute">{{ pieData5total }}</div>
          <div style="left: 38%;top: 55%;position: absolute;font-size: 14px;color:#999999;;">总</div>
        </div>
      </div>
      <div class="sx-organ-box" style="margin-right: 20px">
        <div class="sx-organ-title">全县各乡镇资助学生人数</div>
        <div style="width: 100%;height: 1px;background: #E5E5E5;margin: 20px 0px"></div>
        <div style="position: relative">
          <div ref="mychart6" style="height: 300px;width:100%;"></div>
          <div style="left: 33%;top: 45%;font-size: 24px;color: #000000;position: absolute">{{ pieData6total }}</div>
          <div style="left: 38%;top: 55%;position: absolute;font-size: 14px;color:#999999;;">总</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  name: "school",

  props: {
    fullWidth: {
      type: Number,
      default: document.documentElement.clientWidth,
    }
  },
  data() {
    return {
      minScreen: 1400,

      chart3List: [
        {
          name: '学前段适龄持证残疾儿童少年入学率',
          percent: 100
        },
        {
          name: '义务段适龄持证残疾儿童少年入学率',
          percent: 100
        },
        {
          name: '高中段适龄持证残疾儿童少年入学率',
          percent: 100
        }
      ],
      chart4List: [
        {
          name: '初中教师中研究生学历的比例',
          leftNum: 3,
          rightNum: 100
        },
        {
          name: '普通高中教师中研究生学历的比例',
          leftNum: 4.91,
          rightNum: 100
        }
      ],

      pieData1: [
        {
          value: 15, name: "高亭镇", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        },
        {
          value: 2, name: "东沙镇", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        },
        {
          value: 2, name: "岱东镇", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        },
        {
          value: 2, name: "岱西镇", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        },
        {
          value: 2, name: "长涂镇", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        },
        {
          value: 2, name: "秀山乡", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        },
        {
          value: 8, name: "衢山镇", color: '#1CA9DF', itemStyle: {
            color: '#1CA9DF'
          }
        }
      ],
      pieData21: [
        {
          value: 639, name: "高亭镇", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        },
        {
          value: 17, name: "东沙镇", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        },
        {
          value: 6, name: "岱东镇", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        },
        {
          value: 26, name: "岱西镇", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        },
        {
          value: 25, name: "长涂镇", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        },
        {
          value: 7, name: "秀山乡", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        },
        {
          value: 162, name: "衢山镇", color: '#5470C6', itemStyle: {
            color: '#5470C6'
          }
        }
      ],
      pieData2: [
        {
          value: 643, name: "高亭镇", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        },
        {
          value: 0, name: "东沙镇", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        },
        {
          value: 0, name: "岱东镇", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        },
        {
          value: 0, name: "岱西镇", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        },
        {
          value: 0, name: "长涂镇", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        },
        {
          value: 0, name: "秀山乡", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        },
        {
          value: 210, name: "衢山镇", color: '#FF9901', itemStyle: {
            color: '#FF9901'
          }
        }
      ],
      pieData3: [
        {
          value: 25, name: "高亭镇", color: '#9A60B4', itemStyle: {
            color: '#9A60B4'
          }
        },
        {
          value: 0, name: "岱东镇", color: '#15D3C3', itemStyle: {
            color: '#15D3C3'
          }
        },
        {
          value: 0, name: "岱西镇", color: '#1388F4', itemStyle: {
            color: '#1388F4'
          }
        },
        {
          value: 3, name: "东沙镇", color: '#EE6666', itemStyle: {
            color: '#EE6666'
          }
        },
        {
          value: 0, name: "秀山乡", color: '#D5CF0E', itemStyle: {
            color: '#D5CF0E'
          }
        },
        {
          value: 0, name: "长涂镇", color: '#3BA272', itemStyle: {
            color: '#3BA272'
          }
        },
        {
          value: 6, name: "衢山镇", color: '#FC8452', itemStyle: {
            color: '#FC8452'
          }
        }
      ],
      pieData4: [
        {
          value: 370, name: "高亭镇", color: '#9A60B4', itemStyle: {
            color: '#9A60B4'
          }
        },
        {
          value: 8, name: "岱东镇", color: '#15D3C3', itemStyle: {
            color: '#15D3C3'
          }
        },
        {
          value: 10, name: "岱西镇", color: '#1388F4', itemStyle: {
            color: '#1388F4'
          }
        },
        {
          value: 15, name: "东沙镇", color: '#EE6666', itemStyle: {
            color: '#EE6666'
          }
        },
        {
          value: 14, name: "秀山乡", color: '#D5CF0E', itemStyle: {
            color: '#D5CF0E'
          }
        },
        {
          value: 6, name: "长涂镇", color: '#3BA272', itemStyle: {
            color: '#3BA272'
          }
        },
        {
          value: 27, name: "衢山镇", color: '#FC8452', itemStyle: {
            color: '#FC8452'
          }
        }
      ],
      pieData5: [
        {
          value: 3, name: "高亭镇", color: '#9A60B4', itemStyle: {
            color: '#9A60B4'
          }
        },
        {
          value: 0, name: "岱东镇", color: '#15D3C3', itemStyle: {
            color: '#15D3C3'
          }
        },
        {
          value: 0, name: "岱西镇", color: '#1388F4', itemStyle: {
            color: '#1388F4'
          }
        },
        {
          value: 0, name: "东沙镇", color: '#EE6666', itemStyle: {
            color: '#EE6666'
          }
        },
        {
          value: 0, name: "秀山乡", color: '#D5CF0E', itemStyle: {
            color: '#D5CF0E'
          }
        },
        {
          value: 0, name: "长涂镇", color: '#3BA272', itemStyle: {
            color: '#3BA272'
          }
        },
        {
          value: 1, name: "衢山镇", color: '#FC8452', itemStyle: {
            color: '#FC8452'
          }
        }
      ],
      pieData5total: 0,
      pieData6total: 0,
      pieData6: [
        {
          value: 372, name: "高亭镇", color: '#9A60B4', itemStyle: {
            color: '#9A60B4'
          }
        },
        {
          value: 10, name: "岱东镇", color: '#15D3C3', itemStyle: {
            color: '#15D3C3'
          }
        },
        {
          value: 21, name: "岱西镇", color: '#1388F4', itemStyle: {
            color: '#1388F4'
          }
        },
        {
          value: 75, name: "东沙镇", color: '#EE6666', itemStyle: {
            color: '#EE6666'
          }
        },
        {
          value: 21, name: "秀山乡", color: '#D5CF0E', itemStyle: {
            color: '#D5CF0E'
          }
        },
        {
          value: 9, name: "长涂镇", color: '#3BA272', itemStyle: {
            color: '#3BA272'
          }
        },
        {
          value: 175, name: "衢山镇", color: '#FC8452', itemStyle: {
            color: '#FC8452'
          }
        }
      ],
    };
  },
  methods: {

    getChart() {
      let echarts = require("echarts");
      let myChart1 = echarts.init(this.$refs.mychart1);
      let myChart2 = echarts.init(this.$refs.mychart2);
      let mychart3 = echarts.init(this.$refs.mychart3);
      let mychart4 = echarts.init(this.$refs.mychart4);
      let mychart5 = echarts.init(this.$refs.mychart5);
      let mychart6 = echarts.init(this.$refs.mychart6);
      let mychart7 = echarts.init(this.$refs.mychart7);
      let mychart8 = echarts.init(this.$refs.mychart8);

      let xdata = [];
      this.pieData1.forEach(item => {
        xdata.push(item.name)
      })
      let option1 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: "{b}: {c}",
        },
        grid: {
          left: "5%",
          right: "5%",
          top: '5%',
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: xdata,
            axisTick: {
              alignWithLabel: true,
            },
            //文字样式
            axisLabel: {
              rotate: -45,
              show: true,
              textStyle: {
                color: "#000",
              },
              formatter: function (value) {
                return value;//.split("").join("\n");
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false, //去除网格线
            },
            axisLine: {
              show: true,
            },
            axisTick: {
              show: true,
            },
          },
        ],
        // color: ["#0099FF", "#FFCC00", "#9999FF"],
        series: [
          {
            // name: "近一周订单数量统计",
            type: "bar",
            label: {
              show: true,
              position: 'top'
            },
            // color: ["#0099FF", "#FFCC00", "#9999FF"],
            barWidth: "50%",
            // barWidth: '30%',
            data: this.pieData1,
            // itemStyle:[ ],
          },
        ],
      };

      let xdata2 = [];
      this.pieData1.forEach(item => {
        xdata2.push(item.name)
      })
      let option2 = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          // formatter: "{b}: {c}",
        },
        legend: {
          // top: "5%",
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          data: ['一年级', '七年级'],
        },
        color: ["#5470C6", "#FF9901"],
        grid: {
          left: "5%",
          right: "5%",
          top: '10%',
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: xdata2,
            axisTick: {
              alignWithLabel: true,
            },
            //文字样式
            axisLabel: {
              rotate: -45,
              show: true,
              textStyle: {
                color: "#000",
              },
              formatter: function (value) {
                return value;//.split("").join("\n");
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false, //去除网格线
            },
            axisLine: {
              show: true,
            },
            axisTick: {
              show: true,
            },
          },
        ],
        // color: ["#0099FF", "#FFCC00", "#9999FF"],
        series: [
          {
            name: "一年级",
            type: "bar",
            label: {
              show: true,
              position: 'top'
            },
            // color: ["#0099FF", "#FFCC00", "#9999FF"],
            barWidth: "30%",
            // barWidth: '30%',
            data: this.pieData21,
            // itemStyle:[ ],
          },
          {
            name: "七年级",
            type: "bar",
            label: {
              show: true,
              position: 'top'
            },
            // color: ["#0099FF", "#FFCC00", "#9999FF"],
            barWidth: "30%",
            // barWidth: '30%',
            data: this.pieData2,
            // itemStyle:[ ],
          },
        ],
      };
      let option3 = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c} ({d}%)",
        },
        legend: {
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          top: '25%',
          right: '20',
          orient: "vertical",
          fontSize: 10,
        },
        series: [
          {
            startAngle: 45,
            type: "pie",
            radius: '50%',
            center: ["40%", "50%"],
            labelLine: {
              length: 5,
            },
            label: {
              formatter: "{c}",
              borderColor: "#8C8D8E",
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: this.pieData3,
          },
        ],
      };
      let option4 = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c} ({d}%)",
        },
        legend: {
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          top: '25%',
          right: '20',
          orient: "vertical",
        },
        series: [
          {
            startAngle: 45,
            type: "pie",
            radius: '50%',
            center: ["40%", "50%"],
            labelLine: {
              length: 5,
            },
            label: {
              formatter: "{c}",
              borderColor: "#8C8D8E",
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: this.pieData4,
          },
        ],
      };

      let lengedData5 = [];
      this.pieData5total = 0;
      this.pieData5.forEach(item => {
        lengedData5.push(item.name)
        this.pieData5total += item.value;
      })
      let option5 = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c} ({d}%)",
        },
        grid: {
          left: "3%",
          bottom: "10%",
          containLabel: true,
        },
        legend: {
          top: '25%',
          right: '20',
          orient: "vertical",
          data: lengedData5,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            rich: {
              a: {
                fontSize: 14,
                color: '#262626'
              }
            }
          }
        },
        series: [
          {
            startAngle: 0,
            name: '各乡镇考试优待人数',
            type: "pie",
            radius: ['35%', '50%'],
            center: ['40%', '50%'],
            labelLine: {
              length: 5,
            },
            label: {
              // formatter: "{b|{b}}\n{d}%",
              formatter: "{c}",
              borderColor: "#8C8D8E",
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: this.pieData5,
          },
        ],
      };

      let lengedData6 = [];
      this.pieData6total = 0;
      this.pieData6.forEach(item => {
        lengedData6.push(item.name)
        this.pieData6total += item.value;
      })
      let option6 = {
        // title: {
        //   text: '服务金额（元）',
        //   top: '2%',
        //   left:'25%',
        //   textStyle: {
        //     fontWeight: 'normal',
        //     fontSize: '20',
        //     color:'#262626'
        //   }
        // },
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
        },
        grid: {
          left: "3%",
          bottom: "10%",
          containLabel: true,
        },
        legend: {
          top: '25%',
          right: '20',
          orient: "vertical",
          data: lengedData6,
          itemWidth: 16,
          itemHeight: 16,
          textStyle: {
            rich: {
              a: {
                fontSize: 14,
                color: '#262626'
              }
            }
          }
        },
        series: [
          {
            startAngle: 0,
            name: '各乡镇资助学生人数',
            type: "pie",
            radius: ['35%', '50%'],
            center: ['40%', '50%'],
            labelLine: {
              length: 5,
            },
            label: {
              // formatter: "{b|{b}}\n{d}%",
              formatter: "{c}",
              borderColor: "#8C8D8E",
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: this.pieData6,
          },
        ],
      };

      let option7 = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c} ({d}%)",
        },
        legend: {
          bottom: '5%',
          left: 'center'
        },

        series: [
          {
            //name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            // label: {
            //     show: false,
            //     position: 'center'
            // },
            label: {
              // alignTo: 'edge',
              formatter: '{c}',
              // formatter:function(params){
              //     str =  '{name|{c}}\n\n'+ '日门诊人数' + params.data.person;
              //     return str
              // },
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
                value: 3016, person: 1200, name: '幼儿园', itemStyle: {
                  // normal: {
                  //   color: '#007BEB',
                  // },
                },
              },
              {
                value: 971, person: 350, name: '小学', itemStyle: {
                  normal: {
                    color: '#FF7A43',
                  },
                },
              },
              {
                value: 889, person: 600, name: '初中', itemStyle: {
                  // normal: {
                  //   color: rgb(89,89,89),
                  // },
                },
              },
            ]
          }
        ]
      };
      let option8 = {
        tooltip: {
          trigger: "item",
          formatter: "{b}:{c} ({d}%)",
        },
        legend: {
          bottom: '5%',
          left: 'center'
        },
        series: [
          {
            //name: '访问来源',
            type: 'pie',
            radius: ['50%', '60%'],
            avoidLabelOverlap: false,
            // label: {
            //     show: false,
            //     position: 'center'
            // },
            label: {
              // alignTo: 'edge',
              formatter: '{c}',
              // formatter:function(params){
              //     str =  '{name|{c}}\n\n'+ '日门诊人数' + params.data.person;
              //     return str
              // },
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
                value: 8883, person: 1200, name: '义务教育', itemStyle: {
                  normal: {
                    color: '#007BEB',
                  },
                },
              },
              {
                value: 2200, person: 350, name: '高中', itemStyle: {
                  normal: {
                    color: '#FF7A43',
                  },
                },
              },
              {
                value: 528, person: 600, name: '大学', itemStyle: {
                  // normal: {
                  //   color: '#F365E3',
                  // },
                },
              },
            ]
          }
        ]
      };


      myChart1.setOption(option1);
      myChart2.setOption(option2);
      mychart3.setOption(option3);
      mychart4.setOption(option4);
      mychart5.setOption(option5);
      mychart6.setOption(option6);
      mychart7.setOption(option7);
      mychart8.setOption(option8);
      window.onresize = function () {
        myChart1.resize();
        myChart2.resize();
        mychart3.resize();
        mychart4.resize();
        mychart5.resize();
        mychart6.resize();
        mychart7.resize();
        mychart8.resize();
      };
    },
  },
  mounted() {
    this.getChart();
  },
};
</script>

<style lang="less" scoped>

.sx-organ-box {
  width: 100%;
  background: #fff;
  border-radius: 5px;
}

.sx-organ-title {
  padding: 13px 20px 0px 20px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #262626;
}

.line {
  height: 1px;
  width: 100%;
  margin-top: 13px;
  background: #E5E5E5;
}


.sx-item-commun {
  width: 80%;
  height: 95px;
  background: #fff;
  border-radius: 6px;
}

.sx-top-name {
  font-size: 14px;
  font-weight: bold;
  color: #000;
  text-align: center;
  line-height: 55px;
}

.sx-bottom-num {
  font-weight: bold;
  font-size: 18px;
  color: #000;
  text-align: center;
}

.sx-centre-organ {
  background: #FFFFFF;
  display: flex;
  padding: 20px;

}

.sx-name14white {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #FFFFFF;
}

.sx-number {
  font-family: PingFangSC-Heavy;
  font-size: 24px;
  color: #FFFFFF;
}

.sx-item-organ {
  width: 33%;
  background: linear-gradient(44deg, #EE8F41 0%, #FFBE5B 100%);
  border-radius: 6px;
  padding: 10px;
}

.sx-blue {
  margin-left: 20px;
  background: linear-gradient(44deg, #32B1F0 0%, #30DCE8 100%);
}

.sx-green {
  margin-left: 20px;
  background: linear-gradient(44deg, #328FF0 0%, #31CFEF 100%);
}

.sx-violet {
  margin-left: 20px;
  background: linear-gradient(44deg, #9B56E3 0%, #7778E7 100%);
}

#eharts .el-col {
  height: 500px;
  margin-top: 20px;

}

.eharts-back {
  background: white;
  height: 100%;

}

.title {
  font-size: 26px;
  font-weight: 700;
  color: #333;
}

.title::before {
  content: '|';
  display: inline-block;
  margin-right: 4px;
  line-height: 1;
  font-family: SimSun;
  font-size: 26px;
  color: #2741b4;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  // height: 100px;
  text-align: center;
  // margin: 15px 0;
}

.text {
  font-size: 18px;
  color: #333333;
}

.echart-footer {
  height: 140px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  background: rgba(20, 146, 255, 0.15);
  border-radius: 5px;
  align-items: center;

  div {
    font-size: 18px;
    font-weight: bold;
  }

}

.text-index {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  text-align: center;
  margin-top: 10px;
  background: rgba(20, 146, 255, 0.10);
  font-size: 18px;
  color: #1492FF;
  display: flex;
  justify-content: space-between;

}

.echarts-flex {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-content: space-around;

  .text-title {
    width: 100%;
    margin: 20px;
    font-size: 16px;
    font-weight: bold
  }
}

// 几:几
.div-number div {
  height: 100px;
  width: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  background: rgba(20, 146, 255, 0.15);
}


</style>
