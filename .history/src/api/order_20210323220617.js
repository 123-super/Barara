import request from "@/api/request"
import axios from "axios"
export function addOrder(param1, param2) {
    return axios.post('http://localhost:8080/MakeUpShop/order/addOrder', {
            param1,
            param2
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        })
        // let params = {
        //     param1,
        //     param2
        // }
        // return request({
        //     url: `/order/addOrder`,
        //     method: 'post',
        //     data: params
        // })
}
// export function addOrderItem(param) {
//     return request({
//         url: `/order/addOrderItem`,
//         method: 'post',
//         data: param
//     })
// }