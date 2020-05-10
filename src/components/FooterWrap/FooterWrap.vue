<template>
  <div class="footerContainer">
      <div class="footerItem" @click="toggleNav('/home')" :class="{active:$route.path == '/home'}">
        <i class="iconfont icon-shouye"></i>
       <span>首页</span>
      </div> 
      <div class="footerItem" @click="toggleNav('/category')" :class="{active:$route.path == '/category'}">
         <i class="iconfont icon-fenlei"></i>
       <span>分类</span>
      </div>  
      <div class="footerItem" @click="toggleNav('/worthbuying')" :class="{active:$route.path == '/worthbuying'}">
        <i class="iconfont icon-iconfontzhizuobiaozhun023148"></i>
       <span>值得买</span>
      </div>  
      <div class="footerItem" @click="toggleNav('/cartlist')" :class="{active:$route.path == '/cartlist'}">
        <i class="iconfont icon-gouwuche"></i>
       <span>购物车</span>
      </div>  
      <div class="footerItem" @click="toggleNav('/personal')" :class="{active:$route.path == '/personal'}">
        <i class="iconfont icon-wodejuhuasuan"></i>
       <span>我的</span>
      </div>  
  </div>
</template>

<script>
  export default {
    methods:{
      toggleNav(path){
        // replace跳转到指定的url
        path !== this.$router.replace(path)
      }
    }
    
  }
</script>

<style lang="stylus" scoped>
  .footerContainer
    display flex
    border-top 1px solid #d9d9d9
    position fixed
    left 0
    bottom 0
    width 100%
    height 98px
    background-color #fff
    z-index 3
    .footerItem
      display flex
      flex-direction column
      text-align center
      height 100%
      width 20%
      &.active
        color red
      .iconfont
        font-size 36px
        line-height 60px
      
  

</style>