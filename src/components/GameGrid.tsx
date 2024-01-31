import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
// 游戏网格布局函数
const GameGrid = () => {
  const { games, error } = useGames()
  // 返回视图
  return (
    <>
      {/* 如果有错误则显示错误提示 */}
      {error && <Text>{error}</Text>}
      {/* 简易网格布局/根据屏幕大小控制列数/内边距/间距 */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={10}>
        {games.map(game => (
          // 游戏卡片组件/传参（注意map写：key={game.id}）
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}
export default GameGrid
