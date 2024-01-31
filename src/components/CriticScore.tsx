import { Badge } from '@chakra-ui/react'
// 定义参数类型
interface Props {
  score: number
}
// 游戏评分组件
const CriticScore = ({ score }: Props) => {
  // 定义分数区间颜色
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    // 仅文字颜色用color/适应主题用colorScheme
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>
      {score}
    </Badge>
  )
}
export default CriticScore
