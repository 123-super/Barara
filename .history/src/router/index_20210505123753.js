import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ProductDetail from '@/components/productdetail/ProductDetail'
import Comment from '@/components/comment/Comment'
import ShopCart from '@/components/shopcart/ShopCart'
import MyOrder from '@/components/myorder/MyOrder'
import Register from '@/components/register/Register'
import BackStage from '@/components/backstage/BackStage'
import Account from "@/components/account/Account"
import Pay from '@/components/pay/Pay'
import store from "../store/index"
Vue.use(VueRouter)



const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/backstage',
      component: BackStage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/myorder',
      component: MyOrder,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/productdetail',
      component: ProductDetail,
    },
    {
      path: '/comment',
      component: Comment,
      meta: {
        needLogin: true
      }
    },
    {
      path: '/shopcart',
      component: ShopCart,
      meta: {
        needLogin: true
      },
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay,
      meta: {
        needLogin: true
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        } //将该路由path传入login页面，登陆成功后跳转到该页面
      })
    }
  } else {
    next()
  }
})
export default router
