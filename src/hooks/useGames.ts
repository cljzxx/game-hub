import useData from './useData'
import { Genre } from './useGenres'
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
// 第二参数：配置查询传参/genres/platforms是接口对应的查询参数/可用id值查询（可选性）
// 第三参数：特意给通用数据钩子设置刷新渲染数据用的数组参数/即参数更新重新渲染（可选性）
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  )
// 默认导出hook
export default useGames
