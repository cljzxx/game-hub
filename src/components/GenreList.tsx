import useGenres from '../hooks/useGenres'
// 流派列表组件
const GenreList = () => {
  // 使用流派钩子
  const { data } = useGenres()
  return (
    <ul>
      {data.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}
export default GenreList
