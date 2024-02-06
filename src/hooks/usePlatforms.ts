import useData from './useData'
// 定义接口参数及类型
export interface Platform {
  id: number
  name: string
  slug: string
}
// 定义平台钩子组件（调用通用数据钩子及获取数据类型）
const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
// 导出默认钩子组件
export default usePlatforms
