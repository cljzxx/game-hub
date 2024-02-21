import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { GameQuery } from '../App'

// 参数对象
interface Props {
  GameQuery: GameQuery // 游戏查询对象/类型
}

// 游戏网格布局组件/游戏查询对象参数
const GameGrid = ({ GameQuery }: Props) => {
  // 使用游戏钩子/传入游戏查询对象
  const { data, error, isLoading } = useGames(GameQuery)
  // 为骨架屏模拟的六组数据
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  // 如果有错误则显示错误信息（JSX）
  if (error) return <Text>{error.message}</Text>

  // 返回视图
  return (
    // 简易网格布局/根据屏幕大小控制列数/内边距/间距
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding='10px'
      // 间距
      spacing={6}>
      {/* 加载中则显示骨架屏 */}
      {isLoading &&
        skeletons.map(skeleton => (
          // 容器组件包裹（注意key值）
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data?.results.map(game => (
        // 容器组件包裹（注意key值）
        <GameCardContainer key={game.id}>
          {/* 游戏卡片组件/传参 */}
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  )
}
export default GameGrid
