import axios from 'axios'
import store from "../store/index"
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
        // store.state.token = response.data.body.token
        return response.data
    } else {
        return Promise.reject(error)
    }
})

export default instance