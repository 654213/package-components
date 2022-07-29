<template>
  <div class="Experience">
    <common :data="xdata5" :color="'#CEA643'" style="height: 664px"></common>
  </div>
</template>
<script>
import Common from '../community/components/common.vue'
export default {
  name: 'Ex-exper',
  components:{
    Common
  },
  data(){
    return {
      xdata5:[
        {
          name: '2004',
          value: 55
        },
        {
          name: '2006',
          value: 67
        },
        {
          name: '2008',
          value: 117
        },
        {
          name: '2010',
          value: 152
        },
        {
          name: '2012',
          value: 150
        },
        {
          name: '2014',
          value: 304
        },
        {
          name: '2016',
          value: 380
        },
        {
          name: '2018',
          value: 471
        },
        {
          name: '2020',
          value: 724
        },
      ],
    }
    }
}
</script>