// import useData from './useData'
// 获取本地静态资源
import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import apiClient, { FetchResponse } from '../services/api-client'

// 定义流派对象类型
export interface Genre {
  id: number
  name: string
  image_background: string // 新增图片字段
}
// 流派钩子组件（返回通用数据钩子/流派类型/流派端点）
// const useGenres = () => useData<Genre>('/genres')
// 返回静态对象资源
// const useGenres = () => ({ data: genres, isLoading: false, error: null })
// 流派钩子组件（突变查询/）
const useGenres = () =>
  useQuery({
    queryKey: ['genres'], // 缓存key
    queryFn: () =>
      // 通用API请求配置端点/返回参数Genre类型的FetchResponse类型对象数据结构
      apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 每24小时更新缓存
    // 初始缓存数据（静态数据）/构建对象形式以满足FetchResponse类型结构
    initialData: { count: genres.length, results: genres },
  })

export default useGenres
