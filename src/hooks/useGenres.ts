// import useData from './useData'
// 获取本地静态资源
import genres from '../data/genres'
// 定义流派对象界面
export interface Genre {
  id: number
  name: string
  image_background: string // 新增图片字段
}
// 流派钩子组件（返回通用数据钩子/流派类型/流派端点）
// const useGenres = () => useData<Genre>('/genres')
// 返回静态对象资源
const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres
