<template>
  <div>
       <assibly-village :data="villageCode"/>
  </div>
</template>
<script>
import Assibly from '../common/tabTitile.vue'
export default {
  components:{
    Assibly
  },
  data(){
    return{
      fontNumber:1,
      fontAim:2,
      villageCode: require("/public/static/future-code.json").villageCode,
    }
  }
}
</script>