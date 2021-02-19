import request from '@/api/request'
export function getCategory() {
    return request({
        url: `/category/getCategory`,
        method: 'get',
    })
}

export function getProductByCidlimit(cid) {
    return request({
        url: `/category/getProductByCidlimit?cid=${cid}`,
        method: 'get',
    })
}

export function searchC(search) {
    return request({
        url: `/category/search?search=${search}`,
        method: 'get',
    })
}

export function delCategoryById(id) {
    return request({
        url: `/category/delCategoryById?id=${id}`,
        method: 'post',
    })
}

export function updCategoryById(param) {
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