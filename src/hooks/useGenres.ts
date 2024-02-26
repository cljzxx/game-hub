// import useData from './useData'
// 获取本地静态资源
import { useQuery } from '@tanstack/react-query'
import genres from '../data/genres'
import APIClient from '../services/api-client'

// 创建通用请求类实例/指定对象类型/端点参数
const apiClient = new APIClient<Genre>('genres')

// 定义流派对象类型
export interface Genre {
  id: number
  name: string
  image_background: string // 新增图片字段
}

// 流派钩子组件（突变查询/）
const useGenres = () =>
  useQuery({
    queryKey: ['genres'], // 缓存key
    queryFn: apiClient.getAll, // 调用通用请求实例/获取全部数据方法
    staleTime: 24 * 60 * 60 * 1000, // 每24小时更新缓存
    // 初始缓存数据（静态数据）/构建对象形式以满足FetchResponse类型结构
    initialData: genres, // 注释后获取最新的接口数据
  })

export default useGenres
