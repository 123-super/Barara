import request from "@/api/request"
import axios from "axios"
export function addOrder() {
    return axios("http://localhost/8080/makeupshop/order/addOrder")
}
export function addOrderItem(param) {
    return request({
        url: `/order/addOrderItem`,
        method: 'post',
        data: param
    })
}