import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'

function App() {
  // 流派选中状态/指定对象流派类型/默认空对象即未选中/空类型要定义
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)

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
            // 传参已选择对象给游戏列表组件接收
            selectedGenre={selectedGenre}
            // 回调函数/点击事件返回已选择参数/更新已选择状态数据
            onSelectGenre={genre => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      {/* 主体区域 */}
      <GridItem area='main'>
        {/* 平台选择器组件 */}
        <PlatformSelector />
        {/* 传参已选择对象给游戏网格组件接收 */}
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  )
}

export default App
