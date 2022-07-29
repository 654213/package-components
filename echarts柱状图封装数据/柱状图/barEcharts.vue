<template>
  <div>
    <div :id="echartId" style="width:100%;height:250px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  props: {
    echartId: {
      type: String,
      default: 'lineechart1'
    },
  },
  data(){
    return{
    }
  },
  methods: {
    setOption(names,ldata,xdata,data1,data2) {
      let mychart = echarts.init(document.getElementById(this.echartId));
      let option = {
        tooltip: {
            trigger: 'axis',
            formatter:function(params){
              // console.log(params);
              let res=`${params[0].data.name}<br><br>`;
              for(var i=0;i<2;i++){
                let item=params[i].data;
                let names=params[i].seriesName;
                // console.log(item);
                res+=`${names}：${item.value}${item.symbol}<br>`;
              }
              // console.log(res);
              return res;
            },
            textStyle:{
              align:'left',
            }
          },
          legend: {
            x:'center',
            y:"top",
            itemGap:5,
            data:ldata,
            textStyle:{
              fontSize:10,
            }
          },
          grid: {
            top:'15%',
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data:xdata,
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel:{
              show:true,
              fontSize:12,
              interval: 0,  
              formatter: function(params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = 5; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  /** 循环每一行,p表示行 */
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = ""; // 表示每一次截取的字符串
                    var start = p * provideNumber; // 开始截取的位置
                    var end = start + provideNumber; // 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr; // 最终拼成的字符串
                  }
        
                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
              }
            }
          },
          yAxis: {
            type:'value',
            splitLine:{
              lineStyle:{
                type:'dashed',
                color: '#ECF0F6',
              }
            }
          },
          series: [
          {
            name:names[0],
            type: 'bar',
            barWidth:'25%',
            data:data1,
            itemStyle: {
              color: '#73a9db'
            },
          },
          {
            name:names[1],
            type: 'bar',
            barWidth:'25%',
            data:data2,
            itemStyle: {
              color: '#f0975a'
            },
          }
          ]
      };
      mychart.setOption(option);
      window.addEventListener("resize", function(){
        mychart.resize();
      })
    },
  },
}
</script>
