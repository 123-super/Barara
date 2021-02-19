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

export function search(search) {
    return request({
        url: `/category/search?search=${search}`,
        method: 'get',
    })
}

export function delCategoryById(id) {
    return request({
        url: `/category/getProductByCidlimit?cid=${cid}`,
        method: 'get',
    })
}

export function updCategoryById(id) {
    return request({
        url: `/category/getProductByCidlimit?cid=${cid}`,
        method: 'get',
    })
}