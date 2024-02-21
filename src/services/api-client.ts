import axios from 'axios'

// 获取响应的数据类型结构/可根据实际需求增减字段（通用类型<T>参数）
export interface FetchResponse<T> {
  count: number
  results: T[] // 例如：Genre[]
}

// 导出默认/自定义请求方法
export default axios.create({
  // 基础请求地址
  baseURL: 'https://api.rawg.io/api',
  // 携带参数（API的Key）
  params: {
    key: '49e9fab7b38841b1895e96d11f4d0693',
  },
})
