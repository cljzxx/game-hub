import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Game } from '../hooks/useGames' // 引入hooks导出的Game界面
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
// 定义参数界面类型
interface Props {
  game: Game // 注意：background_image: string 图片类型
}
// 游戏卡片组件
const GameCard = ({ game }: Props) => {
  return (
    // 卡片圆角及溢出隐藏
    <Card borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <CardBody>
        {/* 标题字体大小 */}
        <Heading fontSize='2xl'>{game.name}</Heading>

        <HStack justifyContent='space-between'>
          {/* 平台图标列表组件（新数组传参：原数组map优化嵌套结构） */}
          <PlatformIconList
            platforms={game.parent_platforms.map(p => p.platform)}
          />
          {/* 游戏评分组件 */}
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  )
}
export default GameCard
