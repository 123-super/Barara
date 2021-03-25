import request from "@/api/request"
import axios from "axios"
// export function addOrder(param1, param2) {
//     return axios.post('http://localhost:8080/MakeUpShop/order/addOrder', {
//             param1,
//             param2
//         })
// let params = {
//     param1,
//     param2
// }
// return request({
//     url: `/order/addOrder`,
//     method: 'post',
//     data: params
// })
// }

export function addOrderItem(param) {
    return request({
        url: `/order/addOrderItem`,
        method: 'post',
        data: param
    })
}
export function addOrder(param) {
    return request({
        url: `/order/addOrder`,
        method: 'post',
        data: param
    })
}
export function getMyOrder() {
    return request({
        url: `/order/getMyOrder`,
        method: 'get',
    })
}
export function delCurrentOrder(param) {
    return request({
        url: `/order/deldelCurrentOrder?id=${param}`
    })
}