import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ProductDetail from '@/components/productdetail/ProductDetail'
import DetailPage from '@/components/detailpage/DetailPage'
import Comment from '@/components/comment/Comment'
import ShopCart from '@/components/shopcart/ShopCart'
import MyOrder from '@/components/myorder/MyOrder'
import Register from '@/components/register/Register'
import BackStage from '@/components/backstage/BackStage'
Vue.use(Router)

export default router
const routes = [{
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
        }

    },


]
const router = new VueRouter({
    routes
})
router.beforeEach()