import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
import useGenres from '../hooks/useGenres'
import usePlatform from '../hooks/usePlatform'
import useGenre from '../hooks/useGenre'
// 定义游戏查询参数
interface Props {
  gameQuery: GameQuery
}
// 游戏标题组件
const GameHeading = ({ gameQuery }: Props) => {
  // 使用钩子：传参ID获取流派对象
  const genre = useGenre(gameQuery.genreId)
  // 使用钩子：传参ID获取平台对象
  const platform = usePlatform(gameQuery.platformId)

  // 自定义变量标题（可选性/或为空）
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`
  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  )
}

export default GameHeading
