import request from '@/api/request'
export function getCategory() {
    return request({
        url: `/category/getCategory`,
        method: 'get',
    })
}
export function getProduct(cid) {
    return request({
        url: `/category/getProduct?cid=${cid}`,
        method: 'get',
    })
}