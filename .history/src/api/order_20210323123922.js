import request from "@/api/request"
import axios from "axios"
export function addOrder(data) {
    return axios.post("http://localhost/8080/makeupshop/order/addOrder", data)
}
export function addOrderItem(param) {
    return request({
        url: `/order/addOrderItem`,
        method: 'post',
        data: param
    })
}