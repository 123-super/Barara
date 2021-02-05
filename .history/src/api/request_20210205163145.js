import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080/MakeUpShop',
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