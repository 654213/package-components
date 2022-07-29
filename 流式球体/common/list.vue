<template>
  <div>
    <div v-for="(item, index) in data" :key="index">
      <div class="bgcolor" :style="{ background: item.color }">
        <div class="oldtitle">
          {{ item.title }}
        </div>
        <div class="oldnum" :style="{ color: item.numcolor }">{{ item.num }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: { data: Array },
  data() {
    return {};
  },
};
</script>
<style lang="less">
.bgcolor {
  width: 179px;
  height: 113px;
  border-radius: 16px;
}
.oldtitle {
  width: 147px;
  height: 46px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  font-weight: 400;
  padding: 12px 12px;
}
.oldnum {
  width: 82px;
  height: 34px;
  font-family: PingFangSC-Medium;
  font-size: 24px;
  font-weight: 500;
  padding: 12px 12px;
}
</style>
