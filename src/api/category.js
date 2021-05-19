import request from '@/api/request'

export function listCategory(data) {
    return request({
        url: `/category/getCategory`,
        method: 'get',
        params: data
    })
}

export function getCategory(cid) {
    return request({
        url: `/category/getCategoryById?cid=${cid}`,
        method: 'get'
    })
}

export function getProductByCidlimit(cid) {
    return request({
        url: `/category/getProductByCidlimit?cid=${cid}`,
        method: 'get',
    })
}

export function delCategory(id) {
    return request({
        url: `/category/delCategoryById?id=${id}`,
        method: 'post',
    })
}

export function updateCategory(param) {
    return request({
        url: `/category/updCategoryById`,
        method: 'post',
        data: param
    })
}


export function addCategory(param) {
    return request({
        url: `/category/addCategory`,
        method: 'post',
        data: param
    })
}