import { GameQuery } from '../App'
import { useQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms'
import APIClient from '../services/api-client'

// 创建通用请求类实例/指定对象类型/端点参数
const apiClient = new APIClient<Game>('/games')

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
    // 获取配置查询条件后的数据返回值
    queryFn: () =>
      // 通用请求实例/根据配置查询条件获取数据
      apiClient.getAll({
        params: {
          genres: GameQuery.genre?.id, // 查询参数/流派ID/可选性
          parent_platforms: GameQuery.platform?.id, // 父级字段/查询参数/平台ID/可选性
          ordering: GameQuery.sortOrder, // 查询参数/排序值
          search: GameQuery.searchText, // 查询参数/搜索标题
        },
      }),
  })

// 默认导出hook
export default useGames
