<template>
  <div class="body">
    <pie-test
      :chartData="data"
      :radius="radius"
    ></pie-test></div>
</template>
<script>
import PieTest from './PieContent.vue'
export default {
  components: { PieTest },
  props: { data: Array, radius: [String, Array]},
  data() {
    return {};
  },
};
</script>
