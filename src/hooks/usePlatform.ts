import usePlatforms from './usePlatforms'

// 封装根据ID获取平台对象钩子
const usePlatform = (id?: number) => {
  // 获取平台数据/并且别名
  const { data: platforms } = usePlatforms()
  // 通过平台数据结果数组/找到ID相同的数据对象
  return platforms?.results.find(p => p.id === id)
}

export default usePlatform
