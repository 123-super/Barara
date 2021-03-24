import request from "@/api/request"
import axios from "axios"
export function addOrder(param1, param2) {
    return axios.post('http://localhost:8080/MakeUpShop/order/addOrder', [] param1,
        param2
    })
// return request({
//     url: `/order/addOrder`,
//     method: 'post',
//     data: {
//         param1,
//         param2
//     }
// })
}
// export function addOrderItem(param) {
//     return request({
//         url: `/order/addOrderItem`,
//         method: 'post',
//         data: param
//     })
// }