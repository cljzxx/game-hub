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
      }}>
      {/* 导航区域 */}
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {/* Show组件根据条件判断显示 */}
      <Show above='lg'>
        {/* 侧边栏区域 */}
        <GridItem area='aside'>
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
