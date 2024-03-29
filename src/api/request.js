import axios from 'axios'
import store from "../store/index"
import { Message } from 'element-ui'
// import 'url-search-params-polyfill'
const instance = axios.create({
    baseURL: '/api',
    transformRequest: [function(data, headers) {
        // 对 data 进行格式转换处理
        let param = new URLSearchParams();
        for (let key in data) {
            param.append(key, data[key]);
        }
        return param
    }]
})

instance.interceptors.request.use(config => {
    if (store.state.token) {
        config.headers.Authorization = store.state.token
    }
    return config
}, function(error) {
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    if (response.status === 200) {
        // response.data = response.obj
        // store.commit('savetoken', response.data.data.token)

        return response
    } else {
        return Promise.reject(error)
    }
}, error => {
    // console.log(error.message)
    Message({
        message: '网络异常，请稍后再试！',
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default instance
