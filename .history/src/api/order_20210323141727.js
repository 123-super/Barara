import request from "@/api/request"
import axios from "axios"
export function addOrder(param) {
    return request({
        url: `/order/addOrder`,
        method: 'post',
        data: param
    })
}
export function addOrderItem(param) {
    return request({
        url: `/order/addOrderItem`,
        method: 'post',
        data: param
    })
}