import request from '@/api/request'
export function getCategory() {
    return request({
        url: `/category/getCategory`,
        method: 'get',
    })
}
export function getProductByCid(cid) {
    return request({
        url: `/category/getProductByCid?cid=${cid}`,
        method: 'get',
    })
}