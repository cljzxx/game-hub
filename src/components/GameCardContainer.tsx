import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
// 容器组件
const GameCardContainer = ({ children }: Props) => {
  return (
    // 用<Box>加样式来包裹内容（卡片圆角及溢出隐藏）
    <Box width='300px' borderRadius={10} overflow='hidden'>
      {children}
    </Box>
  )
}

export default GameCardContainer
