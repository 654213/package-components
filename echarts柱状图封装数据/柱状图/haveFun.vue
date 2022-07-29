<template>
<!-- 安吉县学生体质健康 -->
  <div class="warning-study">
    <sx-card-content :title-list="titleList[0]">
        <el-row>
            <el-col :md="24" :lg="8">
                <div class="content-title">
                    <div class="text">{{travelList[0].text}}</div>
                </div>
            <bar-echarts echart-id="barechart1" ref="barechart1"></bar-echarts>
            </el-col>
            <el-col :md="24" :lg="8">
                <div class="content-title">
                    <div class="text">{{travelList[1].text}}</div>
                </div>
            <bar-echarts echart-id="barechart2" ref="barechart2"></bar-echarts>
            </el-col>
            <el-col :md="24" :lg="8">
                <div class="content-title">
                    <div class="text">{{travelList[2].text}}</div>
                </div>
            <bar-echarts echart-id="barechart3" ref="barechart3"></bar-echarts>
            </el-col>
        </el-row>
    </sx-card-content>
  </div>
</template>

<script>
import SxCardContent from "@/components/sx-card-content/index.vue";
import barEcharts from '@/views/mainAreas/components/early-warning/components/barEcharts'
export default {
  components: {
    SxCardContent,
    barEcharts,
  },
  data() {
    return {
      titleList: [
        [
          {
            name: "2020年安吉县旅游资源产值完成比",
            select: true,
          },
        ],
      ],
      travelList:[
          {
              text:'（万人次）',
              // data1:[2584,],
              data1:[
                {
                  name:"游客接待量",
                  value:"798",
                  symbol:""
                },
                {
                  name:"乡村旅游接待量",
                  value:"",
                  symbol:""
                }
              ],
              // data2:[2105,1056],
              data2:[
                {
                  name:"游客接待量",
                  value:"800.56",
                  symbol:""
                },
                {
                  name:"乡村旅游接待量",
                  value:"49.62",
                  symbol:""
                },
              ],
              xdata:['游客接待量','乡村旅游接待量'],
          },
          {
              text:'（亿元）',
              // data1:[301,,72],
              data1:[
                {
                  name:"旅游总收入",
                  value:"114",
                  symbol:""
                },
                {
                  name:"乡村旅游总收入",
                  value:"",
                  symbol:""
                },
                {
                  name:"旅游业增加值",
                  value:"7",
                  symbol:""
                }
              ],
              data2:[
                {
                  name:"旅游总收入",
                  value:"114.59",
                  symbol:""
                },
                {
                  name:"乡村旅游总收入",
                  value:"1.52",
                  symbol:""
                },
                {
                  name:"旅游业增加值",
                  value:"7.79",
                  symbol:""
                }
              ],
              // data2:[305.04,21.48,51.6],
              xdata:['旅游总收入','乡村旅游总收入','旅游业增加值'],
          },
          {
              text:'（百分比）',
              // data1:[13.5,13.5,15],
              data1:[
                {
                  name:"游客接待量年增长率",
                  value:"7",
                  symbol:"%"
                },
                {
                  name:"旅游总收入年增长率",
                  value:"7",
                  symbol:"%"
                },
                // {
                //   name:"旅游业增加值占gdp比重",
                //   value:"",
                //   symbol:""
                // }
              ],
              data2:[
                {
                  name:"游客接待量年增长率",
                  value:"7.31",
                  symbol:"%"
                },
                {
                  name:"旅游总收入年增长率",
                  value:"7.29",
                  symbol:"%"
                },
                // {
                //   name:"旅游业增加值占gdp比重",
                //   value:"",
                //   symbol:""
                // }
              ],
              // data2:[-6.2,-1.8,10.6],
              xdata:['游客接待量年增长率','旅游总收入年增长率'],
          }
      ]
    };
  },
  mounted() {
    let ldata= ['2020年目标值', '2020年实际值'];
    let names=['2020年目标值', '2020年实际值'];
    this.$nextTick(() => {
      this.$refs.barechart1.setOption(names,ldata,this.travelList[0].xdata,this.travelList[0].data1,this.travelList[0].data2);
      this.$refs.barechart2.setOption(names,ldata,this.travelList[1].xdata,this.travelList[1].data1,this.travelList[1].data2);
      this.$refs.barechart3.setOption(names,ldata,this.travelList[2].xdata,this.travelList[2].data1,this.travelList[2].data2);
    })

  }
};
</script>
<style scoped lang="less">
.warning-study{
    .title{
        font-family: PingFangSC-Medium;
        font-size: 18px;
        color: #333333;
        //padding: 14px 16px;
        margin-bottom: 20px;
    }
    .content-title{
        display:flex;
        margin-left:20px;
    }
    .circle{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #1492FF;
        margin  :4px;
    }
    .text{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #333333;
        line-height: 18px;
    }
}
</style>
