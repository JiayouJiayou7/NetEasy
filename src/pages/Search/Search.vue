<template>
  <div id="searchWrap">
    <!-- 头部搜索 -->
    <div class="header-search-login">
        <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <input 
              v-model="keyWord" 
              @keyup.enter="addHistoryData"
              class="placeholder" type="search"  
              v-if="searchAllDataObj.defaultKeywords" 
              :placeholder="searchAllDataObj.defaultKeywords[defaultIndex].keyword" 
            />
            <!-- <i class="iconfont icon-xiaochax"></i> -->
        </div>
        <div class="cancel" @click="handleCancel">取消</div>
    </div>
    <!-- 下拉显示层 -->
     <div class="search-layer-wrap" v-if="keyWord">
        <ul class="search-layer">
          <li class="search-layer-item" v-for="(item, index) in SearchKeyWordsList" :key="index">{{item}}</li>
        </ul>
     </div>
    <!-- 遮罩层容器-->
    <div class="content-wrap" v-else>
      <!-- 历史记录 -->
      <div class="history-record">
        <div class="nav-title">
          <span>历史记录</span>
          <i @click="handleClear" class="iconfont icon-lajitong-copy"></i>
        </div>
        <div class="more-cate">
          <ul class="cate-list" >
            <HistoryItem v-for="(todo, index) in todos" :key="todo.id" :inde="index" :todo="todo"/>
          </ul>
        </div>
      </div>
      <!-- 热门搜索 -->
      <div class="content-top">
        <div class="nav-title">
          热门搜索
        </div>
        <div class="more-cate">
          <ul class="cate-list" v-if="searchAllDataObj">
            <li v-for="(keyWordsItem, index) in searchAllDataObj.hotKeywordVOList" :key="index">
              <span>{{keyWordsItem.keyword}}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- toggleIsShowcontent -->
      <div class="content-bottom"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex";
import HistoryItem from "./HistoryItem/HistoryItem";
  export default {
    components: {HistoryItem},
    data(){
        return {
          defaultIndex: 0,//标识搜索关键字的默认下标值
          keyWord: '', 
          todos: []
        }
    },
    mounted(){
      //发送ajax请求
      this.$store.dispatch('getSearchDataAction');
      
      //生成随机默认关键字的索引值,当获取焦点，跳转到搜索页面，页面挂载时发送请求
      if(this.searchAllDataObj.defaultKeywords){
        // console.log(this.searchAllDataObj.defaultKeywords)
        let dfKeywordsListLength = this.searchAllDataObj.defaultKeywords.length;
        let rdIndex = Math.floor(Math.random()*dfKeywordsListLength + 1);
        // console.log(rdIndex);
        this.defaultIndex = rdIndex;
      }
      //在页面挂载时，查看localStorage中是否有数据
      // let localTodoList = this.$evBus.readTodos;
      let localTodoList = JSON.parse(localStorage.getItem('todos_key') || '[]');
      if(localTodoList.length){
        this.todos = localTodoList;
      }
      
    },
    methods: {
        //取消 事件回调处理
        handleCancel(){
          // console.log(this.$route);
          let id = this.$route.query.from;
          if(id === 'cateId'){
            this.$router.push({path: 'cateList'});
          }else if(id === 'topicId'){
            this.$router.push({path: 'topic'});
          }else if(id === 'loginId'){
            this.$router.push({path: 'profile'});
          }else{
            this.$router.push({path: 'home'});
          }
          
            
        },
        //添加历史记录
        addHistoryData(){
            // 根据输入的keyWord封装一个todo对象
            const keyWord = this.keyWord.trim();
            // 如果没有正常输入, 不添加
            if (!keyWord) return
            const todo = {
              id: Date.now(),
              keyWord
            };
            //
            let todoList = this.todos;
            // if(todoList.length){
            //    todoList = todoList.filter(item => item.keyWord !== todo.keyWord);
            // }
            // let res = todoList.filter(item => item.keyWord !== todo.keyWord);
            // console.log('=====',res);
            todoList.unshift(todo);
            localStorage.setItem('todos_key', JSON.stringify(todoList));
           
            // 清除输入
            this.keyWord = '';
        },
        //清空历史记录
        handleClear(){
          this.todos = [];
        }
    },
    computed: {
      ...mapState({
        searchAllDataObj: state => state.searchAllDataObj,
        SearchKeyWordsList: state => state.SearchKeyWordsList,
      })
    },
    watch: {
      keyWord(){
        this.$store.dispatch('getSearchKeywordAction', this.keyWord);
      }
    }
  }
</script>

<style lang="stylus">
#searchWrap
  // 头部搜索部分
  .header-search-login 
    display flex
    width 100%
    height 90px
    padding 20px
    box-sizing border-box
    background-color #fff
    .searchInput 
        width 90%
        height 60px
        background #ededed
        position relative
        margin 0 15px
        border-radius 10px

        .iconfont 
            font-size 30px
            position absolute
            left 10px
            top 25%

        input 
            border-radius 10px
            height 60px
            width 90%
            background #ededed
            font-size 28px
            margin-left 50px
            outline none
        input[type=search]::-webkit-search-cancel-button
          -webkit-appearance none  //此处去掉默认的小×
          width 50px
          height 50px
          border-radius 50%
          background-size cover

    .cancel 
        width 10%
        height 40px
        line-height 40px
        font-size 28px
        text-align center
        margin-top 10px

  //下拉显示层
  .search-layer-wrap
    width 100%
    height calc(100vh - 90px)
    position fixed 
    bottom 0
    left 0
    z-index 100
    background-color #eee
    .search-layer
      width 100%
      padding 30px 0 0 30px
      box-sizing border-box
      background-color #fff
      .search-layer-item
        position relative
        width 100%
        height 104px
        font-size 28px
        color #333
        line-height 104px
        border-bottom 1px solid #d9d9d
        &:last-child
          border-bottom none

        

  //搜索内容区域
  .content-wrap
    width 100%
    height calc(100vh - 90px)
    position fixed 
    bottom 0
    left 0
    z-index 100
    background-color #eee 
    //历史记录
    .history-record
      width 100%
      padding 0 30px 30px
      margin-bottom 20px
      box-sizing border-box
      background-color #fff
      >.nav-title
        width 100%
        height 90px
        line-height 90px
        font-size 28px
        color #999
        >i
          float right
          color #333
      .more-cate
        width 100%
        background-color #fff
        .cate-list
          width 100%
          overflow hidden
          li
            float left 
            // width 150px
            height 56px
            padding 0 15px
            line-height 56px
            margin 0 32px 32px 0
            border 1px solid #ccc
            span
              display block
              height 100%
              text-align center
              //文本超过最大宽度显示省略号
              max-width 275px
              text-overflow ellipsis
              overflow hidden
              white-space nowrap

    //热门搜索
    .content-top
      width 100%
      >.nav-title
        width 100%
        height 60px
        line-height 60px
        font-size 28px
        padding-left 30px
        color #999
        box-sizing border-box
        background-color #fff
      .more-cate
        padding-top 24px
        width 100%
        background-color #fff
        .cate-list
          width 100%
          overflow hidden
          li
            float left 
            // width 150px
            height 56px
            padding 0 15px
            line-height 56px
            margin-left 30px
            margin-bottom 40px
            border 1px solid #ccc
            &:nth-child(1), &:nth-child(4)
              color #DD1A21
              border 1px solid #DD1A21
            &.active
              color $mainColor
              border 1px solid $mainColor
            span
              display block
              width 100%
              height 100%
              text-align center
    .content-bottom
      width 100%
      height 100%
      // background-color red
    
 
</style>
