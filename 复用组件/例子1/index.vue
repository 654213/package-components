<template>
  <div>
        <!-- 总体情况 -->
          <assibly-village :data="businessCode"/>
  </div>
</template>
<script>
import AssiblyVillage from './tab-title.vue'
export default {
  components:{
    AssiblyVillage,
  },
  data(){
    return{
      businessCode: require("/public/static/core-business.json").businessCode,
    }
  }
}
</script>