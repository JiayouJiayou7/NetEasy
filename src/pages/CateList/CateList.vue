<template>
  <div id="cateListWrap">
    <!-- 头部搜索 -->
    <div class="header-search-login">
        <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <input @focus="handleFocus" class="placeholder" type="text" placeholder="搜索商品, 共20868款好物" />
        </div>
    </div>
    <!-- 商品列表区域 -->
    <div class="good-wrap">
      <div class="left-wrap">
        <SubLeftCateList />
      </div>
      <div class="middle-line"></div>
      <div class="right-wrap"><!-- 容器 -->
        <div class="right-content">
          <!-- <SubRightCateList :cateNavList="cateNavList"/> -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SubLeftCateList from './SubLeftCateList/SubLeftCateList'

  export default {
    components: {SubLeftCateList},
    methods: {
      //搜索获取焦点
      handleFocus(){
        //跳转页面
        this.$router.push({
          path: '/search',
          query: {from: 'cateId'}
        });
      }
    
    }
   
  }
</script>

<style lang="stylus" >
@import '../../common/stylus/mixins.styl';
#cateListWrap
  // 头部搜索部分
  .header-search-login 
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color #fff
    
    .searchInput 
        width 100%
        height 60px
        text-align center
        background #ededed
        position relative
        margin 0 15px
        border-radius 10px

        .iconfont 
            font-size 30px
            position absolute
            left 10px
            top 25%

        input 
            border-radius 10px
            height 60px
            width 390px
            background #ededed
            font-size 28px
            margin-left 50px
            outline none
  //商品列表区域
  .good-wrap
    display flex
    width 100%
    height 100%
    border-top 1px solid #eee
    margin-top 5px
    //左侧
    .left-wrap
      width 162px      
      height calc(100vh - 250px)
      margin 40px 0 30px 0
      overflow hidden
      // border-right 1px solid #eee
      //navList
    //中间修饰线条
    .middle-line
      width 2px
      height calc(100vh)
      background-color #eee
    //右侧
    .right-wrap
      width calc(100vw - 163px)
      height calc(100vh - 250px)
      margin-top 30px
      overflow hidden
      .right-content
        width 100%
        min-height calc(100vh - 249px)
        padding 0 30px 30px
        box-sizing border-box
        //.sub-content区域
</style>
