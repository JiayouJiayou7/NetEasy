<template>
  <div id="App">
    <router-view></router-view>
    <FooterWrap></FooterWrap>
  </div>
</template>

<script>
import FooterWrap from './components/FooterWrap/FooterWrap'
  export default {
    name: 'App',
    components:{
      FooterWrap
    }
  }
</script>

<style lang="stylus" scoped>

</style>
