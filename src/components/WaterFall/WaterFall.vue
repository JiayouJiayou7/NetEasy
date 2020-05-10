<template>
  <div id="waterfall-wrap">
    <waterfall
     :data="LazyLoadList"
     :col='col'
     :width="waterfallwidth"
     :gutterWidth="wfGutterWidth"
     @scroll="scroll"
     @loadmore="loadmore"
    >
    <template>
       <div class="cell-item" v-for="(item,index) in LazyLoadList" :key="index">
         <img :src="item.picUrl" alt="加载错误">
         <div class="item-body">
           <div class="item-desc">{{item.title}}</div>
           <div class="item-footer">
             <div class="avatar"
             :style="{backgroundImage : `url(${item.avatar})` }"
             v-if="item.avatar"
             ></div>
            <div class="name">{{item.nickname}}</div>
            <div class="like">
               <i class="iconfont icon-iconfontzhizuobiaozhun023148"></i>
               <div class="like-total">10k</div>  
           </div>
         </div>
      </div>
      </div>
    </template>
    </waterfall>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        LazyLoadList:[],
        col:2,
        waterfallwidth:172,
        wfGutterWidth:8,
        page:0,
        size:3
      }
    },
       methods: {
      loadmore(){
        
      },
        scroll(scrollData){
        let minScrollTop = scrollData.clientHeight;
        if(this.timeId) clearTimeout(this.timeId)
        this.timeId = setTimeout(async () => {
          this.page++;
          if(scrollData.scrollTop >= minScrollTop){
            let lazyLoadRes = await this.$API.getWaterFallLazyLoad(this.page, 3);
            let lazyRes = lazyLoadRes.data.result.reduce((preArr, itemObj)=>{
              preArr.push(...itemObj.topics);
              return preArr;
            }, []);
            if(this.page >= 1){
              this.LazyLoadList.push(...lazyRes);
            }
          }
        }, 100);
      }
    },
    async mounted(){
      let res = await this.$API.getWaterFallData()
      this.LazyLoadList = res.data.reduce((preArr,itemObj)=>{
      preArr.push(...itemObj.topics);
      return preArr
    },[])
    }
  }
</script>

<style lang="stylus" scoped>
  #waterfall-wrap
    width 100%
    height 5000px
    background-color #eee
    padding 30px 20px 0
    box-sizing border-box
    .cell-item
      width 100%
      background #fff
      border 2px solid  #f0f0f0
      border-radius 12px
      margin-bottom 20px
      overflow hidden
      >img 
        width 100%
        height 100%
        display block
    .item-body
      .item-desc
        padding 18px 16px 0
        font-size 28px
        color #333
        line-height 38px
        text-align justify
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
      .item-footer
        margin-top 22px
        padding 0 16px 24px
        position relative
        display flex
        align-items center
        .avatar
          width 44px
          height 44px
          border-radius 50%
          background-repeat no-repeat
          background-size contain
        .name
          max-width 240px
          text-overflow ellipsis
          overflow hidden
          white-space nowrap
          margin-left 10px
          font-size 14px
          color #999
        .like
          position absolute
          right 0
          padding-right 15px
          display flex
          align-items center
</style>