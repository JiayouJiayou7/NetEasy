<template>
  <div id="personalwrap">
    <div class="topbar">
      <router-link to="home">
        <div class="home">
          <i class="iconfont icon-shouye"></i>
        </div>
      </router-link>
       <div class="logo">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </div>
      <div class="right">
        <router-link to="Search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link to="cartlist">
        <i class="iconfont icon-gouwuche"></i>
      </router-link>
      </div>
    </div>
  <div class="login-types" v-if="!isShowLogin">
    <div class="cont">
      <div class="login-wrap">
        <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
      </div>
      <div class="btn-wrap">
        <div class="mobile-btn">
          <i class="iconfont icon-iconzhengli_shouji"></i>
          <span>手机登录</span>
        </div>
        <div class="email-btn">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱登录</span>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isShowLogin:false
      }
    }
    
  }
</script>

<style lang="stylus">
  #personalwrap
    .topbar
      position relative
      width 100%
      height 100px
      line-height 100px
      display flex
      align-items center
      justify-content space-between
      padding 0 24px
      box-sizing border-box
      border-bottom 1px solid #eee
      .home
        i
          font-size 48px
      .logo
      // 加margin图片不居中
        position absolute
        left 50%
        top 50%
        transform translate(-50%,-50%)
        img
          width 172px
          height 54px
      .right
        i
         font-size 50px
         &:first-child
           margin-right 30px
    .login-types
      width 100%
      height calc(100vh - 100px)
      background-color #F2F5F4
      .cont
        width 100%
        .login-wrap
          width 100%
          height 90px
          text-align center
          padding 232px 0
          img
           width 268px
           height 100%
           display inline-block
        .btn-wrap
          width 100%
          padding 0 40px
          box-sizing border-box
          margin-bottom 350px
          .mobile-btn, .email-btn
            width 100%
            height 92px
            line-height 92px
            text-align center
            color #DD1A21
            border 1px solid #DD1A21
            .iconfont
              font-size 34px
              margin-right 10px
              vertical-align middle
            span 
             vertical-align middle
            &.active
              background-color #DD1A21
              color #fff
          .mobile-btn
            margin-bottom 32px
     
        

</style>