import {getIndexData, getSearchData, getCateListData, getSearchKeyWords} from '../api';
import {
    SAVE_INDEX_ALLDATA,
    SAVE_SEARCH_DATA,
    SAVE_CATE_LIST,
    SAVE_KEYWORD_LIST
} from './mutations_types';

export default {
    //获取首页的所有相关数据
    async getIndexDataAction({commit}){
        let result = await getIndexData();
        !!(result.code === 0) && commit(SAVE_INDEX_ALLDATA, result.data);
    },
    //获取搜索的数据
    async getSearchDataAction({commit}){
        let result = await getSearchData();
        commit(SAVE_SEARCH_DATA, result.data);
    },
    //获取搜索关键字的数据
    getSearchKeywordAction({commit}, keyWord){
        // console.log('关键字===',keyWord);
        let timeId = null;
        if(timeId){ clearTimeout(timeId); }
        timeId = setTimeout(async ()=>{
            let result = await getSearchKeyWords(keyWord);
            commit(SAVE_KEYWORD_LIST, result.data);
        }, 200);
       
    },
    //获取分类右侧内容数据
    // async getCateListDataAction({commit}, cateIndex){
    //     let result = await getCateListData(cateIndex);
    //     commit( SAVE_CATE_LIST, result.data);
    // }
}