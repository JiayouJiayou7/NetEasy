<template>
  <div id="WorthBuyWrap">
    <div class="topBar">
      <router-link to="home">
        <div class="home">
          <i class="iconfont icon-shouye"></i>
        </div>
      </router-link>
      <div class="title">
        <span>值得买</span>
      </div>
      <div class="right">
        <i class="iconfont icon-sousuo"></i>
        <i class="iconfont icon-gouwuche" @click="Tocartlist"></i>
      </div>
    </div>
  <div class="swiperTab-container">
    <div class="swiperTab-title">
      <img src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
      <span>严选好物 用心生活</span>
    </div>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(navItem,index) in newNavList" :key="index">
        <a class="link-to-pro" v-for="(item,index) in navItem" :key="index">
            <div class="pro-container">
                <img :src="item.picUrl"/>
              </div>
              <div class="text">
                <span class="text-title">{{item.mainTitle}}</span><br>
                <span class="text-desc">{{item.viceTitle}}</span>
              </div>
        </a>
      </div>
    </div>
  </div>
  <WaterFall></WaterFall>
  </div>
</template>

<script>
import _ from "lodash";
import Swiper from 'swiper'
import "swiper/css/swiper.min.css";
import WaterFall from '../components/WaterFall/WaterFall'
  export default {
    data(){
      return{
        navList:[],
      }
    },
    components:{
      WaterFall
    },
    async mounted(){
        let res = await this.$API.getTopicNavData();
        this.navList = res.data.navList;
      },
    computed: {
      newNavList(){
        return _.chunk(this.navList, 8);
      }
      //  newNavList(){
        // return this.navList = silce
      // }
    },
    methods:{
      Tocartlist(){
        this.$router.push({path:'cartlist'})
      }
      
    },
    watch:{
       navList(){
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            loop: true,
            //分页器
          });
        });
      } 
    }
    
  }
</script>

<style lang="stylus" scoped>
  #WorthBuyWrap
     width 100%
     background-color #eee
    .topBar
      display flex
      justify-content space-between
      width 100%
      height 100%
      line-height 100px
      text-align center
      font-size 36px
      padding 0 24px
      box-sizing border-box
      .home
        i
         font-size 48px
      .right
        i
         font-size 50px
         &:first-child
           margin-right 30px
    .swiperTab-container
      width 100%
      background url('https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png') no-repeat
      background-size cover
      padding 0 24px
      box-sizing border-box
      .swiperTab-title
        width 100%
        display flex
        font-size 30px
        color #fff
        padding-top 68px
        margin-bottom 24px
        img
         width 130px
         height 68px 
        span 
          margin 28px 0 0 5px
    .swiper-container
      width 100%
      height 100%
      background-color #fff
      border-radius 10px
      padding-bottom 70px
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          justify-content center
          align-items flex-start
          // 元素换行
          flex-wrap wrap
          height 100%
          .link-to-pro
            width 25%
            text-align center
            padding-top 36px
            .pro-container
              width 120px
              height 120px
              // 图片不垂直居中
              margin 0 auto
              img
               width 100%
               height 100%
               display inline
            .text
              width 100%
              height 100%
              line-height 35px
              padding 8px
              .text-title
                font-size 28px
                font-weight bold
                color #333
              .text-desc
                font-size 24px
                color #999 
          
</style>