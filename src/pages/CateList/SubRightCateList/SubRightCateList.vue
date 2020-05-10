<template>
  <div id="subRightWrap">
    <div class="sub-content">
      <div class="banner">
        <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png?quality=75&type=webp&imageView&thumbnail=0x196" alt="">
      </div>
      <div class="cate-list" v-if="cateRightObj">
        <ul v-if="cateRightObj.categoryList">
          <li v-for="(cateItem, index) in cateRightObj.categoryList" :key="index">
            <div class="cate-img">
              <img :src="cateItem.wapBannerUrl" alt="">
            </div>
            <div class="cate-text">{{cateItem.name}}</div>
          </li>
        </ul>
        <ul v-if="cateRightObj.subCateList">
          <li v-for="(cateItem, index) in cateRightObj.subCateList" :key="index">
              <div class="cate-img">
                <img :src="cateItem.wapBannerUrl" alt="">
              </div>
              <div class="cate-text">{{cateItem.name}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data(){
    return {
      cateRightObj: {},
      cateRightList: []
    }
  },
  async mounted(){
    let res = await this.$API.getCateListData();
    this.cateRightList = res.data;
    //根据路由参数查询对应的对象 filter find
    this.cateRightObj = this.cateRightList.find(item => item.id === this.$route.params.id*1);
  },
  watch: {
    $route(){
      this.cateRightObj = this.cateRightList.find(item => item.id === this.$route.params.id*1)
    }
  }
}
</script>

<style lang="stylus">
#subRightWrap
  .sub-content
    width 100%
    .banner
      width 528px
      height 192px
      >img 
        width 100%
        height 100%
    .cate-list
      margin-top 30px
      width 100%
      >ul
        // display flex
        // flex-wrap wrap
        width 100%
        overflow hidden
        // box-sizing border-box
        >li
          width 144px
          height 216px
          margin-right 47px
          float left
          &:nth-child(3n)
            margin-right 0
          .cate-img
            width 100%
            height 144px
            >img 
              width 100%
              height 100%
          .cate-text
            width 100%
            height 72px
            font-size 24px
            text-align center
            line-height 40px

            

  
 

 
</style>
