// import useData from './useData'
// 获取静态数据
import { useQuery } from '@tanstack/react-query'
import platforms from '../data/platforms'
import apiClient, { FetchResponse } from '../services/api-client'
// 定义接口参数及类型
export interface Platform {
  id: number
  name: string
  slug: string
}
// 定义平台钩子组件（调用通用数据钩子及获取数据类型）
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
// 返回静态数据
// const usePlatforms = () => ({ data: platforms, error: null })

// 定义平台钩子组件/使用突变查询
const usePlatforms = () =>
  useQuery({
    queryKey: ['platform'], // 缓存key
    queryFn: () =>
      // 通用API请求配置端点/返回参数Platform类型的FetchResponse类型数据结构
      apiClient
        .get<FetchResponse<Platform>>('/platforms/lists/parents')
        .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24小时
    // 初始化数据（静态数据）/构建对象形式以满足FetchResponse类型数据结构
    initialData: { count: platforms.length, results: platforms },
  })

// 导出默认钩子组件
export default usePlatforms
