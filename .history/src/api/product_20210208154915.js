import request from '@/api/request'

export function getProductByCid(cid) {
    return request({
        url: `/category/getProductByCid?cid=${cid}`,
        method: 'get',
    })
}

export function getProductById(id) {
    return request({

    })
}