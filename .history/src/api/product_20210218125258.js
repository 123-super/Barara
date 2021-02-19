import request from '@/api/request'

export function getProductByCid(cid) {
    return request({
        url: `/category/getProductByCid?cid=${cid}`,
        method: 'get',
    })
}

export function getProductById(id) {
    return request({
        url: `/product/getProductById?id=${id}`,
        method: 'get',
    })
}

export function getPVByPidAndPtid(param) {
    return request({
        url: `/product/getPVByPidAndPtid`,
        method: 'get',
        params: param
    })
}

export function getPVByPId(pid) {
    return request({
        url: `/property/getPVByPId`,
        method: 'get',
    })
}