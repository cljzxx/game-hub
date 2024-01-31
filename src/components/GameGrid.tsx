import { Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'

// 游戏网格布局函数
const GameGrid = () => {
  const { games, error } = useGames()
  // 返回视图
  return (
    <>
      {/* 如果有错误则显示错误提示 */}
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  )
}

export default GameGrid
