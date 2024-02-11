import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'
// 定义游戏查询参数
interface Props {
  gameQuery: GameQuery
}
// 游戏标题组件
const GameHeading = ({ gameQuery }: Props) => {
  // 自定义变量标题（可选性/或为空）
  const heading = `${gameQuery.platform?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`
  return (
    <Heading as={'h1'} marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  )
}

export default GameHeading
