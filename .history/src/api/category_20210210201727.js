import request from '@/api/request'
export function getCategory() {
    return request({
        url: `/category/getCategory`,
        method: 'get',
    })
}

export function getProductByCidlimit(cid) {
    return request({
        url: `/category/getProductByCidlimit`,
        method: 'get',
    })
}