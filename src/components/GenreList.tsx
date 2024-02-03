import useGenres from '../hooks/useGenres'
// 类型列表组件
const GenreList = () => {
  // 自定义类型状态钩子
  const { genres } = useGenres()
  return (
    <ul>
      {genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList
