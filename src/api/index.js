import myAxios from './myAxios';

//获取主页推荐对应的数据
export const getIndexData = ()=> myAxios({
    method: 'GET',
    url: '/api/getIndex'
});

//搜索界面初始化显示数据
export const getSearchData = ()=> myAxios({
    method: 'POST',
    url: '/myou/xhr/search/init.json'
});

//关键字搜索接口
export const getSearchKeyWords = (keywordPrefix)=> myAxios({
    method: 'POST',
    url: '/myou/xhr/search/searchAutoComplete.json',
    data: {
        keywordPrefix
    }
});

//获取分类左侧导航数据
export const getCateNavData = ()=> myAxios({
    url: '/api/getCateNavData'
});

//获取分类右侧内容数据
export const getCateListData = (cateIndex)=> myAxios({
    url: '/api/getCateListData',
    params: {
        cateIndex
    }
});

//值得买Nav接口
export const getTopicNavData = ()=> myAxios({
    url: '/myou/topic/v1/know/navWap.json'
});

//获取瀑布流-首屏数据
export const getWaterFallData = ()=> myAxios({
    url: '/myou/topic/v1/find/recManual.json'
});

//瀑布流-触底加载接口
export const getWaterFallLazyLoad = (page, size)=> myAxios({
    url: '/myou/topic/v1/find/recAuto.json',
    params: {
        page,
        size
    }
});
