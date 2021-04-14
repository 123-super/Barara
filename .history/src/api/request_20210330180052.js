import axios from 'axios'
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

service.interceptors.response.use(response => {
    const res = response.data

    const code = res.code
    if (code === RESP_STATUS.unauth) {
        MessageBox.confirm(
            '登录状态已过期，您可以继续留在该页面，或者重新登录',
            '系统提示', {
                confirmButtonText: '重新登录',
                cancelButtonText: '取消',
                type: 'warning'
            }
        ).then(() => {
            store.dispatch('user/logout').then(() => {
                location.reload() // 为了重新实例化vue-router对象 避免bug
            })
        })
    } else if (code !== RESP_STATUS.success) {
        Notification.error({
            title: '提示',
            message: res.msg
        })
        return Promise.reject('error')
    } else {
        return res
    }
}, error => {
    console.log(error)
    let {
        message
    } = error
    if (message === 'Network Error') {
        message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
        message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
        message = '系统接口 ' + message.substr(message.length - 3) + ' 异常'
    }
    Message({
        message: message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export default instance