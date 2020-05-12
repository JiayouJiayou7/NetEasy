<template>
  <div id="login-mode-wrap" v-show="ispagelogin">
    <div class="login-wrap">
      <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
    </div>
    <div class="type-wrap">
     <form>
       <div class="phone">
         
       </div>
     </form>
    </div>

  </div>
</template>

<script>
  export default {
    props:['ispage'],
    data(){
      return{
        ispagelogin:true
      }
    },
    methods:{
    }
    
  }
</script>

<style lang="stylus" scoped>

</style>