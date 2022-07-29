<template>
  <ifp-file :childerData="childerData" />
</template>
<script>
import IfpFile from "@/views/areas/detail/childer/components/infantProfile.vue";
export default {
  components: { IfpFile },
  data() {
    return {
      childerData: [
        {
          name: "文化场馆(家)",
          num: "188",
          color: "#E88532",
          shadowColor: "0px 10px 25px 0px rgba(232,133,50,0.5)",
        },   {
          name: "文化活动开展(场)",
          num: "960",
          color: "#3392F0",
          shadowColor: "0px 10px 25px 0px rgba(51,146,240,0.5)",
        },   {
          name: "文艺团队(支)",
          num: "90",
          color: "#8056DC",
          shadowColor: "0px 10px 25px 0px rgba(128,86,220,0.5)",
        }
      ],
    };
  },
};
</script>
