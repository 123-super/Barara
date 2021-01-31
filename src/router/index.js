import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ProductDetail from '@/components/productdetail/ProductDetail'
import DetailPage from '@/components/detailpage/DetailPage'
import Comment from '@/components/comment/Comment'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/productdetail'
        },
        {
            path: '/login',
            component: Login
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
            path: '/home',
            component: Home,

        },

    ]
})