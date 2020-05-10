// 路由懒加载
const home = ()=> import('../pages/home.vue')
const CateList = ()=> import('../pages/CateList/CateList')
const worthbuying = ()=> import('../pages/worthbuying.vue')
const cartlist = ()=> import('../pages/cartlist.vue')
const personal = ()=> import('../pages/personal.vue')
const Search = ()=> import('../pages/Search/Search')
const SubRightCateList = ()=> import('../pages/CateList/SubRightCateList/SubRightCateList');
export default [
  {
    path:'/home',
    component:home,
  },
  {
    path:'/cateList',
    component:CateList,
    children: [
      {
          path: '/cateList/cateId/:id',
          component: SubRightCateList,
      }
  ]
  },
  {
    path:'/worthbuying',
    component:worthbuying,
  },
  {
    path:'/cartlist',
    component:cartlist,
  },
  {
    path:'/personal',
    component:personal,
  },
  {
    path:'/Search',
    component:Search,
  },
  {
    path:'',
    redirect:'/home',
  }
]
                 