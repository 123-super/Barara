import request from '@/api/request'

export function login(param) {
    return request({
        url: `/user/login`,
        method: get,
        params: param
    })
}