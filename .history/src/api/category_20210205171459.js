import request from '@/api/request'
export function getCategory() {
    return request({
        url: `/category/getCategory`,
        method: 'get',
    })
}