// 路由懒加载
const home = ()=> import('../pages/home.vue')
const category = ()=> import('../pages/category.vue')
const worthbuying = ()=> import('../pages/worthbuying.vue')
const cartlist = ()=> import('../pages/cartlist.vue')
const personal = ()=> import('../pages/personal.vue') 
export default [
  {
    path:'/home',
    component:home,
  },
  {
    path:'/category',
    component:category,
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
    path:'',
    redirect:'/home',
  }
]
                 