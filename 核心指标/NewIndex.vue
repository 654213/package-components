<template>
  <div>
    <el-row :gutter="20" type="flex">
      <el-col :span="8" >
        <core-indicators-card :item="dataList[0]"/>
      </el-col>
      <el-col :span="8" >
        <core-indicators-card :item="dataList[1]"/>
      </el-col>
      <el-col :span="8" >
        <core-indicators-card :is-echart="true" :item="dataList[2]" >
          <pieEchart :echart-id="'pieechart'" ref="pieechart"></pieEchart>
        </core-indicators-card >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CoreIndicatorsCard from '@/views/multiSpanNewServices/components/CoreIndicatorsCard.vue'
import pieEchart from "@/views/multiSpanNewServices/peace-of-minde/components/pieEchart";
export default {
  components:{
    CoreIndicatorsCard,
    pieEchart
  },
  data(){
    return{
      dataList:[
        {
          icon:require('@/assets/images/multi-span-new-services/icon_axy_jgzl.png'),
          color:'#1492FF',
          title:'机构总览',
          contentList:[{
            name:'机构总数',
            num:3,
            unit:'个'
          },
          {
            name:'床位总数',
            num:2300,
            unit:'个'
          },
          {
            name:'已住床位',
            num:805,
            unit:'个'
          },
          {
            name:'入住率',
            num:'35%',

          },
         ]
        },
         {
          icon:require('@/assets/images/multi-span-new-services/icon_axy_jgcyryzl.png'),
          color:' #18B682',
          title:'机构从业人员总览',
          contentList:[{
              name:'其它',
              num:37,
              unit:'人'
            },
            {
              name:'护理员',
              num:134,
              unit:'人'
            },
            {
              name:'护士',
              num:7,
              unit:'人'
            },
            {
              name:'医生',
              num:4,
              unit:'人'
            }
            ]
          },
          {
            icon:require('@/assets/images/multi-span-new-services/icon_axy_snfx.png'),
            color:'#EE6666',
            title:'失能分析',
          }
      ]
    }
  },
  mounted() {
    let data = [
      {name: '正常老人', value: 401,itemStyle:{
          color: '#5470C6',
        }},
      {name: '轻度失能', value:201,itemStyle:{
          color: '#91CD74',
        }},
      {name: '中度失能', value: 100,itemStyle:{
          color: '#ED6666',
        }},
      {name: '重度失能', value: 21,itemStyle:{
          color: '#72BFDE',
        }},
    ];
    this.$refs.pieechart.setOption(data);
  }
}
</script>

<style>

</style>
