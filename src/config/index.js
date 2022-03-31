/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';//默认是开发模式，如果开发模式为空则传入prod模式
const EnvConfig = {
  dev: {
    baseApi: '/api',
    mockApi: 'https://www.fastmock.site/mock/d049b54f55c8784619ee9d163ee16dac/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/d049b54f55c8784619ee9d163ee16dac/api'
  },
  prod: {
    baseApi: '//futurefe.com/api',
    mockApi: 'https://www.fastmock.site/mock/d049b54f55c8784619ee9d163ee16dac/api'
  }
}
export default {
  env,
  mock: true,
  namespace: 'manager',
  ...EnvConfig[env]
}