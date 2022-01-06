import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/my-project/table/list',
    method: 'get',
    params
  })
}
