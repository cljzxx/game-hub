import useData from './useData'
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
// 游戏钩子组件（返回通用数据钩子/流派类型/流派端点）
const useGames = () => useData<Game>('/games')
// 默认导出hook
export default useGames
