import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { GameQuery } from '../App'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardContainer from './GameCardContainer'
import GameCardSkeleton from './GameCardSkeleton'

// 参数对象
interface Props {
  GameQuery: GameQuery // 游戏查询对象/类型
}

// 游戏网格布局组件/游戏查询对象参数
const GameGrid = ({ GameQuery }: Props) => {
  // 使用游戏钩子/传入游戏查询对象
  const {
    data,
    error,
    isLoading,
    fetchNextPage, // 请求下一页方法
    isFetchingNextPage, // 是否正在请求下一页中
    hasNextPage, // 还有下一页
  } = useGames(GameQuery)
  // 为骨架屏模拟的六组数据
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

  // 如果有错误则显示错误信息（JSX）
  if (error) return <Text>{error.message}</Text>

  // 请求数据长度/常量：获取游戏计数/翻页数据/reduce方法将此页面数组简化为一个数字/代表游戏总数
  const fetchedGamesCount =
    data?.pages.reduce(
      // 第一个参数是累加器即当前总数/第二个参数是这个数组中的一个元素
      (total, page) => total + page.results.length, // 当前总数+每一页数据的长度
      0 // 起始值
    ) || 0 // 默认值：如果出现未定义类型则指向数字类型

  // 返回视图
  return (
    // 无限滚动组件包
    <InfiniteScroll
      dataLength={fetchedGamesCount} // 当前数据长度
      hasMore={hasNextPage} // 布尔值：是否还有更多（遇到有布尔值和未定义同时存在的属性类型时可以加!!双叹号指定类型）
      next={() => fetchNextPage()} // 触发获取下一页
      loader={<Spinner />} // 加载效果
    >
      {/* 简易网格布局/根据屏幕大小控制列数/内边距/间距 */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        // 间距
        spacing={6}
        padding='10px'>
        {/* 加载中则显示骨架屏 */}
        {isLoading &&
          skeletons.map(skeleton => (
            // 容器组件包裹（注意key值）
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map(game => (
              <GameCardContainer key={game.id}>
                {/* 游戏卡片组件/传参 */}
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}
export default GameGrid
