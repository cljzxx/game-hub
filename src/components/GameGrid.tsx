import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
// 游戏网格布局函数
const GameGrid = () => {
  // 自定义游戏状态钩子
  const { games, error, isLoading } = useGames()
  // 为骨架屏模拟的六组数据
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  // 返回视图
  return (
    <>
      {/* 如果有错误则显示错误提示 */}
      {error && <Text>{error}</Text>}
      {/* 简易网格布局/根据屏幕大小控制列数/内边距/间距 */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={10}>
        {/* 加载中则显示骨架屏 */}
        {isLoading &&
          skeletons.map(skeleton => (
            // 容器组件包裹
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map(game => (
          // 容器组件包裹
          <GameCardContainer>
            {/* 游戏卡片组件/传参（注意map写：key={game.id}） */}
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}
export default GameGrid
