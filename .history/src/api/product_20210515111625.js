import request from '@/api/request'

export function getProductByCid(cid) {
  return request({
    url: `/category/getProductByCid?cid=${cid}`,
    method: 'get',
  })
}

export function getProductById(id) {
  return request({
    url: `/product/getProductById?id=${id}`,
    method: 'get',
  })
}

export function getPVByPidAndPtid(pid) {
  return request({
    url: `/property/getPVByPidAndPtid?pid=${pid}`,
    method: 'get',
  })
}

export function getPVByPId(pid) {
  return request({
    url: `/property/getPVByPId?pid=${pid}`,
    method: 'get',
  })
}

export function search(name) {
  return request({
    url: `/product/search?name=${name}`
  })
}
