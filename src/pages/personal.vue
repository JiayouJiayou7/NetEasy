<template>
  <div id="login-wrap">
    <div class="top-bar">
      <router-link to="home">
        <div class="home">
          <i class="iconfont icon-shouye"></i>
        </div>
      </router-link>
      <div class="title-logo">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="" />
      </div>
      <router-link to="cartlist">
        <div class="right">
        <i @click="handleClickSkip" class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
      </router-link>
    </div>
    <div v-if="!isShowLogin" class="login-type">
      <div class="login-container">
        <div class="logo-wrap">
          <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
        </div>
        <div class="btn-wrap">
          <div class="btn1 active" @click="handleLogin(1)">
            <i class="iconfont icon-shouji"></i>
            <span>手机快捷登录</span>
          </div>
          <div class="btn2" @click="handleLogin(2)">
            <i class="iconfont icon-icon"></i>
            <span>邮箱账号登录</span>
          </div>
        </div>
      </div>
      <div class="third-login">
        <ul>
          <li>
            <span>
              <i class="iconfont icon-icon4"></i>
              <span>微信</span>
            </span>
          </li>
           <li>
            <span>
              <i class="iconfont icon-qq"></i>
              <span>QQ</span>
            </span>
          </li>
           <li>
            <span>
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <login @func="getMsgFormSon" :modeFlag="modeFlag" v-else/>
  </div>
</template>

<script type="text/ecmascript-6">
import login from '../components/login/login';
  export default {
    components: {login},
    data(){
      return {
        isShowLogin: false,
        modeFlag: 1
      }
    },
    methods: {
      handleLogin(flag){
        this.isShowLogin = true;
        this.modeFlag =(flag === 1) ? flag : flag;
      },
     //获取子组件传递给父组件的数据
      getMsgFormSon(data){
        this.isShowLogin = data;
      },
     //搜索获取焦点
      handleClickSkip(){
        //跳转页面
        this.$router.push({
          path: 'search',
          query: {from: 'loginId'}
        });
      }
    }
  }
</script>

<style lang="stylus" scoped>
#login-wrap
  .top-bar
    position relative
    display flex
    justify-content space-between
    width 100%
    height 100px
    text-align center
    line-height 100px
    padding 0 24px
    box-sizing border-box
    font-size 36px
    border-bottom 1px solid #eee
    .home
      >i 
        font-size 48px
    .title-logo
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      width 172px
      height 54px
      >img 
        width 100%
        height 100%
    .right
      >i 
        font-size 50px
        &:first-child
          margin-right 30px
  //
  .login-type
    width 100%
    height calc(100vh - 100px)
    background-color #F2F5F4
    .login-container
      width 100%
      .logo-wrap
        width 100%
        height 90px
        text-align center
        padding 232px 0
        >img 
          width 268px
          height 100%
          display inline-block
      .btn-wrap
        width 100%
        box-sizing border-box
        padding 0 40px
        margin-bottom 350px
        .btn1, .btn2
          width 100%
          height 92px
          font-size 28px
          text-align center
          line-height 92px
          color #DD1A21
          border 1px solid #DD1A21
          >.iconfont
            font-size 34px
            margin-right 10px
            vertical-align middle
          >span 
            vertical-align middle
          &.active
            background-color #DD1A21
            color #fff
        .btn1 
          margin-bottom 32px
          
    //第三方登录方式
    .third-login
      width 100%
      padding 0 100px
      box-sizing border-box
      >ul
       display flex
       justify-content space-around
       >li
        padding 0 40px
        color #7F7F7F
        font-size 28px
        text-align center
        &:nth-child(2)
          border-left 1px solid #979797
          border-right 1px solid #979797
        span 
          >.iconfont
            margin-right 8px
            vertical-align middle
          >span 
            vertical-align middle

 
</style>
