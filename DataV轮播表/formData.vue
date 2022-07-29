<template>
  <dv-scroll-board
        :rowNum=6
        :config="configdisplacementofDam"
        style="width:100%;height: 310px;"/>
</template>
<script>
import icon_yj_red from "../../assets/images/icon_yj_red.png"
import icon_yj_yellow from "../../assets/images/icon_yj_yellow.png"
export default {
  data(){
    return{
      headerdisplacementofDam: ['预警', '整改单位', '未整改问题','整改超时'],
      datadisplacementofDam: [
        [`<img src=${icon_yj_red} style="width: 30px; height: 30px">`,'<span style="color: rgba(255,255,255,0.80);">XX局1</span>','<span style="color: rgba(255,255,255,0.80);">5</span>','<span style="color: #FF3E3E;">超过13天</span>'],
        [`<img src=${icon_yj_red} style="width: 30px; height: 30px">`,'<span style="color: rgba(255,255,255,0.80);">XX局1</span>','<span style="color: rgba(255,255,255,0.80);">3</span>','<span style="color: #FF3E3E;">超过3天</span>'],
        [`<img src=${icon_yj_yellow} style="width: 30px; height: 30px">`,'<span style="color: rgba(255,255,255,0.80);">XX局1</span>','<span style="color: rgba(255,255,255,0.80);">3</span>','<span style="color: #FAC858;">还剩下2天</span>'],
        ['','<span style="color: rgba(255,255,255,0.80);">XX局2</span>','<span style="color: rgba(255,255,255,0.80);">8</span>','<span style="color: #46C50A;">还剩47天</span>'],
        ['','<span style="color: rgba(255,255,255,0.80);">XX局3</span>','<span style="color: rgba(255,255,255,0.80);">8</span>','<span style="color: #46C50A">还剩47天</span>'],
        ['','<span style="color: rgba(255,255,255,0.80);">XX局2</span>','<span style="color: rgba(255,255,255,0.80);">8</span>','<span style="color: #46C50A">还剩47天</span>'],
        ['','<span style="color: rgba(255,255,255,0.80);">XX局3</span>','<span style="color: rgba(255,255,255,0.80);">8</span>','<span style="color: #46C50A">还剩47天</span>'],
      ],
      configdisplacementofDam:{},

    }
  },
  
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.configdisplacementofDam = {
      data: this.datadisplacementofDam, // 表数据
      header: this.headerdisplacementofDam, // 表头数据
      rowNum: 6, // 表行数
      headerBGC: 'rgba(52,80,228,0.58)', // 表头背景色
      oddRowBGC: 'rgba(52,80,228,0.10)', // 奇数行背景色
      evenRowBGC: 'rgba(52,80,228,0.10)', // 偶数行背景色
      waitTime: 4000, // 轮播时间间隔(ms)
      align: 'center',
      hoverPause: "true"
    }
  },
}
</script>