import useGenres from './useGenres'

// 封装根据ID获取流派对象钩子
const useGenre = (id?: number) => {
  // 获取流派数据/并且别名
  const { data: genres } = useGenres()
  // 通过流派数据结果数组/找到ID相同的数据对象
  return genres?.results.find(g => g.id === id)
}

export default useGenre
