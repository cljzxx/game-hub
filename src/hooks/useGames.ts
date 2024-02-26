import { GameQuery } from '../App'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms'
import APIClient from '../services/api-client'
import ms from 'ms'

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
  // 无限突变查询方法
  useInfiniteQuery({
    queryKey: ['games', GameQuery], // 缓存key/唯一性
    // 获取配置查询条件后的数据返回值/翻页参数
    queryFn: ({ pageParam }) =>
      // 通用请求实例/根据配置查询条件获取数据
      apiClient.getAll({
        params: {
          genres: GameQuery.genreId, // 查询参数/流派ID
          parent_platforms: GameQuery.platformId, // 父级字段/查询参数/平台ID
          ordering: GameQuery.sortOrder, // 查询参数/排序值
          search: GameQuery.searchText, // 查询参数/搜索标题
          page: pageParam, // 翻页参数
        },
      }),
    initialPageParam: 1, // 初始化页数
    // 获取下一页方法/参数：最后一页和全部页面集合
    getNextPageParam: (lastPage, allPages) => {
      // 如果最后一页存在下一页/则继续全部页面集合长度+1/否则未定义
      return lastPage.next ? allPages.length + 1 : undefined
    },
    staleTime: ms('24h'), // 每24小时更新缓存
  })

// 默认导出hook
export default useGames
