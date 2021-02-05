import request from '@/api/request'
export function getCategory() {
    return request({
        url: `/category/getCategory`,
        method: 'get',
    })
}
export function getProduct() {
    return request({
        url: `/category/getProduct?cid=$`,
        method: 'get',
    })
}