<template>
  <div>
    {{num}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState({
        num:state => state.index.num
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>