<template>
  <div id="subLefttWrap">
   <ul class="navList">
      <li @click="changeNavIndex(index)"
      :class="{active: cateNavIndex === index}"
        v-for="(cateNavItem, index) in cateNavList" :key="index">
        <router-link :to="`/cateList/cateId/${cateNavItem.id}`">
          <span>{{cateNavItem.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'

export default {
    data(){
      return {
        cateNavList: [],
        cateNavIndex: 0
      }
    },
   async mounted(){
      //发送ajax请求
      let cateNavRes = await this.$API.getCateNavData();
      this.cateNavList = cateNavRes.data.categoryL1List;
      if(this.cateNavList.length){
        this.$router.push(`/cateList/cateId/${this.cateNavList[0].id}`)
      }

      this.$nextTick(()=>{
        new BScroll('.right-wrap', {
          scrollY: true,
          probeType: 2, //实时派发，但不计算惯性移动的距离
          click: true
        });
      });

    },
    methods: {
      changeNavIndex(index){
        this.cateNavIndex = index;
      }
    },
    watch: {
      cateNavList(){
        this.$nextTick(()=>{
          new BScroll('.left-wrap', {
            scrollY: true,
            probeType: 2, //实时派发，但不计算惯性移动的距离
            click: true
            });
        });
      }
    }
   

}
</script>

<style lang="stylus">
#subLefttWrap
  .navList
    padding-bottom 48px
    box-sizing border-box
    width 100%
    li
      width 100%
      height 50px
      line-height 50px
      margin-top 40px
      font-size 28px
      border-left 6px solid #fff
      box-sizing border-box
      text-align center
      >a
        color #333
      &:first-child
        margin-top 0
      &.active
        color #ab2b2b
        border-left 6px solid #ab2b2b
        box-sizing border-box
        >a
          color #ab2b2b
      span 
        display inline-block
        width 100%
        height 100%

  
 
</style>
