import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/my-project/customer/list',
    method: 'get',
    params
  })
}

export function detailCustomer(id) {
  return request({
    url: '/my-project/customer/detail',
    method: 'get',
    params: { id }
  })
}

export function createCustomer(data) {
  return request({
    url: '/my-project/customer/create',
    method: 'post',
    data
  })
}

export function updateCustomer(data) {
  return request({
    url: '/my-project/customer/update',
    method: 'post',
    data
  })
}
