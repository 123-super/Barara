import request from '@/api/request'

export function listProduct(data) {
  return request({
    url: `/product/listProduct`,
    method: 'get',
    params: data
  })
}

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

export function getProductImg(pid) {
    return request({
        url: `/product/productImage/${pid}`,
        method: 'get',
    })
}

export function search(name) {
  return request({
    url: `/product/search?name=${name}`
  })
}

export function addProduct(data) {
  return request({
    url: `/product/add`,
    method: 'post',
    data
  })
}

export function updateProduct(data) {
  return request({
    url: `/product/put`,
    method: 'post',
    data
  })
}

export function delProduct(id) {
  return request({
    url: `/product/delete/${id}`,
    method: 'post'
  })
}
