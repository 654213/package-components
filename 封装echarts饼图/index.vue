<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="padding-right: 20px" >
        <sx-card-content :title="'停车情况'" :background="colorList[0]">
          <div style="height: 140px">
            <div class="sx-small">
              <div class="middle-font">停车利用率(本周)<span class="sx-content">63.35%</span></div>
              <span style="margin-left:5px;" class="sx-icon">同比上周</span><Icon type="md-trending-up" color="red" />
              <span class="ratio-font" style="margin-left:5px">5.24%</span>
            </div>
            <div style="margin-top: 30px">
              <div class="middle-font">停车周转率(本周)<span class="sx-content">66.59%</span></div>
              <span style="margin-left:5px;" class="sx-icon">同比上周</span><Icon type="md-trending-up" color="red" />
              <span class="ratio-font" style="margin-left:5px">4.32%</span>
            </div>
          </div>
        </sx-card-content>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="padding-right: 20px">
        <sx-card-content :title="'车位数'" :background="colorList[1]">
          <div style="height: 140px">
              <div>
                <div class="middle-font">停车场总数<span class="sx-content">20</span></div>
              </div>                     
              <div style="margin-top: 50px">
                  <div class="middle-font">路边泊位数(个)<span class="sx-content">20进19出</span></div>               
              </div>                         
          </div>
        </sx-card-content>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <sx-card-content :title="'空闲车位数'" :background="colorList[2]">
              <pieEchart :echart-id="'pieechart'" ref="pieechart"></pieEchart>
              <center-data/>
        </sx-card-content>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" style="padding-right: 20px">
        <sx-card-content :title="'泊位占有率'" :background="colorList[3]">
          <pie-chart-data :data="radioList1" :radius="radius"></pie-chart-data>
        </sx-card-content>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" style="padding-right: 20px">
        <sx-card-content :title="'停车利用率'" :background="colorList[4]">
          <pie-chart-data :data="radioList2" :radius="radius"></pie-chart-data>
        </sx-card-content>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6" style="padding-right: 20px">
        <sx-card-content :title="'缴费方式占比'" :background="colorList[5]">
          <pie-chart-data :data="radioList3" :radius="radius"></pie-chart-data>
        </sx-card-content>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
        <sx-card-content :title="'异常收费占比'" :background="colorList[6]">
          <pie-chart-data :data="radioList4" :radius="radius"></pie-chart-data>
        </sx-card-content>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import pieEchart from "../../../pension/components/core-indicators/pieEchart.vue";
import pieEchart from "./components/pieTitle.vue";
import pieChartData from './components/Pie/PieData.vue'
import centerData from './components/centerData.vue'
import SxCardContent from "./components/sx-card.vue";
import PieData from "@/views/multiSpanNewServices/components/pie/pieData";
export default {
  components:{
    PieData,
    SxCardContent,
    centerData,
    pieChartData,
    pieEchart
  },
  data() {
    return {
      radius:'50%',
      radioList1:[{
          id: 0,
          color: "#92CC75",
          name: "空余车位",
          value: "1548",
          itemStyle: { 
             color: "#92CC75" 
          }
      },
      {
          id: 1,
          color:'#5570C6',
          name:"占有车位",
          value: '735',
          itemStyle:{
            color: '#5570C6'
          }
      }
      ],
      radioList2:[{
          id: 0,
          color: "#AC88F2",
          name: "累计时长",
          value: "1548",
          itemStyle: { 
             color: "#AC88F2" 
          }
      },
      {
          id: 1,
          color:'#FAC858',
          name:"空闲时长",
          value: '735',
          itemStyle:{
            color: '#FAC858'
          }
      }
      ],
      radioList3:[{
          id: 0,
          color: "#FD7C78",
          name: "现金",
          value: "1548",
          itemStyle: { 
             color: "#FD7C78" 
          }
      },
      {
          id: 1,
          color:'#2480FC',
          name:"支付宝",
          value: '735',
          itemStyle:{
            color: '#2480FC'
          }
      },
      {
          id: 1,
          color:'#92CC75',
          name:"微信",
          value: '735',
          itemStyle:{
            color: '#92CC75'
          }
      }
      ],
      radioList4:[{
          id: 0,
          color: "#92CC75",
          name: "申诉账单",
          value: "1548",
          itemStyle: { 
             color: "#92CC75" 
          }
      },
      {
          id: 1,
          color:'#FD7C78',
          name:"异常放行",
          value: '735',
          itemStyle:{
            color: '#FD7C78'
          }
      },
      ],
      pieData5: [
        {
          value: 15, name: "路边空闲(个)", color: '#4A71CC', itemStyle: {
            color: '#4A71CC'
          }
        },
        {
          value: 669, name: "场库空闲(个)", color: '#FD7C78', itemStyle: {
            color: '#FD7C78'
          }
        }
      ],
      colorList:[
        'rgba(255,190,91,0.05)','rgba(49,177,239,0.05)',
        'rgba(247,140,137,0.05)',
        'rgba(136,202,103,0.05)','rgba(172,136,242,0.05)',
        'rgba(243,203,72,0.05)','rgba(150,165,204,0.05)'
      ]
    }
  }, 
  mounted() {
     let data = [
        {
          value: 15, name: "路边空闲(个)", color: '#4A71CC', itemStyle: {
            color: '#4A71CC'
          }
        },
        {
          value: 669, name: "场库空闲(个)", color: '#FD7C78', itemStyle: {
            color: '#FD7C78'
          }
        }
      ];
    this.$nextTick(()=>{
      this.$refs.pieechart.setOption(data,'人');
    })
}
   
}
</script>
<style scoped lang="less">
.middle-font {
  font-size: 18px;
  display: flex;
  justify-content: space-between;
}

.ratio-font {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #FF2A2A;
  font-weight: 500;
}
.sx-icon{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #666666;
  font-weight: 400;
}
.sx-content{
  font-family: PingFangSC-Medium;
  font-size: 24px;
  color: #000000;
  text-align: right;
  font-weight: 500;
}
</style>
