<template>
  <div class="container">
    <!-- 头部 -->
    <div class="header">
      <!-- 头部搜索框 -->
      <div class="header-search">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" class="logo">
        <div class="searchinput">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="搜索商品, 共20868款好物" @focus="handleFocus">
        </div>
        <button class="login" @click="ToPersonal">登录</button>
      </div>
      <!-- 头部导航 -->
     
      <div class="nav-list" ref="navlist">
        <ul>
          <li v-for="(navItem,index) in indexCateModule" 
          @click="changeNavIndex(index)"
          :key="index" 
          :class="{active: navIndex === index}">
            <span>{{navItem.name}}</span>
          </li>
        </ul>
      </div>
    </div>
     <div class="content-wrap">
       <!-- 轮播图 -->
     <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focusItem, index) in focusList" :key="index">
            <img :src="focusItem.picUrl"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <ul class="policy-service">
        <li v-for="(policyItem, index) in policyDescList" :key="index">
          <img :src="policyItem.icon" class="icon">
          <span>{{policyItem.desc}}</span>
        </li>
      </ul>
      <!-- 商品列表导航 -->
      <div class="shoplist-nav">
        <ul>
          <li v-for="(listItem,index) in kingKongList" :key="index">
            <img :src="listItem.picUrl">
            <span>{{listItem.text}}</span>
          </li>
        </ul>
      </div>
      <!-- 新人专享 -->
      <div class="freshman-module">
        <div class="moudle-title">
          <span>新人专享礼</span>
        </div>
        <div class="content">
          <div class="content-left">
            <div class="font-wrap">
               <div class="name">新人专享礼包</div>
            </div>
          <div class="img-wrap">
            <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" />
          </div>
          </div>
         <div class="content-right">
           <div class="module-1">
             <div class="small-title">
               <span class="title">福利社</span>
               <span class="subtitle">今日特价</span>
             </div>
             <div class="small-img">
               <div class="discount">
                 <span class="price">￥80</span>
                 <span class="price1"><del>￥125</del></span>
               </div>
               <img src="https://yanxuan-item.nosdn.127.net/967cc4d8140d27299cc1bc4d20294df7.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
             </div>
           </div>
           <div class="module-2">
              <div class="small-title">
               <span class="title">新人拼团</span>
               <span class="subtitle">1元起包邮</span>
             </div>
              <div class="small-img">
               <div class="discount">
                 <span class="price">￥9.9</span>
                 <span class="price1"><del>￥16.9</del></span>
                 </div>
             </div>
           </div>
         </div>
        </div>
      </div>
      <!-- 热销榜 -->
      <div class="category-hotSell-module">
      <div class="hotSell-module-title"><span>类目热销榜</span></div>
      <div class="hotSell-module-content">
        <div class="content-top">
          <div class="content-top-left">
            <div class="text">
              <span>热销榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/db4a9cbd2bdfed303e2536db8b40fe33.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
          <div class="content-top-right">
             <div class="text">
              <span>好评榜</span>
            </div>
            <div class="img-wrap">
              <img src="https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
            </div>
          </div>
        </div>
        <div class="content-bottom">
          <ul>
            <li v-for="(categoryItem, index) in categoryList" :key="index">
              <div class="title"><span>{{categoryItem.categoryName}}</span></div>
              <div class="img-wrap">
               <img :src="categoryItem.showPicUrl" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
     </div>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import {mapState} from "vuex";
  export default {
    data(){
      return{
        navIndex:0
      }
    },
     async mounted(){
       this.$store.dispatch('getIndexDataAction')
       this.$nextTick(() => {
      //创建BScroll实例对象
      new BScroll('.nav-list', {
        scrollX: true,
        probeType: 2,
        click: true
      });
    });
        
       
    },
    methods:{
      changeNavIndex(index){
        this.navIndex = index
      },
      ToPersonal(){
        this.$router.push({path:'personal'})
      },
      handleFocus(){
      this.$router.push({
        path: 'search',
        query: {from: 'msiteId'}
      });
      
    }
    },
    computed: {
      ...mapState({
      indexCateModule: state => state.indexCateModule,
      focusList: state => state.focusList,
      policyDescList: state => state.policyDescList,
      kingKongList: state => state.kingKongList,
      categoryList: state => state.categoryList,
      })
     },
    watch: {
    indexCateModule(){
        this.$nextTick(() => {
        //创建Swiper实例对象
        new Swiper(".swiper-container", {
          loop: true,
          //分页器
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      });
    }
  }
  }
</script>

<style lang="stylus">
// 头部搜索
  .container
    width 100%
    margin-bottom 100px
    background-color #eee
    overflow hidden
    .header
      position fixed
      left 0
      top 0 
      width 100%
      z-index 2
      .header-search
        display flex
        width 100%
        height 90px
        padding 20px
        box-sizing border-box
        background-color #fff
        .logo
          width 140px
          height 40px
          margin 10px 0 0 15px
      .searchinput
        width 440px
        height 60px
        background #ededed
        position relative
        margin 0 15px
        border-radius 10px
        .iconfont
          position absolute
          font-size 30px
          left 10px
          top 25%
        input 
          border-radius 10px
          height 60px
          width 390px
          background #ededed
          margin-left 50px
          outline none

      .login
        width 84px
        height 40px
        line-height 40px
        color #b4282d
        background white
        text-align center
        border 1px solid #b4282d
        margin-top 10px
        border-radius 10px
        // 头部导航
      .nav-list
        width 100%
        height 60px
        line-height 60px
        font-size 28px
        background-color #fff
        >ul
          width 1580px
          padding-left 30px
          display flex
          li
           position relative
           padding 0 16px
           height 60px
           padding 0 28px
           white-space nowrap
           &.active
             color red
             span 
               &::after
                content ''
                display block
                position absolute
                left 0
                bottom 0
                width 100%
                height 4px
                background-color red

                // 轮播图
    .swiper-container
      width 100%
      height 370px
      margin-top 150px
      position relative
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          >img 
            display inline-block
            width 100%
            height 100%
      .swiper-pagination
        position absolute
        bottom 35px
        .swiper-pagination-bullet
          width 40px
          height 4px
          background-color red
    .policy-service
      width 100%
      height 72px
      padding 0 30px
      background-color #fff
      box-sizing border-box
      display flex
      li
       display flex
       width 33%
       height 100%
       text-align center
       line-height 72px
       .icon
         width 32px
         height 32px
         vertical-align center
         margin 20px 5px 0
    // 商品列表导航
    .shoplist-nav
      width 100%
      height 340px
      padding-bottom 32px
      background-color #fff
      ul
       width 100%
       height 100%
       li
         display flex
         flex-direction column
         align-items center
         width 20%
         height 156px
         float left 
         img
           width 110px
           height 110px
           border-radius 30px
         span 
           margin-top 10px   
    .freshman-module
      width 100%
      padding 0 30px 30px 30px
      box-sizing border-box
      background-color #fff
      margin 20px 0
      .moudle-title
        width 100%
        height 90px
        color #333
        font-size 32px
        text-align center
        line-height 90px
        span
          position relative
          &::before,&::after
             content ''
             width 30px
             height 4px
             display block
             position absolute
             background-color #333
             left -48px
             top 50%
          &::after
            left auto
            right -48px
      .content
        display flex
        width 100%
        >div
          width 50%
          height 434px
        .content-left
          background-color #F9E9CF
          margin-right 5px
          border-radius 5px
          .font-wrap
            width 100%
            font-size 32px
            padding 40px 0 0 40px
            box-sizing border-box
          .img-wrap
            width 100%
            height 258px
            margin-top 45px
            position relative
            img 
              width 258px
              height 258px
              position absolute
              left 50%
              top 0
              transform translate(-50%)
      .content-right
        >div
          width 100%
          height 215px
          border-radius 5px
          box-sizing border-box
          overflow hidden    
        .module-1,.module-2
          position relative
          padding 20px 0 0 30px
          margin-bottom 5px
          background-color #FBE2D3        
          .small-title
            display flex
            flex-direction column
            span
              line-height 40px
             .title
               font-size 25px
             .subtitle  
               font-size 20px
               color #7F7F7F
          .small-img
            position absolute
            right -20%
            top 0
            width 200px
            height 200px
            padding-top 20px
            .discount
              width 80px
              height 80px
              background-color #f59524
              border-radius 50%
              right 30px
              top 15px
              z-index 3
              >span 
                position absolute
                left 10px
                color #fff
              .price
                font-size 20px
                top 40px

              .price1
                font-size 20px
                top 60px
            img
              position absolute
              left -50%
              top 18%
              width 200px
              height 200px  
        .module-2
          background-color #FFECC2
    .category-hotSell-module
      width 100%
      padding 0 30px 20px
      box-sizing border-box
      background-color #fff
      .hotSell-module-title
        width 100%
        height 100px
        line-height 100px
        font-size 32px
    
      .hotSell-module-content
        width 100%
        .content-top
          display flex
          width 100%
          height 200px
          >div
            width 50%
            height 100%
            border-radius 5px
          .content-top-left, .content-top-right
            display flex
            width 50%
            background-color #f9f3e4
            padding-left 20px
            line-height 150px
            margin 0 10px 10px 0
            >div
              width 50%
              height 100%
            .text
              position relative
              font-size 28px
              &::after
                content ''
                display block
                position absolute
                left 0
                top 50%
                margin-top 10px
                width 48px
                height 4px
                background-color #666
            .img-wrap
              width 100%
              height 100%
              img 
                width 100%
                height 100%
          .content-top-right
            background-color #ebeff6
            margin-right 0
        .content-bottom
          margin-top 10px
          width 100%
          ul
           width 100%
           overflow hidden
           box-sizing border-box
           li
            position relative
            width 165px
            height 180px
            float left
            border-radius 5px
            background-color #f5f5f5
            margin 0 10px 10px 0
            &:nth-child(4), &:nth-child(8)
              margin-right 0
            .title
              width 100%
              height 36px
              font-size 24px
              text-align center
              line-height 36px
              padding-top 10px
            .img-wrap 
              position absolute
              left 50%
              transform translateX(-50%)
              top 50px
              width 120px
              height 120px
              text-align center
              img 
                width 100%
                height 100%


</style>