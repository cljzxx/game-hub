import { GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'
import apiClient, { FetchResponse } from '../services/api-client'
export interface Platform {
  id: number
  name: string
  slug: string
}
// 定义游戏对象界面
export interface Game {
  id: number
  name: string
  background_image: string // 图片类型（新增）
  parent_platforms: { platform: Platform }[] // 对象数组/解构对象的属性类型
  metacritic: number // 游戏评分
  rating_top: number // 评级分数
}
// 游戏钩子组件/使用突变查询（游戏查询对象参数）
const useGames = (GameQuery: GameQuery) =>
  useQuery({
    queryKey: ['games', GameQuery], // 缓存key/唯一性
    queryFn: () =>
      // 通用API请求配置端点/返回参数Game类型的FetchResponse类型数据结构
      apiClient
        .get<FetchResponse<Game>>('/games', {
          params: {
            genres: GameQuery.genre?.id, // 查询参数/流派ID/可选性
            parent_platforms: GameQuery.platform?.id, // 父级/查询参数/平台ID/可选性
            ordering: GameQuery.sortOrder, // 查询参数/排序值
            search: GameQuery.searchText, // 查询参数/搜索标题
          },
        })
        .then(res => res.data.results), // 返回结果对象
  })

// 默认导出hook
export default useGames
