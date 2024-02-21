import axios, { AxiosRequestConfig } from 'axios'

// 获取响应的数据类型结构/可根据实际需求增减字段（通用类型<T>参数）
export interface FetchResponse<T> {
  count: number
  results: T[] // 例如：Genre[]
}

// 导出定义常量/请求参数配置
const axiosInstance = axios.create({
  // 基础请求地址
  baseURL: 'https://api.rawg.io/api',
  // 携带参数（API的Key）
  params: {
    key: '49e9fab7b38841b1895e96d11f4d0693',
  },
})

// 定义通用请求类/通用对象类型
class APIClient<T> {
  endpoint: string // 定义端点变量及类型
  // 构造函数/接收参数：端点变量及类型
  constructor(endpoint: string) {
    // 初始化当前端点来自于接收参数端点
    this.endpoint = endpoint
  }
  // 请求全部方法/箭头函数this可用/接收参数：config是查询配置/AxiosRequestConfig是自带类型
  getAll = (config: AxiosRequestConfig) => {
    // 返回值/自定义请求get方法/通用响应类型结构带参通用对象类型/参数：当前端点和查询配置
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data) // 异步响应数据
  }
}

// 导出通用请求类
export default APIClient
