<template>
  <div style="display: flex; justify-content: space-around">
    <BallChart
      style="width: 140px; height: 140px"
      :scolor="scolor"
      :sdata="'73.15%\n\n管理率'"
    >
    </BallChart>
    <List :data="list" />
  </div>
</template>
<script>
import BallChart from "@/views/components/bollchart/BallChart.vue";
import List from "./list.vue";
export default {
  components: { BallChart, List },
  data() {
    return {
      scolor: ["#446AE5", "#25B8EB"],
      list: [
        {
          color: "rgba(82,110,201,0.05)",
          title: "接受健康管理老年人数(人)",
          num: 60972,
          numcolor: "#526EC9",
        },
      ],
    };
  },
};
</script>
<style lang="less">
.art {
  position: relative;
  top: 50px;
  left: -80px;
}
</style>
