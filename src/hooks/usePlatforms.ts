// import useData from './useData'
// 获取静态数据
import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import APIClient from '../services/api-client'

// 创建通用请求类实例/指定对象类型/端点参数
const apiClient = new APIClient<Platform>('/platforms/lists/parents')

// 定义接口参数及类型
export interface Platform {
  id: number
  name: string
  slug: string
}

// 定义平台钩子组件/使用突变查询
const usePlatforms = () =>
  useQuery({
    queryKey: ['platform'], // 缓存key
    queryFn: apiClient.getAll, // 调用通用请求实例/获取全部数据方法
    staleTime: 24 * 60 * 60 * 1000, // 24小时
    // 初始化数据（静态数据）/构建对象形式以满足FetchResponse类型数据结构
    initialData: platforms, // 注释后获取最新的接口数据
  })

// 导出默认钩子组件
export default usePlatforms
