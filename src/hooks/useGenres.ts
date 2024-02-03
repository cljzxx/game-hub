import useData from './useData'
// 定义流派对象界面
export interface Genre {
  id: number
  name: string
  image_background: string // 新增图片字段
}
// 流派钩子组件（返回通用数据钩子/流派类型/流派端点）
const useGenres = () => useData<Genre>('/genres')

export default useGenres
