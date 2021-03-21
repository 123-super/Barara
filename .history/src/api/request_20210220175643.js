import axios from 'axios'
// import 'url-search-params-polyfill'
const instance = axios.create({
    baseURL: 'http://localhost:8080/yqdevelopment',
    transformRequest: [function(data, headers) {
        // 对 data 进行格式转换处理
        let param = new URLSearchParams();
        for (let key in data) {
            param.append(key, data[key]);
        }
        return param
    }]
})

export default instance