import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import Seletesort from './components/SortSelector'
import GameHeading from './components/GameHeading'

// 游戏查询对象
export interface GameQuery {
  genreId?: number // 流派对象ID/可选性
  platformId?: number //平台对象ID/可选性
  sortOrder: string // 当前排序值
  searchText: string // 查询内容
}

function App() {
  // 游戏查询状态管理/GameQuery类型/默认空对象并指明是GameQuery的默认结构
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    // 网格布局（注意双大括号）
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr', // 基本/无侧边栏/一个占据空间单位
        lg: '200px 1fr', // 大屏/侧边栏200px/一个占据空间单位
      }}>
      {/* 导航区域 */}
      <GridItem area='nav'>
        <NavBar
          onSearch={searchText => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      {/* Show组件根据条件判断显示 */}
      <Show above='lg'>
        {/* 侧边栏区域/水平内边距 */}
        <GridItem area='aside' paddingX={5}>
          <GenreList
            // 传参：当前的流派ID
            selectedGenreId={gameQuery.genreId}
            // 传参：父级函数/更新当前流派ID
            onSelectGenre={genre =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      {/* 主体区域 */}
      <GridItem area='main'>
        {/* 整体包裹后左边距 */}
        <Box marginLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          {/* 平台选择器组件 */}
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                // 传参：当前平台ID
                selectedPlatformId={gameQuery.platformId}
                // 传参：父级函数/更新当前平台ID
                onSelectPlatform={platform =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <Seletesort
              // 当前排序值
              sortOrder={gameQuery.sortOrder}
              // 回调函数/构建新对象/更新排序值
              onSelectSortOrder={sortOrder =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        {/* 传参给游戏网格组件接收 */}
        <GameGrid
          // 传入当前游戏查询对象
          GameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )
}

export default App
