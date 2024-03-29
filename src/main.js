// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import '../static/css/index.css'
import '../static/css/login.css'
import '../static/css/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import 'url-search-params-polyfill'
import Axios from 'axios'
import store from './store/index'
import Vuex from "vuex"
import Router from 'vue-router'
// import 'bootstrap/dist/css/bootstrap.min.css'
Vue.use(Vuex)
Vue.use(Router)
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$axios = Axios;
// 跨域相关
// Axios.defaults.baseURL = "/api"


Vue.prototype.msgSuccess = function (msg) {
    this.$message.success(msg)
}


Vue.prototype.msgInfo = function (msg) {
    this.$message.info(msg)
}

Vue.prototype.resetForm = function (refName) {
	if (this.$refs[refName]) {
		this.$refs[refName].resetFields()
	}
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    store,
    components: {
        App
    },
    template: '<App/>'
})