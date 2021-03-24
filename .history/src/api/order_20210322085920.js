import request from "@/api/request"
export function addOrder(param) {
    return request({
        url: `/order/account`,
        method: 'post',
        data: param
    })
}