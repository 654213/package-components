<template>
  <div  class="header-wapper">
      <!-- 背景光影 -->
      <div class="parallelogram"></div>
      <!-- 标题 -->
      <img :src="require('@/assets/images/hom-header/img_nav_text.png')"  alt="" class="text-header"/>
      <!-- 时间 -->
      <div class="time-user">
        <div class="clock">{{date}}</div>
      </div>
      <sx-menu class="menu"/>
  </div>
</template>

<script>
import {
  refreshTime
} from '@/utils/time'
import SxMenu from './menu/index.vue'
export default {
  components: { SxMenu },
  data () {
    return {
      date: ''
    }
  },
  mounted () {
    this.formatData()
  },
  methods: {
    formatData () {
      setInterval(() => {
        this.date = refreshTime()
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wapper{
    background: url('../../../../assets/images/hom-header/img_nav_bg.png');
    background-size: 100% 100%;
    position: relative;
    height:80px;
    width:100vw;
    .parallelogram{
      display: inline-block;
      height: 68px;
      position: absolute;
      width: 450px;
      left: 30px;
      background: linear-gradient(90deg,rgba(17, 182, 228,0.1),rgba(17, 182, 228,0.7));
      transform: skew(42deg);
      z-index:8;
      animation: parallelogram 5s infinite;
    }
    .text-header{
      position: absolute;
      height: 33px;
      left:75px;
      top:17px;
      z-index:9;
    }
    .time-user{
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 300px;
      top:4px;
      right:40px;
      .clock{
        font-size: 14px;
        color: white;
      }
      .diver{
        margin:0 10px;
        color:#fff;
        opacity: 0.61;
        font-size:14px;

      }
      .user{
        color: #fff;
        opacity: 0.61;
        font-size: 16px;

      }

    }
    .menu{
      position:absolute;
      top:38px;
      left:570px;
    }
  }

  @keyframes parallelogram {
    0% { width:0px; }
    80% {width:450px;opacity: 1;}
    100% {opacity: 0;}
  }

</style>
