<template>
  <div>
        <assibly :data="communitycode"/>
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
      communitycode: require("/public/static/future-code.json").communityCode,
    }
  }
}
</script>