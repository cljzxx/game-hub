import useData from './useData'
import { GameQuery } from '../App'
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
}
// 游戏钩子组件（返回通用数据钩子结果/游戏查询对象参数）
const useGames = (GameQuery: GameQuery) =>
  // 游戏类型/游戏端点
  useData<Game>(
    '/games',
    {
      params: {
        genres: GameQuery.genre?.id, // 查询参数/流派ID/可选性
        platforms: GameQuery.platform?.id, // 查询参数/平台ID/可选性
      },
    },
    [GameQuery] // 通用数据刷新渲染的数组参数（只要该对象内有变化即触发渲染更新）
  )
// 默认导出hook
export default useGames
