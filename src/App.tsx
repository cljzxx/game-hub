import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'

function App() {
  return (
    // 网格布局（注意双大括号）
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      {/* 导航区域及背景颜色 */}
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      {/* Show组件根据条件判断显示 */}
      <Show above='lg'>
        {/* 侧边栏区域及背景颜色 */}
        <GridItem area='aside' bg='gold'>
          Aside
        </GridItem>
      </Show>
      {/* 主体区域及背景颜色 */}
      <GridItem area='main' bg='dodgerblue'>
        main
      </GridItem>
    </Grid>
  )
}

export default App
