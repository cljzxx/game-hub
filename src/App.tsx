import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'

function App() {
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
          <GenreList />
        </GridItem>
      </Show>
      {/* 主体区域 */}
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
