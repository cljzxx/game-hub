import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'
import { Genre } from '../hooks/useGenres'
import { Platform } from '../hooks/usePlatforms'

// 定义已选择对象参数
interface Props {
  selectedGenre: Genre | null // 参数类型或者为空类型/即可以传null
  selectedPlatform: Platform | null // 参数类型或者为空类型/即可以传null
}

// 游戏网格布局组件/已选择对象参数
const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  // 使用游戏钩子/传参已选择对象
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform)
  // 为骨架屏模拟的六组数据
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  // 返回视图
  return (
    <>
      {/* 如果有错误则显示错误提示 */}
      {error && <Text>{error}</Text>}
      {/* 简易网格布局/根据屏幕大小控制列数/内边距/间距 */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        // 间距由10变成3
        spacing={3}>
        {/* 加载中则显示骨架屏 */}
        {isLoading &&
          skeletons.map(skeleton => (
            // 容器组件包裹（注意key值）
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map(game => (
          // 容器组件包裹（注意key值）
          <GameCardContainer key={game.id}>
            {/* 游戏卡片组件/传参 */}
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  )
}
export default GameGrid
