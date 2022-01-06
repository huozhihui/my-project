const Mock = require('mockjs')

const List = []
const count = 30

const phonePrefix = ['132', '135', '189']
const index = Math.floor(Math.random() * phonePrefix.length)

for (let i = 0; i < count; i++) {
  var phone = phonePrefix[index] + Mock.mock(/\d{8}/)
  List.push(Mock.mock({
    id: '@increment',
    name: Mock.Random.cname(),
    // 'phone|1':['13531544954','13632250649','15820292420','15999905612'],
    'phone|1':phone,
    'city|1': ['北京','上海','广州','深圳','其他'],
    address: Mock.mock('@county(true)'),
    note: '@first',

    // timestamp: +Mock.Random.date('T'),
    // author: '@first',
    // reviewer: '@first',
    // title: '@title(5, 10)',
    // content_short: 'mock data',
    // content: baseContent,
    // forecast: '@float(0, 100, 2, 2)',
    // importance: '@integer(1, 3)',
    // 'type|1': ['CN', 'US', 'JP', 'EU'],
    // 'status|1': ['published', 'draft'],
    // display_time: '@datetime',
    // comment_disabled: true,
    // pageviews: '@integer(300, 5000)',
    // image_uri,
    // platforms: ['a-platform']
  }))
}


module.exports = [
  {
    url: '/my-project/customer/list',
    type: 'get',
    response: config => {
      const { name, phone, city, address, page = 1, limit = 20, sort } = config.query

      let mockList = List.filter(item => {
        if (name && item.name !== name) return false
        if (phone && item.phone !== phone) return false
        if (city && item.city !== city) return false
        if (address && item.address.indexOf(address) < 0) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/my-project/customer/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/my-project/customer/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
