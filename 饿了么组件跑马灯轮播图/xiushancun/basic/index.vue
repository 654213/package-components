<template>
  <carousel :data="data"></carousel>
</template>
<script>
import carousel from '@/views/socialSpace/digitalVillage/components/carousel/index'
export default {
  components:{
    carousel
  },
  data(){
    return{
      data:[
        require('assets/images/digitalVlillage/xiushancun/1.jpg'),
        require('assets/images/digitalVlillage/xiushancun/2.jpg'),
        require('assets/images/digitalVlillage/xiushancun/3.jpg'),
      ]
    }
  }
}
</script>
