import request from "@/api/request"
import axios from "axios"
export function addOrder(param1, param2) {
    return request({
        url: `/order/addOrder`,
        method: 'post',
        data: {
            Order: param1,
            OrderItem: param2
        }
    })
}
// export function addOrderItem(param) {
//     return request({
//         url: `/order/addOrderItem`,
//         method: 'post',
//         data: param
//     })
// }