import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'

// 游戏查询对象
export interface GameQuery {
  genre: Genre | null // 流派对象
  platform: Platform | null //平台对象
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
        <NavBar />
      </GridItem>
      {/* Show组件根据条件判断显示 */}
      <Show above='lg'>
        {/* 侧边栏区域/水平内边距 */}
        <GridItem area='aside' paddingX={5}>
          <GenreList
            // 传入当前游戏查询对象的属性流派对象
            selectedGenre={gameQuery.genre}
            // 回调函数/点击事件返回已选择参数/更新游戏查询对象的属性流派对象
            onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      {/* 主体区域 */}
      <GridItem area='main'>
        {/* 平台选择器组件 */}
        <PlatformSelector
          // 传入当前游戏查询对象的属性平台对象
          selectedPlatform={gameQuery.platform}
          // 回调函数/点击事件返回已选择参数/更新游戏查询对象的属性平台对象
          onSelectPlatform={platform =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
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
