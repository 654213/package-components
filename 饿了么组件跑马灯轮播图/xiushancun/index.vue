<template>
  <div>
    <sx-icon-card-content :title="'村情简介'">
      <content-bar></content-bar>
      <basic></basic>
    </sx-icon-card-content>
    <sx-icon-card-content :title="'基本情况'">
      <basic-information :type="'type2'"></basic-information>
    </sx-icon-card-content>
    <sx-icon-card-content :title="'重点工作'">
    </sx-icon-card-content>
  </div>
</template>
<script>
import SxIconCardContent from '_c/sx-icon-card-content'
import BasicInformation from '../components/basicInformation.vue'
import ContentBar from '../xiushancun/content/contentBar.vue'
import basic from '../xiushancun/basic/index.vue'
export default {
  components:{
    SxIconCardContent,
    BasicInformation,
    ContentBar,
    basic

  }
}
</script>
