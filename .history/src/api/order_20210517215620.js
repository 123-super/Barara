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
export function getOrderUnPay() {
    return request({
        url: `/order/getOrderUnPay`,
        method: 'get',
    })
}
export function getOrdersUnDeliver() {
    return request({
        url: `/order/getOrdersUnDeliver`,
        method: 'get',
    })
}

export function getOrdersUnReceive() {
    return request({
        url: `/order/getOrdersUnReceive`,
        method: 'get',
    })
}
export function getOrdersUnComment() {
    return request({
        url: `/order/getOrdersUnComment`,
        method: 'get',
    })
}
export function delCurrentOrder(param) {
    return request({
        url: `/order/delCurrentOrder?id=${param}`,
        method: 'post',
    })
}
export function getOrderId(param) {
    return request({
        url: `/order/getOrderId?orderNum=${param}`,
        method: 'get'
    })
}
export function updateStatus(param) {
    return request({
        url: `/order/updateStatus?id=${param}`,
        method: 'post'
    })
}
export function updLeftStatus(param) {
    return request({
        url: `/order/updLeftStatus`,
        method: 'post',
        data: param
    })
}

export function addComments(param) {
    return request({
        url: `/order/addComment`,
        method: 'post',
        data: param
    })
}

export function getComment(param) {
    return request({
        url: `/order/getComment?pid=${param}`,
        method: 'get',

    })
}

export function updOrderById(param) {
    return request({
        url: `/order/updOrderById`
    })
}