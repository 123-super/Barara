import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ProductDetail from '@/components/productdetail/ProductDetail'
import DetailPage from '@/components/detailpage/DetailPage'
import Comment from '@/components/comment/Comment'
import ShopCart from '@/components/shopcart/ShopCart'
import MyOrder from '@/components/myorder/MyOrder'
import Register from '@/components/register/Register'
import BackStage from '@/components/backstage/BackStage'
import Account from "@/components/account/Account"
import Pay from '@/components/pay/Pay'
Vue.use(VueRouter)



const router = new VueRouter({
        routes: [{
                path: '/',
                redirect: '/login'
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
                children: [{
                    path: '/detailpage',
                    component: DetailPage
                }, {
                    path: '/comment',
                    component: Comment

                }]
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
                component: Pay
            }
        ]
    })
    // router.beforeEach((to, from, next) => {
    //     if (to.meta.needLogin) {
    //         if (sessionStorage.getItem()) {
    //             next()
    //         } else {
    //             next({
    //                 path: '/',
    //                 // query: {
    //                 //     redirect: to.fullPath
    //                 // } //将该路由path传入login页面，登陆成功后跳转到该页面
    //             })
    //         }
    //     } else {
    //         next()
    //     }
    // })
export default router