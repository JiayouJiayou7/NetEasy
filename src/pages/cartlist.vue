<template>
  <div id="cart-wrap">
    <div class="cart-hd">
      <span class="cart-left">购物车</span>
      <span class="cart-right">领券</span>
    </div>
    <div class="cart-defaultPage">
      <div class="service-policy">
        <ul>
          <li>
            <i class="iconfont icon-yuandianzuobiao"></i>
            <span>30天无忧退货</span>
          </li>
           <li>
            <i class="iconfont icon-yuandianzuobiao"></i>
            <span>48小时快速退款</span>
          </li>
           <li>
            <i class="iconfont icon-yuandianzuobiao"></i>
            <span>满88元免邮费</span>
          </li>
        </ul>
      </div>
      <div class="bg-login-wrap">
        <div class="cart-bg"></div>
        <div class="nocart-login">
          <span>去添加点什么吧</span>
          <router-link to="profile"><div class="login">登录</div></router-link>
        </div>
      </div>
    </div>
	</div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus">
#cart-wrap
  width 100%
  .cart-hd
    display flex
    justify-content space-between
    width 100%
    height 88px
    line-height 88px
    padding 0 30px
    box-sizing border-box
    .cart-left
      font-size 36px
      color #333
    .cart-right
      font-size 30px
      color #DD1A21
  //
  .cart-defaultPage
    width 100%
    height calc(100vh - 88px)
    background-color #f4f4f4
    .service-policy
      width 100%
      height 70px
      line-height 70px
      background-color #eee
      padding 0 30px
      box-sizing border-box
      ul
        display flex
        justify-content space-between
        width 100%
        height 100%
        li
          width 33.3333%
          height 100%
          color #666
          text-align left
          >i 
            vertical-align middle
            color #999
          &:nth-child(2)
            text-align center
          &:nth-child(3)
            text-align right
    //
    .bg-login-wrap
      width 100%
      position absolute
      left 50%
      transform translateX(-50%)
      top 465px
      .cart-bg
        width 248px
        height 248px
        margin 0 auto
        background url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp') no-repeat
        background-size cover
      .nocart-login
        width 100%
        text-align center
        >span 
          font-size 28px
          color #999
        .login
          width 480px
          height 92px
          line-height 92px
          background-color #DD1A21
          margin 50px auto 0
          font-size 30px
          color #fff


</style>
