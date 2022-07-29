<template>
  <div class="content-wapper" :style="{height:height,width:width}">
    <div class="header" v-if="headerShow">
      <div class="start">
         <div class="icon"></div>
         <span class="start-title" >{{title}}</span>
      </div>
      <div class="end-title"  :style="{color:endTitleColor}" @click="handleClickEndTitle" v-if="endTitleShow">{{endTitle}}</div>
    </div>
    <div class="content" :class="headerShow?'':'content-height'">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 主标题
    title: {
      type: String,
      default: ''
    },
    // 高度
    height: {
      type: String,
      default: '100%'
    },
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 头部右边显示的文字
    endTitle: {
      type: String,
      default: ''
    },
    // 头部右边字体颜色
    endTitleColor: {
      type: String,
      default: '#FFD900'
    },
    // 头部右边是否显示
    endTitleShow: {
      type: Boolean,
      default: false
    },
    // 是否显示头部
    headerShow: {
      type: Boolean,
      default: true
    }

  },
  data () {
    return {}
  },
  methods: {
    handleClickEndTitle () {
      this.$emit('handle-click-end-title')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';
  .content-wapper{
   // margin-top: 10px;
   background: $--color-content-back;
   border-radius: 6px;
    .header{
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      height: 45px;
      width: 100%;
      //background: $--color-content-back;
      //background: url('../../assets/images/img_title_bg.png') no-repeat;
      //background-size:100% 100%;
      align-items: center;
      margin: auto 0;
      .start{
         display: flex;
         align-items: center;
        .icon{
          height: 34px;
          width: 34px;
          margin-right: 10px;
          background: url('../../assets/images/img_title.gif') no-repeat;
          background-size: 100% 100%;
        }
        .start-title{
          font-size: 18px;
          color: white;

        }

      }
      .end-title{
        font-size: 14px;
      }

    }
    .content{
     // background: $--color-content-back;
      height: calc(100% - 45px);
    }
    .content-height{
      height: 100%;
    }
  }
</style>
