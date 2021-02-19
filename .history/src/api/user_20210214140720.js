import request from '@/api/request'

export function login(param) {
    return request({
        url: `/user/login`,
        method: 'get',
        params: param
    })
}

export function register(param) {
    return request({
        url: `/user/register`,
        method: 'post',
        data: param
    })
}

export function searchUser(search) {
    return request({
        url: `/user/searchUser?search=${search}`,
        method: 'get',
    })
}

export function delUserById(id) {
    return request({
        url: `/user/delUserById?id=${id}`,
        method: 'post',
    })
}

export function updUserById(param) {
    return request({
        url: `/user/updUserById`,
        method: 'post',
        data: param
    })
}
export function updUserById(param) {
    return request({
        url: `/user/updUserById`,
        method: 'post',
        data: param
    })
}
getAllUser