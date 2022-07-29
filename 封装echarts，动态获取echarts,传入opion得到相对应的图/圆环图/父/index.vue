<template>
  <content-no-header-back :title="'人员结构'">
    <div style="height:100%;  justify-content:center;" class="sx-flex-space-between" >
      <pie-for-person :option="option" :info-data="datas" style="width:50%"></pie-for-person>
      <div class="sx-flex-center">
        <div v-for="(m, n) in datas" :key="n.id" >
          <div class="dataList sx-flex-space-between" >
            <span class="list-dot" :style="{ background: m.color }"></span>
            <span class="span-title-area area1">{{ m.name }}</span>
          </div>
       </div>
      </div>

    </div>
  </content-no-header-back>
</template>
<script>
import ContentNoHeaderBack from '@/components/content-no-header-back/index.vue'
import PieForPerson from '@/views/components/PieForPerson.vue'

import { mapGetters } from 'vuex'
export default {
  components: { ContentNoHeaderBack, PieForPerson },
  data () {
    return {
      datas: [{
        id: 0,
        color: '#AA90FF',
        name: '婴幼儿',
        value: '50',
        itemStyle: { color: '#AA90FF' }
      },
      {
        id: 1,
        color: '#91CD75',
        name: '儿童',
        value: '30',
        itemStyle: { color: '#91CD75' }
      },
      {
        id: 2,
        color: '#FC5568',
        name: '少年',
        value: '20',
        itemStyle: { color: '#FC5568' }
      },
      {
        id: 3,
        color: '#00BFD9',
        name: '青年',
        value: '10',
        itemStyle: { color: '#00BFD9' }
      },
      {
        id: 4,
        color: '#4997F0',
        name: '中年',
        value: '60',
        itemStyle: { color: '#4997F0' }
      },
      {
        id: 5,
        color: '#F4A71F',
        name: '老年',
        value: '70',
        itemStyle: { color: '#F4A71F' }
      }],

      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{c}'
        },
        // title: null,
        // legend: null,
        // legend: {
        //   orient: 'vertical',
        //   left: 'right',
        //   align: 'left',
        //   // x:'center',
        //   y: 'center',
        //   itemWidth: 10,
        //   itemHeight: 10,
        //   textStyle: {
        //     color: '#ffffff',
        //     fontSize: 14
        //   }
        // },
        series: {
          // name: this.name,
          type: 'pie',
          radius: ['100%', '50%'],
          data: [],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          // color: chartColor
          },
          label: {
            normal: {
              show: false
            },
            show: false
          },
          labelLine: {
            show: false
          }

        }
      }
    }
  },
  methods: {
    formateData (val) {
      const data = JSON.parse(JSON.stringify(this.datas))
      data[0].value = val.yyezb
      data[1].value = val.qsnzb
      data[2].value = val.snzb
      data[3].value = val.qnzb
      data[4].value = val.znzb
      data[5].value = val.lnzb
      this.datas = data
    }
  },
  computed: {
    ...mapGetters(['structureList'])
  },
  watch: {
    structureList (nVal) {
      this.formateData(nVal)
    }
  }

}
</script>

<style lang="scss" scoped>
@import '@/styles/app.scss';
.serviceObject-height {
  height: calc(35% - 30px) !important;
}
.list-dot {
  width: 10px;
  height: 10px;
  margin-top: 6px;
}
.span-title-area {
  font-size: 16px;
  font-weight: 500;
  margin-left: 10px;
}
.pie-font {
  width: 22px;
  height: 25px;
  font-size: 18px;
  color: #00efff;
  font-weight: 500;
}
.dataList {
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
}
</style>
